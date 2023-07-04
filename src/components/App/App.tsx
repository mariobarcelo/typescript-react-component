import { JSX } from 'react'
import { CommentForm } from '../modules/comment/CommentForm'
import React from 'react'

// Styles
import '@/styles/App.css'
import { CommentList } from '../modules/comment/CommentList'

const App = () : JSX.Element => {

  const [comments, setComments] = React.useState([]);
  console.log({comments})

  function handleCreateComment(newComment: object) {
    console.log({ newComment })
    setComments([...comments, newComment])
  }
  
  return (
    <>
      <div className='max-w-[800px] my-0 mx-auto'>
        <CommentForm handleCreateComment={ handleCreateComment } />
        <CommentList comments={comments} />
      </div>
    </>
  )
}

export default App
