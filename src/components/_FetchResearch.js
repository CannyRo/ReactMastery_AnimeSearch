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
const fetchResearch = name => {
    console.log('On lance fetchListOfCharacters')
    const urlSearch = `https://kitsu.io/api/edge/characters?filter[name]=${name}`
    return fetch(urlSearch, init)
    .then(response => response.json())
    .then(json => {
        if (json.meta.count > 0 ) {
        console.log('on return le json de réponse')
        return (
            json.data
        )
        } else {
            return Promise.reject(
                new Error(`Aucun personnage trouvé pour le nom "${name}"`)
            ) 
        }
    })
    .catch(error => {
        return Promise.reject(
            new Error(`Aucun personnage trouvé pour le nom "${name}"`)
        )
    }) // ERROR DU JSON()
    .catch(error => {
        return Promise.reject(
            new Error(`Aucun personnage trouvé pour le nom "${name}"`)
        )
    }) // ERROR APPEL API
}

export default fetchResearch;