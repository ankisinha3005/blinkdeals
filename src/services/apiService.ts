// ==================== API SERVICE ====================
// This file contains all backend API calls
// Handles communication with the BlinkDeals backend server
// =====================================================

const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-backend-domain.com' 
  : 'http://localhost:3001';

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message: string;
  errors?: string[];
  code?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  images?: string[];
  stock: number;
  category: string;
  details?: Record<string, string>;
  seller?: {
    name: string;
    rating: number;
    totalSales: number;
    description: string;
    joinedDate: string;
  };
  variantType?: 'size' | 'weight' | 'quantity' | 'color';
  variants?: Array<{
    id: string;
    label: string;
    price: number;
    originalPrice: number;
    stock: number;
    isDefault?: boolean;
  }>;
  createdAt?: string;
  updatedAt?: string;
}

interface UserProfile {
  id: string;
  name: string;
  phone: string;
  email?: string;
  gender?: 'male' | 'female' | 'other';
  createdAt: string;
  updatedAt: string;
}

interface Address {
  id: string;
  userId: string;
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  isDefault?: boolean;
  createdAt: string;
  updatedAt?: string;
}

interface Order {
  id: string;
  userId: string;
  productId: number;
  productName: string;
  productImage: string;
  price: number;
  quantity: number;
  status: 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  orderDate: string;
  deliveredDate?: string;
  cancelledDate?: string;
  hasReview: boolean;
  variantId?: string;
  variantLabel?: string;
  variantType?: 'size' | 'weight' | 'quantity' | 'color';
  address: Address;
  payment?: {
    method: string;
    id: string;
    status: string;
  };
}

interface Sale {
  id: string;
  name: string;
  startTime: string;
  endTime: string;
  status: 'upcoming' | 'active' | 'ended';
  description: string;
}

class ApiService {
  private baseURL: string;

  constructor() {
    this.baseURL = API_BASE_URL;
  }

  /**
   * Get authentication headers with token
   */
  private getAuthHeaders(): HeadersInit {
    const token = localStorage.getItem('auth_token');
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }

  /**
   * Make HTTP request with error handling
   */
  private async makeRequest<T>(
    endpoint: string, 
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const url = `${this.baseURL}${endpoint}`;
      const response = await fetch(url, {
        ...options,
        headers: {
          ...this.getAuthHeaders(),
          ...options.headers,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `HTTP ${response.status}`);
      }

      return data;
    } catch (error: any) {
      console.error('API request failed:', error);
      return {
        success: false,
        message: error.message || 'Network error occurred',
        code: 'NETWORK_ERROR'
      };
    }
  }

  // ==================== PRODUCTS API ====================

  /**
   * Get all products
   */
  async getProducts(): Promise<ApiResponse<Product[]>> {
    return this.makeRequest<Product[]>('/api/products');
  }

  /**
   * Get product by ID
   */
  async getProduct(id: number): Promise<ApiResponse<Product>> {
    return this.makeRequest<Product>(`/api/products/${id}`);
  }

  // ==================== USER API ====================

  /**
   * Get user profile
   */
  async getUserProfile(): Promise<ApiResponse<UserProfile>> {
    return this.makeRequest<UserProfile>('/api/user/profile');
  }

  /**
   * Update user profile
   */
  async updateUserProfile(profileData: Partial<UserProfile>): Promise<ApiResponse<UserProfile>> {
    return this.makeRequest<UserProfile>('/api/user/profile', {
      method: 'PUT',
      body: JSON.stringify(profileData),
    });
  }

  /**
   * Get user addresses
   */
  async getUserAddresses(): Promise<ApiResponse<Address[]>> {
    return this.makeRequest<Address[]>('/api/user/addresses');
  }

  /**
   * Add new address
   */
  async addAddress(addressData: Omit<Address, 'id' | 'userId' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<Address>> {
    return this.makeRequest<Address>('/api/user/addresses', {
      method: 'POST',
      body: JSON.stringify(addressData),
    });
  }

  /**
   * Update address
   */
  async updateAddress(id: string, addressData: Partial<Address>): Promise<ApiResponse<Address>> {
    return this.makeRequest<Address>(`/api/user/addresses/${id}`, {
      method: 'PUT',
      body: JSON.stringify(addressData),
    });
  }

  /**
   * Delete address
   */
  async deleteAddress(id: string): Promise<ApiResponse<void>> {
    return this.makeRequest<void>(`/api/user/addresses/${id}`, {
      method: 'DELETE',
    });
  }

  // ==================== ORDERS API ====================

  /**
   * Get user orders
   */
  async getUserOrders(): Promise<ApiResponse<Order[]>> {
    return this.makeRequest<Order[]>('/api/orders');
  }

  /**
   * Get order by ID
   */
  async getOrder(id: string): Promise<ApiResponse<Order>> {
    return this.makeRequest<Order>(`/api/orders/${id}`);
  }

  /**
   * Create new order
   */
  async createOrder(orderData: {
    productId: number;
    quantity: number;
    variantId?: string;
    addressId: string;
  }): Promise<ApiResponse<Order>> {
    return this.makeRequest<Order>('/api/orders', {
      method: 'POST',
      body: JSON.stringify(orderData),
    });
  }

  /**
   * Cancel order
   */
  async cancelOrder(id: string): Promise<ApiResponse<Order>> {
    return this.makeRequest<Order>(`/api/orders/${id}/cancel`, {
      method: 'PUT',
    });
  }

  // ==================== SALES API ====================

  /**
   * Get current sale
   */
  async getCurrentSale(): Promise<ApiResponse<Sale>> {
    return this.makeRequest<Sale>('/api/sales/current');
  }

  /**
   * Get sale timer
   */
  async getSaleTimer(): Promise<ApiResponse<{
    timeLeft: number;
    status: 'upcoming' | 'active' | 'ended';
  }>> {
    return this.makeRequest('/api/sales/timer');
  }

  // ==================== PAYMENTS API ====================

  /**
   * Create payment order
   */
  async createPaymentOrder(orderId: string, amount: number): Promise<ApiResponse<{
    orderId: string;
    amount: number;
    currency: string;
    key: string;
    name: string;
    description: string;
    prefill: {
      name: string;
      email: string;
      contact: string;
    };
    notes: Record<string, string>;
    theme: {
      color: string;
    };
  }>> {
    return this.makeRequest('/api/payments/create-order', {
      method: 'POST',
      body: JSON.stringify({ orderId, amount }),
    });
  }

  /**
   * Verify payment
   */
  async verifyPayment(paymentData: {
    razorpay_order_id: string;
    razorpay_payment_id: string;
    razorpay_signature: string;
  }): Promise<ApiResponse<void>> {
    return this.makeRequest('/api/payments/verify', {
      method: 'POST',
      body: JSON.stringify(paymentData),
    });
  }

  // ==================== SELLERS API ====================

  /**
   * Submit seller application
   */
  async submitSellerApplication(applicationData: {
    email: string;
    phone: string;
    businessName: string;
    businessType: string;
    experience: string;
    message: string;
  }): Promise<ApiResponse<void>> {
    return this.makeRequest('/api/sellers/apply', {
      method: 'POST',
      body: JSON.stringify(applicationData),
    });
  }

  // ==================== CONTENT API ====================

  /**
   * Get all blog posts
   */
  async getBlogPosts(options?: {
    category?: string;
    limit?: number;
    offset?: number;
  }): Promise<ApiResponse<Array<{
    id: number;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    tags: string[];
    imageUrl: string;
    slug?: string;
  }>>> {
    const params = new URLSearchParams();
    if (options?.category) params.append('category', options.category);
    if (options?.limit) params.append('limit', options.limit.toString());
    if (options?.offset) params.append('offset', options.offset.toString());
    
    const queryString = params.toString();
    return this.makeRequest(`/api/content/blog${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * Get blog post by ID
   */
  async getBlogPost(id: number): Promise<ApiResponse<{
    id: number;
    title: string;
    excerpt: string;
    content?: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    tags: string[];
    imageUrl: string;
    slug?: string;
  }>> {
    return this.makeRequest(`/api/content/blog/${id}`);
  }

  /**
   * Get all press releases
   */
  async getPressReleases(options?: {
    category?: string;
    limit?: number;
    offset?: number;
  }): Promise<ApiResponse<Array<{
    id: number;
    title: string;
    date: string;
    category: string;
    excerpt: string;
    author: string;
    slug?: string;
  }>>> {
    const params = new URLSearchParams();
    if (options?.category) params.append('category', options.category);
    if (options?.limit) params.append('limit', options.limit.toString());
    if (options?.offset) params.append('offset', options.offset.toString());
    
    const queryString = params.toString();
    return this.makeRequest(`/api/content/press${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * Get press release by ID
   */
  async getPressRelease(id: number): Promise<ApiResponse<{
    id: number;
    title: string;
    date: string;
    category: string;
    excerpt: string;
    content?: string;
    author: string;
    slug?: string;
  }>> {
    return this.makeRequest(`/api/content/press/${id}`);
  }

  /**
   * Get all job openings
   */
  async getJobOpenings(options?: {
    department?: string;
    location?: string;
    type?: string;
    limit?: number;
    offset?: number;
  }): Promise<ApiResponse<Array<{
    id: number;
    title: string;
    department: string;
    location: string;
    type: string;
    experience: string;
    postedDate: string;
    description: string;
    responsibilities: string[];
    requirements: string[];
    skills: string[];
    salaryRange?: string;
    applicationUrl?: string;
  }>>> {
    const params = new URLSearchParams();
    if (options?.department) params.append('department', options.department);
    if (options?.location) params.append('location', options.location);
    if (options?.type) params.append('type', options.type);
    if (options?.limit) params.append('limit', options.limit.toString());
    if (options?.offset) params.append('offset', options.offset.toString());
    
    const queryString = params.toString();
    return this.makeRequest(`/api/content/careers${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * Get job opening by ID
   */
  async getJobOpening(id: number): Promise<ApiResponse<{
    id: number;
    title: string;
    department: string;
    location: string;
    type: string;
    experience: string;
    postedDate: string;
    description: string;
    responsibilities: string[];
    requirements: string[];
    skills: string[];
    salaryRange?: string;
    applicationUrl?: string;
  }>> {
    return this.makeRequest(`/api/content/careers/${id}`);
  }

  /**
   * Get content page by slug
   */
  async getContentPage(slug: string): Promise<ApiResponse<{
    id: number;
    slug: string;
    title: string;
    content: string;
    metaDescription?: string;
  }>> {
    return this.makeRequest(`/api/content/pages/${slug}`);
  }

  // ==================== HEALTH CHECK ====================

  /**
   * Check API health
   */
  async checkHealth(): Promise<ApiResponse<{
    server: string;
    database: string;
    auth: string;
  }>> {
    return this.makeRequest('/test');
  }
}

// Export singleton instance
export const apiService = new ApiService();
export default apiService;
