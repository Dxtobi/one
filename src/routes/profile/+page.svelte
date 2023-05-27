<script>
    import Icon from "svelte-icons-pack/Icon.svelte";
    import BiEditAlt from "svelte-icons-pack/bi/BiEditAlt";
    import AiFillSetting from "svelte-icons-pack/ai/AiFillSetting";
    import BackButton from "../../components/buttons/BackButton.svelte";
    import { goto } from "$app/navigation";
    import { imgLink } from "$lib/utils/utils";
    function goToPage() {
        console.log("clicked");
        goto("/editProfile");
    }
    export let data;
    const user = data?.user;
    //console.log(data)
</script>

<div>
    <BackButton />
    <div class="w-full flex items-center flex-col">
        <div class="relative w-[100px] h-[100px] rounded-full flex justify-center items-center">
            <img src={imgLink("users", user.id, user?.avatar)} alt="" class="w-[95px] h-[95px] rounded-full bg-slate-300" />
            <button class="rounded-full absolute -right-1 p-1 -top-1 flex justify-center items-center bg-white w-[40px] h-[40px]" on:click={goToPage}>
                <Icon src={BiEditAlt} size={25} />
            </button>
        </div>
        <div class="text-center">
            <div class="text-2xl font-semibold">{user?.name}</div>
            <div class="font-extralight">@{user?.username}</div>
            <div>{user?.bio !== undefined ? user?.bio : ""}</div>
        </div>
    </div>
    
    <div class="w-full flex justify-center gap-1">
        <div class="w-full flex justify-center items-center">
            <a href="/profile/settings" class="border border-cyan-300 rounded-full my-2 p-2 text-center">
                <Icon src={AiFillSetting} size={25} />
            </a>
        </div>
    </div>
    
    <!-- Additional Sections -->
    
    <div class="w-full mt-8 border-b border-gray-300">
        <div class="text-xl mb-4">Posts</div>
        <!-- Display user's posts here -->
    </div>
    
    
    <div class="w-full mt-8 border-b border-gray-300">
        <div class="text-xl mb-4">Posts</div>
        <!-- Display user's posts here -->
    </div>
    
    
    <div class="w-full mt-8 border-b border-gray-300">
        <div class="text-xl mb-4">Posts</div>
        <!-- Display user's posts here -->
    </div>
    
    <!-- Add more sections as needed -->
    
    
</div>
