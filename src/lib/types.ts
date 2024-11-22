import {z} from 'zod'
export const signUpSchema = z.object({
    username:z.string().min(4,"User name must be atleast 4 character").max(20,"Max 20"),
    email: z.string().email(),
    password: z.string().min(5,"5 min password").max(20,"20 max"),
    confirmpassword: z.string()
}).refine((data)=>data.confirmpassword===data.password,{
    message:"Confirm password not matching with password",
    path:["confirmpassword"]
})
export type SignUpSchemaType =  z.infer<typeof signUpSchema>

