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
        price: 8.5
      },
      {
        name: 'Marinated anchovies',
        price: 7,
        description: 'Carefully prepared and infused with a blend of herbs. Bursting with flavor and perfect for any seafood lover',
        seafood: true
      }
    ]
  },
  {
    name: 'Main Courses',
    products: [
      {
        name: 'Portion of pork souvlaki',
        description: '3 pieces with fried potatoes, tzatziki and tomato.',
        price: 9
      },
      {
        name: 'Portion of pork sausages',
        description: '2 pieces with fried potatoes, mustard, mayonnaise and ketchup.',
        price: 8.5
      },
      {
        name: 'Traditional savoro',
        description: 'Fried sea bream with garlic, raisins, rosemary, olive oil and vinegar.',
        price: 15,
        seafood: true
      },
      {
        name: 'Grilled sea bream',
        description: 'Grilled on natural wood charcoal and served with tabbouleh salad.',
        price: 13,
        seafood: true
      },
      {
        name: 'Grilled sardines',
        description: 'Grilled on natural wood charcoal and served with tabbouleh salad.',
        price: 9,
        seafood: true
      },
      {
        name: 'Grilled shrimps',
        description: 'Grilled on natural wood charcoal and served with tabbouleh salad.',
        price: 12,
        seafood: true,
        frozen: true
      },
      {
        name: 'Shrimps saganaki',
        description: 'Shrimps cooked with fresh tomato sauce, peppers, garlic, basil, cheese and ouzo.',
        price: 12,
        seafood: true,
        frozen: true
      },
      {
        name: 'Fried kalamari',
        description: 'Battered deep fried kalamari with with 3 kinds of mustard sauce.',
        price: 10,
        seafood: true,
        frozen: true
      },
      {
        name: 'Gemista',
        description: 'Stuffed vegetables with bulgur, raisins, fresh tomato sauce, basil and cumin.',
        price: 8,
        vegan: true
      }
    ]
  }
] 