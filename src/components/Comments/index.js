import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {name: '', userComment: '', commentDetails: [], count: 0}

  onSubmitComment = event => {
    const {name, userComment} = this.state
    event.preventDefault()
    const newComment = {
      id: uuidv4,
      name,
      userComment,
      isliked: false,
    }
    this.setState(prevState => ({
      commentDetails: [...prevState.commentDetails, newComment],
      name: '',
      userComment: '',
      count: prevState.count + 1,
    }))
  }

  deletedCommentList = id => {
    const {commentDetails} = this.state
    const newDeletedCommentList = commentDetails.filter(
      eachcomment => eachcomment.id !== id,
    )
    this.setState(prevState => ({
      commentDetails: newDeletedCommentList,
      count: prevState.count - 1,
    }))
  }

  onNameInput = event => {
    this.setState({name: event.target.value})
  }

  userCommentInput = event => {
    this.setState({userComment: event.target.value})
  }

  render() {
    const {name, userComment, commentDetails, count} = this.state
    const timeDistance = formatDistanceToNow(new Date())
    console.log(name, userComment)
    console.log(commentDetails)
    return (
      <div className="bg-container">
        <h1 className="main-heading">Comments</h1>
        <div>
          <div className="form-container">
            <form onSubmit={this.onSubmitComment}>
              <p className="main-para">Say something about 4.0 Technologies</p>
              <input
                value={name}
                onChange={this.onNameInput}
                className="userNameInput"
                placeholder="Your Name"
              />
              <br />
              <textarea
                value={userComment}
                onChange={this.userCommentInput}
                className="userCommentInput"
                placeholder="Your Comment"
              />
              <br />
              <button type="submit" className="btn-style">
                Add Comment
              </button>
            </form>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
                className="comment-image"
                alt="comments"
              />
            </div>
          </div>
          <div className="comment-count-container">
            <p className="span-bg">{count}</p>
            <p className="comment-style">Comments</p>
          </div>
          <ul className="user-comment-container">
            {commentDetails.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                eachComment={eachComment}
                initialContainerBackgroundClassNames={
                  initialContainerBackgroundClassNames
                }
                timeDistance={timeDistance}
                deletedCommentList={this.deletedCommentList}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
