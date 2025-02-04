
import { Container, Flex } from "@radix-ui/themes";
import AddGroupForm from "../AddGroupForm/AddGroupForm";


export default function RootLayout() {


  return (
    <Container>
        <Flex align={"center"} justify={"between"}>
            <img src="src\assets\logo.png" alt="digital college" />
            <AddGroupForm />
        </Flex>
    </Container>
  )
}
