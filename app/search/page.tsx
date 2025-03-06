'use client'
import SearchResults from '@/components/search-results';
import { useSearchParams } from 'next/navigation';

export default function SearchPage() {
    const searchParams = useSearchParams(); //https://nextjs.org/docs/app/api-reference/functions/use-search-params
    const query = searchParams.get("query");

    // Nu när vi fått sökordet, kan vi göra en fetch med det

    return (
        <main>
            <h1>Search: {query}</h1>
            {/* generera kort från apiet som är från sök */}
            <SearchResults query={query} />
        </main>
    )
}
