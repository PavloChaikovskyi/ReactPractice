import React, { useState } from "react"; // add to every file with component
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
// import PostItem from "./components/PostItem"
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', body: 'Desc'},
    {id: 2, title: 'Go', body: 'Desc'},
    {id: 3, title: 'Php', body: 'Desc'},
  ])

  return (
    <div className="App">      
    <form action="">
        <input type="text" placeholder="Post Name" />
        <input type="text" placeholder="Post Desc" />
        <MyButton>Create post</MyButton>
      </form>  
      <PostList posts={posts} title={'Post List 1'}/>
     </div>
  );
}

export default App;
