export default function CharacterList({ characters }) {
    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {characters.map((characters) => (
                <div className="rounded-lg bg-white p-3 text-center shadow border" key={characters.id}>
                    <img src={characters.image} alt={characters.name} className="rounded w-full" />
                    <h2 className="mt-2 font-semibold">{characters.name}</h2>
                </div>
            ))}
        </div>
    )
}
