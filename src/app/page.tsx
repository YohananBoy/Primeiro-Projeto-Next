import "~/styles/globals.css";

import Button from "@mui/material/Button";

export default function Home() {
  return (
    <html>
      <body className="flex flex-col items-center gap-5">
        <h1 className="text-8xl">Link das paginas</h1>
        <hr className="my-5 w-full" />
        <Button variant="contained" href="./usestate">
          useState
        </Button>
        <Button variant="contained" href="./tailwind">
          tailwind
        </Button>
      </body>
    </html>
  );
}
