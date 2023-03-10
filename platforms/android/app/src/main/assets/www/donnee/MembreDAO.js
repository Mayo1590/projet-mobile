class MembreDAO {

    ajouter(membre){
        var url = window.location.href.toString();
        let requette = new XMLHttpRequest();

        if(!requette) {
            return null;
        }
        requette.onreadystatechange = function(){

            if (requette.readyState === XMLHttpRequest.DONE) {
                if(requette.status === 200){
                    //alert(requette.responseText);
                    window.location.href = url.replace('ajouter-membre.html', 'index.html');
                }
                else {
                    alert(requette.responseText);
                    return null;
                }
            }
        }

        requette.open('POST', "https://spot.mayalennox.com/ajouter-membre.php");
        requette.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        requette.send(`pseudo=${encodeURIComponent(membre.pseudo)}&mdp=${encodeURIComponent(membre.mdp)}&courriel=${encodeURIComponent(membre.courriel)}&nom=${encodeURIComponent(membre.nom)}`)
    }

    connecter(membre){
        var url = window.location.href.toString();
        let requette = new XMLHttpRequest();

        if(!requette) {
            return null;
        }
        requette.onreadystatechange = function(){

            if (requette.readyState === XMLHttpRequest.DONE) {
                if(requette.status === 200){
                    //alert(requette.responseText);
                    let verfier = JSON.parse(requette.responseText);

                    if(verfier.membre == true)
                    {
                        localStorage.setItem('connecter', 'true');
                        window.location.href = url.replace('connexion-membre.html', 'index.html');
                    }
                    else 
                        localStorage.setItem('connecter', 'false');
                }
                else {
                    alert(requette.responseText);
                    return null;
                }
            }
        }

        requette.open('POST', "https://spot.mayalennox.com/connexion-membre.php");
        requette.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        requette.send(`pseudo=${encodeURIComponent(membre.pseudo)}&mdp=${encodeURIComponent(membre.mdp)}`)
    }
}