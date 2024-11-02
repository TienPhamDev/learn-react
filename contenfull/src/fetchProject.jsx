import { createClient } from "contentful";
import { useEffect } from "react";
import { useState } from "react";
const client = createClient({
    space: 'b0m4sl6xy8gg',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'xVq6SgP_RWi7SkiMwc-nPYAvbugmOvdy822nGddm5dE',
  });

export function useFetchProject() {
    const [loading,setLoading] = useState(true);
    const [projects,setProjects] = useState([]);
    const getData = async () => {
        try {
            const response = await client.getEntries({content_type:'projects'});
            const project = response.items.map((item)=>{
                const {title,url,image} = item.fields
                const id = item.sys.id
                const img = image?.fields?.file?.url
                return {title,url,id,img}
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