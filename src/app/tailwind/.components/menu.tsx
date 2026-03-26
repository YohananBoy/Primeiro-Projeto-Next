import "~/styles/globals.css";

import Button from "@mui/material/Button";

export default function Menu() {
  return (
    <nav className="flex flex-row gap-10">
      <Button
        variant="contained"
        className="border-5 border-blue-400 shadow-lg/20"
      >
        Menu1
      </Button>
      <Button
        variant="contained"
        className="border-5 border-blue-400 shadow-lg/20"
      >
        Menu2
      </Button>
      <Button
        variant="contained"
        className="border-5 border-blue-400 shadow-lg/20"
      >
        Menu3
      </Button>
    </nav>
  );
}
