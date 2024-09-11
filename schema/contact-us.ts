import { z } from 'zod'

// fullName
// domain
// email
// phoneNo
// message
// terms

export const ContactUsSchema = z.object({
    fullName: z.string().min(6, 'Full Name must be at least 8 characters'),
    domain: z.string().url('Must be a valid domain').or(z.literal('')),
    email: z.string().email('Must be a valid email address'),
    phoneNo: z.string().min(9, 'Phone must be at least 9 characters'),
    message: z
        .string()
        .min(9, 'Message be at least 9 characters')
        .or(z.literal('')),
    terms: z.boolean().refine((val) => val === true, 'Must approve terms'),
})

export type ContactUsType = z.infer<typeof ContactUsSchema>
export type FlattenedContactUsErrors = z.inferFlattenedErrors<
    typeof ContactUsSchema
>
