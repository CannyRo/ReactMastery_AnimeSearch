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
            setCharacters(response)
        })
        .catch(error => setError(error))
    }, [characterName])


    if(error) {
        throw error
    }
    if(!characterName) {
        return console.log("Write a character")
    }
    if(!characters) {
        return console.log("Loading of results")
    }
    return (
        <ViewList characters={characters} characterId={characterId} setCharacterId={setCharacterId}/>
    )
}