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
};
