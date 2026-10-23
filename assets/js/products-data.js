/* ============================================================
 * Central product registry (single source of truth).
 * Add one record here and the product appears automatically on
 * the overview page (products.html) and its category list page.
 *
 * group  : first-level category slug
 *          eq = Cleaning Equipment
 *          pl = Plastic
 *          sc = Service Cart
 *          ct = Cleaning Tools
 *          mo = Mop
 *          hs = Hotel Supplies
 *
 * cat    : third-level slug, matched against sidebar data-filter
 * parent : second-level slug; set equal to cat when there is no
 *          third level under this second-level item.
 * ============================================================ */
window.FELI_PRODUCTS = [
  {
    href: "sd-101.html",
    img: "assets/img/products/sd-101/main.jpg",
    alt: "SD-101 ride-on scrubber dryer",
    model: "SD-101",
    name: "Ride-On Scrubber Dryer Machine",
    group: "eq",
    cat: "scrubber-dryer",
    parent: "scrubber-dryer"
  },
  {
    href: "sd-102.html",
    img: "assets/img/products/sd-102/main.jpg",
    alt: "SD-102 660mm auto/manual ride-on scrubber dryer",
    model: "SD-102",
    name: "660mm Auto/Manual Ride-On Scrubber Dryer",
    group: "eq",
    cat: "scrubber-dryer",
    parent: "scrubber-dryer"
  },
  {
    href: "cn-101.html",
    img: "assets/img/products/cn-101/scene.jpg",
    alt: "CN-101 small shape A caution board",
    model: "CN-101",
    name: "Small Shape of A Caution Board",
    group: "pl",
    cat: "new-shape-caution-board",
    parent: "caution-board"
  },
  {
    href: "cn-102.html",
    img: "assets/img/products/cn-102/scene.jpg",
    alt: "CN-102 large shape A caution board",
    model: "CN-102",
    name: "Large Shape of A Caution Board",
    group: "pl",
    cat: "new-shape-caution-board",
    parent: "caution-board"
  },
  {
    href: "cn-103.html",
    img: "assets/img/products/cn-103/scene.jpg",
    alt: "CN-103 The Shape of A caution board",
    model: "CN-103",
    name: "The Shape of A Caution Board",
    group: "pl",
    cat: "new-shape-caution-board",
    parent: "caution-board"
  },
  {
    href: "cn-104.html",
    img: "assets/img/products/cn-104/scene.jpg",
    alt: "CN-104 large upright caution board",
    model: "CN-104",
    name: "Large Upright Caution Board",
    group: "pl",
    cat: "upright-caution-board",
    parent: "caution-board"
  }
];
