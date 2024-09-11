'use server'
import { createAdminClient, createClient } from '@/lib/supabase/server'
import {
    myProjectFactory,
    myProjectsFactory,
} from './factory/getters'

export async function projects() {
    const supabase =  createClient() 
    const func = myProjectsFactory(supabase)
    return await func()
}

export async function project(packageId: string) {
    const supabase = createClient()
    const func = myProjectFactory(supabase)
    return await func(packageId)
}
