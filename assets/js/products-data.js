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
    href: "vm-101.html",
    img: "assets/img/products/vm-101/vm-101-backpack-vacuum-cleaner-main-unit.jpg",
    alt: "VM-101 backpack vacuum cleaner with 1000W motor and 3L dust container",
    model: "VM-101",
    name: "3L Backpack Vacuum Cleaner Silent Type",
    group: "eq",
    cat: "vacuum-cleaner",
    parent: "vacuum-cleaner"
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
,
  {
    href: "vm-102.html",
    img: "assets/img/products/vm-102/vm-102-5l-backpack-vacuum-cleaner-main-unit.jpg",
    alt: "VM-102 5L backpack vacuum cleaner in blue and black on white background",
    model: "VM-102",
    name: "5L Backpack Vacuum Cleaner",
    group: "eq",
    cat: "vacuum-cleaner",
    parent: "vacuum-cleaner"
  },
  {
    href: "vm-103.html",
    img: "assets/img/products/vm-103/vm-103-4.5l-upright-vacuum-cleaner-main-unit.jpg",
    alt: "VM-103 4.5L upright vacuum cleaner in grey and black on white background",
    model: "VM-103",
    name: "4.5L Upright Vacuum Cleaner",
    group: "eq",
    cat: "vacuum-cleaner",
    parent: "vacuum-cleaner"
  },

  {
    href: "vm-104.html",
    img: "assets/img/products/vm-104/vm-104-30l-wet-and-dry-vacuum-cleaner-main-unit.jpg",
    alt: "VM-104 30L wet and dry vacuum cleaner in green on white background",
    model: "VM-104",
    name: "30L Wet and Dry Vacuum Cleaner",
    group: "eq",
    cat: "vacuum-cleaner",
    parent: "vacuum-cleaner"
  },

  {
    href: "vm-105.html",
    img: "assets/img/products/vm-105/vm-105-15l-stainless-steel-wet-and-dry-vacuum-cleaner-main-unit.jpg",
    alt: "VM-105 15L stainless steel wet and dry vacuum cleaner on white background",
    model: "VM-105",
    name: "15L Wet and Dry Vacuum Cleaner with Stainless Steel",
    group: "eq",
    cat: "vacuum-cleaner",
    parent: "vacuum-cleaner"
  },

  {
    href: "vm-106.html",
    img: "assets/img/products/vm-106/vm-106-30l-stainless-steel-wet-and-dry-vacuum-cleaner-main-unit.jpg",
    alt: "VM-106 30L stainless steel wet and dry vacuum cleaner on white background",
    model: "VM-106",
    name: "30L Wet and Dry Vacuum Cleaner with Stainless Steel",
    group: "eq",
    cat: "vacuum-cleaner",
    parent: "vacuum-cleaner"
  },

  {
    href: "vm-108.html",
    img: "assets/img/products/vm-108/vm-108-80l-wet-and-dry-vacuum-cleaner-main-unit.jpg",
    alt: "VM-108 80L three motor wet and dry vacuum cleaner with stainless steel tank on white background",
    model: "VM-108",
    name: "80L 3 Motor Wet and Dry Vacuum Cleaner with Stainless Steel",
    group: "eq",
    cat: "vacuum-cleaner",
    parent: "vacuum-cleaner"
  },

  {
    href: "vm-109.html",
    img: "assets/img/products/vm-109/vm-109-90l-wet-and-dry-vacuum-cleaner-main-unit.jpg",
    alt: "VM-109 90L three motor wet and dry vacuum cleaner with plastic tank on white background",
    model: "VM-109",
    name: "90L 3 Motors Wet and Dry Vacuum Cleaner with Plastic Tank",
    group: "eq",
    cat: "vacuum-cleaner",
    parent: "vacuum-cleaner"
  },

  {
    href: "vm-110.html",
    img: "assets/img/products/vm-110/vm-110-ultra-quiet-dry-vacuum-cleaner-main-unit-green.jpg",
    alt: "VM-110 ultra quiet 10L dry vacuum cleaner with stainless steel barrel on white background",
    model: "VM-110",
    name: "10L Ultra-quiet Dry Vacuum Cleaner",
    group: "eq",
    cat: "vacuum-cleaner",
    parent: "vacuum-cleaner"
  },
  {
    href: "bm-101b.html",
    img: "assets/img/products/bm-101b/bm-101b-multi-functional-brush-machine-main.jpg",
    alt: "BM-101B multi functional brush machine with 8L water tank and 17 inch brush on white background",
    model: "BM-101B",
    name: "8L Multi functional Brush Machine",
    group: "eq",
    cat: "brush-machine",
    parent: "brush-machine"
  },

  {
    href: "bm-101c.html",
    img: "assets/img/products/bm-101c/bm-101c-15l-multi-functional-brush-machine-white-background.jpg",
    alt: "BM-101C 15L multi functional brush machine with white 15 litre water tank, red motor head and 17 inch brush on white background",
    model: "BM-101C",
    name: "15L Multi functional Brush Machine",
    group: "eq",
    cat: "brush-machine",
    parent: "brush-machine"
  },

  {
    href: "bm-102a.html",
    img: "assets/img/products/bm-102a/bm-102a-15l-multi-functional-brush-machine-white-background.jpg",
    alt: "BM-102A 15L multi functional brush machine with white 15 litre water tank, yellow and black motor head and 17 inch plastic base plate",
    model: "BM-102A",
    name: "15L Multi functional Brush Machine",
    group: "eq",
    cat: "brush-machine",
    parent: "brush-machine"
  },

  {
    href: "bm-102b.html",
    img: "assets/img/products/bm-102b/bm-102b-12l-multi-functional-brush-machine-white-background.jpg",
    alt: "BM-102B 12L multi functional brush machine with a white 12 litre water tank, yellow and black motor head and 17 inch plastic base plate",
    model: "BM-102B",
    name: "12L Multi functional Brush Machine",
    group: "eq",
    cat: "brush-machine",
    parent: "brush-machine"
  },
  {
    href: "bm-102c.html",
    img: "assets/img/products/bm-102c/bm-102c-15l-multi-functional-brush-machine-white-background.jpg",
    alt: "BM-102C 15L multi functional brush machine with a white 15 litre water tank, yellow and black motor head and 17 inch yellow plastic base plate",
    model: "BM-102C",
    name: "15L Multi functional Brush Machine",
    group: "eq",
    cat: "brush-machine",
    parent: "brush-machine"
  }

];
