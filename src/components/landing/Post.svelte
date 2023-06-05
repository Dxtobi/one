<script>
  import PostDetails from './PostDetails.svelte';

    import BsBullseye from "svelte-icons-pack/bs/BsBullseye";
    import AiFillHeart from "svelte-icons-pack/ai/AiFillHeart";
    import BiBookmark from "svelte-icons-pack/bi/BiBookmark";
    import BiComment from "svelte-icons-pack/bi/BiComment";
    import FaEye from "svelte-icons-pack/fa/FaEye";
    import Icon from "svelte-icons-pack";
    
    export let posts
    export let showMedia = true; 
  </script>
  
  <div class="container mx-auto pb-10">
    {#each posts as post}
      <PostDetails post={post}/>
    {/each}
  </div>
  
  <style>
    /* Optional: You can customize the styles further if needed */
  </style>
  