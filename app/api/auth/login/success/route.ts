import { paths } from '@/paths'
import { getLoggedInUser } from '@/services/auth/getters'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'

/**
 * This is where we redirect after successful login
 * @param request 
 */
export async function GET(request: NextRequest) {

    const { isAdmin } = await getLoggedInUser()

    if (isAdmin) redirect(paths.menu.admin.projects.href)
    else redirect(paths.menu.backoffice.clientProjects.href)
}

export const runtime = 'edge'
