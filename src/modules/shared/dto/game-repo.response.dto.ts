
type GameRepoResponseDtoItem = {
    identifier: string;
    seo_title: string;
    title: string;
    provider: string;
    categories: Array<string>;
}

type GameRepoResponseDto = Array<GameRepoResponseDtoItem>

export type { GameRepoResponseDto }
