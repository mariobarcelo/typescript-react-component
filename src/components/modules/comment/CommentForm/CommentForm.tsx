/*
 * Author: Luigelo Davila Vilchez (luigelo.davila@applus.com)
 * -----
 * Last Modified: Thursday, 22nd June 2023 5:56:57 pm
 * -----
 * Copyright ©2023, Applus+ Laboratories
 */


// Components
// Todo: Add Avatar component
import Avatar from '../../../ui/Avatar/Avatar';
// Todo: Add WithTitleAndPillActionsTextArea component

// Faker
import { createUserImage } from '@/factories/data/userFactory';
import { createUser } from '@/factories/data/userFactory';

const CommentForm = () => {
  
  // Data
  const user = createUser();
  console.log({user})
  const userImage = createUserImage();
  console.log({userImage})


  // TODO: Add uploading dynamic state

  return (
    <div className="bg-white px-4 py-6 sm:px-6">
      <div className="flex space-x-3">
          <div className="flex-shrink-0">
             // TODO: Add Avatar component
              <Avatar src={userImage} alt={`Avatar of ${user.fullName}`} /> 
          </div>
          <div className="min-w-0 flex-1">
              // Todo: Add WithTitleAndPillActionsTextArea component
          </div>
      </div>
    </div>
  )
}

export default CommentForm;