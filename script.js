document.getElementById('feedback-form').addEventListener('submit', function(event) {
  const equipe = document.getElementById('equipe').value;
  if (equipe === '') {
      alert('Veuillez renseigner votre équipe.');
      event.preventDefault(); // Empêche la soumission si le champ est vide
  }
});
