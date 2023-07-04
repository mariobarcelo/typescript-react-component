import { CommentCard } from '../CommentCard';


const CommentList = ({ comments }) => {

  if(!comments || comments.length === 0) return
  
  return (
    <div className="bg-[#f8f8fa] px-4 py-6 sm:px-6 border-t flex flex-col gap-y-8 rounded-b-md shadow-md">
      {comments.map(comment => (
        <CommentCard key={comment.user.id} comment={comment} />
      ))}
    </div>
  )
}

export default CommentList;