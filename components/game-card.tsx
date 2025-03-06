import { Game } from '@/interfaces'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface gameCardProps {
    game: Game;
}

export default function GameCard({ game }: gameCardProps) {
    return (
        <Link href={"/game/" + game.slug}>
            <li>
                <Image
                    src={game.background_image ? game.background_image : "/imgnotfound.png"}
                    alt={game.name}
                    width={100}
                    height={100}
                />
                <article>
                    <h3>{game.name}</h3>
                    <p>{game.id}</p>
                </article>
            </li>
        </Link>
    )
}