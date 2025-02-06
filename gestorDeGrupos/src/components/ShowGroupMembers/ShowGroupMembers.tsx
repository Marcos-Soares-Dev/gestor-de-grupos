import { useEffect, useState } from "react";
import { Button, Dialog, Flex, Inset, Table } from "@radix-ui/themes";

interface ShowGroupMembersProps {
  group: {
    id: number;
    groupName: string;
    maxParticipants: number;
    members: string[];
  };
  open: boolean;
  onClose: () => void;
}

export default function ShowGroupMembers({ group, open, onClose }: ShowGroupMembersProps) {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Content>
        <Dialog.Title>Membros do grupo {group.groupName}</Dialog.Title>
        <Dialog.Description>
          Os seguintes membros fazem parte deste grupo.
        </Dialog.Description>

        <Inset side="x" my="5">
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Nome</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {group.members.map((member, index) => (
                <Table.Row key={index}>
                  <Table.RowHeaderCell>{member}</Table.RowHeaderCell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Inset>

        <Flex gap="3" justify="end">
          <Dialog.Close asChild>
            <Button variant="soft" color="gray" onClick={onClose}>
              Fechar
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}