const BASE: string = "https://jsonplaceholder.typicode.com"

export const api = {
  allPosts: async () =>{
      let response = await fetch(`${BASE}/posts`)
      let json = await response.json()
      return json
  },

  addNewPost: async (titlePost:string, content:string) =>{
        await fetch(`${BASE}/posts`, {
          method: "POST",
          body: JSON.stringify({
            title:titlePost,
            body: content,
            userId: 1
          }),
          headers:{
            'Content-Type': "application/json"
          }
        })
  }
}