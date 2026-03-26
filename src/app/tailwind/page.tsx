import Menu from "./.components/menu";
import Soma from "./.components/soma";

export default function Tailwind() {
  return (
    <html>
      <body className="flex min-h-svh flex-col">
        <header className="flex h-full w-full flex-col items-center justify-center gap-10">
          <h1 className="text-8xl">Testano Css</h1>
          <Menu></Menu>
        </header>
        <hr className="my-5" />

        <main className="flex h-full w-full grow items-center justify-center">
          <Soma></Soma>
        </main>

        <footer>
          top
          👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍
        </footer>
      </body>
    </html>
  );
}
