type Mode = 'payment' | 'subscription'

export const app = {
    host: process.env.NEXT_PUBLIC_HOST || process.env.HOST,
    tel: '+491702346983',
    email: 'info@webwunder.de',
    stripe:{
        public_key: process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || '',
        private:{
            secret_key: process.env.STRIPE_SECRET_KEY || '',
            web_hook_secret_key: process.env.STRIPE_WEBHOOK_SECRET_KEY || ''
        }
    }
} as const