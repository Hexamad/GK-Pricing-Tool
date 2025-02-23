import { Product } from '@/lib/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'White LD PU Foam',
    description: 'High-quality foam padding material perfect for furniture, packaging, and industrial applications.',
    basePrice: 10,
    category: 'Foam',
    image: 'https://5.imimg.com/data5/XF/AM/SG/NSDMERP-56297551/image-1000x1000.jpeg',
    densities: ['9 density', ],
    dimensions: [2,3, 4,  5, 6, 7, 8, 9 ,10,12,15,18,19, 20,21, 25, 30,35, 40,45, 50,70, 75,80,85,90,95, 100,125, 150, 200, 250],
    
      sizes: {
        "feet": [
          '6 feet x 3 feet', '6 feet x 4 feet', '6 feet x 5 feet', '6 feet x 6 feet', '6.25 feet x 3 feet', '6.25 feet x 4 feet', '6.25 feet x 5 feet', '6.25 feet x 6 feet', 
          '6.5 feet x 3 feet', '6.5 feet x 4 feet', '6.5 feet x 5 feet', '6.5 feet x 6 feet'
        ],
        "inches": [
          '72 inches x 36 inches', '72 inches x 48 inches', '72 inches x 60 inches', '72 inches x 72 inches',
          '75 inches x 24 inches', '75 inches x 30 inches', '75 inches x 36 inches', '75 inches x 48 inches', '75 inches x 60 inches', '75 inches x 72 inches',
          '78 inches x 24 inches', '78 inches x 30 inches', '78 inches x 36 inches', '78 inches x 48 inches', '78 inches x 60 inches', '78 inches x 72 inches'
        ],
        "cm": [
         '183 cm x 122 cm', '183 cm x 152 cm', '183 cm x 183 cm',
          '191 cm x 61 cm', '191 cm x 76 cm', '191 cm x 91 cm', '191 cm x 122 cm', '191 cm x 152 cm', '191 cm x 183 cm',
          '198 cm x 61 cm', '198 cm x 76 cm', '198 cm x 91 cm', '198 cm x 122 cm', '198 cm x 152 cm', '198 cm x 183 cm'
        ],
        "mm": [
          '1829 mm x 1219 mm', '1829 mm x 1524 mm', '1829 mm x 1829 mm',
          '1905 mm x 610 mm', '1905 mm x 762 mm', '1905 mm x 914 mm', '1905 mm x 1219 mm', '1905 mm x 1524 mm', '1905 mm x 1829 mm',
          '1981 mm x 610 mm', '1981 mm x 762 mm', '1981 mm x 914 mm', '1981 mm x 1219 mm', '1981 mm x 1524 mm', '1981 mm x 1829 mm'
        ]
      },
    
    
    features: ['Durable', 'Fire resistant', 'Moisture resistant', 'Custom cuttable'],
    specs: {
      'Material': 'Polyurethane',
      'Certification': 'ISO 9001',
      'Fire Rating': 'Class B',
      'Color': 'White'
    },
    metrics: ['mm', 'cm', 'inch', 'feet']
  },
  {
    id: '2',
    name: 'HD PU Foam',
    description: 'High-density polyurethane foam suitable for premium furniture, bedding, and industrial uses.',
    basePrice: 10,
    category: 'Foam',
    image: 'https://makerbazar.in/cdn/shop/products/high-density-pu-foam-500x500.webp?v=1681727081&width=500',
    densities: ['28 density', '32 density', '40 density', '50 density'],
    dimensions: [2,3, 4,  5, 6, 7, 8, 9 ,10,12,15,18,19, 20,21, 25, 30,35, 40,45, 50,70, 75,80,85,90,95, 100,125, 150, 200, 250],
    sizes: {
      "feet": [
        '6 feet x 2 feet', '6 feet x 2.5 feet', '6 feet x 3 feet', '6 feet x 4 feet', '6 feet x 5 feet', '6 feet x 6 feet',
        '6.25 feet x 2 feet', '6.25 feet x 2.5 feet', '6.25 feet x 3 feet', '6.25 feet x 4 feet', '6.25 feet x 5 feet', '6.25 feet x 6 feet',
        '6.5 feet x 2 feet', '6.5 feet x 2.5 feet', '6.5 feet x 3 feet', '6.5 feet x 4 feet', '6.5 feet x 5 feet', '6.5 feet x 6 feet'
      ],
      "inches": [
        '72 inches x 24 inches', '72 inches x 30 inches', '72 inches x 36 inches', '72 inches x 48 inches', '72 inches x 60 inches', '72 inches x 72 inches',
        '75 inches x 24 inches', '75 inches x 30 inches', '75 inches x 36 inches', '75 inches x 48 inches', '75 inches x 60 inches', '75 inches x 72 inches',
        '78 inches x 24 inches', '78 inches x 30 inches', '78 inches x 36 inches', '78 inches x 48 inches', '78 inches x 60 inches', '78 inches x 72 inches'
      ],
      "cm": [
        '183 cm x 61 cm', '183 cm x 76 cm', '183 cm x 91 cm', '183 cm x 122 cm', '183 cm x 152 cm', '183 cm x 183 cm',
        '191 cm x 61 cm', '191 cm x 76 cm', '191 cm x 91 cm', '191 cm x 122 cm', '191 cm x 152 cm', '191 cm x 183 cm',
        '198 cm x 61 cm', '198 cm x 76 cm', '198 cm x 91 cm', '198 cm x 122 cm', '198 cm x 152 cm', '198 cm x 183 cm'
      ],
      "mm": [
        '1829 mm x 610 mm', '1829 mm x 762 mm', '1829 mm x 914 mm', '1829 mm x 1219 mm', '1829 mm x 1524 mm', '1829 mm x 1829 mm',
        '1905 mm x 610 mm', '1905 mm x 762 mm', '1905 mm x 914 mm', '1905 mm x 1219 mm', '1905 mm x 1524 mm', '1905 mm x 1829 mm',
        '1981 mm x 610 mm', '1981 mm x 762 mm', '1981 mm x 914 mm', '1981 mm x 1219 mm', '1981 mm x 1524 mm', '1981 mm x 1829 mm'
      ]
    },
    features: ['Durable', 'High density', 'Moisture resistant', 'Custom cuttable'],
    specs: {
      'Material': 'Polyurethane',
      'Certification': 'ISO 9001',
      'Fire Rating': 'Class B',
      'Color': 'White'
    },
    metrics: ['mm', 'cm', 'inch', 'feet']
},

  {
    
      id: '3',
      name: 'Super Soft Foam',
      description: 'Premium quality super soft foam, ideal for upholstery, mattresses, and industrial use.',
      basePrice: 10, // Adjust the price if needed
      category: 'Foam',
      image: 'https://5.imimg.com/data5/RA/FY/MY-56919196/super-soft-foam-sheet.jpg',
      densities: ['24 density', '28 density', '32 density','40 density', '40 HD density'],
      dimensions: [2,3, 4,  5, 6, 7, 8, 9 ,10,12,15,18,19, 20,21, 25, 30,35, 40,45, 50,70, 75,80,85,90,95, 100,125, 150, 200, 250],
      sizes: {
        "feet": [
          '6 feet x 2 feet', '6 feet x 2.5 feet', '6 feet x 3 feet', '6 feet x 4 feet', '6 feet x 5 feet', '6 feet x 6 feet',
          '6.25 feet x 2 feet', '6.25 feet x 2.5 feet', '6.25 feet x 3 feet', '6.25 feet x 4 feet', '6.25 feet x 5 feet', '6.25 feet x 6 feet',
          '6.5 feet x 2 feet', '6.5 feet x 2.5 feet', '6.5 feet x 3 feet', '6.5 feet x 4 feet', '6.5 feet x 5 feet', '6.5 feet x 6 feet'
        ],
        "inches": [
          '72 inches x 24 inches', '72 inches x 30 inches', '72 inches x 36 inches', '72 inches x 48 inches', '72 inches x 60 inches', '72 inches x 72 inches',
          '75 inches x 24 inches', '75 inches x 30 inches', '75 inches x 36 inches', '75 inches x 48 inches', '75 inches x 60 inches', '75 inches x 72 inches',
          '78 inches x 24 inches', '78 inches x 30 inches', '78 inches x 36 inches', '78 inches x 48 inches', '78 inches x 60 inches', '78 inches x 72 inches'
        ],
        "cm": [
          '183 cm x 61 cm', '183 cm x 76 cm', '183 cm x 91 cm', '183 cm x 122 cm', '183 cm x 152 cm', '183 cm x 183 cm',
          '191 cm x 61 cm', '191 cm x 76 cm', '191 cm x 91 cm', '191 cm x 122 cm', '191 cm x 152 cm', '191 cm x 183 cm',
          '198 cm x 61 cm', '198 cm x 76 cm', '198 cm x 91 cm', '198 cm x 122 cm', '198 cm x 152 cm', '198 cm x 183 cm'
        ],
        "mm": [
          '1829 mm x 610 mm', '1829 mm x 762 mm', '1829 mm x 914 mm', '1829 mm x 1219 mm', '1829 mm x 1524 mm', '1829 mm x 1829 mm',
          '1905 mm x 610 mm', '1905 mm x 762 mm', '1905 mm x 914 mm', '1905 mm x 1219 mm', '1905 mm x 1524 mm', '1905 mm x 1829 mm',
          '1981 mm x 610 mm', '1981 mm x 762 mm', '1981 mm x 914 mm', '1981 mm x 1219 mm', '1981 mm x 1524 mm', '1981 mm x 1829 mm'
        ]
      },
      features: ['Super soft', 'Highly durable', 'Moisture resistant', 'Custom cuttable'],
      specs: {
        'Material': 'Polyurethane',
        'Certification': 'ISO 9001',
        'Fire Rating': 'Class B',
        'Color': 'White'
      
    },
    metrics: ['mm', 'cm', 'inch', 'feet']
  },



  {
    id: '4',
    name: 'Memory Foam Sheets',
    description: 'High-quality memory foam sheets ideal for bedding, upholstery, and customized cushioning applications.',
    basePrice: 10, // Adjust as needed
    category: 'Foam',
    image: 'https://tiimg.tistatic.com/fp/1/007/209/white-color-memory-foam-sheets-263.jpg',
    densities: ['45 density', '55 density', '65 density'],
    dimensions: [20,25, 30, 35,40, 45,50,60,70, 75,80,85,90,95, 100,125, 150],
    sizes: {
      "feet": [
        '6 feet x 2 feet', '6 feet x 2.5 feet', '6 feet x 3 feet', '6 feet x 4 feet', '6 feet x 5 feet', '6 feet x 6 feet',
        '6.25 feet x 2 feet', '6.25 feet x 2.5 feet', '6.25 feet x 3 feet', '6.25 feet x 4 feet', '6.25 feet x 5 feet', '6.25 feet x 6 feet',
        '6.5 feet x 2 feet', '6.5 feet x 2.5 feet', '6.5 feet x 3 feet', '6.5 feet x 4 feet', '6.5 feet x 5 feet', '6.5 feet x 6 feet'
      ],
      "inches": [
        '72 inches x 24 inches', '72 inches x 30 inches', '72 inches x 36 inches', '72 inches x 48 inches', '72 inches x 60 inches', '72 inches x 72 inches',
        '75 inches x 24 inches', '75 inches x 30 inches', '75 inches x 36 inches', '75 inches x 48 inches', '75 inches x 60 inches', '75 inches x 72 inches',
        '78 inches x 24 inches', '78 inches x 30 inches', '78 inches x 36 inches', '78 inches x 48 inches', '78 inches x 60 inches', '78 inches x 72 inches'
      ],
      "cm": [
        '183 cm x 61 cm', '183 cm x 76 cm', '183 cm x 91 cm', '183 cm x 122 cm', '183 cm x 152 cm', '183 cm x 183 cm',
        '191 cm x 61 cm', '191 cm x 76 cm', '191 cm x 91 cm', '191 cm x 122 cm', '191 cm x 152 cm', '191 cm x 183 cm',
        '198 cm x 61 cm', '198 cm x 76 cm', '198 cm x 91 cm', '198 cm x 122 cm', '198 cm x 152 cm', '198 cm x 183 cm'
      ],
      "mm": [
        '1829 mm x 610 mm', '1829 mm x 762 mm', '1829 mm x 914 mm', '1829 mm x 1219 mm', '1829 mm x 1524 mm', '1829 mm x 1829 mm',
        '1905 mm x 610 mm', '1905 mm x 762 mm', '1905 mm x 914 mm', '1905 mm x 1219 mm', '1905 mm x 1524 mm', '1905 mm x 1829 mm',
        '1981 mm x 610 mm', '1981 mm x 762 mm', '1981 mm x 914 mm', '1981 mm x 1219 mm', '1981 mm x 1524 mm', '1981 mm x 1829 mm'
      ]
    },
    features: ['Comfortable', 'Pressure-relieving', 'Durable', 'Custom cuttable'],
    specs: {
      'Material': 'Memory Foam',
      'Certification': 'ISO 9001',
      'Fire Rating': 'Class B',
      'Color': 'White'
    },
    metrics: ['mm', 'cm', 'inch', 'feet']
  },


  { 
    id: '5',
    name: 'Gel Memory Foam Sheets',
    description: 'Premium gel-infused memory foam sheets designed for superior comfort and durability, suitable for bedding, furniture, and specialized applications.',
    basePrice: 10, // Assuming a base price; adjust as needed
    category: 'Foam',
    image: 'https://m.media-amazon.com/images/I/81LvYefzOFL._SL1500_.jpg',
    densities: ['45 density', '55 density', '65 density'], // As per the description
    dimensions: [20,25, 30, 35,40, 45,50,60,70, 75,80,85,90,95, 100,125, 150],
    sizes: {
      "feet": [
        '6 feet x 2 feet', '6 feet x 2.5 feet', '6 feet x 3 feet', '6 feet x 4 feet', '6 feet x 5 feet', '6 feet x 6 feet',
        '6.25 feet x 2 feet', '6.25 feet x 2.5 feet', '6.25 feet x 3 feet', '6.25 feet x 4 feet', '6.25 feet x 5 feet', '6.25 feet x 6 feet',
        '6.5 feet x 2 feet', '6.5 feet x 2.5 feet', '6.5 feet x 3 feet', '6.5 feet x 4 feet', '6.5 feet x 5 feet', '6.5 feet x 6 feet'
      ],
      "inches": [
        '72 inches x 24 inches', '72 inches x 30 inches', '72 inches x 36 inches', '72 inches x 48 inches', '72 inches x 60 inches', '72 inches x 72 inches',
        '75 inches x 24 inches', '75 inches x 30 inches', '75 inches x 36 inches', '75 inches x 48 inches', '75 inches x 60 inches', '75 inches x 72 inches',
        '78 inches x 24 inches', '78 inches x 30 inches', '78 inches x 36 inches', '78 inches x 48 inches', '78 inches x 60 inches', '78 inches x 72 inches'
      ],
      "cm": [
        '183 cm x 61 cm', '183 cm x 76 cm', '183 cm x 91 cm', '183 cm x 122 cm', '183 cm x 152 cm', '183 cm x 183 cm',
        '191 cm x 61 cm', '191 cm x 76 cm', '191 cm x 91 cm', '191 cm x 122 cm', '191 cm x 152 cm', '191 cm x 183 cm',
        '198 cm x 61 cm', '198 cm x 76 cm', '198 cm x 91 cm', '198 cm x 122 cm', '198 cm x 152 cm', '198 cm x 183 cm'
      ],
      "mm": [
        '1829 mm x 610 mm', '1829 mm x 762 mm', '1829 mm x 914 mm', '1829 mm x 1219 mm', '1829 mm x 1524 mm', '1829 mm x 1829 mm',
        '1905 mm x 610 mm', '1905 mm x 762 mm', '1905 mm x 914 mm', '1905 mm x 1219 mm', '1905 mm x 1524 mm', '1905 mm x 1829 mm',
        '1981 mm x 610 mm', '1981 mm x 762 mm', '1981 mm x 914 mm', '1981 mm x 1219 mm', '1981 mm x 1524 mm', '1981 mm x 1829 mm'
      ]
    },
    features: ['Gel-infused for cooling', 'Pressure-relief properties', 'Highly durable', 'Customizable sizes'],
    specs: {
      'Material': 'Gel-infused Polyurethane',
      'Certification': 'ISO 9001',
      'Fire Rating': 'Class B',
      'Color': 'White'
    },
    metrics: ['mm', 'cm', 'inch', 'feet']
  },

  {
    id: '6',
      name: 'Natural LATEX SHEET', 
      description: 'High-quality latex sheet material suitable for bedding, furniture, and industrial uses.',
      basePrice: 15,
      category: 'Foam',
      image: 'https://5.imimg.com/data5/ANDROID/Default/2020/9/HH/UG/DH/44643334/product-jpeg-500x500.png',
      densities: ['one side pin core - 75 Density', 'two side pin core - 75 Density',],
      dimensions: [12,18,25,50,75,100,150],
      sizes: {
        "feet": [
          '6 feet x 2 feet', '6 feet x 2.5 feet', '6 feet x 3 feet', '6 feet x 4 feet', '6 feet x 5 feet', '6 feet x 6 feet',
          '6.25 feet x 2 feet', '6.25 feet x 2.5 feet', '6.25 feet x 3 feet', '6.25 feet x 4 feet', '6.25 feet x 5 feet', '6.25 feet x 6 feet',
          '6.5 feet x 2 feet', '6.5 feet x 2.5 feet', '6.5 feet x 3 feet', '6.5 feet x 4 feet', '6.5 feet x 5 feet', '6.5 feet x 6 feet'
        ],
        "inches": [
          '72 inches x 36 inches', '72 inches x 36inches ', '75 inches x 36 inches', '75inches x 36 inches', '75 inches x 24inches', '75 inches x 24 inches',
          '75 inches x 24 inches', '75 inches x 60 inches', '78 inches x 72 inches', '78 inches x 60 inches', '78 inches x 72 inches', 
        ],
        "cm": [
          '183 cm x 61 cm', '183 cm x 76 cm', '183 cm x 91 cm', '183 cm x 122 cm', '183 cm x 152 cm', '183 cm x 183 cm',
          '191 cm x 61 cm', '191 cm x 76 cm', '191 cm x 91 cm', '191 cm x 122 cm', '191 cm x 152 cm', '191 cm x 183 cm',
          '198 cm x 61 cm', '198 cm x 76 cm', '198 cm x 91 cm', '198 cm x 122 cm', '198 cm x 152 cm', '198 cm x 183 cm'
        ],
        "mm": [
          '1829 mm x 610 mm', '1829 mm x 762 mm', '1829 mm x 914 mm', '1829 mm x 1219 mm', '1829 mm x 1524 mm', '1829 mm x 1829 mm',
          '1905 mm x 610 mm', '1905 mm x 762 mm', '1905 mm x 914 mm', '1905 mm x 1219 mm', '1905 mm x 1524 mm', '1905 mm x 1829 mm',
          '1981 mm x 610 mm', '1981 mm x 762 mm', '1981 mm x 914 mm', '1981 mm x 1219 mm', '1981 mm x 1524 mm', '1981 mm x 1829 mm'
        ]
      },
      features: ['Durable', 'Hypoallergenic', 'Moisture resistant', 'Custom cuttable'],
      specs: {
        'Material': 'Natural Latex',
        'Certification': 'ISO 9001',
        'Fire Rating': 'Class C',
        'Color': 'Beige'
      },
      metrics: ['mm', 'cm', 'inch', 'feet']
  },


  {
    id: '7',
    name: 'Natural LATEX 7 ZONE SHEETS',
    description: 'Premium 7-zone latex foam sheets designed for optimal comfort and support in bedding, furniture, and ergonomic applications.',
    basePrice: 20, // Example base price, you can update this value
    category: 'Foam',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/341157692/MM/LX/YE/141117433/zero-foam-flex-mattress-1000x1000.jpeg', // Replace with an appropriate image URL if available
    densities: ['75 density'], // Adjust if needed
    dimensions: [
       50, 100, 150, // Equivalent to 4 inches
     // Equivalent to 10 inches
    ],
    sizes: {
      "feet": [
        '6 feet x 2 feet', '6 feet x 2.5 feet', '6 feet x 3 feet', '6 feet x 4 feet', '6 feet x 5 feet', '6 feet x 6 feet',
        '6.25 feet x 2 feet', '6.25 feet x 2.5 feet', '6.25 feet x 3 feet', '6.25 feet x 4 feet', '6.25 feet x 5 feet', '6.25 feet x 6 feet',
        '6.5 feet x 2 feet', '6.5 feet x 2.5 feet', '6.5 feet x 3 feet', '6.5 feet x 4 feet', '6.5 feet x 5 feet', '6.5 feet x 6 feet'
      ],
      "inches": [
        '75 inches x 36 inches', '78 inches x 60 inches', '78 inches x 72 inches',
       ],
        
      "cm": [
        '183 cm x 61 cm', '183 cm x 76 cm', '183 cm x 91 cm', '183 cm x 122 cm', '183 cm x 152 cm', '183 cm x 183 cm',
        '191 cm x 61 cm', '191 cm x 76 cm', '191 cm x 91 cm', '191 cm x 122 cm', '191 cm x 152 cm', '191 cm x 183 cm',
        '198 cm x 61 cm', '198 cm x 76 cm', '198 cm x 91 cm', '198 cm x 122 cm', '198 cm x 152 cm', '198 cm x 183 cm'
      ],
      "mm": [
        '1829 mm x 610 mm', '1829 mm x 762 mm', '1829 mm x 914 mm', '1829 mm x 1219 mm', '1829 mm x 1524 mm', '1829 mm x 1829 mm',
        '1905 mm x 610 mm', '1905 mm x 762 mm', '1905 mm x 914 mm', '1905 mm x 1219 mm', '1905 mm x 1524 mm', '1905 mm x 1829 mm',
        '1981 mm x 610 mm', '1981 mm x 762 mm', '1981 mm x 914 mm', '1981 mm x 1219 mm', '1981 mm x 1524 mm', '1981 mm x 1829 mm'
      ]
    },
    features: ['7-zone ergonomic design', 'Eco-friendly', 'Highly durable', 'Custom cuttable'],
    specs: {
      'Material': 'Natural Latex',
      'Certification': 'ISO 9001',
      'Fire Rating': 'Class B',
      'Color': 'White'
    },
    metrics: ['mm', 'cm', 'inch', 'feet']
  },
  

  {
    id: '8',
    name: 'Rubberized Coir Sheet',
    description: 'High-density coir sheet ideal for mattresses, cushions, packaging, and industrial use.',
    basePrice: 15,
    category: 'Foam',
    image: 'https://www.sughana.com/image/products/rubberized-coir-sheet.jpg', // Replace with an actual coir-related image URL
    densities: ['70 density', '80 density', '90 density', '100 density', '110 density'],
    dimensions: [12,15,18, 21, 25, 50, 75, 100,125], // Dimensions in mm
    sizes: {
      "feet": [
        '6 feet x 2 feet', '6 feet x 2.5 feet', '6 feet x 3 feet', '6 feet x 4 feet', '6 feet x 5 feet', '6 feet x 6 feet',
        '6.25 feet x 2 feet', '6.25 feet x 2.5 feet', '6.25 feet x 3 feet', '6.25 feet x 4 feet', '6.25 feet x 5 feet', '6.25 feet x 6 feet',
        '6.5 feet x 2 feet', '6.5 feet x 2.5 feet', '6.5 feet x 3 feet', '6.5 feet x 4 feet', '6.5 feet x 5 feet', '6.5 feet x 6 feet'
      ],
      "inches": [
        '72 inches x 24 inches', '72 inches x 30 inches', '72 inches x 36 inches', '72 inches x 48 inches', '72 inches x 60 inches', '72 inches x 72 inches',
        '75 inches x 24 inches', '75 inches x 30 inches', '75 inches x 36 inches', '75 inches x 48 inches', '75 inches x 60 inches', '75 inches x 72 inches',
        '78 inches x 24 inches', '78 inches x 30 inches', '78 inches x 36 inches', '78 inches x 48 inches', '78 inches x 60 inches', '78 inches x 72 inches'
      ],
      "cm": [
        '183 cm x 61 cm', '183 cm x 76 cm', '183 cm x 91 cm', '183 cm x 122 cm', '183 cm x 152 cm', '183 cm x 183 cm',
        '191 cm x 61 cm', '191 cm x 76 cm', '191 cm x 91 cm', '191 cm x 122 cm', '191 cm x 152 cm', '191 cm x 183 cm',
        '198 cm x 61 cm', '198 cm x 76 cm', '198 cm x 91 cm', '198 cm x 122 cm', '198 cm x 152 cm', '198 cm x 183 cm'
      ],
      "mm": [
        '1829 mm x 610 mm', '1829 mm x 762 mm', '1829 mm x 914 mm', '1829 mm x 1219 mm', '1829 mm x 1524 mm', '1829 mm x 1829 mm',
        '1905 mm x 610 mm', '1905 mm x 762 mm', '1905 mm x 914 mm', '1905 mm x 1219 mm', '1905 mm x 1524 mm', '1905 mm x 1829 mm',
        '1981 mm x 610 mm', '1981 mm x 762 mm', '1981 mm x 914 mm', '1981 mm x 1219 mm', '1981 mm x 1524 mm', '1981 mm x 1829 mm'
      ]
    },
    features: ['Eco-friendly', 'Durable', 'Moisture resistant', 'Custom cuttable'],
    specs: {
      'Material': 'Coir Fiber',
      'Certification': 'ISO 9001',
      'Fire Rating': 'Class B',
      'Color': 'Brown'
    },
    metrics: ['mm', 'cm', 'inch', 'feet']
  },

  {
    id: '9',
    name: 'Rebonded Sheets',
    description: 'High-density rebonded foam sheets designed for enhanced durability and support, suitable for mattresses, cushioning, and industrial applications.',
    basePrice: 10,
    category: 'Foam',
    image: 'https://5.imimg.com/data5/AO/VM/HT/SELLER-6371482/bonded-foam-sheets-500x500.jpg',
    densities: ['80 density', '90 density', '100 density', '110 density',],
    dimensions: [12,15,18,19,20,21, 22,23,24, 25,30,35,40,45,48, 50,55,60,65,70, 75,80,85,90,95,98, 100,110,115,120,125,150],
    sizes: {
      "feet": [
        '6 feet x 2 feet', '6 feet x 2.5 feet', '6 feet x 3 feet', '6 feet x 4 feet', '6 feet x 5 feet', '6 feet x 6 feet',
        '6.25 feet x 2 feet', '6.25 feet x 2.5 feet', '6.25 feet x 3 feet', '6.25 feet x 4 feet', '6.25 feet x 5 feet', '6.25 feet x 6 feet',
        '6.5 feet x 2 feet', '6.5 feet x 2.5 feet', '6.5 feet x 3 feet', '6.5 feet x 4 feet', '6.5 feet x 5 feet', '6.5 feet x 6 feet'
      ],
      "inches": [
        '72 inches x 24 inches', '72 inches x 30 inches', '72 inches x 36 inches', '72 inches x 48 inches', '72 inches x 60 inches', '72 inches x 72 inches',
        '75 inches x 24 inches', '75 inches x 30 inches', '75 inches x 36 inches', '75 inches x 48 inches', '75 inches x 60 inches', '75 inches x 72 inches',
        '78 inches x 24 inches', '78 inches x 30 inches', '78 inches x 36 inches', '78 inches x 48 inches', '78 inches x 60 inches', '78 inches x 72 inches'
      ],
      "cm": [
        '183 cm x 61 cm', '183 cm x 76 cm', '183 cm x 91 cm', '183 cm x 122 cm', '183 cm x 152 cm', '183 cm x 183 cm',
        '191 cm x 61 cm', '191 cm x 76 cm', '191 cm x 91 cm', '191 cm x 122 cm', '191 cm x 152 cm', '191 cm x 183 cm',
        '198 cm x 61 cm', '198 cm x 76 cm', '198 cm x 91 cm', '198 cm x 122 cm', '198 cm x 152 cm', '198 cm x 183 cm'
      ],
      "mm": [
        '1829 mm x 610 mm', '1829 mm x 762 mm', '1829 mm x 914 mm', '1829 mm x 1219 mm', '1829 mm x 1524 mm', '1829 mm x 1829 mm',
        '1905 mm x 610 mm', '1905 mm x 762 mm', '1905 mm x 914 mm', '1905 mm x 1219 mm', '1905 mm x 1524 mm', '1905 mm x 1829 mm',
        '1981 mm x 610 mm', '1981 mm x 762 mm', '1981 mm x 914 mm', '1981 mm x 1219 mm', '1981 mm x 1524 mm', '1981 mm x 1829 mm'
      ]
    },
    features: ['High density', 'Durable', 'Excellent support', 'Customizable sizes'],
    specs: {
      'Material': 'Rebonded Foam',
      'Certification': 'ISO 9001',
      'Fire Rating': 'Class B',
      'Color': 'Multi-color'
    },
    metrics: ['mm', 'cm', 'inch', 'feet']
  },


  // new one 
  {
    id: '10',
    name: 'HR Foam',
    description: 'High-resilience foam suitable for a variety of applications including furniture, bedding, and industrial uses.',
    basePrice: 10,
    category: 'Foam',
    image: 'https://lh3.googleusercontent.com/d/1f8X2nqJvAgHpWJpf_OfTGHzrp7M2gA4U=s220?authuser=0', // Replace with an actual image URL
    densities: ['32 density','40 density','50 density' ,'60 density',],
    dimensions: [2, 3, 4, 5, 6, 8, 10, 12, 15, 18, 19, 20, 25, 30, 35, 40, 45, 50, 60, 70, 75, 80, 85, 90, 100, 125, 150],
    sizes: {
      "feet": [
      '6 feet x 3 feet', '6 feet x 4 feet', '6 feet x 5 feet', '6 feet x 6 feet',
      '6.25 feet x 3 feet', '6.25 feet x 4 feet', '6.25 feet x 5 feet', '6.25 feet x 6 feet',
      '6.5 feet x 3 feet', '6.5 feet x 4 feet', '6.5 feet x 5 feet', '6.5 feet x 6 feet'
      ],
      "inches": [
      '72 inches x 36 inches', '72 inches x 48 inches', '72 inches x 60 inches', '72 inches x 72 inches',
      '75 inches x 36 inches', '75 inches x 48 inches', '75 inches x 60 inches', '75 inches x 72 inches',
      '78 inches x 36 inches', '78 inches x 48 inches', '78 inches x 60 inches', '78 inches x 72 inches'
      ],
      "cm": [
      '183 cm x 91 cm', '183 cm x 122 cm', '183 cm x 152 cm', '183 cm x 183 cm',
      '191 cm x 91 cm', '191 cm x 122 cm', '191 cm x 152 cm', '191 cm x 183 cm',
      '198 cm x 91 cm', '198 cm x 122 cm', '198 cm x 152 cm', '198 cm x 183 cm'
      ],
      "mm": [
      '1829 mm x 914 mm', '1829 mm x 1219 mm', '1829 mm x 1524 mm', '1829 mm x 1829 mm',
      '1905 mm x 914 mm', '1905 mm x 1219 mm', '1905 mm x 1524 mm', '1905 mm x 1829 mm',
      '1981 mm x 914 mm', '1981 mm x 1219 mm', '1981 mm x 1524 mm', '1981 mm x 1829 mm'
      ]
    },
    features: ['Fire retardant', 'Durable', 'Moisture resistant', 'Custom cuttable'],
    specs: {
      'Material': 'Polyurethane',
      'Certification': 'ISO 9001',
      'Fire Rating': 'Class B',
      'Color': 'White'
    },
    metrics: ['mm', 'cm', 'inch', 'feet']
    },







    {
      id: '11',
      name: 'Fire Retardant Foam (FR FOAM)',
      description: 'High-resilience foam suitable for a variety of applications including furniture, bedding, and industrial uses.',
      basePrice: 10,
      category: 'Foam',
      image: 'https://cpimg.tistatic.com/04540749/b/4/Fire-Retardant-Foam.jpg', // Replace with an actual image URL
      densities: ['32 density','40 density','50 density','60 density'],
      dimensions: [2, 3, 4, 5, 6, 8, 10, 12, 15, 18, 19, 20, 25, 30, 35, 40, 45, 50, 60, 70, 75, 80, 85, 90, 100, 125, 150],
      sizes: {
        "feet": [
          '6 feet x 3 feet', '6 feet x 4 feet', '6 feet x 5 feet', '6 feet x 6 feet',
          '6.25 feet x 3 feet', '6.25 feet x 4 feet', '6.25 feet x 5 feet', '6.25 feet x 6 feet',
          '6.5 feet x 3 feet', '6.5 feet x 4 feet', '6.5 feet x 5 feet', '6.5 feet x 6 feet'
        ],
        "inches": [
          '72 inches x 36 inches', '72 inches x 48 inches', '72 inches x 60 inches', '72 inches x 72 inches',
          '75 inches x 36 inches', '75 inches x 48 inches', '75 inches x 60 inches', '75 inches x 72 inches',
          '78 inches x 36 inches', '78 inches x 48 inches', '78 inches x 60 inches', '78 inches x 72 inches'
        ],
        "cm": [
          '183 cm x 91 cm', '183 cm x 122 cm', '183 cm x 152 cm', '183 cm x 183 cm',
          '191 cm x 91 cm', '191 cm x 122 cm', '191 cm x 152 cm', '191 cm x 183 cm',
          '198 cm x 91 cm', '198 cm x 122 cm', '198 cm x 152 cm', '198 cm x 183 cm'
        ],
        "mm": [
          '1829 mm x 914 mm', '1829 mm x 1219 mm', '1829 mm x 1524 mm', '1829 mm x 1829 mm',
          '1905 mm x 914 mm', '1905 mm x 1219 mm', '1905 mm x 1524 mm', '1905 mm x 1829 mm',
          '1981 mm x 914 mm', '1981 mm x 1219 mm', '1981 mm x 1524 mm', '1981 mm x 1829 mm'
        ]
      },
      features: ['Fire retardant', 'Durable', 'Moisture resistant', 'Custom cuttable'],
      specs: {
        'Material': 'Polyurethane',
        'Certification': 'ISO 9001',
        'Fire Rating': 'Class B',
        'Color': 'White'
      },
      metrics: ['mm', 'cm', 'inch', 'feet']
    },
  
  
    {
      id: '12',
      name: 'Convulated Foam',
      description: 'High-resilience foam suitable for a variety of applications including furniture, bedding, and industrial uses.',
      basePrice: 10,
      category: 'Foam',
      image: 'https://5.imimg.com/data5/ANDROID/Default/2021/4/EF/QY/TW/169569/product-jpeg-500x500.jpg', // Replace with an actual image URL
      densities: ["32 density","40 density","50 density",],
      dimensions: [40,45,50, 60,70,75, 80, 85, 90, 100, 125, 150],
      sizes: {
        "feet": [
          '6 feet x 3 feet', '6 feet x 4 feet', '6 feet x 5 feet', '6 feet x 6 feet',
          '6.25 feet x 3 feet', '6.25 feet x 4 feet', '6.25 feet x 5 feet', '6.25 feet x 6 feet',
          '6.5 feet x 3 feet', '6.5 feet x 4 feet', '6.5 feet x 5 feet', '6.5 feet x 6 feet'
        ],
        "inches": [
          '72 inches x 36 inches', '72 inches x 48 inches', '72 inches x 60 inches', '72 inches x 72 inches',
          '75 inches x 36 inches', '75 inches x 48 inches', '75 inches x 60 inches', '75 inches x 72 inches',
          '78 inches x 36 inches', '78 inches x 48 inches', '78 inches x 60 inches', '78 inches x 72 inches'
        ],
        "cm": [
          '183 cm x 91 cm', '183 cm x 122 cm', '183 cm x 152 cm', '183 cm x 183 cm',
          '191 cm x 91 cm', '191 cm x 122 cm', '191 cm x 152 cm', '191 cm x 183 cm',
          '198 cm x 91 cm', '198 cm x 122 cm', '198 cm x 152 cm', '198 cm x 183 cm'
        ],
        "mm": [
          '1829 mm x 914 mm', '1829 mm x 1219 mm', '1829 mm x 1524 mm', '1829 mm x 1829 mm',
          '1905 mm x 914 mm', '1905 mm x 1219 mm', '1905 mm x 1524 mm', '1905 mm x 1829 mm',
          '1981 mm x 914 mm', '1981 mm x 1219 mm', '1981 mm x 1524 mm', '1981 mm x 1829 mm'
        ]
      },
      features: ['Fire retardant', 'Durable', 'Moisture resistant', 'Custom cuttable'],
      specs: {
        'Material': 'Polyurethane',
        'Certification': 'ISO 9001',
        'Fire Rating': 'Class B',
        'Color': 'White'
      },
      metrics: ['mm', 'cm', 'inch', 'feet']
    },

    

  {
  id: '13',
  name: 'EPE SHEETS',
  description: 'High-quality EPE foam sheets, perfect for packaging and protecting a wide range of items during storage or transportation.',
  basePrice: 10,
  category: 'Packing Material',
  image: 'https://m.media-amazon.com/images/I/718+Jl14oOL.jpg',
  densities: ['18 density', '23 density', '28 density'],
  dimensions: [15, 18, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
  sizes: {
    "feet": [
      '6 feet x 3 feet', '6 feet x 4 feet', '6 feet x 5 feet', '6 feet x 6 feet',
      '6.5 feet x 3 feet', '6.5 feet x 4 feet', '6.5 feet x 5 feet', '6.5 feet x 6 feet'
    ]
  },
  features: ['Lightweight', 'Impact resistant', 'Waterproof', 'Customizable'],
  specs: {
    'Material': 'EPE Foam',
    'Certification': 'ISO 9001',
    'Fire Rating': 'Class C',
    'Color': 'White'
  },
  metrics: ['mm', 'cm', 'inch', 'feet']
},
  


{
  id: '14',
  name: 'Bonnel Spring mattress ',
  description: 'High-quality bonnel spring suitable for mattresses and other bedding applications.',
  basePrice: 10,
  category: 'Spring',
  image: 'https://5.imimg.com/data5/HP/QS/MY-54889916/8-inch-bonnell-spring-mattress.jpg', // Replace with an actual image URL
  densities: ['40'],
  dimensions: [75, 100, 125, 150],
  sizes: {
    "feet": [
      '6 feet x 3 feet', '6 feet x 4 feet', '6 feet x 5 feet', '6 feet x 6 feet',
      '6.25 feet x 3 feet', '6.25 feet x 4 feet', '6.25 feet x 5 feet', '6.25 feet x 6 feet',
      '6.5 feet x 3 feet', '6.5 feet x 4 feet', '6.5 feet x 5 feet', '6.5 feet x 6 feet'
    ],
    "inches": [
      '72 inches x 36 inches', '72 inches x 48 inches', '72 inches x 60 inches', '72 inches x 72 inches',
      '75 inches x 36 inches', '75 inches x 48 inches', '75 inches x 60 inches', '75 inches x 72 inches',
      '78 inches x 36 inches', '78 inches x 48 inches', '78 inches x 60 inches', '78 inches x 72 inches'
    ],
    "cm": [
      '183 cm x 91 cm', '183 cm x 122 cm', '183 cm x 152 cm', '183 cm x 183 cm',
      '191 cm x 91 cm', '191 cm x 122 cm', '191 cm x 152 cm', '191 cm x 183 cm',
      '198 cm x 91 cm', '198 cm x 122 cm', '198 cm x 152 cm', '198 cm x 183 cm'
    ],
    "mm": [
      '1829 mm x 914 mm', '1829 mm x 1219 mm', '1829 mm x 1524 mm', '1829 mm x 1829 mm',
      '1905 mm x 914 mm', '1905 mm x 1219 mm', '1905 mm x 1524 mm', '1905 mm x 1829 mm',
      '1981 mm x 914 mm', '1981 mm x 1219 mm', '1981 mm x 1524 mm', '1981 mm x 1829 mm'
    ]
  },
  features: ['Durable', 'High-quality', 'Supportive', 'Customizable sizes'],
  specs: {
    'Material': 'Steel',
    'Certification': 'ISO 9001',
    'Color': 'Silver'
  },
  metrics: ['mm', 'cm', 'inch', 'feet']
},


{
  id: '15',
  name: 'Pocket Spring',
  description: 'High-quality pocket spring suitable for mattresses and other bedding applications.',
  basePrice: 10,
  category: 'Spring',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrwlQTIravsWohMjQMm7uaikDFK6IssioJLA&s', // Replace with an actual image URL
  densities: ['40'],
  dimensions: [110, 145, 150, 180],
  sizes: {
    "feet": [
      '6 feet x 3 feet', '6 feet x 4 feet', '6 feet x 5 feet', '6 feet x 6 feet',
      '6.25 feet x 3 feet', '6.25 feet x 4 feet', '6.25 feet x 5 feet', '6.25 feet x 6 feet',
      '6.5 feet x 3 feet', '6.5 feet x 4 feet', '6.5 feet x 5 feet', '6.5 feet x 6 feet'
    ],
    "inches": [
      '72 inches x 36 inches', '72 inches x 48 inches', '72 inches x 60 inches', '72 inches x 72 inches',
      '75 inches x 36 inches', '75 inches x 48 inches', '75 inches x 60 inches', '75 inches x 72 inches',
      '78 inches x 36 inches', '78 inches x 48 inches', '78 inches x 60 inches', '78 inches x 72 inches'
    ],
    "cm": [
      '183 cm x 91 cm', '183 cm x 122 cm', '183 cm x 152 cm', '183 cm x 183 cm',
      '191 cm x 91 cm', '191 cm x 122 cm', '191 cm x 152 cm', '191 cm x 183 cm',
      '198 cm x 91 cm', '198 cm x 122 cm', '198 cm x 152 cm', '198 cm x 183 cm'
    ],
    "mm": [
      '1829 mm x 914 mm', '1829 mm x 1219 mm', '1829 mm x 1524 mm', '1829 mm x 1829 mm',
      '1905 mm x 914 mm', '1905 mm x 1219 mm', '1905 mm x 1524 mm', '1905 mm x 1829 mm',
      '1981 mm x 914 mm', '1981 mm x 1219 mm', '1981 mm x 1524 mm', '1981 mm x 1829 mm'
    ]
  },
  features: ['Durable', 'High-quality', 'Supportive', 'Customizable sizes'],
  specs: {
    'Material': 'Steel',
    'Certification': 'ISO 9001',
    'Color': 'Silver'
  },
  metrics: ['mm', 'cm', 'inch', 'feet']
},



  // foam ends 







// pillow


  {
    id: '16',
    name: 'Soft Quilted Fibre Pillow',
    description: 'Recron Pillow',
    basePrice: 10,
    category: 'Pillow',
    image: 'https://m.media-amazon.com/images/I/71tQ38DgaEL.jpg', // Replace with an actual coir-related image URL
    densities: ['16 inch * 24 inch' , '17 inch * 27 inch'],
    dimensions: [1], // Dimensions in mm
    sizes: {
    
      "inches": [
        '72 inches x 24 inches', '72 inches x 30 inches', '72 inches x 36 inches', '72 inches x 48 inches', '72 inches x 60 inches', '72 inches x 72 inches',
        '75 inches x 24 inches', '75 inches x 30 inches', '75 inches x 36 inches', '75 inches x 48 inches', '75 inches x 60 inches', '75 inches x 72 inches',
        '78 inches x 24 inches', '78 inches x 30 inches', '78 inches x 36 inches', '78 inches x 48 inches', '78 inches x 60 inches', '78 inches x 72 inches'
      ],
      "cm": [
        '183 cm x 61 cm', '183 cm x 76 cm', '183 cm x 91 cm', '183 cm x 122 cm', '183 cm x 152 cm', '183 cm x 183 cm',
        '191 cm x 61 cm', '191 cm x 76 cm', '191 cm x 91 cm', '191 cm x 122 cm', '191 cm x 152 cm', '191 cm x 183 cm',
        '198 cm x 61 cm', '198 cm x 76 cm', '198 cm x 91 cm', '198 cm x 122 cm', '198 cm x 152 cm', '198 cm x 183 cm'
      ],
      "mm": [
        '1829 mm x 610 mm', '1829 mm x 762 mm', '1829 mm x 914 mm', '1829 mm x 1219 mm', '1829 mm x 1524 mm', '1829 mm x 1829 mm',
        '1905 mm x 610 mm', '1905 mm x 762 mm', '1905 mm x 914 mm', '1905 mm x 1219 mm', '1905 mm x 1524 mm', '1905 mm x 1829 mm',
        '1981 mm x 610 mm', '1981 mm x 762 mm', '1981 mm x 914 mm', '1981 mm x 1219 mm', '1981 mm x 1524 mm', '1981 mm x 1829 mm'
      ]
    },
    features: ['Eco-friendly', 'Durable', 'Moisture resistant', 'Custom cuttable'],
    specs: {
      'Material': 'Coir Fiber',
      'Certification': 'ISO 9001',
      'Fire Rating': 'Class B',
      'Color': 'Brown'
    },
    metrics: ['mm', 'cm', 'inch', ]
  },

  {
    id: '17',
    name: ' ultra soft Gel Memory Foam Pillow',
    description: 'High-density coir sheet ideal for mattresses, cushions, packaging, and industrial use.',
    basePrice: 10,
    category: 'Pillow',
    image: 'https://m.media-amazon.com/images/I/714KDs4Yi-L._AC_UF894,1000_QL80_.jpg', // Replace with an actual coir-related image URL
    densities: ['16 Inch * 24 inch' , '17 Inch * 27 inch'],
    dimensions: [1], // Dimensions in mm
    sizes: {
      "inches": [
        '72 inches x 24 inches', '72 inches x 30 inches', '72 inches x 36 inches', '72 inches x 48 inches', '72 inches x 60 inches', '72 inches x 72 inches',
        '75 inches x 24 inches', '75 inches x 30 inches', '75 inches x 36 inches', '75 inches x 48 inches', '75 inches x 60 inches', '75 inches x 72 inches',
        '78 inches x 24 inches', '78 inches x 30 inches', '78 inches x 36 inches', '78 inches x 48 inches', '78 inches x 60 inches', '78 inches x 72 inches'
      ],
      "cm": [
        '183 cm x 61 cm', '183 cm x 76 cm', '183 cm x 91 cm', '183 cm x 122 cm', '183 cm x 152 cm', '183 cm x 183 cm',
        '191 cm x 61 cm', '191 cm x 76 cm', '191 cm x 91 cm', '191 cm x 122 cm', '191 cm x 152 cm', '191 cm x 183 cm',
        '198 cm x 61 cm', '198 cm x 76 cm', '198 cm x 91 cm', '198 cm x 122 cm', '198 cm x 152 cm', '198 cm x 183 cm'
      ],
      "mm": [
        '1829 mm x 610 mm', '1829 mm x 762 mm', '1829 mm x 914 mm', '1829 mm x 1219 mm', '1829 mm x 1524 mm', '1829 mm x 1829 mm',
        '1905 mm x 610 mm', '1905 mm x 762 mm', '1905 mm x 914 mm', '1905 mm x 1219 mm', '1905 mm x 1524 mm', '1905 mm x 1829 mm',
        '1981 mm x 610 mm', '1981 mm x 762 mm', '1981 mm x 914 mm', '1981 mm x 1219 mm', '1981 mm x 1524 mm', '1981 mm x 1829 mm'
      ]
    },
    features: ['Eco-friendly', 'Durable', 'Moisture resistant', 'Custom cuttable'],
    specs: {
      'Material': 'Coir Fiber',
      'Certification': 'ISO 9001',
      'Fire Rating': 'Class B',
      'Color': 'Brown'
    },
    metrics: ['mm', 'cm', 'inch', ]
  },

  {
    id: '18',
    name: ' Natural Latex Pillow',
    description: ' Ultra-Soft Latex Pillow',
    basePrice: 10,
    category: 'Pillow',
    image: 'https://i5.walmartimages.com/seo/Beautyrest-Latex-Foam-Bed-Pillow-with-Removable-Cover-Standard-Cotton_42fdfb09-594f-4ecf-b3e1-3abea7e61f19.c599602be2324d6febe2ec11f39bfd9d.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF', // Replace with an actual coir-related image URL
    densities: ['16 inch * 24 inch ' , '17 inch * 27 inch '],
    dimensions: [1], // Dimensions in mm
    sizes: {
      
      "inches": [
        '72 inches x 24 inches', '72 inches x 30 inches', '72 inches x 36 inches', '72 inches x 48 inches', '72 inches x 60 inches', '72 inches x 72 inches',
        '75 inches x 24 inches', '75 inches x 30 inches', '75 inches x 36 inches', '75 inches x 48 inches', '75 inches x 60 inches', '75 inches x 72 inches',
        '78 inches x 24 inches', '78 inches x 30 inches', '78 inches x 36 inches', '78 inches x 48 inches', '78 inches x 60 inches', '78 inches x 72 inches'
      ],
      "cm": [
        '183 cm x 61 cm', '183 cm x 76 cm', '183 cm x 91 cm', '183 cm x 122 cm', '183 cm x 152 cm', '183 cm x 183 cm',
        '191 cm x 61 cm', '191 cm x 76 cm', '191 cm x 91 cm', '191 cm x 122 cm', '191 cm x 152 cm', '191 cm x 183 cm',
        '198 cm x 61 cm', '198 cm x 76 cm', '198 cm x 91 cm', '198 cm x 122 cm', '198 cm x 152 cm', '198 cm x 183 cm'
      ],
      "mm": [
        '1829 mm x 610 mm', '1829 mm x 762 mm', '1829 mm x 914 mm', '1829 mm x 1219 mm', '1829 mm x 1524 mm', '1829 mm x 1829 mm',
        '1905 mm x 610 mm', '1905 mm x 762 mm', '1905 mm x 914 mm', '1905 mm x 1219 mm', '1905 mm x 1524 mm', '1905 mm x 1829 mm',
        '1981 mm x 610 mm', '1981 mm x 762 mm', '1981 mm x 914 mm', '1981 mm x 1219 mm', '1981 mm x 1524 mm', '1981 mm x 1829 mm'
      ]
    },
    features: ['Eco-friendly', 'Durable', 'Moisture resistant', 'Custom cuttable'],
    specs: {
      'Material': 'Coir Fiber',
      'Certification': 'ISO 9001',
      'Fire Rating': 'Class B',
      'Color': 'Brown'
    },
    metrics: ['mm', 'cm', 'inch']
  },




  {
    id: '19',
    name: 'ROTTO Fabric',
    description: 'High-quality quilting material ideal for a variety of applications, offering durability and smooth texture.',
    basePrice: 10,
    category: 'Quiltings',
    image: 'https://www.dial4trade.com/uploaded_files/product_images/roto-fabric-for-mattress-u-1180561324259202338.jpg',
    densities: ['100 GSM', '200 GSM', '300 GSM', '400 GSM',],
    sizes: {
      "feet": [
        '6 feet x 2 feet', '6 feet x 2.5 feet', '6 feet x 3 feet', '6 feet x 4 feet', '6 feet x 5 feet', '6 feet x 6 feet',
        '6.25 feet x 2 feet', '6.25 feet x 2.5 feet', '6.25 feet x 3 feet', '6.25 feet x 4 feet', '6.25 feet x 5 feet', '6.25 feet x 6 feet',
        '6.5 feet x 2 feet', '6.5 feet x 2.5 feet', '6.5 feet x 3 feet', '6.5 feet x 4 feet', '6.5 feet x 5 feet', '6.5 feet x 6 feet'
      ],
      "inches": [
        '72 inches x 24 inches', '72 inches x 30 inches', '72 inches x 36 inches', '72 inches x 48 inches', '72 inches x 60 inches', '72 inches x 72 inches',
        '75 inches x 24 inches', '75 inches x 30 inches', '75 inches x 36 inches', '75 inches x 48 inches', '75 inches x 60 inches', '75 inches x 72 inches',
        '78 inches x 24 inches', '78 inches x 30 inches', '78 inches x 36 inches', '78 inches x 48 inches', '78 inches x 60 inches', '78 inches x 72 inches'
      ],
      "cm": [
        '183 cm x 61 cm', '183 cm x 76 cm', '183 cm x 91 cm', '183 cm x 122 cm', '183 cm x 152 cm', '183 cm x 183 cm',
        '191 cm x 61 cm', '191 cm x 76 cm', '191 cm x 91 cm', '191 cm x 122 cm', '191 cm x 152 cm', '191 cm x 183 cm',
        '198 cm x 61 cm', '198 cm x 76 cm', '198 cm x 91 cm', '198 cm x 122 cm', '198 cm x 152 cm', '198 cm x 183 cm'
      ],
      "mm": [
        '1829 mm x 610 mm', '1829 mm x 762 mm', '1829 mm x 914 mm', '1829 mm x 1219 mm', '1829 mm x 1524 mm', '1829 mm x 1829 mm',
        '1905 mm x 610 mm', '1905 mm x 762 mm', '1905 mm x 914 mm', '1905 mm x 1219 mm', '1905 mm x 1524 mm', '1905 mm x 1829 mm',
        '1981 mm x 610 mm', '1981 mm x 762 mm', '1981 mm x 914 mm', '1981 mm x 1219 mm', '1981 mm x 1524 mm', '1981 mm x 1829 mm'
      ]
    },
    features: ['Soft texture', 'Durable', 'Lightweight', 'Easy to handle'],
    specs: {
      'Material': 'Polyester',
      'Certification': 'ISO 14001',
      'Color': 'White'
    },metrics: ['mm', 'cm', 'inch', 'feet'],
    dimensions: [5,7,10,12,15,20,25],
  },

   



  // new fabric 


  {
    id: '20',
    name: 'Cotlook Fabric',
    description: 'High-quality quilting material ideal for a variety of applications, offering durability and smooth texture.',
    basePrice: 10,
    category: 'Quiltings',
    image: 'https://www.dial4trade.com/uploaded_files/product_images/roto-fabric-for-mattress-u-1180561324259202338.jpg',
    densities: ['100 GSM', '200 GSM', '300 GSM', '400 GSM',],
    sizes: {
      "feet": [
        '6 feet x 2 feet', '6 feet x 2.5 feet', '6 feet x 3 feet', '6 feet x 4 feet', '6 feet x 5 feet', '6 feet x 6 feet',
        '6.25 feet x 2 feet', '6.25 feet x 2.5 feet', '6.25 feet x 3 feet', '6.25 feet x 4 feet', '6.25 feet x 5 feet', '6.25 feet x 6 feet',
        '6.5 feet x 2 feet', '6.5 feet x 2.5 feet', '6.5 feet x 3 feet', '6.5 feet x 4 feet', '6.5 feet x 5 feet', '6.5 feet x 6 feet'
      ],
      "inches": [
        '72 inches x 24 inches', '72 inches x 30 inches', '72 inches x 36 inches', '72 inches x 48 inches', '72 inches x 60 inches', '72 inches x 72 inches',
        '75 inches x 24 inches', '75 inches x 30 inches', '75 inches x 36 inches', '75 inches x 48 inches', '75 inches x 60 inches', '75 inches x 72 inches',
        '78 inches x 24 inches', '78 inches x 30 inches', '78 inches x 36 inches', '78 inches x 48 inches', '78 inches x 60 inches', '78 inches x 72 inches'
      ],
      "cm": [
        '183 cm x 61 cm', '183 cm x 76 cm', '183 cm x 91 cm', '183 cm x 122 cm', '183 cm x 152 cm', '183 cm x 183 cm',
        '191 cm x 61 cm', '191 cm x 76 cm', '191 cm x 91 cm', '191 cm x 122 cm', '191 cm x 152 cm', '191 cm x 183 cm',
        '198 cm x 61 cm', '198 cm x 76 cm', '198 cm x 91 cm', '198 cm x 122 cm', '198 cm x 152 cm', '198 cm x 183 cm'
      ],
      "mm": [
        '1829 mm x 610 mm', '1829 mm x 762 mm', '1829 mm x 914 mm', '1829 mm x 1219 mm', '1829 mm x 1524 mm', '1829 mm x 1829 mm',
        '1905 mm x 610 mm', '1905 mm x 762 mm', '1905 mm x 914 mm', '1905 mm x 1219 mm', '1905 mm x 1524 mm', '1905 mm x 1829 mm',
        '1981 mm x 610 mm', '1981 mm x 762 mm', '1981 mm x 914 mm', '1981 mm x 1219 mm', '1981 mm x 1524 mm', '1981 mm x 1829 mm'
      ]
    },
    features: ['Soft texture', 'Durable', 'Lightweight', 'Easy to handle'],
    specs: {
      'Material': 'Polyester',
      'Certification': 'ISO 14001',
      'Color': 'White'
    },metrics: ['mm', 'cm', 'inch', 'feet'],
    dimensions: [5,7,10,12,15,20,25],
  },


  {
    id: '21',
    name: 'Satin Fabric',
    description: 'High-quality quilting material ideal for a variety of applications, offering durability and smooth texture.',
    basePrice: 10,
    category: 'Quiltings',
    image: 'https://www.dial4trade.com/uploaded_files/product_images/roto-fabric-for-mattress-u-1180561324259202338.jpg',
    densities: ['100 GSM', '200 GSM', '300 GSM', '400 GSM',],
    sizes: {
      "feet": [
        '6 feet x 2 feet', '6 feet x 2.5 feet', '6 feet x 3 feet', '6 feet x 4 feet', '6 feet x 5 feet', '6 feet x 6 feet',
        '6.25 feet x 2 feet', '6.25 feet x 2.5 feet', '6.25 feet x 3 feet', '6.25 feet x 4 feet', '6.25 feet x 5 feet', '6.25 feet x 6 feet',
        '6.5 feet x 2 feet', '6.5 feet x 2.5 feet', '6.5 feet x 3 feet', '6.5 feet x 4 feet', '6.5 feet x 5 feet', '6.5 feet x 6 feet'
      ],
      "inches": [
        '72 inches x 24 inches', '72 inches x 30 inches', '72 inches x 36 inches', '72 inches x 48 inches', '72 inches x 60 inches', '72 inches x 72 inches',
        '75 inches x 24 inches', '75 inches x 30 inches', '75 inches x 36 inches', '75 inches x 48 inches', '75 inches x 60 inches', '75 inches x 72 inches',
        '78 inches x 24 inches', '78 inches x 30 inches', '78 inches x 36 inches', '78 inches x 48 inches', '78 inches x 60 inches', '78 inches x 72 inches'
      ],
      "cm": [
        '183 cm x 61 cm', '183 cm x 76 cm', '183 cm x 91 cm', '183 cm x 122 cm', '183 cm x 152 cm', '183 cm x 183 cm',
        '191 cm x 61 cm', '191 cm x 76 cm', '191 cm x 91 cm', '191 cm x 122 cm', '191 cm x 152 cm', '191 cm x 183 cm',
        '198 cm x 61 cm', '198 cm x 76 cm', '198 cm x 91 cm', '198 cm x 122 cm', '198 cm x 152 cm', '198 cm x 183 cm'
      ],
      "mm": [
        '1829 mm x 610 mm', '1829 mm x 762 mm', '1829 mm x 914 mm', '1829 mm x 1219 mm', '1829 mm x 1524 mm', '1829 mm x 1829 mm',
        '1905 mm x 610 mm', '1905 mm x 762 mm', '1905 mm x 914 mm', '1905 mm x 1219 mm', '1905 mm x 1524 mm', '1905 mm x 1829 mm',
        '1981 mm x 610 mm', '1981 mm x 762 mm', '1981 mm x 914 mm', '1981 mm x 1219 mm', '1981 mm x 1524 mm', '1981 mm x 1829 mm'
      ]
    },
    features: ['Soft texture', 'Durable', 'Lightweight', 'Easy to handle'],
    specs: {
      'Material': 'Polyester',
      'Certification': 'ISO 14001',
      'Color': 'White'
    },metrics: ['mm', 'cm', 'inch', 'feet'],
    dimensions: [5,7,10,12,15,20,25],
  },



  {
    id: '22',
    name: 'Stretchable Knitting Fabric',
    description: 'High-quality quilting material ideal for a variety of applications, offering durability and smooth texture.',
    basePrice: 10,
    category: 'Quiltings',
    image: 'https://www.dial4trade.com/uploaded_files/product_images/roto-fabric-for-mattress-u-1180561324259202338.jpg',
    densities: ['100 GSM', '200 GSM', '300 GSM', '400 GSM',],
    sizes: {
      "feet": [
        '6 feet x 2 feet', '6 feet x 2.5 feet', '6 feet x 3 feet', '6 feet x 4 feet', '6 feet x 5 feet', '6 feet x 6 feet',
        '6.25 feet x 2 feet', '6.25 feet x 2.5 feet', '6.25 feet x 3 feet', '6.25 feet x 4 feet', '6.25 feet x 5 feet', '6.25 feet x 6 feet',
        '6.5 feet x 2 feet', '6.5 feet x 2.5 feet', '6.5 feet x 3 feet', '6.5 feet x 4 feet', '6.5 feet x 5 feet', '6.5 feet x 6 feet'
      ],
      "inches": [
        '72 inches x 24 inches', '72 inches x 30 inches', '72 inches x 36 inches', '72 inches x 48 inches', '72 inches x 60 inches', '72 inches x 72 inches',
        '75 inches x 24 inches', '75 inches x 30 inches', '75 inches x 36 inches', '75 inches x 48 inches', '75 inches x 60 inches', '75 inches x 72 inches',
        '78 inches x 24 inches', '78 inches x 30 inches', '78 inches x 36 inches', '78 inches x 48 inches', '78 inches x 60 inches', '78 inches x 72 inches'
      ],
      "cm": [
        '183 cm x 61 cm', '183 cm x 76 cm', '183 cm x 91 cm', '183 cm x 122 cm', '183 cm x 152 cm', '183 cm x 183 cm',
        '191 cm x 61 cm', '191 cm x 76 cm', '191 cm x 91 cm', '191 cm x 122 cm', '191 cm x 152 cm', '191 cm x 183 cm',
        '198 cm x 61 cm', '198 cm x 76 cm', '198 cm x 91 cm', '198 cm x 122 cm', '198 cm x 152 cm', '198 cm x 183 cm'
      ],
      "mm": [
        '1829 mm x 610 mm', '1829 mm x 762 mm', '1829 mm x 914 mm', '1829 mm x 1219 mm', '1829 mm x 1524 mm', '1829 mm x 1829 mm',
        '1905 mm x 610 mm', '1905 mm x 762 mm', '1905 mm x 914 mm', '1905 mm x 1219 mm', '1905 mm x 1524 mm', '1905 mm x 1829 mm',
        '1981 mm x 610 mm', '1981 mm x 762 mm', '1981 mm x 914 mm', '1981 mm x 1219 mm', '1981 mm x 1524 mm', '1981 mm x 1829 mm'
      ]
    },
    features: ['Soft texture', 'Durable', 'Lightweight', 'Easy to handle'],
    specs: {
      'Material': 'Polyester',
      'Certification': 'ISO 14001',
      'Color': 'White'
    },metrics: ['mm', 'cm', 'inch', 'feet'],
    dimensions: [5,7,10,12,15,20,25],
  },



{
  id: "23",
  name: "EPE ROLL",
  description: "High-quality EPE foam roll, ideal for packing and protecting delicate items during transportation.",
  basePrice: 10,
  category: "Packing Material",
  image: "https://5.imimg.com/data5/SELLER/Default/2022/8/FT/KK/OW/2531564/epe-foam-roll.jpeg",
  densities: ["18 density", "20 density", "23 density"],
  dimensions: [2, 5, 10, 15],
  sizes: [
    "2mm x 100 cm"
  ],
  features: ["Lightweight", "Impact resistant", "Waterproof", "Customizable"],
  specs: {
    "Material": "EPE Foam",
    "Certification": "ISO 9001",
    "Fire Rating": "Class C",
    "Color": "White"
  },
  metrics: ['mm', 'cm', 'inch', 'feet']
},

{
  id: "24",
  name: "BOPP TAPE",
  description: "High-quality EPE foam roll, ideal for packing and protecting delicate items during transportation.",
  basePrice: 10,
  category: "Packing Material",
  image: "https://m.media-amazon.com/images/I/41n+vgpTthL._AC_UF1000,1000_QL80_.jpg",
  densities: ["18 density", "20 density", "23 density"],
  dimensions: [50.],
  sizes: ['60 meter'], 
  features: [],
  specs: {
    "Material": "EPE Foam",
    "Certification": "ISO 9001",
    "Fire Rating": "Class C",
    "Color": "White"
  },
  metrics: ['mm', 'cm', 'inch', 'feet']
},


{
  id: "25",
  name: "PVC ROLL",
  description: "High-quality EPE foam roll, ideal for packing and protecting delicate items during transportation.",
  basePrice: 10,
  category: "Packing Material",
  image: "https://5.imimg.com/data5/SELLER/Default/2023/10/349278132/KX/PU/LN/27700197/plain-pvc-roll-500x500.jpg",
  densities: ["18 density", "20 density", "23 density"],
  dimensions: [42, 78],
  sizes: ['100 meter'], 
  features: [],
  specs: {
    "Material": "EPE Foam",
    "Certification": "ISO 9001",
    "Fire Rating": "Class C",
    "Color": "White"
  },
  metrics: ['mm', 'cm', 'inch', 'feet']
},


// {
//   id: "26",
//   name: "AIR BUBBLE ROLL",
//   description: "High-quality EPE foam roll, ideal for packing and protecting delicate items during transportation.",
//   basePrice: 10,
//   category: "Packing Material",
//   image: "https://5.imimg.com/data5/SELLER/Default/2022/8/FT/KK/OW/2531564/epe-foam-roll.jpeg",
//   densities: [],
//   dimensions: [],
//   sizes: [], 
//   features: [],
//   specs: {
//     "Material": "EPE Foam",
//     "Certification": "ISO 9001",
//     "Fire Rating": "Class C",
//     "Color": "White"
//   },
//   metrics: ['mm', 'cm', 'inch', 'feet']
// },

// {
//   id: "27",
//   name: "EVA FOAM",
//   description: "High-quality EPE foam roll, ideal for packing and protecting delicate items during transportation.",
//   basePrice: 10,
//   category: "Packing Material",
//   image: "https://5.imimg.com/data5/SELLER/Default/2022/8/FT/KK/OW/2531564/epe-foam-roll.jpeg",
//   densities: [],
//   dimensions: [],
//   sizes: [], 
//   features: [],
//   specs: {
//     "Material": "EPE Foam",
//     "Certification": "ISO 9001",
//     "Fire Rating": "Class C",
//     "Color": "White"
//   },
//   metrics: ['mm', 'cm', 'inch', 'feet']
// },


// {
//   id: "28",
//   name: "PU FOAM ROLL",
//   description: "High-quality EPE foam roll, ideal for packing and protecting delicate items during transportation.",
//   basePrice: 10,
//   category: "Packing Material",
//   image: "https://5.imimg.com/data5/SELLER/Default/2022/8/FT/KK/OW/2531564/epe-foam-roll.jpeg",
//   densities: [""],
//   dimensions: [],
//   sizes: [''], 
//   features: [],
//   specs: {
//     "Material": "EPE Foam",
//     "Certification": "ISO 9001",
//     "Fire Rating": "Class C",
//     "Color": "White"
//   },
//   metrics: ['mm', 'cm', 'inch', 'feet']
// },


// {
//   id: "29",
//   name: "NON WOVEN FABRIC",
//   description: "High-quality EPE foam roll, ideal for packing and protecting delicate items during transportation.",
//   basePrice: 10,
//   category: "Packing Material",
//   image: "https://5.imimg.com/data5/SELLER/Default/2022/8/FT/KK/OW/2531564/epe-foam-roll.jpeg",
//   densities: [""],
//   dimensions: [],
//   sizes: [''], 
//   features: [],
//   specs: {
//     "Material": "EPE Foam",
//     "Certification": "ISO 9001",
//     "Fire Rating": "Class C",
//     "Color": "White"
//   },
//   metrics: ['mm', 'cm', 'inch', 'feet']
// },


// {
//   id: "30",
//   name: "STAPLER PIN",
//   description: "High-quality EPE foam roll, ideal for packing and protecting delicate items during transportation.",
//   basePrice: 10,
//   category: "Packing Material",
//   image: "https://5.imimg.com/data5/SELLER/Default/2022/8/FT/KK/OW/2531564/epe-foam-roll.jpeg",
//   densities: [""],
//   dimensions: [],
//   sizes: [''], 
//   features: [],
//   specs: {
//     "Material": "EPE Foam",
//     "Certification": "ISO 9001",
//     "Fire Rating": "Class C",
//     "Color": "White"
//   },
//   metrics: ['mm', 'cm', 'inch', 'feet']
// },



// {
//   id: "31",
//   name: "REXIN",
//   description: "High-quality EPE foam roll, ideal for packing and protecting delicate items during transportation.",
//   basePrice: 10,
//   category: "Packing Material",
//   image: "https://5.imimg.com/data5/SELLER/Default/2022/8/FT/KK/OW/2531564/epe-foam-roll.jpeg",
//   densities: [""],
//   dimensions: [],
//   sizes: [''], 
//   features: [],
//   specs: {
//     "Material": "EPE Foam",
//     "Certification": "ISO 9001",
//     "Fire Rating": "Class C",
//     "Color": "White"
//   },
//   metrics: ['mm', 'cm', 'inch', 'feet']
// },


// {
//   id: "32",
//   name: "REXIN",
//   description: "High-quality EPE foam roll, ideal for packing and protecting delicate items during transportation.",
//   basePrice: 10,
//   category: "Packing Material",
//   image: "https://5.imimg.com/data5/SELLER/Default/2022/8/FT/KK/OW/2531564/epe-foam-roll.jpeg",
//   densities: [""],
//   dimensions: [],
//   sizes: [''], 
//   features: [],
//   specs: {
//     "Material": "EPE Foam",
//     "Certification": "ISO 9001",
//     "Fire Rating": "Class C",
//     "Color": "White"
//   },
//   metrics: ['mm', 'cm', 'inch', 'feet']
// },

// {
//   id: "33",
//   name: "MATTRESS TAPE",
//   description: "High-quality EPE foam roll, ideal for packing and protecting delicate items during transportation.",
//   basePrice: 10,
//   category: "Packing Material",
//   image: "https://5.imimg.com/data5/SELLER/Default/2022/8/FT/KK/OW/2531564/epe-foam-roll.jpeg",
//   densities: [""],
//   dimensions: [],
//   sizes: [''], 
//   features: [],
//   specs: {
//     "Material": "EPE Foam",
//     "Certification": "ISO 9001",
//     "Fire Rating": "Class C",
//     "Color": "White"
//   },
//   metrics: ['mm', 'cm', 'inch', 'feet']
// },


// {
//   id: "34",
//   name: "ELASTIC NIVAAR ",
//   description: "High-quality EPE foam roll, ideal for packing and protecting delicate items during transportation.",
//   basePrice: 10,
//   category: "Packing Material",
//   image: "https://5.imimg.com/data5/SELLER/Default/2022/8/FT/KK/OW/2531564/epe-foam-roll.jpeg",
//   densities: [""],
//   dimensions: [],
//   sizes: [''], 
//   features: [],
//   specs: {
//     "Material": "EPE Foam",
//     "Certification": "ISO 9001",
//     "Fire Rating": "Class C",
//     "Color": "White"
//   },
//   metrics: ['mm', 'cm', 'inch', 'feet']
// },

// {
//   id: "35",
//   name: "SUPER SOFT FOAM",
//   description: "High-quality EPE foam roll, ideal for packing and protecting delicate items during transportation.",
//   basePrice: 10,
//   category: "Packing Material",
//   image: "https://5.imimg.com/data5/SELLER/Default/2022/8/FT/KK/OW/2531564/epe-foam-roll.jpeg",
//   densities: [""],
//   dimensions: [],
//   sizes: [''], 
//   features: [],
//   specs: {
//     "Material": "EPE Foam",
//     "Certification": "ISO 9001",
//     "Fire Rating": "Class C",
//     "Color": "White"
//   },
//   metrics: ['mm', 'cm', 'inch', 'feet']
// },
  


// new Pillow


{
  id: '36',
  name: 'Soft fibre Pillow',
  description: 'Soft fibre Pillow',
  basePrice: 10,
  category: 'Pillow',
  image: 'https://static.wixstatic.com/media/dd9c7b_ebbecda3297f4fe7b3bdd0afebabbbfb~mv2.jpg/v1/fill/w_480,h_562,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd9c7b_ebbecda3297f4fe7b3bdd0afebabbbfb~mv2.jpg', // Replace with an actual coir-related image URL
  densities: ['16 inch * 24 inch' , '17 inch * 27 inch'],
  dimensions: [1], // Dimensions in mm
  sizes: {
    
    "inches": [
      '72 inches x 24 inches', '72 inches x 30 inches', '72 inches x 36 inches', '72 inches x 48 inches', '72 inches x 60 inches', '72 inches x 72 inches',
      '75 inches x 24 inches', '75 inches x 30 inches', '75 inches x 36 inches', '75 inches x 48 inches', '75 inches x 60 inches', '75 inches x 72 inches',
      '78 inches x 24 inches', '78 inches x 30 inches', '78 inches x 36 inches', '78 inches x 48 inches', '78 inches x 60 inches', '78 inches x 72 inches'
    ],
    "cm": [
      '183 cm x 61 cm', '183 cm x 76 cm', '183 cm x 91 cm', '183 cm x 122 cm', '183 cm x 152 cm', '183 cm x 183 cm',
      '191 cm x 61 cm', '191 cm x 76 cm', '191 cm x 91 cm', '191 cm x 122 cm', '191 cm x 152 cm', '191 cm x 183 cm',
      '198 cm x 61 cm', '198 cm x 76 cm', '198 cm x 91 cm', '198 cm x 122 cm', '198 cm x 152 cm', '198 cm x 183 cm'
    ],
    "mm": [
      '1829 mm x 610 mm', '1829 mm x 762 mm', '1829 mm x 914 mm', '1829 mm x 1219 mm', '1829 mm x 1524 mm', '1829 mm x 1829 mm',
      '1905 mm x 610 mm', '1905 mm x 762 mm', '1905 mm x 914 mm', '1905 mm x 1219 mm', '1905 mm x 1524 mm', '1905 mm x 1829 mm',
      '1981 mm x 610 mm', '1981 mm x 762 mm', '1981 mm x 914 mm', '1981 mm x 1219 mm', '1981 mm x 1524 mm', '1981 mm x 1829 mm'
    ]
  },
  features: ['Eco-friendly', 'Durable', 'Moisture resistant', 'Custom cuttable'],
  specs: {
    'Material': 'Coir Fiber',
    'Certification': 'ISO 9001',
    'Fire Rating': 'Class B',
    'Color': 'Brown'
  },
  metrics: ['mm', 'cm', 'inch',]
},

{
  id: '37',
  name: 'ultra soft Contour Memory Foam Pillow',
  description: 'High-density coir sheet ideal for mattresses, cushions, packaging, and industrial use.',
  basePrice: 10,
  category: 'Pillow',
  image: 'https://5.imimg.com/data5/SELLER/Default/2023/4/302931898/EI/YD/WD/42711985/memory-foam-neck-pillow-500x500.png', // Replace with an actual coir-related image URL
  densities: ['16 Inch * 24 Inch' , '17 Inch * 27 Inch'],
  dimensions: [1], // Dimensions in mm
  sizes: {
    
    "inches": [
      '72 inches x 24 inches', '72 inches x 30 inches', '72 inches x 36 inches', '72 inches x 48 inches', '72 inches x 60 inches', '72 inches x 72 inches',
      '75 inches x 24 inches', '75 inches x 30 inches', '75 inches x 36 inches', '75 inches x 48 inches', '75 inches x 60 inches', '75 inches x 72 inches',
      '78 inches x 24 inches', '78 inches x 30 inches', '78 inches x 36 inches', '78 inches x 48 inches', '78 inches x 60 inches', '78 inches x 72 inches'
    ],
    "cm": [
      '183 cm x 61 cm', '183 cm x 76 cm', '183 cm x 91 cm', '183 cm x 122 cm', '183 cm x 152 cm', '183 cm x 183 cm',
      '191 cm x 61 cm', '191 cm x 76 cm', '191 cm x 91 cm', '191 cm x 122 cm', '191 cm x 152 cm', '191 cm x 183 cm',
      '198 cm x 61 cm', '198 cm x 76 cm', '198 cm x 91 cm', '198 cm x 122 cm', '198 cm x 152 cm', '198 cm x 183 cm'
    ],
    "mm": [
      '1829 mm x 610 mm', '1829 mm x 762 mm', '1829 mm x 914 mm', '1829 mm x 1219 mm', '1829 mm x 1524 mm', '1829 mm x 1829 mm',
      '1905 mm x 610 mm', '1905 mm x 762 mm', '1905 mm x 914 mm', '1905 mm x 1219 mm', '1905 mm x 1524 mm', '1905 mm x 1829 mm',
      '1981 mm x 610 mm', '1981 mm x 762 mm', '1981 mm x 914 mm', '1981 mm x 1219 mm', '1981 mm x 1524 mm', '1981 mm x 1829 mm'
    ]
  },
  features: ['Eco-friendly', 'Durable', 'Moisture resistant', 'Custom cuttable'],
  specs: {
    'Material': 'Coir Fiber',
    'Certification': 'ISO 9001',
    'Fire Rating': 'Class B',
    'Color': 'Brown'
  },
  metrics: ['mm', 'cm', 'inch', 'feet']
},

{
  id: '38',
  name: 'Natural Latex Contour Pillow',
  description: 'Latex Contour Pillow',
  basePrice: 10,
  category: 'Pillow',
  image: 'https://ak1.ostkcdn.com/images/products/21155818/Cheer-Collection-Contoured-Latex-Foam-Pillow-with-Washable-Cover-5c2167e5-a64a-4a7f-a8a9-58fad88a7dfd_600.jpg?impolicy=medium', // Replace with an actual coir-related image URL
  densities: ['16 inch * 24 inch ' , '17 inch * 27 inch'],
  dimensions: [1], // Dimensions in mm
  sizes: {
  
    "inches": [
      '72 inches x 24 inches', '72 inches x 30 inches', '72 inches x 36 inches', '72 inches x 48 inches', '72 inches x 60 inches', '72 inches x 72 inches',
      '75 inches x 24 inches', '75 inches x 30 inches', '75 inches x 36 inches', '75 inches x 48 inches', '75 inches x 60 inches', '75 inches x 72 inches',
      '78 inches x 24 inches', '78 inches x 30 inches', '78 inches x 36 inches', '78 inches x 48 inches', '78 inches x 60 inches', '78 inches x 72 inches'
    ],
    "cm": [
      '183 cm x 61 cm', '183 cm x 76 cm', '183 cm x 91 cm', '183 cm x 122 cm', '183 cm x 152 cm', '183 cm x 183 cm',
      '191 cm x 61 cm', '191 cm x 76 cm', '191 cm x 91 cm', '191 cm x 122 cm', '191 cm x 152 cm', '191 cm x 183 cm',
      '198 cm x 61 cm', '198 cm x 76 cm', '198 cm x 91 cm', '198 cm x 122 cm', '198 cm x 152 cm', '198 cm x 183 cm'
    ],
    "mm": [
      '1829 mm x 610 mm', '1829 mm x 762 mm', '1829 mm x 914 mm', '1829 mm x 1219 mm', '1829 mm x 1524 mm', '1829 mm x 1829 mm',
      '1905 mm x 610 mm', '1905 mm x 762 mm', '1905 mm x 914 mm', '1905 mm x 1219 mm', '1905 mm x 1524 mm', '1905 mm x 1829 mm',
      '1981 mm x 610 mm', '1981 mm x 762 mm', '1981 mm x 914 mm', '1981 mm x 1219 mm', '1981 mm x 1524 mm', '1981 mm x 1829 mm'
    ]
  },
  features: ['Eco-friendly', 'Durable', 'Moisture resistant', 'Custom cuttable'],
  specs: {
    'Material': 'Coir Fiber',
    'Certification': 'ISO 9001',
    'Fire Rating': 'Class B',
    'Color': 'Brown'
  },
  metrics: ['mm', 'cm', 'inch', ]
},









// new Raw material

{
  id: '39',
  name: 'Mattress Protector',
  description: 'High-quality mattress protector designed to keep your mattress clean and protected.',
  basePrice: 10,
  category: 'Mattress Raw Material',
  image: 'https://m.media-amazon.com/images/I/41v5TfFTJOL._SX679_.jpg', // Replace with an actual image URL
  densities: ['Standard'],
  dimensions: [2, 2.5, 3, 4, 5, 6],
  sizes: {
    "feet": [
      '6 feet x 2 feet', '6 feet x 2.5 feet', '6 feet x 3 feet', '6 feet x 4 feet', '6 feet x 5 feet', '6 feet x 6 feet',
      '6.25 feet x 2 feet', '6.25 feet x 2.5 feet', '6.25 feet x 3 feet', '6.25 feet x 4 feet', '6.25 feet x 5 feet', '6.25 feet x 6 feet',
      '6.5 feet x 2 feet', '6.5 feet x 2.5 feet', '6.5 feet x 3 feet', '6.5 feet x 4 feet', '6.5 feet x 5 feet', '6.5 feet x 6 feet'
    ],
    "inches": [
      '72 inches x 24 inches', '72 inches x 30 inches', '72 inches x 36 inches', '72 inches x 48 inches', '72 inches x 60 inches', '72 inches x 72 inches',
      '75 inches x 24 inches', '75 inches x 30 inches', '75 inches x 36 inches', '75 inches x 48 inches', '75 inches x 60 inches', '75 inches x 72 inches',
      '78 inches x 24 inches', '78 inches x 30 inches', '78 inches x 36 inches', '78 inches x 48 inches', '78 inches x 60 inches', '78 inches x 72 inches'
    ],
    "cm": [
      '183 cm x 61 cm', '183 cm x 76 cm', '183 cm x 91 cm', '183 cm x 122 cm', '183 cm x 152 cm', '183 cm x 183 cm',
      '191 cm x 61 cm', '191 cm x 76 cm', '191 cm x 91 cm', '191 cm x 122 cm', '191 cm x 152 cm', '191 cm x 183 cm',
      '198 cm x 61 cm', '198 cm x 76 cm', '198 cm x 91 cm', '198 cm x 122 cm', '198 cm x 152 cm', '198 cm x 183 cm'
    ],
    "mm": [
      '1829 mm x 610 mm', '1829 mm x 762 mm', '1829 mm x 914 mm', '1829 mm x 1219 mm', '1829 mm x 1524 mm', '1829 mm x 1829 mm',
      '1905 mm x 610 mm', '1905 mm x 762 mm', '1905 mm x 914 mm', '1905 mm x 1219 mm', '1905 mm x 1524 mm', '1905 mm x 1829 mm',
      '1981 mm x 610 mm', '1981 mm x 762 mm', '1981 mm x 914 mm', '1981 mm x 1219 mm', '1981 mm x 1524 mm', '1981 mm x 1829 mm'
    ]
  },
  features: ['Waterproof', 'Durable', 'Easy to clean', 'Customizable sizes'],
  specs: {
    'Material': 'Polyester',
    'Certification': 'ISO 9001',
    'Color': 'White'
  },
  metrics: ['mm', 'cm', 'inch', 'feet']
},


{
  id: '40',
  name: 'Mattress Comforter',
  description: 'High-quality mattress comforter designed to provide extra comfort and protection.',
  basePrice: 10,
  category: 'Mattress Raw Material',
  image: 'https://images-cdn.ubuy.co.in/64e7353f138a507500087278-mellow-4-inch-5-zone-memory-foam.jpg', // Replace with an actual image URL
  densities: ['300GSM', '400GSM', '500GSM'],
  dimensions: [2, 2.5, 3, 4, 5, 6],
  sizes: {
    "feet": [
      '6 feet x 2 feet', '6 feet x 2.5 feet', '6 feet x 3 feet', '6 feet x 4 feet', '6 feet x 5 feet', '6 feet x 6 feet',
      '6.25 feet x 2 feet', '6.25 feet x 2.5 feet', '6.25 feet x 3 feet', '6.25 feet x 4 feet', '6.25 feet x 5 feet', '6.25 feet x 6 feet',
      '6.5 feet x 2 feet', '6.5 feet x 2.5 feet', '6.5 feet x 3 feet', '6.5 feet x 4 feet', '6.5 feet x 5 feet', '6.5 feet x 6 feet'
    ],
    "inches": [
      '72 inches x 24 inches', '72 inches x 30 inches', '72 inches x 36 inches', '72 inches x 48 inches', '72 inches x 60 inches', '72 inches x 72 inches',
      '75 inches x 24 inches', '75 inches x 30 inches', '75 inches x 36 inches', '75 inches x 48 inches', '75 inches x 60 inches', '75 inches x 72 inches',
      '78 inches x 24 inches', '78 inches x 30 inches', '78 inches x 36 inches', '78 inches x 48 inches', '78 inches x 60 inches', '78 inches x 72 inches'
    ],
    "cm": [
      '183 cm x 61 cm', '183 cm x 76 cm', '183 cm x 91 cm', '183 cm x 122 cm', '183 cm x 152 cm', '183 cm x 183 cm',
      '191 cm x 61 cm', '191 cm x 76 cm', '191 cm x 91 cm', '191 cm x 122 cm', '191 cm x 152 cm', '191 cm x 183 cm',
      '198 cm x 61 cm', '198 cm x 76 cm', '198 cm x 91 cm', '198 cm x 122 cm', '198 cm x 152 cm', '198 cm x 183 cm'
    ],
    "mm": [
      '1829 mm x 610 mm', '1829 mm x 762 mm', '1829 mm x 914 mm', '1829 mm x 1219 mm', '1829 mm x 1524 mm', '1829 mm x 1829 mm',
      '1905 mm x 610 mm', '1905 mm x 762 mm', '1905 mm x 914 mm', '1905 mm x 1219 mm', '1905 mm x 1524 mm', '1905 mm x 1829 mm',
      '1981 mm x 610 mm', '1981 mm x 762 mm', '1981 mm x 914 mm', '1981 mm x 1219 mm', '1981 mm x 1524 mm', '1981 mm x 1829 mm'
    ]
  },
  features: ['Comfortable', 'Durable', 'Easy to clean', 'Customizable sizes'],
  specs: {
    'Material': 'Polyester',
    'Certification': 'ISO 9001',
    'Color': 'White'
  },
  metrics: ['mm', 'cm', 'inch', 'feet']
},




// {
//   id: '41',
//   name: 'Folding Mattress',
//   description: 'High-quality folding mattress designed for easy storage and transport.',
//   basePrice: 10,
//   category: 'Mattress Raw Material',
//   image: 'https://m.media-amazon.com/images/I/81pR3H2XpgL._SL1500_.jpg', // Replace with an actual image URL
//   densities: ["40"],
//   dimensions: [6],
//   sizes: [],
//   features: ['Portable', 'Durable', 'Easy to store', 'Customizable sizes'],
//   specs: {
//     'Material': 'Foam',
//     'Certification': 'ISO 9001',
//     'Color': 'White'
//   },
//   metrics: ['mm', 'cm', 'inch', 'feet']
// },




// {
//   id: '42',
//   name: 'Hospital Mattress',
//   description: 'High-quality hospital mattress designed for comfort and support in medical settings.',
//   basePrice: 10,
//   category: 'Mattress Raw Material',
//   image: 'https://aerocommattress.com/wp-content/uploads/2023/10/NO-FOLD-1.jpg', // Replace with an actual image URL
//   densities: ['40'],
//   dimensions: [60],
//   sizes: [''],
//   features: ['Comfortable', 'Durable', 'Easy to clean', 'Customizable sizes'],
//   specs: {
//     'Material': 'Foam',
//     'Certification': 'ISO 9001',
//     'Color': 'White'
//   },
//   metrics: ['mm', 'cm', 'inch', 'feet']
// },

// {
//   id: '43',
//   name: 'Operation Theatre Mattress',
//   description: 'High-quality operation theatre mattress designed for comfort and support during surgeries.',
//   basePrice: 10,
//   category: 'Mattress Raw Material',
//   image: 'https://5.imimg.com/data5/SELLER/Default/2022/7/GB/AQ/OV/14982509/ma4u-product7679-edged-2-scaled-1000x1000.jpg', // Replace with an actual image URL
//   densities: ['40'],
//   dimensions: [60],
//   sizes: [],
//   features: ['Comfortable', 'Durable', 'Easy to clean', 'Customizable sizes'],
//   specs: {
//     'Material': 'Foam',
//     'Certification': 'ISO 9001',
//     'Color': 'White'
//   },
//   metrics: ['mm', 'cm', 'inch', 'feet']
// },

{
  id: '44',
  name: 'Bostik Adhesive',
  description: 'High-quality Bostik adhesive ideal for various packing and bonding applications.',
  basePrice: 10,
  category: 'Mattress Raw Material',
  image: 'https://5.imimg.com/data5/SELLER/Default/2023/3/MB/DB/DV/6563603/5l-bostik-pu-1705-rubber-adessive.jpg', // Replace with an actual image URL
  densities: ['50'],
  dimensions: [40],
  sizes: [''],
  features: ['Strong bond', 'Durable', 'Easy to apply'],
  specs: {
    'Material': 'Adhesive',
    'Certification': 'ISO 9001',
    'Color': 'Clear'
  },
  metrics: ['mm', 'cm', 'inch', 'feet']
},

{
  id: '45',
  name: 'Felt Roll',
  description: 'High-quality felt roll with standard GSM, ideal for various packing and protective applications.',
  basePrice: 10,
  category: 'Mattress Raw Material',
  image: 'https://4.imimg.com/data4/AK/HF/MY-30303039/felt-rolls-500x500.jpg', // Replace with an actual image URL
  densities: ['Standard GSM'],
  dimensions: [60],
  sizes: ['As per order'],
  features: ['Durable', 'Protective', 'Customizable sizes'],
  specs: {
    'Material': 'Felt',
    'Certification': 'ISO 9001',
    'Color': 'Gray'
  },
  metrics: ['mm', 'cm', 'inch', 'feet']
},






{
  id: '46',
  name: 'Bonnel Spring unit',
  description: 'High-quality bonnel spring suitable for mattresses and other bedding applications.',
  basePrice: 10,
  category: 'Mattress Raw Material',
  image: 'https://5.imimg.com/data5/SELLER/Default/2023/10/356752699/FY/LU/TT/16330860/bonnell-spring-unit.jpg', // Replace with an actual image URL
  densities: [],
  dimensions: [75, 100, 110, 125,150], // Dimensions in mm thickness
  sizes: {
    "feet": [
      '6 feet x 2 feet', '6 feet x 2.5 feet', '6 feet x 3 feet', '6 feet x 4 feet', '6 feet x 5 feet', '6 feet x 6 feet',
      '6.25 feet x 2 feet', '6.25 feet x 2.5 feet', '6.25 feet x 3 feet', '6.25 feet x 4 feet', '6.25 feet x 5 feet', '6.25 feet x 6 feet',
      '6.5 feet x 2 feet', '6.5 feet x 2.5 feet', '6.5 feet x 3 feet', '6.5 feet x 4 feet', '6.5 feet x 5 feet', '6.5 feet x 6 feet'
    ],
    "inches": [
      '72 inches x 24 inches', '72 inches x 30 inches', '72 inches x 36 inches', '72 inches x 48 inches', '72 inches x 60 inches', '72 inches x 72 inches',
      '75 inches x 24 inches', '75 inches x 30 inches', '75 inches x 36 inches', '75 inches x 48 inches', '75 inches x 60 inches', '75 inches x 72 inches',
      '78 inches x 24 inches', '78 inches x 30 inches', '78 inches x 36 inches', '78 inches x 48 inches', '78 inches x 60 inches', '78 inches x 72 inches'
    ],
    "cm": [
      '183 cm x 61 cm', '183 cm x 76 cm', '183 cm x 91 cm', '183 cm x 122 cm', '183 cm x 152 cm', '183 cm x 183 cm',
      '191 cm x 61 cm', '191 cm x 76 cm', '191 cm x 91 cm', '191 cm x 122 cm', '191 cm x 152 cm', '191 cm x 183 cm',
      '198 cm x 61 cm', '198 cm x 76 cm', '198 cm x 91 cm', '198 cm x 122 cm', '198 cm x 152 cm', '198 cm x 183 cm'
    ],
    "mm": [
      '1829 mm x 610 mm', '1829 mm x 762 mm', '1829 mm x 914 mm', '1829 mm x 1219 mm', '1829 mm x 1524 mm', '1829 mm x 1829 mm',
      '1905 mm x 610 mm', '1905 mm x 762 mm', '1905 mm x 914 mm', '1905 mm x 1219 mm', '1905 mm x 1524 mm', '1905 mm x 1829 mm',
      '1981 mm x 610 mm', '1981 mm x 762 mm', '1981 mm x 914 mm', '1981 mm x 1219 mm', '1981 mm x 1524 mm', '1981 mm x 1829 mm'
    ]
  },
  features: ['Durable', 'High-quality', 'Supportive', 'Customizable sizes'],
  specs: {
    'Material': 'Steel',
    'Certification': 'ISO 9001',
    'Color': 'Silver'
  },
  metrics: ['mm', 'cm', 'inch', 'feet']
},

{
  id: '47',
  name: 'Pocket Spring',
  description: 'High-quality pocket spring suitable for mattresses and other bedding applications.',
  basePrice: 10,
  category: 'Mattress Raw Material',
  image: 'https://5.imimg.com/data5/CN/FI/MY-11071994/pocket-spring-mattress-unit-500x500.jpg', // Replace with an actual image URL
  densities: ['40'],
  dimensions: [75, 100, 150, 200], // Dimensions in mm
  sizes: {
    "feet": [
      '6 feet x 2 feet', '6 feet x 2.5 feet', '6 feet x 3 feet', '6 feet x 4 feet', '6 feet x 5 feet', '6 feet x 6 feet',
      '6.25 feet x 2 feet', '6.25 feet x 2.5 feet', '6.25 feet x 3 feet', '6.25 feet x 4 feet', '6.25 feet x 5 feet', '6.25 feet x 6 feet',
      '6.5 feet x 2 feet', '6.5 feet x 2.5 feet', '6.5 feet x 3 feet', '6.5 feet x 4 feet', '6.5 feet x 5 feet', '6.5 feet x 6 feet'
    ],
    "inches": [
      '72 inches x 24 inches', '72 inches x 30 inches', '72 inches x 36 inches', '72 inches x 48 inches', '72 inches x 60 inches', '72 inches x 72 inches',
      '75 inches x 24 inches', '75 inches x 30 inches', '75 inches x 36 inches', '75 inches x 48 inches', '75 inches x 60 inches', '75 inches x 72 inches',
      '78 inches x 24 inches', '78 inches x 30 inches', '78 inches x 36 inches', '78 inches x 48 inches', '78 inches x 60 inches', '78 inches x 72 inches'
    ],
    "cm": [
      '183 cm x 61 cm', '183 cm x 76 cm', '183 cm x 91 cm', '183 cm x 122 cm', '183 cm x 152 cm', '183 cm x 183 cm',
      '191 cm x 61 cm', '191 cm x 76 cm', '191 cm x 91 cm', '191 cm x 122 cm', '191 cm x 152 cm', '191 cm x 183 cm',
      '198 cm x 61 cm', '198 cm x 76 cm', '198 cm x 91 cm', '198 cm x 122 cm', '198 cm x 152 cm', '198 cm x 183 cm'
    ],
    "mm": [
      '1829 mm x 610 mm', '1829 mm x 762 mm', '1829 mm x 914 mm', '1829 mm x 1219 mm', '1829 mm x 1524 mm', '1829 mm x 1829 mm',
      '1905 mm x 610 mm', '1905 mm x 762 mm', '1905 mm x 914 mm', '1905 mm x 1219 mm', '1905 mm x 1524 mm', '1905 mm x 1829 mm',
      '1981 mm x 610 mm', '1981 mm x 762 mm', '1981 mm x 914 mm', '1981 mm x 1219 mm', '1981 mm x 1524 mm', '1981 mm x 1829 mm'
    ]
  },
  features: ['Durable', 'High-quality', 'Supportive', 'Customizable sizes'],
  specs: {
    'Material': 'Steel',
    'Certification': 'ISO 9001',
    'Color': 'Silver'
  },
  metrics: ['mm', 'cm', 'inch', 'feet']
},

{
  id: '48',
  name: 'Mattress Piping Lace',
  description: 'High-quality mattress piping lace for enhancing the durability and appearance of mattresses.',
  basePrice: 10,
  category: 'Mattress Raw Material',
  image: 'https://images.meesho.com/images/products/420275167/oc2d3_512.webp', // Replace with an actual image URL
  densities: ['600 GM'],
  dimensions: [45], // Dimensions in mm
  sizes: ['100 meter'],
  features: ['Durable', 'High-quality', 'Enhances appearance'],
  specs: {
    'Material': 'Lace',
    'Certification': 'ISO 9001',
    'Color': 'White'
  },
  metrics: ['mm', 'cm', 'inch', 'feet']
},

{
  id: '49',
  name: 'High Quality Mattress Piping Lace',
  description: 'High-quality mattress piping lace for enhancing the durability and appearance of mattresses.',
  basePrice: 10,
  category: 'Mattress Raw Material',
  image: 'https://m.media-amazon.com/images/I/91XadP8Cg3L._AC_UF894,1000_QL80_.jpg', // Replace with an actual image URL
  densities: ['800 GM'],
  dimensions: [45], // Dimensions in mm
  sizes: ['50 meter'],
  features: ['Durable', 'High-quality', 'Enhances appearance'],
  specs: {
    'Material': 'Lace',
    'Certification': 'ISO 9001',
    'Color': 'White'
  },
  metrics: ['mm', 'cm', 'inch', 'feet']
},



{
  id: '50',
  name: 'Jhatpat Sofa',
  description: 'High-quality Jhatpat Sofa designed for quick setup and comfort.',
  basePrice: 100,
  category: 'Mattress Raw Material',
  image: 'https://m.media-amazon.com/images/I/61Q1kUn5QYL._AC_UF1000,1000_QL80_.jpg', // Replace with an actual image URL
  densities: ['Standard'],
  dimensions: [200, 100, 90], // Example dimensions in cm (length, width, height)
  sizes: ['2-seater', '3-seater', '4-seater'],
  features: ['Quick setup', 'Comfortable', 'Durable', 'Stylish'],
  specs: {
    'Material': 'Fabric and Foam',
    'Certification': 'ISO 9001',
    'Color': 'Various'
  },
  metrics: ['cm', 'inch']
},

{
  id: '51',
  name: 'Sofa Back Rest',
  description: 'High-quality Sofa Back Rest designed for additional comfort and support.',
  basePrice: 50,
  category: 'Mattress Raw Material',
  image: 'https://imgur.com/37Xf0Mk', // Replace with an actual image URL
  densities: ['100 mm x 175mm' ,'175 mm x 250mm  '],
  dimensions: [60, 40, 20], // Example dimensions in cm (length, width, height)
  sizes: ['height 15 inch x width 24 inch'],   
  features: ['Comfortable', 'Supportive', 'Durable', 'Easy to attach'],
  specs: {
    'Material': 'Foam and Fabric',
    'Certification': 'ISO 9001',
    'Color': 'Various'
  },
  metrics: ['cm', 'inch']
},

// pillow

{
  id: '52',
  name: 'Ultra Soft Memory Foam Pillow',
  description: 'Latex Contour Pillow',
  basePrice: 10,
  category: 'Pillow',
  image: 'https://m.media-amazon.com/images/I/51F0ks7ro1L.jpg', // Replace with an actual coir-related image URL
  densities: ['16 inch * 24 inch ' , '17 inch * 27 inch'],
  dimensions: [1], // Dimensions in mm
  sizes: {
  
    "inches": [
      '72 inches x 24 inches', '72 inches x 30 inches', '72 inches x 36 inches', '72 inches x 48 inches', '72 inches x 60 inches', '72 inches x 72 inches',
      '75 inches x 24 inches', '75 inches x 30 inches', '75 inches x 36 inches', '75 inches x 48 inches', '75 inches x 60 inches', '75 inches x 72 inches',
      '78 inches x 24 inches', '78 inches x 30 inches', '78 inches x 36 inches', '78 inches x 48 inches', '78 inches x 60 inches', '78 inches x 72 inches'
    ],
    "cm": [
      '183 cm x 61 cm', '183 cm x 76 cm', '183 cm x 91 cm', '183 cm x 122 cm', '183 cm x 152 cm', '183 cm x 183 cm',
      '191 cm x 61 cm', '191 cm x 76 cm', '191 cm x 91 cm', '191 cm x 122 cm', '191 cm x 152 cm', '191 cm x 183 cm',
      '198 cm x 61 cm', '198 cm x 76 cm', '198 cm x 91 cm', '198 cm x 122 cm', '198 cm x 152 cm', '198 cm x 183 cm'
    ],
    "mm": [
      '1829 mm x 610 mm', '1829 mm x 762 mm', '1829 mm x 914 mm', '1829 mm x 1219 mm', '1829 mm x 1524 mm', '1829 mm x 1829 mm',
      '1905 mm x 610 mm', '1905 mm x 762 mm', '1905 mm x 914 mm', '1905 mm x 1219 mm', '1905 mm x 1524 mm', '1905 mm x 1829 mm',
      '1981 mm x 610 mm', '1981 mm x 762 mm', '1981 mm x 914 mm', '1981 mm x 1219 mm', '1981 mm x 1524 mm', '1981 mm x 1829 mm'
    ]
  },
  features: ['Eco-friendly', 'Durable', 'Moisture resistant', 'Custom cuttable'],
  specs: {
    'Material': 'Coir Fiber',
    'Certification': 'ISO 9001',
    'Fire Rating': 'Class B',
    'Color': 'Brown'
  },
  metrics: ['mm', 'cm', 'inch', ]
},





{
  id: '53',
  name: 'color LD PU Foam',
  description: 'High-quality foam padding material perfect for furniture, packaging, and industrial applications.',
  basePrice: 10,
  category: 'Foam',
  image: 'https://5.imimg.com/data5/SELLER/Default/2023/12/369825749/XO/ZE/HV/1486494/pu-foam-sheets-500x500.png',
  densities: ['18 density','23 density'],
  dimensions: [2,3, 4,  5, 6, 7, 8, 9 ,10,12,15,18,19, 20,21, 25, 30,35, 40,45, 50,70, 75,80,85,90,95, 100,125, 150, 200, 250],
  
    sizes: {
      "feet": [
        '6 feet x 3 feet', '6 feet x 4 feet', '6 feet x 5 feet', '6 feet x 6 feet', '6.25 feet x 3 feet', '6.25 feet x 4 feet', '6.25 feet x 5 feet', '6.25 feet x 6 feet', 
        '6.5 feet x 3 feet', '6.5 feet x 4 feet', '6.5 feet x 5 feet', '6.5 feet x 6 feet'
      ],
      "inches": [
        '72 inches x 36 inches', '72 inches x 48 inches', '72 inches x 60 inches', '72 inches x 72 inches',
        '75 inches x 24 inches', '75 inches x 30 inches', '75 inches x 36 inches', '75 inches x 48 inches', '75 inches x 60 inches', '75 inches x 72 inches',
        '78 inches x 24 inches', '78 inches x 30 inches', '78 inches x 36 inches', '78 inches x 48 inches', '78 inches x 60 inches', '78 inches x 72 inches'
      ],
      "cm": [
       '183 cm x 122 cm', '183 cm x 152 cm', '183 cm x 183 cm',
        '191 cm x 61 cm', '191 cm x 76 cm', '191 cm x 91 cm', '191 cm x 122 cm', '191 cm x 152 cm', '191 cm x 183 cm',
        '198 cm x 61 cm', '198 cm x 76 cm', '198 cm x 91 cm', '198 cm x 122 cm', '198 cm x 152 cm', '198 cm x 183 cm'
      ],
      "mm": [
        '1829 mm x 1219 mm', '1829 mm x 1524 mm', '1829 mm x 1829 mm',
        '1905 mm x 610 mm', '1905 mm x 762 mm', '1905 mm x 914 mm', '1905 mm x 1219 mm', '1905 mm x 1524 mm', '1905 mm x 1829 mm',
        '1981 mm x 610 mm', '1981 mm x 762 mm', '1981 mm x 914 mm', '1981 mm x 1219 mm', '1981 mm x 1524 mm', '1981 mm x 1829 mm'
      ]
    },
  
  
  features: ['Durable', 'Fire resistant', 'Moisture resistant', 'Custom cuttable'],
  specs: {
    'Material': 'Polyurethane',
    'Certification': 'ISO 9001',
    'Fire Rating': 'Class B',
    'Color': 'White'
  },
  metrics: ['mm', 'cm', 'inch', 'feet']
},




// Fabric 
{
  id: '54',
  name: ' Contura Knitting Fabric',
  description: 'High-quality quilting material ideal for a variety of applications, offering durability and smooth texture.',
  basePrice: 10,
  category: 'Quiltings',
  image: 'https://www.dial4trade.com/uploaded_files/product_images/roto-fabric-for-mattress-u-1180561324259202338.jpg',
  densities: ['100 GSM', '200 GSM', '300 GSM', '400 GSM',],
  sizes: {
    "feet": [
      '6 feet x 2 feet', '6 feet x 2.5 feet', '6 feet x 3 feet', '6 feet x 4 feet', '6 feet x 5 feet', '6 feet x 6 feet',
      '6.25 feet x 2 feet', '6.25 feet x 2.5 feet', '6.25 feet x 3 feet', '6.25 feet x 4 feet', '6.25 feet x 5 feet', '6.25 feet x 6 feet',
      '6.5 feet x 2 feet', '6.5 feet x 2.5 feet', '6.5 feet x 3 feet', '6.5 feet x 4 feet', '6.5 feet x 5 feet', '6.5 feet x 6 feet'
    ],
    "inches": [
      '72 inches x 24 inches', '72 inches x 30 inches', '72 inches x 36 inches', '72 inches x 48 inches', '72 inches x 60 inches', '72 inches x 72 inches',
      '75 inches x 24 inches', '75 inches x 30 inches', '75 inches x 36 inches', '75 inches x 48 inches', '75 inches x 60 inches', '75 inches x 72 inches',
      '78 inches x 24 inches', '78 inches x 30 inches', '78 inches x 36 inches', '78 inches x 48 inches', '78 inches x 60 inches', '78 inches x 72 inches'
    ],
    "cm": [
      '183 cm x 61 cm', '183 cm x 76 cm', '183 cm x 91 cm', '183 cm x 122 cm', '183 cm x 152 cm', '183 cm x 183 cm',
      '191 cm x 61 cm', '191 cm x 76 cm', '191 cm x 91 cm', '191 cm x 122 cm', '191 cm x 152 cm', '191 cm x 183 cm',
      '198 cm x 61 cm', '198 cm x 76 cm', '198 cm x 91 cm', '198 cm x 122 cm', '198 cm x 152 cm', '198 cm x 183 cm'
    ],
    "mm": [
      '1829 mm x 610 mm', '1829 mm x 762 mm', '1829 mm x 914 mm', '1829 mm x 1219 mm', '1829 mm x 1524 mm', '1829 mm x 1829 mm',
      '1905 mm x 610 mm', '1905 mm x 762 mm', '1905 mm x 914 mm', '1905 mm x 1219 mm', '1905 mm x 1524 mm', '1905 mm x 1829 mm',
      '1981 mm x 610 mm', '1981 mm x 762 mm', '1981 mm x 914 mm', '1981 mm x 1219 mm', '1981 mm x 1524 mm', '1981 mm x 1829 mm'
    ]
  },
  features: ['Soft texture', 'Durable', 'Lightweight', 'Easy to handle'],
  specs: {
    'Material': 'Polyester',
    'Certification': 'ISO 14001',
    'Color': 'White'
  },metrics: ['mm', 'cm', 'inch', 'feet'],
  dimensions: [5,7,10,12,15,20,25],
},

{
  id: '55',
  name: ' Cotton Fabric',
  description: 'High-quality quilting material ideal for a variety of applications, offering durability and smooth texture.',
  basePrice: 10,
  category: 'Quiltings',
  image: 'https://www.dial4trade.com/uploaded_files/product_images/roto-fabric-for-mattress-u-1180561324259202338.jpg',
  densities: ['100 GSM', '200 GSM', '300 GSM', '400 GSM',],
  sizes: {
    "feet": [
      '6 feet x 2 feet', '6 feet x 2.5 feet', '6 feet x 3 feet', '6 feet x 4 feet', '6 feet x 5 feet', '6 feet x 6 feet',
      '6.25 feet x 2 feet', '6.25 feet x 2.5 feet', '6.25 feet x 3 feet', '6.25 feet x 4 feet', '6.25 feet x 5 feet', '6.25 feet x 6 feet',
      '6.5 feet x 2 feet', '6.5 feet x 2.5 feet', '6.5 feet x 3 feet', '6.5 feet x 4 feet', '6.5 feet x 5 feet', '6.5 feet x 6 feet'
    ],
    "inches": [
      '72 inches x 24 inches', '72 inches x 30 inches', '72 inches x 36 inches', '72 inches x 48 inches', '72 inches x 60 inches', '72 inches x 72 inches',
      '75 inches x 24 inches', '75 inches x 30 inches', '75 inches x 36 inches', '75 inches x 48 inches', '75 inches x 60 inches', '75 inches x 72 inches',
      '78 inches x 24 inches', '78 inches x 30 inches', '78 inches x 36 inches', '78 inches x 48 inches', '78 inches x 60 inches', '78 inches x 72 inches'
    ],
    "cm": [
      '183 cm x 61 cm', '183 cm x 76 cm', '183 cm x 91 cm', '183 cm x 122 cm', '183 cm x 152 cm', '183 cm x 183 cm',
      '191 cm x 61 cm', '191 cm x 76 cm', '191 cm x 91 cm', '191 cm x 122 cm', '191 cm x 152 cm', '191 cm x 183 cm',
      '198 cm x 61 cm', '198 cm x 76 cm', '198 cm x 91 cm', '198 cm x 122 cm', '198 cm x 152 cm', '198 cm x 183 cm'
    ],
    "mm": [
      '1829 mm x 610 mm', '1829 mm x 762 mm', '1829 mm x 914 mm', '1829 mm x 1219 mm', '1829 mm x 1524 mm', '1829 mm x 1829 mm',
      '1905 mm x 610 mm', '1905 mm x 762 mm', '1905 mm x 914 mm', '1905 mm x 1219 mm', '1905 mm x 1524 mm', '1905 mm x 1829 mm',
      '1981 mm x 610 mm', '1981 mm x 762 mm', '1981 mm x 914 mm', '1981 mm x 1219 mm', '1981 mm x 1524 mm', '1981 mm x 1829 mm'
    ]
  },
  features: ['Soft texture', 'Durable', 'Lightweight', 'Easy to handle'],
  specs: {
    'Material': 'Polyester',
    'Certification': 'ISO 14001',
    'Color': 'White'
  },metrics: ['mm', 'cm', 'inch', 'feet'],
  dimensions: [5,7,10,12,15,20,25],
},


];