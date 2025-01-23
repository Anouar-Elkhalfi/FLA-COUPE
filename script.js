document.getElementById('match-form').addEventListener('submit', function(event) {
  let formIsValid = true; // Validation globale du formulaire

  // Récupérer les valeurs des champs
  const refereeName = document.getElementById('referee-name').value;
  const matchName = document.getElementById('match-name').value;
  const matchScore = document.getElementById('match-score').value;

  // Vérification des champs vides
  if (refereeName === '' || matchName === '' || matchScore === '') {
      alert('Veuillez remplir tous les champs avant de soumettre.');
      formIsValid = false;
      event.preventDefault(); // Empêche la soumission
  }

  // Si tout est valide, afficher un message de remerciement
  if (formIsValid) {
      document.getElementById('match-form').style.display = 'none';
      document.getElementById('merci-message').style.display = 'block';
  }
});
