class VueListeEndroitDetail{
    constructor(){
        this.listeEndroitDonnee = null;
    }

    initialiserListeEndroit(listeEndroitDonnee) {
        this.listeEndroitDonnee = listeEndroitDonnee;
    }

    afficher(listeEndroitDonnee) {
        this.listeEndroitDonnee = listeEndroitDonnee;
        let html = "";

        for(let numeroEndroit in this.listeEndroitDonnee){

            let titre = this.listeEndroitDonnee[numeroEndroit].titre;
            let description = this.listeEndroitDonnee[numeroEndroit].description;
            let image = this.listeEndroitDonnee[numeroEndroit].image;

            html += '<h1>' + titre + '</h1>';
            html += '<p class="mt-2 mb-5">' + description + '</p>';
            html += '<img class="img-fluid" src="' + image + '" alt=""/>';
        }
    
        document.getElementById("endroit").innerHTML = html;
    }
}