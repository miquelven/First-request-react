import TypePost from "../types/TypePost"

interface Props{
    data: TypePost
}

export const Posts = ({ data }: Props) =>{
    return(
        <div>
        
          <div style={{padding: '30px'}}>
            <h1 style={{color: 'yellow'}}>{data.id} - Titulo: - {data.title}</h1>
            <h3>Corpo - {data.body}</h3>
            <hr />
            <hr />
            <br />
            <br />
          </div>
        
      </div>
    )
}