<script>
	
	import { postStore, addPost, removePost } from '$lib/store/postStore.js';
    import Post from '../components/landing/Post.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
<Post posts={$postStore.posts}/>
</section>
