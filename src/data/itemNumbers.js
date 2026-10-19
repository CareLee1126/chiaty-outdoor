// Model numbers keyed by product id (source of truth: 独立站产品明细.xlsx — id column).
// Matched to site products by exact product id. Any product not listed shows no model.
export const itemNumbers = {
  // New reference products (do not alter)
  'ct-302': 'CT-302',
  'ct-311a': 'CT-311A',
  'ct-311b': 'CT-311B',
  // Beach chairs
  '62014654854': 'CT-122',
  '62319384598': 'CT-103',
  '62319573835': 'CT-103',
  '62327373721': 'CT-101',
  '62330009581': 'CT-322',
  '62331147027': 'CT-322',
  '62324292684': 'CT-124',
  '62326222108': 'CT-121',
  '62330510567': 'CT-121',
  '62324193889': 'CT-121',
  '62327907136': 'CT-111',
  '62330758389': 'CT-210A',
  '62331132604': 'CT-124',
  '62015004831': 'CT-103',
  // Folding beds
  '62329567699': 'CT-207',
  '62319391852': 'CT-202',
  '62323395163': 'CT-201',
  '62330256331': 'CT-206',
  '62329437716': 'CT-207',
  // Camping chairs
  '62324169808': 'CT-319',
  '62328040808': 'CT-308',
  '62328437372': 'CT-309A',
  '62329200566': 'CT-313',
  '62329805492': 'CT-305',
  '62330112268': 'CT-319',
  '62330251332': 'CT-316B',
  '62331449271': 'CT-309A',
  '62324587636': 'CT-316A',
  '62329954396': 'CT-316A',
  '62330179469': 'CT-318',
  '62319367801': 'CT-304',
  // Director chairs
  '62328999011': 'CT-402',
  '62331446681': 'CT-402',
  '62319729752': 'CT-402',
  '62330602118': 'CT-403',
  '62331101182': 'CT-403',
  // Folding tables
  '62330412372': 'CT-502',
  '62014417398': 'CT-502',
  '62320152380': 'CT-513',
  '62323608335': 'CT-510',
  '62324174799': 'CT-502',
  '62324995665': 'CT-513',
  '62328931259': 'CT-510',
  '62330121867': 'CT-513',
  '62330160620': 'CT-513',
  // Fishing chairs
  '62321081175': 'CT-607',
  '62329951995': 'CT-601',
  // Wagon carts
  '62329805555': 'CT-125',
  '62330138658': 'CT-125',
  // Coolers
  '62331103216': 'CT-610',
};

// Resolve the model number for a product: explicit map wins, then override.itemNo.
export function getItemNo(product, override) {
  if (!product) return '';
  return itemNumbers[product.id] || override?.itemNo || '';
}
