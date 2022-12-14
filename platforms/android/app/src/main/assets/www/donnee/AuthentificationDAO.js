class AuthentificationDAO {
    constructor(){
        this.listeMembre = [];
        this.vueListeMembre = new vueListeMembre();
    }

    lister(){
        console.log("AuthentificationDAO");

        let requette = new XMLHttpRequest();
        
        if(!requette){
            return null;
        }
        requette.open('GET', "http://services.mayal.systems/ajouter-membre.php", true);
        requette.send();
        requette.onreadystatechange = () => {
            if(requette.readyState == 4 && requette.status == 200){
                //console.log(requette.responseText);
                let liste = JSON.parse(requette.responseText);
                //console.log(liste);
                for(let i in liste){
                    //console.log(liste[i]);
                    console.log(this.listeMembre);
                    this.listeMembre[i] = liste[i];

                    console.log('membre de AuthentificationDAO : ' + this.listeMembre[i].titre);
                }

                this.vueListeMembre.afficher(this.listeMembre);
            }
        }
    }

    ajouter(membre){
        let requette = new XMLHttpRequest();

        if(!requette) {
            return null;
        }
        requette.onreadystatechange = function(){

            if (requette.readyState === XMLHttpRequest.DONE) {
                if(requette.status === 200){
                    //alert(requette.responseText);
                }
                else {
                    alert(requette.responseText);
                    return null;
                }
            }
        }

        requette.open('POST', "http://services.mayal.systems/ajouter-endroit.php");
        requette.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        requette.send(`nom=${encodeURIComponent(membre.nom)}&mdp=${encodeURIComponent(membre.mdp)}`)
    }
}