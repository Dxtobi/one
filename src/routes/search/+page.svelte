<script>
  import Icon from "svelte-icons-pack";
  import BsSearch from "svelte-icons-pack/bs/BsSearch";
  import { invalidateAll } from "$app/navigation";
  import { applyAction, deserialize } from "$app/forms";
  import { imgLink } from "$lib/utils/utils";
  import PostDetails from "../../components/landing/PostDetails.svelte";

  let search = "";
  let searchData = null;
  let activeTab = "people";

  function switchTab(tab) {
    activeTab = tab;
  }

  let error;
  async function handleSubmit(event) {
    const data = new FormData(this);

    const response = await fetch(this.action, {
      method: "POST",
      body: data,
    });

    /** @type {import('@sveltejs/kit').ActionResult} */

    const result = deserialize(await response.text());

    if (result.type === "success") {
      // re-run all `load` functions, following the successful update
      searchData = result.data;
      console.log(searchData);
      await invalidateAll();
    }

    applyAction(result);
  }
</script>

<div class=" min-h-screen">
  <header class="bg-white shadow-lg px-4 py-2 rounded">
    <form
      method="POST"
      on:submit|preventDefault={handleSubmit}
      class="flex items-center justify-between"
    >
      <div class="flex items-center">
        <input
          type="text"
          class="ml-2 bg-blue-200 rounded-full py-2 px-4 focus:outline-none"
          name="search"
          bind:value={search}
          placeholder="Search Twitter"
        />
      </div>
      <button class="bg-blue-500 text-white rounded-full px-4 py-2"
        ><Icon src={BsSearch} size={25} /></button
      >
    </form>
  </header>
  <div class="flex justify-between mb-4">
    <div
      class="tab mr-2"
      class:tab-active={activeTab === "people"}
      on:click={() => switchTab("people")}
      on:keydown={() => switchTab("people")}
    >
      People
    </div>
    <div
      class="tab mr-2"
      class:tab-active={activeTab === "posts"}
      on:click={() => switchTab("posts")}
      on:keydown={() => switchTab("posts")}
    >
      Posts
    </div>
    <div
      class="tab"
      class:tab-active={activeTab === "rooms"}
      on:click={() => switchTab("rooms")}
      on:keydown={() => switchTab("rooms")}
    >
      Rooms
    </div>
  </div>
  <main class="my-4 flex flex-col gap-2">
    <!-- Search results -->
    {#if searchData != null}
      {#if activeTab === "people"}
        {#each searchData?.people?.items as person}
          <div class="bg-white rounded-lg shadow p-4 mb-4">
            <!-- Result 1 -->
            <div class="flex items-center mb-2">
              <img
                src={imgLink("users", person.id, person.avatar)}
                alt="User Avatar"
                class="w-10 h-10 rounded-full"
              />
              <div class="ml-2">
                <p class="font-bold">{person.name}</p>
                <p class="text-gray-500">@{person.username}</p>
              </div>
            </div>
          </div>
        {/each}
      {:else if activeTab === "rooms"}
        {#each searchData?.rooms?.items as room}
          <a
            href={`/communities/${room.id}`}
            class="bg-white rounded-lg p-4 mb-4 w-full"
          >
            <!-- Result 1 -->
            <div class="flex items-center mb-2">
              <div class="ml-2">
                <p class="font-bold">{room?.room_name}</p>
                <p class="text-gray-500 line-clamp-1">{room?.room_disc}</p>
              </div>
            </div>
          </a>
          <a
            href={`/communities/${room.id}`}
            class="bg-white rounded-lg p-4 mb-4 w-full"
          >
            <!-- Result 1 -->
            <div class="flex items-center mb-2">
              <div class="ml-2">
                <p class="font-bold">{room?.room_name}</p>
                <p class="text-gray-500 line-clamp-1">{room?.room_disc}</p>
              </div>
            </div>
          </a>
        {/each}
      {:else if activeTab === "posts"}
        {#each searchData?.posts?.items as post}
          <PostDetails {post} />
        {/each}
      {/if}
    {/if}

    <!-- End of search results -->
  </main>
</div>

<style>
  .tab {
    display: inline-block;
    cursor: pointer;
    padding: 0.5rem 1rem;
  }

  .tab-active {
    font-weight: bold;
    color: #075e54;
  }
</style>
