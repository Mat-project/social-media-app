import { Link,Route,Routes, useNavigate } from 'react-router-dom';
import Header from './header'
import Footer from './footer';
import Nav from './Nav';
import About from './About';
import Missing from './Missing';
import NewPost from './NewPost';
import PostPage from './PostPage';
import Home from './Home';
import { useEffect, useState } from 'react';
import api from "./api/posts"
import { format } from 'date-fns';
function App() {
const [search,setSearch]=useState("")
const navigate=useNavigate()
const [posts,setPosts] = useState([])
const [searchReasults,setSearchReasults]=useState([ ])
const [postBody,setPostBody]=useState('')
const [postTitle,setPostTitle] =useState('')
useEffect(()=>{
  const fetchData=async () =>{
    try{
      const response =await api.get('/posts')
      setPosts(response.data)
    }
    catch(err){
      if (err.response){
        console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
      }else{
        console.log(`Error:${err.message}`)
      }
    }
  }
  fetchData();
},[])

useEffect(()=>{
const result =
  posts.filter((post)=>(
  (post.body).toLowerCase())
  .includes(search.toLowerCase())
  ||
  ((post.title).toLowerCase())
  .includes(search.toLowerCase()))

  setSearchReasults(result.reverse())
},[posts,search])

const hSumit=async (e)=>{
  e.preventDefault()
  const id =posts.length ? posts[posts.length -1].id +1:1
  const dateTime= format(new Date(),'MMMM dd yyyy pp')
  const newPost = {id,title:postTitle,dateTime,body:postBody}

  const response =await api.post('./posts',newPost)
  const all=[...posts,newPost]
  setPosts(all)
  setPostTitle('')
  setPostBody('')
  navigate('/')
}
  const hDelete = async(id)=>{
    try{
      await api.delete(`posts/${id}`)
    
    const del=posts.filter(post=>post.id!==id)
    setPosts(del)
    navigate('/')
    }
    catch(err){
      console.log(`Error:${err.message}`)
    }
  }


  return (
    <div className="App">  
      <Header/>
      <Nav
      search={search}
      setSearch={setSearch}
      />
      <Routes>
         <Route path='/' element={<Home posts={searchReasults}
      />} />
      

      <Route path='post'>
        <Route index element={<NewPost
        postBody={postBody}
        setPostBody={setPostBody}
        postTitle={postTitle}
        setPostTitle={setPostTitle}
        hSumit={hSumit}/>}/>
        <Route path=':id' element={<PostPage 
        posts={posts}
        hDelete={hDelete}/>}/>        
      </Route>
      
      {/* <PostPage/> */}
      <Route path='About' element={<About/>}/>
      <Route path='*' element={<Missing/>}/> 
  </Routes>
      <Footer/> 
    </div>
  );
}

export default App;
