


<script>
    // @ts-ignore
    import Icon from "svelte-icons-pack/Icon.svelte";
    import FiAtSign from "svelte-icons-pack/fi/FiAtSign";
    import AiFillMail from "svelte-icons-pack/ai/AiFillMail";
    import CgPassword from "svelte-icons-pack/cg/CgPassword";
    import AiOutlinePhone from "svelte-icons-pack/ai/AiOutlinePhone";
    import {
        validateAfricanPhoneNumber,
        validateEmail,
        validatePassword,
        //validateUserName,
    } from "$lib/utils/validator";
    import IoEyeSharp from "svelte-icons-pack/io/IoEyeSharp";
    import FaSolidEyeSlash from "svelte-icons-pack/fa/FaSolidEyeSlash";

    let uname = "";
    let password = "";
    let email = "";
    let phone = "";
    let hidePassword = true;

    /**
     * @param {any} _event
     */
    function validate(_event) {}
</script>

<div
    class="flex flex-col justify-between items-center w-full p-4 bg-white rounded-xl gap-4">
   

    <form class="flex flex-col justify-between items-center w-full p-4 bg-white rounded-xl gap-4" method="POST" action="?/register">
        <div class="w-full flex justify-start gap-1">
            <div class="flex justify-center items-center bg-slate-200 rounded-xl p-2">
                <Icon src={FiAtSign} />
            </div>
            <input
                bind:value={uname}
                class="bg-none w-[80%] p-2 outline-none"
                placeholder="FullName"
                required
                name="name"
            />
        </div>
        
        <div class="w-full flex  justify-start gap-1">
            <div
                class="flex justify-center items-center bg-slate-200 p-2 rounded-xl"
            >
                <Icon src={AiOutlinePhone} />
            </div>
            <input
                class="bg-none w-[80%] p-2 outline-none"
                placeholder="phone: add +country-code"
                bind:value={phone}
                required
                type="tel"
                name="phone"
            />
        </div>
        {#if !validateAfricanPhoneNumber(phone) && phone != ""}
            <div class="text-red-300 text-sm"> Not supported insert +country-code</div>
        {/if}
        <div class="w-full flex  justify-start gap-1">
            <div
                class="flex justify-center items-center bg-slate-200 rounded-xl p-2"
            >
                <Icon src={AiFillMail} />
            </div>
            <input
                class="bg-none w-[80%] p-2 outline-none"
                placeholder="email"
                bind:value={email}
                required
                name="email"
            />
        </div>
        {#if !validateEmail(email) && email != ""}
        <div class="text-red-300 text-sm">Not supported</div>
        {/if}
        <div class="w-full flex  justify-start gap-1">
            <div
                class="flex justify-center items-center bg-slate-200 p-2 rounded-xl"
            >
                <Icon src={CgPassword} />
            </div>
            <input
                class="bg-none w-[80%] p-2 outline-none"
                placeholder="password"
                value={password}
                on:input={(e) => {
                    password = e?.target?.value;
                }}
                name="password"
                required
                type={`${hidePassword ? "password" : "text"}`}
            />
            {#if hidePassword}
                <button
                    class="flex justify-center items-center bg-slate-200 p-2 rounded-xl"
                    on:click={() => (hidePassword = false)}
                >
                    <Icon src={IoEyeSharp} />
                </button>
            {:else}
                <button
                    on:click={() => (hidePassword = true)}
                    class="flex justify-center items-center bg-slate-200 p-2 rounded-xl"
                >
                    <Icon src={FaSolidEyeSlash} />
                </button>
            {/if}
        </div>
        {#if !validatePassword(password) && password != ""}
        <div class="text-red-300 text-sm">Not strong enough</div>
        {/if}
        <button
            class="w-full p-4 bg-gray-900 text-white font-bold my-2 rounded-xl"
            on:click={validate} disabled={ !validateEmail(email)|| !validatePassword(password)|| !validateAfricanPhoneNumber(phone)}>Register</button
        >
    </form>
</div>
