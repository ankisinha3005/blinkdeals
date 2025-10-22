import { useState, useEffect } from 'react';
import { ArrowLeft, Package, Star, Calendar, CheckCircle, XCircle, MessageSquare, Ruler, Weight, Package2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Textarea } from './ui/textarea';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { formatCurrency, COLORS, GRADIENTS } from '../constants';
import { motion } from 'motion/react';
import { apiService } from '../services/apiService';

interface Order {
  id: string;
  productId: number;
  productName: string;
  productImage: string;
  price: number;
  quantity: number;
  status: 'delivered' | 'cancelled';
  orderDate: string;
  deliveredDate?: string;
  cancelledDate?: string;
  hasReview: boolean;
  // Variant information
  variantId?: string;
  variantLabel?: string;
  variantType?: 'size' | 'weight' | 'quantity' | 'color';
}

interface OrdersPageProps {
  onBack: () => void;
}

// Mock orders data with variants
const mockOrders: Order[] = [
  {
    id: 'ORD001',
    productId: 1,
    productName: 'Premium Wireless Headphones',
    productImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    price: 2499,
    quantity: 1,
    status: 'delivered',
    orderDate: '2025-10-10',
    deliveredDate: '2025-10-15',
    hasReview: false
  },
  {
    id: 'ORD002',
    productId: 11,
    productName: 'Premium Cotton T-Shirt',
    productImage: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    price: 499,
    quantity: 2,
    status: 'delivered',
    orderDate: '2025-10-05',
    deliveredDate: '2025-10-12',
    hasReview: true,
    variantId: 'm',
    variantLabel: 'M',
    variantType: 'size'
  },
  {
    id: 'ORD003',
    productId: 12,
    productName: 'Organic Basmati Rice',
    productImage: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop',
    price: 850,
    quantity: 1,
    status: 'delivered',
    orderDate: '2025-10-08',
    deliveredDate: '2025-10-14',
    hasReview: false,
    variantId: '5kg',
    variantLabel: '5 kg',
    variantType: 'weight'
  },
  {
    id: 'ORD004',
    productId: 13,
    productName: 'Stainless Steel Water Bottle',
    productImage: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop',
    price: 1399,
    quantity: 1,
    status: 'delivered',
    orderDate: '2025-09-28',
    deliveredDate: '2025-10-03',
    hasReview: false,
    variantId: 'family',
    variantLabel: 'Pack of 4',
    variantType: 'quantity'
  },
  {
    id: 'ORD005',
    productId: 11,
    productName: 'Premium Cotton T-Shirt',
    productImage: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    price: 549,
    quantity: 1,
    status: 'cancelled',
    orderDate: '2025-09-25',
    cancelledDate: '2025-09-26',
    hasReview: false,
    variantId: 'xl',
    variantLabel: 'XL',
    variantType: 'size'
  },
  {
    id: 'ORD006',
    productId: 12,
    productName: 'Organic Basmati Rice',
    productImage: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop',
    price: 180,
    quantity: 3,
    status: 'delivered',
    orderDate: '2025-09-20',
    deliveredDate: '2025-09-25',
    hasReview: true,
    variantId: '1kg',
    variantLabel: '1 kg',
    variantType: 'weight'
  }
];

export function OrdersPage({ onBack }: OrdersPageProps) {
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const [loading, setLoading] = useState(false);
  const [reviewingOrderId, setReviewingOrderId] = useState<string | null>(null);
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const response = await apiService.getUserOrders();
        if (response.success && response.data) {
          setOrders(response.data);
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
        // Keep hardcoded data as fallback
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleSubmitReview = (orderId: string) => {
    // TODO: Submit review to backend
    console.log('Review submitted for order:', orderId, { rating, reviewText });
    setReviewingOrderId(null);
    setReviewText('');
    setRating(0);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    });
  };

  // Get variant icon based on type
  const getVariantIcon = (type?: string) => {
    switch (type) {
      case 'size':
        return <Ruler className="w-3.5 h-3.5" />;
      case 'weight':
        return <Weight className="w-3.5 h-3.5" />;
      case 'quantity':
        return <Package2 className="w-3.5 h-3.5" />;
      default:
        return null;
    }
  };

  // Get variant display text
  const getVariantDisplayText = (order: Order) => {
    if (!order.variantLabel) return null;
    
    switch (order.variantType) {
      case 'size':
        return `Size: ${order.variantLabel}`;
      case 'weight':
        return `Weight: ${order.variantLabel}`;
      case 'quantity':
        return order.variantLabel;
      case 'color':
        return `Color: ${order.variantLabel}`;
      default:
        return order.variantLabel;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back</span>
            </button>
            <h1 className={`${GRADIENTS.primary} bg-clip-text text-transparent`}>
              My Orders
            </h1>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Orders Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {orders.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-gray-600 mb-2">No orders yet</h3>
            <p className="text-gray-500 text-sm">Your order history will appear here</p>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {orders.map((order, index) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-white/80 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-100">
                        <ImageWithFallback
                          src={order.productImage}
                          alt={order.productName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Order Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <h3 className="text-gray-900 mb-1">{order.productName}</h3>
                          
                          {/* Variant Information */}
                          {order.variantLabel && (
                            <div className="flex items-center gap-1.5 mb-1">
                              <Badge 
                                variant="outline" 
                                className={`text-xs ${
                                  order.variantType === 'size' ? 'border-indigo-300 bg-indigo-50 text-indigo-700' :
                                  order.variantType === 'weight' ? 'border-green-300 bg-green-50 text-green-700' :
                                  order.variantType === 'quantity' ? 'border-purple-300 bg-purple-50 text-purple-700' :
                                  'border-gray-300 bg-gray-50 text-gray-700'
                                }`}
                              >
                                <span className="flex items-center gap-1">
                                  {getVariantIcon(order.variantType)}
                                  {getVariantDisplayText(order)}
                                </span>
                              </Badge>
                            </div>
                          )}
                          
                          <p className="text-gray-600 text-sm">
                            Order ID: <span className="text-gray-700">{order.id}</span>
                          </p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="text-gray-900">{formatCurrency(order.price)}</p>
                          {order.quantity > 1 && (
                            <p className="text-xs text-gray-500">Qty: {order.quantity}</p>
                          )}
                        </div>
                      </div>

                      {/* Status Badge */}
                      <div className="flex items-center gap-3 mb-3">
                        {order.status === 'delivered' ? (
                          <Badge className={`${GRADIENTS.primary} border-none flex items-center gap-1.5`}>
                            <CheckCircle className="w-3.5 h-3.5" />
                            Delivered
                          </Badge>
                        ) : (
                          <Badge variant="destructive" className="flex items-center gap-1.5">
                            <XCircle className="w-3.5 h-3.5" />
                            Cancelled
                          </Badge>
                        )}
                        
                        {/* Date */}
                        <div className="flex items-center gap-1.5 text-sm text-gray-600">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {order.status === 'delivered' && order.deliveredDate
                              ? `on ${formatDate(order.deliveredDate)}`
                              : order.cancelledDate
                              ? `on ${formatDate(order.cancelledDate)}`
                              : ''}
                          </span>
                        </div>
                      </div>

                      {/* Review Section */}
                      {order.status === 'delivered' && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          {reviewingOrderId === order.id ? (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              className="space-y-3"
                            >
                              {/* Star Rating */}
                              <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-700">Rating:</span>
                                <div className="flex gap-1">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                      key={star}
                                      onClick={() => setRating(star)}
                                      className="focus:outline-none transition-transform hover:scale-110"
                                    >
                                      <Star
                                        className={`w-5 h-5 ${
                                          star <= rating
                                            ? 'fill-yellow-400 text-yellow-400'
                                            : 'text-gray-300'
                                        }`}
                                      />
                                    </button>
                                  ))}
                                </div>
                              </div>

                              {/* Review Text */}
                              <Textarea
                                value={reviewText}
                                onChange={(e) => setReviewText(e.target.value)}
                                placeholder="Share your experience with this product..."
                                className="min-h-[80px] resize-none border-2 border-gray-200 rounded-xl"
                              />

                              {/* Action Buttons */}
                              <div className="flex gap-2">
                                <Button
                                  onClick={() => handleSubmitReview(order.id)}
                                  disabled={rating === 0}
                                  className={`flex-1 ${GRADIENTS.primary} ${GRADIENTS.primaryHover}`}
                                  size="sm"
                                >
                                  Submit Review
                                </Button>
                                <Button
                                  onClick={() => {
                                    setReviewingOrderId(null);
                                    setReviewText('');
                                    setRating(0);
                                  }}
                                  variant="outline"
                                  size="sm"
                                >
                                  Cancel
                                </Button>
                              </div>
                            </motion.div>
                          ) : (
                            <div>
                              {order.hasReview ? (
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                  <CheckCircle className="w-4 h-4 text-green-600" />
                                  <span>You have reviewed this product</span>
                                </div>
                              ) : (
                                <Button
                                  onClick={() => setReviewingOrderId(order.id)}
                                  variant="outline"
                                  size="sm"
                                  className="w-full sm:w-auto flex items-center gap-2"
                                >
                                  <MessageSquare className="w-4 h-4" />
                                  Review Product
                                </Button>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* Summary */}
        {orders.length > 0 && (
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Showing {orders.length} order{orders.length !== 1 ? 's' : ''}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
