import { writable } from 'svelte/store';

// data.js

const avatarURL = 'https://api.dicebear.com/6.x/lorelei/svg';

export const users = [
  { id: 1, name: "John Doe", avatar: avatarURL },
  { id: 2, name: "Jane Smith", avatar: avatarURL },
  { id: 3, name: "Alice Johnson", avatar: avatarURL },
  // Add more users as needed
];

export const groups = [
  { id: 1, name: "Group 1", avatar: avatarURL },
  { id: 2, name: "Group 2", avatar: avatarURL },
  { id: 3, name: "Group 3", avatar: avatarURL },
  // Add more groups as needed
];

export const channels = [
  { id: 1, name: "Channel 1", avatar: avatarURL },
  { id: 2, name: "Channel 2", avatar: avatarURL },
  { id: 3, name: "Channel 3", avatar: avatarURL },
  // Add more channels as needed
];

  
// Initial state
const initialState = {
    users: users,
    groups: groups,
    channels: channels
};

// Create a writable store
export const community = writable(initialState);

// Actions
