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
    href: "sm-101.html",
    img: "assets/img/products/sm-101/sm-101-sofa-maintainer-foam-brush-and-hose.jpg",
    alt: "SM-101 small sofa maintainer with foam brush head, rotary brush and hose",
    model: "SM-101",
    name: "Small Sofa Maintainer",
    group: "eq",
    cat: "sofa-maintainer",
    parent: "sofa-maintainer"
  },
  {
    href: "sm-102.html",
    img: "assets/img/products/sm-102/sm-102-large-sofa-maintainer-foam-clean-and-dry.jpg",
    alt: "SM-102 large sofa maintainer with hose, brush and dual water tanks",
    model: "SM-102",
    name: "Large Sofa Maintainer",
    group: "eq",
    cat: "sofa-maintainer",
    parent: "sofa-maintainer"
  },
  {
    href: "sm-103.html",
    img: "assets/img/products/sm-103/sm-103-sofa-maintainer-foam-clean-and-dry.jpg",
    alt: "SM-103 commercial sofa maintainer on white background with extraction hose and wand",
    model: "SM-103",
    name: "Commercial Sofa Maintainer",
    group: "eq",
    cat: "sofa-maintainer",
    parent: "sofa-maintainer"
  },

  {
    href: "cm-101.html",
    img: "assets/img/products/cm-101/cm-101-carpet-washer-stainless-steel-tank.jpg",
    alt: "CM-101 carpet washer with stainless steel tank",
    model: "CM-101",
    name: "Carpet Washer",
    group: "eq",
    cat: "carpet-machine",
    parent: "carpet-machine"
  },
  {
    href: "cm-102.html",
    img: "assets/img/products/cm-102/cm-102-carpet-washer-stainless-steel-tank.jpg",
    alt: "CM-102 60L carpet washer with stainless steel tank",
    model: "CM-102",
    name: "60L Carpet Washer",
    group: "eq",
    cat: "carpet-machine",
    parent: "carpet-machine"
  },
  {
    href: "cm-103.html",
    img: "assets/img/products/cm-103/cm-103-carpet-washer-plastic-tank.jpg",
    alt: "CM-103 60L carpet washer with plastic tank body",
    model: "CM-103",
    name: "60L Carpet Washer (Plastic Tank)",
    group: "eq",
    cat: "carpet-machine",
    parent: "carpet-machine"
  },
  {
    href: "cm-104.html",
    img: "assets/img/products/cm-104/cm-104-carpet-washer-main-unit.jpg",
    alt: "CM-104 3-in-1 carpet washer with roller brush and dual suction motors",
    model: "CM-104",
    name: "3-in-1 Carpet Washer",
    group: "eq",
    cat: "carpet-machine",
    parent: "carpet-machine"
  },
  {
    href: "cn-101.html",
    img: "assets/img/products/cn-101/cn101-01.jpg",
    alt: "CN-101 small shape A caution board, PLEASE KEEP CLEAR",
    model: "CN-101",
    name: "Small Shape of A Caution Board",
    group: "pl",
    cat: "new-shape-caution-board",
    parent: "caution-board"
  },
  {
    href: "cn-102.html",
    img: "assets/img/products/cn-102/cn102-01.jpg",
    alt: "CN-102 large shape A caution board, NO PARKING",
    model: "CN-102",
    name: "Large Shape of A Caution Board",
    group: "pl",
    cat: "new-shape-caution-board",
    parent: "caution-board"
  },
  {
    href: "cn-103.html",
    img: "assets/img/products/cn-103/cn103-01.jpg",
    alt: "CN-103 The Shape of A caution board, NO PARKING",
    model: "CN-103",
    name: "The Shape of A Caution Board",
    group: "pl",
    cat: "new-shape-caution-board",
    parent: "caution-board"
  },
  {
    href: "cn-104.html",
    img: "assets/img/products/cn-104/cn104-01.jpg",
    alt: "CN-104 large upright caution board, Warning Ahead",
    model: "CN-104",
    name: "Large Upright Caution Board",
    group: "pl",
    cat: "upright-caution-board",
    parent: "caution-board"
  },
  {
    href: "cn-105.html",
    img: "assets/img/products/cn-105/cn105-01.jpg",
    alt: "CN-105 small upright caution board, NO SMOKING",
    model: "CN-105",
    name: "Small Upright Caution Board",
    group: "pl",
    cat: "upright-caution-board",
    parent: "caution-board"
  }
];
