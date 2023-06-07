import axios from "axios";


const http = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
})


export const api = {
  allPosts: async () =>{
      const response = await http.get("/posts")
      return response.data;
  },

  addNewPost: async (titlePost:string, content:string) =>{
    const response = await http.post("/posts", {
      titlePost, content
    })
    return response.data;
  }
}