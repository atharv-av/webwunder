import { NextRequest, NextResponse } from 'next/server'
import { app } from '@/config'
import Stripe from 'stripe'
import { paths } from '@/paths'

const stripe = new Stripe(app.stripe.private.secret_key, {
    apiVersion: '2024-04-10',
})

export async function GET(req: NextRequest) {
    try {
        const sessionId = req.nextUrl.searchParams.get('session_id') as string
        const session = await stripe.checkout.sessions.retrieve(sessionId)
        return NextResponse.json({
            status: session.status,
            customer_email: session.customer_details?.email,
        })
    } catch (err: any) {
        return new NextResponse(err.message, { status: err.statusCode || 500 })
    }
}

export async function POST(req: NextRequest) {
    try {
        const { priceIds, quantity, metadata, coupon } = await req.json()

        const items = priceIds.map((e: string) => ({
            price: e,
            quantity: quantity || 1,
        }))

        const discounts: Stripe.Checkout.SessionCreateParams.Discount[] = []

        if(coupon) discounts.push({
            coupon: coupon
        })

        console.log('DISCOUNTS:',discounts)


        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
            ui_mode: 'embedded',
            line_items: items,
            mode: 'subscription',
            return_url: `${app.host}/${paths.pages.afterCheckout.href}`,
            automatic_tax: { enabled: true },
            billing_address_collection: 'required', // or 'auto'
            // shipping_address_collection: {
            //     allowed_countries: ['DE', 'BE'],
            // },
            subscription_data: {
                metadata: {
                    ...metadata,
                },
            },
            discounts

        })

        return NextResponse.json({ clientSecret: session.client_secret })
    } catch (err: any) {
        console.error(err)
        return new NextResponse(err.message, { status: err.statusCode || 500 })
    }
}

export const runtime = 'edge'
