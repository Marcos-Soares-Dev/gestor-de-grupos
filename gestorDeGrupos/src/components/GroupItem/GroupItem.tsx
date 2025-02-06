import { useState } from "react";
import { EyeOpenIcon, TrashIcon } from "@radix-ui/react-icons";
import { Button, Card, Flex, Text } from "@radix-ui/themes";
import AddMemberForm from "../AddMemberForm/AddMemberForm";

interface GroupItemProps {
  id: number;
  groupName: string;
  maxParticipants: number;
  members: string[];
  onMemberAdded: () => void; // Callback para atualizar a lista de membros após adicionar um novo membro
  onViewMembers: (group: { id: number; groupName: string; maxParticipants: number; members: string[] }) => void; // Callback para visualizar membros
}

export default function GroupItem({ id, groupName, maxParticipants, members, onMemberAdded, onViewMembers }: GroupItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <Card>
      <Flex align={"center"} justify={"center"} direction={"column"} gap={"8"} p={"4"}>
        <Flex gap={"8"} align={"center"}>
          <Text as="div" size={"4"} weight={"bold"}>{groupName}</Text>
          <EyeOpenIcon onClick={() => onViewMembers({ id, groupName, maxParticipants, members })} style={{ cursor: "pointer" }} /> {/* Ícone de olho com função de clique */}
        </Flex>

        <Flex direction={"column"}>
          <Text as="p" size={"9"}>
            {members.length}
          </Text>
          <Flex align={"center"} justify={"center"}>
            <Text as="p">/{maxParticipants}</Text>
          </Flex>
        </Flex>

        <Flex gap={"8"} align={"center"} justify={"center"}>
          <AddMemberForm groupId={id} onMemberAdded={onMemberAdded} open={open} setOpen={setOpen} />

          <Button variant="outline" color="pink">
            <TrashIcon />
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
}