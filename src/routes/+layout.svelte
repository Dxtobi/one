<script>
  import FooterMobil from './FooterMobil.svelte';

	import Header from "../components/common/Header.svelte";
    import NotLoggedIn from "../components/landing/NotLoggedIn.svelte";
	import "./styles.css";

	export let data;
	//console.log(data);
</script>

<div class="app bg-blue-100 px-4">
	<Header {data} />
	{#if !data.user}
		<div class="w-full lg:w-[50%] m-auto pt-[60px]">
			<NotLoggedIn/>
		</div>
	{/if}
		
		<main class="w-full lg:w-[50%] m-auto pt-[60px] min-h-[100vh]">
			<slot {data}/>
		</main>

		<FooterMobil/>
</div>
