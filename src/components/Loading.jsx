import useJsonFetch from "./useJsonFetch";

export default function Loading(){
  const url ='http://localhost:7070/loading'
   const [data,error,loading] = useJsonFetch(url);
   console.log(data)
   console.log(error)
   console.log(loading)
   return (
    <div></div>
   )
  }