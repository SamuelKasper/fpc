function berechnen() {
  const tankpreis = parseFloat(document.getElementById('tankpreis').value);
  const strecke = parseFloat(document.getElementById('strecke').value);
  const verbrauch = parseFloat(document.getElementById('verbrauch').value);

  if (isNaN(tankpreis) || isNaN(strecke) || isNaN(verbrauch)) {
    document.getElementById('result').textContent = "Bitte alle Felder korrekt ausfüllen.";
    return;
  }

  const liter = (strecke / 100) * verbrauch;
  const kosten = liter * tankpreis;

  document.getElementById('result').textContent = `Kosten: ${kosten.toFixed(2)} €`;
}
