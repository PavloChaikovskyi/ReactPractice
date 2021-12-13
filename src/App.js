import React, { useState } from "react"; // add to every file with component
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
// import PostItem from "./components/PostItem"
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', body: 'Desc'},
    {id: 2, title: 'Go', body: 'Desc'},
    {id: 3, title: 'Php', body: 'Desc'},
  ])

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')


   const addNewPost = (e) => {
    e.preventDefault();
   const newPost = {
     id: Date.now(),
     title,
     body
   }
   setPosts([...posts, newPost])
   setTitle('');
   setBody('');
  }

  return (
    <div className="App">      
    <form action="">

        {/* Управляемий компонент / Controlable component */}
        <MyInput
            value={title}
            onChange={e => setTitle(e.target.value)}
            type="text"
            placeholder="Post Name"
          />
          {/* Неуправляемий инпут / Uncontrolable input  */}
        <MyInput 
          value={body}
          onChange={e => setBody(e.target.value)}
          type="text" 
          placeholder="Post Desc"
         />
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>  
      <PostList posts={posts} title={'Post List 1'}/>
     </div>
  );
}

export default App;
