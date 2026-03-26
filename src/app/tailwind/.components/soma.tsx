"use client";
import { useState } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function Soma() {
  const [num, setNum] = useState(0);
  const [text, setText] = useState("");
  return (
    <div className="flex flex-col items-center justify-center gap-5 text-5xl">
      <span>
        Eu quero {num} {text}
      </span>
      <TextField
        id="standard-basic"
        label="Insira Texto"
        variant="standard"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <Button
        variant="outlined"
        onClick={() => {
          setNum(num + 1);
        }}
      >
        +1
      </Button>
    </div>
  );
}
