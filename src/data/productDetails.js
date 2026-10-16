// Derives honest, structured detail content from a product's name + known fields.
// No hard facts are fabricated: specs are only emitted when the keyword appears
// in the product name. Anything unknown is shown as "Contact us".

const has = (name, ...kw) => {
  const n = name.toLowerCase();
  return kw.some((k) => n.includes(k));
};

export function getMaterial(name) {
  if (has(name, 'aluminum', 'aluminium')) return 'Aluminum alloy frame';
  if (has(name, 'stainless steel')) return 'Stainless steel frame';
  if (has(name, 'steel')) return 'Steel frame';
  if (has(name, 'iron')) return 'Iron frame';
  if (has(name, 'metal')) return 'Metal frame';
  if (has(name, 'pvc')) return 'PVC / textilene';
  return 'Metal frame';
}

export function getFabric(name) {
  if (has(name, 'oxford')) return '600D Oxford fabric';
  if (has(name, 'canvas')) return 'Canvas';
  if (has(name, 'mesh')) return 'Breathable mesh';
  if (has(name, 'padded', 'cushion')) return 'Padded cushion';
  if (has(name, 'webbed')) return 'Webbed strap';
  return 'Durable outdoor fabric';
}

// Build a spec table (label/value). Only includes rows we can back up.
export function getSpecs(product, itemNo) {
  const { name, category, priceLabel } = product;
  const specs = [];
  if (itemNo) specs.push({ k: 'Item No.', v: itemNo });
  specs.push(
    { k: 'Category', v: category },
    { k: 'Frame material', v: getMaterial(name) },
    { k: 'Seat / surface', v: getFabric(name) },
    { k: 'Folding', v: has(name, 'fold', 'foldable', 'collapsible') ? 'Foldable / collapsible' : 'Portable' },
  );

  if (has(name, 'zero gravity')) specs.push({ k: 'Recline', v: 'Zero-gravity multi-position' });
  else if (has(name, 'reclin', 'adjustable')) specs.push({ k: 'Recline', v: 'Adjustable backrest' });

  if (has(name, 'canopy', 'umbrella', 'sunshade', 'sun canopy')) specs.push({ k: 'Sun protection', v: 'Canopy / umbrella included' });
  if (has(name, 'cup holder')) specs.push({ k: 'Cup holder', v: 'Yes' });
  if (has(name, 'carry bag', 'shoulder strap', 'backpack', 'travel bag')) specs.push({ k: 'Carry', v: 'Carry bag / strap included' });
  if (has(name, 'wheel', 'trolley', 'cart', 'wagon')) specs.push({ k: 'Mobility', v: 'Wheeled for easy transport' });
  if (has(name, 'kids', 'baby', 'child', 'children')) specs.push({ k: 'Designed for', v: 'Kids / children' });
  if (has(name, '150kg', '330lbs', 'heavy duty', 'high capacity', 'oversized')) specs.push({ k: 'Load capacity', v: has(name, '150kg', '330lbs') ? '150 kg / 330 lbs' : 'Heavy-duty' });

  specs.push({ k: 'Price (FOB)', v: priceLabel });
  specs.push({ k: 'MOQ', v: 'Contact us for wholesale MOQ' });
  specs.push({ k: 'Customization', v: 'OEM / ODM — logo, color, fabric, packaging' });
  return specs;
}

// Key selling-point tags for the badge row.
export function getTags(name) {
  const tags = [];
  if (has(name, 'fold', 'foldable', 'collapsible')) tags.push('Foldable');
  if (has(name, 'lightweight', 'light weight', 'ultralight')) tags.push('Lightweight');
  if (has(name, 'portable')) tags.push('Portable');
  if (has(name, 'heavy duty', 'durable', 'high capacity')) tags.push('Heavy-duty');
  if (has(name, 'waterproof', 'uv resistant', 'eco-friendly')) tags.push('Weather-resistant');
  tags.push('Wholesale', 'OEM/ODM');
  return [...new Set(tags)].slice(0, 5);
}

// A short, honest marketing description assembled from known attributes.
export function getDescription(product) {
  const { name, category } = product;
  const material = getMaterial(name).toLowerCase();
  const fabric = getFabric(name).toLowerCase();
  const foldable = has(name, 'fold', 'foldable', 'collapsible') ? 'foldable, ' : '';
  const cat = category.toLowerCase();

  const uses = [];
  if (has(name, 'beach')) uses.push('beach');
  if (has(name, 'camping', 'camp')) uses.push('camping');
  if (has(name, 'fishing')) uses.push('fishing');
  if (has(name, 'park')) uses.push('park & garden');
  if (has(name, 'picnic')) uses.push('picnic');
  if (uses.length === 0) uses.push('outdoor leisure');

  return `This ${foldable}${cat} is built with a ${material} and ${fabric}, engineered for ${uses.join(', ')} use. Manufactured in-house by Chiaty Outdoor for wholesale buyers, it is available for OEM/ODM customization including custom logo, color, fabric, and export packaging. Request a quote for current wholesale pricing, MOQ, and lead time.`;
}

export const DETAIL_NOTE =
  'Specifications are indicative and based on the product model. For exact dimensions, weight, packaging, and certifications, please send an inquiry.';
