import Menu from "./.components/menu";
import Soma from "./.components/soma";

export default function Tailwind() {
  return (
    <section className="flex min-h-svh flex-col">
      <header className="flex h-full w-full flex-col items-center justify-center gap-10 bg-blue-300 p-5">
        <h1 className="text-8xl text-shadow-md/30">Testano Css</h1>
        <Menu></Menu>
      </header>

      <main className="flex h-full w-full grow items-center justify-center border-5 border-s border-y-blue-500 bg-blue-200">
        <Soma></Soma>
      </main>

      <footer className="bg-blue-400">
        top
        👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍
      </footer>
    </section>
  );
}
