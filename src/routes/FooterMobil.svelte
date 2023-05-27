<script>
import BiMessageSquare from "svelte-icons-pack/bi/BiMessageSquare";
import BiSearch from "svelte-icons-pack/bi/BiSearch";
import BiHomeAlt2 from "svelte-icons-pack/bi/BiHomeAlt2";
import RiMediaNotificationFill from "svelte-icons-pack/ri/RiMediaNotificationFill";

	import "./styles.css";
    import Icon from "svelte-icons-pack";

	//export let data;
	//console.log(data);
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
  z-index: 1; /* Ensures content is displayed above the background */
}

/* Example CSS styles for the Twitter-style navigation footer */

footer {
  height: 60px;
}

nav {
  display: flex;
  justify-content: space-around;
}

a {
  text-decoration: none;
}




</style>

<footer class="fixed bottom-0 left-0 w-full p-3 glass-component">
  <footer class="glass-content">
    <nav class="flex justify-around py-2 items-baseline">
      <a href="/" class="flex flex-col items-center text-gray-500 hover:text-blue-500 transition-colors duration-300" class:active={location.pathname === '/'}>
        <Icon src={BiHomeAlt2} size={24} />
      </a>
      <a href="/communities" class="flex flex-col items-center text-gray-500 hover:text-blue-500 transition-colors duration-300" class:active={location.pathname === '/communities'}>
        <Icon src={BiMessageSquare} size={24} />
      </a>
      <a href="/notification" class="flex flex-col items-center text-gray-500 hover:text-blue-500 transition-colors duration-300" class:active={location.pathname === '/notification'}>
        <Icon src={RiMediaNotificationFill} size={24} />
      </a>
      <a href="/search" class="flex flex-col items-center text-gray-500 hover:text-blue-500 transition-colors duration-300" class:active={location.pathname === '/search'}>
        <Icon src={BiSearch} size={24} />
      </a>
    </nav>
  </footer>
</footer>







