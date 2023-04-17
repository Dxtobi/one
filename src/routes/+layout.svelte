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
		<NotLoggedIn/>
	{:else}
		<div></div>
		<main>
			<slot />
		</main>

		<footer>
			<p />
		</footer>
	{/if}
</div>
