<script>
    import Icon from "svelte-icons-pack/Icon.svelte";
    import BiEditAlt from "svelte-icons-pack/bi/BiEditAlt";
    import BackButton from "../../components/buttons/BackButton.svelte";
    import { imgLink } from '$lib/utils/utils';
    import {  invalidateAll } from "$app/navigation";
    import {  enhance, applyAction } from "$app/forms";

    export let data;
    const user = data?.user;
    let loading
    $: loading = false
    
    console.log(user)
    let selectedFile = null;
    let imageUrl =  user?.avatar;
    let full_name = user?.name
    let handle = user?.username
    let bio = user?.bio
    //let url = user?.name



    function handleFileInput(event) {
    const file = event.target.files[0];
    const allowedExtensions = ['jpeg', 'jpg', 'png', 'gif'];

    if (file && allowedExtensions.includes(file.type.split('/')[1])) {
        selectedFile = file;
        imageUrl = URL.createObjectURL(file);
      } else {
        selectedFile = null;
        imageUrl = null;
      }
    };

    const submitUpdateProfile = () =>{
        loading = false
        return async ({result})=>{
            switch (result.type) {
                case 'success':
                    await invalidateAll()
                    break;
                case 'error':
                    break;
                default:
                    applyAction(result)
                    break;
            }

            loading=false;
        }
    };
</script>

<div>
    <BackButton title={"edit profile"} />

   <form action="?/update_profiles" method="POST" enctype="multipart/form-data" use:enhance={submitUpdateProfile}>
    <div class="w-full flex items-center flex-col">
        <div class=" relative w-[100px] h-[100px] rounded-full flex justify-center items-center">
            <img
                src={selectedFile? imageUrl: imgLink('users', user.id, imageUrl)}
                alt=""
                class="w-[95px] h-[95px] rounded-full bg-slate-300"
            />
            <div class=" rounded-full absolute -right-1 p-1 -top-1 flex justify-center items-center bg-white w-[40px] h-[40px]">
                <input
                    type="file"
                    class="hidden"
                    
                    id="avatar"
                    name='avatar'
                    accept="image/jpeg, image/png, image/gif"
                    on:change={handleFileInput} disabled={loading}
                />
                <label for="avatar" class="">
                    <Icon src={BiEditAlt} size={25} />
                </label>
            </div>
        </div>
        <div class="text-center my-4">
            <input bind:value={full_name} placeholder="your name" class="bg-none w-[100%] p-2 outline-none my-4 rounded-xl bg-white border border-gray-300" name='name'  disabled={loading}/>
            <input bind:value={handle} placeholder="unique handle" class="bg-none w-[100%] p-2 outline-none my-4 rounded-xl bg-white border border-gray-300" name='username'  disabled={loading}/>
            <div class="bg-white rounded-lg shadow p-4 w-full">
                <label for="bio" class="block font-medium text-gray-700 mb-2" name='bio'>Bio</label>
                <textarea id="bio" bind:value={bio} rows="4" class="w-full resize-none border border-gray-300 outline-none rounded p-2 focus:outline-none focus:ring focus:bg-gray-200" name='bio'   disabled={loading}></textarea>
                <p class="text-sm text-gray-500 mt-2">Provide a brief description about yourself.</p>
                <p class="text-sm text-gray-500">Maximum 160 characters.</p>
            </div>
            
        </div>
    </div>
    
    <button type='submit' class="w-1/3 bg-black text-white border-2  rounded-2xl my-4 p-2 mx-auto" disabled={loading}>Submit</button>
    </form>
   
</div>
