class VueAjouterEndroit{
    constructor(){
        document.getElementById("formulaire-endroit").addEventListener("submit", evenement => this.enregistrer(evenement));
        this.actionAjouterEndroit = null;
    }

    initialiserActionAjouterEndroit(actionAjouterEndroit){
        this.actionAjouterEndroit = actionAjouterEndroit;
    }

    enregistrer(evenement) {
        evenement.preventDefault();

        let titre = document.getElementById("titre").value;
        let description = document.getElementById("description").value;
        let ville = document.getElementById("ville").value;

        let images = document.querySelector('[type=file]').files;

        this.actionAjouterEndroit(new Endroit(titre, description, images, ville, null));
    }

}