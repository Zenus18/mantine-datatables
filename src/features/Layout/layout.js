import { Container, Grid } from "@mantine/core";
import { Flex } from "@mantine/core";
import { Navbar } from "./components/navbar";
import { HeaderSimple } from "./components/header";
const Layout = ({ children }) => {
  return (
    <Flex>
      <Navbar></Navbar>
      <Container>
        <Grid>
          <Grid.Col span={12}>
            <HeaderSimple />
            <Container>{children}</Container>
          </Grid.Col>
        </Grid>
      </Container>
    </Flex>
  );
};

export default Layout;
