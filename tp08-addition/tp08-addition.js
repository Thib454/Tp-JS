// EXERCICE ADDITION
window.onload = function () {
    document.querySelector("#btnAddition").addEventListener("click", function () {

        const val1 = document.querySelector("#nb1").value;
        const val2 = document.querySelector("#nb2").value;

        const nb1 = parseFloat(val1);
        const nb2 = parseFloat(val2);

        const zoneErreur = document.querySelector("#erreur");
        const zoneResultat = document.querySelector("#resultat");

        // Réinitialisation
        zoneErreur.style.display = "none";
        zoneResultat.textContent = "";

        // Vérification de la saisie
        if (isNaN(nb1) || isNaN(nb2)) {
            zoneErreur.style.display = "block";
            return;
        }

        // Affichage du résultat
        const resultat = nb1 + nb2;
        zoneResultat.textContent = "Le résultat de l'addition est : " + resultat;
    });
};