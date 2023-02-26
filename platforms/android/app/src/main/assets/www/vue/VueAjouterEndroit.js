class VueAjouterEndroit{
    constructor(){
        document.getElementById("formulaire-endroit").addEventListener("submit", evenement => this.enregistrer(evenement));
        this.actionAjouterEndroit = null;
    }

    initialiserActionAjouterEndroit(actionAjouterEndroit){
        this.actionAjouterEndroit = actionAjouterEndroit;
    }

    enregistrer(evenement) {
        console.log("enregistrer");
        evenement.preventDefault();

        let titre = document.getElementById("titre").value;
        let description = document.getElementById("description").value;

        let images = document.querySelector('[type=file]').files;
        let data = new FormData();

        for (let i = 0; i < images.length; i++) {
            let image = images[i];

            data.append('files[]', image);
        }

        this.actionAjouterEndroit(new Endroit(titre, description, data, null));
    }

}