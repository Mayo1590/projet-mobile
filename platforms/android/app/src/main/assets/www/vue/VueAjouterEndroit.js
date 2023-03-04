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

        console.log(image)
        let images = document.querySelector('[type=file]').files;
        console.log(images);
        //let data = new FormData();

        //for (let i = 0; i < images.length; i++) {
            //let image = images[i];

            //data.append('files[]', image);
        //}
        //console.log(data);

        this.actionAjouterEndroit(new Endroit(titre, description, images, null));
    }

}