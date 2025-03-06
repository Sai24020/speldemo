"use client";
import styles from "./header.module.css";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function Header() {
    const router = useRouter(); // för att ändra url
    const [searchQuery, setSearchQuery] = useState<string>('');
    // funktion som trigas när användaren trycker på en tangent
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        // kolla om användaren har tryckt enter i input-fältet
        // TODO: se till så att användaren har minst skrivit in 3 karaktärer innan enter
        if (event.key === "Enter" && searchQuery.length <= 2) {
            alert("Sökningen måste vara längra än 2 karaktärer");
        }
        if (event.key === "Enter" && searchQuery.length > 2) {
            // trycka in sökningen i vår url
            router.push(`/search?query=${searchQuery}`);
        }
    }
    return (
        <header className={styles.header}>
            <section>
                <h2>Game Finder</h2>
                <input
                    type='text'
                    placeholder='Search games'
                    value={searchQuery}
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </section>
            <p>🎮</p>
        </header>
    )
}
