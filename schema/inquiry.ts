import { z } from "zod";



export const InquirySchema = z.object({
    fullName: z.string().min(3,'Full Name must be at least 3 characters'),
    email: z.string().email('Must be a valid email address'),
    mobile: z.string().min(9, 'Mobile must be at least 9 characters'),
    message: z.string().min(5,'Message be at least 5 characters').or(z.literal('')),
})

export type InquiryType = z.infer<typeof InquirySchema>
export type FlatInquiryErrors = z.inferFlattenedErrors<
    typeof InquirySchema
>
