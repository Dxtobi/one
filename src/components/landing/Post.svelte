<script>
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
      <div class="flex border-b border-gray-200 p-4 gap-3 bg-white my-4 rounded-xl">
        <div class="w-[15%]">
          <img class="w-12 h-12 rounded-full object-cover" src={post.user.avatar} alt={post.user.username} />
        </div>
        <div class="w-[80%]">
          <div class="flex items-center mb-2">
            <h3 class="font-bold text-lg">{post.user.username}</h3>
            <span class="ml-2 text-gray-500">{post.user.handle}</span>
          </div>
          <p class="text-gray-800 mb-2 whitespace-normal break-words line-clamp-4">{post.content}</p>
          {#if showMedia && post.media}
            {#if post.media.type === 'image'}
              <img class="max-w-full rounded-lg mb-2" src={post.media.url} alt="Media" />
            {/if}
            {#if post.media.type === 'video'}
              <video class="max-w-full rounded-lg mb-2" src={post.media.url} controls><track kind="captions"/></video>
              
            {/if}
          {/if}
          <span class="mr-4 text-gray-500 text-sm">{post.date}</span>
          <div class="flex text-gray-500 justify-between">
            
            <button  class="">{post.views} <Icon src={FaEye} size={25}/></button>
            <button  class="">{post.reactions}  <Icon src={AiFillHeart} size={25}/></button>
            <button  class="">{post.saved}  <Icon src={BiBookmark} size={25}/></button>
            <button >{post.comments}  <Icon src={BiComment} size={25}/></button>
          </div>
        </div>
      </div>
    {/each}
  </div>
  
  <style>
    /* Optional: You can customize the styles further if needed */
  </style>
  