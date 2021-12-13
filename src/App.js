import React, { useState } from "react"; // add to every file with component
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
// import PostItem from "./components/PostItem"
import PostList from "./components/PostList";
// import MyButton from "./components/UI/button/MyButton";
// import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', body: 'Desc'},
    {id: 2, title: 'Go', body: 'Desc'},
    {id: 3, title: 'Php', body: 'Desc'},
  ])

  const createPost = (newPost) => {
    setPosts( [...posts, newPost])
  }

  return (
    <div className="App">      
      <PostForm create={createPost} />
      <PostList posts={posts} title={'Post List 1'}/>
    </div>
  );
}

export default App;
