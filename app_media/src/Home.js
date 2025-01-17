import React from 'react'
import Feed from './feed'

const Home = ({posts}) => {
  return (
    <main className='Home'>
      {posts.length ? (<Feed posts={posts}/>) : 
      (
      <p style={{marginTop:"2rem"}}>
        No Post To Display
      </p>
      )
      }

    </main>
  )
}

export default Home