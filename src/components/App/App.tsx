import { JSX } from 'react'
import { CommentForm } from '../modules/comment/CommentForm'
import React from 'react'

// Styles
import '@/styles/App.css'
import { CommentList } from '../modules/comment/CommentList'

// Faker
import { createUserImage } from '@/factories/data/userFactory';
import { createUser } from '@/factories/data/userFactory';

const App = () : JSX.Element => {

  const [comments, setComments] = React.useState([]);
  console.log({comments})

  const user = createUser();
  const userImage = createUserImage();

  function handleCreateComment(title: string, description: string) {
    const created = new Date();
    const nextComment = {
      title,
      description,
      user,
      userImage,
      created
    }
    handleAddComment(nextComment)
    return nextComment;
  }

  function handleAddComment(newComment: object) {
    console.log({ newComment })
    setComments([...comments, newComment])
  }
  
  return (
    <>
      <div className='max-w-[800px] my-0 mx-auto px-2 sm:px-3'>
        <CommentForm handleCreateComment={handleCreateComment} user={user} userImage={userImage} />
        <CommentList comments={comments} />
      </div>
    </>
  )
}

export default App
