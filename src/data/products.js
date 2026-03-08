/**
 * products.js
 * All product data as static arrays, grouped by category.
 * Replace placeholder images and descriptions with real content.
 */
import astralCpvcImage from '../assets/images/products/astral-cpvc-pipes.png'
import astralUpvcImage from '../assets/images/products/astral-upvc-pipes.png'
import astralSwrImage from '../assets/images/products/astral-swr-pipes.png'
import kerovitBasinImage from '../assets/images/products/kerovit-basin.png'
import kerovitToiletImage from '../assets/images/products/kerovit-one-piece.png'
import kerovitFaucetImage from '../assets/images/products/kerovit-faucet.png'
import kerovitShowerPanelImage from '../assets/images/products/kerovit-shower.png'
import kajariaWhiteTileImage from '../assets/images/products/kajaria-white-floor-tiles.png'
import kajariaParkingTileImage from '../assets/images/products/kajaria-parking-tiles.png'
import kajariaKitchenTileImage from '../assets/images/products/kajaria-kitchen-wall-tiles.png'
import kajariaExteriorTileImage from '../assets/images/products/kajaria-exterior-tiles.png'
import kajariaBathroomTileImage from '../assets/images/products/kajaria-bathroom-wall-tiles.png'
import kajariaFloorTileImage from '../assets/images/products/kajaria-floor-tiles.png'
import southIndianGraniteImage1 from '../assets/images/products/south-india-granite-1.png'
import southIndianGraniteImage3 from '../assets/images/products/south-india-granite-3.png'
import rajasthanGraniteImage1 from '../assets/images/products/rajasthan-granite-1.png'
import rajasthanGraniteImage2 from '../assets/images/products/rajasthan-granite-2.png'
import rajasthanGraniteImage3 from '../assets/images/products/rajasthan-granite-3.png'  

export const graniteProducts = {
  southIndian: [
    {
      id: 'si-1',
      name: 'Grey Granite',
      image: southIndianGraniteImage1,
      finish: '',
      origin: 'Andhra Pradesh',
    },
    {
      id: 'si-2',
      name: 'Dark Grey Granite',
      image: southIndianGraniteImage3,
      finish: '',
      origin: 'Andhra Pradesh',
    },
  ],
  rajasthani: [
    {
      id: 'rj-1',
      name: 'Dark Black Granite',
      image: rajasthanGraniteImage1,
      finish: '',
      origin: 'Rajasthan',
    },
    {
      id: 'rj-2',
      name: 'Grey Granite',
      image: rajasthanGraniteImage2,
      finish: '',
      origin: 'Rajasthan',
    },
    {
      id: 'rj-3',
      name: 'Wavy Black Granite',
      image: rajasthanGraniteImage3,
      finish: '',
      origin: 'Rajasthan',
    },
  ],
}

export const tilesProducts = [
  {
    id: 't-1',
    name: 'White Marble Floor Tiles',
    category: 'Floor Tiles',
    size: '1200×600 mm',
    finish: 'HD Ceramic',
    image: kajariaWhiteTileImage,
  },
  {
    id: 't-2',
    name: 'Kitchen Wall Tiles',
    category: 'Wall Tiles',
    size: '300×450 mm',
    finish: 'Glossy Ceramic',
    image: kajariaKitchenTileImage,
  },
  {
    id: 't-3',
    name: 'Anti-Skid Parking Tile',
    category: 'Parking Tiles',
    size: '400×400 mm',
    finish: 'Anti-skid',
    image: kajariaParkingTileImage,
  },
  {
    id: 't-4',
    name: 'Exterior Cladding Tile',
    category: 'Exterior Tiles',
    size: 'tbd',
    finish: 'Textured',
    image: kajariaExteriorTileImage,
  },
  {
    id: 't-5',
    name: 'Bathroom Wall Tiles',
    category: 'Wall Tiles',
    size: '300×450 mm',
    finish: 'HD Ceramic',
    image: kajariaBathroomTileImage,
  },
  {
    id: 't-6',
    name: 'Bathroom Floor Tiles',
    category: 'Floor Tiles',
    size: '600×1200 mm',
    finish: 'HD Ceramic',
    image: kajariaFloorTileImage
  },
]

export const sanitarywareProducts = [
  {
    id: 'sw-1',
    name: 'Table Top Basin',
    category: 'Wash Basins',
    image: kerovitBasinImage,
    description: 'Sleek ceramic basin with vitreous enamel finish.',
  },
  {
    id: 'sw-2',
    name: 'One-Piece Toilet',
    category: 'Toilet Sets',
    image: kerovitToiletImage,
    description: 'Water-saving dual flush 4/6-litre system.',
  },
  {
    id: 'sw-3',
    name: 'Single Lever Faucet',
    category: 'Faucets',
    image: kerovitFaucetImage,
    description: 'Brass body with chrome finish, ceramic cartridge.',
  },
  {
    id: 'sw-4',
    name: 'Rain Shower Panel',
    category: 'Shower Panels',
    image: kerovitShowerPanelImage,
    description: 'Stainless steel multi-function shower panel.',
  },
]

export const pipeFittingsProducts = [
  {
    id: 'pf-1',
    name: 'CPVC Hot & Cold Pipe',
    category: 'CPVC Pipes',
    image: astralCpvcImage,
    sizes: '15mm – 100mm',
    description: 'FlowGuard Gold® CPVC — ideal for hot and cold plumbing.',
  },
  {
    id: 'pf-2',
    name: 'UPVC Pressure Pipe',
    category: 'UPVC Pipes',
    image: astralUpvcImage,
    sizes: '20mm – 160mm',
    description: 'High-pressure UPVC for underground and agriculture use.',
  },
  {
    id: 'pf-3',
    name: 'SWR Column Pipe',
    category: 'SWR Pipes',
    image: astralSwrImage,
    sizes: '75mm – 200mm',
    description: 'Soil, waste & rain-water drainage solutions.',
  },
]
