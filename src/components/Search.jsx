export default function Search({ search, setSearch }) {
    return (
        <input type="text" placeholder="Cari Karakter..." value={search} onChange={(e) => setSearch(e.target.value)} className="" />
    )
}
