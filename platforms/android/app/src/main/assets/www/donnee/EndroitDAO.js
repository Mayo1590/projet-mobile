class EndroitDAO {
    constructor(){
        this.listeEndroit = [];
        this.listeEndroitDetail = [];
        this.vueListeEndroitDetail = new VueListeEndroitDetail();
    }

    lister(){
        let requette = new XMLHttpRequest();
        
        if(!requette){
            return null;
        }
        requette.open('GET', "https://spot.mayalennox.com/lister-endroit.php", true);
        requette.send();
        requette.onreadystatechange = () => {
            if(requette.readyState == 4 && requette.status == 200){
                let liste = JSON.parse(requette.responseText);
                for(let i in liste){
                    this.listeEndroit[i] = liste[i];
                }

                this.vueListeEndroit = new VueListeEndroit();
                this.vueListeEndroit.afficher(this.listeEndroit);
            }
        }
    }

    listerDetail(id){
        let requette = new XMLHttpRequest();
        
        if(!requette){
            return null;
        }
        requette.open('GET', "https://spot.mayalennox.com/lister-detail-endroit.php?id=" + id, true);
        requette.send();
        requette.onreadystatechange = () => {
            if(requette.readyState == 4 && requette.status == 200){

                let liste = JSON.parse(requette.responseText);

                for(let i in liste){
                    this.listeEndroitDetail[i] = liste[i];
                }

                this.vueListeEndroitDetail.afficher(this.listeEndroitDetail);
            }
        }
    }

    ajouter(endroit){
        var url = window.location.href.toString();
        let requette = new XMLHttpRequest();

        if(!requette) {
            return null;
        }
        requette.onreadystatechange = function(){

            if (requette.readyState === XMLHttpRequest.DONE) {
                if(requette.status === 200){
                    window.location.href = url.replace('ajouter-endroit.html', 'index.html');
                }
                else {
                    alert(requette.responseText);
                    return null;
                }
            }
        }

        var data = new FormData();
        data.append('titre', endroit.titre);
        data.append('description', endroit.description);
        data.append('images', endroit.image[0]);
        requette.open('POST', "https://spot.mayalennox.com/ajouter-endroit.php");
        requette.send(data);
    }
}