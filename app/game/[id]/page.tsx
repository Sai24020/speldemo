import { GameDesc } from "@/interfaces";
import Image from "next/image";

interface GamePageProps {
    params: {
        id: string;

    }
}
export default async function GamePage({params}: GamePageProps) {
   const { id } = await params;
    const res = await fetch(`https://api.rawg.io/api/games/${params.id}?key=861f3caabf914e8cada5fa43f66b4eb3`);
    const data:GameDesc = await res.json();
    return (
        <main>
        <Image
        src={data.background_image}
        alt="game image"
        width={300}
        height={200}
            />

            <h1>{data.name}</h1>
            <p dangerouslySetInnerHTML={{__html: data.description}} />
            {data.tags.map((t, i) => <p key={i}>{t.name}</p>)}
        </main>
    )
}