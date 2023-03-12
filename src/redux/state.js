const store = {
  _callSubscriber() {},

  _state: {
    sidebar: {
      bestFriends: [
        {id: 1, name: 'Alex', avatar: 'https://gateway.fxhash.xyz/ipfs/QmW4qMkfNBy62eSgx969i5qob3o74PD8996JXCFsefrTKk'},
        {id: 2, name: 'John', avatar: 'https://gateway.fxhash.xyz/ipfs/QmZW3YtzQvGcMWzfjwaWTfMacwmgzY6Cs9f7WhBqSsafnU'},
        {id: 3, name: 'Timmy', avatar: 'https://gateway.fxhash.xyz/ipfs/QmWRrMwgrMadkvmUci5sVFNXoFkNpQhDDoSkD29mM1Axzt'},
      ],
    },
  
    profilePage: {
      myInfo: [
        {name: 'tertiomodo', avatar: 'https://gateway.fxhash.xyz/ipfs/QmdUBkPicm7zAdXvyEYWv4BbrnEC3LeFr9dCogqxMTEPjT'}
      ],
  
      newPostText: '',
  
      posts: [
        {id: 1, message: 'Hi, how are you?', likes: '23'},
        {id: 2, message: "It's my first post!", likes: '50'},
        {id: 3, message: "I'm from index.js!!", likes: '999'},
      ],
    },
  
    messagesPage: {
      dialogs: [
        {id: 1, name: 'Alex', avatar: 'https://gateway.fxhash.xyz/ipfs/QmW4qMkfNBy62eSgx969i5qob3o74PD8996JXCFsefrTKk'},
        {id: 2, name: 'John', avatar: 'https://gateway.fxhash.xyz/ipfs/QmZW3YtzQvGcMWzfjwaWTfMacwmgzY6Cs9f7WhBqSsafnU'},
        {id: 3, name: 'Timmy', avatar: 'https://gateway.fxhash.xyz/ipfs/QmWRrMwgrMadkvmUci5sVFNXoFkNpQhDDoSkD29mM1Axzt'},
        {id: 4, name: 'Sam', avatar: 'https://gateway.fxhash.xyz/ipfs/QmcxAaqEk16SnJKpZsxVBpC7cV5RbH6nhYHQpY8asJzUnv'},
        {id: 5, name: 'Bob', avatar: 'https://gateway.fxhash.xyz/ipfs/QmReUoLdjNbW7o3GizbtwuhyHZwPUd8fRy2Dz8sLYU9DHn'},
      ],
  
      newMessageText: '',
  
      messages: [
        {id: 1, text: 'Hello!'},
        {id: 2, text: 'Oh, Hi'},
        {id: 3, text: 'What are you doing?'},
        {id: 4, text: "I'm learning JS!"},
      ],
    }
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  // addPost() {
  //   const newPost = {
  //     id: this._state.profilePage.posts.length + 1,
  //     message: this._state.profilePage.newPostText,
  //     likes: 0,
  //   };
  
  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText = '';
  //   this._callSubscriber(this._state);
  // },

  // updateNewPostText(newPostText) {
  //   this._state.profilePage.newPostText = newPostText;
  //   this._callSubscriber(this._state);
  // },
  
  // sendMessage() {
  //   const newMessage = {
  //     id: this._state.messagesPage.messages.length + 1,
  //     text: this._state.messagesPage.newMessageText,
  //   }
  
  //   this._state.messagesPage.messages.push(newMessage);
  //   this._state.messagesPage.newMessageText = '';
  //   this._callSubscriber(this._state);
  // },
  
  // updateNewMessageText(newMessageText) {
  //   this._state.messagesPage.newMessageText = newMessageText;
  //   this._callSubscriber(this._state);
  // },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      const newPost = {
        id: this._state.profilePage.posts.length + 1,
        message: this._state.profilePage.newPostText,
        likes: 0,
      };
    
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);

    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newPostText;
      this._callSubscriber(this._state);

    } else if (action.type === 'SEND-MESSAGE') {
      const newMessage = {
        id: this._state.messagesPage.messages.length + 1,
        text: this._state.messagesPage.newMessageText,
      }
    
      this._state.messagesPage.messages.push(newMessage);
      this._state.messagesPage.newMessageText = '';
      this._callSubscriber(this._state);

    } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
      this._state.messagesPage.newMessageText = action.newMessageText;
      this._callSubscriber(this._state);
    }
  },
// store end
}

export default store;