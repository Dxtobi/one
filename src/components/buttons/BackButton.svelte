<script>
    import { onMount } from "svelte";
    import Icon from "svelte-icons-pack/Icon.svelte";
    import BiArrowBack from "svelte-icons-pack/bi/BiArrowBack";
    function goBack() {
        history.back();
    }

    onMount(() => {
        // Enable navigation using the back button
        window.addEventListener("popstate", goBack);

        return () => {
            // Clean up the event listener when the component is unmounted
            window.removeEventListener("popstate", goBack);
        };
    });
</script>

<div class=" flex justify-between items-center my-4 py-3">
    <button on:click={goBack}><Icon src={BiArrowBack}  size={30}/></button>
</div>
