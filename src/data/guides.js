// Buyer Guides content. Written for overseas B2B buyers.
// Facts are drawn from the real Chiaty Outdoor factory profile (see data/company.js).
// Any value not yet confirmed is wrapped as a [TO CONFIRM: ...] placeholder so it is
// easy to find and edit later — do not replace these with invented numbers.
//
// Each guide:
//   slug, title (H1), seoTitle, seoDescription, cover, excerpt, readMins,
//   updated, breadcrumbLabel, relatedCategory, intro[], sections[{h, p[]}],
//   checklist[] (optional), faq[{q, a}]

export const PLACEHOLDER = '[TO CONFIRM]';

export const guides = [
  {
    slug: 'folding-camping-chair-supplier-china',
    title: 'How to Choose a Folding Camping Chair Supplier in China',
    seoTitle:
      'How to Choose a Folding Camping Chair Supplier in China (2026 Buyer Guide)',
    seoDescription:
      'A practical sourcing guide for importers: how to vet Chinese folding camping chair factories on capacity, materials, QC, OEM options, MOQ and lead time before you place an order.',
    cover: '/assets/images/products/guide-camping.jpg',
    excerpt:
      'What to check before you place an order — factory capability, material grades, quality control, customization and the questions that separate a real manufacturer from a trading company.',
    readMins: 8,
    updated: '2026-10',
    breadcrumbLabel: 'Choosing a Camping Chair Supplier',
    relatedCategory: 'Camping Chair',
    intro: [
      'Sourcing folding camping chairs from China can lower your landed cost significantly, but only if you pick the right factory. The gap between a well-run manufacturer and a reseller shows up later — in weld failures, fabric that fades after one season, or lead times that slip past your retail window.',
      'This guide walks through what overseas buyers should verify before committing to a supplier, using the way we work at Chiaty Outdoor as a reference point. The goal is simple: help you ask better questions and compare suppliers on the things that actually affect your order.',
    ],
    sections: [
      {
        h: 'Confirm you are talking to a real manufacturer',
        p: [
          'The first thing to establish is whether your contact actually owns production. A real factory can describe its own equipment, show you the workshop on a live video call, and give consistent answers about capacity and materials. Chiaty Outdoor is a direct manufacturer based in Jinhua, Zhejiang (Jinhua Jiading Leisure Co., Ltd.), established in 2017 and focused specifically on portable outdoor seating.',
          'Ask for a short walk-through video of the welding, cutting and assembly lines. Trading companies usually cannot provide this on request, while a factory can. Being focused on one product family — folding chairs and related outdoor furniture — also matters more than a catalog that lists hundreds of unrelated items.',
        ],
      },
      {
        h: 'Check materials and frame construction',
        p: [
          'Camping chair durability comes down to the frame and the fabric. Chiaty frames are built from aluminum or steel tube, paired with high-strength oxford fabric. Each material has trade-offs (covered in detail in our steel vs. aluminum guide), so ask the supplier which gauge and alloy they use and why.',
          'Request the fabric denier/weight and whether the coating is UV-resistant. For load rating, ask how the chair is tested and to what weight. At our factory, weld joints and hinges are load-tested for repeated fold cycles before assembly, but you should always confirm the specific tested figure for the model you are buying rather than accepting a generic claim.',
        ],
      },
      {
        h: 'Understand their quality control process',
        p: [
          'A credible supplier can describe QC as a sequence, not a slogan. Our process runs across four checkpoints: material sourcing inspection on intake, frame/weld load testing, fabric and stitching inspection, and a final random batch sampling with carton-count verification before container loading.',
          'Ask whether the factory supports third-party inspection (SGS, BV, Intertek) and factory audits — a manufacturer confident in its process will welcome it. Chiaty supports third-party inspection and factory audits, and lists ISO 9001, BSCI, SGS-tested and CE-compliant standards on its profile. Always request current certificate copies and verify the certificate numbers directly before relying on them.',
        ],
      },
      {
        h: 'Clarify OEM/ODM, MOQ and lead time up front',
        p: [
          'If you need your own logo, custom fabric colors, or branded packaging, confirm the supplier actually offers OEM/ODM in-house. Chiaty supports custom logo, fabric and packaging programs. Get the specifics in writing: minimum order quantity, sample policy, tooling or print setup fees, and the realistic production lead time for your quantity.',
          'Our published MOQ starts from 200 pieces per model, but the exact MOQ, sample cost and lead time depend on the model and your customization level — ask for a written quote per SKU. See our dedicated MOQ, lead time and OEM guide for how these numbers typically work.',
        ],
      },
    ],
    checklist: [
      'Is this a direct factory? (live workshop video, consistent capacity answers)',
      'Frame material, gauge/alloy, and tested load rating for the specific model',
      'Fabric weight/denier and UV-resistant coating confirmed',
      'Documented QC steps + willingness to accept third-party inspection',
      'Verified, current certificates (ISO 9001 / BSCI / SGS / CE)',
      'Written MOQ, sample policy, setup fees and lead time per SKU',
      'OEM/ODM scope: logo, fabric color, packaging',
    ],
    faq: [
      {
        q: 'How do I know if a camping chair supplier is a factory or a trading company?',
        a: 'Ask for a live video walk-through of the welding and assembly lines, confirm the registered company name and location, and check whether they focus on one product family. Chiaty Outdoor is a direct manufacturer (Jinhua Jiading Leisure Co., Ltd.) in Jinhua, Zhejiang, specializing in portable outdoor seating.',
      },
      {
        q: 'What certifications should a Chinese camping chair factory have?',
        a: 'Common ones for this category are ISO 9001 (quality management), BSCI (social compliance), plus SGS or CE testing for target markets. Chiaty lists ISO 9001, BSCI, SGS-tested and CE-compliant standards. Always request current certificate copies and verify the numbers before relying on them.',
      },
      {
        q: 'What is a typical MOQ for folding camping chairs?',
        a: 'Chiaty Outdoor\'s MOQ starts from 200 pieces per model. The exact figure depends on the model and how much customization you need, so request a written quote per SKU.',
      },
      {
        q: 'Can I get my own logo and packaging on the chairs?',
        a: 'Yes. Chiaty supports OEM/ODM with custom logo, fabric colors and branded packaging. Confirm setup fees and any added lead time for custom work in your written quote.',
      },
    ],
  },
  {
    slug: 'camping-chair-moq-lead-time-oem-customization',
    title: 'Camping Chair MOQ, Lead Time & OEM Customization',
    seoTitle: 'Camping Chair MOQ, Lead Time & OEM Customization — Buyer Guide',
    seoDescription:
      'How MOQ, production lead time and OEM/ODM customization work when sourcing folding camping and beach chairs from China — what drives the numbers and how to plan your order.',
    cover: '/assets/images/products/guide-cot.jpg',
    excerpt:
      'Understand how minimum order quantities, production timelines and customization options are set — and how to plan your purchase order around them.',
    readMins: 7,
    updated: '2026-10',
    breadcrumbLabel: 'MOQ, Lead Time & OEM',
    relatedCategory: 'Camping Chair',
    intro: [
      'MOQ, lead time and customization are the three numbers that shape almost every camping chair purchase order. Getting them clear up front prevents the most common sourcing surprises: an order that is smaller than the factory will run, or samples and production that take longer than your sales calendar allows.',
      'This guide explains what typically drives each of these figures when sourcing from a Chinese manufacturer, using Chiaty Outdoor\'s published terms as a reference. Exact numbers always depend on the model and your specifications, so treat these as a planning framework and confirm each figure in a written quote.',
    ],
    sections: [
      {
        h: 'How MOQ is set',
        p: [
          'Minimum order quantity exists because a factory sets up a production run — cutting fabric, prepping frames, and scheduling the line — and that setup only makes sense above a certain volume. Chiaty Outdoor\'s MOQ starts from 200 pieces per model.',
          'MOQ can shift based on fabric color, custom printing, or packaging requirements, since each custom element adds its own setup. If you want to combine several models in one order, ask whether the MOQ applies per model or per total order — it is usually per model, but confirm it for your specific mix.',
        ],
      },
      {
        h: 'What affects lead time',
        p: [
          'Production lead time depends on order quantity, how booked the factory line is at the time, and whether your order includes custom work. Stock-standard models move faster; custom fabric, printed logos or bespoke packaging add preparation time before the main run can start.',
          'Sample lead time is separate from bulk production and comes first. At Chiaty, standard samples typically take about 3-5 working days, while customized samples take around 7-10 working days. Once samples are approved, a bulk order of roughly 500-1,000 pieces usually runs about 30-35 days in production, followed by QC and loading. These are typical ranges — confirm the exact timeline for your specific models and quantity in writing, as it also depends on current factory loading and the level of customization.',
        ],
      },
      {
        h: 'OEM vs. ODM — what you can customize',
        p: [
          'OEM (you supply the design/branding) and ODM (you adapt the factory\'s existing models) are both supported at Chiaty. In practice, buyers most often customize: logo printing on fabric or carry bag, fabric color, and retail or export packaging. Chiaty has run custom logo, fabric and packaging programs since 2021.',
          'Each customization usually carries a one-time setup or tooling cost and may raise the effective MOQ for that element. Ask for these specifics per SKU: setup/print fee, color options available, packaging formats, and whether a pre-production sample is required before the bulk run.',
        ],
      },
      {
        h: 'Planning your purchase order',
        p: [
          'Work backwards from the date you need stock in your warehouse. Allow for sampling, bulk production, inspection and shipping transit. Building in buffer time protects you against the normal variability of custom orders and peak-season factory loading.',
          'Send the factory a clear brief: target models, quantity per model, customization needs, destination market and required in-hand date. Chiaty replies to inquiries within 24 hours with pricing and lead times, which makes it easier to lock your plan early.',
        ],
      },
    ],
    checklist: [
      'MOQ per model confirmed in writing (Chiaty: from 200 pcs)',
      'Does MOQ apply per model or per total order for your mix?',
      'Sample lead time and bulk lead time stated separately',
      'Customization setup/tooling fees per SKU',
      'Pre-production sample required before bulk? ',
      'Buffer time added for peak season and shipping transit',
    ],
    faq: [
      {
        q: 'What is the minimum order quantity for camping chairs at Chiaty Outdoor?',
        a: 'MOQ starts from 200 pieces per model. The exact minimum can vary with customization, so request a written quote for your specific models and specifications.',
      },
      {
        q: 'How long does production take?',
        a: 'At Chiaty, standard samples take about 3-5 working days and customized samples about 7-10 working days. After sample approval, a bulk order of roughly 500-1,000 pieces typically runs about 30-35 days, plus QC and loading. Final timing depends on quantity, current factory loading and customization, so confirm it in writing for your order.',
      },
      {
        q: 'What can I customize on a camping chair order?',
        a: 'Common OEM/ODM options at Chiaty include logo printing, fabric color and branded packaging. Each custom element may carry a setup fee and can affect the effective MOQ, so confirm these per SKU.',
      },
      {
        q: 'How fast does Chiaty respond to inquiries?',
        a: 'Chiaty Outdoor replies to inquiries within 24 hours with pricing and lead times.',
      },
    ],
  },
  {
    slug: 'steel-vs-aluminum-camping-chairs',
    title: 'Steel vs Aluminum Camping Chairs: Which Is Better for Your Market?',
    seoTitle: 'Steel vs Aluminum Camping Chairs: Which Is Better for Your Market?',
    seoDescription:
      'Steel vs aluminum folding camping chair frames compared on weight, strength, cost, corrosion resistance and best-fit markets — a sourcing guide for wholesale buyers and importers.',
    cover: '/assets/images/products/guide-beach.jpg',
    excerpt:
      'A side-by-side comparison of steel and aluminum frames — weight, strength, cost and corrosion resistance — to help you match the right chair to your target market.',
    readMins: 6,
    updated: '2026-10',
    breadcrumbLabel: 'Steel vs Aluminum',
    relatedCategory: 'Beach Chair',
    intro: [
      'One of the first decisions in a camping or beach chair order is frame material. Steel and aluminum both make durable chairs, but they behave differently on weight, cost and corrosion — and those differences map directly onto which market and price point the chair suits best.',
      'Chiaty Outdoor manufactures both steel-frame and aluminum-frame chairs, so this comparison is about matching the material to your buyers rather than selling one over the other. Here is how the two compare on the factors that matter for a wholesale order.',
    ],
    sections: [
      {
        h: 'Weight and portability',
        p: [
          'Aluminum is significantly lighter than steel, which makes aluminum-frame chairs easier to carry and ship. For backpacking, travel and premium portable lines where "lightweight" is a selling point, aluminum is usually the better fit.',
          'Steel is heavier, which some buyers actually prefer for stability in high-use settings. The weight difference also affects your freight cost per container, so it is worth factoring into landed cost — not just the unit price.',
        ],
      },
      {
        h: 'Strength and load capacity',
        p: [
          'Steel has high tensile strength and handles heavy, repeated use well, which suits oversized or heavy-duty models. Aluminum is strong for its weight and, with the right gauge and alloy, supports solid load ratings while staying light.',
          'The real answer is model-specific: load capacity depends on tube gauge, joint design and welding quality, not material alone. Ask for the tested load rating of the specific model you are considering rather than assuming one material is always stronger.',
        ],
      },
      {
        h: 'Corrosion resistance',
        p: [
          'Aluminum naturally resists rust, which is a real advantage for beach and poolside use where chairs meet salt air and moisture. This is why aluminum is a common choice for beach chair lines.',
          'Steel can rust if its protective coating is scratched or wears over time, so powder-coating quality matters for steel frames aimed at humid or coastal markets. For dry-climate camping and indoor-leaning use, well-coated steel performs well.',
        ],
      },
      {
        h: 'Cost and best-fit market',
        p: [
          'Steel frames are generally lower cost, which supports value-priced and promotional lines. Aluminum typically carries a higher material cost but enables a lighter, more premium product you can position at a higher retail price.',
          'A practical approach many buyers take: aluminum for lightweight/travel and beach ranges, steel for value lines and heavy-duty models. Chiaty can quote both so you can compare landed cost against your target retail price before deciding. The exact unit-price difference between steel and aluminum varies model by model, because each design uses a different amount and gauge of tube — so there is no single fixed premium. Share the specific models you are considering and we will quote both materials for a direct comparison.',
        ],
      },
    ],
    faq: [
      {
        q: 'Are aluminum camping chairs better than steel?',
        a: 'Neither is universally better. Aluminum is lighter and rust-resistant, which suits travel and beach lines; steel is lower cost and very strong, which suits value and heavy-duty models. The best choice depends on your target market and price point.',
      },
      {
        q: 'Which is cheaper, steel or aluminum chairs?',
        a: 'Steel frames are generally lower cost, making them common for value-priced and promotional lines. Aluminum usually costs more but enables a lighter, more premium product. Request a quote on both from Chiaty to compare landed cost.',
      },
      {
        q: 'Which frame is best for beach chairs?',
        a: 'Aluminum is a common choice for beach chairs because it naturally resists corrosion from salt air and moisture. Well powder-coated steel can also work, but coating quality becomes more important in coastal use.',
      },
      {
        q: 'Does Chiaty Outdoor make both steel and aluminum chairs?',
        a: 'Yes. Chiaty manufactures both steel-frame and aluminum-frame camping and beach chairs, and can quote either so you can match the material to your market.',
      },
    ],
  },
  {
    slug: 'high-back-vs-low-back-camping-chairs',
    title: 'High-Back vs. Low-Back Camping Chairs: A Guide for Wholesale Buyers',
    seoTitle: 'High-Back vs. Low-Back Camping Chairs | Wholesale Buyer Guide',
    seoDescription:
      'Compare high-back and low-back camping chairs for wholesale: comfort, portability, target market, customization and sourcing considerations.',
    cover: '/assets/images/products/guide-highlow-cover.jpg',
    excerpt:
      'Choosing between high-back and low-back camping chairs affects your target customer, container loading, price positioning and repeat-order potential. A practical guide to building the right product mix.',
    readMins: 7,
    updated: '2026-10',
    breadcrumbLabel: 'High-Back vs. Low-Back Camping Chairs',
    relatedCategory: 'Camping Chair',
    intro: [
      'For wholesale buyers, choosing between high-back and low-back camping chairs is not only a design decision. It affects your target customer, container loading, price positioning, retail display and repeat-order potential.',
      'Both styles are popular, but they serve different outdoor occasions. This guide helps importers, distributors and retailers choose the right product mix.',
    ],
    sections: [
      {
        h: 'What Is a High-Back Camping Chair?',
        blocks: [
          { type: 'p', text: 'A high-back camping chair provides support for the upper back, shoulders and sometimes the head. It is designed for longer periods of sitting and a more relaxed outdoor experience.' },
          { type: 'img', src: '/assets/images/products/ct311b_1.jpg', alt: 'High-back folding camping chair with headrest and aluminum frame' },
          { type: 'p', text: 'High-back chairs are commonly selected for:' },
          { type: 'ul', items: [
            'Camping and caravan use',
            'Beach holidays',
            'Glamping and leisure resorts',
            'Older consumers or comfort-focused buyers',
            'Premium outdoor retail collections',
          ] },
          { type: 'h3', text: 'Key advantages' },
          { type: 'ul', items: [
            'Better upper-back and neck support',
            'More comfortable for long sitting periods',
            'Stronger premium appearance at retail',
            'More space for features such as head pillows, cup holders or side pockets',
          ] },
          { type: 'h3', text: 'Things to consider' },
          { type: 'p', text: 'A high-back chair usually uses more fabric and frame material. It may be heavier and take up more space when packed. Buyers should check folded size, carton dimensions and loading quantity before placing an order.' },
        ],
      },
      {
        h: 'What Is a Low-Back Camping Chair?',
        blocks: [
          { type: 'p', text: 'A low-back camping chair has a shorter backrest and a more compact profile. It is often chosen for portability, quick setup and outdoor activities where users move frequently.' },
          { type: 'img', src: '/assets/images/products/ct311a_1.jpg', alt: 'Compact low-back folding camping chair with mesh panels and aluminum frame' },
          { type: 'p', text: 'Low-back chairs are commonly selected for:' },
          { type: 'ul', items: [
            'Hiking and backpacking',
            'Music festivals',
            'Fishing trips',
            'Picnics and day trips',
            'Value-oriented retail promotions',
          ] },
          { type: 'h3', text: 'Key advantages' },
          { type: 'ul', items: [
            'Lightweight and easy to carry',
            'Smaller packed size',
            'Suitable for customers who value portability',
            'Often easier to position at an entry-level price point',
          ] },
          { type: 'h3', text: 'Things to consider' },
          { type: 'p', text: 'Low-back chairs offer less support for the shoulders and head. They are best suited to shorter breaks or active outdoor use rather than extended lounging.' },
        ],
      },
      {
        h: 'High-Back vs. Low-Back: Key Comparison for Buyers',
        blocks: [
          { type: 'table',
            headers: ['Factor', 'High-Back Camping Chair', 'Low-Back Camping Chair'],
            rows: [
              ['Comfort', 'Higher support for long sitting', 'Best for short breaks and active use'],
              ['Portability', 'Usually larger and heavier', 'Usually lighter and more compact'],
              ['Retail Positioning', 'Mid-range to premium', 'Entry-level to mid-range'],
              ['Target Customer', 'Camping, beach, leisure, glamping', 'Hiking, festivals, picnics, fishing'],
              ['Customization Space', 'More visible fabric area for branding', 'Compact and simple branding options'],
              ['Loading Efficiency', 'Check carton size carefully', 'Often easier for compact packing'],
            ],
          },
        ],
      },
      {
        h: 'How Wholesale Buyers Should Choose',
        blocks: [
          { type: 'p', text: 'Before selecting a chair style, ask these questions:' },
          { type: 'ol', items: [
            { h: 'Who is your main customer?', p: 'Comfort-focused camping and beach customers may prefer high-back models. Active and price-sensitive customers may prefer low-back models.' },
            { h: 'What is your sales channel?', p: 'Specialty outdoor stores may sell premium high-back chairs well. Supermarkets, promotional campaigns and online marketplaces may need compact, value-focused low-back models.' },
            { h: 'What is your target retail price?', p: 'The chair design, fabric, frame, accessories and packaging should match your expected retail position.' },
            { h: 'How important is container loading?', p: 'Always compare folded dimensions, carton size and quantity per container. A compact chair may offer stronger logistics efficiency.' },
            { h: 'Do you need customization?', p: 'Consider logo printing, fabric color, carry bag design, hangtags, carton artwork and packaging requirements early in the sourcing process.' },
          ] },
        ],
      },
      {
        h: 'A Practical Product-Mix Recommendation',
        blocks: [
          { type: 'p', text: 'For many wholesale buyers, the best approach is not choosing only one style. A balanced collection can include:' },
          { type: 'ul', items: [
            'One compact low-back model for entry-level or promotional sales',
            'One durable mid-range camping chair for general outdoor use',
            'One high-back comfort model for beach, camping or premium retail customers',
          ] },
          { type: 'p', text: 'This gives your customers more choice while allowing you to serve different price points.' },
        ],
      },
      {
        h: 'Questions to Ask Your Camping Chair Supplier',
        blocks: [
          { type: 'p', text: 'Before confirming an order, request:' },
          { type: 'ul', items: [
            'Frame material and tube specification',
            'Fabric type and fabric weight',
            'Product dimensions and folded dimensions',
            'Product weight and recommended load capacity',
            'MOQ by color or model',
            'Sample time and production lead time',
            'Packaging method and carton dimensions',
            'Available logo, color and packaging options',
            'Product photos and quality inspection details',
          ] },
        ],
      },
      {
        h: 'Need Help Selecting the Right Model?',
        blocks: [
          { type: 'p', text: 'Chiaty Outdoor supports wholesale buyers looking for folding camping chairs, beach chairs and outdoor furniture with OEM/ODM options. Contact us on WhatsApp to request product specifications, catalogue, MOQ and customization options.' },
        ],
      },
    ],
    faq: [
      {
        q: 'Are high-back or low-back camping chairs better for wholesale?',
        a: 'Neither is universally better — it depends on your market. High-back chairs suit comfort-focused camping, beach and glamping customers and premium retail, while low-back chairs suit hiking, festivals, picnics and value-oriented promotions. Many buyers stock both to cover different price points.',
      },
      {
        q: 'Which camping chair style is more portable?',
        a: 'Low-back chairs are usually lighter and pack smaller, which makes them more portable and often more efficient for container loading. High-back chairs use more fabric and frame material, so always compare folded size and carton dimensions before ordering.',
      },
      {
        q: 'What product mix should a wholesale buyer stock?',
        a: 'A balanced range often works best: one compact low-back model for entry-level or promotional sales, one durable mid-range camping chair for general use, and one high-back comfort model for beach, camping or premium retail. This serves multiple customer types and price points.',
      },
      {
        q: 'Can Chiaty Outdoor customize both high-back and low-back chairs?',
        a: 'Yes. Chiaty offers OEM/ODM on both styles — including logo printing, fabric color, carry bag design and packaging. Share your target models and customization needs to request a quote.',
      },
    ],
  },
];
