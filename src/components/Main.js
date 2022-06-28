// *** Imports *** //
import React from 'react'
import {ErrorBoundary} from 'react-error-boundary'
import ListOfResults from './_ListOfResults'
import ErrorDisplay from './_ErrorDisplay'

// *** Functions *** //
export default function Main({characterName, characterId, setCharacterId}) {
    return(
        <main className="flex-grow text-fuchsia-50">
            <ErrorBoundary key={characterName} FallbackComponent={ErrorDisplay}>
                <ListOfResults characterName={characterName} characterId={characterId} setCharacterId={setCharacterId}/>
            </ErrorBoundary>
        </main>
    )
}