<script>
	import Header from "../components/common/Header.svelte";
    import NotLoggedIn from "../components/landing/NotLoggedIn.svelte";
	import "./styles.css";

	export let data;
	//console.log(data);
</script>

<div class="app bg-[#f6f4fc] px-4">
	<Header {data} />
	{#if !data.user}
		<div class="w-full lg:w-[50%] m-auto">
			<NotLoggedIn/>
		</div>
	{/if}
		
		<main class="w-full lg:w-[50%] m-auto">
			<slot />
		</main>

		<footer>
			<p />
		</footer>
</div>
