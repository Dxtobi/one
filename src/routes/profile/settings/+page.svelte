<script>
    // your script goes here

    import Icon from "svelte-icons-pack";
    import AiOutlineMail from "svelte-icons-pack/ai/AiOutlineMail";
    import HiOutlineLogout from "svelte-icons-pack/hi/HiOutlineLogout";
    import AiOutlinePhone from "svelte-icons-pack/ai/AiOutlinePhone";
    import RiSystemLockPasswordLine from "svelte-icons-pack/ri/RiSystemLockPasswordLine";
    import BackButton from "../../../components/buttons/BackButton.svelte";
</script>

<style>
    /* your styles go here */
</style>

<div>
    <BackButton/>
    <button class="flex capitalize justify-between items-center border-b border-grat-300 py-4 w-full">
        <div>change email</div>
        <Icon src={AiOutlineMail} size={30} />
    </button>
    <button class="flex capitalize justify-between items-center border-b border-grat-300 py-4 w-full">
        <div>change Phone</div>
        <Icon src={AiOutlinePhone} size={30} />
    </button>
    <button class="flex capitalize justify-between items-center border-b border-grat-300 py-4 w-full">
        <div>change password</div>
        <Icon src={RiSystemLockPasswordLine} size={30} />
    </button>
    <form
        action="/logout"
        method="POST"
        class="flex capitalize justify-between items-center border-b border-grat-300 py-4">
        <button>Logout</button>
        <Icon src={HiOutlineLogout} size={30} />
        
</form>
</div>