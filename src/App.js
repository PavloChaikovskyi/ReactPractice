import React, { useEffect, useState } from "react"; // add to every file with component
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
// import PostItem from "./components/PostItem"
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";
import MyButton from "./components/UI/button/MyButton"; 
// import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
// import MySelect from "./components/UI/select/MySelect";
import MyModal from "./components/UI/MyModal/MyModal";
import { usePosts } from "./hooks/usePosts";
// import axios from "axios";
import PostService from "./API/PostService";
import Loader from "./components/UI/loader/Loader";

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort:'', query: ''})
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [isPostsLoading, setIsPostsLoading] = useState(false)

  useEffect(() => {
    fetchPosts()
  }, [])

  const createPost = (newPost) => {
    setPosts( [...posts, newPost])
      setModal(false)
  }

  async function fetchPosts() {
    setIsPostsLoading(true)
    setTimeout( async () => {
     const posts = await PostService.getAll()
     setPosts(posts)
     setIsPostsLoading(false)
    }, 1000)
  }

  // get post from child component 
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">  

    <button onClick={fetchPosts}> GET POSTS </button>

    <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
      Create user
    </MyButton>    
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter 
        filter={filter}  
        setFilter={setFilter}
      />

      {isPostsLoading
      ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader /></div>
      : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Post List 1'}/>
      }
      
    </div>
  );
}

export default App;
