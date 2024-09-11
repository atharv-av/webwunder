import { NextRequest, NextResponse } from 'next/server'
import { app } from '@/config'
import Stripe from 'stripe'
import {
    insertPaymentFailedProject,
    insertPendingProject,
    insertSuccessProject,
} from '@/services/projects/private/actions'
import { waits } from '@/lib/utils'

/**
 * Stripe Events
 * - install stripe cli
 * - run 'stripe login'
 * - run 'stripe listen --forward-to http://localhost:3000/api/stripe/webhooks'
 * - reference: https://dashboard.stripe.com/test/webhooks/create?endpoint_location=local
 *
 * Issues: No directory provided
 * - sudo apt install gnome-keyring
 */

const stripe = new Stripe(app.stripe.private.secret_key, {
    apiVersion: '2024-04-10',
})

export async function POST(req: NextRequest) {
    const sig = req.headers.get('stripe-signature')!
    const webhookSecret = app.stripe.private.web_hook_secret_key

    let event: Stripe.Event

    try {
        const buf = await req.text()
        event = await stripe.webhooks.constructEventAsync(
            buf,
            sig,
            webhookSecret,
        )
    } catch (err: any) {
        console.error(`Webhook signature verification failed.`, err.message)
        return NextResponse.json(
            { error: 'Webhook signature verification failed.' },
            { status: 400 },
        )
    }

    // Handle the event
    switch (event.type) {
        case 'payment_intent.succeeded':
            const paymentIntentSucceeded = event.data
                .object as Stripe.PaymentIntent
            console.log(`PaymentIntent was SUCCESSFUL!`, paymentIntentSucceeded)

            if (typeof paymentIntentSucceeded.invoice === 'string') {
                const invoice = await stripe.invoices.retrieve(
                    paymentIntentSucceeded.invoice,
                )
                const invoicePdfUrl = invoice.hosted_invoice_url;
                console.log({invoicePdfUrl});
             
                const subscription = await stripe.subscriptions.retrieve(
                    invoice.subscription + '',
                )
                const projectDetails: ProjectDetails = {
                    currentPeriodStart: subscription.current_period_start,
                    currentPeriodEnd: subscription.current_period_end,
                    invoiceId: paymentIntentSucceeded.invoice,
                    invoiceNo: invoice.number + '',
                    paymentIntentId: paymentIntentSucceeded.id,
                    email: invoice.subscription_details?.metadata?.email + '',
                    userId: invoice.subscription_details?.metadata?.userId + '',
                    subscriptionId: invoice.subscription + '',
                    customerId: paymentIntentSucceeded.customer + '',
                    packageType: invoice.subscription_details?.metadata
                        ?.packageType as PackageType,
                    note: invoice.subscription_details?.metadata?.note + '',
                    title: invoice.subscription_details?.metadata?.title + '',
                    invoiceUrl : invoicePdfUrl ?? ""
                }
                console.log('SUCCESSFUL projectDetails:', projectDetails)
                const insertProject = await insertSuccessProject(projectDetails)
                console.log(insertProject);
            }
            break
        case 'payment_intent.created':
            const paymentIntentCreated = event.data
                .object as Stripe.PaymentIntent
            console.log(`PaymentIntent was CREATED!`, paymentIntentCreated)

            if (typeof paymentIntentCreated.invoice === 'string') {
                const invoice = await stripe.invoices.retrieve(
                    paymentIntentCreated.invoice,
                )
                const invoicePdfUrl = invoice.hosted_invoice_url;
                console.log({invoicePdfUrl});
                const projectDetails: ProjectDetails = {
                    invoiceId: paymentIntentCreated.invoice,
                    invoiceNo: invoice.number + '',
                    paymentIntentId: paymentIntentCreated.id,
                    email: invoice.subscription_details?.metadata?.email + '',
                    userId: invoice.subscription_details?.metadata?.userId + '',
                    subscriptionId: invoice.subscription + '',
                    customerId: paymentIntentCreated.customer + '',
                    packageType: invoice.subscription_details?.metadata
                        ?.packageType as PackageType,
                    note: invoice.subscription_details?.metadata?.note + '',
                    title: invoice.subscription_details?.metadata?.title + '',
                    invoiceUrl : invoicePdfUrl ?? ""

                }
                await insertPendingProject(projectDetails)
                console.log('CREATED projectDetails:', projectDetails)
            }
            break
        case 'payment_intent.processing':
            const paymentIntentProcessing = event.data
                .object as Stripe.PaymentIntent
            console.log(
                `PaymentIntent was PROCESSING!`,
                paymentIntentProcessing,
            )
            // Add your business logic here.
            break
        case 'payment_intent.payment_failed':
            const paymentFailed = event.data.object as Stripe.PaymentIntent
            console.log(`PaymentIntent FAILED!`, paymentFailed)
            if (typeof paymentFailed.invoice === 'string') {
                const invoice = await stripe.invoices.retrieve(
                    paymentFailed.invoice,
                )
                const invoicePdfUrl = invoice.hosted_invoice_url;
                console.log({invoicePdfUrl});
                const projectDetails: ProjectDetails = {
                    invoiceId: paymentFailed.invoice + '',
                    invoiceNo: invoice.number + '',
                    paymentIntentId: invoice.payment_intent + '',
                    email: invoice.subscription_details?.metadata?.email + '',
                    userId: invoice.subscription_details?.metadata?.userId + '',
                    subscriptionId: invoice.subscription + '',
                    customerId: invoice.customer + '',
                    packageType: invoice.subscription_details?.metadata
                        ?.packageType as PackageType,
                    note: invoice.subscription_details?.metadata?.note + '',
                    title: invoice.subscription_details?.metadata?.title + '',
                    invoiceUrl : invoicePdfUrl ?? ""

                    
                }
                await insertPaymentFailedProject(projectDetails)
            }
            break
        case 'invoice.payment_failed':
            const invoicePaymentFailed = event.data.object
            console.log(`invoicePaymentFailed FAILED!`, invoicePaymentFailed)
            // const projectDetails: ProjectDetails = {
            //     invoiceId: invoicePaymentFailed.id,
            //     invoiceNo: invoicePaymentFailed.number+'',
            //     paymentIntentId: invoicePaymentFailed.payment_intent+'',
            //     email: invoicePaymentFailed.subscription_details?.metadata?.email + '',
            //     userId: invoicePaymentFailed.subscription_details?.metadata?.userId + '',
            //     subscriptionId: invoicePaymentFailed.subscription + '',
            //     customerId: invoicePaymentFailed.customer + '',
            //     packageType: invoicePaymentFailed.subscription_details?.metadata
            //         ?.packageType as PackageType,
            //     note: invoicePaymentFailed.subscription_details?.metadata?.note + '',
            //     title: invoicePaymentFailed.subscription_details?.metadata?.title + '',
            // }
            // await insertInvoicePaymentFailedProject(projectDetails)
            break
        // Handle other event types
        default:
            console.log(`Unhandled EVENT TYPE: ${event.type}`)
        // console.log(`START XXXXXX`)
        // console.log(`${event.type}`)
        // // console.log(`Object:`, event.data.object)
        // console.log(`END XXXXXXXX`)
    }

    // Return a response to acknowledge receipt of the event
    return NextResponse.json({ received: true })
}

export const runtime = 'edge'
