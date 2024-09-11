// import { myProjects } from '@/services/projects/getters';
// import { createAdminClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'
// import { app } from '@/config'
// import {
//     insertPendingProject,
//     insertSuccessProject,
// } from '@/services/projects/private/actions'

export function GET(req: NextRequest) {
    // const supabase = createAdminClient()


    // insertPendingProject({
    //     email: 'email@email.com',
    //     invoiceId: 'invoiceId',
    //     subscriptionId: 'subscriptionId_pending',
    //     paymentIntentId: 'paymentIntentIduu',
    //     userId: 'userId',
    //     packageType: 'unlimited-pro',
    //     note:'test note'
    // })    




    // insertSuccessProject({
    //     email: 'email@email.com',
    //     invoiceId: 'invoiceId',
    //     subscriptionId: 'subscriptionId',
    //     paymentIntentId: 'paymentIntentIduu',
    //     userId: 'userId',
    //     packageType: 'unlimited-pro',
    //     note:'test note'
    // })



    return NextResponse.json({ done: true })
}

export const runtime = 'edge'
