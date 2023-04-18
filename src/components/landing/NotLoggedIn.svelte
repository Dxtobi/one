<script>
    import Register from "./Register.svelte";
    import SignIn from "./SignIn.svelte";

    let switchAuth = "register";
</script>

<div class="flex items-center text-center flex-col pt-4 gap-4 ">
    <div
        class=" w-full rounded-xl flex justify-center items-center"
    >
        <img
            class="w-[50px] h-[50px] object-cover rounded-full m-auto"
            alt=""
            src="https://img.freepik.com/free-psd/3d-girl-character-checking-her-phone-while-sitting_23-2149086092.jpg?w=2000"
        />
    </div>
    <div class=" gap-8 my-4 flex justify-evenly items-center flex-col">
        <div class=" text-2xl font-bold">Find your Clicks with OneTrybe</div>
        <div class="text-sm">
            Explore several communities, find your favorite people and things
            that interests you
        </div>
       
        <div
            class="flex w-full justify-between border-2 border-white rounded-xl p-2 gap-2"
        >
            <a href="/register"
                class={`p-4 rounded-xl  w-[50%] bg-white`}>Register</a>
            <a href="/login"
              
                class={`p-4 rounded-xl bg-white w-[50%]`}>Sign in</a>
        </div>
    </div>
</div>
