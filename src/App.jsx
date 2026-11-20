import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import Search from "./components/Search";
import CharacterList from "./components/CharacterList";

export default function App() {
    const [characters, setCharacters] = useState([]);
    const [searchParams] = useSearchParams();

    const search = searchParams.get("search") || "";

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/")
            .then(response => response.json())
            .then(data => setCharacters(data.results));
    }, []);

    const filteredCharacters = characters.filter(character =>
        character.name.toLowerCase().includes(search.toLowerCase()),
    );

    return (
        <main className="mx-auto max-w-3xl p-5 flex flex-col gap-3 bg-gray-100 m-10 rounded-3xl border shadow-2xl shadow-[#00000080]">
            <Search />
            {search && (
                <p>
                    Hasil pencarian: <strong>{search}</strong>
                </p>
            )}
            <CharacterList characters={filteredCharacters} />
        </main>
    );
}
