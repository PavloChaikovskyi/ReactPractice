import React, { useState } from "react"; // add to every file with component
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
// import PostItem from "./components/PostItem"
import PostList from "./components/PostList";
// import MyButton from "./components/UI/button/MyButton";
// import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', body: 'JS Desc'},
    {id: 2, title: 'Go', body: 'Go Desc'},
    {id: 3, title: 'Php', body: 'Php Desc'},
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const createPost = (newPost) => {
    setPosts( [...posts, newPost])
  }


  // get post from child component 
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
  } 

  return (
    <div className="App">      
      <PostForm create={createPost} />
        <hr style={{margin: '15px 0'}}/>
      <div>
        <input type="text" />
      <MySelect 
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Sort by"
        options={[
          {value: 'title', name: 'By name'},
          {value: 'body', name: 'By desc'},
        ]}
      />
      </div>
      {posts.length
      ? 
      <PostList remove={removePost} posts={posts} title={'Post List 1'}/>
      :
      <h1 style={{textAlign: 'center'}}>Post List is Empty</h1>
      }
    </div>
  );
}

export default App;
