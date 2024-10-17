import './Post.css'
export default function Post ({post}){
    const {title, id, body, userId} = post;
    return (
        <div className='post'>
            <h4>Title: {title}</h4>
            <p><small>User Id: {userId}</small></p>
            <p><small>Post Id: {id}</small></p>
            <p>{body}</p>
        </div>
    )
}