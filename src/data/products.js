/**
 * products.js
 * All product data as static arrays, grouped by category.
 * Replace placeholder images and descriptions with real content.
 */

export const graniteProducts = {
  southIndian: [
    {
      id: 'si-1',
      name: 'Black Galaxy',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      finish: 'Polished',
      origin: 'Andhra Pradesh',
    },
    {
      id: 'si-2',
      name: 'Absolute Black',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      finish: 'Polished / Leather',
      origin: 'Karnataka',
    },
    {
      id: 'si-3',
      name: 'Colonial White',
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=300&fit=crop',
      finish: 'Polished',
      origin: 'Tamil Nadu',
    },
    {
      id: 'si-4',
      name: 'Steel Grey',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      finish: 'Polished / Flamed',
      origin: 'Andhra Pradesh',
    },
  ],
  rajasthani: [
    {
      id: 'rj-1',
      name: 'Jodhpur Pink',
      image: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=400&h=300&fit=crop',
      finish: 'Sanded',
      origin: 'Jodhpur, Rajasthan',
    },
    {
      id: 'rj-2',
      name: 'Jaisalmer Yellow',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=300&fit=crop',
      finish: 'Natural',
      origin: 'Jaisalmer, Rajasthan',
    },
    {
      id: 'rj-3',
      name: 'Dholpur Beige',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop',
      finish: 'Natural / Sanded',
      origin: 'Dholpur, Rajasthan',
    },
  ],
}

export const tilesProducts = [
  {
    id: 't-1',
    name: 'Wooden Oak Floor Tile',
    category: 'Floor Tiles',
    size: '600×600 mm',
    finish: 'Matt',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&h=300&fit=crop',
  },
  {
    id: 't-2',
    name: 'Marble Finish Wall Tile',
    category: 'Wall Tiles',
    size: '300×600 mm',
    finish: 'Glossy',
    image: 'https://images.unsplash.com/photo-1571741140674-8949ca7df2a7?w=400&h=300&fit=crop',
  },
  {
    id: 't-3',
    name: 'Anti-Skid Parking Tile',
    category: 'Parking Tiles',
    size: '400×400 mm',
    finish: 'Anti-skid',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=300&fit=crop',
  },
  {
    id: 't-4',
    name: 'Double Charge Vitrified',
    category: 'Vitrified Tiles',
    size: '800×800 mm',
    finish: 'High Gloss',
    image: 'https://images.unsplash.com/photo-1562183241-b937e95585b6?w=400&h=300&fit=crop',
  },
  {
    id: 't-5',
    name: 'Subway Wall Tile',
    category: 'Wall Tiles',
    size: '200×400 mm',
    finish: 'Glossy',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop',
  },
  {
    id: 't-6',
    name: 'Rustic Floor Tile',
    category: 'Floor Tiles',
    size: '600×1200 mm',
    finish: 'Matt',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400&h=300&fit=crop',
  },
]

export const sanitarywareProducts = [
  {
    id: 'sw-1',
    name: 'Premium Wall-Hung Basin',
    category: 'Wash Basins',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop',
    description: 'Sleek ceramic basin with vitreous enamel finish.',
  },
  {
    id: 'sw-2',
    name: 'One-Piece Toilet Suite',
    category: 'Toilet Sets',
    image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=400&h=300&fit=crop',
    description: 'Water-saving dual flush 4/6-litre system.',
  },
  {
    id: 'sw-3',
    name: 'Single-Lever Basin Faucet',
    category: 'Faucets',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=300&fit=crop',
    description: 'Brass body with chrome finish, ceramic cartridge.',
  },
  {
    id: 'sw-4',
    name: 'Rain Shower Panel',
    category: 'Shower Panels',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop',
    description: 'Stainless steel multi-function shower panel.',
  },
]

export const pipeFittingsProducts = [
  {
    id: 'pf-1',
    name: 'CPVC Hot & Cold Pipe',
    category: 'CPVC Pipes',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop',
    sizes: '15mm – 100mm',
    description: 'FlowGuard Gold® CPVC — ideal for hot and cold plumbing.',
  },
  {
    id: 'pf-2',
    name: 'UPVC Pressure Pipe',
    category: 'UPVC Pipes',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop',
    sizes: '20mm – 160mm',
    description: 'High-pressure UPVC for underground and agriculture use.',
  },
  {
    id: 'pf-3',
    name: 'SWR Column Pipe',
    category: 'SWR Pipes',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop',
    sizes: '75mm – 200mm',
    description: 'Soil, waste & rain-water drainage solutions.',
  },
]
