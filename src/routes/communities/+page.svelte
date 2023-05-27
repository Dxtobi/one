<script>
    import { community } from "$lib/store/comStore";

    
  
    let activeTab = 'users';
  
    function switchTab(tab) {
      activeTab = tab;
    }
  </script>
  
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
  
    .user-list {
      max-height: 80vh;
      overflow-y: auto;
    }
  
    .user-item {
      display: flex;
      align-items: center;
      padding: 1rem 0rem;
      border-bottom: 1px solid #ddd;
    }
  
    .user-avatar {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      object-fit: cover;
    }
  
    .user-info {
      margin-left: 1rem;
    }
  
    .user-name {
      font-weight: bold;
    }
  
    .last-message {
      color: #888;
    }
  </style>
  
  <div class=" min-h-screen ">
    <div class="flex justify-between mb-4">
      <div
        class="tab mr-2"
        class:tab-active={activeTab === 'users'}
        on:click={() => switchTab('users')}
        on:keydown={() => switchTab('users')}
      >
        Users
      </div>
      <div
        class="tab mr-2"
        class:tab-active={activeTab === 'channels'}
        on:click={() => switchTab('channels')}
        on:keydown={() => switchTab('channels')}
      >
        Channels
      </div>
      <div
        class="tab"
        class:tab-active={activeTab === 'groups'}
        on:click={() => switchTab('groups')}
        on:keydown={() => switchTab('groups')}
        
      >
        Groups
      </div>
    </div>
  
    <div class="user-list">
      {#if activeTab === 'users'}
        {#each $community.users as user}
          <div class="user-item">
            <img class="user-avatar" src={user.avatar} alt="User Avatar" />
            <div class="user-info">
              <div class="user-name">{user.name}</div>
              <div class="last-message">Last message here</div>
            </div>
          </div>
        {/each}
      {:else if activeTab === 'channels'}
        {#each $community.channels as channel}
          <div class="user-item">
            <img class="user-avatar" src={channel.avatar} alt="Channel Avatar" />
            <div class="user-info">
              <div class="user-name">{channel.name}</div>
              <div class="last-message">Last message here</div>
            </div>
          </div>
        {/each}
      {:else if activeTab === 'groups'}
        {#each $community.groups as group}
          <div class="user-item">
            <img class="user-avatar" src={group.avatar} alt="Group Avatar" />
            <div class="user-info">
              <div class="user-name">{group.name}</div>
              <div class="last-message">Last message here</div>
            </div>
          </div>
        {/each}
      {/if}
    </div>
  </div>
  