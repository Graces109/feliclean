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
    href: "mbr-101a.html",
    img: "assets/img/products/mbr-101a/mbr-101a-1100w-154rpm-17-inch-multi-functional-brush-machine-white-background.jpg",
    alt: "17 inch multi-function brushing machine MBR-101A with red motor drum, white solution tank and 17 inch brush on white background",
    model: "MBR-101A",
    name: "17 Inch Multi-Function Brushing Machine 154rpm Speed",
    group: "eq",
    cat: "brush-machine",
    parent: "brush-machine"
  },
  {
    href: "mbr-101b.html",
    img: "assets/img/products/mbr-101b/mbr-101b-15l-multi-functional-brush-machine-white-background.jpg",
    alt: "17 inch multi-function brushing machine MBR-101B with 15L solution tank and red motor head on white background",
    model: "MBR-101B",
    name: "17 Inch Multi-Function Brushing Machine 154rpm Speed",
    group: "eq",
    cat: "brush-machine",
    parent: "brush-machine"
  },
  {
    href: "mbr-102a.html",
    img: "assets/img/products/mbr-102a/mbr-102a-15l-multi-functional-brush-machine-white-background.jpg",
    alt: "17 inch multi-function brushing machine MBR-102A with 15L solution tank, yellow motor head and plastic base plate on white background",
    model: "MBR-102A",
    name: "17 Inch Multi-Function Brushing Machine 154rpm Speed",
    group: "eq",
    cat: "brush-machine",
    parent: "brush-machine"
  },
  {
    href: "mbr-102b.html",
    img: "assets/img/products/mbr-102b/mbr-102b-12l-multi-functional-brush-machine-white-background.jpg",
    alt: "17 inch multi-function brushing machine MBR-102B with 12L solution tank, yellow motor head and plastic base plate on white background",
    model: "MBR-102B",
    name: "17 Inch Multi-Function Brushing Machine 154rpm Speed",
    group: "eq",
    cat: "brush-machine",
    parent: "brush-machine"
  },
  {
    href: "mbr-103a.html",
    img: "assets/img/products/mbr-103a/mbr-103a-8l-multi-functional-brush-machine-white-background.jpg",
    alt: "17 inch multi-function brushing machine MBR-103A with 8L solution tank and aluminium base plate on white background",
    model: "MBR-103A",
    name: "17 Inch Multi-Function Brushing Machine 175rpm Speed",
    group: "eq",
    cat: "brush-machine",
    parent: "brush-machine"
  },
  {
    href: "mbr-103b.html",
    img: "assets/img/products/mbr-103b/mbr-103b-15l-multi-functional-brush-machine-white-background.jpg",
    alt: "17 inch multi-function brushing machine MBR-103B with 15L solution tank and aluminium base plate on white background",
    model: "MBR-103B",
    name: "17 Inch Multi-Function Brushing Machine 175rpm Speed",
    group: "eq",
    cat: "brush-machine",
    parent: "brush-machine"
  },
  {
    href: "mbr-104.html",
    img: "assets/img/products/mbr-104/mbr-104-multi-functional-brush-machine-white-background.jpg",
    alt: "18 inch multi-function brushing machine MBR-104 with white solution tank and 18 inch brush deck on white background",
    model: "MBR-104",
    name: "18 Inch Multi-Function Brushing Machine 175rpm Speed",
    group: "eq",
    cat: "brush-machine",
    parent: "brush-machine"
  },
  {
    href: "mbr-105.html",
    img: "assets/img/products/mbr-105/mbr-105-8l-multi-functional-brush-machine-white-background.jpg",
    alt: "13 inch multi-function brushing machine MBR-105 with 8L solution tank, red T-bar handle and 13 inch brush deck on white background",
    model: "MBR-105",
    name: "13 Inch Multi-Function Brushing Machine 154rpm Speed",
    group: "eq",
    cat: "brush-machine",
    parent: "brush-machine"
  },
  {
    href: "mbr-108.html",
    img: "assets/img/products/mbr-108/mbr-108-high-speed-polisher-1800w-1500rpm-20-inch-white-background.jpg",
    alt: "20 inch multi-function brushing machine MBR-108 high speed floor polisher with teal base housing and 20 inch base plate on white background",
    model: "MBR-108",
    name: "20 Inch Multi-Function Brushing Machine 1500rpm Speed",
    group: "eq",
    cat: "brush-machine",
    parent: "brush-machine"
  },

  {
    href: "msd-101.html",
    img: "assets/img/products/msd-101/msd-101-600mm-ride-on-scrubber-dryer-white-background.jpg",
    alt: "MSD-101 600mm manual ride-on scrubber dryer with white body, red top cover and one 22 inch disc brush",
    model: "MSD-101",
    name: "600mm Manual Ride-On Scrubber Dryer",
    group: "eq",
    cat: "scrubber-dryer",
    parent: "scrubber-dryer"
  },
  {
    href: "msd-102.html",
    img: "assets/img/products/msd-102/msd-102-660mm-auto-manual-ride-on-scrubber-dryer-white-background.jpg",
    alt: "MSD-102 660mm auto/manual ride-on scrubber dryer with white body, red top cover and twin 13 inch disc brushes",
    model: "MSD-102",
    name: "660mm Twin-Disc Auto/Manual Ride-On Scrubber",
    group: "eq",
    cat: "scrubber-dryer",
    parent: "scrubber-dryer"
  },
  {
    href: "msd-103.html",
    img: "assets/img/products/msd-103/msd-103-860mm-ride-on-scrubber-dryer-white-background.jpg",
    alt: "MSD-103 860mm ride-on scrubber dryer with white and red body, black seat and twin 16 inch disc brushes",
    model: "MSD-103",
    name: "860mm Twin-Disc Ride-On Scrubber Dryer",
    group: "eq",
    cat: "scrubber-dryer",
    parent: "scrubber-dryer"
  },
  {
    href: "msd-104.html",
    img: "assets/img/products/msd-104/msd-104-530mm-manual-scrubber-dryer-white-background.jpg",
    alt: "MSD-104 530mm manual walk-behind scrubber dryer with grey and red body, one 20 inch disc brush and a red squeegee",
    model: "MSD-104",
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
    name: "10 Meters High Pressure Car Wash Machine",
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
    name: "1400mm Sweeping Paths Driving Type Sweeping Machine",
    group: "eq",
    cat: "sweeping-machine",
    parent: "sweeping-machine"
  },
  {
    href: "msw-107.html",
    img: "assets/img/products/msw-107/msw-107-driving-type-sweeping-machine-white-background.jpg",
    alt: "MSW-107 driving type sweeping machine in blue and black with a blue canopy, steering wheel, operator seat, rear-view mirror, red chassis skirt, four black rotary edge brushes and solid tyres, on a clean white background",
    model: "MSW-107",
    name: "1950mm Sweeping Paths Driving Type Sweeping Machine",
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
    name: "30L/80L Carpet Washer",
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
    img: "assets/img/products/pca-101/pca101-07.jpg",
    alt: "PCA-101 small shape A caution board, CAUTION WET FLOOR",
    model: "PCA-101",
    name: "Small Shape of A Caution Board",
    group: "pl",
    cat: "caution-board",
    parent: "caution-board"
  },
  {
    href: "pca-102.html",
    img: "assets/img/products/pca-102/pca102-04.jpg",
    alt: "PCA-102 large shape A caution board, CAUTION WET FLOOR",
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
  },
  {
    href: "aeq-101.html",
    img: "assets/img/products/aeq-101/aeq-101b-154rpm-floor-brush-17-inch-black-bristle-white-background.jpg",
    alt: "154rpm floor brush AEQ-101 disc brush for single-disc floor scrubber and polisher, black bristle, 17 inch standard with 18 and 13 inch sizes, white background",
    model: "AEQ-101",
    name: "154rpm Floor Brush",
    group: "eq",
    cat: "equipment-accessories",
    parent: "equipment-accessories"
  },
  {
    href: "aeq-102.html",
    img: "assets/img/products/aeq-102/aeq-102b-154rpm-carpet-brush-two-tone-bristle-white-background.jpg",
    alt: "154rpm carpet brush AEQ-102 rotary brush for carpet extractor and buffer, white inner and black outer bristle, 17 inch standard with 18 and 13 inch sizes, white background",
    model: "AEQ-102",
    name: "154rpm Carpet Brush",
    group: "eq",
    cat: "equipment-accessories",
    parent: "equipment-accessories"
  },
  {
    href: "aeq-103.html",
    img: "assets/img/products/aeq-103/aeq-103b-154rpm-pad-holder-studded-grip-face-white-background.jpg",
    alt: "154rpm pad holder AEQ-103 drive pad holder with studded grip face for floor scrubber and buffer pads, 17 inch standard with 18 inch AEQ-103A, white background",
    model: "AEQ-103",
    name: "154rpm Pad Holder",
    group: "eq",
    cat: "equipment-accessories",
    parent: "equipment-accessories"
  },
  {
    href: "aeq-104.html",
    img: "assets/img/products/aeq-104/aeq-104b-175rpm-floor-brush-black-bristle-white-background.jpg",
    alt: "175rpm floor brush AEQ-104 rotary scrub brush with dense black bristle for 175 rpm floor machine and buffer, 17 inch standard with 18 inch AEQ-104A, white background",
    model: "AEQ-104",
    name: "175rpm Floor Brush",
    group: "eq",
    cat: "equipment-accessories",
    parent: "equipment-accessories"
  },
  {
    href: "aeq-105.html",
    img: "assets/img/products/aeq-105/aeq-105b-175rpm-carpet-brush-two-tone-bristle-white-background.jpg",
    alt: "175rpm carpet brush AEQ-105 rotary carpet brush with white inner and black outer bristle for 175 rpm floor machine carpet shampoo, 17 inch standard with 18 inch AEQ-105A, white background",
    model: "AEQ-105",
    name: "175rpm Carpet Brush",
    group: "eq",
    cat: "equipment-accessories",
    parent: "equipment-accessories"
  },
  {
    href: "aeq-106.html",
    img: "assets/img/products/aeq-106/aeq-106b-175rpm-pad-holder-studded-grip-face-white-background.jpg",
    alt: "175rpm pad holder AEQ-106 pad driver with studded grip face for 175 rpm floor machine and buffer pads, 17 inch standard with 18 inch AEQ-106A, white background",
    model: "AEQ-106",
    name: "175rpm Pad Holder",
    group: "eq",
    cat: "equipment-accessories",
    parent: "equipment-accessories"
  },
  {
    href: "aeq-107.html",
    img: "assets/img/products/aeq-107/aeq-107-20-inch-burnish-plate-white-background.jpg",
    alt: "20 inch burnish plate AEQ-107 with textured burnishing face and blue centre hub with six screws for a high speed floor burnisher, white background",
    model: "AEQ-107",
    name: "Burnish Plate",
    group: "eq",
    cat: "equipment-accessories",
    parent: "equipment-accessories"
  },
  {
    href: "aeq-108.html",
    img: "assets/img/products/aeq-108/aeq-108-white-floor-pad-17-20-inch-white-background.jpg",
    alt: "white floor pad AEQ-108 white non-woven buffing pad for single disc floor machine and buffer polishing, 17 inch standard with 20 inch AEQ-108A, white background",
    model: "AEQ-108",
    name: "White Floor Pad",
    group: "eq",
    cat: "equipment-accessories",
    parent: "equipment-accessories"
  },
  {
    href: "aeq-109.html",
    img: "assets/img/products/aeq-109/aeq-109-red-floor-pad-17-20-inch-white-background.jpg",
    alt: "red floor pad AEQ-109 red non-woven scrubbing pad for single disc floor machine scrubbing and spray buffing, 17 inch standard with 20 inch AEQ-109A, white background",
    model: "AEQ-109",
    name: "Red Floor Pad",
    group: "eq",
    cat: "equipment-accessories",
    parent: "equipment-accessories"
  },
  {
    href: "aeq-110.html",
    img: "assets/img/products/aeq-110/aeq-110-black-floor-pad-17-20-inch-white-background.jpg",
    alt: "black floor pad AEQ-110 black non-woven stripping pad for single disc floor machine stripping old finish before recoating, 17 inch standard with 20 inch AEQ-110A, white background",
    model: "AEQ-110",
    name: "Black Floor Pad",
    group: "eq",
    cat: "equipment-accessories",
    parent: "equipment-accessories"
  },
  {
    href: "pwr-101.html",
    img: "assets/img/products/pwr-101/pwr-101-34l-double-mop-wringer-trolley-white-background.jpg",
    alt: "34L double mop wringer trolley PWR-101 with clean and dirty water chambers, wringer basket and four swivel castors for hotel housekeeping and contract cleaning, white background",
    model: "PWR-101",
    name: "Double Mop Wringer Trolley",
    group: "pl",
    cat: "wringer-trolley",
    parent: "wringer-trolley"
  },
  {
    href: "pwr-102a.html",
    img: "assets/img/products/pwr-102a/pwr-102a-24l-single-mop-wringer-trolley-white-background.jpg",
    alt: "24L single mop wringer trolley PWR-102A with side-press wringer basket and four swivel castors for restaurants, offices and small hotel floors, white background",
    model: "PWR-102A",
    name: "Single Mop Wringer Trolley",
    group: "pl",
    cat: "wringer-trolley",
    parent: "wringer-trolley"
  },
  {
    href: "pwr-102b.html",
    img: "assets/img/products/pwr-102b/pwr-102b-24l-single-mop-wringer-trolley-with-drain-hose-white-background.jpg",
    alt: "24L single mop wringer trolley PWR-102B with drain hose, side-press wringer basket and four swivel castors for offices, shops and small hotels, white background",
    model: "PWR-102B",
    name: "Single Mop Wringer Trolley with Drain Hose",
    group: "pl",
    cat: "wringer-trolley",
    parent: "wringer-trolley"
  },
  {
    href: "pwr-103a.html",
    img: "assets/img/products/pwr-103a/pwr-103a-32l-single-mop-wringer-trolley-white-background.jpg",
    alt: "32L single mop wringer trolley PWR-103A with clip-on PP wringer basket and four swivel castors for schools, hospitals and warehouses, white background",
    model: "PWR-103A",
    name: "32L Single Mop Wringer Trolley",
    group: "pl",
    cat: "wringer-trolley",
    parent: "wringer-trolley"
  },
  {
    href: "pwr-103b.html",
    img: "assets/img/products/pwr-103b/pwr-103b-32l-single-mop-wringer-trolley-with-drain-hose-white-background.jpg",
    alt: "32L single mop wringer trolley with drain hose PWR-103B and four swivel castors for schools, hospitals and warehouses, white background",
    model: "PWR-103B",
    name: "32L Single Mop Wringer Trolley with Drain Hose",
    group: "pl",
    cat: "wringer-trolley",
    parent: "wringer-trolley"
  },
  {
    href: "pwr-104a.html",
    img: "assets/img/products/pwr-104a/pwr-104a-36l-single-mop-wringer-trolley-white-background.jpg",
    alt: "36L single mop wringer trolley PWR-104A, clip-on PP wringer basket and four swivel castors for schools, hospitals and warehouses, white background",
    model: "PWR-104A",
    name: "36L Single Mop Wringer Trolley",
    group: "pl",
    cat: "wringer-trolley",
    parent: "wringer-trolley"
  },
  {
    href: "pwr-104b.html",
    img: "assets/img/products/pwr-104b/pwr-104b-36l-single-mop-wringer-trolley-with-drain-hose-white-background.jpg",
    alt: "36L single mop wringer trolley with drain hose PWR-104B, clip-on PP wringer basket and four swivel castors for schools, hospitals and warehouses, white background",
    model: "PWR-104B",
    name: "36L Single Mop Wringer Trolley with Drain Hose",
    group: "pl",
    cat: "wringer-trolley",
    parent: "wringer-trolley"
  },
  {
    href: "pwr-105a.html",
    img: "assets/img/products/pwr-105a/pwr-105a-20l-single-mop-wringer-trolley-white-background.jpg",
    alt: "20L single mop wringer trolley PWR-105A with down-press wringer and four iron castors for hotel rooms, clinics and offices, white background",
    model: "PWR-105A",
    name: "20L Single Mop Wringer Trolley",
    group: "pl",
    cat: "wringer-trolley",
    parent: "wringer-trolley"
  },
  {
    href: "pwr-105b.html",
    img: "assets/img/products/pwr-105b/pwr-105b-20l-single-mop-wringer-trolley-white-background.jpg",
    alt: "20L single mop wringer trolley PWR-105B with down-press wringer and four plastic castors for hotel rooms, clinics and offices, white background",
    model: "PWR-105B",
    name: "20L Single Mop Wringer Trolley with Plastic Castors",
    group: "pl",
    cat: "wringer-trolley",
    parent: "wringer-trolley"
  },
  {
    href: "pwr-106.html",
    img: "assets/img/products/pwr-106/pwr-106-36l-down-press-double-mop-wringer-trolley-white-background.jpg",
    alt: "36L down-press double mop wringer trolley PWR-106 with blue clean bucket, red dirty bucket and four swivel castors for hotels, hospitals and large floors, white background",
    model: "PWR-106",
    name: "36L Down-Press Double Mop Wringer Trolley",
    group: "pl",
    cat: "wringer-trolley",
    parent: "wringer-trolley"
  },
  {
    href: "pwr-107.html",
    img: "assets/img/products/pwr-107/pwr-107-50l-double-mop-wringer-trolley-white-background.jpg",
    alt: "50L double mop wringer trolley PWR-107 with red dirty bucket, blue clean bucket and yellow down-press wringer for hotel corridors, hospital wards and offices, white background",
    model: "PWR-107",
    name: "50L Double Mop Wringer Trolley",
    group: "pl",
    cat: "wringer-trolley",
    parent: "wringer-trolley"
  },
  {
    href: "pst-101.html",
    img: "assets/img/products/pst-101/pst-101-six-colour-round-storage-bin-no-castors-white-background.jpg",
    alt: "Round storage bin PST-101 in yellow, green and blue with lid and rim ears standing on the floor with no castors and no base platform, plastic storage bin in capacities from 23L to 208L for hotels, restaurants and laundry rooms, white background",
    model: "PST-101",
    name: "Round Storage Bin",
    group: "pl",
    cat: "storage-bin",
    parent: "storage-bin"
  },
  {
    href: "pst-102.html",
    img: "assets/img/products/pst-102/pst-102-wheeled-round-storage-bin-six-colour-white-background.jpg",
    alt: "PST-102 wheeled round storage bin with wheel base in yellow, green and blue, lidded body with rim ears on four swivel castors, plastic storage bin from 23L to 208L for hotels, restaurant kitchens, hospitals and laundry rooms, white background",
    model: "PST-102",
    name: "Round Storage Bin with Wheel Base",
    group: "pl",
    cat: "storage-bin",
    parent: "storage-bin"
  },
  {
    href: "pst-103.html",
    img: "assets/img/products/pst-103/pst-103-dark-grey-round-storage-bin-40l-80l-white-background.jpg",
    alt: "PST-103 dark grey round storage bin in 40L and 80L without base or castors, lidded body with rim ears standing flat on the floor, plastic storage bin for hotel housekeeping, restaurant kitchens and laundry rooms, white background",
    model: "PST-103",
    name: "Round Storage Bin without Base",
    group: "pl",
    cat: "storage-bin",
    parent: "storage-bin"
  },
  {
    href: "pst-104.html",
    img: "assets/img/products/pst-104/pst-104-dark-grey-round-storage-bin-80l-120l-168l-white-background.jpg",
    alt: "PST-104 dark grey round storage bin with wheel base in 80L, 120L and 168L, lidded body on a base platform with four swivel castors, plastic storage bin for hotels, airports, hot spring resorts and factories, white background",
    model: "PST-104",
    name: "Round Storage Bin with Wheel Base",
    group: "pl",
    cat: "storage-bin",
    parent: "storage-bin"
  },
  {
    href: "pst-105.html",
    img: "assets/img/products/pst-105/pst-105-120l-half-round-head-dustbin-with-ashtray-dark-grey-white-background.jpg",
    alt: "PST-105-120 120L half round head dustbin with built-in ashtray in dark grey, push flap entry with PUSH arrow and side rim ears, plastic litter bin for hotel lobbies, airports, hot spring pool decks and factories, white background",
    model: "PST-105-120",
    name: "120L Half Round Head Dustbin with Ashtray",
    group: "pl",
    cat: "storage-bin",
    parent: "storage-bin"
  },
  {
    href: "pst-106.html",
    img: "assets/img/products/pst-106/pst-106-120l-funnel-dustbin-dark-grey-white-background.jpg",
    alt: "PST-106-120 120L funnel dustbin in dark grey with lift-off lid and round funnel opening, two side rim ears, plastic waste bin for hotel back-of-house, airports, hot spring pool decks and factories, white background",
    model: "PST-106-120",
    name: "120L Funnel Dustbin",
    group: "pl",
    cat: "storage-bin",
    parent: "storage-bin"
  },
  {
    href: "ppg-101.html",
    img: "assets/img/products/ppg-101/ppg-101-classification-pedal-dustbin-six-colour-white-background.jpg",
    alt: "PPG-101 classification pedal dustbin in six colours, yellow, yellow-grey, grey, green, blue and red, step pedal and hinged lid, plastic waste bin for hospitals, hotel back-of-house, airports, hot spring pool decks and factories, white background",
    model: "PPG-101",
    name: "Classification Pedal Dustbin 30L/45L/68L/87L",
    group: "pl",
    cat: "pedal-garbage-bin",
    parent: "dustbin"
  },
  {
    href: "ppg-102.html",
    img: "assets/img/products/ppg-102/ppg-102-pedal-dustbin-six-colour-white-background.jpg",
    alt: "PPG-102 classification pedal dustbin 15L 25L 35L 45L 55L in six colours, yellow, yellow-grey, grey, green, blue and red, step pedal and hinged lid, plastic waste bin for hotels, clinics, offices and factories, white background",
    model: "PPG-102",
    name: "Classification Pedal Dustbin 15L/25L/35L/45L/55L",
    group: "pl",
    cat: "pedal-garbage-bin",
    parent: "dustbin"
  },
  {
    href: "ptc-101.html",
    img: "assets/img/products/ptc-101/ptc-101-turning-cover-dustbin-with-castors-white-background.jpg",
    alt: "PTC-101 turning cover dustbin 60L and 120L with base platform and castors in grey, green, blue and red, swing lid plastic litter bin for hotels, airports and factories, white background",
    model: "PTC-101",
    name: "60L/120L Turning Cover Dustbin with Castors",
    group: "pl",
    cat: "turning-cover-dustbin",
    parent: "dustbin"
  },
  {
    href: "ptc-102.html",
    img: "assets/img/products/ptc-102/ptc-102-60l-turning-cover-dustbin-four-colours-white-background.jpg",
    alt: "PTC-102 turning cover dustbin 25L 42L 60L in grey, green, blue and red, self-closing swing lid plastic litter bin for hotels, schools and offices, white background",
    model: "PTC-102",
    name: "25L/42L/60L Turning Cover Dustbin",
    group: "pl",
    cat: "turning-cover-dustbin",
    parent: "dustbin"
  },
  {
    href: "ptc-103.html",
    img: "assets/img/products/ptc-103/ptc-103-100l-turning-cover-dustbin-four-colours-white-background.jpg",
    alt: "PTC-103 turning cover dustbin 25L 40L 60L 100L in grey, green, blue and red, wide top self-closing swing lid plastic litter bin for hotel lobbies, airports and factories, white background",
    model: "PTC-103",
    name: "25L/40L/60L/100L Turning Cover Dustbin",
    group: "pl",
    cat: "turning-cover-dustbin",
    parent: "dustbin"
  },
  {
    href: "ptc-104.html",
    img: "assets/img/products/ptc-104/ptc-104-hand-free-dustbin-80l-60l-grey-white-background.jpg",
    alt: "PTC-104 hand free dustbin 60L and 80L in grey with push top cover and no pedal, plastic waste bin for hotel rooms, clinics and offices, white background",
    model: "PTC-104",
    name: "60L/80L Hand Free Dustbin",
    group: "pl",
    cat: "turning-cover-dustbin",
    parent: "dustbin"
  },
  {
    href: "ptc-105.html",
    img: "assets/img/products/ptc-105/ptc-105-hand-free-dustbin-12l-25l-35l-grey-white-background.jpg",
    alt: "PTC-105 hand free dustbin 12L 25L 35L in grey with push top cover and no pedal, compact plastic waste bin for bathrooms, guest rooms and offices, white background",
    model: "PTC-105",
    name: "12L/25L/35L Hand Free Dustbin",
    group: "pl",
    cat: "turning-cover-dustbin",
    parent: "dustbin"
  },
  {
    href: "pcl-101.html",
    img: "assets/img/products/pcl-101/pcl-101-joint-dustbin-four-stream-87l-white-background.jpg",
    alt: "PCL-101 87L joint dustbin with green, grey, blue and red lids, four stream colour coded recycling station for airports, malls and campuses, white background",
    model: "PCL-101",
    name: "87L Four Stream Joint Dustbin",
    group: "pl",
    cat: "classification-dustbin",
    parent: "dustbin"
  },
  {
    href: "pcl-102.html",
    img: "assets/img/products/pcl-102/pcl-102-180l-joint-dustbin-three-stream-white-background.jpg",
    alt: "PCL-102 180L joint dustbin with blue, red and yellow lids, three stream colour coded recycling station for depots, plants and public spaces, white background",
    model: "PCL-102",
    name: "180L Joint Dustbin",
    group: "pl",
    cat: "classification-dustbin",
    parent: "dustbin"
  },
  {
    href: "pba-101.html",
    img: "assets/img/products/pba-101/pba-101-21l-slim-bathroom-dustbin-blue-grey-white-background.jpg",
    alt: "PBA-101 21L slim lidded bathroom dustbin in blue and grey, tall narrow plastic waste bin for hotel bathrooms, clinics and washrooms, white background",
    model: "PBA-101",
    name: "21L Slim Bathroom Dustbin",
    group: "pl",
    cat: "bathroom-dustbin",
    parent: "dustbin"
  },
  {
    href: "pba-102.html",
    img: "assets/img/products/pba-102/pba-102-open-top-bathroom-dustbin-black-ivory-slate-beige-white-background.jpg",
    alt: "PBA-102 open top bathroom dustbin 8L and 8.5L in black, ivory, slate and beige, slim plastic waste bin for hotel bathrooms, guest rooms and offices, white background",
    model: "PBA-102",
    name: "8L/8.5L Open Top Bathroom Dustbin",
    group: "pl",
    cat: "bathroom-dustbin",
    parent: "dustbin"
  },
  {
    href: "pba-105.html",
    img: "assets/img/products/pba-105/pba-105-square-trash-can-8l-grey-yellow-white-background.jpg",
    alt: "PBA-105 8L square trash can in grey and yellow, open top slim plastic waste bin for hotel rooms, offices and classrooms, white background",
    model: "PBA-105",
    name: "8L Square Trash Can",
    group: "pl",
    cat: "bathroom-dustbin",
    parent: "dustbin"
  },
  {
    href: "pou-101.html",
    img: "assets/img/products/pou-101/pou-101-blue-poly-tilt-truck-350l-450l-white-background.jpg",
    alt: "POU-101 350L and 450L blue polyethylene tilt truck on a steel frame with rear wheels and front castors, waste collection truck for factories, warehouses and recycling yards, white background",
    model: "POU-101",
    name: "350L/450L Tilt Truck",
    group: "pl",
    cat: "outdoor-garbage-cart",
    parent: "dustbin"
  },
  {
    href: "pou-102.html",
    img: "assets/img/products/pou-102/pou-102-660l-1100l-four-wheel-waste-container-white-background.jpg",
    alt: "POU-102 660L and 1100L four wheel waste container in green, blue, red and grey, large outdoor plastic garbage bin for housing estates and municipal collection, white background",
    model: "POU-102",
    name: "660L/1100L Four Wheel Waste Container",
    group: "pl",
    cat: "outdoor-garbage-cart",
    parent: "dustbin"
  },
  {
    href: "pou-103.html",
    img: "assets/img/products/pou-103/pou-103-100l-120l-240l-wheelie-bin-grey-green-blue-red-white-background.jpg",
    alt: "POU-103 100L, 120L and 240L two wheel wheelie bin in grey, green, blue and red, kerbside plastic outdoor garbage bin for streets, housing estates and schools, white background",
    model: "POU-103",
    name: "100L/120L/240L Wheelie Bin",
    group: "pl",
    cat: "outdoor-garbage-cart",
    parent: "dustbin"
  },
  {
    href: "pou-104.html",
    img: "assets/img/products/pou-104/pou-104-wheelie-bin-pulling-handle-grey-green-blue-red-white-background.jpg",
    alt: "POU-104 100L, 120L and 240L two wheel wheelie bin with a steel pulling handle in grey, green, blue and red, plastic outdoor garbage bin for long kerbside routes, white background",
    model: "POU-104",
    name: "Wheelie Bin with Pulling Handle",
    group: "pl",
    cat: "outdoor-garbage-cart",
    parent: "dustbin"
  },
  {
    href: "pou-105.html",
    img: "assets/img/products/pou-105/pou-105-240l-tapered-outdoor-garbage-bin-grey-green-blue-red-white-background.jpg",
    alt: "POU-105 240L tapered outdoor garbage bin with overhanging lid in grey, green, blue and red, plastic public waste bin for streets, parks and markets, white background",
    model: "POU-105",
    name: "240L Tapered Outdoor Garbage Bin",
    group: "pl",
    cat: "outdoor-garbage-cart",
    parent: "dustbin"
  },
  {
    href: "pou-106.html",
    img: "assets/img/products/pou-106/pou-106-100l-120l-240l-ribbed-outdoor-garbage-bin-grey-green-blue-red-white-background.jpg",
    alt: "POU-106 100L, 120L and 240L ribbed outdoor garbage bin in grey, green, blue and red, heavy duty plastic street waste bin for estates and commercial frontage, white background",
    model: "POU-106",
    name: "100L/120L/240L Outdoor Garbage Bin",
    group: "pl",
    cat: "outdoor-garbage-cart",
    parent: "dustbin"
  },
  {
    href: "pou-107.html",
    img: "assets/img/products/pou-107/pou-107-120l-240l-food-waste-bin-pedal-wheels-grey-green-blue-red-white-background.jpg",
    alt: "POU-107 120L and 240L food waste bin with a foot pedal and wheels in grey, green, blue and red, plastic kitchen waste container for canteens, hotels and estates, white background",
    model: "POU-107",
    name: "120L/240L Food Waste Bin with Pedal",
    group: "pl",
    cat: "outdoor-garbage-cart",
    parent: "dustbin"
  },
  {
    href: "pou-108.html",
    img: "assets/img/products/pou-108/pou-108-60l-outdoor-garbage-bin-castors-grey-green-blue-red-white-background.jpg",
    alt: "POU-108 60L outdoor garbage bin on four castors in grey, green, blue and red, wheeled lidded plastic waste bin for campuses, hotels and event grounds, white background",
    model: "POU-108",
    name: "60L Outdoor Garbage Bin on Castors",
    group: "pl",
    cat: "outdoor-garbage-cart",
    parent: "dustbin"
  },
  {
    href: "pou-109.html",
    img: "assets/img/products/pou-109/pou-109-60l-pedal-waste-bin-legs-grey-green-blue-white-background.jpg",
    alt: "POU-109 60L pedal waste bin on stainless steel legs in grey, green and blue, hygienic foot pedal plastic bin for clinics, hotels and washrooms, white background",
    model: "POU-109",
    name: "60L Pedal Waste Bin on Legs",
    group: "pl",
    cat: "outdoor-garbage-cart",
    parent: "dustbin"
  },
  {
    href: "pou-110.html",
    img: "assets/img/products/pou-110/pou-110-60l-120l-240l-pedal-side-wheel-garbage-bin-grey-white-background.jpg",
    alt: "POU-110 60L, 120L and 240L pedal side wheel garbage bin in grey, foot pedal plastic outdoor waste container for housing estates, canteens and markets, white background",
    model: "POU-110",
    name: "60L/120L/240L Pedal Side Wheel Garbage Bin",
    group: "pl",
    cat: "outdoor-garbage-cart",
    parent: "dustbin"
  },
  {
    href: "pwr-108.html",
    img: "assets/img/products/pwr-108/pwr-108-35l-down-press-double-mop-wringer-trolley-white-background.jpg",
    alt: "35L down-press double mop wringer trolley PWR-108 with yellow wash bucket, red wringer insert, blue second bucket and black base platform for hotels, hospitals and schools, white background",
    model: "PWR-108",
    name: "35L/15/4L Down-Press Double Mop Wringer Trolley",
    group: "pl",
    cat: "wringer-trolley",
    parent: "wringer-trolley"
  },


];
