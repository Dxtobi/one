import { writable } from 'svelte/store';

const posts = [
    {
      id: 1,
      user: {
        avatar: 'https://api.dicebear.com/6.x/lorelei/svg',
        username: 'John Doe',
        handle: '@johndoe',
      },
      date: '2023-05-20',
      views: 123,
      reactions: 50,
      saved: 10,
      comments: 5,
      content: 'I am excited about the upcoming soccer tournament. The teams are preparing hard for the matches, and the fans are eagerly waiting to support their favorite teams. Who do you think will win?',
      media: {
        url: 'https://youtu.be/mM5sqLUS4nY',
        type: 'video',
        size: '1024 KB',
        length: '10 seconds',
      },
    },
    {
      id: 2,
      user: {
        avatar: 'https://api.dicebear.com/6.x/bottts/png',
        username: 'Jane Smith',
        handle: '@janesmith',
      },
      date: '2023-05-19',
      views: 87,
      reactions: 32,
      saved: 8,
      comments: 3,
      content: 'I had an amazing experience watching the tennis match yesterday. The players displayed incredible skills and determination. The crowd was electrifying, and the atmosphere was unforgettable!',
      media: {
        url: 'https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200',
        type: 'image',
        size: '512 KB',
        length: 'N/A',
      },
    },
    {
      id: 3,
      user: {
        avatar: 'https://api.dicebear.com/6.x/pixel-art/svg?seed=John&hair=short01,short02,short03,short04,short05',
        username: 'Mark Johnson',
        handle: '@markjohnson',
      },
      date: '2023-05-18',
      views: 102,
      reactions: 45,
      saved: 12,
      comments: 6,
      content: 'I just witnessed an epic basketball game! The teams played their hearts out, and the match went into overtime. The winning shot in the final seconds was a true spectacle. What a thrilling game!',
      media: {
        url: 'https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200',
        type: 'image',
        size: '2048 KB',
        length: 'N/A',
      },
    },
    // ...and so on for the remaining posts
];
  

  
// Initial state
const initialState = {
  posts: posts,
};

// Create a writable store
export const postStore = writable(initialState);

// Actions
export const addPost = (newPost) => {
  postStore.update((state) => {
    return {
      ...state,
      posts: [...state.posts, newPost],
    };
  });
};

export const removePost = (postId) => {
  postStore.update((state) => {
    return {
      ...state,
      posts: state.posts.filter((post) => post.id !== postId),
    };
  });
};
