import { z } from 'zod'

export const RegisterFieldsSchema = z
    .object({
        firstName: z.string().min(3, {
            message: 'First name must be at least 3 characters',
        }),
        lastName: z.string().min(3, {
            message: 'Last name must be at least 3 characters',
        }),
        password: z.string().min(8, {
            message: 'Password must be at least 8 characters',
        }),
        confirmPassword: z.string(),
        email: z.string().email({
            message: 'Must be a valid email address',
        }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ['confirmPassword'], // path of error
    })
export type RegisterFieldsType = z.infer<typeof RegisterFieldsSchema>
export type FlattenedRegisterFieldsErrors = z.inferFlattenedErrors<
    typeof RegisterFieldsSchema
>

export const LoginFieldsSchema = z.object({
    password: z.string().min(8, {
        message: 'Password must be at least 8 characters',
    }),
    email: z.string().email({
        message: 'Must be a valid email address',
    }),
})
export type LoginFieldsType = z.infer<typeof LoginFieldsSchema>
export type FlattenedLoginFieldsErrors = z.inferFlattenedErrors<
    typeof LoginFieldsSchema
>


export const EmailSchema = z.object({
    email: z.string().email({
        message: 'Must be a valid email address',
    }),
})




export const UpdatePasswordSchema = z
    .object({

        oldPassword: z.string().min(8, {
            message: 'Password must be at least 8 characters',
        }),
        password: z.string().min(8, {
            message: 'Password must be at least 8 characters',
        }),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ['confirmPassword'], // path of error
    })
export type UpdatePasswordType = z.infer<typeof UpdatePasswordSchema>
export type FlattenedUpdatePasswordErrors = z.inferFlattenedErrors<
    typeof UpdatePasswordSchema
>



export const ResetPasswordSchema = z
    .object({
        password: z.string().min(8, {
            message: 'Password must be at least 8 characters',
        }),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ['confirmPassword'], // path of error
    })
export type ResetPasswordType = z.infer<typeof ResetPasswordSchema>
export type FlattenedResetPasswordErrors = z.inferFlattenedErrors<
    typeof ResetPasswordSchema
>
