import React from 'react'
import { Link,useParams } from 'react-router-dom'

const PostPage = ({posts, hDelete}) => {
  const {id} = useParams()
  const post =posts.find(post =>(post.id).toString()===id)



  return (
    <main className='PostPage'>
      <article className='post'>
        {post &&
        <>
        <h2>{post.title}</h2>
        <p className='postDate'>{post.dateTime}</p>
        <p className='postBody'>{post.body}</p>
        <button className='deleteButton'
        onClick={()=>hDelete(post.id)}>
        delete post
        </button>
        </>}
        {!post &&<>
        <h2> page not found</h2>
        <p>well,</p>
        <p>
          visi our Homepage
        </p>
        </>
        }



    </article>
    </main>
  )
}

export default PostPage