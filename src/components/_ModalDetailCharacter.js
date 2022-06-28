// *** Imports ***//
import React from "react"

// *** Function ***//
export default function ModalDetailCharacter({showModal, setShowModal, characterDetail, setCharacterDetail}) {
    console.log("characterDetail : ", characterDetail)

    const closeModal = () => {
        setCharacterDetail(null)
        setShowModal(false)
        console.log("Après effacement : ", characterDetail)
    }
    return(
        <>
            {  showModal ? (
                    <>  <div className="w-full h-full flex fixed inset-0 z-40 bg-slate-900 opacity-50"></div>
                        <div className="justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-alita">
                                        {characterDetail.attributes?.name}
                                        </h3>
                                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => closeModal()}>
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                                        <img src={characterDetail.attributes?.image.original} alt={characterDetail.attributes?.name} className="img-shape-xl"/>
                                    </div>
                                    <div className="p-6 space-y-6 h-auto">
                                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                            {characterDetail.attributes?.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
            ) : null }
            {console.dir(characterDetail)}
        </>
    )
}