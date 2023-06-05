
import { error, redirect } from '@sveltejs/kit';


export const actions = {
    update_profiles: async ({locals, request}) =>{
        const data = Object.fromEntries(await request.formData());
       
        const formData = new FormData()
        
        formData.append('avatar', data?.avatar);
        formData.append('username', data?.username)
        formData.append('name', data?.name)
        formData.append('bio', data?.bio)

      //  console.log(data, formData)
        try {
            const { name, avatar, username, bio } = await locals.pb.collection('users').update(locals?.user?.id, formData); 
            locals.user.name = name;
            locals.user.avatar = avatar;
            locals.user.username = username;
            locals.user.bio = bio;

            
            
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
            console.log(err.data)
            
            throw error(500, 'something went wrong')
        }

        throw redirect(303, '/profile')
    }
}
