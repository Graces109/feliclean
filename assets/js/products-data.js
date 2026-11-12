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
    href: "msd-101.html",
    img: "assets/img/products/msd-101/main.jpg",
    alt: "MSD-101 ride-on scrubber dryer",
    model: "MSD-101",
    name: "Ride-On Scrubber Dryer Machine",
    group: "eq",
    cat: "scrubber-dryer",
    parent: "scrubber-dryer"
  },
  {
    href: "msd-102.html",
    img: "assets/img/products/msd-102/msd-102-860mm-ride-on-scrubber-dryer-white-background.jpg",
    alt: "860mm automatic ride-on scrubber dryer MSD-102 for warehouse and factory floor cleaning, white and red body with twin disc brushes",
    model: "MSD-102",
    name: "860mm Automatic Ride-On Scrubber Dryer",
    group: "eq",
    cat: "scrubber-dryer",
    parent: "scrubber-dryer"
  },
  {
    href: "msd-103.html",
    img: "assets/img/products/msd-103/msd-103-1060mm-ride-on-scrubber-dryer-white-background.jpg",
    alt: "MSD-103 1060mm automatic ride-on scrubber dryer with grey body, red top cover and amber beacon",
    model: "MSD-103",
    name: "1060mm Automatic Ride-On Scrubber Dryer",
    group: "eq",
    cat: "scrubber-dryer",
    parent: "scrubber-dryer"
  },
  {
    href: "msd-104.html",
    img: "assets/img/products/msd-104/msd-104-600mm-ride-on-scrubber-dryer-white-background.jpg",
    alt: "MSD-104 600mm manual ride-on scrubber dryer with white body, red top cover and one 22 inch disc brush",
    model: "MSD-104",
    name: "600mm Manual Ride-On Scrubber Dryer",
    group: "eq",
    cat: "scrubber-dryer",
    parent: "scrubber-dryer"
  },
  {
    href: "msd-105.html",
    img: "assets/img/products/msd-105/msd-105-660mm-auto-manual-ride-on-scrubber-dryer-white-background.jpg",
    alt: "MSD-105 660mm auto/manual ride-on scrubber dryer with white body, red top cover and twin 13 inch disc brushes",
    model: "MSD-105",
    name: "660mm Twin-Disc Auto/Manual Ride-On Scrubber",
    group: "eq",
    cat: "scrubber-dryer",
    parent: "scrubber-dryer"
  },
  {
    href: "msd-106.html",
    img: "assets/img/products/msd-106/msd-106-860mm-ride-on-scrubber-dryer-white-background.jpg",
    alt: "MSD-106 860mm ride-on scrubber dryer with white and red body, black seat and twin 16 inch disc brushes",
    model: "MSD-106",
    name: "860mm Twin-Disc Ride-On Scrubber Dryer",
    group: "eq",
    cat: "scrubber-dryer",
    parent: "scrubber-dryer"
  },
  {
    href: "msd-107.html",
    img: "assets/img/products/msd-107/msd-107-530mm-manual-scrubber-dryer-white-background.jpg",
    alt: "MSD-107 530mm manual walk-behind scrubber dryer with grey and red body, one 20 inch disc brush and a red squeegee",
    model: "MSD-107",
    name: "530mm Manual Walk-Behind Scrubber Dryer",
    group: "eq",
    cat: "scrubber-dryer",
    parent: "scrubber-dryer"
  },
  {
    href: "msw-101.html",
    img: "assets/img/products/msw-101/msw-101-1050mm-manual-sweeper-white-background.jpg",
    alt: "MSW-101 1050mm manual sweeper with grey and black body, black push handle and two rotary side brushes",
    model: "MSW-101",
    name: "1050mm Manual Sweeper",
    group: "eq",
    cat: "sweeping-machine",
    parent: "sweeping-machine"
  },
  {
    href: "msw-102.html",
    img: "assets/img/products/msw-102/msw-102-450mm-escalator-cleaner-white-background.jpg",
    alt: "MSW-102 450mm hand-push escalator cleaner with a beige canvas guard, green top cover, grey front hood and two rear wheels",
    model: "MSW-102",
    name: "450mm Escalator Cleaner",
    group: "eq",
    cat: "sweeping-machine",
    parent: "sweeping-machine"
  },
  {
    href: "msw-103.html",
    img: "assets/img/products/msw-103/msw-103-electric-driving-dust-push-cart-white-background.jpg",
    alt: "MSW-103 electric driving dust push cart in red with rear-view mirrors, a ride-on seat and backrest, front mesh basket, 8-inch solid tyres and two blue dust mops on front and rear linkages",
    model: "MSW-103",
    name: "Electric Driving Dust Push Cart",
    group: "eq",
    cat: "sweeping-machine",
    parent: "sweeping-machine"
  },
  {
    href: "msw-104.html",
    img: "assets/img/products/msw-104/msw-104-high-pressure-car-wash-machine-white-background.jpg",
    alt: "MSW-104 high pressure car wash machine, a four-wheel trolley pressure washer in red and black with a brass pump head and a 10 m hose, on a clean white background",
    model: "MSW-104",
    name: "High Pressure Car Wash Machine",
    group: "eq",
    cat: "sweeping-machine",
    parent: "sweeping-machine"
  },
  {
    href: "msw-105.html",
    img: "assets/img/products/msw-105/msw-105-20-meters-high-pressure-car-wash-machine-white-background.jpg",
    alt: "MSW-105 20 meters high pressure car wash machine, a four-wheel trolley pressure washer in red and black with a red hose reel on top holding a 20 m hose and a brass pump head, on a clean white background",
    model: "MSW-105",
    name: "20 Meters High Pressure Car Wash Machine",
    group: "eq",
    cat: "sweeping-machine",
    parent: "sweeping-machine"
  },
  {
    href: "msw-106.html",
    img: "assets/img/products/msw-106/msw-106-driving-type-sweeping-machine-white-background.jpg",
    alt: "MSW-106 driving type sweeping machine in blue and black with a canopy, steering wheel, operator seat, two black edge brushes and solid tyres, on a clean white background",
    model: "MSW-106",
    name: "Driving Type Sweeping Machine",
    group: "eq",
    cat: "sweeping-machine",
    parent: "sweeping-machine"
  },
  {
    href: "msw-107.html",
    img: "assets/img/products/msw-107/msw-107-driving-type-sweeping-machine-white-background.jpg",
    alt: "MSW-107 driving type sweeping machine in blue and black with a blue canopy, steering wheel, operator seat, rear-view mirror, red chassis skirt, four black rotary edge brushes and solid tyres, on a clean white background",
    model: "MSW-107",
    name: "Driving Type Sweeping Machine",
    group: "eq",
    cat: "sweeping-machine",
    parent: "sweeping-machine"
  },
  {
    href: "mso-101.html",
    img: "assets/img/products/mso-101/mso-101-sofa-maintainer-foam-brush-and-hose.jpg",
    alt: "MSO-101 small sofa maintainer with foam brush head, rotary brush and hose",
    model: "MSO-101",
    name: "Small Sofa Maintainer",
    group: "eq",
    cat: "sofa-maintainer",
    parent: "sofa-maintainer"
  },
  {
    href: "mso-102.html",
    img: "assets/img/products/mso-102/mso-102-large-sofa-maintainer-foam-clean-and-dry.jpg",
    alt: "MSO-102 large sofa maintainer with hose, brush and dual water tanks",
    model: "MSO-102",
    name: "Large Sofa Maintainer",
    group: "eq",
    cat: "sofa-maintainer",
    parent: "sofa-maintainer"
  },
  {
    href: "mso-103.html",
    img: "assets/img/products/mso-103/mso-103-sofa-maintainer-foam-clean-and-dry.jpg",
    alt: "MSO-103 commercial sofa maintainer on white background with extraction hose and wand",
    model: "MSO-103",
    name: "Commercial Sofa Maintainer",
    group: "eq",
    cat: "sofa-maintainer",
    parent: "sofa-maintainer"
  },

  {
    href: "mca-101.html",
    img: "assets/img/products/mca-101/mca-101-carpet-washer-stainless-steel-tank.jpg",
    alt: "MCA-101 carpet washer with stainless steel tank",
    model: "MCA-101",
    name: "Carpet Washer",
    group: "eq",
    cat: "carpet-machine",
    parent: "carpet-machine"
  },
  {
    href: "mca-102.html",
    img: "assets/img/products/mca-102/mca-102-carpet-washer-stainless-steel-tank.jpg",
    alt: "MCA-102 60L carpet washer with stainless steel tank",
    model: "MCA-102",
    name: "60L Carpet Washer",
    group: "eq",
    cat: "carpet-machine",
    parent: "carpet-machine"
  },
  {
    href: "mca-103.html",
    img: "assets/img/products/mca-103/mca-103-carpet-washer-plastic-tank.jpg",
    alt: "MCA-103 60L carpet washer with plastic tank body",
    model: "MCA-103",
    name: "60L Carpet Washer (Plastic Tank)",
    group: "eq",
    cat: "carpet-machine",
    parent: "carpet-machine"
  },
  {
    href: "mca-104.html",
    img: "assets/img/products/mca-104/mca-104-carpet-washer-main-unit.jpg",
    alt: "MCA-104 3-in-1 carpet washer with roller brush and dual suction motors",
    model: "MCA-104",
    name: "3-in-1 Carpet Washer",
    group: "eq",
    cat: "carpet-machine",
    parent: "carpet-machine"
  },
  {
    href: "mva-101.html",
    img: "assets/img/products/mva-101/mva-101-backpack-vacuum-cleaner-main-unit.jpg",
    alt: "MVA-101 backpack vacuum cleaner with 1000W motor and 3L dust container",
    model: "MVA-101",
    name: "3L Backpack Vacuum Cleaner Silent Type",
    group: "eq",
    cat: "vacuum-cleaner",
    parent: "vacuum-cleaner"
  },
  {
    href: "pca-101.html",
    img: "assets/img/products/pca-101/pca101-01.jpg",
    alt: "PCA-101 small shape A caution board, PLEASE KEEP CLEAR",
    model: "PCA-101",
    name: "Small Shape of A Caution Board",
    group: "pl",
    cat: "caution-board",
    parent: "caution-board"
  },
  {
    href: "pca-102.html",
    img: "assets/img/products/pca-102/pca102-01.jpg",
    alt: "PCA-102 large shape A caution board, NO PARKING",
    model: "PCA-102",
    name: "Large Shape of A Caution Board",
    group: "pl",
    cat: "caution-board",
    parent: "caution-board"
  },
  {
    href: "pca-103.html",
    img: "assets/img/products/pca-103/pca103-01.jpg",
    alt: "PCA-103 The Shape of A caution board, NO PARKING",
    model: "PCA-103",
    name: "The Shape of A Caution Board",
    group: "pl",
    cat: "caution-board",
    parent: "caution-board"
  },
  {
    href: "pca-104.html",
    img: "assets/img/products/pca-104/pca104-01.jpg",
    alt: "PCA-104 large upright caution board, Warning Ahead",
    model: "PCA-104",
    name: "Large Upright Caution Board",
    group: "pl",
    cat: "caution-board",
    parent: "caution-board"
  },
  {
    href: "pca-105.html",
    img: "assets/img/products/pca-105/pca105-01.jpg",
    alt: "PCA-105 small upright caution board, NO SMOKING",
    model: "PCA-105",
    name: "Small Upright Caution Board",
    group: "pl",
    cat: "caution-board",
    parent: "caution-board"
  }
,
  {
    href: "mva-102.html",
    img: "assets/img/products/mva-102/mva-102-5l-backpack-vacuum-cleaner-main-unit.jpg",
    alt: "MVA-102 5L backpack vacuum cleaner in blue and black on white background",
    model: "MVA-102",
    name: "5L Backpack Vacuum Cleaner",
    group: "eq",
    cat: "vacuum-cleaner",
    parent: "vacuum-cleaner"
  },
  {
    href: "mva-103.html",
    img: "assets/img/products/mva-103/mva-103-4.5l-upright-vacuum-cleaner-main-unit.jpg",
    alt: "MVA-103 4.5L upright vacuum cleaner in grey and black on white background",
    model: "MVA-103",
    name: "4.5L Upright Vacuum Cleaner",
    group: "eq",
    cat: "vacuum-cleaner",
    parent: "vacuum-cleaner"
  },

  {
    href: "mva-104.html",
    img: "assets/img/products/mva-104/mva-104-30l-wet-and-dry-vacuum-cleaner-main-unit.jpg",
    alt: "MVA-104 30L wet and dry vacuum cleaner in green on white background",
    model: "MVA-104",
    name: "30L Wet and Dry Vacuum Cleaner",
    group: "eq",
    cat: "vacuum-cleaner",
    parent: "vacuum-cleaner"
  },

  {
    href: "mva-105.html",
    img: "assets/img/products/mva-105/mva-105-15l-stainless-steel-wet-and-dry-vacuum-cleaner-main-unit.jpg",
    alt: "MVA-105 15L stainless steel wet and dry vacuum cleaner on white background",
    model: "MVA-105",
    name: "15L Wet and Dry Vacuum Cleaner with Stainless Steel",
    group: "eq",
    cat: "vacuum-cleaner",
    parent: "vacuum-cleaner"
  },

  {
    href: "mva-106.html",
    img: "assets/img/products/mva-106/mva-106-30l-stainless-steel-wet-and-dry-vacuum-cleaner-main-unit.jpg",
    alt: "MVA-106 30L stainless steel wet and dry vacuum cleaner on white background",
    model: "MVA-106",
    name: "30L Wet and Dry Vacuum Cleaner with Stainless Steel",
    group: "eq",
    cat: "vacuum-cleaner",
    parent: "vacuum-cleaner"
  },

  {
    href: "mva-108.html",
    img: "assets/img/products/mva-108/mva-108-80l-wet-and-dry-vacuum-cleaner-main-unit.jpg",
    alt: "MVA-108 80L three motor wet and dry vacuum cleaner with stainless steel tank on white background",
    model: "MVA-108",
    name: "80L 3 Motor Wet and Dry Vacuum Cleaner with Stainless Steel",
    group: "eq",
    cat: "vacuum-cleaner",
    parent: "vacuum-cleaner"
  },

  {
    href: "mva-109.html",
    img: "assets/img/products/mva-109/mva-109-90l-wet-and-dry-vacuum-cleaner-main-unit.jpg",
    alt: "MVA-109 90L three motor wet and dry vacuum cleaner with plastic tank on white background",
    model: "MVA-109",
    name: "90L 3 Motors Wet and Dry Vacuum Cleaner with Plastic Tank",
    group: "eq",
    cat: "vacuum-cleaner",
    parent: "vacuum-cleaner"
  },

  {
    href: "mva-110.html",
    img: "assets/img/products/mva-110/mva-110-ultra-quiet-dry-vacuum-cleaner-main-unit-green.jpg",
    alt: "MVA-110 ultra quiet 10L dry vacuum cleaner with stainless steel barrel on white background",
    model: "MVA-110",
    name: "10L Ultra-quiet Dry Vacuum Cleaner",
    group: "eq",
    cat: "vacuum-cleaner",
    parent: "vacuum-cleaner"
  },
  {
    href: "mbr-101a.html",
    img: "assets/img/products/mbr-101a/mbr-101a-1100w-154rpm-17-inch-multi-functional-brush-machine-white-background.jpg",
    alt: "MBR-101A multi functional brush machine with red motor drum, white solution tank and 17 inch brush on white background",
    model: "MBR-101A",
    name: "Multi functional Brush Machine",
    group: "eq",
    cat: "brush-machine",
    parent: "brush-machine"
  },
  {
    href: "mbr-101b.html",
    img: "assets/img/products/mbr-101b/mbr-101b-multi-functional-brush-machine-main.jpg",
    alt: "MBR-101B multi functional brush machine with 8L water tank and 17 inch brush on white background",
    model: "MBR-101B",
    name: "8L Multi functional Brush Machine",
    group: "eq",
    cat: "brush-machine",
    parent: "brush-machine"
  },

  {
    href: "mbr-101c.html",
    img: "assets/img/products/mbr-101c/mbr-101c-15l-multi-functional-brush-machine-white-background.jpg",
    alt: "MBR-101C 15L multi functional brush machine with white 15 litre water tank, red motor head and 17 inch brush on white background",
    model: "MBR-101C",
    name: "15L Multi functional Brush Machine",
    group: "eq",
    cat: "brush-machine",
    parent: "brush-machine"
  },

  {
    href: "mbr-102a.html",
    img: "assets/img/products/mbr-102a/mbr-102a-15l-multi-functional-brush-machine-white-background.jpg",
    alt: "MBR-102A 15L multi functional brush machine with white 15 litre water tank, yellow and black motor head and 17 inch plastic base plate",
    model: "MBR-102A",
    name: "15L Multi functional Brush Machine",
    group: "eq",
    cat: "brush-machine",
    parent: "brush-machine"
  },

  {
    href: "mbr-102b.html",
    img: "assets/img/products/mbr-102b/mbr-102b-12l-multi-functional-brush-machine-white-background.jpg",
    alt: "MBR-102B 12L multi functional brush machine with a white 12 litre water tank, yellow and black motor head and 17 inch plastic base plate",
    model: "MBR-102B",
    name: "12L Multi functional Brush Machine",
    group: "eq",
    cat: "brush-machine",
    parent: "brush-machine"
  },
  {
    href: "mbr-102c.html",
    img: "assets/img/products/mbr-102c/mbr-102c-15l-multi-functional-brush-machine-white-background.jpg",
    alt: "MBR-102C 15L multi functional brush machine with a white 15 litre water tank, yellow and black motor head and 17 inch yellow plastic base plate",
    model: "MBR-102C",
    name: "15L Multi functional Brush Machine",
    group: "eq",
    cat: "brush-machine",
    parent: "brush-machine"
  },
  {
    href: "mbr-103.html",
    img: "assets/img/products/mbr-103/mbr-103-1100w-154rpm-17-inch-multi-functional-brush-machine-white-background.jpg",
    alt: "MBR-103 multi functional brush machine with a yellow painted drum body, grey vented motor dome, white solution tank, grey loop handle with a yellow control panel, chrome tube and a 17 inch base plate with a yellow bumper ring, on white background",
    model: "MBR-103",
    name: "Multi functional Brush Machine",
    group: "eq",
    cat: "brush-machine",
    parent: "brush-machine"
  },
  {
    href: "mbr-104a.html",
    img: "assets/img/products/mbr-104a/mbr-104a-8l-multi-functional-brush-machine-white-background.jpg",
    alt: "MBR-104A 8L multi functional brush machine with stainless steel motor body and aluminium base plate on white background",
    model: "MBR-104A",
    name: "8L Multi functional Brush Machine",
    group: "eq",
    cat: "brush-machine",
    parent: "brush-machine"
  },
  {
    href: "mbr-104b.html",
    img: "assets/img/products/mbr-104b/mbr-104b-8l-multi-functional-brush-machine-white-background.jpg",
    alt: "MBR-104B 8L multi functional brush machine with a T-bar handle, stainless steel motor body and blue 17 inch brush deck on white background",
    model: "MBR-104B",
    name: "8L Multi functional Brush Machine",
    group: "eq",
    cat: "brush-machine",
    parent: "brush-machine"
  },
  {
    href: "mbr-104c.html",
    img: "assets/img/products/mbr-104c/mbr-104c-15l-multi-functional-brush-machine-white-background.jpg",
    alt: "MBR-104C 15L multi functional brush machine with a 15 litre white tank, blue loop handle and stainless steel motor cover on white background",
    model: "MBR-104C",
    name: "15L Multi functional Brush Machine",
    group: "eq",
    cat: "brush-machine",
    parent: "brush-machine"
  },
  {
    href: "mbr-105.html",
    img: "assets/img/products/mbr-105/mbr-105-multi-functional-brush-machine-white-background.jpg",
    alt: "MBR-105 multi functional brush machine with a white solution tank, Y-fork handle and green control panel, stainless steel motor cover and 18 inch brush deck, on white background",
    model: "MBR-105",
    name: "Multi functional Brush Machine",
    group: "eq",
    cat: "brush-machine",
    parent: "brush-machine"
  },
  {
    href: "mbr-106.html",
    img: "assets/img/products/mbr-106/mbr-106-8l-multi-functional-brush-machine-white-background.jpg",
    alt: "MBR-106 8L multi functional brush machine with a white 8 litre solution tank, red T-bar handle, 13 inch brush deck and anti-collision strip, on white background",
    model: "MBR-106",
    name: "8L Multi functional Brush Machine",
    group: "eq",
    cat: "brush-machine",
    parent: "brush-machine"
  },
  {
    href: "mbr-107.html",
    img: "assets/img/products/mbr-107/mbr-107-high-speed-polisher-1800w-1500rpm-20-inch-white-background.jpg",
    alt: "MBR-107 high speed floor polisher with a teal painted base, full-perimeter black rubber skirt, stainless steel motor cover with black ring and teal cap, aluminium handle with loop grips, control panel and two transport wheels, on white background",
    model: "MBR-107",
    name: "High Speed Polisher",
    group: "eq",
    cat: "brush-machine",
    parent: "brush-machine"
  },
  {
    href: "mbl-101.html",
    img: "assets/img/products/mbl-101/mbl-101-135w-3-speed-floor-blower-white-background.jpg",
    alt: "MBL-101 135W 3-speed floor blower in blue with black control hood, digital panel and wide front outlet grille on white background",
    model: "MBL-101",
    name: "135W 3-Speed Blower",
    group: "eq",
    cat: "blower",
    parent: "blower"
  },
  {
    href: "mbl-102.html",
    img: "assets/img/products/mbl-102/mbl-102-200w-3-speed-floor-blower-white-background.jpg",
    alt: "MBL-102 200W 3-speed floor blower in blue with a top carry handle, metal control panel, front outlet grille and guarded side intake on white background",
    model: "MBL-102",
    name: "200W 3-Speed Blower",
    group: "eq",
    cat: "blower",
    parent: "blower"
  },
  {
    href: "mbl-103.html",
    img: "assets/img/products/mbl-103/mbl-103-350w-3-speed-floor-blower-white-background.jpg",
    alt: "MBL-103 350W 3-speed floor blower in blue with a top carry handle, front control panel with two rotary dials, wide outlet grille at the base and large guarded side intake, on white background",
    model: "MBL-103",
    name: "350W 3-Speed Blower",
    group: "eq",
    cat: "blower",
    parent: "blower"
  },
  {
    href: "mbl-104.html",
    img: "assets/img/products/mbl-104/mbl-104-900w-3-speed-floor-blower-blue-white-background.jpg",
    alt: "MBL-104 900W 3-speed floor blower in blue with a top carry handle, telescopic pull handle behind it, two rotary dials on the front panel, wide low outlet grille and rear wheels, on white background",
    model: "MBL-104",
    name: "900W 3-Speed Blower",
    group: "eq",
    cat: "blower",
    parent: "blower"
  },
  {
    href: "mbl-105.html",
    img: "assets/img/products/mbl-105/mbl-105-hot-cold-3-speed-floor-blower-blue-white-background.jpg",
    alt: "MBL-105 hot and cold 3-speed floor blower in blue with a two-section retractable pull handle raised at the back, rubber wheels, a wide low outlet grille across the front base and a guarded round intake fan on the side, on white background",
    model: "MBL-105",
    name: "Hot & Cold 3-Speed Blower",
    group: "eq",
    cat: "blower",
    parent: "blower"
  }


];
