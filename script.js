/* ===================================
   AURÉLIA — Luxury Accessories
   Main JavaScript
   =================================== */

// ==========================================
// PRODUCT DATA
// ==========================================
const PRODUCTS = [
  /*{
    id: 3,
    name: 'Luna Chain Bracelet',
    category: 'bracelets',
    price: 156,
    oldPrice: 195,
    image: 'images/bracelet-1.png',
    badge: 'Sale',
    description: 'A sophisticated chain bracelet with interlocking crescent links that catch the light beautifully. Adjustable clasp ensures a perfect fit. Layer it with your favorite watch or wear alone for a minimal statement.',
    sizes: ['S', 'M', 'L'],
    sku: 'AUR-BR-001',
    material: '18K Gold Plated Brass',
  },
  {
    id: 4,
    name: 'Soleil Drop Earrings',
    category: 'earrings',
    price: 134,
    oldPrice: null,
    image: 'images/earring-1.png',
    badge: 'New',
    description: 'Graceful drop earrings inspired by the warmth of golden sunlight. These lightweight earrings feature a hammered texture that creates a beautiful interplay with light. Hypoallergenic posts.',
    sizes: [],
    sku: 'AUR-ER-001',
    material: '18K Gold Plated Sterling Silver',
  },
  {
    id: 5,
    name: 'Parisienne Watch',
    category: 'watches',
    price: 420,
    oldPrice: null,
    image: 'images/watch-1.png',
    badge: 'Exclusive',
    description: 'A refined timepiece with a mother-of-pearl dial and slim gold case. Swiss quartz movement paired with a genuine Italian leather strap. Water resistant to 30 meters.',
    sizes: [],
    sku: 'AUR-WT-001',
    material: 'Gold-tone Stainless Steel & Leather',
  },
  {
    id: 7,
    name: 'RiviÃ¨re Cuff Bracelet',
    category: 'bracelets',
    price: 178,
    oldPrice: null,
    image: 'images/bracelet-1.png',
    badge: null,
    description: 'A sleek, polished cuff bracelet with a seamless design. The open-ended construction provides a comfortable fit while maintaining its elegant silhouette. A modern classic.',
    sizes: ['S', 'M'],
    sku: 'AUR-BR-002',
    material: '18K Gold Plated Stainless Steel',
  },*/
  {
    id: 101,
    name: 'Elegant Ring 1',
    category: 'rings',
    price: 60,
    oldPrice: null,
    image: 'images/ring-new-1.jpeg',
    badge: 'New',
    description: 'A beautiful and elegant ring for your collection.',
    sizes: ['5', '6', '7', '8'],
    sku: 'AUR-RG-001',
    material: 'Premium Quality'
  }, {
    id: 102,
    name: 'Elegant Ring 2',
    category: 'rings',
    price: 60,
    oldPrice: null,
    image: 'images/ring-new-2.jpeg',
    badge: 'New',
    description: 'A beautiful and elegant ring for your collection.',
    sizes: ['5', '6', '7', '8'],
    sku: 'AUR-RG-002',
    material: 'Premium Quality'
  }, {
    id: 103,
    name: 'Elegant Ring 3',
    category: 'rings',
    price: 60,
    oldPrice: null,
    image: 'images/ring-new-3.jpeg',
    badge: 'New',
    description: 'A beautiful and elegant ring for your collection.',
    sizes: ['5', '6', '7', '8'],
    sku: 'AUR-RG-003',
    material: 'Premium Quality'
  }, {
    id: 104,
    name: 'Elegant Ring 4',
    category: 'rings',
    price: 60,
    oldPrice: null,
    image: 'images/ring-new-4.jpeg',
    badge: 'New',
    description: 'A beautiful and elegant ring for your collection.',
    sizes: ['5', '6', '7', '8'],
    sku: 'AUR-RG-004',
    material: 'Premium Quality'
  }, {
    id: 105,
    name: 'Elegant Ring 5',
    category: 'rings',
    price: 60,
    oldPrice: null,
    image: 'images/ring-new-5.jpeg',
    badge: 'New',
    description: 'A beautiful and elegant ring for your collection.',
    sizes: ['5', '6', '7', '8'],
    sku: 'AUR-RG-005',
    material: 'Premium Quality'
  }, {
    id: 106,
    name: 'Elegant Ring 6',
    category: 'rings',
    price: 60,
    oldPrice: null,
    image: 'images/ring-new-6.jpeg',
    badge: 'New',
    description: 'A beautiful and elegant ring for your collection.',
    sizes: ['5', '6', '7', '8'],
    sku: 'AUR-RG-006',
    material: 'Premium Quality'
  }, {
    id: 107,
    name: 'Elegant Ring 7',
    category: 'rings',
    price: 60,
    oldPrice: null,
    image: 'images/ring-new-7.jpeg',
    badge: 'New',
    description: 'A beautiful and elegant ring for your collection.',
    sizes: ['5', '6', '7', '8'],
    sku: 'AUR-RG-007',
    material: 'Premium Quality'
  }, {
    id: 108,
    name: 'Elegant Ring 8',
    category: 'rings',
    price: 60,
    oldPrice: null,
    image: 'images/ring-new-8.jpeg',
    badge: 'New',
    description: 'A beautiful and elegant ring for your collection.',
    sizes: ['5', '6', '7', '8'],
    sku: 'AUR-RG-008',
    material: 'Premium Quality'
  }, {
    id: 109,
    name: 'Elegant Ring 9',
    category: 'rings',
    price: 60,
    oldPrice: null,
    image: 'images/ring-new-9.jpeg',
    badge: 'New',
    description: 'A beautiful and elegant ring for your collection.',
    sizes: ['5', '6', '7', '8'],
    sku: 'AUR-RG-009',
    material: 'Premium Quality'
  }, {
    id: 110,
    name: 'Elegant Ring 10',
    category: 'rings',
    price: 60,
    oldPrice: null,
    image: 'images/ring-new-10.jpeg',
    badge: 'New',
    description: 'A beautiful and elegant ring for your collection.',
    sizes: ['5', '6', '7', '8'],
    sku: 'AUR-RG-0010',
    material: 'Premium Quality'
  }, {
    id: 111,
    name: 'Elegant Ring 11',
    category: 'rings',
    price: 60,
    oldPrice: null,
    image: 'images/ring-new-11.jpeg',
    badge: 'New',
    description: 'A beautiful and elegant ring for your collection.',
    sizes: ['5', '6', '7', '8'],
    sku: 'AUR-RG-0011',
    material: 'Premium Quality'
  }, {
    id: 112,
    name: 'Elegant Ring 12',
    category: 'rings',
    price: 60,
    oldPrice: null,
    image: 'images/ring-new-12.jpeg',
    badge: 'New',
    description: 'A beautiful and elegant ring for your collection.',
    sizes: ['5', '6', '7', '8'],
    sku: 'AUR-RG-0012',
    material: 'Premium Quality'
  }, {
    id: 113,
    name: 'Elegant Ring 13',
    category: 'rings',
    price: 60,
    oldPrice: null,
    image: 'images/ring-new-13.jpeg',
    badge: 'New',
    description: 'A beautiful and elegant ring for your collection.',
    sizes: ['5', '6', '7', '8'],
    sku: 'AUR-RG-0013',
    material: 'Premium Quality'
  }, {
    id: 114,
    name: 'Elegant Ring 14',
    category: 'rings',
    price: 60,
    oldPrice: null,
    image: 'images/ring-new-14.jpeg',
    badge: 'New',
    description: 'A beautiful and elegant ring for your collection.',
    sizes: ['5', '6', '7', '8'],
    sku: 'AUR-RG-0014',
    material: 'Premium Quality'
  }, {
    id: 115,
    name: 'Elegant Ring 15',
    category: 'rings',
    price: 60,
    oldPrice: null,
    image: 'images/ring-new-15.jpeg',
    badge: 'New',
    description: 'A beautiful and elegant ring for your collection.',
    sizes: ['5', '6', '7', '8'],
    sku: 'AUR-RG-0015',
    material: 'Premium Quality'
  }, {
    id: 116,
    name: 'Elegant Ring 16',
    category: 'rings',
    price: 60,
    oldPrice: null,
    image: 'images/ring-new-16.jpeg',
    badge: 'New',
    description: 'A beautiful and elegant ring for your collection.',
    sizes: ['5', '6', '7', '8'],
    sku: 'AUR-RG-0016',
    material: 'Premium Quality'
  }, {
    id: 117,
    name: 'Elegant Ring 17',
    category: 'rings',
    price: 60,
    oldPrice: null,
    image: 'images/ring-new-17.jpeg',
    badge: 'New',
    description: 'A beautiful and elegant ring for your collection.',
    sizes: ['5', '6', '7', '8'],
    sku: 'AUR-RG-0017',
    material: 'Premium Quality'
  }, {
    id: 118,
    name: 'Elegant Ring 18',
    category: 'rings',
    price: 60,
    oldPrice: null,
    image: 'images/ring-new-18.jpeg',
    badge: 'New',
    description: 'A beautiful and elegant ring for your collection.',
    sizes: ['5', '6', '7', '8'],
    sku: 'AUR-RG-0018',
    material: 'Premium Quality'
  }, {
    id: 119,
    name: 'Elegant Ring 19',
    category: 'rings',
    price: 60,
    oldPrice: null,
    image: 'images/ring-new-19.jpeg',
    badge: 'New',
    description: 'A beautiful and elegant ring for your collection.',
    sizes: ['5', '6', '7', '8'],
    sku: 'AUR-RG-0019',
    material: 'Premium Quality'
  }, {
    id: 120,
    name: 'Elegant Ring 20',
    category: 'rings',
    price: 60,
    oldPrice: null,
    image: 'images/ring-new-20.jpeg',
    badge: 'New',
    description: 'A beautiful and elegant ring for your collection.',
    sizes: ['5', '6', '7', '8'],
    sku: 'AUR-RG-0020',
    material: 'Premium Quality'
  }, {
    id: 121,
    name: 'Elegant Ring 21',
    category: 'rings',
    price: 60,
    oldPrice: null,
    image: 'images/ring-new-21.jpeg',
    badge: 'New',
    description: 'A beautiful and elegant ring for your collection.',
    sizes: ['5', '6', '7', '8'],
    sku: 'AUR-RG-0021',
    material: 'Premium Quality'
  }, {
    id: 122,
    name: 'Elegant Ring 22',
    category: 'rings',
    price: 60,
    oldPrice: null,
    image: 'images/ring-new-22.jpeg',
    badge: 'New',
    description: 'A beautiful and elegant ring for your collection.',
    sizes: ['5', '6', '7', '8'],
    sku: 'AUR-RG-0022',
    material: 'Premium Quality'
  }
  ,{
    id: 511,
    name: 'Elegant Ring 1',
    category: 'rings',
    price: 60,
    oldPrice: null,
    image: 'images/ring-added-1.jpeg',
    badge: 'New',
    description: 'A stunning and elegant piece crafted for the modern woman.',
    sizes: ['5', '6', '7', '8'],
    sku: 'AUR-RG-ADD-1',
    material: 'Premium Quality'
  }  ,{
    id: 512,
    name: 'Elegant Ring 2',
    category: 'rings',
    price: 60,
    oldPrice: null,
    image: 'images/ring-added-2.jpeg',
    badge: 'New',
    description: 'A stunning and elegant piece crafted for the modern woman.',
    sizes: ['5', '6', '7', '8'],
    sku: 'AUR-RG-ADD-2',
    material: 'Premium Quality'
  }  ,{
    id: 513,
    name: 'Elegant Ring 3',
    category: 'rings',
    price: 60,
    oldPrice: null,
    image: 'images/ring-added-3.jpeg',
    badge: 'New',
    description: 'A stunning and elegant piece crafted for the modern woman.',
    sizes: ['5', '6', '7', '8'],
    sku: 'AUR-RG-ADD-3',
    material: 'Premium Quality'
  }  ,{
    id: 514,
    name: 'Elegant Ring 4',
    category: 'rings',
    price: 60,
    oldPrice: null,
    image: 'images/ring-added-4.jpeg',
    badge: 'New',
    description: 'A stunning and elegant piece crafted for the modern woman.',
    sizes: ['5', '6', '7', '8'],
    sku: 'AUR-RG-ADD-4',
    material: 'Premium Quality'
  }  ,{
    id: 515,
    name: 'Elegant Ring 5',
    category: 'rings',
    price: 60,
    oldPrice: null,
    image: 'images/ring-added-5.jpeg',
    badge: 'New',
    description: 'A stunning and elegant piece crafted for the modern woman.',
    sizes: ['5', '6', '7', '8'],
    sku: 'AUR-RG-ADD-5',
    material: 'Premium Quality'
  }  ,{
    id: 516,
    name: 'Elegant Ring 6',
    category: 'rings',
    price: 60,
    oldPrice: null,
    image: 'images/ring-added-6.jpeg',
    badge: 'New',
    description: 'A stunning and elegant piece crafted for the modern woman.',
    sizes: ['5', '6', '7', '8'],
    sku: 'AUR-RG-ADD-6',
    material: 'Premium Quality'
  }  ,{
    id: 517,
    name: 'Elegant Ring 7',
    category: 'rings',
    price: 60,
    oldPrice: null,
    image: 'images/ring-added-7.jpeg',
    badge: 'New',
    description: 'A stunning and elegant piece crafted for the modern woman.',
    sizes: ['5', '6', '7', '8'],
    sku: 'AUR-RG-ADD-7',
    material: 'Premium Quality'
  }  ,{
    id: 518,
    name: 'Elegant Ring 8',
    category: 'rings',
    price: 60,
    oldPrice: null,
    image: 'images/ring-added-8.jpeg',
    badge: 'New',
    description: 'A stunning and elegant piece crafted for the modern woman.',
    sizes: ['5', '6', '7', '8'],
    sku: 'AUR-RG-ADD-8',
    material: 'Premium Quality'
  }  ,{
    id: 519,
    name: 'Elegant Ring 9',
    category: 'rings',
    price: 60,
    oldPrice: null,
    image: 'images/ring-added-9.jpeg',
    badge: 'New',
    description: 'A stunning and elegant piece crafted for the modern woman.',
    sizes: ['5', '6', '7', '8'],
    sku: 'AUR-RG-ADD-9',
    material: 'Premium Quality'
  }  ,{
    id: 520,
    name: 'Elegant Ring 10',
    category: 'rings',
    price: 60,
    oldPrice: null,
    image: 'images/ring-added-10.jpeg',
    badge: 'New',
    description: 'A stunning and elegant piece crafted for the modern woman.',
    sizes: ['5', '6', '7', '8'],
    sku: 'AUR-RG-ADD-10',
    material: 'Premium Quality'
  }  ,{
    id: 521,
    name: 'Elegant Ring 11',
    category: 'rings',
    price: 60,
    oldPrice: null,
    image: 'images/ring-added-11.jpeg',
    badge: 'New',
    description: 'A stunning and elegant piece crafted for the modern woman.',
    sizes: ['5', '6', '7', '8'],
    sku: 'AUR-RG-ADD-11',
    material: 'Premium Quality'
  }  ,{
    id: 522,
    name: 'Luxury Bracelet 1',
    category: 'bracelets',
    price: 100,
    oldPrice: null,
    image: 'images/bracelet-new-1.jpeg',
    badge: 'New',
    description: 'A stunning and elegant piece crafted for the modern woman.',
    sizes: [],
    sku: 'AUR-BR-NEW-1',
    material: 'Premium Quality'
  }  ,{
    id: 523,
    name: 'Luxury Bracelet 2',
    category: 'bracelets',
    price: 100,
    oldPrice: null,
    image: 'images/bracelet-new-2.jpeg',
    badge: 'New',
    description: 'A stunning and elegant piece crafted for the modern woman.',
    sizes: [],
    sku: 'AUR-BR-NEW-2',
    material: 'Premium Quality'
  }  ,{
    id: 524,
    name: 'Luxury Bracelet 3',
    category: 'bracelets',
    price: 100,
    oldPrice: null,
    image: 'images/bracelet-new-3.jpeg',
    badge: 'New',
    description: 'A stunning and elegant piece crafted for the modern woman.',
    sizes: [],
    sku: 'AUR-BR-NEW-3',
    material: 'Premium Quality'
  }  ,{
    id: 525,
    name: 'Luxury Bracelet 4',
    category: 'bracelets',
    price: 100,
    oldPrice: null,
    image: 'images/bracelet-new-4.jpeg',
    badge: 'New',
    description: 'A stunning and elegant piece crafted for the modern woman.',
    sizes: [],
    sku: 'AUR-BR-NEW-4',
    material: 'Premium Quality'
  }  ,{
    id: 526,
    name: 'Luxury Bracelet 5',
    category: 'bracelets',
    price: 100,
    oldPrice: null,
    image: 'images/bracelet-new-5.jpeg',
    badge: 'New',
    description: 'A stunning and elegant piece crafted for the modern woman.',
    sizes: [],
    sku: 'AUR-BR-NEW-5',
    material: 'Premium Quality'
  }  ,{
    id: 527,
    name: 'Luxury Bracelet 6',
    category: 'bracelets',
    price: 100,
    oldPrice: null,
    image: 'images/bracelet-new-6.jpeg',
    badge: 'New',
    description: 'A stunning and elegant piece crafted for the modern woman.',
    sizes: [],
    sku: 'AUR-BR-NEW-6',
    material: 'Premium Quality'
  }  ,{
    id: 528,
    name: 'Luxury Bracelet 7',
    category: 'bracelets',
    price: 100,
    oldPrice: null,
    image: 'images/bracelet-new-7.jpeg',
    badge: 'New',
    description: 'A stunning and elegant piece crafted for the modern woman.',
    sizes: [],
    sku: 'AUR-BR-NEW-7',
    material: 'Premium Quality'
  }  ,{
    id: 529,
    name: 'Luxury Bracelet 8',
    category: 'bracelets',
    price: 100,
    oldPrice: null,
    image: 'images/bracelet-new-8.jpeg',
    badge: 'New',
    description: 'A stunning and elegant piece crafted for the modern woman.',
    sizes: [],
    sku: 'AUR-BR-NEW-8',
    material: 'Premium Quality'
  }  ,{
    id: 530,
    name: 'Luxury Bracelet 9',
    category: 'bracelets',
    price: 100,
    oldPrice: null,
    image: 'images/bracelet-new-9.jpeg',
    badge: 'New',
    description: 'A stunning and elegant piece crafted for the modern woman.',
    sizes: [],
    sku: 'AUR-BR-NEW-9',
    material: 'Premium Quality'
  }  ,{
    id: 531,
    name: 'Luxury Bracelet 10',
    category: 'bracelets',
    price: 100,
    oldPrice: null,
    image: 'images/bracelet-new-10.jpeg',
    badge: 'New',
    description: 'A stunning and elegant piece crafted for the modern woman.',
    sizes: [],
    sku: 'AUR-BR-NEW-10',
    material: 'Premium Quality'
  }  ,{
    id: 532,
    name: 'Luxury Bracelet 11',
    category: 'bracelets',
    price: 100,
    oldPrice: null,
    image: 'images/bracelet-new-11.jpeg',
    badge: 'New',
    description: 'A stunning and elegant piece crafted for the modern woman.',
    sizes: [],
    sku: 'AUR-BR-NEW-11',
    material: 'Premium Quality'
  }  ,{
    id: 533,
    name: 'Luxury Bracelet 12',
    category: 'bracelets',
    price: 100,
    oldPrice: null,
    image: 'images/bracelet-new-12.jpeg',
    badge: 'New',
    description: 'A stunning and elegant piece crafted for the modern woman.',
    sizes: [],
    sku: 'AUR-BR-NEW-12',
    material: 'Premium Quality'
  }  ,{
    id: 534,
    name: 'Luxury Bracelet 13',
    category: 'bracelets',
    price: 100,
    oldPrice: null,
    image: 'images/bracelet-new-13.jpeg',
    badge: 'New',
    description: 'A stunning and elegant piece crafted for the modern woman.',
    sizes: [],
    sku: 'AUR-BR-NEW-13',
    material: 'Premium Quality'
  }  ,{
    id: 535,
    name: 'Luxury Bracelet 14',
    category: 'bracelets',
    price: 100,
    oldPrice: null,
    image: 'images/bracelet-new-14.jpeg',
    badge: 'New',
    description: 'A stunning and elegant piece crafted for the modern woman.',
    sizes: [],
    sku: 'AUR-BR-NEW-14',
    material: 'Premium Quality'
  }  ,{
    id: 536,
    name: 'Luxury Watch 1',
    category: 'watches',
    price: 350,
    oldPrice: null,
    image: 'images/watch-new-1.jpeg',
    badge: 'New',
    description: 'A stunning and elegant piece crafted for the modern woman.',
    sizes: [],
    sku: 'AUR-WT-NEW-1',
    material: 'Premium Quality'
  }  ,{
    id: 537,
    name: 'Luxury Watch 2',
    category: 'watches',
    price: 350,
    oldPrice: null,
    image: 'images/watch-new-2.jpeg',
    badge: 'New',
    description: 'A stunning and elegant piece crafted for the modern woman.',
    sizes: [],
    sku: 'AUR-WT-NEW-2',
    material: 'Premium Quality'
  }  ,{
    id: 538,
    name: 'Luxury Watch 3',
    category: 'watches',
    price: 350,
    oldPrice: null,
    image: 'images/watch-new-3.jpeg',
    badge: 'New',
    description: 'A stunning and elegant piece crafted for the modern woman.',
    sizes: [],
    sku: 'AUR-WT-NEW-3',
    material: 'Premium Quality'
  }
  ,{
    id: 600,
    name: 'Elegant Necklace 1',
    category: 'necklaces',
    price: 150,
    oldPrice: null,
    image: 'images/necklace-update-1.jpeg',
    badge: 'New',
    description: 'A stunning and elegant piece crafted for the modern woman.',
    sizes: ['16"', '18"'],
    sku: 'AUR-NK-UPDATE-1',
    material: 'Premium Quality'
  }  ,{
    id: 601,
    name: 'Elegant Necklace 2',
    category: 'necklaces',
    price: 150,
    oldPrice: null,
    image: 'images/necklace-update-2.jpeg',
    badge: 'New',
    description: 'A stunning and elegant piece crafted for the modern woman.',
    sizes: ['16"', '18"'],
    sku: 'AUR-NK-UPDATE-2',
    material: 'Premium Quality'
  }  ,{
    id: 602,
    name: 'Elegant Necklace 3',
    category: 'necklaces',
    price: 150,
    oldPrice: null,
    image: 'images/necklace-update-3.jpeg',
    badge: 'New',
    description: 'A stunning and elegant piece crafted for the modern woman.',
    sizes: ['16"', '18"'],
    sku: 'AUR-NK-UPDATE-3',
    material: 'Premium Quality'
  }  ,{
    id: 603,
    name: 'Elegant Necklace 4',
    category: 'necklaces',
    price: 150,
    oldPrice: null,
    image: 'images/necklace-update-4.jpeg',
    badge: 'New',
    description: 'A stunning and elegant piece crafted for the modern woman.',
    sizes: ['16"', '18"'],
    sku: 'AUR-NK-UPDATE-4',
    material: 'Premium Quality'
  }  ,{
    id: 604,
    name: 'Elegant Necklace 5',
    category: 'necklaces',
    price: 150,
    oldPrice: null,
    image: 'images/necklace-update-5.jpeg',
    badge: 'New',
    description: 'A stunning and elegant piece crafted for the modern woman.',
    sizes: ['16"', '18"'],
    sku: 'AUR-NK-UPDATE-5',
    material: 'Premium Quality'
  }  ,{
    id: 605,
    name: 'Elegant Necklace 6',
    category: 'necklaces',
    price: 150,
    oldPrice: null,
    image: 'images/necklace-update-6.jpeg',
    badge: 'New',
    description: 'A stunning and elegant piece crafted for the modern woman.',
    sizes: ['16"', '18"'],
    sku: 'AUR-NK-UPDATE-6',
    material: 'Premium Quality'
  }  ,{
    id: 606,
    name: 'Elegant Necklace 7',
    category: 'necklaces',
    price: 150,
    oldPrice: null,
    image: 'images/necklace-update-7.jpeg',
    badge: 'New',
    description: 'A stunning and elegant piece crafted for the modern woman.',
    sizes: ['16"', '18"'],
    sku: 'AUR-NK-UPDATE-7',
    material: 'Premium Quality'
  }  ,{
    id: 607,
    name: 'Elegant Necklace 8',
    category: 'necklaces',
    price: 150,
    oldPrice: null,
    image: 'images/necklace-update-8.jpeg',
    badge: 'New',
    description: 'A stunning and elegant piece crafted for the modern woman.',
    sizes: ['16"', '18"'],
    sku: 'AUR-NK-UPDATE-8',
    material: 'Premium Quality'
  }  ,{
    id: 608,
    name: 'Elegant Necklace 9',
    category: 'necklaces',
    price: 100,
    oldPrice: null,
    image: 'images/necklace-update-9.jpeg',
    badge: 'New',
    description: 'A stunning and elegant piece crafted for the modern woman.',
    sizes: ['16"', '18"'],
    sku: 'AUR-NK-UPDATE-9',
    material: 'Premium Quality'
  }  ,{
    id: 609,
    name: 'Elegant Necklace 10',
    category: 'necklaces',
    price: 170,
    oldPrice: null,
    image: 'images/necklace-update-10.jpeg',
    badge: 'New',
    description: 'A stunning and elegant piece crafted for the modern woman.',
    sizes: ['16"', '18"'],
    sku: 'AUR-NK-UPDATE-10',
    material: 'Premium Quality'
  }  ,{
    id: 610,
    name: 'Elegant Necklace 11',
    category: 'necklaces',
    price: 120,
    oldPrice: null,
    image: 'images/necklace-update-11.jpeg',
    badge: 'New',
    description: 'A stunning and elegant piece crafted for the modern woman.',
    sizes: ['16"', '18"'],
    sku: 'AUR-NK-UPDATE-11',
    material: 'Premium Quality'
  }  ,{
    id: 611,
    name: 'Elegant Necklace 12',
    category: 'necklaces',
    price: 230,
    oldPrice: null,
    image: 'images/necklace-update-12.jpeg',
    badge: 'New',
    description: 'A stunning and elegant piece crafted for the modern woman.',
    sizes: ['16"', '18"'],
    sku: 'AUR-NK-UPDATE-12',
    material: 'Premium Quality'
  }
];

// ==========================================
// CART STATE
// ==========================================
let cart = JSON.parse(localStorage.getItem('aurelia_cart')) || [];

function saveCart() {
  localStorage.setItem('aurelia_cart', JSON.stringify(cart));
}

function addToCart(productId, quantity = 1, size = null) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingIndex = cart.findIndex(item => item.id === productId && item.size === size);

  if (existingIndex > -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
      size: size,
    });
  }

  saveCart();
  updateCartUI();
  showToast(`${product.name} added to cart`);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartUI();
}

function updateCartItemQty(index, delta) {
  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) {
    removeFromCart(index);
    return;
  }
  saveCart();
  updateCartUI();
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

// ==========================================
// UI UPDATES
// ==========================================
function updateCartUI() {
  // Update cart count badges
  const countEls = document.querySelectorAll('.navbar__cart-count');
  const count = getCartCount();
  countEls.forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });

  // Update cart sidebar content
  renderCartSidebar();
}

function renderCartSidebar() {
  const itemsContainer = document.getElementById('cartItems');
  const totalEl = document.getElementById('cartTotal');
  const emptyEl = document.getElementById('cartEmpty');
  const footerEl = document.getElementById('cartFooter');

  if (!itemsContainer) return;

  if (cart.length === 0) {
    itemsContainer.innerHTML = '';
    if (emptyEl) emptyEl.style.display = 'block';
    if (footerEl) footerEl.style.display = 'none';
    return;
  }

  if (emptyEl) emptyEl.style.display = 'none';
  if (footerEl) footerEl.style.display = 'block';

  itemsContainer.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item__image" />
      <div class="cart-item__info">
        <div class="cart-item__name">${item.name}</div>
        <div class="cart-item__price">EGP ${item.price.toFixed(2)}</div>
        ${item.size ? `<div style="font-size: 0.7rem; color: #888; margin-bottom: 6px;">Size: ${item.size}</div>` : ''}
        <div class="cart-item__qty">
          <button onclick="updateCartItemQty(${index}, -1)">−</button>
          <span>${item.quantity}</span>
          <button onclick="updateCartItemQty(${index}, 1)">+</button>
        </div>
        <div class="cart-item__remove" onclick="removeFromCart(${index})">Remove</div>
      </div>
    </div>
  `).join('');

  if (totalEl) {
    totalEl.textContent = `EGP ${getCartTotal().toFixed(2)}`;
  }
}

// ==========================================
// CART SIDEBAR TOGGLE
// ==========================================
function openCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  if (sidebar) sidebar.classList.add('active');
  if (overlay) overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  if (sidebar) sidebar.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// ==========================================
// TOAST NOTIFICATION
// ==========================================
function showToast(message) {
  // Remove existing toast
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast__icon">✓</span>
    <span>${message}</span>
  `;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

// ==========================================
// MOBILE MENU
// ==========================================
function initMobileMenu() {
  const menuBtn = document.querySelector('.navbar__menu-btn');
  const navLinks = document.querySelector('.navbar__links');

  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close on link click
  navLinks.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}

// ==========================================
// SCROLL ANIMATIONS (Fade in)
// ==========================================
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in');

  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach(el => observer.observe(el));
}

// ==========================================
// PRODUCT GRID RENDERING
// ==========================================
function renderProducts(containerId, products, limit = null) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const list = limit ? products.slice(0, limit) : products;

  container.innerHTML = list.map(product => `
    <div class="product-card fade-in" onclick="goToProduct(${product.id})">
      <div class="product-card__image-wrap">
        <img src="${product.image}" alt="${product.name}" class="product-card__image" loading="lazy" />
        ${product.badge ? `<span class="product-card__badge">${product.badge}</span>` : ''}
        <div class="product-card__actions">
          <button class="product-card__action-btn" onclick="event.stopPropagation(); addToCart(${product.id})" title="Add to Cart">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </button>
          <button class="product-card__action-btn" onclick="event.stopPropagation(); showToast('Added to wishlist')" title="Add to Wishlist">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="product-card__info">
        <div class="product-card__category">${product.category}</div>
        <div class="product-card__name">${product.name}</div>
        <div class="product-card__price">
          ${product.oldPrice ? `<span class="product-card__price--old">EGP ${product.oldPrice.toFixed(2)}</span>` : ''}
          EGP ${product.price.toFixed(2)}
        </div>
      </div>
    </div>
  `).join('');

  // Re-init scroll animations for just-added products
  initScrollAnimations();
}

// ==========================================
// SHOP PAGE: FILTERS
// ==========================================
function initShopFilters() {
  const filterBtns = document.querySelectorAll('.shop__filter-btn');
  const countEl = document.querySelector('.shop__count');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.dataset.category;
      const filtered = category === 'all'
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === category);

      renderProducts('shopGrid', filtered);

      if (countEl) {
        countEl.textContent = `Showing ${filtered.length} product${filtered.length !== 1 ? 's' : ''}`;
      }
    });
  });
}

// ==========================================
// PRODUCT DETAIL PAGE
// ==========================================
function goToProduct(id) {
  window.location.href = `product-details.html?id=${id}`;
}

function initProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get('id'));
  const product = PRODUCTS.find(p => p.id === productId);

  if (!product) return;

  // Set page content
  const setTextContent = (selector, value) => {
    const el = document.querySelector(selector);
    if (el) el.textContent = value;
  };

  const setHTML = (selector, value) => {
    const el = document.querySelector(selector);
    if (el) el.innerHTML = value;
  };

  setTextContent('.product-detail__name', product.name);
  setTextContent('.product-detail__category', product.category.toUpperCase());
  setTextContent('.product-detail__desc', product.description);

  // Price
  const priceEl = document.querySelector('.product-detail__price');
  if (priceEl) {
    priceEl.innerHTML = product.oldPrice
      ? `<span style="text-decoration:line-through;color:#c4c4c4;margin-right:8px;">EGP ${product.oldPrice.toFixed(2)}</span> EGP ${product.price.toFixed(2)}`
      : `EGP ${product.price.toFixed(2)}`;
  }

  // Image
  const imgEl = document.querySelector('.product-detail__gallery img');
  if (imgEl) {
    imgEl.src = product.image;
    imgEl.alt = product.name;
  }

  // Sizes
  const sizesContainer = document.querySelector('.product-detail__sizes');
  const optionsContainer = document.querySelector('.product-detail__options');
  if (product.sizes.length > 0 && sizesContainer) {
    sizesContainer.innerHTML = product.sizes.map((size, i) =>
      `<button class="product-detail__size ${i === 0 ? 'active' : ''}" onclick="selectSize(this)">${size}</button>`
    ).join('');
  } else if (optionsContainer) {
    optionsContainer.style.display = 'none';
  }

  // Meta
  setHTML('.product-detail__meta', `
    <div class="product-detail__meta-item"><span>SKU:</span> ${product.sku}</div>
    <div class="product-detail__meta-item"><span>Material:</span> ${product.material}</div>
    <div class="product-detail__meta-item"><span>Category:</span> ${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</div>
  `);

  // Add to cart button
  const addBtn = document.getElementById('addToCartBtn');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      const activeSize = document.querySelector('.product-detail__size.active');
      const qtyEl = document.getElementById('productQty');
      const qty = qtyEl ? parseInt(qtyEl.textContent) : 1;
      const size = activeSize ? activeSize.textContent : null;
      addToCart(product.id, qty, size);
    });
  }

  // Quantity buttons
  const qtyMinus = document.getElementById('qtyMinus');
  const qtyPlus = document.getElementById('qtyPlus');
  const qtyValue = document.getElementById('productQty');

  if (qtyMinus && qtyPlus && qtyValue) {
    qtyMinus.addEventListener('click', () => {
      let val = parseInt(qtyValue.textContent);
      if (val > 1) qtyValue.textContent = val - 1;
    });
    qtyPlus.addEventListener('click', () => {
      let val = parseInt(qtyValue.textContent);
      qtyValue.textContent = val + 1;
    });
  }

  // Related products
  const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  if (related.length < 4) {
    const extra = PRODUCTS.filter(p => p.id !== product.id && !related.includes(p)).slice(0, 4 - related.length);
    related.push(...extra);
  }
  renderProducts('relatedProducts', related, 4);
}

function selectSize(btn) {
  document.querySelectorAll('.product-detail__size').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// ==========================================
// CONTACT FORM
// ==========================================
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Message sent successfully!');
    form.reset();
  });
}

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initScrollAnimations();
  updateCartUI();

  // Page-specific init
  if (document.getElementById('featuredProducts')) {
    renderProducts('featuredProducts', PRODUCTS, 4);
  }

  if (document.getElementById('shopGrid')) {
    renderProducts('shopGrid', PRODUCTS);
    initShopFilters();
  }

  if (document.querySelector('.product-detail')) {
    initProductDetail();
  }

  if (document.getElementById('contactForm')) {
    initContactForm();
  }

  // Cart sidebar events
  const cartBtn = document.querySelector('.navbar__cart');
  if (cartBtn) cartBtn.addEventListener('click', openCart);

  const cartClose = document.getElementById('cartClose');
  if (cartClose) cartClose.addEventListener('click', closeCart);

  const cartOverlay = document.getElementById('cartOverlay');
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

  // Add page transition class
  document.body.classList.add('page-transition');
});
