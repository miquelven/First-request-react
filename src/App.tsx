import { useState, useEffect } from 'react'
import TypePost from "./types/TypePost"
import { Posts } from "./components/Post"
import { RequestPost } from "./components/RequestPost"
import { api } from './apis/Requests'
const App = () =>{


  const [post, setPost] = useState<TypePost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  

  useEffect(()=>{
    LoadPost();
  },[])

  const LoadPost = async () =>{
    let response = await api.allPosts();
    setLoading(false);
    setPost(response)
  }

  const SendPost = async (titlePost:string, content:string) =>{
    if(titlePost && content){
      api.addNewPost(titlePost, content)
  }else{
    alert("Preencha os campos!!!")
  }
  }

  return (
    <div>

      {loading == true && 
        <h1>Carregando...</h1>
      }
      
      {!loading &&
      
        <div>

          <RequestPost onAdd={SendPost}/>


          Quantidade de Posts: {post.length}


        {post.map((item,key)=>(
          <Posts data={item} key={key}/>
        ))}

        </div>
      }
    </div>
  )
}

export default App
