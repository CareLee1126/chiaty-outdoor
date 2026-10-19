// Item numbers keyed by product id. Populated in bulk from your fill-in list.
// Any product not listed here simply shows no Item No.
export const itemNumbers = {
  'ct-302': 'CT-302',
  'ct-311a': 'CT-311A',
  'ct-311b': 'CT-311B',
};

// Resolve the item number for a product: explicit map wins, then override.itemNo.
export function getItemNo(product, override) {
  if (!product) return '';
  return itemNumbers[product.id] || override?.itemNo || '';
}
