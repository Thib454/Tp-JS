// EXERCICE FONCTIONCONSTANTE
function fonctionConstante() {
    return 33;
}
const resultat = fonctionConstante();
console.log(resultat);

// EXERCICE BONJOURUNTEL
function direBonjour(nom) {
    console.log("Bonjour " + nom);
}
direBonjour("Igor");

// EXERCICE FONCTIONCALCUL
function calculer(a, b) {
    return a * b + a + b;
}
const total = calculer(3, 4);
console.log(total);

// EXERCICE FONCTIONCONTROLETABLEAU
function tableauContientQueDesNombres(tableau) {

    if (tableau.length === 0) {
        return false;
    }

    for (let element of tableau) {
        if (typeof element !== 'number' || isNaN(element)) {
            return false;
        }
    }
    return true;
}
const tableauNombres = [1, 2, 3, 4.5, -10];
console.log(tableauContientQueDesNombres(tableauNombres));

const tableauMixte = [1, 2, "3", 4];
console.log(tableauContientQueDesNombres(tableauMixte));

const tableauVide = [];
console.log(tableauContientQueDesNombres(tableauVide));

// EXERCICE FONCTIONMOYENNE
function calculerMoyenne(tableau) {
    // Vérifier si l'argument est un tableau
    if (!Array.isArray(tableau)) {
        return "Erreur : l'entrée n'est pas un tableau"
    }
}

console.log(calculerMoyenne("bonjour"))