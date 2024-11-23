const barberLinks = [
 {
  name: 'instagram',
  link: '"https://www.instagram.com/',
  svgPath: '/images/icons/sprite.svg#instagram',
 },
 {
  name: 'twitter',
  link: 'https://x.com/',
  svgPath: '/images/icons/sprite.svg#x',
 },
 {
  name: 'facebook',
  link: 'https://facebook.com/',
  svgPath: '/images/icons/sprite.svg#facebook',
 },
 {
  name: 'linkedin',
  link: 'https://linkedin.com/',
  svgPath: '/images/icons/sprite.svg#linkedin',
 },
]

const barbers = [
 {
  name: 'John Smith',
  role: 'Extreme Barber',
  links: barberLinks,
  picture: {
   desk: {
    webp: '/images/barbers/barbers_desk@1x.webp',
    jpg: '/images/barbers/barbers_desk@1x.jpg',
   },
   tab: {
    webp: '/images/barbers/barbers_tab@1x.webp',
    jpg: '/images/barbers/barbers_tab@1x.jpg',
   },
   mob: {
    webp: '/images/barbers/barbers_mob@1x.webp',
    jpg: '/images/barbers/barbers_mob@1x.jpg',
   },
  },
 },
 {
  name: 'Michele Doe',
  role: 'Extreme Barber',
  links: barberLinks,
  picture: {
   desk: {
    webp: '/images/barbers/barbers2_desk@1x.webp',
    jpg: '/images/barbers/barbers2_desk@1x.jpg',
   },
   tab: {
    webp: '/images/barbers/barbers2_tab@1x.webp',
    jpg: '/images/barbers/barbers2_tab@1x.jpg',
   },
   mob: {
    webp: '/images/barbers/barbers2_mob@1x.webp',
    jpg: '/images/barbers/barbers2_mob@1x.jpg',
   },
  },
 },
 {
  name: 'Alan Black',
  role: 'Extreme Barber',
  links: barberLinks,
  picture: {
   desk: {
    webp: '/images/barbers/barbers3_desk@1x.webp',
    jpg: '/images/barbers/barbers3_desk@1x.jpg',
   },
   tab: {
    webp: '/images/barbers/barbers3_tab@1x.webp',
    jpg: '/images/barbers/barbers3_tab@1x.jpg',
   },
   mob: {
    webp: '/images/barbers/barbers3_mob@1x.webp',
    jpg: '/images/barbers/barbers3_mob@1x.jpg',
   },
  },
 },
]

module.exports = barbers
