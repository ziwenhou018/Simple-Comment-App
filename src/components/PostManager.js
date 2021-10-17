import React, { useState } from 'react'
import Post from './Post'

const PostManager = ({ posts, style }) => (<div>{posts.map(({ name, description }) => <Post name={name} description={description} level={0} style={style} />)}</div>)

export default PostManager
