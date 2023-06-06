import { ChangeEvent, useState } from "react"

interface Props{
    onAdd: (titlePost:string, content: string)=>void
}

export const RequestPost = ({ onAdd }: Props) =>{

    const [titlePost, setTitlePost] = useState('')
    const [content, setContent] = useState('')

    const handleTitlePost = (e: ChangeEvent<HTMLInputElement>) =>{
        setTitlePost(e.target.value)
    }
    
    const handleContent = (e: ChangeEvent<HTMLTextAreaElement>) =>{
    setContent(e.target.value)
    }

    const SendPost = () =>{
        if(titlePost && content){
            onAdd(titlePost, content)
        }else{
            alert("Preencha todos os campos!")
        }
    }

    return (
        <fieldset>
            <legend>Fazer Post</legend>


        <input type="text" placeholder='Digite o titulo do post: ' value={titlePost} onChange={handleTitlePost}/>

        <textarea placeholder='Digite o conteudo do post' onChange={handleContent} value={content}></textarea>

        <button onClick={SendPost}>Postar!</button>
        </fieldset>
    )
}