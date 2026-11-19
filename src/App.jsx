import royalLogo from './assets/royal-logo.png';
import { useState, useEffect, useRef } from 'react';
import './App.css';

// Product Import (Kept only for the About Section image)
import product3 from './assets/product3.png';

// Category Images Imports
import catAnklets from './assets/Category Images/cat-anklets.png';
import catBangles from './assets/Category Images/cat-bangles.png';
import catBracelet from './assets/Category Images/cat-bracelet.png';
import catBridal from './assets/Category Images/cat-bridal.png';
import catEarrings from './assets/Category Images/cat-earrings.png';
import catJewellery from './assets/Category Images/cat-jewellery.png';
import catMangalsutra from './assets/Category Images/cat-mangalsutra.png';
import catNecklaces from './assets/Category Images/cat-necklaces.png';
import catRings from './assets/Category Images/cat-rings.png';

// Necklace Images Imports (14 Images)
import necklace1 from './assets/Necklace Images/necklace1.png';
import necklace2 from './assets/Necklace Images/necklace2.png';
import necklace3 from './assets/Necklace Images/necklace3.png';
import necklace4 from './assets/Necklace Images/necklace4.png';
import necklace5 from './assets/Necklace Images/necklace5.png';
import necklace6 from './assets/Necklace Images/necklace6.png';
import necklace7 from './assets/Necklace Images/necklace7.png';
import necklace8 from './assets/Necklace Images/necklace8.png';
import necklace9 from './assets/Necklace Images/necklace9.png';
import necklace10 from './assets/Necklace Images/necklace10.png';
import necklace11 from './assets/Necklace Images/necklace11.png';
import necklace12 from './assets/Necklace Images/necklace12.png';
import necklace13 from './assets/Necklace Images/necklace13.png';
import necklace14 from './assets/Necklace Images/necklace14.png';

// Jewellery Sets Images Imports (6 Images)
import jewellery1 from './assets/jewellery-sets/jewellery1.png';
import jewellery2 from './assets/jewellery-sets/jewellery2.png';
import jewellery3 from './assets/jewellery-sets/jewellery3.png';
import jewellery4 from './assets/jewellery-sets/jewellery4.png';
import jewellery5 from './assets/jewellery-sets/jewellery5.png';
import jewellery6 from './assets/jewellery-sets/jewellery6.png';

// Earrings Images Imports (6 Images)
import earring1 from './assets/earring-sets/earring1.png';
import earring2 from './assets/earring-sets/earring2.png';
import earring3 from './assets/earring-sets/earring3.png';
import earring4 from './assets/earring-sets/earring4.png';
import earring5 from './assets/earring-sets/earring5.png';
import earring6 from './assets/earring-sets/earring6.png';

// Bangles Images Imports (8 Images)
import bangle1 from './assets/bangles-set/bangles1.png';
import bangle2 from './assets/bangles-set/bangles2.png';
import bangle3 from './assets/bangles-set/bangles3.png';
import bangle4 from './assets/bangles-set/bangles4.png';
import bangle5 from './assets/bangles-set/bangles5.png';
import bangle6 from './assets/bangles-set/bangles6.png';
import bangle7 from './assets/bangles-set/bangles7.png';
import bangle8 from './assets/bangles-set/bangles8.png';

// Bracelets Images Imports (10 Images)
import bracelet1 from './assets/bracelets.png/bracelets1.png';
import bracelet2 from './assets/bracelets.png/bracelets2.png';
import bracelet3 from './assets/bracelets.png/bracelets3.png';
import bracelet4 from './assets/bracelets.png/bracelets4.png';
import bracelet5 from './assets/bracelets.png/bracelets5.png';
import bracelet6 from './assets/bracelets.png/bracelets6.png';
import bracelet7 from './assets/bracelets.png/bracelets7.png';
import bracelet8 from './assets/bracelets.png/bracelets8.png';
import bracelet9 from './assets/bracelets.png/bracelets9.png';
import bracelet10 from './assets/bracelets.png/bracelets10.png';

// NEW: Rings Images Imports (12 Images)
import ring1 from './assets/ring sets/ring1.png';
import ring2 from './assets/ring sets/ring2.png';
import ring3 from './assets/ring sets/ring3.png';
import ring4 from './assets/ring sets/ring4.png';
import ring5 from './assets/ring sets/ring5.png';
import ring6 from './assets/ring sets/ring6.png';
import ring7 from './assets/ring sets/ring7.png';
import ring8 from './assets/ring sets/ring8.png';
import ring9 from './assets/ring sets/ring9.png';
import ring10 from './assets/ring sets/ring10.png';
import ring11 from './assets/ring sets/ring11.png';
import ring12 from './assets/ring sets/ring12.png';

// NEW: Mangalsutra Images Imports (12 Images)
import mangalsutra1 from './assets/mangalsutra sets/mangalsutra1.png';
import mangalsutra2 from './assets/mangalsutra sets/mangalsutra2.png';
import mangalsutra3 from './assets/mangalsutra sets/mangalsutra3.png';
import mangalsutra4 from './assets/mangalsutra sets/mangalsutra4.png';
import mangalsutra5 from './assets/mangalsutra sets/mangalsutra5.png';
import mangalsutra6 from './assets/mangalsutra sets/mangalsutra6.png';
import mangalsutra7 from './assets/mangalsutra sets/mangalsutra7.png';
import mangalsutra8 from './assets/mangalsutra sets/mangalsutra8.png';
import mangalsutra9 from './assets/mangalsutra sets/mangalsutra9.png';
import mangalsutra10 from './assets/mangalsutra sets/mangalsutra10.png';
import mangalsutra11 from './assets/mangalsutra sets/mangalsutra11.png';
import mangalsutra12 from './assets/mangalsutra sets/mangalsutra12.png';

// NEW: Bridal Jewellery Images Imports (12 Images)
import bridal1 from './assets/bridal-jewellery sets/bridal1.png';
import bridal2 from './assets/bridal-jewellery sets/bridal2.png';
import bridal3 from './assets/bridal-jewellery sets/bridal3.png';
import bridal4 from './assets/bridal-jewellery sets/bridal4.png';
import bridal5 from './assets/bridal-jewellery sets/bridal5.png';
import bridal6 from './assets/bridal-jewellery sets/bridal6.png';
import bridal7 from './assets/bridal-jewellery sets/bridal7.png';
import bridal8 from './assets/bridal-jewellery sets/bridal8.png';
import bridal9 from './assets/bridal-jewellery sets/bridal9.png';
import bridal10 from './assets/bridal-jewellery sets/bridal10.png';
import bridal11 from './assets/bridal-jewellery sets/bridal11.png';
import bridal12 from './assets/bridal-jewellery sets/bridal12.png';

// NEW: Anklets Images Imports (12 Images)
import anklet1 from './assets/anklets sets/anklets1.png';
import anklet2 from './assets/anklets sets/anklets2.png';
import anklet3 from './assets/anklets sets/anklets3.png';
import anklet4 from './assets/anklets sets/anklets4.png';
import anklet5 from './assets/anklets sets/anklets5.png';
import anklet6 from './assets/anklets sets/anklets6.png';
import anklet7 from './assets/anklets sets/anklets7.png';
import anklet8 from './assets/anklets sets/anklets8.png';
import anklet9 from './assets/anklets sets/anklets9.png';
import anklet10 from './assets/anklets sets/anklets10.png';
import anklet11 from './assets/anklets sets/anklets11.png';
import anklet12 from './assets/anklets sets/anklets12.png';

const categories = [
  'Necklaces',
  'Jewellery Sets',
  'Earrings',
  'Bangles',
  'Bracelets',
  'Rings',
  'Bridal Jewellery',
  'Mangalsutra',
  'Anklets',
];

const categoryImages = [
  catNecklaces, 
  catJewellery, 
  catEarrings, 
  catBangles, 
  catBracelet, 
  catRings, 
  catBridal, 
  catMangalsutra, 
  catAnklets
];

const originalProducts = [
  // --- 14 NECKLACES ---
  {
    id: 1,
    name: 'Royal Antique Gold Choker Set',
    price: 550,
    image: necklace1,
    category: 'Necklaces',
    description: 'A majestic antique gold choker paired with matching earrings. Intricate detailing perfect for weddings and grand celebrations.',
  },
  {
    id: 2,
    name: 'Classic Gold Heart Pendant',
    price: 350,
    image: necklace2,
    category: 'Necklaces',
    description: 'A timeless and minimal gold heart pendant on a delicate chain. Ideal for everyday elegance and subtle sophistication.',
  },
  {
    id: 3,
    name: 'Ornate Filigree Gold Choker',
    price: 599,
    image: necklace3,
    category: 'Necklaces',
    description: 'Exquisitely crafted heavy gold choker featuring traditional filigree work that adds a touch of royal heritage to any outfit.',
  },
  {
    id: 4,
    name: 'Ruby & Emerald Temple Necklace',
    price: 580,
    image: necklace4,
    category: 'Necklaces',
    description: 'A stunning temple-style necklace adorned with vibrant ruby and emerald stones, perfect for festive and traditional occasions.',
  },
  {
    id: 5,
    name: 'Heritage Kundan Choker Set',
    price: 520,
    image: necklace5,
    category: 'Necklaces',
    description: 'A rich heritage choker set featuring beautiful green and red kundan stones, complete with matching earrings for a regal look.',
  },
  {
    id: 6,
    name: 'Pearl Drop Gold Necklace',
    price: 450,
    image: necklace6,
    category: 'Necklaces',
    description: 'A graceful gold necklace featuring elegant pearl-like beadwork, bringing a classic and timeless charm to your ensemble.',
  },
  {
    id: 7,
    name: 'Traditional Coin Gold Necklace',
    price: 490,
    image: necklace7,
    category: 'Necklaces',
    description: 'A gorgeous traditional gold necklace featuring elegant coin motifs, blending heritage design with modern wearability.',
  },
  {
    id: 8,
    name: 'Elegant Diamond-Cut Chain',
    price: 400,
    image: necklace8,
    category: 'Necklaces',
    description: 'A beautifully textured diamond-cut chain that catches the light, adding a subtle sparkle to both casual and formal outfits.',
  },
  {
    id: 9,
    name: 'Delicate Layered Gold Chain',
    price: 320,
    image: necklace9,
    category: 'Necklaces',
    description: 'A delicate and modern layered chain that offers a sophisticated, minimalist look for daily wear.',
  },
  {
    id: 10,
    name: 'Royal Black & Gold Statement',
    price: 600,
    image: necklace10,
    category: 'Necklaces',
    description: 'A bold and striking statement necklace combining deep black stones with intricate gold work, designed to turn heads.',
  },
  {
    id: 11,
    name: 'Antique Green Stone Choker',
    price: 530,
    image: necklace11,
    category: 'Necklaces',
    description: 'A striking antique-finish necklace featuring deep green stones and gold accents, offering a perfect blend of tradition and style.',
  },
  {
    id: 12,
    name: 'Gold Medallion Choker Set',
    price: 480,
    image: necklace12,
    category: 'Necklaces',
    description: 'A gorgeous medallion-style choker set with matching earrings, perfect for adding a touch of festive glamour to your look.',
  },
  {
    id: 13,
    name: 'Black Pendant Silver Chain',
    price: 380,
    image: necklace13,
    category: 'Necklaces',
    description: 'A unique and modern silver chain featuring a bold black statement pendant, ideal for contemporary styling.',
  },
  {
    id: 14,
    name: 'Minimal Heart Gold Chain',
    price: 310,
    image: necklace14,
    category: 'Necklaces',
    description: 'A sleek and minimal gold chain with a delicate heart pendant, an essential piece for daily wear and effortless elegance.',
  },

  // --- 6 JEWELLERY SETS ---
  {
    id: 15,
    name: 'Midnight Black & Gold Set',
    price: 580,
    image: jewellery1,
    category: 'Jewellery Sets',
    description: 'A striking black and gold choker set with matching earrings, perfect for an elegant evening look.',
  },
  {
    id: 16,
    name: 'Elegant Pearl Drop Set',
    price: 420,
    image: jewellery2,
    category: 'Jewellery Sets',
    description: 'A delicate pearl necklace set that adds a touch of classic sophistication to any outfit.',
  },
  {
    id: 17,
    name: 'Classic Pearl Choker Set',
    price: 520,
    image: jewellery3,
    category: 'Jewellery Sets',
    description: 'A timeless pearl choker with matching stud earrings, ideal for bridal and formal events.',
  },
  {
    id: 18,
    name: 'Royal Sapphire Blue Set',
    price: 590,
    image: jewellery4,
    category: 'Jewellery Sets',
    description: 'A regal blue stone necklace set that exudes elegance and charm for special occasions.',
  },
  {
    id: 19,
    name: 'Crimson Ruby Bridal Set',
    price: 600,
    image: jewellery5,
    category: 'Jewellery Sets',
    description: 'A stunning ruby-red necklace set worn by the model, perfect for traditional weddings and festivals.',
  },
  {
    id: 20,
    name: 'Silver Sparkle Diamond Set',
    price: 460,
    image: jewellery6,
    category: 'Jewellery Sets',
    description: 'A dazzling silver-toned necklace set featuring sparkling stones for a glamorous, modern look.',
  },

  // --- 6 EARRINGS ---
  {
    id: 21,
    name: 'Sparkling Silver Chandelier Earrings',
    price: 450,
    image: earring1,
    category: 'Earrings',
    description: 'Elegant silver-toned chandelier earrings adorned with sparkling stones, perfect for evening wear.',
  },
  {
    id: 22,
    name: 'Classic Gold Diamond Studs',
    price: 420,
    image: earring2,
    category: 'Earrings',
    description: 'Timeless gold stud earrings featuring a brilliant diamond-like center, ideal for everyday elegance.',
  },
  {
    id: 23,
    name: 'Emerald Green Drop Earrings',
    price: 480,
    image: earring3,
    category: 'Earrings',
    description: 'Sophisticated long drop earrings with a stunning green backdrop that exudes vintage charm.',
  },
  {
    id: 24,
    name: 'Crystal White Bridal Drops',
    price: 490,
    image: earring4,
    category: 'Earrings',
    description: 'Exquisite white crystal chandelier earrings, beautifully crafted for bridal and festive occasions.',
  },
  {
    id: 25,
    name: 'Midnight Black Ornate Earrings',
    price: 460,
    image: earring5,
    category: 'Earrings',
    description: 'Striking black and silver statement earrings with intricate detailing for a bold, glamorous look.',
  },
  {
    id: 26,
    name: 'Golden Pearl Drop Earrings',
    price: 440,
    image: earring6,
    category: 'Earrings',
    description: 'Traditional gold-toned earrings featuring delicate pearl drops, adding a touch of classic grace to any outfit.',
  },

  // --- 8 BANGLES ---
  {
    id: 27,
    name: 'Textured Gold Stackable Bangles',
    price: 580,
    image: bangle1,
    category: 'Bangles',
    description: 'A set of thick, intricately textured gold bangles that add a bold, traditional statement to your look.',
  },
  {
    id: 28,
    name: 'Ornate Filigree Gold Kada',
    price: 550,
    image: bangle2,
    category: 'Bangles',
    description: 'A beautifully crafted openable gold kada featuring detailed filigree work and a classic antique finish.',
  },
  {
    id: 29,
    name: 'Diamond-Cut Broad Gold Bangle',
    price: 600,
    image: bangle3,
    category: 'Bangles',
    description: 'A striking broad bangle with a brilliant diamond-cut texture that catches and reflects light beautifully.',
  },
  {
    id: 30,
    name: 'Delicate Stone Accent Bangle',
    price: 420,
    image: bangle4,
    category: 'Bangles',
    description: 'A slender gold bangle featuring a subtle, elegant stone accent, ideal for stacking or wearing alone.',
  },
  {
    id: 31,
    name: 'Classic Black & White Stone Bangles',
    price: 490,
    image: bangle5,
    category: 'Bangles',
    description: 'Elegant gold bangles adorned with contrasting black and white stones, offering a chic and versatile look.',
  },
  {
    id: 32,
    name: 'Intricate Silver Finish Kada',
    price: 520,
    image: bangle6,
    category: 'Bangles',
    description: 'A heavy, beautifully detailed kada with a sparkling silver finish, perfect for festive occasions.',
  },
  {
    id: 33,
    name: 'Antique Embossed Gold Bangle',
    price: 590,
    image: bangle7,
    category: 'Bangles',
    description: 'A wide gold bangle featuring traditional embossed patterns, adding a touch of royal heritage to your wrist.',
  },
  {
    id: 34,
    name: 'Emerald Green Leaf Motif Bangle',
    price: 480,
    image: bangle8,
    category: 'Bangles',
    description: 'A gorgeous gold bangle featuring delicate green stone accents and elegant leaf motifs.',
  },

  // --- 10 BRACELETS ---
  {
    id: 35,
    name: 'Golden Grace Chain Bracelet',
    price: 380,
    image: bracelet1,
    category: 'Bracelets',
    description: 'A delicate gold-toned chain bracelet featuring subtle dark bead accents, perfect for adding a touch of everyday elegance.',
  },
  {
    id: 36,
    name: 'Classic Solitaire Silver Bracelet',
    price: 450,
    image: bracelet2,
    category: 'Bracelets',
    description: 'An elegant silver-toned bracelet featuring a brilliant central stone, offering a timeless and sophisticated look.',
  },
  {
    id: 37,
    name: 'Sparkling Crystal Tennis Bracelet',
    price: 520,
    image: bracelet3,
    category: 'Bracelets',
    description: 'A stunning classic tennis bracelet adorned with sparkling crystals, designed to catch the light beautifully for evening wear.',
  },
  {
    id: 38,
    name: 'Minimalist Silver Link Bracelet',
    price: 340,
    image: bracelet4,
    category: 'Bracelets',
    description: 'A sleek and minimalist silver link bracelet, ideal for daily wear or layering with your favorite accessories.',
  },
  {
    id: 39,
    name: 'Twisted Elegance Silver Bracelet',
    price: 390,
    image: bracelet5,
    category: 'Bracelets',
    description: 'A beautifully crafted silver bracelet featuring a twisted rope design that adds texture and modern flair to any outfit.',
  },
  {
    id: 40,
    name: 'Emerald Green Beaded Bracelet',
    price: 420,
    image: bracelet6,
    category: 'Bracelets',
    description: 'A striking bracelet featuring deep green stones and gold accents, bringing a vibrant pop of color to your jewellery collection.',
  },
  {
    id: 41,
    name: 'Delicate Pearl Gold Chain',
    price: 360,
    image: bracelet7,
    category: 'Bracelets',
    description: 'A graceful gold chain bracelet dotted with delicate pearl-like accents, exuding classic charm and femininity.',
  },
  {
    id: 42,
    name: 'Timeless Silver Chain Bracelet',
    price: 330,
    image: bracelet8,
    category: 'Bracelets',
    description: 'A versatile and classic silver chain bracelet that serves as a perfect staple piece for any jewellery lover.',
  },
  {
    id: 43,
    name: 'Golden Crescent Charm Bracelet',
    price: 410,
    image: bracelet9,
    category: 'Bracelets',
    description: 'A unique gold-toned bracelet featuring a distinct curved charm design, perfect for a subtle statement.',
  },
  {
    id: 44,
    name: 'Textured Woven Silver Bracelet',
    price: 370,
    image: bracelet10,
    category: 'Bracelets',
    description: 'A beautifully textured silver-toned bracelet with a woven pattern, adding a touch of intricate elegance to your wrist.',
  },

  // --- 12 RINGS (Price: 300 - 400) ---
  {
    id: 45,
    name: 'Classic Silver Solitaire Ring',
    price: 350,
    image: ring1,
    category: 'Rings',
    description: 'A breathtaking silver-toned ring featuring a brilliant solitaire stone, perfect for engagements or special occasions.',
  },
  {
    id: 46,
    name: 'Golden Floral Accent Ring',
    price: 320,
    image: ring2,
    category: 'Rings',
    description: 'A delicate gold ring with a beautiful floral motif, adding a touch of nature-inspired elegance to your hand.',
  },
  {
    id: 47,
    name: 'Vintage Emerald Statement Ring',
    price: 400,
    image: ring3,
    category: 'Rings',
    description: 'A striking vintage-style gold ring featuring a vivid emerald green stone surrounded by intricate detailing.',
  },
  {
    id: 48,
    name: 'Crystal Halo Silver Ring',
    price: 380,
    image: ring4,
    category: 'Rings',
    description: 'An elegant silver ring boasting a central crystal surrounded by a sparkling halo of smaller stones.',
  },
  {
    id: 49,
    name: 'Rose Gold Twisted Band',
    price: 310,
    image: ring5,
    category: 'Rings',
    description: 'A minimalist rose gold-toned band with a gentle twist, perfect for stacking or wearing alone.',
  },
  {
    id: 50,
    name: 'Royal Sapphire Blue Ring',
    price: 390,
    image: ring6,
    category: 'Rings',
    description: 'A regal gold ring featuring a deep blue sapphire-like stone, exuding classic sophistication.',
  },
  {
    id: 51,
    name: 'Regal Green Gemstone Ring',
    price: 370,
    image: ring7,
    category: 'Rings',
    description: 'A thick gold band ring featuring a bold green gemstone center, designed to make a statement.',
  },
  {
    id: 52,
    name: 'Art Deco Silver Ring',
    price: 340,
    image: ring8,
    category: 'Rings',
    description: 'A geometric silver ring inspired by Art Deco designs, offering a modern yet timeless look.',
  },
  {
    id: 53,
    name: 'Elegant Gold Knot Ring',
    price: 330,
    image: ring9,
    category: 'Rings',
    description: 'A beautifully crafted gold ring with a delicate knot design, symbolizing eternal elegance.',
  },
  {
    id: 54,
    name: 'Ruby Red Cocktail Ring',
    price: 400,
    image: ring10,
    category: 'Rings',
    description: 'A bold cocktail ring featuring a striking ruby-red stone, perfect for evening events and parties.',
  },
  {
    id: 55,
    name: 'Pearl Cluster Gold Ring',
    price: 360,
    image: ring11,
    category: 'Rings',
    description: 'A luxurious gold ring adorned with a cluster of delicate pearl-like stones for a classic look.',
  },
  {
    id: 56,
    name: 'Sparkling Silver Eternity Ring',
    price: 380,
    image: ring12,
    category: 'Rings',
    description: 'A gorgeous silver eternity ring fully encrusted with sparkling stones, symbolizing endless beauty.',
  },

  // --- 12 MANGALSUTRA (Price: 400 - 500) ---
  {
    id: 57,
    name: 'Traditional Black Bead Mangalsutra',
    price: 450,
    image: mangalsutra1,
    category: 'Mangalsutra',
    description: 'A classic and elegant mangalsutra featuring traditional black beads and a beautiful gold pendant.',
  },
  {
    id: 58,
    name: 'Diamond Pendant Mangalsutra',
    price: 500,
    image: mangalsutra2,
    category: 'Mangalsutra',
    description: 'A modern take on the traditional mangalsutra, featuring a stunning diamond-like pendant on a black bead chain.',
  },
  {
    id: 59,
    name: 'Floral Gold Mangalsutra',
    price: 480,
    image: mangalsutra3,
    category: 'Mangalsutra',
    description: 'A beautifully designed mangalsutra with a delicate floral gold pendant, perfect for daily wear.',
  },
  {
    id: 60,
    name: 'Short Layer Mangalsutra',
    price: 420,
    image: mangalsutra4,
    category: 'Mangalsutra',
    description: 'A stylish short-layered mangalsutra that blends traditional values with modern aesthetics.',
  },
  {
    id: 61,
    name: 'Antique Finish Mangalsutra',
    price: 460,
    image: mangalsutra5,
    category: 'Mangalsutra',
    description: 'A beautifully crafted mangalsutra with an antique gold finish, adding a touch of heritage to your look.',
  },
  {
    id: 62,
    name: 'Dual Chain Mangalsutra',
    price: 490,
    image: mangalsutra6,
    category: 'Mangalsutra',
    description: 'A unique dual-chain mangalsutra featuring intricate gold work and classic black beads.',
  },
  {
    id: 63,
    name: 'Minimalist Gold Mangalsutra',
    price: 400,
    image: mangalsutra7,
    category: 'Mangalsutra',
    description: 'A sleek, minimalist mangalsutra with a small gold pendant, ideal for everyday elegance.',
  },
  {
    id: 64,
    name: 'Traditional Vati Mangalsutra',
    price: 470,
    image: mangalsutra8,
    category: 'Mangalsutra',
    description: 'A traditional Maharashtrian-style mangalsutra featuring the classic vati (bowl) design.',
  },
  {
    id: 65,
    name: 'Ornate Gold Pendant Mangalsutra',
    price: 495,
    image: mangalsutra9,
    category: 'Mangalsutra',
    description: 'A rich mangalsutra featuring an intricately designed ornate gold pendant.',
  },
  {
    id: 66,
    name: 'Layered Chain Mangalsutra',
    price: 440,
    image: mangalsutra10,
    category: 'Mangalsutra',
    description: 'A contemporary layered mangalsutra that adds a modern twist to a traditional piece.',
  },
  {
    id: 67,
    name: 'Classic Gold & Black Mangalsutra',
    price: 430,
    image: mangalsutra11,
    category: 'Mangalsutra',
    description: 'A timeless piece featuring the perfect balance of gold and black beads, suited for all occasions.',
  },
  {
    id: 68,
    name: 'Bridal Gold Mangalsutra',
    price: 500,
    image: mangalsutra12,
    category: 'Mangalsutra',
    description: 'A heavy, bridal-style mangalsutra with elaborate gold detailing for your most special day.',
  },

  // --- 12 BRIDAL JEWELLERY (Price: 1100 - 1200) ---
  {
    id: 69,
    name: 'Royal Kundan Bridal Set',
    price: 1200,
    image: bridal1,
    category: 'Bridal Jewellery',
    description: 'A magnificent bridal set featuring heavy Kundan work, perfect for the modern royal bride.',
  },
  {
    id: 70,
    name: 'Emerald Bridal Choker Set',
    price: 1150,
    image: bridal2,
    category: 'Bridal Jewellery',
    description: 'A stunning bridal choker set adorned with vibrant emerald green stones and gold accents.',
  },
  {
    id: 71,
    name: 'Heritage Polki Bridal Set',
    price: 1180,
    image: bridal3,
    category: 'Bridal Jewellery',
    description: 'An exquisite heritage bridal set featuring uncut Polki stones and intricate gold craftsmanship.',
  },
  {
    id: 72,
    name: 'Pearl & Gold Bridal Set',
    price: 1100,
    image: bridal4,
    category: 'Bridal Jewellery',
    description: 'A graceful bridal set combining classic pearls with detailed gold work for an elegant look.',
  },
  {
    id: 73,
    name: 'Midnight Black Bridal Set',
    price: 1190,
    image: bridal5,
    category: 'Bridal Jewellery',
    description: 'A bold and striking bridal set featuring deep black stones set against bright gold.',
  },
  {
    id: 74,
    name: 'Traditional Temple Bridal Set',
    price: 1200,
    image: bridal6,
    category: 'Bridal Jewellery',
    description: 'A heavy temple-style bridal set with intricate motifs and vibrant stone accents.',
  },
  {
    id: 75,
    name: 'Ruby Red Bridal Necklace',
    price: 1170,
    image: bridal7,
    category: 'Bridal Jewellery',
    description: 'A breathtaking bridal necklace set featuring rich ruby-red stones and matching earrings.',
  },
  {
    id: 76,
    name: 'Antique Gold Bridal Set',
    price: 1160,
    image: bridal8,
    category: 'Bridal Jewellery',
    description: 'A majestic antique gold finish bridal set, perfect for traditional wedding ceremonies.',
  },
  {
    id: 77,
    name: 'Royal Blue Sapphire Bridal Set',
    price: 1195,
    image: bridal9,
    category: 'Bridal Jewellery',
    description: 'A luxurious bridal set featuring deep blue sapphire stones and exquisite gold detailing.',
  },
  {
    id: 78,
    name: 'Diamond-Cut Bridal Choker',
    price: 1140,
    image: bridal10,
    category: 'Bridal Jewellery',
    description: 'A brilliant diamond-cut bridal choker set that catches the light beautifully.',
  },
  {
    id: 79,
    name: 'Pastel Green Bridal Set',
    price: 1120,
    image: bridal11,
    category: 'Bridal Jewellery',
    description: 'A unique and elegant bridal set featuring soft pastel green stones for a modern bride.',
  },
  {
    id: 80,
    name: 'Kundan & Emerald Bridal Set',
    price: 1200,
    image: bridal12,
    category: 'Bridal Jewellery',
    description: 'A masterpiece bridal set combining traditional Kundan work with rich emerald green stones.',
  },

  // --- 12 ANKLETS (Price: 380 - 450) ---
  {
    id: 81,
    name: 'Silver Charm Anklet',
    price: 380,
    image: anklet1,
    category: 'Anklets',
    description: 'A delicate silver anklet adorned with small, elegant charms.',
  },
  {
    id: 82,
    name: 'Classic Silver Chain Payal',
    price: 390,
    image: anklet2,
    category: 'Anklets',
    description: 'A traditional silver payal with a classic chain design, perfect for daily wear.',
  },
  {
    id: 83,
    name: 'Crystal Drop Anklet',
    price: 420,
    image: anklet3,
    category: 'Anklets',
    description: 'A beautiful anklet featuring sparkling crystal drops that add a touch of glamour.',
  },
  {
    id: 84,
    name: 'Diamond-Cut Silver Anklet',
    price: 400,
    image: anklet4,
    category: 'Anklets',
    description: 'A shimmering silver anklet with a diamond-cut texture that reflects light beautifully.',
  },
  {
    id: 85,
    name: 'Floral Motif Silver Anklet',
    price: 410,
    image: anklet5,
    category: 'Anklets',
    description: 'An elegant anklet featuring delicate floral motifs, perfect for a feminine look.',
  },
  {
    id: 86,
    name: 'Layered Silver Anklet',
    price: 430,
    image: anklet6,
    category: 'Anklets',
    description: 'A trendy layered anklet that adds a bohemian touch to your style.',
  },
  {
    id: 87,
    name: 'Black Bead Silver Anklet',
    price: 385,
    image: anklet7,
    category: 'Anklets',
    description: 'A stylish anklet combining silver chains with black beads for a modern look.',
  },
  {
    id: 88,
    name: 'Traditional Ghungroo Payal',
    price: 440,
    image: anklet8,
    category: 'Anklets',
    description: 'A classic payal featuring traditional ghungroo (bells) that chime beautifully as you walk.',
  },
  {
    id: 89,
    name: 'Ornate Silver Payal',
    price: 450,
    image: anklet9,
    category: 'Anklets',
    description: 'A heavy and ornate silver payal with intricate detailing, ideal for festive occasions.',
  },
  {
    id: 90,
    name: 'Pearl Accent Anklet',
    price: 425,
    image: anklet10,
    category: 'Anklets',
    description: 'A graceful anklet adorned with delicate pearl-like stones, adding a touch of elegance.',
  },
  {
    id: 91,
    name: 'Emerald Green Bead Anklet',
    price: 415,
    image: anklet11,
    category: 'Anklets',
    description: 'A vibrant anklet featuring emerald green beads set in silver-toned metal.',
  },
  {
    id: 92,
    name: 'Bridal Silver Payal Set',
    price: 450,
    image: anklet12,
    category: 'Anklets',
    description: 'A matching pair of heavy silver payals designed for brides and special occasions.',
  },
];

// Since all categories now have real products, placeholders are removed
const products = originalProducts;

function ProductImage({ product, className = '' }) {
  if (product.image) {
    return (
      <img
        className={className}
        src={product.image}
        alt={product.name}
      />
    );
  }

  return (
    <div className={`product-image-placeholder ${className}`}>
      <span>✧</span>
      <strong>IMAGE COMING SOON</strong>
      <small>Product {product.id}</small>
    </div>
  );
}

function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sortOrder, setSortOrder] = useState('recommended');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categoryTrackRef = useRef(null);

  useEffect(() => {
    const match = window.location.hash.match(/^#product-(\d+)$/);

    if (match) {
      const product = products.find(
        (item) => item.id === Number(match[1])
      );

      if (product) setSelectedProduct(product);
    }
  }, []);

  const formatPrice = (price) => {
    if (price === undefined || price === null) return 'Price coming soon';
    return '₹' + price.toLocaleString('en-IN');
  };

  const filteredProducts = products.filter((product) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search);

    const matchesCategory =
      selectedCategory === 'All' ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === 'low-high') return a.price - b.price;
    if (sortOrder === 'high-low') return b.price - a.price;
    return a.id - b.id;
  });

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existing = currentCart.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });

    setCartOpen(true);
  };

  const removeFromCart = (productId) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId)
    );
  };

  const updateQuantity = (productId, change) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + change }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const toggleWishlist = (product) => {
    setWishlist((currentWishlist) => {
      const alreadySaved = currentWishlist.some(
        (item) => item.id === product.id
      );

      return alreadySaved
        ? currentWishlist.filter((item) => item.id !== product.id)
        : [...currentWishlist, product];
    });
  };

  const isWishlisted = (productId) =>
    wishlist.some((item) => item.id === productId);

  const shareProduct = (product) => {
    const shareUrl =
      window.location.origin +
      window.location.pathname +
      '#product-' +
      product.id;

    const shareText =
      `✨ ${product.name}\nPrice: ${formatPrice(product.price)}\n\n` +
      `LOUCHANIKE | ROYAL BLOOM\n` +
      `ELEGANCE IN EVERY DETAIL\n\nShop here: ${shareUrl}`;

    window.open(
      'https://wa.me/?text=' + encodeURIComponent(shareText),
      '_blank',
      'noopener,noreferrer'
    );
  };

  const chooseCategory = (category) => {
    setSelectedCategory(category);
    setSearchTerm('');
  };

  const scrollCategories = (direction) => {
    if (categoryTrackRef.current) {
      categoryTrackRef.current.scrollBy({
        left: direction * categoryTrackRef.current.clientWidth * 0.75,
        behavior: 'smooth',
      });
    }
  };

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="store">

      {/* ANNOUNCEMENT BAR */}
      <div className="announcement">
        <span>✦ Free Shipping All Over India — No Extra Charges</span>
        <span className="announcement-center">
          ELEGANCE IN EVERY DETAIL ♡
        </span>
        <span>Premium Packaging&nbsp; | &nbsp;Safe & Secure Shopping</span>
      </div>

      {/* HEADER */}
      <header className="header">
        <a href="#home" className="logo">
          <span className="logo-symbol">
            <img src={royalLogo} alt="LOUCHANIKE Logo" />
          </span>
          <span className="logo-name">LOUCHANIKE</span>
        </a>

        <div className="header-actions">
          <button
            className="header-action"
            type="button"
            onClick={() => alert('Customer account feature will be connected soon.')}
          >
            <span>♙</span>
            <small>Account</small>
          </button>

          <button
            className="header-action"
            type="button"
            onClick={() => setWishlistOpen(true)}
          >
            <span>♡</span>
            <small>Wishlist</small>
            {wishlist.length > 0 && (
              <i className="action-count">{wishlist.length}</i>
            )}
          </button>

          <button
            className="header-action"
            type="button"
            onClick={() => setCartOpen(true)}
          >
            <span>♧</span>
            <small>Cart</small>
            {cartCount > 0 && (
              <i className="action-count">{cartCount}</i>
            )}
          </button>
        </div>
      </header>

      {/* NAVIGATION */}
      <nav className="main-nav">
        <a href="#products" onClick={() => chooseCategory('All')}>
          New Arrivals
        </a>
        <a href="#products" onClick={() => chooseCategory('Earrings')}>
          Earrings
        </a>
        <a href="#products" onClick={() => chooseCategory('Necklaces')}>
          Necklaces
        </a>
        <a href="#products" onClick={() => chooseCategory('Jewellery Sets')}>
          Jewellery Sets
        </a>
        <a href="#products" onClick={() => chooseCategory('Rings')}>
          Rings
        </a>
        <a href="#products" onClick={() => chooseCategory('Bracelets')}>
          Bracelets
        </a>
        <a href="#products" onClick={() => chooseCategory('All')}>
          Bestsellers
        </a>
        <a href="#contact">Contact</a>
      </nav>

      <main id="home">

        {/* PRODUCTS */}
        <section className="products" id="products">

          <div className="category-carousel">
            <button
              type="button"
              className="category-arrow category-arrow-left"
              onClick={() => scrollCategories(-1)}
              aria-label="Scroll categories left"
            >
              &#10094;
            </button>

            <div className="category-circle-track" ref={categoryTrackRef}>
              {categories.map((category, index) => (
                <button
                  type="button"
                  className={`category-circle-card ${selectedCategory === category ? 'active' : ''
                    }`}
                  key={category}
                  onClick={() => chooseCategory(category)}
                >
                  <div className="category-circle-image">
                    <img src={categoryImages[index]} alt={category} />
                  </div>
                  <span className="category-circle-name">{category}</span>
                </button>
              ))}
            </div>

            <button
              type="button"
              className="category-arrow category-arrow-right"
              onClick={() => scrollCategories(1)}
              aria-label="Scroll categories right"
            >
              &#10095;
            </button>
          </div>

          <div className="search-box">
            <input
              type="search"
              placeholder="Search jewellery..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>

          <div className="category-filters">
            {['All', ...categories].map((category) => (
              <button
                type="button"
                key={category}
                className={selectedCategory === category ? 'active' : ''}
                onClick={() => chooseCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="product-toolbar">
            <span>{sortedProducts.length} Products</span>

            <label>
              Sort by:
              <select
                value={sortOrder}
                onChange={(event) => setSortOrder(event.target.value)}
              >
                <option value="recommended">Recommended</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
              </select>
            </label>
          </div>

          <div className="product-grid">
            {sortedProducts.length === 0 ? (
              <p className="no-products">
                No jewellery found. Try another search.
              </p>
            ) : (
              sortedProducts.map((product) => (
                <article className="product-card" key={product.id}>
                  <div className="product-image-wrap">
                    <button
                      type="button"
                      className="product-image-click"
                      onClick={() => setSelectedProduct(product)}
                      aria-label={`View ${product.name}`}
                    >
                      <ProductImage product={product} />
                    </button>

                    <button
                      type="button"
                      className={`wishlist-button ${isWishlisted(product.id) ? 'saved' : ''
                        }`}
                      onClick={() => toggleWishlist(product)}
                      aria-label={
                        isWishlisted(product.id)
                          ? 'Remove from wishlist'
                          : 'Add to wishlist'
                      }
                    >
                      {isWishlisted(product.id) ? '♥' : '♡'}
                    </button>
                  </div>

                  <div className="product-info">
                    <p className="eyebrow">{product.category}</p>

                    <h3
                      className="product-name-click"
                      onClick={() => setSelectedProduct(product)}
                    >
                      {product.name}
                    </h3>

                    <div className="product-rating">
                      <span>★★★★★</span>
                      <small>New Collection</small>
                    </div>

                    <p className="product-price">
                      {formatPrice(product.price)}
                    </p>

                    <button
                      type="button"
                      className="product-details-button"
                      onClick={() => setSelectedProduct(product)}
                    >
                      VIEW DETAILS
                    </button>

                    <button
                      type="button"
                      className="shop-button product-add-button"
                      onClick={() => addToCart(product)}
                    >
                      ADD TO CART
                    </button>

                    <button
                      type="button"
                      className="view-button"
                      onClick={() => addToCart(product)}
                    >
                      BUY NOW
                    </button>

                    <button
                      type="button"
                      className="share-button"
                      onClick={() => shareProduct(product)}
                    >
                      ↗ SHARE PRODUCT
                    </button>
                  </div>
                </article>
              ))
            )}
          </div>
        </section>

        {/* CUSTOMER SERVICE STRIP */}
        <section className="service-strip">
          <div className="service-item">
            <span>♢</span>
            <div>
              <strong>Secure Shopping</strong>
              <small>Safe checkout experience</small>
            </div>
          </div>

          <div className="service-item">
            <span>◇</span>
            <div>
              <strong>Easy Returns</strong>
              <small>Customer-first service</small>
            </div>
          </div>

          <div className="service-item">
            <span>♧</span>
            <div>
              <strong>Order Support</strong>
              <small>Help with your orders</small>
            </div>
          </div>

          <div className="service-item">
            <span>♧</span>
            <div>
              <strong>Customer Care</strong>
              <small>We're here to help</small>
            </div>
          </div>
        </section>

        {/* OUR STORY */}
        <section className="about" id="about">
          <div className="about-image">
            <img src={product3} alt="LOUCHANIKE jewellery collection" />
          </div>

          <div className="about-content">
            <p className="eyebrow">OUR STORY</p>
            <h2>More Than Just Jewellery</h2>
            <h3>It's a Bloom of Confidence.</h3>

            <p>
              At LOUCHANIKE | ROYAL BLOOM, we believe jewellery is
              more than an accessory. It is a celebration of your
              unique beauty, your individuality and your special moments.
            </p>

            <a className="shop-button" href="#collections">
              EXPLORE OUR COLLECTION <span>→</span>
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer id="contact">
        <div className="footer-brand">
          <span className="logo-symbol footer-logo">
            <img src={royalLogo} alt="ROYAL BLOOM Logo" />
          </span>
          <div className="logo-name">LOUCHANIKE</div>
          <span className="logo-subtitle">ROYAL BLOOM</span>
          <p>ELEGANCE IN EVERY DETAIL</p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#collections">Collections</a>
          <a href="#products">Shop</a>
          <a href="#about">Our Story</a>
        </div>

        <div className="footer-social">
          <a
            href="https://www.instagram.com/louchanike_7/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>

        <small>
          © 2026 LOUCHANIKE. All rights reserved.
        </small>
      </footer>

      {/* PRODUCT DETAILS MODAL */}
      {selectedProduct && (
        <div
          className="details-overlay"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="details"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Product details"
          >
            <button
              type="button"
              className="close-cart"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close product details"
            >
              ✕
            </button>

            <div className="details-image">
              <ProductImage product={selectedProduct} />
            </div>

            <p className="eyebrow">{selectedProduct.category}</p>

            <h2>{selectedProduct.name}</h2>

            <h3 className="product-price">
              {formatPrice(selectedProduct.price)}
            </h3>

            <p>{selectedProduct.description}</p>

            <button
              type="button"
              className="shop-button"
              onClick={() => {
                addToCart(selectedProduct);
                setSelectedProduct(null);
              }}
            >
              ADD TO CART
            </button>

            <button
              type="button"
              className="view-button"
              onClick={() => toggleWishlist(selectedProduct)}
            >
              {isWishlisted(selectedProduct.id)
                ? 'REMOVE FROM WISHLIST'
                : 'ADD TO WISHLIST'}
            </button>

            <button
              type="button"
              className="share-button"
              onClick={() => shareProduct(selectedProduct)}
            >
              ↗ SHARE PRODUCT
            </button>
          </div>
        </div>
      )}

      {/* WISHLIST */}
      {wishlistOpen && (
        <div
          className="cart-overlay"
          onClick={() => setWishlistOpen(false)}
        >
          <div
            className="cart-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="close-cart"
              onClick={() => setWishlistOpen(false)}
            >
              ✕
            </button>

            <p className="eyebrow">YOUR FAVOURITES</p>
            <h2>My Wishlist</h2>

            {wishlist.length === 0 ? (
              <p>Your wishlist is empty.</p>
            ) : (
              <div className="cart-items">
                {wishlist.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <ProductImage product={item} />

                    <div className="cart-item-info">
                      <h3>{item.name}</h3>
                      <p>{formatPrice(item.price)}</p>

                      <button
                        type="button"
                        className="shop-button"
                        onClick={() => {
                          addToCart(item);
                          setWishlistOpen(false);
                        }}
                      >
                        ADD TO CART
                      </button>

                      <button
                        type="button"
                        className="remove-button"
                        onClick={() => toggleWishlist(item)}
                      >
                        Remove from Wishlist
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* SHOPPING CART (Fixed Duplication Bug) */}
      {cartOpen && (
        <div
          className="cart-overlay"
          onClick={() => setCartOpen(false)}
        >
          <div
            className="cart-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="close-cart"
              onClick={() => setCartOpen(false)}
            >
              ✕
            </button>

            <p className="eyebrow">YOUR SELECTION</p>
            <h2>Shopping Cart</h2>

            {cart.length === 0 ? (
              <p>Your shopping cart is empty.</p>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((item) => (
                    <div className="cart-item" key={item.id}>
                      <ProductImage product={item} />

                      <div className="cart-item-info">
                        <h3>{item.name}</h3>
                        <p>{formatPrice(item.price)}</p>

                        <div className="quantity-controls">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, -1)}
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>

                          <span>{item.quantity}</span>

                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, 1)}
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          className="remove-button"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-total">
                  <span>Total</span>
                  <strong>{formatPrice(cartTotal)}</strong>
                </div>

                <button
                  type="button"
                  className="shop-button checkout-button"
                  onClick={() =>
                    alert('Checkout will be connected soon!')
                  }
                >
                  PROCEED TO CHECKOUT
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;