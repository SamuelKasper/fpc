function calculate() {
  const fuelPrice = parseFloat(document.getElementById('fuelPrice').value);
  const distance = parseFloat(document.getElementById('distance').value);
  const consumption = parseFloat(document.getElementById('consumption').value);

  if (isNaN(fuelPrice) || isNaN(distance) || isNaN(consumption)) {
    document.getElementById('result').textContent = "Please fill out all fields correctly.";
    return;
  }

  const liters = (distance / 100) * consumption;
  const cost = liters * fuelPrice;

  document.getElementById('result').textContent = `Cost: ${cost.toFixed(2)} €`;
}
