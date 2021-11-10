var getHttpRequest = function() {
    var httpRequest = false;
    // Initialize the request
    if (window.XMLHttpRequest) { // Mozilla, Safari,...&
        httpRequest = new XMLHttpRequest();
        if (httpRequest.overrideMimeType) {
            httpRequest.overrideMimeType('text/xml');
        }
    } else if (window.ActiveXObject) { // IE
        try {
            httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
        }
    }
    return httpRequest;
}

let links = document.getElementsByClassName('link');
let result = document.getElementById('result');
let btn = document.getElementById('search');
btn.addEventListener('submit', function(e) {
    // Empêche le navigateur de suivre le lien
    e.preventDefault();
    // Chargemenet de la page
    result.innerHTML = '<h1>Chargement...</h1>';
    // Création de l'objet XMLHttpRequest
    var httpRequest = getHttpRequest();
    // Si le serveur a répondu
    httpRequest.onreadystatechange = function() {
            // Si le serveur a répondu et que le statut HTTP est "OK"
            if (httpRequest.readyState == 4) {
                // Si le serveur a répondu avec un code HTTP de 200 (document trouvé)
                if (httpRequest.status == 200) {

                    /* ENVOYER DES DONNEES AU SERVEUR */
                    result.innerHTML = httpRequest.responseText;



                    /* AFFICHER DU JSON */
                    /*var response = JSON.parse(httpRequest.responseText);
                    let ul = document.createElement('ul');
                    result.appendChild(ul);
                    for (let i = 0; i < response.length; i++) {
                        let li = document.createElement('li');
                        li.innerHTML = response[i].name;
                        ul.appendChild(li);
                    }
                    // Supprimer le chargement
                    result.removeChild(result.firstChild);*/

                } else {
                    // Si le serveur n'a pas répondu
                    result.innerHTML = '<h1>Erreur ' + httpRequest.status + '</h1>';
                }
            }
        }
        // Prépare la requête
    httpRequest.open('POST', '/demo.php', true);

    /* ENVOIE DE DONNES VIA FORM DATA */
    // Création d'un objet FormData
    var formData = new FormData(search);
    // Ajout des données
    formData.append('city', ville.value);
    formData.append('age', '25');
    // Envoie de la requête
    httpRequest.send(formData);


    /* ENVOIE DE DONNEES CLASSIQUE */
    /* // Header de la requête
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // Envoi de la requête
    httpRequest.send("city=" + encodeURIComponent(link.innerHTML));*/
});