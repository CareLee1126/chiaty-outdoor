// Real, user-provided product detail data, keyed by product id.
// When an entry exists here, the detail page uses it verbatim instead of the
// auto-generated content. Add products here as real data comes in.
//
// Shape:
// [id]: {
//   itemNo, model_no,
//   gallery: [main images...],       // first images = main gallery (thumbnails)
//   detailImages: [in-page images...],// shown stacked in the description section
//   specs: [{ k, v }, ...],           // exact spec rows
//   description: 'string',            // optional custom description
// }

// Real, user-provided product detail data, keyed by product id.
// When an entry exists here, the detail page uses it verbatim instead of the
// auto-generated content. Add products here as real data comes in.
//
// Shape:
// [id]: {
//   itemNo, model_no,
//   gallery: [main images...],       // first images = main gallery (thumbnails)
//   detailImages: [in-page images...],// shown stacked in the description section
//   specs: [{ k, v }, ...],           // exact spec rows
//   description: 'string',            // optional custom description
//   shortIntro: 'string',             // short intro beside the main image
//   quoteNote: 'string',              // MOQ / pricing note beside the image
//   sellingPoints: [{ h, p }, ...],   // bullet selling points
//   customizationNote: 'string',      // customization paragraph
//   inquiryPrompt: 'string',          // customer-visible prompt above the form
//   seoTitle, seoDescription,         // per-page SEO fields
//   imagePending: true,               // show "image pending" note, hold publish
// }

export const productOverrides = {
  // CT-302 — Camping Chair with mesh cup holder & carry bag
  'ct-302': {
    itemNo: 'CT-302',
    gallery: [
      '/assets/images/products/ct302_1.jpg',
      '/assets/images/products/ct302_2.jpg',
      '/assets/images/products/ct302_3.jpg',
    ],
    detailImages: [
      '/assets/images/products/ct302_4.jpg',
      '/assets/images/products/ct302_5.jpg',
      '/assets/images/products/ct302_6.jpg',
      '/assets/images/products/ct302_7.jpg',
      '/assets/images/products/ct302_8.jpg',
    ],
    description:
      'Sturdy folding camping chair with a reinforced steel frame, mesh cup holder, and included carry bag. Built for camping, festivals, RV trips, and outdoor events, it supports up to 150 kg and folds down compactly for easy transport. Available for OEM/ODM customization — custom logo, color, fabric, and packaging.',
    specs: [
      { k: 'Item No.', v: 'CT-302' },
      { k: 'Category', v: 'Camping Chair' },
      { k: 'Material', v: 'Steel' },
      { k: 'Product size', v: '50 x 50 x 80 cm' },
      { k: 'Load capacity', v: '150 kg' },
      { k: 'MOQ', v: '500 pcs' },
      { k: 'Packaging', v: '8 pcs / CTN' },
      { k: 'Carton size (MEAS)', v: '83 x 23 x 38 cm' },
      { k: 'Gross weight', v: '15 kg / CTN' },
      { k: 'Customization', v: 'OEM / ODM — logo, color, fabric, packaging' },
    ],
  },

  // CT-311A — Mesh Folding Camping Chair with Aluminum Frame (new draft)
  'ct-311a': {
    itemNo: 'CT-311A',
    gallery: ['/assets/images/products/ct311a_1.jpg'],
    shortIntro:
      'The CT-311A is a folding camping chair with mesh panels and an aluminum frame. Weighing 1.8 kg and measuring 57 × 54 × 66 cm when open, it offers portable seating for camping and outdoor leisure. OEM customization is available for wholesale orders, with a minimum order quantity of 200 pieces.',
    quoteNote:
      'Pricing depends on order quantity and customization requirements. Send us your requirements for a quotation.',
    description:
      'The CT-311A is a folding camping chair with mesh panels and an aluminum frame. Weighing 1.8 kg and measuring 57 × 54 × 66 cm when open, it offers portable seating for camping and outdoor leisure. OEM customization is available for wholesale orders, with a minimum order quantity of 200 pieces.',
    sellingPoints: [
      { h: 'Mesh panels for airflow', p: 'Mesh sections in the back and sides allow air to circulate while seated outdoors.' },
      { h: 'Portable 1.8 kg design', p: 'The aluminum-frame chair can be carried between the car and campsite and folded for storage.' },
      { h: 'Open dimensions', p: 'The chair measures 57 × 54 × 66 cm when open, giving buyers clear dimensions for product comparison.' },
      { h: 'OEM customization available', p: 'Contact us to discuss color options and branding requirements.' },
      { h: 'Wholesale ordering', p: 'The minimum order quantity is 200 pieces. Share your quantity and customization needs to request a quotation.' },
    ],
    specs: [
      { k: 'Model', v: 'CT-311A' },
      { k: 'Product Type', v: 'Folding Camping Chair' },
      { k: 'Frame Material', v: 'Aluminum' },
      { k: 'Open Dimensions', v: '57 × 54 × 66 cm' },
      { k: 'Product Weight', v: '1.8 kg (per chair)' },
      { k: 'Load Capacity', v: '120 kg' },
      { k: 'Minimum Order Quantity', v: '200 pieces' },
      { k: 'Carton Dimensions', v: '47 × 33 × 28 cm' },
      { k: 'Packing Quantity', v: '8 pieces / carton' },
      { k: 'Sample Production Time', v: '3–5 days' },
      { k: 'OEM Customization', v: 'Available' },
      { k: 'Color Options', v: 'Contact us to discuss available colors and customization requirements.' },
    ],
    customizationNote:
      'OEM customization is available for wholesale orders. Contact us to discuss color options and branding requirements; the minimum order quantity is 200 pieces.',
    inquiryPrompt:
      'Interested in the CT-311A? Send us your order quantity, destination and customization requirements to request a quote and confirm sample arrangements.',
    seoTitle: 'Mesh Folding Camping Chair CT-311A | Chiaty Outdoor',
    seoDescription:
      'Explore the CT-311A mesh folding camping chair with an aluminum frame and 1.8 kg weight. MOQ 200 pieces. Contact Chiaty Outdoor for OEM options and a quote.',
  },

  // CT-311B — High Back Folding Camping Chair with Headrest (new draft)
  'ct-311b': {
    itemNo: 'CT-311B',
    gallery: ['/assets/images/products/ct311b_1.jpg'],
    shortIntro:
      'The CT-311B is a high back folding camping chair with a headrest, mesh side panels and an aluminum frame. Weighing 1.5 kg, it measures 45 × 58 × 99 cm when open. This model offers a high-back option for camping and outdoor leisure collections. OEM customization is available, with a minimum order quantity of 200 pieces.',
    quoteNote:
      'Pricing depends on order quantity and customization requirements. Send us your requirements for a quotation.',
    description:
      'The CT-311B is a high back folding camping chair with a headrest, mesh side panels and an aluminum frame. Weighing 1.5 kg, it measures 45 × 58 × 99 cm when open. This model offers a high-back option for camping and outdoor leisure collections. OEM customization is available, with a minimum order quantity of 200 pieces.',
    sellingPoints: [
      { h: 'High back with headrest', p: 'The extended backrest and headrest provide a place to rest the upper back and head while seated.' },
      { h: 'Mesh side panels', p: 'Mesh sections at the sides allow airflow around the seating area.' },
      { h: 'Folding aluminum frame', p: 'The folding design allows the chair to be packed away between outings.' },
      { h: 'A high-back option for your range', p: 'Offer customers an alternative to shorter-back camping chairs.' },
      { h: 'OEM and wholesale supply', p: 'Discuss color options and branding requirements with us. The minimum order quantity is 200 pieces.' },
    ],
    specs: [
      { k: 'Model', v: 'CT-311B' },
      { k: 'Product Type', v: 'High Back Folding Camping Chair' },
      { k: 'Frame Material', v: 'Aluminum' },
      { k: 'Open Dimensions', v: '45 × 58 × 99 cm' },
      { k: 'Product Weight', v: '1.5 kg (per chair)' },
      { k: 'Load Capacity', v: '120 kg' },
      { k: 'Minimum Order Quantity', v: '200 pieces' },
      { k: 'Carton Dimensions', v: '62 × 42 × 28 cm' },
      { k: 'Packing Quantity', v: '10 pieces / carton' },
      { k: 'Sample Production Time', v: '3–5 days' },
      { k: 'OEM Customization', v: 'Available' },
      { k: 'Color Options', v: 'Contact us to discuss available colors and customization requirements.' },
    ],
    customizationNote:
      'OEM and wholesale supply with custom color options and branding. Discuss your branding requirements with us; the minimum order quantity is 200 pieces.',
    inquiryPrompt:
      'Request a quotation for the CT-311B with your order quantity, destination and branding requirements. Contact us to confirm sample arrangements and customization details.',
    seoTitle: 'High Back Camping Chair with Headrest CT-311B | Chiaty Outdoor',
    seoDescription:
      'Discover the CT-311B high back folding camping chair with a headrest, mesh side panels and aluminum frame. MOQ 200 pieces. Ask about OEM options.',
  },

  // CT-104 — 7-Position Lay-Flat Aluminum Beach Chair with Armrests
  'ct-104': {
    itemNo: 'CT-104',
    gallery: ['/assets/images/products/ct104_1.jpg'],
    shortIntro:
      'The CT-104 is an aluminum beach chair with seven adjustable backrest positions, including a lay-flat position. Its low-seat design and armrests offer a beachside seating option, while the folding frame allows storage between outings. The chair weighs 3 kg and is available for wholesale orders from 200 pieces, with OEM customization available.',
    quoteNote:
      'Pricing depends on order quantity and customization requirements. Send us your requirements for a quotation.',
    description:
      'The CT-104 is an aluminum beach chair with seven adjustable backrest positions, including a lay-flat position. Its low-seat design and armrests offer a beachside seating option, while the folding frame allows storage between outings. The chair weighs 3 kg and is available for wholesale orders from 200 pieces, with OEM customization available.',
    sellingPoints: [
      { h: '7-Position Adjustable Backrest', p: 'Choose from seven backrest positions to switch between upright seating and a more reclined position.' },
      { h: 'Lay-Flat Backrest', p: 'The backrest reclines to a flat position, offering an additional option for relaxing at the beach.' },
      { h: 'Low-Seat Design', p: 'The low seat places users close to the sand for beachside lounging.' },
      { h: 'Aluminum Frame', p: 'An aluminum frame supports the seat and backrest in a folding design that can be packed away between outings.' },
      { h: 'Armrests', p: 'Armrests on both sides provide a place to rest your arms while seated.' },
    ],
    specs: [
      { k: 'Model', v: 'CT-104' },
      { k: 'Product Type', v: 'Folding Beach Chair' },
      { k: 'Frame Material', v: 'Aluminum' },
      { k: 'Dimensions', v: '77 × 61 × 78 cm' },
      { k: 'Product Weight', v: '3 kg (per chair)' },
      { k: 'Load Capacity', v: '120 kg' },
      { k: 'Minimum Order Quantity', v: '200 pieces' },
      { k: 'Sample Production Time', v: '3–5 days' },
      { k: 'Packing', v: '70 × 44 × 64 cm / 4 pieces' },
      { k: 'OEM Customization', v: 'Available' },
      { k: 'Color Options', v: 'Contact us to discuss available colors and customization requirements.' },
    ],
    customizationNote:
      'OEM customization is available for wholesale orders. Contact us to discuss color options and branding requirements; the minimum order quantity is 200 pieces.',
    inquiryPrompt:
      'Interested in the CT-104? Send us your order quantity, destination and customization requirements to request a wholesale quotation.',
    seoTitle: '7-Position Lay-Flat Beach Chair CT-104 | Chiaty Outdoor',
    seoDescription:
      'Explore the CT-104 aluminum beach chair with 7 reclining positions and a lay-flat backrest. MOQ 200 pieces. Contact Chiaty Outdoor for OEM options and a quote.',
  },

  // CT-113 — 5-Position Aluminum Beach Chair with High Back and Armrests
  'ct-113': {
    itemNo: 'CT-113',
    gallery: ['/assets/images/products/ct113_1.jpg'],
    shortIntro:
      'The CT-113 is a five-position reclining beach chair with a high back, wide armrests and a blue-and-white striped seat and backrest. Its folding aluminum frame allows storage between outings. The chair weighs 3.5 kg and is available for wholesale orders from 200 pieces, with OEM customization available.',
    quoteNote:
      'Pricing depends on order quantity and customization requirements. Send us your requirements for a quotation.',
    description:
      'The CT-113 is a five-position reclining beach chair with a high back, wide armrests and a blue-and-white striped seat and backrest. Its folding aluminum frame allows storage between outings. The chair weighs 3.5 kg and is available for wholesale orders from 200 pieces, with OEM customization available.',
    sellingPoints: [
      { h: '5-Position Adjustable Backrest', p: 'Adjust the backrest across five positions to suit different seated and reclined preferences.' },
      { h: 'High-Back Design', p: 'The extended backrest provides a taller seating profile for relaxed outdoor use.' },
      { h: 'Wide Armrests', p: 'Wide armrests provide space to rest your forearms while sitting.' },
      { h: 'Aluminum Folding Frame', p: 'The aluminum frame folds for storage and transport between outdoor outings.' },
      { h: 'Blue-and-White Striped Design', p: 'Horizontal blue-and-white stripes give the seat and backrest a classic beach look.' },
    ],
    specs: [
      { k: 'Model', v: 'CT-113' },
      { k: 'Product Type', v: 'Folding Beach Chair' },
      { k: 'Frame Material', v: 'Aluminum' },
      { k: 'Dimensions', v: '56 × 60 × 41/91 cm' },
      { k: 'Product Weight', v: '3.5 kg (per chair)' },
      { k: 'Load Capacity', v: '120 kg' },
      { k: 'Minimum Order Quantity', v: '200 pieces' },
      { k: 'Sample Production Time', v: '3–5 days' },
      { k: 'Packing', v: '86 × 57 × 46.5 cm / 6 pieces' },
      { k: 'OEM Customization', v: 'Available' },
      { k: 'Color Options', v: 'Contact us to discuss available colors and customization requirements.' },
    ],
    customizationNote:
      'OEM customization is available for wholesale orders. Contact us to discuss color options and branding requirements; the minimum order quantity is 200 pieces.',
    inquiryPrompt:
      'Looking to source the CT-113 for your product range? Share your quantity, destination and branding requirements to receive a quotation.',
    seoTitle: '5-Position Aluminum Beach Chair CT-113 | Chiaty Outdoor',
    seoDescription:
      'Discover the CT-113 aluminum beach chair with 5 reclining positions, a high back and wide armrests. MOQ 200 pieces. Request a quote and discuss OEM options.',
  },

  // CT-117 — Blue and White Folding Webbed Lawn Chair with Armrests (steel frame)
  'ct-117': {
    itemNo: 'CT-117',
    gallery: ['/assets/images/products/ct117_1.jpg'],
    shortIntro:
      'The CT-117 is a folding webbed lawn chair with a steel frame, armrests and a blue-and-white woven seat and back. Interlaced straps create a classic outdoor look, with spaces between the straps allowing airflow. The chair weighs 3 kg and is available for wholesale orders from 200 pieces, with OEM customization available.',
    quoteNote:
      'Pricing depends on order quantity and customization requirements. Send us your requirements for a quotation.',
    description:
      'The CT-117 is a folding webbed lawn chair with a steel frame, armrests and a blue-and-white woven seat and back. Interlaced straps create a classic outdoor look, with spaces between the straps allowing airflow. The chair weighs 3 kg and is available for wholesale orders from 200 pieces, with OEM customization available.',
    sellingPoints: [
      { h: 'Woven Webbing Seat and Back', p: 'Interlaced straps form the seat and backrest, creating a distinctive woven pattern.' },
      { h: 'Blue-and-White Pattern', p: 'Blue straps with white detailing give the chair a classic outdoor look.' },
      { h: 'Folding Design', p: 'The chair folds for storage when not in use and for transport between locations.' },
      { h: 'Armrests on Both Sides', p: 'The chair includes armrests for resting your arms while seated.' },
      { h: 'Open-Weave Construction', p: 'Spaces between the woven straps allow airflow through the seat and back.' },
    ],
    specs: [
      { k: 'Model', v: 'CT-117' },
      { k: 'Product Type', v: 'Folding Webbed Lawn Chair' },
      { k: 'Frame Material', v: 'Steel' },
      { k: 'Dimensions', v: '58 × 57 × 78 cm' },
      { k: 'Product Weight', v: '3 kg (per chair)' },
      { k: 'Load Capacity', v: '120 kg' },
      { k: 'Minimum Order Quantity', v: '200 pieces' },
      { k: 'Sample Production Time', v: '3–5 days' },
      { k: 'Packing', v: '75.5 × 41 × 58.5 cm / 6 pieces' },
      { k: 'OEM Customization', v: 'Available' },
      { k: 'Color Options', v: 'Contact us to discuss available colors and customization requirements.' },
    ],
    customizationNote:
      'OEM customization is available for wholesale orders. Contact us to discuss color options and branding requirements; the minimum order quantity is 200 pieces.',
    inquiryPrompt:
      'Interested in the CT-117 woven design? Send us your order quantity, destination and customization requirements for a wholesale quotation.',
    seoTitle: 'Folding Webbed Lawn Chair CT-117 | Chiaty Outdoor',
    seoDescription:
      'Explore the CT-117 blue and white folding webbed lawn chair with a steel frame and armrests. MOQ 200 pieces. Contact us for wholesale pricing and OEM options.',
  },

  // CT-109A — Kids Folding Beach Chair with Umbrella – Ocean Animal Print (steel frame)
  'ct-109a': {
    itemNo: 'CT-109A',
    gallery: ['/assets/images/products/ct109a_1.jpg'],
    shortIntro:
      'The CT-109A is a kids folding beach chair with a clip-on umbrella and an ocean animal print seat. Built on a steel frame, it folds flat for transport and is sized for children at the beach, garden or park. The chair weighs 1.5 kg and is available for wholesale orders from 200 pieces, with OEM/ODM customization available.',
    quoteNote:
      'Pricing depends on order quantity and customization requirements. Send us your requirements for a quotation.',
    description:
      'The CT-109A is a kids folding beach chair with a clip-on umbrella and an ocean animal print seat. Built on a steel frame, it folds flat for transport and is sized for children at the beach, garden or park. The chair weighs 1.5 kg and is available for wholesale orders from 200 pieces, with OEM/ODM customization available.',
    sellingPoints: [
      { h: 'Child-sized beach seating', p: 'Compact 48 × 38 × 49 cm open size suits children for beach, garden and outdoor use.' },
      { h: 'Clip-on sun umbrella', p: 'An attached umbrella provides shade over the seat during outdoor use.' },
      { h: 'Ocean animal print', p: 'A colourful sea-creature print on the seat and back gives the chair a playful kids look.' },
      { h: 'Folds flat for transport', p: 'The steel frame folds flat so the chair packs easily into a car or beach bag.' },
      { h: 'Lightweight 1.5 kg', p: 'Light enough for parents to carry together with other beach gear.' },
      { h: 'Colour & brand customization', p: 'Custom colours are supported, with OEM/ODM branding available for wholesale orders.' },
    ],
    specs: [
      { k: 'Model', v: 'CT-109A' },
      { k: 'Product Type', v: 'Kids Folding Beach Chair with Umbrella' },
      { k: 'Frame Material', v: 'Steel' },
      { k: 'Open Size', v: '48 × 38 × 49 cm' },
      { k: 'Product Weight', v: '1.5 kg (per chair)' },
      { k: 'Load Capacity', v: '120 kg' },
      { k: 'Minimum Order Quantity', v: '200 pieces' },
      { k: 'Sample Lead Time', v: '3–5 days' },
      { k: 'Packaging', v: '49 × 38.5 × 55 cm / 10 pieces per carton' },
      { k: 'OEM / ODM', v: 'Available' },
      { k: 'Color Options', v: 'Custom colors supported. Contact us to discuss available colors and customization requirements.' },
    ],
    customizationNote:
      'Custom colors are supported and OEM/ODM branding is available for wholesale orders. Contact us to discuss colour options and branding requirements; the minimum order quantity is 200 pieces.',
    inquiryPrompt:
      'Interested in the CT-109A kids beach chair? Send us your order quantity, destination and customization requirements to request a wholesale quotation.',
    seoTitle: 'Kids Folding Beach Chair with Umbrella CT-109A | Chiaty Outdoor',
    seoDescription:
      'Explore the CT-109A kids folding beach chair with a clip-on umbrella and ocean animal print. Steel frame, MOQ 200 pieces. Contact Chiaty Outdoor for OEM/ODM options.',
  },

  // CT-609 — Folding Stool with Padded Seat – Red & Beige (steel frame)
  'ct-609': {
    itemNo: 'CT-609',
    gallery: [
      '/assets/images/products/ct609_1.jpg',
      '/assets/images/products/ct609_2.jpg',
      '/assets/images/products/ct609_3.jpg',
    ],
    galleryAlts: [
      'Red and beige folding stool with padded seat on a steel frame',
      'CT-609 folding stool packed in carry bag, size reference',
      'CT-609 folding stool packed in carry bag, size reference',
    ],
    shortIntro:
      'The CT-609 is a compact folding stool with a padded seat on a steel frame. Weighing 545 g and folding down to 26 × 12 × 6 cm, it is sized for fishing, camping, picnics and hiking where a light, packable seat is useful. It is available for wholesale orders from 200 pieces, with OEM/ODM customization available.',
    quoteNote:
      'Pricing depends on order quantity and customization requirements. Send us your requirements for a quotation.',
    description:
      'The CT-609 is a compact folding stool with a padded seat on a steel frame. Weighing 545 g and folding down to 26 × 12 × 6 cm, it is sized for fishing, camping, picnics and hiking where a light, packable seat is useful. It is available for wholesale orders from 200 pieces, with OEM/ODM customization available.',
    sellingPoints: [
      { h: 'Ultralight 545 g', p: 'At 545 g, the stool adds little weight to a backpack or tackle bag.' },
      { h: 'Compact folded size', p: 'Folds down to 26 × 12 × 6 cm and comes with a carry bag for storage and transport.' },
      { h: 'Padded seat', p: 'A padded seat surface gives a more comfortable sit than a bare fabric top.' },
      { h: 'For fishing, camping & picnics', p: 'A portable seat for fishing, camping, picnics, hiking and other outdoor activities.' },
      { h: 'Steel frame', p: 'The folding steel frame supports up to 120 kg.' },
      { h: 'Colour & brand customization', p: 'Custom colours are supported, with OEM/ODM branding available for wholesale orders.' },
    ],
    specs: [
      { k: 'Model', v: 'CT-609' },
      { k: 'Product Type', v: 'Folding Stool with Padded Seat' },
      { k: 'Frame Material', v: 'Steel' },
      { k: 'Open Size', v: '26 × 24 × 26 cm' },
      { k: 'Folded Size', v: '26 × 12 × 6 cm' },
      { k: 'Product Weight', v: '545 g (per stool)' },
      { k: 'Load Capacity', v: '120 kg' },
      { k: 'Minimum Order Quantity', v: '200 pieces' },
      { k: 'Sample Lead Time', v: '3–5 days' },
      { k: 'OEM / ODM', v: 'Available' },
      { k: 'Color Options', v: 'Custom colors supported. Contact us to discuss available colors and customization requirements.' },
    ],
    customizationNote:
      'Custom colors are supported and OEM/ODM branding is available for wholesale orders. Contact us to discuss colour options and branding requirements; the minimum order quantity is 200 pieces.',
    inquiryPrompt:
      'Interested in the CT-609 folding stool? Send us your order quantity, destination and customization requirements to request a wholesale quotation.',
    seoTitle: 'Folding Stool with Padded Seat CT-609 | Chiaty Outdoor',
    seoDescription:
      'Discover the CT-609 compact folding stool with a padded seat and steel frame. 545 g, folds to 26 × 12 × 6 cm, MOQ 200 pieces. Contact us for OEM/ODM options.',
  },
};
