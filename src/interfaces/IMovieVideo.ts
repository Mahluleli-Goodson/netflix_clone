
export interface IMovieVideo {
    iso_639_1: string; // e.g "en"
    iso_3166_1: string; // e.g "US"
    name: string;
    key: string;
    published_at: string; // DateTime string
    site: string; // e.g "YouTube"
    size: number; // resolution
    type: string; // e.g: Teaser,
    official: boolean;
    id: string;
}
