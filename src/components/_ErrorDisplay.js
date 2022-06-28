export default function ErrorDisplay({error}) {
    return (
        <div className="text-red-500">
            Une erreur est survenue lors de la recherche du personnage :{' '}
            <pre className="text-slate-500"> Détail : {error.message}</pre>
        </div>
    )
}