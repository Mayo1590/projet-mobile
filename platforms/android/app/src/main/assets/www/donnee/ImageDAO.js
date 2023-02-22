class ImageDAO{
    ajouter(image){
        console.log(image.image)
        fetch("https://spot.mayalennox.com/ajouter-image.php", {
            method: "POST",
            body: image.image
        }).then((reponse) =>{
            console.log(reponse.body);
        });
    }
}