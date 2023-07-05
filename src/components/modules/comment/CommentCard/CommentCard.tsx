import { Avatar } from '@/components/ui/Avatar';

import { formatDistanceToNow } from 'date-fns'

const CommentCard = ({ comment }) => {
  
  return (
    <div className="flex space-x-3 animate-appear opacity-0 translate-y-[-5px]">
        <div className="flex-shrink-0">
          <Avatar src={comment.userImage} alt={`Avatar of ${comment.user.fullName}`} /> 
        </div>
        <div className="min-w-0 flex-1 grid grid-cols-[auto_1fr] grid-rows-[auto_auto_auto] sm:grid-rows-[auto_auto] gap-x-3 gap-y-1">
          <p className='text-black text-left justify-self-start'>{comment.user.fullName}</p>
          <span className='text-sm text-[#9197a1] row-start-2 sm:row-start-1 sm:col-start-2 justify-self-start self-center'>{`${formatDistanceToNow(comment.created)} ago`}</span>
          <p className='text-black text-left pt-2 sm:pt-0 col-start-1 col-end-3 max-w-[75ch]'>{comment.description}</p>
        </div>
    </div>
  )
}

export default CommentCard;