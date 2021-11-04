

document.querySelector("#cp").addEventListener('input', function() {
    if(this.value.length == 5) {
        let url = 
            `https://geo.api.gouv.fr/communes?codePostal=${this.value}&fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=json&geometry=centre`;

            fetch(url)
            .then(response => response.json()
            .then(data => {
                //console.log(data);
                // dans le cas ou on récupère plusieurs données dont un tableau on devra faire une boucle
                let affichage = '<ul>';
                  for(let ville of data ){
                      affichage += `<li><strong>${ville.nom}</strong> - ${ville.population} habitants</li>`
                  }  
                  affichage += '</ul>';
                  document.querySelector('#villes').innerHTML = affichage;
            })
        ).catch(err => console.log('Erreur : ' + err))
    }
})