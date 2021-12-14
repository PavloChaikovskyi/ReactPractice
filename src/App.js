import React, { useMemo, useState } from "react"; // add to every file with component
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
// import PostItem from "./components/PostItem"
import PostList from "./components/PostList";
// import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', body: 'JS Desc'},
    {id: 2, title: 'Go', body: 'Go Desc'},
    {id: 3, title: 'Php', body: 'Php Desc'},
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const sortedPosts = useMemo(() => {
    if(selectedSort) {
      console.log('Func SORTEDPOSTS DID JOB');
      return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
  }, [searchQuery, sortedPosts])

  const createPost = (newPost) => {
    setPosts( [...posts, newPost])
  }


  // get post from child component 
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  const sortPosts = (sort) => {
    setSelectedSort(sort)
  } 

  return (
    <div className="App">      
      <PostForm create={createPost} />
        <hr style={{margin: '15px 0'}}/>
      <div>
      <MyInput
        value={searchQuery}
        onChange={e=>setSearchQuery(e.target.value)}
        placeholder="search..."
      />
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
