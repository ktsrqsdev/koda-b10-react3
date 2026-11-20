import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

export default function Search() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const [search, setSearch] = useState(searchParams.get("search") || "");

    function handleSubmit(e) {
        e.preventDefault();

        navigate(`/?search=${search}`);
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input
                type="text"
                placeholder="Cari Karakter..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full rounded-xl border shadow shadow-[#00000060] p-3"
            />
            <button type="submit" className="border border-black rounded-xl px-6 shadow shadow-[#00000060]">
                Cari
            </button>
        </form>
    );
}
