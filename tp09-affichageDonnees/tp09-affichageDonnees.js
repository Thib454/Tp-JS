function loadCountries() {
    // 1. Création de l'objet XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // 2. Configuration de la requête GET avec l'URL v3.1
    xhr.open("GET", "https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population", true);

    // 3. Fonction appelée lorsque l'état de la requête change
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) { // La requête est terminée
            if (xhr.status === 200) { // Succès
                try {
                    // 4. Conversion de la réponse JSON en objet JavaScript
                    var countries = JSON.parse(xhr.responseText);

                    // 5. Récupération de la div où afficher les pays
                    var countriesDiv = document.getElementById("countries");
                    countriesDiv.innerHTML = ""; // Vider le contenu précédent

                    // 6. Parcours des données et affichage
                    countries.forEach(function (country) {
                        var countryDiv = document.createElement("div");
                        countryDiv.className = "country";

                        // 7. Affichage des données (adapté à l'API v3.1)
                        countryDiv.innerHTML = `
                            <img src="${country.flags.png}" alt="Drapeau de ${country.name.common}">
                            <h2>${country.name.common}</h2>
                            <p><strong>Capitale :</strong> ${country.capital ? country.capital[0] : "N/A"}</p>
                            <p><strong>Région :</strong> ${country.region}</p>
                            <p><strong>Population :</strong> ${country.population.toLocaleString()}</p>
                        `;
                        countriesDiv.appendChild(countryDiv);
                    });
                } catch (error) {
                    console.error("Erreur lors du parsing JSON :", error);
                    document.getElementById("countries").innerHTML =
                        "<p>Erreur lors du traitement des données.</p>";
                }
            } else {
                // 8. Gestion des erreurs HTTP
                document.getElementById("countries").innerHTML =
                    "<p>Erreur " + xhr.status + " : " + xhr.statusText + "</p>";
            }
        }
    };

    // 9. Gestion des erreurs réseau
    xhr.onerror = function () {
        document.getElementById("countries").innerHTML =
            "<p>Une erreur réseau est survenue.</p>";
    };

    // 10. Envoi de la requête
    xhr.send();
}
