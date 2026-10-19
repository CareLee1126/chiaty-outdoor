// Factory & Quality page content — REAL, user-provided assets only.
// Do NOT add AI-generated factory images, fabricated certificates, client cases,
// or unverifiable figures (floor area, headcount, annual output, export countries).

export const factoryVideo = {
  src: '/assets/factory/factory-tour.mp4',
  poster: '/assets/factory/factory-cover.jpg',
  alt: 'Chiaty Outdoor factory production line in Jinhua, China',
};

// Image shown beside the "Built for Wholesale & Custom Projects" capability intro.
export const capabilityImage = {
  img: '/assets/factory/capability-workers.jpg',
  alt: 'Chiaty Outdoor factory team gathered outside the production building in Jinhua, China',
};

// Production process steps. Only steps WITH a real uploaded photo are listed here;
// any step without a corresponding photo is omitted entirely (never fabricated).
// Shape: { title, caption, images: [{ src, alt }] }
export const productionSteps = [
  {
    title: 'Tube Cutting & Frame Production',
    caption:
      'Metal tubes are cut to length and then bent and formed on dedicated machines to produce the frame components for our outdoor furniture.',
    images: [
      {
        src: '/assets/factory/step-tube-cutting.jpg',
        alt: 'Metal tubes stacked on a cutting rack in the Chiaty Outdoor factory frame workshop',
      },
      {
        src: '/assets/factory/step-frame-production.jpg',
        alt: 'Worker operating a tube-bending machine to shape outdoor furniture frames',
      },
    ],
  },
  {
    title: 'Fabric Cutting & Sewing',
    caption:
      'Oxford fabric is cut into panels in batches to keep pieces consistent, then stitched into seats and covers in our sewing workshop.',
    images: [
      {
        src: '/assets/factory/step-fabric-cutting.jpg',
        alt: 'Worker handling stacks of cut oxford fabric panels at a fabric cutting press',
      },
      {
        src: '/assets/factory/step-sewing.jpg',
        alt: 'Sewing workshop with workers stitching outdoor chair fabric at industrial sewing machines',
      },
    ],
  },
  {
    title: 'Load Capacity & Quality Inspection',
    caption:
      'Assembled chairs are load-tested with weighted bags and checked on the line for frame stability, folding action, stitching and overall finish.',
    images: [
      {
        src: '/assets/factory/step-load-test.jpg',
        alt: 'Folding camping chair under a weighted load test to check load capacity',
      },
      {
        src: '/assets/factory/step-quality.jpg',
        alt: 'Assembly and quality inspection area with finished folding chairs on the production line',
      },
    ],
  },
  {
    title: 'Packaging',
    caption:
      'Inspected products are folded, bagged and boxed, with flat-pack cartons prepared for each order.',
    images: [
      {
        src: '/assets/factory/step-packaging.jpg',
        alt: 'Packaging area with folded chairs and cartons prepared for shipment',
      },
    ],
  },
  {
    title: 'Container Loading',
    caption:
      'Cartons are palletized and loaded into shipping containers for export to our wholesale and OEM/ODM customers.',
    images: [
      {
        src: '/assets/factory/step-container.jpg',
        alt: 'Export cartons stacked on pallets inside a shipping container ready for loading',
      },
    ],
  },
];

// Quality control & OEM customization gallery. Real photos only; may reuse step images.
// Shape: { img, alt, caption }
export const qualityCustomization = [
  {
    img: '/assets/factory/step-quality.jpg',
    alt: 'Quality inspection line with finished folding chairs being checked',
    caption:
      'In-line and final inspection: frame stability, folding action, stitching and finish are checked before packing.',
  },
  {
    img: '/assets/factory/qc-powder-coating.jpg',
    alt: 'Powder coating line with chair frames hung for color coating in the factory',
    caption:
      'Frames run through our powder-coating line, so frame colors can be customized to your requirements.',
  },
  {
    img: '/assets/factory/step-sewing.jpg',
    alt: 'Sewing workshop stitching outdoor chair fabric',
    caption:
      'Fabric, color, logo and label options are produced in-house in our cutting and sewing workshop.',
  },
];
