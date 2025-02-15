import { Product } from '@/lib/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'LD PU Foam',
    description: 'High-quality foam padding material perfect for furniture, packaging, and industrial applications.',
    basePrice: 10,
    category: 'Foam',
    image: 'https://3.imimg.com/data3/NA/AQ/MY-5298654/pu-foam-500x500.jpg',
    densities: ['9 kg/m³', '10 kg/m³', '12 kg/m³', '14 kg/m³','16 kg/m³', '18 kg/m³', '20 kg/m³', '22 kg/m³', '23 kg/m³'],
    dimensions: [2, 5, 10, 20, 25, 30, 40, 50, 75, 100, 150, 200, 250],
    
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
    densities: ['28 kg/m³', '32 kg/m³', '40 kg/m³', '50 kg/m³', '60 kg/m³', '65 kg/m³', '80 kg/m³', '90 kg/m³', '100 kg/m³', '110 kg/m³', '120 kg/m³'],
    dimensions: [2, 5, 10, 20, 25, 30, 40, 50, 75, 100, 150, 200, 250],
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
      densities: ['24 Kg/m³', '28 Kg/m³', '32 Kg/m³'],
      dimensions: [2, 5, 10, 20, 25, 30, 40, 50, 75, 100, 150, 200, 250],
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
    image: 'https://m.media-amazon.com/images/I/31OO7SBrB8L.jpg',
    densities: ['24 Kg/m³', '28 KG/m³', '32 KG/m³'],
    dimensions: [2, 5, 10, 20, 25, 30, 40, 50, 75, 100, 150, 200, 250],
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
    densities: ['Standard GMF'], // As per the description
    dimensions: [2, 5, 10, 20, 25, 30, 40, 50, 75, 100, 150, 200, 250],
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
      name: 'LATEX SHEET',
      description: 'High-quality latex sheet material suitable for bedding, furniture, and industrial uses.',
      basePrice: 15,
      category: 'Foam',
      image: 'https://5.imimg.com/data5/MQ/YX/MY-11969714/foam-bed-mattress.jpg',
      densities: ['Standard LS'],
      dimensions: [2, 5, 10, 20, 25, 30, 40, 50, 75, 100, 150, 200, 250],
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
    name: 'LATEX 7 ZONE SHEETS',
    description: 'Premium 7-zone latex foam sheets designed for optimal comfort and support in bedding, furniture, and ergonomic applications.',
    basePrice: 20, // Example base price, you can update this value
    category: 'Foam',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/341157692/MM/LX/YE/141117433/zero-foam-flex-mattress-1000x1000.jpeg', // Replace with an appropriate image URL if available
    densities: ['Standard L7ZS'], // Adjust if needed
    dimensions: [
      2, 5, 10, 20, 25, 30, 40, 50, 75, 100, // Equivalent to 4 inches
      150, // Equivalent to 6 inches
      200, // Equivalent to 8 inches
      250  // Equivalent to 10 inches
    ],
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
    name: 'Coir Sheet',
    description: 'High-density coir sheet ideal for mattresses, cushions, packaging, and industrial use.',
    basePrice: 15,
    category: 'Foam',
    image: 'https://www.sughana.com/image/products/rubberized-coir-sheet.jpg', // Replace with an actual coir-related image URL
    densities: ['60 Kg/m³', '70 Kg/m³', '80 Kg/m³', '90 Kg/m³', '100 Kg/m³', '110 Kg/m³', '120 Kg/m³'],
    dimensions: [10, 20, 25, 30, 40, 50, 75, 100, 150, 200], // Dimensions in mm
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
    densities: ['60 KG/m³', '70 KG/m³', '80 KG/m³', '90 KG/m³', '100 KG/m³', '110 KG/m³', '120 KG/m³'],
    dimensions: [25, 30, 40, 50, 75, 100, 150],
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


  {
    id: '10',
    name: 'Recron Fibre Pillow',
    description: 'Recron Pillow',
    basePrice: 10,
    category: 'Pillow',
    image: 'https://www.buzpick.com/wp-content/uploads/2020/09/Recron-Certified-Bliss-Fibre-Pillow-43-cm-x-69-cm-White-1.jpg', // Replace with an actual coir-related image URL
    densities: ['Standard 16 inch' , 'Standard 17 inch'],
    dimensions: [1], // Dimensions in mm
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
    id: '11',
    name: 'Memory Foam Pillow',
    description: 'High-density coir sheet ideal for mattresses, cushions, packaging, and industrial use.',
    basePrice: 10,
    category: 'Pillow',
    image: 'https://www.seevo.in/cdn/shop/products/4_ce8bc3f1-b41e-4bc6-bd71-5b177f0b0a95_1445x.jpg?v=1700232047', // Replace with an actual coir-related image URL
    densities: ['Standard 16 Inch' , 'Standard 17 Inch'],
    dimensions: [1], // Dimensions in mm
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
    id: '12',
    name: 'Latex Pillow',
    description: 'Latex Pillow',
    basePrice: 10,
    category: 'Pillow',
    image: 'https://images.meesho.com/images/products/203619752/goywt_512.webp', // Replace with an actual coir-related image URL
    densities: ['Standard 16 inch ' , 'Standard 17 inch '],
    dimensions: [1], // Dimensions in mm
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
    id: '13',
    name: 'ROTTO Fabric Roll',
    description: 'High-quality quilting material ideal for a variety of applications, offering durability and smooth texture.',
    basePrice: 10,
    category: 'Quiltings',
    image: 'https://www.dial4trade.com/uploaded_files/product_images/roto-fabric-for-mattress-u-1180561324259202338.jpg',
    densities: ['70 GSM', '80 GSM', '90 GSM', '100 GSM', '110 GSM', '120 GSM'],
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
    dimensions: [1]
  },

   
  {
    id: '14',
    name: 'SATIN Fabric Roll',
    description: 'Premium satin Fabric roll with a smooth and luxurious texture, perfect for quilting and various other applications.',
    basePrice: 10,
    category: 'Quiltings',
    image: 'https://fabricstrades.com/wp-content/uploads/2022/08/plain-dyed-100-Polyester-satin-fabric-for-women-garment-wedding-bridal-5.png',
    densities: ['80GSM', '100GSM', '120GSM', '150GSM', '180GSM', '240GSM'],
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
    features: ['Luxurious texture', 'Durable', 'Lightweight', 'Soft and smooth finish'],
    specs: {
        'Material': 'Satin',
        'Certification': 'ISO 14001',
        'Color': 'White'
    },metrics: ['mm', 'cm', 'inch', 'feet'],
    dimensions: [1]
},


{
  id: '15',
  name: 'COTTON Fabric Roll',
  description: 'High-quality cotton fabric roll known for its durability and softness, ideal for quilting and various applications.',
  basePrice: 10,
  category: 'Quiltings',
  image: 'https://tiimg.tistatic.com/fp/1/007/581/white-cotton-fabric-roll-for-bedding-bedsheet-curtain-cushions-etc--169.jpg',
  densities: ['100GSM', '200GSM', '300GSM', '400GSM'],
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
  features: ['Soft texture', 'Durable', 'Lightweight', 'Natural material'],
  specs: {
      'Material': 'Cotton',
      'Certification': 'ISO 14001',
      'Color': 'White'
  },metrics: ['mm', 'cm', 'inch', 'feet'],
  dimensions: [1]
},


{
  id: '16',
  name: 'JACQUARD (OR KNITTED) Fabric Roll',
  description: 'High-quality Jacquard (or Knitted) fabric roll with intricate patterns and superior durability, ideal for quilting and other applications.',
  basePrice: 10,
  category: 'Quiltings',
  image: 'https://img2.exportersindia.com/product_images/bc-full/dir_45/1336496/knitted-jacquard-fabric-1499172828-3103883.jpeg',
  densities: ['200GSM', '300GSM', '400GSM'],
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
  features: ['Intricate patterns', 'Durable', 'Soft texture', 'Lightweight and versatile'],
  specs: {
      'Material': 'Jacquard',
      'Certification': 'ISO 14001',
      'Color': 'White'
  },metrics: ['mm', 'cm', 'inch', 'feet'],
  dimensions: [1]
},


{
  "id": "17",
  "name": "EPE ROLL",
  "description": "High-quality EPE foam roll, ideal for packing and protecting delicate items during transportation.",
  "basePrice": 10,
  "category": "Packing Material",
  "image": "https://5.imimg.com/data5/SELLER/Default/2022/8/FT/KK/OW/2531564/epe-foam-roll.jpeg",
  "densities": ["18 kg/m³", "20 kg/m³", "23 kg/m³"],
  "dimensions": [2, 5, 10, 15],
  "sizes": [
    "2mm x 100 cm"
  ],
  "features": ["Lightweight", "Impact resistant", "Waterproof", "Customizable"],
  "specs": {
    "Material": "EPE Foam",
    "Certification": "ISO 9001",
    "Fire Rating": "Class C",
    "Color": "White"
  },
  metrics: ['mm', 'cm', 'inch', 'feet']
},
{
  "id": "18",
  "name": "EPE SHEETS",
  "description": "High-quality EPE foam sheets, perfect for packaging and protecting a wide range of items during storage or transportation.",
  "basePrice": 10,
  "category": "Packing Material",
  "image": "https://m.media-amazon.com/images/I/718+Jl14oOL.jpg",
  "densities": ["18 kg/m³", "20 kg/m³", "23 kg/m³"],
  "dimensions": [5,10,25,50,75,100,125,150 ],
  "sizes": [
    "6 feet x 2 feet", 
    "6 feet x 2.5 feet", 
    "6 feet x 3 feet", 
    "6 feet x 4 feet", 
    "6 feet x 5 feet", 
    "6 feet x 6 feet",
    "6.25 feet x 2 feet", 
    "6.25 feet x 2.5 feet", 
    "6.25 feet x 3 feet", 
    "6.25 feet x 4 feet", 
    "6.25 feet x 5 feet", 
    "6.25 feet x 6 feet",
    "6.5 feet x 2 feet", 
    "6.5 feet x 2.5 feet", 
    "6.5 feet x 3 feet", 
    "6.5 feet x 4 feet", 
    "6.5 feet x 5 feet", 
    "6.5 feet x 6 feet"
  ],
  "features": ["Lightweight", "Impact resistant", "Waterproof", "Customizable"],
  "specs": {
    "Material": "EPE Foam",
    "Certification": "ISO 9001",
    "Fire Rating": "Class C",
    "Color": "White"
  },
  metrics: ['mm', 'cm', 'inch', 'feet']
},




  
];