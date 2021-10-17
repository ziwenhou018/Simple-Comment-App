import React, { useEffect, useState } from 'react'
import customStyles from './styles.css'

const NewPost = ({ replyTo, createNewPost, style }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState(replyTo ? `@${replyTo} ` : '')

  const submit = () => {
    if (name.length > 0 && description.length > 0) {
      createNewPost({
        name,
        description,
      })
      setName('')
      setDescription('')
    }
  }

  return (
    <>
      <form style={style}>
        <div>
          <input
            type="text"
            placeholder="Name..."
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </div>
        <div>
          <textarea
            rows="6"
            cols="60"
            type="text"
            placeholder="Today, I won the lottery..."
            value={description}
            onChange={event => setDescription(event.target.value)}
          />
        </div>
        <div>
          <input type="button" value="Submit" onClick={submit} />
        </div>
      </form>
    </>
  )
}

export default NewPost
