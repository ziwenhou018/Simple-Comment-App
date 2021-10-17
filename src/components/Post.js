import React, { useState } from 'react'
import NewPost from './NewPost'

const Post = ({
  name, description, level, style,
}) => {
  const [replies, setReplies] = useState([])
  const [votes, setVotes] = useState(0)
  const [showReply, setShowReply] = useState(false)

  const createNewReply = newReply => {
    setReplies([...replies, newReply])
  }

  const formattedReplies = () => (
    <div>
      {replies.map(reply => (
        <Post
          name={reply.name}
          description={reply.description}
          level={level + 1}
        />
      ))}
    </div>
  )

  const showReplySection = () => {
    if (showReply) {
      return (
        <>
          <button type="button" onClick={() => setShowReply(!showReply)}>
            Reply?
          </button>
          <NewPost replyTo={name} createNewPost={createNewReply} />
        </>
      )
    }
    return (
      <button type="button" onClick={() => setShowReply(!showReply)}>
        Reply?
      </button>
    )
  }

  return (
    <div style={{ ...style, paddingLeft: `${(level + 1) * 20}px` }}>
      <div
        style={{
          display: 'flex',
          borderRadius: '5px',
          boxShadow: '0px 0px 2px rgba(66, 66, 66, 0.75)',
          padding: '10px',
          margin: '8px',
        }}
      >
        <div>
          <div style={{ color: 'blue' }}>{name}</div>
          <br />
          <div>{description}</div>
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <button
            type="button"
            style={{ margin: '5px' }}
            onClick={() => setVotes(votes + 1)}
          >
            ↑
          </button>
          {votes}
          <button
            type="button"
            style={{ margin: '5px' }}
            onClick={() => setVotes(votes - 1)}
          >
            ↓
          </button>
        </div>
      </div>
      {formattedReplies()}
      {level < 2 ? showReplySection() : null}
    </div>
  )
}

export default Post
