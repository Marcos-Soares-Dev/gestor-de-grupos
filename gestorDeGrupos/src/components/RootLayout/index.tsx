import { Container, Flex, Section } from "@radix-ui/themes";


export default function Header() {

    function handleSearchBar(searchWord:string) {
        searchWord = "implementar pesquisa aqui"
    }

  return (
    <Section>
        <Container >
            <Flex align={"center"} justify={"start"} gap={"8"}>
            <img src="./src/assets/logo.png" alt="digital college" />
            <div className="searchBar">
                <input type="text" id="searchBar" onChange={() => handleSearchBar} placeholder="Qual grupo está procurando?"/>
            </div>          
            </Flex>            
        </Container>
    </Section>
  )
}