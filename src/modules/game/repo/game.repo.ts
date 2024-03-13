import {GameRepoResponseDto} from "@/modules/game/dto/game-repo.response.dto";
import {staticParamsModelAdapter} from "@/modules/game/model/static-params.model.adapter";

const  fetchList = async ()=>{
    const url ="https://nextjs-test-pi-hazel-56.vercel.app/data/games.json";

    try {
        const response = await fetch(url);
        const dto: GameRepoResponseDto = await response.json();

        return dto;

    } catch (e) {
        console.log(`Error while fetching ${url}`);
        if (e instanceof Error) {
            console.log(`name:${e.name} message:${e.message}`)
        }
    }
}

const  getStaticParams = async ()=> {
    const dto = await fetchList();

    if (dto) {
        return staticParamsModelAdapter(dto);
    }
    return []
}

export { getStaticParams }