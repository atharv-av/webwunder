interface LocalProps  {
    params: { projectId: string }
}


export default function ViewProjectPage({
    params: { projectId }
}: LocalProps) {
    return (
        <div>
            <h1>{projectId}</h1>
        </div>
    )
}

