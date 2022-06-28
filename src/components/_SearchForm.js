// *** Imports *** //
import React from 'react'
// *** Functions *** //
export default function SearchForm({onSearch, characterName}){
    const [name, setName] = React.useState(characterName)
    return(
        <div> 
            <div className="container">
                <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Recherhe un personnage</label>
                <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="text" id="search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-fuchsia-500 focus:border-fuchsia-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fuchsia-500 dark:focus:border-fuchsia-500" placeholder="Rechercher" value={name} onChange={e => setName(e.target.value)} required/>
                    <input type="button" className="hidden text-white absolute right-2.5 bottom-2.5 bg-fuchsia-700 hover:bg-fuchsia-800 focus:ring-4 focus:outline-none focus:ring-fuchsia-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700 dark:focus:ring-fuchsia-800" value="Rechercher" onClick={() => onSearch(name)}/>
                </div>
                <input type="button" className="w-full mt-2 text-white bg-fuchsia-700 hover:bg-fuchsia-800 focus:ring-4 focus:outline-none focus:ring-fuchsia-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700 dark:focus:ring-fuchsia-800" value="Search" onClick={() => onSearch(name)}/>
            </div>
        </div>
    )
}