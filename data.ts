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
];

export const menuItemsGr: Category[] = [
  {
    name: 'Ορεκτικά',
    products: [
      {
        name: 'Φέτα',
        description: 'Ελληνική φέτα από τοπικούς παραγωγούς της Κεφαλονιάς.',
        price: 3.5
      },
      {
        name: 'Ελιές',
        description: 'Βιολογικές ελιές από τα δέντρα μας.',
        price: 3,
        vegan: true
      },
      {
        name: 'Φρεσκοτηγανισμένες πατάτες',
        description: 'Φτιαγμένες από τις καλύτερες πατάτες, είναι ζεστές, τραγανές και νόστιμες.',
        price: 4,
        vegan: true
      },
      {
        name: 'Τζατζίκι',
        description: 'Μια κρεμώδης ανάμειξη γιαουρτιού, αγγουριού, σκόρδου και βοτάνων. Ιδανικό για ντιπ ή ως σάλτσα.',
        price: 4
      },
      {
        name: 'Φάβα',
        description: 'Λεία και κρεμώδης κίτρινη φάβα, αναμεμειγμένη με ελαιόλαδο και λεμόνι. Ιδανικά καρυκευμένη και νόστιμη.',
        price: 5,
        vegan: true
      },
      {
        name: 'Χούμους',
        description: 'Κρεμώδες χούμους, μια λεία ανάμειξη ρεβιθιών, ταχίνι, λεμονιού και πάπρικας.',
        price: 4,
        vegan: true
      },
      {
        name: 'Φαλάφελ με σάλτσα γιαουρτιού',
        description: 'Τραγανά φαλάφελ σερβιρισμένα με μια πικάντικη, κρεμώδη σάλτσα γιαουρτιού.',
        price: 8
      },
      {
        name: 'Ελληνική σαλάτα με παξιμάδι χαρουπιού και κρίταμο',
        price: 8.5
      },
      {
        name: 'Μαριναρισμένες αντζούγιες',
        price: 7,
        description: 'Προσεκτικά προετοιμασμένες και εμποτισμένες με ένα μείγμα βοτάνων. Γεμάτες γεύση και ιδανικές για τους λάτρεις των θαλασσινών.',
        seafood: true
      }
    ]
  },
  {
    name: 'Κυρίως Πιάτα',
    products: [
      {
        name: 'Μερίδα χοιρινά σουβλάκια',
        description: '3 κομμάτια με τηγανητές πατάτες, τζατζίκι και ντομάτα.',
        price: 9
      },
      {
        name: 'Μερίδα χοιρινά λουκάνικα',
        description: '2 κομμάτια με τηγανητές πατάτες, μουστάρδα, μαγιονέζα και κέτσαπ.',
        price: 8.5
      },
      {
        name: 'Παραδοσιακό σαβόρο',
        description: 'Τηγανητή τσιπούρα με σκόρδο, σταφίδες, δενδρολίβανο, ελαιόλαδο και ξύδι.',
        price: 15,
        seafood: true
      },
      {
        name: 'Ψητή τσιπούρα',
        description: 'Ψητή σε φυσικό ξυλοκάρβουνο και σερβιρισμένη με σαλάτα ταμπουλέ.',
        price: 13,
        seafood: true
      },
      {
        name: 'Ψητές σαρδέλες',
        description: 'Ψητές σε φυσικό ξυλοκάρβουνο και σερβιρισμένες με σαλάτα ταμπουλέ.',
        price: 9,
        seafood: true
      },
      {
        name: 'Ψητές γαρίδες',
        description: 'Ψητές σε φυσικό ξυλοκάρβουνο και σερβιρισμένες με σαλάτα ταμπουλέ.',
        price: 12,
        seafood: true,
        frozen: true
      },
      {
        name: 'Γαρίδες σαγανάκι',
        description: 'Γαρίδες μαγειρεμένες με φρέσκια σάλτσα ντομάτας, πιπεριές, σκόρδο, βασιλικό, τυρί και ούζο.',
        price: 12,
        seafood: true,
        frozen: true
      },
      {
        name: 'Τηγανητό καλαμάρι',
        description: 'Πανέ τηγανητό καλαμάρι με τριών ειδών σάλτσα μουστάρδας.',
        price: 10,
        seafood: true,
        frozen: true
      },
      {
        name: 'Γεμιστά',
        description: 'Γεμιστά λαχανικά με πλιγούρι, σταφίδες, φρέσκια σάλτσα ντομάτας, βασιλικό και κύμινο.',
        price: 8,
        vegan: true
      }
    ]
  }
];

export const menuItemsIt: Category[] = [
  {
    name: 'Antipasti',
    products: [
      {
        name: 'Feta',
        description: 'Formaggio Feta greco da produttori locali di Cefalonia.',
        price: 3.5
      },
      {
        name: 'Olive',
        description: 'Olive biologiche dai nostri alberi.',
        price: 3,
        vegan: true
      },
      {
        name: 'Patate fritte fresche',
        description: 'Fatte con le migliori patate, sono calde, croccanti e deliziose.',
        price: 4,
        vegan: true
      },
      {
        name: 'Tzatziki',
        description: 'Una miscela cremosa di yogurt, cetriolo, aglio ed erbe aromatiche. Perfetto come salsa o per intingere.',
        price: 4
      },
      {
        name: 'Fava',
        description: 'Una crema liscia di piselli gialli, mescolata con olio d\'oliva e limone. Perfettamente condita e deliziosa.',
        price: 5,
        vegan: true
      },
      {
        name: 'Hummus',
        description: 'Hummus cremoso, una miscela liscia di ceci, tahina, limone e paprika.',
        price: 4,
        vegan: true
      },
      {
        name: 'Falafel con salsa allo yogurt',
        description: 'Falafel croccanti accompagnati da una salsa di yogurt cremosa e piccante.',
        price: 8
      },
      {
        name: 'Insalata greca con pane di carruba e finocchio di mare',
        price: 8.5
      },
      {
        name: 'Acciughe marinate',
        price: 7,
        description: 'Preparati con cura e infusi con una miscela di erbe. Ricchi di sapore e perfetti per gli amanti dei frutti di mare.',
        seafood: true
      }
    ]
  },
  {
    name: 'Portate Principali',
    products: [
      {
        name: 'Porzione di souvlaki di maiale',
        description: '3 pezzi con patate fritte, tzatziki e pomodoro.',
        price: 9
      },
      {
        name: 'Porzione di salsicce di maiale',
        description: '2 pezzi con patate fritte, senape, maionese e ketchup.',
        price: 8.5
      },
      {
        name: 'Savoro tradizionale',
        description: 'Orata fritta con aglio, uvetta, rosmarino, olio d\'oliva e aceto.',
        price: 15,
        seafood: true
      },
      {
        name: 'Orata alla griglia',
        description: 'Grigliata su carbone naturale e servita con insalata di tabbouleh.',
        price: 13,
        seafood: true
      },
      {
        name: 'Sardine alla griglia',
        description: 'Grigliate su carbone naturale e servite con insalata di tabbouleh.',
        price: 9,
        seafood: true
      },
      {
        name: 'Gamberi alla griglia',
        description: 'Grigliati su carbone naturale e serviti con insalata di tabbouleh.',
        price: 12,
        seafood: true,
        frozen: true
      },
      {
        name: 'Gamberi saganaki',
        description: 'Gamberi cotti con salsa di pomodoro fresco, peperoni, aglio, basilico, formaggio e ouzo.',
        price: 12,
        seafood: true,
        frozen: true
      },
      {
        name: 'Calamari fritti',
        description: 'Calamari impanati e fritti con salsa di senape in tre varianti.',
        price: 10,
        seafood: true,
        frozen: true
      },
      {
        name: 'Gemista',
        description: 'Verdure ripiene di bulgur, uvetta, salsa di pomodoro fresco, basilico e cumino.',
        price: 8,
        vegan: true
      }
    ]
  }
];

