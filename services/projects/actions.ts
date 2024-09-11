'use server'
import { createClient } from '@/lib/supabase/server'

export async function cancelProject(projectId: string) {
    const date = new Date()
    const cancelledDate = `${date.getUTCFullYear()}-${(date.getUTCMonth() + 1).toString().padStart(2, '0')}-${date.getUTCDate().toString().padStart(2, '0')}`

    const supabase = createClient()
    const res = await supabase
        .from('projects')
        .update({ cancelled_date: cancelledDate })
        .eq('id', projectId)
        .select()
        .single()
    console.log('CANCEL RES: ', res)

    if (res.error) throw new Error(res.error.message)
}

export async function undoCancelProject(projectId: number) {
    const supabase = createClient()
    const { error } = await supabase
        .from('projects')
        .update({ cancelled_date: null })
        .eq('id', projectId)
    if (error) throw new Error(error.message)
}

export async function updateProject(
    projectId: number,
    project: {
        title: string
        note: string
        aworkLink?: string
        userFriendlyEmail? : string
    },
) {  
    const supabase = createClient()
    const { error } = await supabase
        .from('projects')
        .update({
            title: project.title,
            notes: project.note,
            awork_link: project.aworkLink,
            user_friendly_email: project.userFriendlyEmail,
        })
        .eq('id', projectId)
    if (error) throw new Error(error.message)
}
