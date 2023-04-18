
import { error, redirect } from '@sveltejs/kit';


export const actions = {
    login: async ({locals, request}) =>{
        const body = Object.fromEntries(await request.formData());

        console.log(locals.pb)

        //console.log(body, username)
        try {
            await locals.pb.collection('users').authWithPassword(body.email, body.password); 
            if (!locals.pb?.authStore?.model?.verified) {
                locals.pb.authStore.clear()
                return {
                    notVerified:true
                }
            }
        } catch (err) {
            console.log('ERRR FROM REGISTER SERVER:::', err);
            throw error(500, 'something went wrong')
        }

        throw redirect(303, '/profile')
    }
}
