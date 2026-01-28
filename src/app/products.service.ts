import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products = [
    {
      id: 1,
      name: 'NanoCare Collagen',
      category: 'Marine & Bovine Blend',
      price: 1200,
      image: 'assets/coverImages/2.png',
      tag: 'Best Seller',
      tagColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
      description: 'Advanced marine and bovine collagen blend for skin elasticity and joint health.',
      rating: 4.8,
      reviewCount: 120,
      isNew: false,
      isLimited: false
    },
    {
      id: 2,
      name: 'Liposomal Vitamin C',
      category: 'High Absorption Formula',
      price: 850,
      image: 'assets/coverImages/nanocare3.jpg',
      tag: 'New Arrival',
      tagColor: 'bg-gradient-to-r from-blue-500 to-cyan-500',
      description: 'Liposomal encapsulation technology for maximum bioavailability and immune support.',
      rating: 4.9,
      reviewCount: 95,
      isNew: true,
      isLimited: false
    },
    {
      id: 3,
      name: 'Pure Liposomal D3',
      category: 'Bone & Immune Support',
      price: 600,
      image: 'assets/coverImages/Post 5.jpg',
      tag: 'Limited Stock',
      tagColor: 'bg-gradient-to-r from-emerald-500 to-green-500',
      description: 'High-potency Vitamin D3 with enhanced absorption for optimal bone and immune health.',
      rating: 4.7,
      reviewCount: 85,
      isNew: false,
      isLimited: true
    },
    {
      id: 4,
      name: 'Magnesium Complex',
      category: 'Muscle & Nerve Support',
      price: 750,
      image: 'assets/coverImages/nanocare4.jpg',
      tag: 'Top Rated',
      tagColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
      description: 'Triple magnesium formula for muscle relaxation, nerve function, and sleep support.',
      rating: 4.8,
      reviewCount: 150,
      isNew: false,
      isLimited: false
    },
    {
      id: 5,
      name: 'Omega-3 Ultra',
      category: 'Cardiovascular Health',
      price: 1100,
      image: 'assets/coverImages/nanocare5.jpg',
      tag: 'Doctor Recommended',
      tagColor: 'bg-gradient-to-r from-red-500 to-orange-500',
      description: 'Pharmaceutical-grade fish oil with high EPA/DHA concentration for heart and brain health.',
      rating: 4.9,
      reviewCount: 200,
      isNew: false,
      isLimited: false
    },
    {
      id: 6,
      name: 'Probiotic 50B',
      category: 'Gut Health Formula',
      price: 950,
      image: 'assets/coverImages/nanocare2.jpg',
      tag: 'Best Seller',
      tagColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
      description: '50 billion CFU with 12 probiotic strains for optimal digestive and immune health.',
      rating: 4.7,
      reviewCount: 110,
      isNew: true,
      isLimited: false
    }
  ];

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find(product => product.id === id);
  }
}