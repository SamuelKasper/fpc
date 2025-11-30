function calculate() {
  const fuelPrice = parseFloat(document.getElementById('fuelPrice').value);
  const distance = parseFloat(document.getElementById('distance').value);
  const consumption = parseFloat(document.getElementById('consumption').value);
  const resultDiv = document.getElementById('result');

  if (isNaN(fuelPrice) || isNaN(distance) || isNaN(consumption)) {
    resultDiv.textContent = "Bitte alle Felder korrekt ausfüllen.";
    resultDiv.style.display = 'none'; // Hide result on error
    return;
  }

  const liters = (distance / 100) * consumption;
  const cost = liters * fuelPrice;

  resultDiv.textContent = `Kosten: ${cost.toFixed(2)} €`;
  resultDiv.style.display = 'block'; // Show result on success
}
