//*** imports ***//
import React from "react"
import { fetchDetailsCharacter } from "./_FetchDetailsCharacter";
import ModalDetailCharacter from "./_ModalDetailCharacter"
//*** function ***//
export default function ViewList({characters, characterId, setCharacterId}) {
    console.log("Console Dir : ")
    console.dir(characters)
    const [showModal, setShowModal] = React.useState(false);
    
    const iWillShowModal = (number) => {
        setCharacterId(number)
        setShowModal(true)
    }

    const [id, setId] = React.useState()
    const [characterDetail, setCharacterDetail] = React.useState()
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        console.log('React.useEffect from characterId', characterId)
        setId()
        fetchDetailsCharacter(characterId)
        .then(response => {
            console.log("on récupère les données du personnage souhaité")
            console.log("on affiche ses informations", response)
            setCharacterDetail(response)
        })
        .catch(error => setError())
    }, [characterId])

    if(error) {
        throw error
    }
    if(id){
        console.log("Affichage des infos de l'ID :", id)
        console.dir(id)
    }

    return (
        <>
        <ul>
            {characters.map( character => (
                <li key={character.id} className="flex flex-col items-center">
                    <button className="unstyled bg-glass-button bg-glass-button:hover w-11/12 flex items-center mb-8 p-2 text-fuchsia-900 hover:text-fuchsia-50" onClick={ () => iWillShowModal(character.id)}>
                        <img src={character.attributes.image?.original} alt={character.attributes.name} className="img-shape ml-8"/>
                        <p className="ml-8 text-alita font-bold">{character.attributes.name}</p>
                    </button>
                </li>
            ))}
        </ul>
        <ModalDetailCharacter showModal={showModal} setShowModal={setShowModal} characterDetail={characterDetail} setCharacterDetail={setCharacterDetail}/>
        </>
    )
}