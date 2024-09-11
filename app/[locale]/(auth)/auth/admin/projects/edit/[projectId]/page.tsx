import EditForm from '@/components/projects/admin/edit'

export default async function EditProject({
    params,
}: {
    params: { projectId: string }
}) {
    return (
        <section>
            <div className="container mx-0 px-4 pb-12 xl:px-8">
                <h1 className="py-12 text-4xl">Edit Project</h1>
                <EditForm projectId={params.projectId} />
            </div>
        </section>
    )
}
