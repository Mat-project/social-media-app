import React from 'react'

const NewPost = ({hSumit,postTitle,setPostTitle,postBody,setPostBody}) => {
  return (
    <main className='NewPost'>
      <h2>NewPost</h2>
      <form action="" className='newPostForm' onSubmit={hSumit}>
      <label htmlFor="postTitle">title:</label>
        <input type="text" 
        id='postTitle'
        required
        value={postTitle}
        onChange={(e)=>setPostTitle(e.target.value)}
        />
        <label htmlFor="postBody">post:</label>
        <textarea 
        id='postBody'
        type="text"
        required
        value={postBody}
        onChange={(e)=>setPostBody(e.target.value)}
        
        />
        <button type='submit' >submit</button>

      </form>
    </main>
  )
}

export default NewPost