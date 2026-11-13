export default function Search({ search, setSearch }) {
    return (
        <input type="text" placeholder="Cari Karakter..." value={search} onChange={(e) => setSearch(e.target.value)} className="mb-5 w-full rounded-xl border shadow shadow-[#00000060] p-3" />
    )
}
