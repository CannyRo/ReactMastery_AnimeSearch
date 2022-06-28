//*** Imports ***//
import React from 'react'
import fetchResearch from './_FetchResearch'
import ViewList from './_ViewList'
//*** Functions ***//
export default function ListOfResult({characterName, characterId, setCharacterId}) {
    const [characters, setCharacters] = React.useState()
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        console.log('React.useEffect from characterName', characterName)
        if (!characterName) {
            return
        }
        setCharacters()
        fetchResearch(characterName)
        .then(response => {
            console.log("on récupère les données pour les utiliser et mettre à jour characters")
            console.log("on affiche la réponse : ",response)
            setCharacters(response)
        })
        .catch(error => setError(error))
    }, [characterName])


    if(error) {
        throw error
    }
    if(!characterName) {
        return "Entrer le nom d'un personnage"
    }
    if(!characters) {
        return "Chargement des informations..."
    }
    if(characters){
        console.log("Affichage de characters dans la console")
        console.log(typeof characters)
        console.dir(characters)
    }
    return (
        <ViewList characters={characters} characterId={characterId} setCharacterId={setCharacterId}/>
    )
}