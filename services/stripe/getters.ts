'use server'
import { app } from '@/config'
import { waits } from '@/lib/utils'
import Stripe from 'stripe'

const stripe = new Stripe(app.stripe.private.secret_key, {
    apiVersion: '2024-04-10',
})

export async function getSubscriptions(userId: string): Promise<Stripe.Response<Stripe.ApiSearchResult<Stripe.Subscription>>> {
    const res = await stripe.subscriptions.search({
        // query:`metadata["userId"]:"9ef8e444-7597-4790-a364-46f352b4bc56"`
        query: `metadata["userId"]:"${userId}"`,
    })

    // avoid data streaming warning that its not a JSON object
    return JSON.parse(JSON.stringify(res))
}
