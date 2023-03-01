const state = {
  profilePage: {
    posts: [
      {id: 1, message: 'Hi, how are you?', likes: '23'},
      {id: 2, message: "It's my first post!", likes: '50'},
      {id: 3, message: "I'm from index.js!!", likes: '999'},
    ],

    avatar: 'https://gateway.fxhash.xyz/ipfs/QmdUBkPicm7zAdXvyEYWv4BbrnEC3LeFr9dCogqxMTEPjT',
  },

  messagesPage: {
    dialogs: [
      {id: 1, name: 'Alex', avatar: 'https://gateway.fxhash.xyz/ipfs/QmW4qMkfNBy62eSgx969i5qob3o74PD8996JXCFsefrTKk'},
      {id: 2, name: 'John', avatar: 'https://gateway.fxhash.xyz/ipfs/QmZW3YtzQvGcMWzfjwaWTfMacwmgzY6Cs9f7WhBqSsafnU'},
      {id: 3, name: 'Timmy', avatar: 'https://gateway.fxhash.xyz/ipfs/QmWRrMwgrMadkvmUci5sVFNXoFkNpQhDDoSkD29mM1Axzt'},
      {id: 4, name: 'Sam', avatar: 'https://gateway.fxhash.xyz/ipfs/QmcxAaqEk16SnJKpZsxVBpC7cV5RbH6nhYHQpY8asJzUnv'},
      {id: 5, name: 'Bob', avatar: 'https://gateway.fxhash.xyz/ipfs/QmReUoLdjNbW7o3GizbtwuhyHZwPUd8fRy2Dz8sLYU9DHn'},
    ],

    messages: [
      {id: 1, text: 'Hello!'},
      {id: 2, text: 'Oh, Hi'},
      {id: 3, text: 'What are you doing?'},
      {id: 4, text: "I'm learning JS!"}
    ],
  }
}

export default state;