export function calculateAvailableStock(
  totalUnits: number,
  reservedUnits: number
) {
  return totalUnits - reservedUnits
}