const prompt = require("prompt-sync")();
let Quitter = false; 
let resultat;
let tableAfficher = [
  { id: 1, description: "Apprendre JavaScript", isDone: true },
  { id: 2, description: "Faire les devoirs", isDone: false },
];
let NumeroOption;
console.log(
  "**** To-Do List ****\n 1. Afficher les tâches\n 2. Ajouter une tâche\n 3. Rechercher une tâche\n 4. Modifier une tâche\n 5. Supprimer une tâche\n 6. Marquer une tâche comme terminée\n 7. Afficher tâches terminées / en attente\n 0. Quitter  "
);
function AfficherTache() {
  tableAfficher.forEach((tableAfficher) => {
    console.log(
      tableAfficher.id +
        "." +
        " " +
        tableAfficher.description +
        ": " +
        tableAfficher.isDone
    );
  });
}

function AjouterTache() {
  let Description = prompt("Entrez la description de la tache: ");
  tableAfficher.push({
    id: tableAfficher.length + 1,
    description: Description,
    isDone: false,
  });
  console.log("Tâche ajoutée avec succès !");
}

function Rechercher() {
  let Description = prompt("Entrez la description de la tache: ");
  let status = "Tache terminee"
  if (
    tableAfficher.find(({ description }) => description == Description) ==
    undefined
  ) {
    console.log("Tache inexistante! ");
    Rechercher();
  } else {
    resultat= tableAfficher.find(({ description }) => description == Description) ;
    
    if(resultat.isDone == false){
        status = "En attent"
    }
    console.log(resultat.id +". "+resultat.description + " "+status);
  }
}
function rechercherTache(){
    Rechercher();
};
function Modifier(){
rechercherTache();
let nouvelledesc = prompt("Modifier la tache: ");
tableAfficher.find(({ id }) => id == resultat.id).description = nouvelledesc;
console.log("Tâche modifiée avec succès !");
}
 function Supprimer(){
    rechercherTache();
    console.log("vous etes sure?\n 1: Supprimer/ 0:Quitter");
    let verifier = Number(prompt(": "));
    if (verifier==1){
        tableAfficher.splice(resultat.id-1, 1)
        console.log("Tache supprimé avec succes!")
    }
 };
 function MarquerTache(){
    rechercherTache();
     if (resultat.isDone) {
    console.log("Tâche terminée");
    console.log("Entrez 1 pour mettre en attente et 0 pour quitter");
    let num = Number(prompt(": "));
    if (num == 1) {
      tableAfficher.find(({ id }) => id == resullat.id).isDone = false;
      console.log("Tâche en attente");
    }
  } else {
    console.log("Tâche en attente");
    console.log("Entrez 1 pour marquer comme terminé et 0 pour quitter");
    let num = Number(prompt(": "));
    if (num == 1) {
      tableAfficher.find(({ id }) => id == resultat.id).isDone = true;
      console.log("Tâche terminée");
    }
  }

 };

do {
  NumeroOption = Number(
    prompt("Veuillez saisir le nombre approprié pour l'option requis: ")
  );

  switch (NumeroOption) {
    case 1:
      AfficherTache();
      break;
    case 2:
      AjouterTache();
      break;
    case 3:
      rechercherTache();
      break;
    case 4:
      Modifier();
      break;
    case 5:
      Supprimer();
      break;
    case 6:
      MarquerTache();
      break;
    case 7:
      AfficherCasTache();
      break;
      break;
    default:
      console.log("Entrez un numero correct! ");
      break;
  }
} while (NumeroOption !== 0);
