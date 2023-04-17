<script>
    import Register from "./Register.svelte";
    import SignIn from "./SignIn.svelte";

    let switchAuth = "register";
</script>

<div class="flex items-center text-center flex-col pt-4 min-h-screen">
    <div
        class="h-[40vh] bg-white w-full rounded-xl flex justify-center items-center"
    >
        <img
            class="w-full h-full object-cover rounded-lg"
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
        {#if switchAuth == "register"}
            <Register />
        {:else}
            <SignIn/>
        {/if}
        <div
            class="flex w-full justify-between border-2 border-white rounded-xl"
        >
            <button
                on:click={() => (switchAuth = "register")}
                class={`p-4 rounded-xl ${
                    switchAuth == "register" && "bg-white"
                }  w-[50%] `}>Register</button
            >
            <button
                on:click={() => (switchAuth = "sign-in")}
                class={`p-4 rounded-xl ${
                    switchAuth == "sign-in" && "bg-white"
                }  w-[50%]`}>Sign in</button
            >
        </div>
    </div>
</div>
