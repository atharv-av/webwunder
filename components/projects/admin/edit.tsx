import { cn } from '@/lib/utils'
import { project } from '@/services/projects/getters'

import Fields from './form/fields'

export default async function EditForm({
    projectId,
    ...props
}: Props<{ projectId: string }>) {
    const proj = await project(projectId)
    return (
        <div
            className={cn('flex flex-col justify-center py-3', props.className)}
        >
            <Fields project={proj} />
        </div>
    )
}
