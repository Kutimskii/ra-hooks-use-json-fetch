import { useEffect, useState } from "react"



const useJsonFetch = (url,opts)=>{
const [data,setData] = useState(null);
const [error,setError] = useState(null)
const [loading,setLoading] = useState(null)

const fetchData = async ()=>{
  try{
    setLoading(true)
    const response = await fetch(url)
    if(response.status >=200){
      setData(await response.json())
    }
  }catch(error){
    setError(error)
  }finally{
    setLoading(false)
  }
}
  useEffect(()=>{
    fetchData();
    return ()=>{}
},[url])
  return [
    data,
    error,
    loading
  ]
}
export default useJsonFetch;