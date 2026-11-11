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
    href: "bm-101a.html",
    img: "assets/img/products/bm-101a/bm-101a-1100w-154rpm-17-inch-multi-functional-brush-machine-white-background.jpg",
    alt: "BM-101A multi functional brush machine with red motor drum, white solution tank and 17 inch brush on white background",
    model: "BM-101A",
    name: "Multi functional Brush Machine",
    group: "eq",
    cat: "brush-machine",
    parent: "brush-machine"
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
  },
  {
    href: "bm-103.html",
    img: "assets/img/products/bm-103/bm-103-1100w-154rpm-17-inch-multi-functional-brush-machine-white-background.jpg",
    alt: "BM-103 multi functional brush machine with a yellow painted drum body, grey vented motor dome, white solution tank, grey loop handle with a yellow control panel, chrome tube and a 17 inch base plate with a yellow bumper ring, on white background",
    model: "BM-103",
    name: "Multi functional Brush Machine",
    group: "eq",
    cat: "brush-machine",
    parent: "brush-machine"
  },
  {
    href: "bm-104a.html",
    img: "assets/img/products/bm-104a/bm-104a-8l-multi-functional-brush-machine-white-background.jpg",
    alt: "BM-104A 8L multi functional brush machine with stainless steel motor body and aluminium base plate on white background",
    model: "BM-104A",
    name: "8L Multi functional Brush Machine",
    group: "eq",
    cat: "brush-machine",
    parent: "brush-machine"
  },
  {
    href: "bm-104b.html",
    img: "assets/img/products/bm-104b/bm-104b-8l-multi-functional-brush-machine-white-background.jpg",
    alt: "BM-104B 8L multi functional brush machine with a T-bar handle, stainless steel motor body and blue 17 inch brush deck on white background",
    model: "BM-104B",
    name: "8L Multi functional Brush Machine",
    group: "eq",
    cat: "brush-machine",
    parent: "brush-machine"
  },
  {
    href: "bm-104c.html",
    img: "assets/img/products/bm-104c/bm-104c-15l-multi-functional-brush-machine-white-background.jpg",
    alt: "BM-104C 15L multi functional brush machine with a 15 litre white tank, blue loop handle and stainless steel motor cover on white background",
    model: "BM-104C",
    name: "15L Multi functional Brush Machine",
    group: "eq",
    cat: "brush-machine",
    parent: "brush-machine"
  },
  {
    href: "bm-105.html",
    img: "assets/img/products/bm-105/bm-105-multi-functional-brush-machine-white-background.jpg",
    alt: "BM-105 multi functional brush machine with a white solution tank, Y-fork handle and green control panel, stainless steel motor cover and 18 inch brush deck, on white background",
    model: "BM-105",
    name: "Multi functional Brush Machine",
    group: "eq",
    cat: "brush-machine",
    parent: "brush-machine"
  },
  {
    href: "bm-106.html",
    img: "assets/img/products/bm-106/bm-106-8l-multi-functional-brush-machine-white-background.jpg",
    alt: "BM-106 8L multi functional brush machine with a white 8 litre solution tank, red T-bar handle, 13 inch brush deck and anti-collision strip, on white background",
    model: "BM-106",
    name: "8L Multi functional Brush Machine",
    group: "eq",
    cat: "brush-machine",
    parent: "brush-machine"
  },
  {
    href: "bm-107.html",
    img: "assets/img/products/bm-107/bm-107-high-speed-polisher-1800w-1500rpm-20-inch-white-background.jpg",
    alt: "BM-107 high speed floor polisher with a teal painted base, full-perimeter black rubber skirt, stainless steel motor cover with black ring and teal cap, aluminium handle with loop grips, control panel and two transport wheels, on white background",
    model: "BM-107",
    name: "High Speed Polisher",
    group: "eq",
    cat: "brush-machine",
    parent: "brush-machine"
  },
  {
    href: "bl-101.html",
    img: "assets/img/products/bl-101/bl-101-135w-3-speed-floor-blower-white-background.jpg",
    alt: "BL-101 135W 3-speed floor blower in blue with black control hood, digital panel and wide front outlet grille on white background",
    model: "BL-101",
    name: "135W 3-Speed Blower",
    group: "eq",
    cat: "blower",
    parent: "blower"
  },
  {
    href: "bl-102.html",
    img: "assets/img/products/bl-102/bl-102-200w-3-speed-floor-blower-white-background.jpg",
    alt: "BL-102 200W 3-speed floor blower in blue with a top carry handle, metal control panel, front outlet grille and guarded side intake on white background",
    model: "BL-102",
    name: "200W 3-Speed Blower",
    group: "eq",
    cat: "blower",
    parent: "blower"
  },
  {
    href: "bl-103.html",
    img: "assets/img/products/bl-103/bl-103-350w-3-speed-floor-blower-white-background.jpg",
    alt: "BL-103 350W 3-speed floor blower in blue with a top carry handle, front control panel with two rotary dials, wide outlet grille at the base and large guarded side intake, on white background",
    model: "BL-103",
    name: "350W 3-Speed Blower",
    group: "eq",
    cat: "blower",
    parent: "blower"
  }


];
