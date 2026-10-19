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
};
