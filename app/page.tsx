import { Game } from "@/interfaces";
import styles from "./page.module.css";
import GameCard from "@/components/game-card";

export default async function Home() {
  // hämta populära spel från API
  const res = await fetch(`https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}`); //lägg till din api-nyckel
  const data = await res.json();
  console.log(data);

  // få enbart de 6 första spelen
  const popularGames: Game[] = data.results.slice(0, 6);

  return (
    <main className={styles.main}>
      <h1>Populära spel just nu</h1>
      <section className={styles.popularGames}>
        <ul>
          {popularGames.map((game, i) => (
            <GameCard key={i} game={game} />
          ))}
        </ul>
      </section>
    </main>
  );
}
