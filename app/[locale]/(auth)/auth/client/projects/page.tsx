import ProjectList from '@/components/projects/list'

export default  function ProjectsPage() {

    return (
        <section>
            <div className="container mx-0 pb-12 px-4 xl:px-8">
                <h1 className="py-12 text-2xl">My Projects</h1>
                <ProjectList />
            </div>
        </section>
    )
}
