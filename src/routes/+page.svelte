<script>
	
	import { postStore, addPost, removePost } from '$lib/store/postStore.js';
    import Post from '../components/landing/Post.svelte';
</script>

<svelte:head>
	<title>Rumble</title>
	<meta name="description" content="meet new people meet new ideas.." />
</svelte:head>

<section>
<Post posts={$postStore.posts}/>
</section>
