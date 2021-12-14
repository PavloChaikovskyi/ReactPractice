import React, { useMemo, useState } from "react"; // add to every file with component
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
// import PostItem from "./components/PostItem"
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";
// import MyButton from "./components/UI/button/MyButton";
// import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
// import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', body: 'Go Desc'},
    {id: 2, title: 'Go', body: 'Js Desc'},
    {id: 3, title: 'Php', body: 'Php Desc'},
  ])

  const [filter, setFilter] = useState({sort:'', query: ''})

  const sortedPosts = useMemo(() => {
    if(filter.sort) {
      console.log('Func SORTEDPOSTS DID JOB');
      return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts( [...posts, newPost])
  }

  // get post from child component 
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">      
      <PostForm create={createPost} />
      <hr style={{margin: '15px 0'}}/>
      <PostFilter 
        filter={filter}  
        setFilter={setFilter}
      />
      {sortedAndSearchedPosts.length
      ? 
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Post List 1'}/>
      :
      <h1 style={{textAlign: 'center'}}>Post List is Empty</h1>
      }
    </div>
  );
}

export default App;
