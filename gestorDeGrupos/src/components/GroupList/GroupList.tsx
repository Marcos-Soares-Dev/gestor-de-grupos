import axios from "axios";
import { useEffect, useState } from "react";
import { Text, Box } from "@radix-ui/themes";
import GroupItem from "../GroupItem/GroupItem";
import styles from "./GroupList.module.css";

interface Group {
  id: number;
  groupName: string;
  maxParticipants: number;
  members: string[];
}

export default function GroupList({ onViewMembers }) {
  const [groupList, setGroupList] = useState<Group[]>([]);

  const fetchGroups = async () => {
    try {
      const response = await axios.get("http://localhost:3000/groups");
      setGroupList(response.data);
    } catch (error) {
      console.error("Erro ao buscar os grupos:", error);
    }
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  const handleMemberAdded = () => {
    // Recarregar a lista de grupos após adicionar um novo membro
    fetchGroups();
  };

  return (
    <Box>
      <Text as="p" size="4" mb="4">
        Lista de Grupos
      </Text>
      <Box className={styles.groupContainer}>
        {groupList.map((group) => (
          <GroupItem
            key={group.id}
            id={group.id}
            groupName={group.groupName}
            maxParticipants={group.maxParticipants}
            members={group.members}
            onMemberAdded={handleMemberAdded}
            onViewMembers={onViewMembers} // Passar a função para visualizar membros
          />
        ))}
      </Box>
    </Box>
  );
}