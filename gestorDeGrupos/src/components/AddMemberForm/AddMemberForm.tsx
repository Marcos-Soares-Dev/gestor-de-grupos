import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import axios from "axios";
import { FormEventHandler } from "react";

interface AddMemberFormProps {
  groupId: number;
  onMemberAdded: () => void; // Callback para atualizar a lista de membros após adicionar um novo membro
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function AddMemberForm({ groupId, onMemberAdded, open, setOpen }: AddMemberFormProps) {
  const handleFormSubmit: FormEventHandler<HTMLFormElement> = async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.currentTarget);
    const newMemberName = formData.get("memberName") as string;

    try {
      // Buscar o grupo atual
      const response = await axios.get(`http://localhost:3000/groups/${groupId}`);
      const group = response.data;

      // Adicionar o novo membro ao array de membros
      const updatedGroup = {
        ...group,
        members: [...group.members, newMemberName],
      };

      // Atualizar o grupo no servidor
      await axios.put(`http://localhost:3000/groups/${groupId}`, updatedGroup);
      console.log("Membro adicionado com sucesso");

      // Chamar o callback para atualizar a lista de membros
      onMemberAdded();

      // Fechar o diálogo
      setOpen(false);
    } catch (error) {
      console.error("Erro ao adicionar o membro", error);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button variant="outline" color="pink" onClick={() => setOpen(true)}>
          Adicionar
        </Button>
      </Dialog.Trigger>

      <Dialog.Content>
        <Dialog.Title>Adicione novo membro</Dialog.Title>
        <Dialog.Description>Adicione um novo membro ao grupo.</Dialog.Description>

        <form onSubmit={handleFormSubmit}>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Nome:
            </Text>
            <TextField.Root required name="memberName" placeholder="Informe o nome do novo membro" />
          </label>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close asChild>
              <Button variant="soft" color="gray" onClick={() => setOpen(false)}>
                Cancelar
              </Button>
            </Dialog.Close>

            <Button type="submit">Salvar</Button>
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
}