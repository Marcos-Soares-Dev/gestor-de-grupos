import axios from "axios"
import { useEffect, useState } from "react"


export default function GroupList() {

    const [groupList, setGroupList] = useState([])

    useEffect(() => {
        const fetchGroups = async () => {
          try {
            const response = await axios.get("http://localhost:3000/groups");
            setGroupList(response.data);
          } catch (error) {
            console.error("Erro ao buscar os grupos:", error);
          }
        };
    
        fetchGroups();
      }, []);

  return (
    alert(groupList.map())
  )
}
