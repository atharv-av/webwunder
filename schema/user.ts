import { z } from 'zod'

export const UpdateUserSchema = z.object({
    firstName: z.string().min(6,'First Name must have at least 6 characters').or(z.literal('')),
    lastName: z.string().min(6,'Last Name must have at least 6 characters').or(z.literal('')),
    mobile: z.string().min(9,'Must a valid mobile number').or(z.literal('')),
    dob: z.string().date('Must be a valid date. ex. April 23, 1997 (1997-04-23)').or(z.literal(''))
})

export type UpdateUserType = z.infer<typeof UpdateUserSchema>
export type FlattenedUpdateUserErrors = z.inferFlattenedErrors<
    typeof UpdateUserSchema
>
