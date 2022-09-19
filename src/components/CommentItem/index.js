// Write your code here
import './index.css'

const CommentItem = props => {
  const {
    eachComment,
    initialContainerBackgroundClassNames,
    timeDistance,
    deletedCommentList,
  } = props
  const {name, userComment, id} = eachComment

  const onDelete = () => {
    deletedCommentList(id)
  }

  return (
    <li className="list-cont">
      <div className="list-item">
        <div className="name-logo">
          <p>{name[0]}</p>
        </div>
        <div className="comment-cont">
          <p>{`${name}     ${timeDistance}`} </p>
          <p>{userComment}</p>
        </div>
      </div>
      <div className="icon-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
            alt="like"
          />
          <button type="button">Like</button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          alt="delete"
          onClick={onDelete}
        />
      </div>
    </li>
  )
}
export default CommentItem
