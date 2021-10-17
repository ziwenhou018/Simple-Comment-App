import React, { useEffect, useState } from 'react'

import NewPost from './NewPost'
import PostManager from './PostManager'

const App = () => {
  const [posts, setPosts] = useState([])

  const createNewPost = newPost => {
    setPosts([...posts, newPost])
  }

  return (
    <>
      <h2>HW 4</h2>
      <h1 style={{ textAlign: 'center' }}>What&apos;s on your mind?</h1>
      <NewPost
        style={{
          borderRadius: '8px',
          boxShadow: '0px 0px 5px 2px rgba(66, 66, 66, 0.75)',
          padding: '25px',
          width: '800px',
          margin: 'auto',
        }}
        createNewPost={createNewPost}
      />
      <br />
      <PostManager
        posts={posts}
        style={{
          borderRadius: '5px',
          boxShadow: '0px 0px 2px rgba(66, 66, 66, 0.75)',
          padding: '25px',
          width: '800px',
          margin: 'auto',
        }}
      />
    </>
  )
}

export default App
