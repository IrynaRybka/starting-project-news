export default function ArchiveLayout({archive, latest}) {
    return <div>
        <section id="archive-filter">
            <h1>Archive News</h1>
            {archive}
        </section>
        <section id="latest-filter">
            <h1>Latest News</h1>
            {latest}
        </section>
    </div>
}