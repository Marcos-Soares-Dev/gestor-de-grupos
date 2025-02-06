import { PlusIcon } from "@radix-ui/react-icons";
import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import axios from "axios";
import { FormEventHandler, useState } from "react";

interface AddGroupFormProps {
  onGroupAdded: () => void; // Callback para atualizar a lista de grupos após adicionar um novo grupo
}

export default function AddGroupForm({ onGroupAdded }: AddGroupFormProps) {
  const [open, setOpen] = useState(false);

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.currentTarget);

    const groupName = formData.get("groupName");
    const groupQuantity = +formData.get("groupQuantity");

    const newGroup = {        
        groupName,
        maxParticipants:groupQuantity,
        members: []
    }

    try {
        await axios.post("http://localhost:3000/groups",newGroup)
        console.log("Novo grupo salvo com sucesso");
        onGroupAdded(); // Chamar o callback para atualizar a lista de grupos
        setOpen(false); // Fechar o diálogo
    } catch (error) {
        console.error(`Erro ao salvar o grupo`, error)
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <Button variant="outline" color="pink">
          <PlusIcon /> Adicionar Grupo
        </Button>
      </Dialog.Trigger>

      <Dialog.Content>
        <form onSubmit={handleFormSubmit}>
          <Dialog.Title>Editar grupo</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            Insira as informações do novo grupo.
          </Dialog.Description>

          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Nome do grupo
              </Text>
              <TextField.Root
                required
                name="groupName"
                placeholder="Informe o nome do grupo"
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Quantidade de membros
              </Text>
              <TextField.Root
                type="number"
                required
                name="groupQuantity"
                placeholder="Informe a quantidade máxima de membros para este grupo"
              />
            </label>
          </Flex>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
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