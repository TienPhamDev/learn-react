import { createClient } from "contentful";
import { useEffect } from "react";
import { useState } from "react";
const client = createClient({
    space: 'b0m4sl6xy8gg',
    environment: 'master', // defaults to 'master' if not set
    accessToken: import.meta.env.VITE_API_KEY,
  });

export function useFetchProject() {
    const [loading,setLoading] = useState(true);
    const [projects,setProjects] = useState([]);
    const getData = async () => {
        try {
            const response = await client.getEntries({content_type:'projects'});
            const project = response.items.map((item)=>{
                const {tittle,url,image} = item.fields
                const id = item.sys.id
                const img = image?.fields?.file?.url
                return {tittle,url,id,img}
            })
            setProjects(project);
            setLoading(false);
        } catch (error) {
            console.log(error);
            
            setLoading(false);
        }
    }
    useEffect(()=>{
        getData();
    },[])
    return {loading,projects}
}