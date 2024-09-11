'use client'

import React, { useCallback } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout,
} from '@stripe/react-stripe-js'
import { app } from '@/config'

const stripePromise = loadStripe(app.stripe.public_key)

// one time setup fee: price_1PhnyaBfR4W4kjLIjnvKzzhm
// Website Plan Standard: price_1PhnuFBfR4W4kjLIxqgFdzFk

const priceIds = [
    'price_1PhnyaBfR4W4kjLIjnvKzzhm',
    'price_1PhnuFBfR4W4kjLIxqgFdzFk',
]

export default function Subscription() {
    const fetchClientSecret = useCallback(() => {
        // Create a Checkout Session
        return fetch('/api/checkout-sessions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                priceIds: priceIds, // replace with actual price IDs
                quantity: 1, // replace with actual quantity
            }),
        })
            .then((res) => res.json())
            .then((data) => data.clientSecret)
    }, [])

    const options = { fetchClientSecret }

    return (
        <div id="checkout" className="container p-12">
            <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
                <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
        </div>
    )
}
