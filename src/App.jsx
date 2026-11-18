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

// NEW: Bangles Images Imports (8 Images)
import bangle1 from './assets/bangles-set/bangles1.png';
import bangle2 from './assets/bangles-set/bangles2.png';
import bangle3 from './assets/bangles-set/bangles3.png';
import bangle4 from './assets/bangles-set/bangles4.png';
import bangle5 from './assets/bangles-set/bangles5.png';
import bangle6 from './assets/bangles-set/bangles6.png';
import bangle7 from './assets/bangles-set/bangles7.png';
import bangle8 from './assets/bangles-set/bangles8.png';

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
  }
];

// Exclude categories that already have real products to prevent fake placeholders
const placeholderCategories = categories.filter(
  cat => cat !== 'Necklaces' && cat !== 'Jewellery Sets' && cat !== 'Earrings' && cat !== 'Bangles'
);

const placeholderProducts = Array.from({ length: 48 }, (_, index) => {
  const id = index + 35; // Starts after the 34 real products
  const category = placeholderCategories[index % placeholderCategories.length];

  return {
    id,
    name: `${category} Design ${String(id).padStart(2, '0')}`,
    price: 0,
    image: null,
    category,
    description: 'Product description will be added soon.',
    isPlaceholder: true,
  };
});

const products = [...originalProducts, ...placeholderProducts];

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
    if (product.isPlaceholder) {
      alert('This product is not available yet. Please add its image and price first.');
      return;
    }

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

    const priceText = product.isPlaceholder
      ? 'Price coming soon'
      : formatPrice(product.price);

    const shareText =
      `✨ ${product.name}\nPrice: ${priceText}\n\n` +
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
                      {product.isPlaceholder
                        ? 'Price coming soon'
                        : formatPrice(product.price)}
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
                      disabled={product.isPlaceholder}
                    >
                      ADD TO CART
                    </button>

                    <button
                      type="button"
                      className="view-button"
                      onClick={() => addToCart(product)}
                      disabled={product.isPlaceholder}
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
              {selectedProduct.isPlaceholder
                ? 'Price coming soon'
                : formatPrice(selectedProduct.price)}
            </h3>

            <p>{selectedProduct.description}</p>

            {!selectedProduct.isPlaceholder && (
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
            )}

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
                      <p>
                        {item.isPlaceholder
                          ? 'Price coming soon'
                          : formatPrice(item.price)}
                      </p>

                      {!item.isPlaceholder && (
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
                      )}

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

      {/* SHOPPING CART */}
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