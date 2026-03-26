import "~/styles/globals.css";

import Button from "@mui/material/Button";

export default function Menu() {
  return (
    <nav className="flex flex-row gap-10">
      <Button variant="contained">Menu1</Button>
      <Button variant="contained">Menu2</Button>
      <Button variant="contained">Menu3</Button>
    </nav>
  );
}
