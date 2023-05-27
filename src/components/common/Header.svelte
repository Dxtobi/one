<script>
	//import { Icon } from 'svelte-icons-pack/Icon.svelte';
    import { imgLink } from '$lib/utils/utils';
    /**
     * @type {{ user: any; }}
     */
     export let data
   //console.log(data)
</script>
<style>
    .glass-component {
  
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.2); /* Transparent white background */
  backdrop-filter: blur(10px); /* Applies the blur effect */
  box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, 0.053);
}

.glass-content {
  position: relative;
  /* Ensures content is displayed above the background */
}
.box-sh{
    box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, 0.053);
}
 

</style>
<header>
	{#if data.user}
        <div class=" fixed glass-component p-3 w-full top-0 left-0 man-h-[60px] z-40">
            <div class="w-full border-blue-400 flex justify-between  glass-content z-50">
                
                <a href="/" class=" font-bold text-lg">
                    Trybe
                </a>

                <a href='/profile'>
                    <img src={imgLink('users', data.user.id, data.user.avatar)} alt='' class="w-[30px] h-[30px] rounded-full object-contain box-sh"/>
                </a>
            </div>
        </div>
    {:else}
    <div class=" fixed glass-component p-3 w-full top-0 left-0 man-h-[60px]">
        <div class="w-full border-blue-400 flex justify-center  glass-content">LOGIN</div>
    </div>
    {/if}
</header>

