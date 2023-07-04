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
import WithTitleAndPillActionsTextArea from '../../../ui/WithTitleAndPillActionsTextArea/WithTitleAndPillActionsTextArea';



const CommentForm = ({ handleCreateComment, user, userImage }) => {

  return (
    <div className="bg-white px-4 py-6 sm:px-6 rounded-t-md shadow-md">
      <div className="flex flex-col gap-3 sm:gap-0 sm:flex-row sm:space-x-3">
          <div className="flex-shrink-0">
              <Avatar src={userImage} alt={`Avatar of ${user.fullName}`} /> 
          </div>
          <div className="min-w-0 flex-1">
              <WithTitleAndPillActionsTextArea handleCreateComment={handleCreateComment}/>
          </div>
      </div>
    </div>
  )
}

export default CommentForm;