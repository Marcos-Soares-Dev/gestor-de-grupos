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
}

export default function GroupItem({ id, groupName, maxParticipants, members, onMemberAdded }: GroupItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <Card>
      <Flex align={"center"} justify={"center"} direction={"column"} gap={"8"} p={"4"}>
        <Flex gap={"8"} align={"center"}>
          <Text as="div" size={"4"} weight={"bold"}>{groupName}</Text>
          <EyeOpenIcon />
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