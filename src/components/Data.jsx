import useJsonFetch from "./useJsonFetch";

export default function Data(){
const url ='http://localhost:7070/data'
 const [data,error,loading] = useJsonFetch(url);
 console.log(data)
 console.log(error)
 console.log(loading)
 return (
  <div></div>
 )
}