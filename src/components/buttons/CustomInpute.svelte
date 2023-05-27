<script>
    import { createEventDispatcher } from 'svelte';
  
    let selectedFiles = [];
    const dispatch = createEventDispatcher();
  
    function handleFileInput(event) {
      selectedFiles = Array.from(event.target.files);
    }
  
    function handleRemove(index) {
      selectedFiles.splice(index, 1);
    }
  
    function handleSubmit() {
      dispatch('filesSelected', selectedFiles);
    }
  </script>
  
  <div class="relative">
    <input type="file" class="hidden" id="fileInput" multiple on:change={handleFileInput} />
    <label for="fileInput" class="cursor-pointer bg-gray-200 py-2 px-4 rounded-lg text-center text-gray-700 hover:bg-gray-300">
      Select Files
    </label>
    <ul class="mt-2">
      {#each selectedFiles as file, index (file.name)}
        <li class="flex items-center gap-2 py-1">
          <span>{file.name}</span>
          <button class="text-red-600" on:click={() => handleRemove(index)}>Remove</button>
        </li>
      {/each}
    </ul>
    {#if selectedFiles.length > 0}
      <button class="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg" on:click={handleSubmit}>Submit</button>
    {/if}
  </div>
  