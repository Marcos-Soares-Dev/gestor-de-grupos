import { Container, Flex } from "@radix-ui/themes";
import AddGroupForm from "../AddGroupForm/AddGroupForm";
import GroupList from "../GroupList/GroupList";

export default function RootLayout() {
  return (
    <Container>
      <Flex direction={"column"} gap={"8"}>
        <Flex align={"center"} justify={"between"} wrap={"wrap"} gap={"4"}>
          <img src="src/assets/logo.png" alt="digital college" />
          <AddGroupForm />
        </Flex>
        <GroupList />
      </Flex>
    </Container>
  );
}