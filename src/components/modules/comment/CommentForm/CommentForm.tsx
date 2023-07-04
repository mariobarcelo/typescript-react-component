/*
 * Author: Luigelo Davila Vilchez (luigelo.davila@applus.com)
 * -----
 * Last Modified: Thursday, 22nd June 2023 5:56:57 pm
 * -----
 * Copyright ©2023, Applus+ Laboratories
 */

import React from 'react';
import { v4 as uuidv4 } from 'uuid';

// Components
// Todo: Add Avatar component
import Avatar from '../../../ui/Avatar/Avatar';
// Todo: Add WithTitleAndPillActionsTextArea component
import WithTitleAndPillActionsTextArea from '../../../ui/WithTitleAndPillActionsTextArea/WithTitleAndPillActionsTextArea';

// Faker
import { createUserImage } from '@/factories/data/userFactory';
import { createUser } from '@/factories/data/userFactory';

const CommentForm = () => {
  
  // Data
  const user = createUser();
  const userImage = createUserImage();

  const [posts, setPosts] = React.useState([]);
  const [isDisabled, setIsDisabled] = React.useState(false);

  function handleCreatePosts(title: string, description: string) {
    const nextPost = {
      id: uuidv4(),
      title,
      description
    }
    console.log({ nextPost })
    setPosts([...posts, nextPost])
    return nextPost;
  }

  return (
    <div className="bg-white px-4 py-6 sm:px-6">
      <div className="flex space-x-3">
          <div className="flex-shrink-0">
              <Avatar src={userImage} alt={`Avatar of ${user.fullName}`} /> 
          </div>
          <div className="min-w-0 flex-1">
              <WithTitleAndPillActionsTextArea handleCreatePosts={handleCreatePosts} disabled={isDisabled}/>
          </div>
      </div>
    </div>
  )
}

export default CommentForm;