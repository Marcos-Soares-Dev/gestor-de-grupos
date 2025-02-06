import { Container, Flex } from "@radix-ui/themes";
import AddGroupForm from "../AddGroupForm/AddGroupForm";
import GroupList from "../GroupList/GroupList";
import { useState } from "react";

export default function RootLayout() {
  const [update, setUpdate] = useState(false);

  const handleGroupAdded = () => {
    setUpdate(!update); // Alternar o estado para forçar a atualização da lista de grupos
  };

  return (
    <Container>
      <Flex direction={"column"} gap={"8"}>
        <Flex align={"center"} justify={"between"} wrap={"wrap"} gap={"4"}>
          <img src="src/assets/logo.png" alt="digital college" />
          <AddGroupForm onGroupAdded={handleGroupAdded} />
        </Flex>
        <GroupList key={update} /> {/* Usar a chave para forçar a re-renderização */}
      </Flex>
    </Container>
  );
}