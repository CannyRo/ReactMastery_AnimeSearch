// *** Imports *** //

// *** Var, Let, Const *** //
const myHeader = new Headers({
    'Accept': 'application/vnd.api+json',
    'Content-Type': 'application/vnd.api+json',
    })
const init = {
    method: 'GET',
    headers: myHeader,
    mode: 'cors',
}
// *** function *** //
const fetchDetailsCharacter = id => {
    console.log('On lance fetchDetailsCharacter')
    const urlSearch = `https://kitsu.io/api/edge/characters/${id}`
    return fetch(urlSearch, init)
    .then(response => response.json())
    .then(json => {
        if (json.data ) {
        console.log('on return le json de réponse')
        return (
            json.data
        )
        } else {
            return Promise.reject(
                new Error(`Aucun personnage trouvé`)
            ) 
        }
    })
    .catch(error => {
        return Promise.reject(
            new Error(`Aucun personnage trouvé`)
        )
    }) // ERROR DU JSON()
    .catch(error => {
        return Promise.reject(
            new Error(`Aucun personnage trouvé`)
        )
    }) // ERROR APPEL API
}

export {fetchDetailsCharacter};
