import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import "./App.css";
import Drum from "./components/organisms/Drum";

function App() {
  const handle = (e: React.KeyboardEvent<HTMLDivElement>) => {
    console.log("Hello");
    console.log(e);
  };

  return (
    <div className='App'>
      <Box
        id='drum-machine'
        sx={{
          margin: "auto",
          width: 300,
          height: 300,
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          gridTemplate: "1fr 1fr",
        }}
      >
        <Drum id='drum' className='cl-drum' />
      </Box>
    </div>
  );
}

export default App;
