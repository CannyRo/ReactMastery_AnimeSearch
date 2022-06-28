// *** Imports *** //
import * as React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

// *** Function APP avec RENDER *** //
function App() {
  const [characterName, setCharacterName] = React.useState('')
  const [characterId, setCharacterId] = React.useState('')
  const handleSearch = name => {
    setCharacterName(name)
    console.log("Nous utilisons la fonction handleSearch pour mettre à jour le nom recherhcé")
  }
    return (
      <div className="flex flex-col min-h-screen bg-img">
        <Header characterName={characterName} onSearch={handleSearch}/>
        <Main characterName={characterName} characterId={characterId} setCharacterId={setCharacterId}/>
        <Footer />
      </div>
    );
  }
  
export default App;