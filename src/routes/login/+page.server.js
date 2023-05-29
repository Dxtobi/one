
import { error, redirect } from '@sveltejs/kit';



export const load = async ({locals}) => {
    if (locals.user) {
        throw redirect(303, '/')
    }
}

export const actions = {
    login: async ({locals, request}) =>{
        const body = Object.fromEntries(await request.formData());
        try {
            await locals.pb.collection('users').authWithPassword(body.email, body.password); 
           /**
            * 
            * if (!locals.pb?.authStore?.model?.verified) {
                locals.pb.authStore.clear()
                return {
                    notVerified:true
                }
            }
            * */ 
        } catch (err) {
            console.log(err.message)
            return {
                authentication:false
            }
            //throw error(500, 'something went wrong')
        }

        throw redirect(303, '/profile')
    }
}
