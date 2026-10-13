/* ZEBrand - Main JS */
const ZEBrand = {
  // ========== PRODUCTS DATA ==========
  products: [
    {
      id: 1,
      name: { en: "Classic Leather Jacket", ru: "Классическая кожаная куртка", ua: "Класична шкіряна куртка" },
      brand: "ZEB Luxe",
      price: 899,
      oldPrice: 1199,
      category: "outerwear",
      colors: ["#1a1a1a", "#8B4513", "#2F4F4F"],
      sizes: ["S", "M", "L", "XL"],
      images: [
        "images/jacket1.jpg",
        "images/jacket2.jpg",
        "images/jacket3.jpg"
      ],
      desc: {
        en: "Premium full-grain leather jacket with modern slim fit. Handcrafted details and durable construction for lasting style.",
        ru: "Премиальная куртка из натуральной кожи с современным приталенным кроем. Ручная отделка и прочная конструкция для долговечного стиля.",
        ua: "Преміальна куртка з натуральної шкіри з сучасним приталеним кроєм. Ручна обробка та міцна конструкція для довговічного стилю."
      },
      badge: "sale"
    },
    {
      id: 2,
      name: { en: "Silk Evening Dress", ru: "Шёлковое вечернее платье", ua: "Шовкова вечірня сукня" },
      brand: "ZEB Couture",
      price: 649,
      oldPrice: null,
      category: "dresses",
      colors: ["#000000", "#8B0000", "#1C1C1C"],
      sizes: ["XS", "S", "M", "L"],
      images: [
        "images/dress1.jpg",
        "images/dress2.jpg",
        "images/dress3.jpg"
      ],
      desc: {
        en: "Elegant silk evening dress with delicate draping. Perfect for special occasions and formal events.",
        ru: "Элегантное шёлковое вечернее платье с изящной драпировкой. Идеально для особых случаев и официальных мероприятий.",
        ua: "Елегантна шовкова вечірня сукня з витонченою драпіровкою. Ідеально для особливих випадків та офіційних заходів."
      },
      badge: "new"
    },
    {
      id: 3,
      name: { en: "Minimalist Watch", ru: "Минималистичные часы", ua: "Мінімалістичний годинник" },
      brand: "ZEB Time",
      price: 420,
      oldPrice: 520,
      category: "accessories",
      colors: ["#C0C0C0", "#000000", "#D4AF37"],
      sizes: ["One Size"],
      images: [
        "images/watch1.jpg",
        "images/watch2.jpg",
        "images/watch3.jpg"
      ],
      desc: {
        en: "Swiss-inspired minimalist watch with sapphire crystal and genuine leather strap. Timeless elegance on your wrist.",
        ru: "Минималистичные часы в швейцарском стиле с сапфировым стеклом и ремешком из натуральной кожи. Вечная элегантность на вашем запястье.",
        ua: "Мінімалістичний годинник у швейцарському стилі з сапфіровим склом та ремінцем з натуральної шкіри. Вічна елегантність на вашому зап'ясті."
      },
      badge: "sale"
    },
    {
      id: 4,
      name: { en: "Cashmere Sweater", ru: "Кашемировый свитер", ua: "Кашеміровий светр" },
      brand: "ZEB Soft",
      price: 380,
      oldPrice: null,
      category: "knitwear",
      colors: ["#F5F5DC", "#808080", "#2F4F4F", "#000080"],
      sizes: ["S", "M", "L", "XL"],
      images: [
        "images/sweater1.jpg",
        "images/sweater2.jpg",
        "images/sweater3.jpg"
      ],
      desc: {
        en: "100% pure cashmere sweater. Unparalleled softness and warmth for the colder seasons.",
        ru: "Свитер из 100% чистого кашемира. Непревзойдённая мягкость и тепло для холодного сезона.",
        ua: "Светр зі 100% чистого кашеміру. Неперевершена м'якість та тепло для холодного сезону."
      },
      badge: null
    },
    {
      id: 5,
      name: { en: "Designer Handbag", ru: "Дизайнерская сумка", ua: "Дизайнерська сумка" },
      brand: "ZEB Bags",
      price: 1250,
      oldPrice: 1500,
      category: "accessories",
      colors: ["#8B4513", "#000000", "#F5F5DC"],
      sizes: ["One Size"],
      images: [
        "images/bag1.jpg",
        "images/bag2.jpg",
        "images/bag3.jpg"
      ],
      desc: {
        en: "Iconic structured handbag crafted from Italian leather. Spacious interior with signature gold hardware.",
        ru: "Культовая структурированная сумка из итальянской кожи. Вместительный интерьер с фирменной золотой фурнитурой.",
        ua: "Культова структурована сумка з італійської шкіри. Місткий інтер'єр з фірмовою золотою фурнітурою."
      },
      badge: "sale"
    },
    {
      id: 6,
      name: { en: "Tailored Wool Blazer", ru: "Шерстяной пиджак", ua: "Вовняний піджак" },
      brand: "ZEB Tailor",
      price: 720,
      oldPrice: null,
      category: "outerwear",
      colors: ["#1a1a1a", "#2F4F4F", "#4A4A4A"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      images: [
        "images/blazer1.jpg",
        "images/blazer2.jpg",
        "images/blazer3.jpg"
      ],
      desc: {
        en: "Impeccably tailored wool blazer. Perfect for business and smart-casual looks.",
        ru: "Безупречно скроенный шерстяной пиджак. Идеален для делового и smart-casual стиля.",
        ua: "Бездоганно скроєний вовняний піджак. Ідеальний для ділового та smart-casual стилю."
      },
      badge: "new"
    },
    {
      id: 7,
      name: { en: "Linen Summer Shirt", ru: "Льняная летняя рубашка", ua: "Лляна літня сорочка" },
      brand: "ZEB Air",
      price: 185,
      oldPrice: 240,
      category: "shirts",
      colors: ["#FFFFFF", "#87CEEB", "#F5DEB3", "#90EE90"],
      sizes: ["S", "M", "L", "XL"],
      images: [
        "images/shirt1.jpg",
        "images/shirt2.jpg",
        "images/shirt3.jpg"
      ],
      desc: {
        en: "Breathable pure linen shirt. Effortless style for warm days and vacations.",
        ru: "Дышащая рубашка из чистого льна. Легкий стиль для тёплых дней и отпуска.",
        ua: "Дихаюча сорочка з чистого льону. Легкий стиль для теплих днів та відпустки."
      },
      badge: "sale"
    },
    {
      id: 8,
      name: { en: "Leather Sneakers", ru: "Кожаные кроссовки", ua: "Шкіряні кросівки" },
      brand: "ZEB Step",
      price: 310,
      oldPrice: null,
      category: "footwear",
      colors: ["#FFFFFF", "#000000", "#8B4513"],
      sizes: ["39", "40", "41", "42", "43", "44"],
      images: [
        "images/sneakers1.jpg",
        "images/sneakers2.jpg",
        "images/sneakers3.jpg"
      ],
      desc: {
        en: "Premium leather sneakers with cushioned sole. Street-luxury hybrid for everyday comfort.",
        ru: "Премиальные кожаные кроссовки с амортизирующей подошвой. Гибрид street и luxury для повседневного комфорта.",
        ua: "Преміальні шкіряні кросівки з амортизуючою підошвою. Гібрид street та luxury для повсякденного комфорту."
      },
      badge: null
    }
  ],

  // ========== TRANSLATIONS ==========
  i18n: {
    en: {
      nav_home: "Home",
      nav_catalog: "Catalog",
      nav_about: "About",
      nav_contact: "Contact",
      nav_cart: "Cart",
      hero_title: "Luxury Redefined",
      hero_subtitle: "Discover exclusive branded collections. Timeless style meets modern elegance.",
      hero_btn: "Shop Now",
      featured: "Featured Collection",
      featured_sub: "Handpicked pieces for the discerning customer",
      categories: "Shop by Category",
      cat_outerwear: "Outerwear",
      cat_dresses: "Dresses",
      cat_accessories: "Accessories",
      cat_knitwear: "Knitwear",
      cat_shirts: "Shirts",
      cat_footwear: "Footwear",
      all: "All",
      sort_default: "Default",
      sort_price_asc: "Price: Low to High",
      sort_price_desc: "Price: High to Low",
      sort_name: "Name A-Z",
      search_placeholder: "Search products...",
      add_to_cart: "Add to Cart",
      view_details: "View Details",
      new: "New",
      sale: "Sale",
      size: "Size",
      color: "Color",
      quantity: "Quantity",
      description: "Description",
      cart_title: "Shopping Cart",
      cart_empty: "Your cart is empty",
      cart_empty_sub: "Looks like you haven't added anything yet.",
      continue_shopping: "Continue Shopping",
      product: "Product",
      price: "Price",
      qty: "Qty",
      total: "Total",
      subtotal: "Subtotal",
      shipping: "Shipping",
      free: "Free",
      checkout: "Proceed to Checkout",
      remove: "Remove",
      about_title: "About ZEBrand",
      about_p1: "Founded with a passion for excellence, ZEBrand curates the finest branded fashion from around the world. We believe that true luxury is about quality, craftsmanship and timeless design.",
      about_p2: "Every piece in our collection is carefully selected to meet the highest standards. From Italian leather to Swiss watches — only the best makes it to ZEBrand.",
      about_p3: "Our mission is to make premium fashion accessible while preserving the exclusivity and authenticity of each brand we represent.",
      stats_clients: "Happy Clients",
      stats_brands: "Premium Brands",
      stats_countries: "Countries",
      contact_title: "Get in Touch",
      contact_sub: "We'd love to hear from you",
      contact_address: "Address",
      contact_phone: "Phone",
      contact_email: "Email",
      contact_hours: "Working Hours",
      form_name: "Your Name",
      form_email: "Your Email",
      form_subject: "Subject",
      form_message: "Message",
      form_send: "Send Message",
      form_success: "Thank you! Your message has been sent.",
      footer_desc: "Premium branded fashion for those who appreciate true quality and style.",
      footer_shop: "Shop",
      footer_company: "Company",
      footer_support: "Support",
      footer_rights: "© 2026 ZEBrand. All rights reserved.",
      toast_added: "Added to cart!",
      toast_removed: "Removed from cart",
      load_more: "Load More",
      no_results: "No products found"
    },
    ru: {
      nav_home: "Главная",
      nav_catalog: "Каталог",
      nav_about: "О нас",
      nav_contact: "Контакты",
      nav_cart: "Корзина",
      hero_title: "Роскошь Переосмыслена",
      hero_subtitle: "Откройте эксклюзивные брендовые коллекции. Вечный стиль встречается с современной элегантностью.",
      hero_btn: "Смотреть",
      featured: "Избранная коллекция",
      featured_sub: "Тщательно отобранные вещи для требовательных клиентов",
      categories: "Категории",
      cat_outerwear: "Верхняя одежда",
      cat_dresses: "Платья",
      cat_accessories: "Аксессуары",
      cat_knitwear: "Трикотаж",
      cat_shirts: "Рубашки",
      cat_footwear: "Обувь",
      all: "Все",
      sort_default: "По умолчанию",
      sort_price_asc: "Цена: по возрастанию",
      sort_price_desc: "Цена: по убыванию",
      sort_name: "Название А-Я",
      search_placeholder: "Поиск товаров...",
      add_to_cart: "В корзину",
      view_details: "Подробнее",
      new: "Новинка",
      sale: "Скидка",
      size: "Размер",
      color: "Цвет",
      quantity: "Количество",
      description: "Описание",
      cart_title: "Корзина",
      cart_empty: "Ваша корзина пуста",
      cart_empty_sub: "Похоже, вы ещё ничего не добавили.",
      continue_shopping: "Продолжить покупки",
      product: "Товар",
      price: "Цена",
      qty: "Кол-во",
      total: "Итого",
      subtotal: "Подытог",
      shipping: "Доставка",
      free: "Бесплатно",
      checkout: "Оформить заказ",
      remove: "Удалить",
      about_title: "О ZEBrand",
      about_p1: "Основанный с страстью к совершенству, ZEBrand собирает лучшую брендовую моду со всего мира. Мы верим, что настоящая роскошь — это качество, мастерство и вечный дизайн.",
      about_p2: "Каждая вещь в нашей коллекции тщательно отобрана по самым высоким стандартам. От итальянской кожи до швейцарских часов — только лучшее попадает в ZEBrand.",
      about_p3: "Наша миссия — сделать премиальную моду доступной, сохраняя эксклюзивность и подлинность каждого бренда, который мы представляем.",
      stats_clients: "Довольных клиентов",
      stats_brands: "Премиум брендов",
      stats_countries: "Стран",
      contact_title: "Связаться с нами",
      contact_sub: "Мы будем рады услышать вас",
      contact_address: "Адрес",
      contact_phone: "Телефон",
      contact_email: "Email",
      contact_hours: "Часы работы",
      form_name: "Ваше имя",
      form_email: "Ваш Email",
      form_subject: "Тема",
      form_message: "Сообщение",
      form_send: "Отправить",
      form_success: "Спасибо! Ваше сообщение отправлено.",
      footer_desc: "Премиальная брендовая мода для тех, кто ценит настоящее качество и стиль.",
      footer_shop: "Магазин",
      footer_company: "Компания",
      footer_support: "Поддержка",
      footer_rights: "© 2026 ZEBrand. Все права защищены.",
      toast_added: "Добавлено в корзину!",
      toast_removed: "Удалено из корзины",
      load_more: "Загрузить ещё",
      no_results: "Товары не найдены"
    },
    ua: {
      nav_home: "Головна",
      nav_catalog: "Каталог",
      nav_about: "Про нас",
      nav_contact: "Контакти",
      nav_cart: "Кошик",
      hero_title: "Розкіш Переосмислена",
      hero_subtitle: "Відкрийте ексклюзивні брендові колекції. Вічний стиль зустрічається з сучасною елегантністю.",
      hero_btn: "Дивитись",
      featured: "Обрана колекція",
      featured_sub: "Ретельно відібрані речі для вимогливих клієнтів",
      categories: "Категорії",
      cat_outerwear: "Верхній одяг",
      cat_dresses: "Сукні",
      cat_accessories: "Аксесуари",
      cat_knitwear: "Трикотаж",
      cat_shirts: "Сорочки",
      cat_footwear: "Взуття",
      all: "Всі",
      sort_default: "За замовчуванням",
      sort_price_asc: "Ціна: від низької",
      sort_price_desc: "Ціна: від високої",
      sort_name: "Назва А-Я",
      search_placeholder: "Пошук товарів...",
      add_to_cart: "До кошика",
      view_details: "Детальніше",
      new: "Новинка",
      sale: "Знижка",
      size: "Розмір",
      color: "Колір",
      quantity: "Кількість",
      description: "Опис",
      cart_title: "Кошик",
      cart_empty: "Ваш кошик порожній",
      cart_empty_sub: "Схоже, ви ще нічого не додали.",
      continue_shopping: "Продовжити покупки",
      product: "Товар",
      price: "Ціна",
      qty: "К-сть",
      total: "Разом",
      subtotal: "Підсумок",
      shipping: "Доставка",
      free: "Безкоштовно",
      checkout: "Оформити замовлення",
      remove: "Видалити",
      about_title: "Про ZEBrand",
      about_p1: "Заснований зі пристрастю до досконалості, ZEBrand збирає найкращу брендову моду з усього світу. Ми віримо, що справжня розкіш — це якість, майстерність та вічний дизайн.",
      about_p2: "Кожна річ у нашій колекції ретельно відібрана за найвищими стандартами. Від італійської шкіри до швейцарських годинників — тільки найкраще потрапляє до ZEBrand.",
      about_p3: "Наша місія — зробити преміальну моду доступною, зберігаючи ексклюзивність та автентичність кожного бренду, який ми представляємо.",
      stats_clients: "Задоволених клієнтів",
      stats_brands: "Преміум брендів",
      stats_countries: "Країн",
      contact_title: "Зв'язатися з нами",
      contact_sub: "Ми будемо раді почути вас",
      contact_address: "Адреса",
      contact_phone: "Телефон",
      contact_email: "Email",
      contact_hours: "Години роботи",
      form_name: "Ваше ім'я",
      form_email: "Ваш Email",
      form_subject: "Тема",
      form_message: "Повідомлення",
      form_send: "Надіслати",
      form_success: "Дякуємо! Ваше повідомлення надіслано.",
      footer_desc: "Преміальна брендова мода для тих, хто цінує справжню якість та стиль.",
      footer_shop: "Магазин",
      footer_company: "Компанія",
      footer_support: "Підтримка",
      footer_rights: "© 2026 ZEBrand. Усі права захищено.",
      toast_added: "Додано до кошика!",
      toast_removed: "Видалено з кошика",
      load_more: "Завантажити ще",
      no_results: "Товари не знайдено"
    }
  },

  // ========== STATE ==========
  lang: localStorage.getItem('zeb_lang') || 'ru',
  cart: JSON.parse(localStorage.getItem('zeb_cart') || '[]'),
  currentFilter: 'all',
  currentSort: 'default',
  searchQuery: '',

  // ========== INIT ==========
  init() {
    this.applyLang();
    this.updateCartUI();
    this.bindEvents();
    this.renderPageContent();
  },

  // ========== i18n ==========
  t(key) {
    return this.i18n[this.lang][key] || key;
  },

  setLang(lang) {
    this.lang = lang;
    localStorage.setItem('zeb_lang', lang);
    this.applyLang();
    this.renderPageContent();
  },

  applyLang() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = this.t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.placeholder = this.t(key);
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === this.lang);
    });
    document.documentElement.lang = this.lang;
  },

  // ========== CART ==========
  addToCart(productId, size = null, color = null, qty = 1) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;

    const existing = this.cart.find(item =>
      item.id === productId && item.size === size && item.color === color
    );

    if (existing) {
      existing.qty += qty;
    } else {
      this.cart.push({
        id: productId,
        size,
        color,
        qty,
        price: product.price,
        name: product.name,
        brand: product.brand,
        image: product.images[0]
      });
    }

    this.saveCart();
    this.updateCartUI();
    this.showToast(this.t('toast_added'));
  },

  removeFromCart(index) {
    this.cart.splice(index, 1);
    this.saveCart();
    this.updateCartUI();
    this.renderCartPage();
    this.showToast(this.t('toast_removed'));
  },

  updateQty(index, delta) {
    this.cart[index].qty = Math.max(1, this.cart[index].qty + delta);
    this.saveCart();
    this.updateCartUI();
    this.renderCartPage();
  },

  saveCart() {
    localStorage.setItem('zeb_cart', JSON.stringify(this.cart));
  },

  getCartTotal() {
    return this.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  },

  updateCartUI() {
    const count = this.cart.reduce((s, i) => s + i.qty, 0);
    document.querySelectorAll('.cart-count').forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
  },

  // ========== RENDER ==========
  renderPageContent() {
    const path = window.location.pathname.split('/').pop() || 'index.html';

    if (path === 'index.html' || path === '' || path === 'zebrand') {
      this.renderFeatured();
      this.renderCategories();
    }
    if (path === 'catalog.html') {
      this.renderCatalog();
    }
    if (path === 'product.html') {
      this.renderProductDetail();
    }
    if (path === 'cart.html') {
      this.renderCartPage();
    }
  },

  createProductCard(p) {
    const name = p.name[this.lang] || p.name.en;
    const badge = p.badge ? `<span class="product-badge">${this.t(p.badge)}</span>` : '';
    const oldPrice = p.oldPrice ? `<span class="price-old">$${p.oldPrice}</span>` : '';

    return `
      <div class="product-card fade-in" data-id="${p.id}">
        <div class="product-img">
          <img src="${p.images[0]}" alt="${name}" loading="lazy">
          ${badge}
          <div class="product-actions">
            <button class="action-btn" onclick="ZEBrand.quickView(${p.id})" title="Quick view">👁</button>
            <button class="action-btn" onclick="ZEBrand.addToCart(${p.id})" title="Add to cart">🛒</button>
          </div>
        </div>
        <div class="product-info">
          <div class="product-brand">${p.brand}</div>
          <a href="product.html?id=${p.id}" class="product-name">${name}</a>
          <div class="product-price">
            <span class="price-current">$${p.price}</span>
            ${oldPrice}
          </div>
        </div>
      </div>
    `;
  },

  renderFeatured() {
    const container = document.getElementById('featured-products');
    if (!container) return;
    const featured = this.products.slice(0, 4);
    container.innerHTML = featured.map(p => this.createProductCard(p)).join('');
  },

  renderCategories() {
    const container = document.getElementById('categories-grid');
    if (!container) return;
    const cats = [
      { key: 'outerwear', img: 'images/cat-outerwear.jpg' },
      { key: 'dresses', img: 'images/cat-dresses.jpg' },
      { key: 'accessories', img: 'images/cat-accessories.jpg' },
      { key: 'footwear', img: 'images/cat-footwear.jpg' }
    ];
    container.innerHTML = cats.map(c => `
      <a href="catalog.html?cat=${c.key}" class="category-card">
        <img src="${c.img}" alt="${this.t('cat_' + c.key)}" loading="lazy">
        <div class="category-overlay">
          <h3>${this.t('cat_' + c.key)}</h3>
          <span>→</span>
        </div>
      </a>
    `).join('');
  },

  renderCatalog() {
    const container = document.getElementById('products-grid');
    if (!container) return;

    let filtered = [...this.products];

    // URL param category
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get('cat');
    if (catParam) {
      this.currentFilter = catParam;
      document.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.filter === catParam);
      });
    }

    if (this.currentFilter !== 'all') {
      filtered = filtered.filter(p => p.category === this.currentFilter);
    }

    if (this.searchQuery) {
      const q = this.searchQuery.toLowerCase();
      filtered = filtered.filter(p =>
        (p.name[this.lang] || p.name.en).toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q)
      );
    }

    if (this.currentSort === 'price_asc') filtered.sort((a, b) => a.price - b.price);
    else if (this.currentSort === 'price_desc') filtered.sort((a, b) => b.price - a.price);
    else if (this.currentSort === 'name') filtered.sort((a, b) =>
      (a.name[this.lang] || a.name.en).localeCompare(b.name[this.lang] || b.name.en)
    );

    if (filtered.length === 0) {
      container.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:3rem;">${this.t('no_results')}</p>`;
      return;
    }

    container.innerHTML = filtered.map(p => this.createProductCard(p)).join('');
  },

  renderProductDetail() {
    const container = document.getElementById('product-detail');
    if (!container) return;

    const id = parseInt(new URLSearchParams(window.location.search).get('id')) || 1;
    const p = this.products.find(pr => pr.id === id) || this.products[0];
    const name = p.name[this.lang] || p.name.en;
    const desc = p.desc[this.lang] || p.desc.en;

    let selectedSize = p.sizes[0];
    let selectedColor = p.colors[0];
    let qty = 1;

    container.innerHTML = `
      <div class="gallery">
        <div class="main-image">
          <img id="main-img" src="${p.images[0]}" alt="${name}">
        </div>
        <div class="thumbs">
          ${p.images.map((img, i) => `
            <div class="thumb ${i === 0 ? 'active' : ''}" onclick="ZEBrand.changeImage('${img}', this)">
              <img src="${img}" alt="">
            </div>
          `).join('')}
        </div>
      </div>
      <div class="product-details">
        <div class="product-brand" style="color:var(--accent);margin-bottom:0.5rem;">${p.brand}</div>
        <h1>${name}</h1>
        <div class="product-meta">
          <span>$${p.price}${p.oldPrice ? ` <s style="color:var(--text-muted)">$${p.oldPrice}</s>` : ''}</span>
        </div>
        <p class="product-desc">${desc}</p>
        
        <div class="size-selector">
          <h4 data-i18n="size">${this.t('size')}</h4>
          <div class="sizes">
            ${p.sizes.map(s => `
              <button class="size-btn ${s === selectedSize ? 'active' : ''}" data-size="${s}" onclick="ZEBrand.selectSize(this)">${s}</button>
            `).join('')}
          </div>
        </div>

        <div class="color-selector">
          <h4 data-i18n="color">${this.t('color')}</h4>
          <div class="colors">
            ${p.colors.map(c => `
              <button class="color-btn ${c === selectedColor ? 'active' : ''}" style="background:${c}" data-color="${c}" onclick="ZEBrand.selectColor(this)"></button>
            `).join('')}
          </div>
        </div>

        <div class="qty-selector">
          <h4 data-i18n="quantity" style="margin:0">${this.t('quantity')}</h4>
          <button class="qty-btn" onclick="ZEBrand.changeQty(-1)">−</button>
          <span class="qty-value" id="qty-val">1</span>
          <button class="qty-btn" onclick="ZEBrand.changeQty(1)">+</button>
        </div>

        <button class="btn add-to-cart" onclick="ZEBrand.addToCartFromDetail(${p.id})">
          ${this.t('add_to_cart')}
        </button>
      </div>
    `;

    // Store current selection
    this._detail = { size: selectedSize, color: selectedColor, qty: 1 };
  },

  changeImage(src, el) {
    document.getElementById('main-img').src = src;
    document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
  },

  selectSize(btn) {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    this._detail.size = btn.dataset.size;
  },

  selectColor(btn) {
    document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    this._detail.color = btn.dataset.color;
  },

  changeQty(delta) {
    this._detail.qty = Math.max(1, this._detail.qty + delta);
    document.getElementById('qty-val').textContent = this._detail.qty;
  },

  addToCartFromDetail(id) {
    this.addToCart(id, this._detail.size, this._detail.color, this._detail.qty);
  },

  renderCartPage() {
    const container = document.getElementById('cart-content');
    if (!container) return;

    if (this.cart.length === 0) {
      container.innerHTML = `
        <div class="empty-cart">
          <h2 data-i18n="cart_empty">${this.t('cart_empty')}</h2>
          <p data-i18n="cart_empty_sub">${this.t('cart_empty_sub')}</p>
          <a href="catalog.html" class="btn" style="margin-top:1.5rem" data-i18n="continue_shopping">${this.t('continue_shopping')}</a>
        </div>
      `;
      return;
    }

    const rows = this.cart.map((item, i) => {
      const name = item.name[this.lang] || item.name.en;
      return `
        <tr>
          <td>
            <div class="cart-item">
              <img src="${item.image}" alt="${name}">
              <div class="cart-item-info">
                <h4>${name}</h4>
                <span>${item.brand}${item.size ? ' · ' + item.size : ''}${item.color ? ' · ' + item.color : ''}</span>
              </div>
            </div>
          </td>
          <td>$${item.price}</td>
          <td>
            <div style="display:flex;align-items:center;gap:8px">
              <button class="qty-btn" style="width:32px;height:32px" onclick="ZEBrand.updateQty(${i}, -1)">−</button>
              <span>${item.qty}</span>
              <button class="qty-btn" style="width:32px;height:32px" onclick="ZEBrand.updateQty(${i}, 1)">+</button>
            </div>
          </td>
          <td>$${(item.price * item.qty).toFixed(0)}</td>
          <td>
            <button class="action-btn" style="background:transparent;color:var(--danger)" onclick="ZEBrand.removeFromCart(${i})">✕</button>
          </td>
        </tr>
      `;
    }).join('');

    const total = this.getCartTotal();

    container.innerHTML = `
      <table class="cart-table">
        <thead>
          <tr>
            <th data-i18n="product">${this.t('product')}</th>
            <th data-i18n="price">${this.t('price')}</th>
            <th data-i18n="qty">${this.t('qty')}</th>
            <th data-i18n="total">${this.t('total')}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
      <div class="cart-summary">
        <h3 data-i18n="total">${this.t('total')}</h3>
        <div class="summary-row">
          <span data-i18n="subtotal">${this.t('subtotal')}</span>
          <span>$${total}</span>
        </div>
        <div class="summary-row">
          <span data-i18n="shipping">${this.t('shipping')}</span>
          <span data-i18n="free">${this.t('free')}</span>
        </div>
        <div class="summary-row total">
          <span data-i18n="total">${this.t('total')}</span>
          <span>$${total}</span>
        </div>
        <button class="btn" style="width:100%;margin-top:1.5rem" data-i18n="checkout">${this.t('checkout')}</button>
      </div>
    `;
  },

  // ========== EVENTS ==========
  bindEvents() {
    // Language
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => this.setLang(btn.dataset.lang));
    });

    // Mobile menu
    const toggle = document.querySelector('.menu-toggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        document.querySelector('.nav').classList.toggle('mobile-open');
      });
    }

    // Filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentFilter = btn.dataset.filter;
        this.renderCatalog();
      });
    });

    // Sort
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        this.currentSort = e.target.value;
        this.renderCatalog();
      });
    }

    // Search
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value;
        this.renderCatalog();
      });
    }

    // Contact form
    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.showToast(this.t('form_success'));
        form.reset();
      });
    }
  },

  quickView(id) {
    // Simple: redirect to product
    window.location.href = `product.html?id=${id}`;
  },

  showToast(msg) {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `✓ ${msg}`;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
  }
};

// Boot
document.addEventListener('DOMContentLoaded', () => ZEBrand.init());
