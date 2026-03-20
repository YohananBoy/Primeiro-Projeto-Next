import Image from "next/image";
import Menu from "./_components/menu.tsx";

export default function Home() {
	const text = "Site top top top";
	
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<h1>{text}</h1>
			<Menu/>
			<button onclick="teste(text)">Mudar o h1</button>
			</div>
  );
}

function teste(&text){
	text = "mudou";
}


