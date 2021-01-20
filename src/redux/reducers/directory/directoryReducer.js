const initailState = {
  directories: [
    {
      title: "gin",
      imageUrl:
        "https://images.unsplash.com/photo-1536942192778-d9aabc82a47d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      id: 1,
      linkUrl: "product/gin",
    },
    {
      title: "whisky",
      imageUrl:
        "https://images.unsplash.com/photo-1579042749938-3f08e3372a0e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      id: 2,
      linkUrl: "product/whisky",
    },
    {
      title: "vodka",
      imageUrl:
        "https://images.unsplash.com/photo-1598509523659-6d5cd643c571?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fHZvZGthfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      id: 3,
      linkUrl: "product/vodka",
    },
  ],
};

const directoryReducer = (state=initailState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default directoryReducer