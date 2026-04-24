import React, { useState } from 'react'
import PostsLists from './components/PostsLists.jsx'
import './App.css'

const App = () => {

  const [toggle, settoggle]=useState(true)

  return (
    <div>
      <h2 className='title'>MY POSTS</h2>
      <button onClick={()=>{settoggle(!toggle)}}>Toggle</button>
      {toggle && <PostsLists/>}
    </div>
  )
}

export default App