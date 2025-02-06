import { Container, Flex } from "@radix-ui/themes";
import AddGroupForm from "../AddGroupForm/AddGroupForm";
import GroupList from "../GroupList/GroupList";
import ShowGroupMembers from "../ShowGroupMembers/ShowGroupMembers";
import { useState } from "react";

export default function RootLayout() {
  const [update, setUpdate] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null); // Estado para o grupo selecionado
  const [isDialogOpen, setDialogOpen] = useState(false); // Estado para controlar a abertura da caixa de diálogo

  const handleGroupAdded = () => {
    setUpdate(!update); // Alternar o estado para forçar a atualização da lista de grupos
  };

  const handleViewMembers = (group) => {
    setSelectedGroup(group); // Definir o grupo selecionado
    setDialogOpen(true); // Abrir a caixa de diálogo
  };

  const handleCloseDialog = () => {
    setDialogOpen(false); // Fechar a caixa de diálogo
  };

  return (
    <Container>
      <Flex direction={"column"} gap={"8"}>
        <Flex align={"center"} justify={"between"} wrap={"wrap"} gap={"4"}>
          <img src="src/assets/logo.png" alt="digital college" />
          <AddGroupForm onGroupAdded={handleGroupAdded} />
        </Flex>
        <GroupList key={update} onViewMembers={handleViewMembers} /> {/* Passar a função para visualizar membros */}
        {selectedGroup && (
          <ShowGroupMembers group={selectedGroup} open={isDialogOpen} onClose={handleCloseDialog} /> // Passar o grupo selecionado e o estado de abertura para o componente ShowGroupMembers
        )}
      </Flex>
    </Container>
  );
}