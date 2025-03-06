interface ParentPlatforms {
   id: number;
   name: string;
   length: number;
}


export interface Game {
    id: number;
    name: string;
    background_image: string;
    rating: number;
    rating_top: number;
    playtime: number;
    tba: boolean;
    added: number;
    tags: GameTags[];
    released: string; //"2009-11-17"
    parent_platforms: ParentPlatforms;
    seo_title: string;
    slug: string;
}

interface GameTags {
    id: number,
    name: string,
    slug: string,
    language: string,
    games_count: number,
    image_background: string
}

export interface GameDesc {
    id: number,
    background_image: string,
    name: string,
    description: string,
    tags: GameTags[]
}