window.onload = function () {

    const url = "https://digicode.cleverapps.io/json/pays/pollution";

    const titre = document.getElementById("titre");
    const annee = document.getElementById("annee");
    const corps = document.getElementById("corps");

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(`Erreur HTTP : ${response.status}`);
            return response.json();
        })
        .then(data => {

            console.log("Données reçues :", data);

            // TITRE ET ANNEE
            titre.textContent = `Pollution en ${data.polluant ?? "inconnu"}`;
            annee.textContent = "Année : " + (data.annee ?? "Non spécifiée");

            const paysListe = data.pays ?? [];

            if (paysListe.length === 0) {
                let ligne = document.createElement("tr");
                let col = document.createElement("td");
                col.colSpan = 3;
                col.textContent = "Aucune donnée disponible.";
                ligne.appendChild(col);
                corps.appendChild(ligne);
                return;
            }

            paysListe.forEach(pays => {
                let ligne = document.createElement("tr");

                let colNom = document.createElement("td");
                colNom.textContent = pays.nom ?? "-";

                let colValeur = document.createElement("td");
                colValeur.textContent = pays.valeur ?? "-";

                let colPourcentage = document.createElement("td");
                colPourcentage.textContent = pays.pourcentage ?? "-";

                ligne.appendChild(colNom);
                ligne.appendChild(colValeur);
                ligne.appendChild(colPourcentage);

                corps.appendChild(ligne);
            });

        })
        .catch(error => {
            console.error("Erreur lors de la récupération des données :", error);

            let ligne = document.createElement("tr");
            let col = document.createElement("td");
            col.colSpan = 3;
            col.textContent = "Impossible de récupérer les données.";
            ligne.appendChild(col);
            corps.appendChild(ligne);
        });
};
