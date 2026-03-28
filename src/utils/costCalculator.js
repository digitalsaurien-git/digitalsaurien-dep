export function calculateDailyCost(watts, hoursPerDay, kwhPrice) {
  if (!watts || !hoursPerDay || !kwhPrice) return 0;
  // (Watts * Heures) / 1000 = KWh consommés par jour
  const kwh = (watts * hoursPerDay) / 1000;
  return kwh * kwhPrice;
}

export function calculateMonthlyCost(dailyCost) {
  return dailyCost * 30.416; // average days in month
}

export function formatCurrency(amount) {
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(amount);
}
