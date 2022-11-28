import "./App.css";
import { Button, Loader, MantineProvider, Paper, Text } from "@mantine/core";


function App() {
  return (
    <div className="App">
      <MantineProvider
        theme={{
          fontFamily: "Open Sans",
          colorScheme: "dark",
          fontSizes: { md: 12 },
          loader:"oval",
          radius: { sm: 232 },
          colors: {
            blue: [
              "#7950F2",
              "#66D9E8",
              "#12B886",
              "#51CF66",
              "#66A80F",
              "#FFE066",
              "#FF922B",
              "#DBE4FF",
              "#2B8A3E",
              "#D9480F",
            ]
          },
        }}
        styles={{
          Button:(theme)=>({
            root:{
              backgroundColor: theme.colors.blue[1]
            }
          })
        }}
      >
        <Paper>
          <Text>this is a simple text tag</Text>
          <Text>this is a simple text tag</Text>
        </Paper>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Loader />
      </MantineProvider>
    </div>
  );
}

export default App;
