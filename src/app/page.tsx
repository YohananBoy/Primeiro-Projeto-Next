"use client";
import Link from "next/link";
import {useState} from "react";

export default function HomePage() {
  const [num, setNum] = useState(0);
	const [text, setText] = useState("");

	return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Exercícios
					</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
					<div>
						<h2 className="text-3xl">Soma</h2>
						<br/>
						{num}
						<br/>
						<button onClick={() => {
							setNum(num + 1);
						}}>+1</button>
					</div>
					
					<div>
						<h2 className="text-3xl">Input</h2>
						<br/>
						{text}
						<br/>
						<input className="bg-blue-200" onChange={(item)=>{
							setText(item.target.value);
						}}/>
					</div>
				</div>
      </div>
    </main>
  );
}
