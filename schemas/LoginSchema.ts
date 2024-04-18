import { z } from 'zod'
export const Login = z.object({
    email: z.string().email('Invalid email').default(''),
    password: z.string().min(8, 'Must be at least 8 characters').default(''),
    passwordcf: z.string().min(8, 'Must be at least 8 characters').default(''),
    idcard: z.string().regex(/^\d{1,3}-\d{4}-\d{5}-\d{2}-\d{1}$/, 'Invalid ID format').default('')

}).refine((data) => data.password == data.passwordcf,
    {
        message: "Passwords do not match",
        path: ['passwordcf']
    });
