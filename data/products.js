import theme from '@theme'

import BottlePink from 'public/img/bottle-pink.png'
import BottleYellow from 'public/img/bottle-yellow.png'
import BottleBlue from 'public/img/bottle-blue.png'

export const products = [
  {
    title: 'BENGOS',
    subtitle: 'EXTRA ACILI LEZZETLİ SOS',
    slug: 'bengos',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna minim veniam aliqua.',
    sizes: ['300ML', '500ML'],
    price: 35,
    color: theme.color.yellow,
    image: BottleYellow,
  },
  {
    title: 'MISTO',
    subtitle: 'BARBEKÜLÜ VE BALLI TATLI SOS',
    slug: 'misto',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna minim veniam aliqua.',
    sizes: ['300ML', '500ML'],
    price: 30,
    color: theme.color.pink,
    image: BottlePink,
  },
  {
    title: 'TANTANIIIIS',
    subtitle: 'SÜPER ACILI LEZZETLİ SOS',
    slug: 'tantaniiiis',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna minim veniam aliqua.',
    sizes: ['300ML', '500ML'],
    price: 40,
    color: theme.color.blue,
    image: BottleBlue,
  },
]
