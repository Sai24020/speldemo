import { Game } from "@/interfaces";
import React, { useEffect, useState } from "react";
import GameCard from "./game-card";

interface SearchResultsProps {
    query: string | null;
}

export default function SearchResults({query}: SearchResultsProps) {
   const [games, setGames] = useState<Game[]>([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
    
    if (!query) return;
    const fetchGames = async () => {
      try  {
            const res = await fetch(`https://api.rawg.io/api/games?key=861f3caabf914e8cada5fa43f66b4eb3&search=${query}`);
            const data = await res.json();
            setGames(data.results || []);
        } catch (error) {
              console.error("Error fetching games: ", error);
        } finally {
            setLoading(false);
        }
    };
    fetchGames();

   }, [query]) 

if (loading) return <p>loading games ...</p>

    return (
        <ul>
        {games.length > 0 ? (
            games.map((game, i) => <GameCard key={i} game={game} />)
        )
            :
            (<p>No games found for "{query}".</p>)
        }
    </ul>
    ) 
}