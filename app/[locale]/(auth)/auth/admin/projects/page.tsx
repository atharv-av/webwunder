import ProjectList from '@/components/projects/list'
export default function AdminProjectsPage() {
    return (
        <section>
            <div className="container mx-0 px-4 pb-12 xl:px-8">
                <h1 className="py-12 text-2xl">Projects</h1>
                <ProjectList />
            </div>
        </section>
    )
}
