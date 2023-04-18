import { generateUsername } from '$lib/utils/utils';
import { redirect } from '@sveltejs/kit';


export const actions = {
    register: async ({locals, request}) =>{
        const body = Object.fromEntries(await request.formData());

        // @ts-ignore
        let username = generateUsername(body.name.split(' ').join('')).toLocaleLowerCase()

        //console.log(body, username)
        try {
            const req = await locals.pb.collection('users').create({ username, ...body, passwordConfirm: body.password });
            console.log(req)
            await locals.pb.callection('users').requestVerification(body.email)
            console.log(req)
            
        } catch (error) {
           return console.log('ERRR FROM REGISTER SERVER:::', error)
        }

        throw redirect(303, '/login')
       
        
    }
}