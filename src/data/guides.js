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
];
