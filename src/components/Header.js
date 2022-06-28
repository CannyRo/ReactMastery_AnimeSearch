// *** IMPORTS *** //
import Title from './_Title'
import SearchForm from './_SearchForm'
// *** Function *** //
export default function Header({characterName, onSearch}) {
    const handleChange = name => {
        onSearch(name)
    }
    return(
        <header className="my-4 p-4 w-11/12 mx-auto bg-glass">
            <Title/>
            <SearchForm characterName={characterName} onSearch={handleChange}/>
        </header>
    )
}