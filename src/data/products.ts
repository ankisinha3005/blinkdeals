import { Product } from '../types';

export const products: Product[] = [
  // Product with SIZE variants
  {
    id: 11,
    name: "Premium Cotton T-Shirt",
    description: "Super soft cotton t-shirt with modern fit. Perfect for everyday wear with breathable fabric and durable construction.",
    price: 499,
    originalPrice: 999,
    discount: 50,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0c2hpcnQlMjBjbG90aGluZ3xlbnwxfHx8fDE3NjA4NzI2ODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0c2hpcnQlMjBjbG90aGluZ3xlbnwxfHx8fDE3NjA4NzI2ODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    stock: 150,
    category: "Clothing",
    variantType: 'size',
    variants: [
      { id: 's', label: 'S', price: 499, originalPrice: 999, stock: 45, isDefault: false },
      { id: 'm', label: 'M', price: 499, originalPrice: 999, stock: 60, isDefault: true },
      { id: 'l', label: 'L', price: 499, originalPrice: 999, stock: 30, isDefault: false },
      { id: 'xl', label: 'XL', price: 549, originalPrice: 1099, stock: 15, isDefault: false },
    ],
    details: {
      "Material": "100% Cotton",
      "Fit": "Regular Fit",
      "Neck": "Round Neck",
      "Care": "Machine Washable",
      "Country of Origin": "India"
    },
    seller: {
      name: "Fashion Trends",
      rating: 4.7,
      totalSales: 45600,
      description: "Leading fashion retailer offering trendy and comfortable clothing for all occasions.",
      joinedDate: "January 2019"
    }
  },
  // Product with WEIGHT variants
  {
    id: 12,
    name: "Organic Basmati Rice",
    description: "Premium quality aged basmati rice with long grains and aromatic fragrance. Perfectly suited for biryanis and pulao.",
    price: 180,
    originalPrice: 250,
    discount: 28,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwZ3JhaW5zfGVufDF8fHx8MTc2MDg3MjY4MHww&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwZ3JhaW5zfGVufDF8fHx8MTc2MDg3MjY4MHww&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    stock: 500,
    category: "Groceries",
    variantType: 'weight',
    variants: [
      { id: '1kg', label: '1 kg', price: 180, originalPrice: 250, stock: 200, isDefault: true },
      { id: '5kg', label: '5 kg', price: 850, originalPrice: 1200, stock: 150, isDefault: false },
      { id: '10kg', label: '10 kg', price: 1650, originalPrice: 2300, stock: 100, isDefault: false },
      { id: '25kg', label: '25 kg', price: 3999, originalPrice: 5500, stock: 50, isDefault: false },
    ],
    details: {
      "Type": "Basmati Rice",
      "Grain Length": "Extra Long",
      "Quality": "Premium Grade",
      "Organic": "Yes",
      "Shelf Life": "12 months"
    },
    seller: {
      name: "FreshMart Groceries",
      rating: 4.9,
      totalSales: 89000,
      description: "Your trusted source for fresh groceries and daily essentials delivered to your doorstep.",
      joinedDate: "March 2017"
    }
  },
  // Product with QUANTITY variants
  {
    id: 13,
    name: "Stainless Steel Water Bottle",
    description: "Insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours. BPA-free and leak-proof.",
    price: 399,
    originalPrice: 799,
    discount: 50,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGJvdHRsZSUyMHN0YWlubGVzc3xlbnwxfHx8fDE3NjA4NzI2ODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGJvdHRsZSUyMHN0YWlubGVzc3xlbnwxfHx8fDE3NjA4NzI2ODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    stock: 300,
    category: "Home & Kitchen",
    variantType: 'quantity',
    variants: [
      { id: 'single', label: 'Pack of 1', price: 399, originalPrice: 799, stock: 150, isDefault: true },
      { id: 'double', label: 'Pack of 2', price: 749, originalPrice: 1499, stock: 100, isDefault: false },
      { id: 'family', label: 'Pack of 4', price: 1399, originalPrice: 2799, stock: 50, isDefault: false },
    ],
    details: {
      "Material": "304 Stainless Steel",
      "Capacity": "750ml",
      "Insulation": "Double Wall Vacuum",
      "BPA Free": "Yes",
      "Leak Proof": "Yes"
    },
    seller: {
      name: "HomeEssentials",
      rating: 4.6,
      totalSales: 34500,
      description: "Quality home and kitchen products at affordable prices. Making your daily life easier.",
      joinedDate: "July 2018"
    }
  },
  {
    id: 1,
    name: "Premium Wireless Headphones",
    description: "High-quality wireless headphones with active noise cancellation and 30-hour battery life. Experience crystal clear sound and ultimate comfort.",
    price: 149.99,
    originalPrice: 299.99,
    discount: 50,
    image: "https://images.unsplash.com/photo-1592375601764-5dd6be536f99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmVzJTIwZWxlY3Ryb25pY3N8ZW58MXx8fHwxNzYwNzkyMjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1592375601764-5dd6be536f99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmVzJTIwZWxlY3Ryb25pY3N8ZW58MXx8fHwxNzYwNzkyMjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1708164333066-dabc2dac17d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmVzJTIwc2lkZSUyMHZpZXd8ZW58MXx8fHwxNzYwODcyNjc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1713801129175-8e60c67e0412?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmVzJTIwY2xvc2V1cCUyMGRldGFpbHxlbnwxfHx8fDE3NjA4NzI2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    stock: 25,
    category: "Audio",
    details: {
      "Brand": "AudioPro Elite",
      "Model": "APE-2000X",
      "Color": "Midnight Black",
      "Connectivity": "Bluetooth 5.2, USB-C",
      "Battery Life": "30 hours",
      "Charging Time": "2 hours",
      "Weight": "250g",
      "Driver Size": "40mm"
    },
    seller: {
      name: "TechWorld Electronics",
      rating: 4.8,
      totalSales: 15420,
      description: "Your trusted source for premium electronics and audio equipment. We specialize in bringing you the latest technology at unbeatable prices.",
      joinedDate: "January 2020"
    }
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    description: "Track your fitness goals with this advanced smartwatch featuring heart rate monitoring, GPS, and 7-day battery life.",
    price: 199.99,
    originalPrice: 399.99,
    discount: 50,
    image: "https://images.unsplash.com/photo-1739287700815-7eef4abaab4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwdGVjaHxlbnwxfHx8fDE3NjA4MjMzMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1739287700815-7eef4abaab4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwdGVjaHxlbnwxfHx8fDE3NjA4MjMzMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1676554565987-524692127b1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwZGlzcGxheXxlbnwxfHx8fDE3NjA4NzI2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1741454238936-0a40beef1db3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwY2xvc2V1cHxlbnwxfHx8fDE3NjA3ODcxMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    stock: 18,
    category: "Wearables",
    details: {
      "Brand": "FitTrack Pro",
      "Model": "FTP-500",
      "Display": "1.4-inch AMOLED",
      "Water Resistance": "5 ATM (50m)",
      "Battery Life": "7 days",
      "Sensors": "Heart Rate, GPS, SpO2",
      "Compatibility": "iOS & Android",
      "Strap Material": "Silicone"
    },
    seller: {
      name: "FitGear Store",
      rating: 4.9,
      totalSales: 23100,
      description: "Leading retailer of fitness wearables and health monitoring devices. We're committed to helping you achieve your wellness goals.",
      joinedDate: "March 2019"
    }
  },
  {
    id: 3,
    name: "True Wireless Earbuds",
    description: "Compact earbuds with superior sound quality, touch controls, and a charging case that provides 24 hours of playtime.",
    price: 79.99,
    originalPrice: 159.99,
    discount: 50,
    image: "https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGVhcmJ1ZHN8ZW58MXx8fHwxNzYwODE2MTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGVhcmJ1ZHN8ZW58MXx8fHwxNzYwODE2MTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1760402932638-d66792f5db0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYXJidWRzJTIwY2FzZXxlbnwxfHx8fDE3NjA4NzI2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1715371941196-c4c8750f270f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYXJidWRzJTIwY2hhcmdpbmd8ZW58MXx8fHwxNzYwODcyNjc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    stock: 42,
    category: "Audio",
    details: {
      "Brand": "SoundWave",
      "Model": "SW-Buds Pro",
      "Bluetooth Version": "5.3",
      "Driver": "10mm Dynamic",
      "Playtime (Earbuds)": "6 hours",
      "Playtime (with Case)": "24 hours",
      "Charging Port": "USB-C",
      "Touch Controls": "Yes"
    },
    seller: {
      name: "AudioHub",
      rating: 4.7,
      totalSales: 31250,
      description: "Specializing in premium audio products and accessories. Our curated selection ensures the best sound experience for every budget.",
      joinedDate: "June 2018"
    }
  },
  {
    id: 4,
    name: "Professional DSLR Camera",
    description: "Capture stunning photos with this professional-grade camera featuring 24MP sensor, 4K video, and advanced autofocus.",
    price: 899.99,
    originalPrice: 1799.99,
    discount: 50,
    image: "https://images.unsplash.com/photo-1579535984712-92fffbbaa266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NjA4MzA4NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1579535984712-92fffbbaa266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NjA4MzA4NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1606980624314-0c1a99ae2bdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBzaWRlJTIwdmlld3xlbnwxfHx8fDE3NjA4NzI2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBkZXRhaWx8ZW58MXx8fHwxNzYwODcyNjc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    stock: 12,
    category: "Photography",
    details: {
      "Brand": "CanonPro",
      "Model": "EOS 5D Mark V",
      "Sensor": "24.2MP Full-Frame CMOS",
      "ISO Range": "100-32000",
      "Video": "4K at 30fps",
      "Autofocus Points": "61-point AF system",
      "Screen": "3.2-inch Touchscreen LCD",
      "Weight": "890g (body only)"
    },
    seller: {
      name: "PhotoPro Store",
      rating: 4.9,
      totalSales: 8900,
      description: "Professional photography equipment supplier with over 10 years of experience. We provide authentic products with full warranty support.",
      joinedDate: "May 2014"
    }
  },
  {
    id: 5,
    name: "Ultra-Thin Gaming Laptop",
    description: "Powerful gaming laptop with RTX graphics, 16GB RAM, and a stunning 144Hz display. Perfect for gaming and productivity.",
    price: 1299.99,
    originalPrice: 2599.99,
    discount: 50,
    image: "https://images.unsplash.com/photo-1511385348-a52b4a160dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlcnxlbnwxfHx8fDE3NjA3Nzg5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1511385348-a52b4a160dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlcnxlbnwxfHx8fDE3NjA3Nzg5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBzaWRlfGVufDF8fHx8MTc2MDg3MjY3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBrZXlib2FyZHxlbnwxfHx8fDE3NjA4NzI2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    stock: 8,
    category: "Computers",
    details: {
      "Brand": "GameForce",
      "Model": "GF-Titan X15",
      "Processor": "Intel Core i7-12700H",
      "Graphics": "NVIDIA RTX 4060 8GB",
      "RAM": "16GB DDR5",
      "Storage": "1TB NVMe SSD",
      "Display": "15.6\" FHD 144Hz",
      "Weight": "2.1kg"
    },
    seller: {
      name: "Gaming Central",
      rating: 4.7,
      totalSales: 12400,
      description: "Your ultimate destination for gaming laptops and accessories. We offer the latest gaming hardware with competitive prices and expert support.",
      joinedDate: "August 2017"
    }
  },
  {
    id: 6,
    name: "Flagship Smartphone",
    description: "Latest flagship smartphone with 5G, triple camera system, and all-day battery life. Experience mobile photography at its finest.",
    price: 699.99,
    originalPrice: 1399.99,
    discount: 50,
    image: "https://images.unsplash.com/photo-1631011714977-a6068c048b7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9iaWxlfGVufDF8fHx8MTc2MDgxMDU5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1631011714977-a6068c048b7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9iaWxlfGVufDF8fHx8MTc2MDgxMDU5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGJhY2t8ZW58MXx8fHwxNzYwODcyNjc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGNhbWVyYXxlbnwxfHx8fDE3NjA4NzI2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    stock: 30,
    category: "Mobile",
    details: {
      "Brand": "PhonePro Max",
      "Model": "PPM-13 Ultra",
      "Display": "6.7\" AMOLED 120Hz",
      "Processor": "Snapdragon 8 Gen 2",
      "RAM": "12GB",
      "Storage": "256GB",
      "Camera": "50MP + 12MP + 10MP",
      "Battery": "5000mAh with 65W Fast Charging"
    },
    seller: {
      name: "MobileMart",
      rating: 4.8,
      totalSales: 28600,
      description: "Leading mobile phone retailer offering the latest smartphones with genuine warranty and excellent after-sales service.",
      joinedDate: "February 2016"
    }
  },
  {
    id: 7,
    name: "Next-Gen Gaming Console",
    description: "Immerse yourself in next-generation gaming with ray tracing, ultra-fast SSD, and exclusive game titles.",
    price: 399.99,
    originalPrice: 799.99,
    discount: 50,
    image: "https://images.unsplash.com/photo-1580234797602-22c37b2a6230?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb25zb2xlfGVufDF8fHx8MTc2MDgwNDQ5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1580234797602-22c37b2a6230?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb25zb2xlfGVufDF8fHx8MTc2MDgwNDQ5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb250cm9sbGVyfGVufDF8fHx8MTc2MDg3MjY3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cHxlbnwxfHx8fDE3NjA4NzI2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    stock: 15,
    category: "Gaming",
    details: {
      "Brand": "PlayMax",
      "Model": "PlayMax 6",
      "CPU": "Custom 8-core AMD Zen 2",
      "GPU": "Custom RDNA 2",
      "RAM": "16GB GDDR6",
      "Storage": "1TB Custom NVMe SSD",
      "Resolution": "Up to 8K, 4K at 120fps",
      "Ray Tracing": "Hardware Accelerated"
    },
    seller: {
      name: "GameVerse",
      rating: 4.9,
      totalSales: 19800,
      description: "Premium gaming console and accessories store. We provide authentic gaming hardware with exclusive deals and fast shipping.",
      joinedDate: "November 2015"
    }
  },
  {
    id: 8,
    name: "Pro Tablet with Keyboard",
    description: "Versatile tablet with detachable keyboard, stylus support, and desktop-class performance for work and play.",
    price: 549.99,
    originalPrice: 1099.99,
    discount: 50,
    image: "https://images.unsplash.com/photo-1672239069328-dd1535c0d78a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBkZXZpY2V8ZW58MXx8fHwxNzYwODU3ODY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1672239069328-dd1535c0d78a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBkZXZpY2V8ZW58MXx8fHwxNzYwODU3ODY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBzdHlsdXN8ZW58MXx8fHwxNzYwODcyNjc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBrZXlib2FyZHxlbnwxfHx8fDE3NjA4NzI2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    stock: 20,
    category: "Tablets",
    details: {
      "Brand": "TabPro Elite",
      "Model": "TE-12 Pro",
      "Display": "12.9\" Liquid Retina XDR",
      "Processor": "M2 Chip",
      "RAM": "8GB",
      "Storage": "256GB",
      "Stylus": "Pressure-sensitive (included)",
      "Battery Life": "Up to 10 hours"
    },
    seller: {
      name: "TabletHub",
      rating: 4.6,
      totalSales: 14500,
      description: "Specialized tablet retailer offering the latest tablets and accessories for professionals and students. Quality assured.",
      joinedDate: "April 2018"
    }
  },
  {
    id: 9,
    name: "Premium Bluetooth Speaker",
    description: "Portable speaker with 360° sound, waterproof design, and 12-hour battery. Perfect for any adventure.",
    price: 129.99,
    originalPrice: 259.99,
    discount: 50,
    image: "https://images.unsplash.com/photo-1635611958361-40faf5292663?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVha2VyJTIwYXVkaW98ZW58MXx8fHwxNzYwNzk4NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1635611958361-40faf5292663?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVha2VyJTIwYXVkaW98ZW58MXx8fHwxNzYwNzk4NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVha2VyJTIwcG9ydGFibGV8ZW58MXx8fHwxNzYwODcyNjc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVha2VyJTIwY2xvc2V1cHxlbnwxfHx8fDE3NjA4NzI2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    stock: 35,
    category: "Audio",
    details: {
      "Brand": "SoundBlast",
      "Model": "SB-360 Pro",
      "Sound": "360° Omnidirectional",
      "Bluetooth": "5.0",
      "Battery": "12 hours playtime",
      "Water Resistance": "IPX7 Waterproof",
      "Charging": "USB-C, 3 hours",
      "Weight": "680g"
    },
    seller: {
      name: "AudioHub",
      rating: 4.7,
      totalSales: 31250,
      description: "Specializing in premium audio products and accessories. Our curated selection ensures the best sound experience for every budget.",
      joinedDate: "June 2018"
    }
  },
  {
    id: 10,
    name: "4K Camera Drone",
    description: "Professional drone with 4K camera, GPS tracking, and intelligent flight modes. Capture breathtaking aerial footage.",
    price: 499.99,
    originalPrice: 999.99,
    discount: 50,
    image: "https://images.unsplash.com/photo-1633169420455-97eb1405fc51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwODYwMzc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1633169420455-97eb1405fc51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwODYwMzc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1508444845599-5c89863b1c44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGZseWluZ3xlbnwxfHx8fDE3NjA4NzI2ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1527359443443-8224e26faa21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGNhbWVyYXxlbnwxfHx8fDE3NjA4NzI2ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    stock: 10,
    category: "Photography",
    details: {
      "Brand": "SkyVision",
      "Model": "SV-Pro 4K",
      "Camera": "4K UHD at 60fps",
      "Gimbal": "3-axis mechanical",
      "Flight Time": "31 minutes",
      "Range": "10km (CE compliant)",
      "GPS": "Dual GPS/GLONASS",
      "Weight": "907g"
    },
    seller: {
      name: "AerialPro Tech",
      rating: 4.8,
      totalSales: 6700,
      description: "Specialist drone retailer with expert knowledge in aerial photography. We offer comprehensive training and support for all skill levels.",
      joinedDate: "September 2019"
    }
  }
];
