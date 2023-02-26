class VueAjouterImage{
    constructor(){
        //document.getElementById("formulaire-endroit").addEventListener("submit", evenement => this.enregistrer(evenement));
        this.actionAjouterImage = null;
    }

    initialiserActionAjouterImage(actionAjouterImage){
        this.actionAjouterImage = actionAjouterImage;
    }

    enregistrer(evenement) {
        console.log("enregistrer");
        evenement.preventDefault();

        

        this.actionAjouterImage(new Images(data, null, null));
    }

}