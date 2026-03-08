/**
 * brands.js
 * Brand / partner information shown in BrandStrip and credentials sections.
 */
import kajariaLogo from '../assets/images/brands/kajaria.png'
import astralLogo from '../assets/images/brands/astral-pipes.png'
import kerovitLogo from '../assets/images/brands/kerovit.png'

const brands = [
  {
    id: 'kajaria',
    name: 'Kajaria Tiles',
    tagline: "India's No. 1 Tile Brand",
    credential: 'Prime Dealership',
    color: '#C8102E',
    description:
      'As an authorised Prime Dealer of Kajaria Tiles, we stock the full range of floor tiles, wall tiles, vitrified tiles, and parking tiles.',
    logo: kajariaLogo, // Replace with real logo path once available
  },
  {
    id: 'astral',
    name: 'Astral Pipes',
    tagline: 'The Most Trusted Pipe Brand',
    credential: 'Authorised Distributorship',
    color: '#1B4F9B',
    description:
      'As an authorised Astral Pipes distributor, we supply CPVC, UPVC, and SWR pipes and fittings for residential and commercial projects.',
    logo: astralLogo,
  },
  {
    id: 'kerovit',
    name: 'Kerovit',
    tagline: 'Premium Sanitaryware & Faucets',
    credential: 'Authorised Dealer',
    color: '#2C7BE5',
    description:
      'We are an authorised dealer for Kerovit sanitaryware and faucets — offering wash basins, toilet sets, faucets, and shower panels.',
    logo: kerovitLogo,
  },
]

export default brands
