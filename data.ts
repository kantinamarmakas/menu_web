import type { Category } from "./types/types";

export const menuItemsEn: Category[] = [
  {
    name: 'Starters',
    products: [
      {
        name: 'Feta',
        description: 'Greek Feta cheese from local Kefalonian farmers.',
        price: 3.5
      },
      {
        name: 'Olives',
        description: 'Organic olives from our trees.',
        price: 3,
        vegan: true
      },
      {
        name: 'Freshly fried potatoes',
        description: 'Made from the finest potatoes, they\'re hot, crunchy, and delicious.',
        price: 4,
        vegan: true
      },
      {
        name: 'Tzatziki',
        description: 'A creamy blend of yogurt, cucumber, garlic, and herbs. Perfect for dipping or as a sauce.',
        price: 4
      },
      {
        name: 'Fava',
        description: 'A smooth and creamy yellow split pea dip, blended with olive oil and lemon. Perfectly seasoned and delicious.',
        price: 5,
        vegan: true
      },
      {
        name: 'Hummus',
        description: 'Creamy hummus, a smooth blend of chickpeas, tahini, lemon, and paprika.',
        price: 4,
        vegan: true
      },
      {
        name: 'Falafel with yogurt sauce',
        description: 'Crispy falafels paired with a tangy, creamy yogurt dip.',
        price: 8
      },
      {
        name: 'Greek salad with carob rusk and rock samphire',
        price: 8.5,
        vegan: true
      },
      {
        name: 'Marinated anchovies',
        price: 7,
        description: 'Carefully prepared and infused with a blend of herbs. Bursting with flavor and perfect for any seafood lover'
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
      },
      {
        name: 'Portion Fresh Sardines',
        description: 'Portion of fresh sardines.',
        price: 10
      },
      {
        name: 'Portion Pork Sausages',
        description: 'Portion of pork sausages served with french fries.',
        price: 10
      }
    ]
  }
] 