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
           // await locals.pb.callection('users').requestVerification(body.email)
            console.log(locals.pb)
            
        } catch (error) {
           return console.log('ERRR FROM REGISTER SERVER:::', error)
        }

        throw redirect(303, '/login')
    }
}

/**
 * 
 * Failed to send the test email. Raw error: 
dial tcp 185.107.232.248:587: connectex: 
A connection attempt failed because the connected party did not properly 
respond after a period of time, 
or established connection failed because 
connected host has failed to respond.
 */