
import royalLogo from './assets/royal-logo.png';
import { useState, useEffect, useRef } from 'react';
import './App.css';

import product1 from './assets/product1.png';
import product2 from './assets/product2.png';
import product3 from './assets/product3.png';
import product4 from './assets/product4.png';
import product13 from './assets/product13.png';
import product22 from './assets/product22.png';
import product31 from './assets/product31.png';
import product40 from './assets/product40.png';
import product49 from './assets/product49.png';


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
  product2, product1, product3,
  product2, product1, product3,
  product1, product2, product3,
];

const originalProducts = [
  {
    id: 1,
    name: 'Peacock Elegance Choker Set',
    price: 999,
    image: product1,
    category: 'Jewellery Sets',
    description:
      'An elegant peacock-inspired necklace set with beautiful traditional detailing. A lovely choice for celebrations and special occasions.',
  },
  {
    id: 2,
    name: 'Royal Gold Long Haram',
    price: 1299,
    image: product2,
    category: 'Necklaces',
    description:
      'A royal long haram designed to make every occasion special. Its traditional look adds elegance to your outfit.',
  },
  {
    id: 3,
    name: 'Traditional Statement Necklace',
    price: 799,
    image: product3,
    category: 'Necklaces',
    description:
      'A beautiful traditional statement necklace for timeless elegance. Style it for festive occasions and celebrations.',
    price: 799,
  },
  {
    id: 4,
    name: 'Traditional Statement Necklace',
    image: product3,
    category: 'Necklaces',
    description:
      'A beautiful traditional statement necklace for timeless elegance. Style it for festive occasions and celebrations.',
  },
  {
  id: 13,
  name: 'Antique Gold Floral Motif Necklace Set',
  price: 799,
  image: product13,
  category: 'Necklaces',
  description:
    'A stunning antique-finish gold choker featuring intricate spherical beadwork and floral motifs accented with ruby-red and emerald-green stones. Complete with matching stud earrings, perfect for traditional festive wear.',
},
{
  id: 22,
  name: 'Minimalist Gold Heart Pendant Necklace',
  price: 299,
  image: product22,
  category: 'Necklaces',
  description:
    'A delicate and elegant everyday necklace featuring a polished, classic gold heart pendant on a fine chain. A timeless piece for a subtle touch of romance and sophistication.',
},
{
  id: 31,
  name: 'Ornate Temple Style Bridal Necklace Set',
  price: 1299,
  image: product31,
  category: 'Necklaces',
  description:
    'An elaborate, heavy gold-tone bridal necklace featuring intricate filigree work, layered floral patterns, and vibrant ruby and emerald stone accents. Paired with large matching chandelier earrings for a majestic look.',
},
{
  id: 40,
  name: 'Classic Pearl & Ruby Choker Set',
  price: 599,
  image: product40,
  category: 'Necklaces',
  description:
    'A sophisticated pearl necklace featuring a central geometric gold-toned pendant set with a deep red ruby stone and sparkling white crystals. Includes matching jhumka-style earrings with emerald green centers.',
},
{
  id: 49,
  name: 'Peacock Motif Kundan Choker Set',
  price: 1099,
  image: product49,
  category: 'Necklaces',
  description:
    'A magnificent traditional choker featuring an ornate central medallion flanked by elegant peacock motifs. Embellished with rich red kundan stones, clear crystals, and delicate pearl drop detailing, accompanied by matching statement earrings.',
},
];


const placeholderProducts = Array.from({ length: 48 }, (_, index) => {
  const id = index + 4;
  const category = categories[index % categories.length];

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


  const formatPrice = (price) =>
    '₹' + price.toLocaleString('en-IN');

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
        className={`category-circle-card ${
          selectedCategory === category ? 'active' : ''
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
                      className={`wishlist-button ${
                        isWishlisted(product.id) ? 'saved' : ''
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
