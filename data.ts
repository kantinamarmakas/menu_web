import type { Category } from "./types/types";

export const menuItemsEn: Category[] = [
  {
    name: 'Starters',
    products: [
      {
        name: 'Tzatziki',
        description: 'A refreshing Greek dip made from creamy yogurt, freshly grated cucumber, minced garlic',
        price: 3
      },
      {
        name: 'Saganaki',
        description: 'Pan-fried Greek cheese, golden and crispy on the outside, gooey and delicious on the inside. Served with a squeeze of lemon for a tangy finish.',
        price: 4.5
      },
      {
        name: 'Fava',
        description: 'A smooth and savory blend of yellow split peas, olive oil, lemon, and herbs. Topped with red onions and capers. Perfect with pita or as a side.',
        price: 3
      }
    ]
  },
  {
    name: 'Main Courses',
    products: [
      {
        name: 'Portion Pork Souvlaki',
        description: 'Portion of three delicious pork souvlaki served with french fries',
        price: 8
      }
    ]
  }
] 