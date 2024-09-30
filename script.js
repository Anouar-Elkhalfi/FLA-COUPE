document.getElementById('feedback-form').addEventListener('submit', function(event) {
  let formIsValid = true; // Utilisé pour déterminer si on peut soumettre

  const equipe = document.getElementById('equipe').value;

  // Vérification du champ "équipe"
  if (equipe === '') {
      alert('Veuillez renseigner votre équipe.');
      formIsValid = false;
      event.preventDefault(); // Empêche la soumission si le champ est vide
  }

  // Vérification de la présence 30 min avant le match
  const presence = document.querySelector('input[name="presence"]:checked');
  if (presence && presence.value === 'non') {
      const arriveeHeure = document.getElementById('arrivee-heure').value;
      if (arriveeHeure === '') {
          alert("Veuillez indiquer l'heure d'arrivée de l'arbitre.");
          formIsValid = false;
          event.preventDefault(); // Empêche la soumission si l'heure d'arrivée n'est pas renseignée
      }
  }

  // Si toutes les validations passent, le formulaire est soumis
  if (formIsValid) {
      document.getElementById('feedback-form').submit(); // Soumission du formulaire
      document.getElementById('feedback-form').style.display = 'none';
      document.getElementById('merci-message').style.display = 'block';
  }
});

// Afficher le champ pour l'heure d'arrivée si l'arbitre n'est pas arrivé 30 minutes avant
document.querySelectorAll('input[name="presence"]').forEach((elem) => {
  elem.addEventListener('change', function(event) {
      const presenceValue = event.target.value;
      if (presenceValue === 'non') {
          document.getElementById('heure-arrivee').style.display = 'block';
      } else {
          document.getElementById('heure-arrivee').style.display = 'none';
      }
  });
});
