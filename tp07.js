// EXERCICE PLUSGRANDEDATE
function plusGrandeDate(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
 
  if (isNaN(d1) || isNaN(d2)) {
    console.log("Une des dates est invalide.");
    return;
  }
 
  if (d1 > d2) {
    console.log(`${date1} est la plus récente.`);
  } else if (d2 > d1) {
    console.log(`${date2} est la plus récente.`);
  } else {
    console.log("Les deux dates sont identiques.");
  }
}

plusGrandeDate("2023-05-10", "2024-01-01");

//EXERCICE CALCULERAGE
function calculerAge(dateNaissance) {
  const naissance = new Date(dateNaissance);
  const maintenant = new Date();
 
  if (isNaN(naissance)) {
    console.log("Date de naissance invalide.");
    return;
  }
 
  let annees = maintenant.getFullYear() - naissance.getFullYear();
  let mois = maintenant.getMonth() - naissance.getMonth();
 
  // Ajustement si le mois actuel est avant le mois de naissance
  if (mois < 0) {
    annees--;
    mois += 12;
  }
 
  console.log(`Vous avez ${annees} ans et ${mois} mois.`);
}

calculerAge("2000-01-01");