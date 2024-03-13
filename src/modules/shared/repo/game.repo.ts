import {GameRepoResponseDto} from "@/modules/shared/dto/game-repo.response.dto";
import {staticParamsModelAdapter} from "@/modules/shared/model/static-params.model.adapter";
import {pageModelAdapter} from "@/modules/shared/model/page-model-adapter";
import {StaticParamsModel} from "@/modules/shared/model/static-params.model";

const fetchList = async ()=>{
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

const getStaticParams = async ()=> {
    const dto = await fetchList();

    if (dto) {
        return staticParamsModelAdapter(dto);
    }
    return []
}

const getPageData = async (title: string )=>{
    const dto = await fetchList();
    if (dto) {
        return pageModelAdapter(dto,title);
    }
}


const getFirstTopStaticParams = async ()=>{
    const dto = await fetchList();

    if (dto) {
        const result : Array<StaticParamsModel>= []

        let currentProvider = '';
        for (let i=0; i<dto.length; i++){
            const game = dto[i];
            if (currentProvider != game.provider) {
                currentProvider = game.provider;
                result.push({
                    provider:`${game.provider}`,
                    title: game.seo_title,
                })
                result.push({
                    provider:`${game.categories[0]}`,
                    title: game.seo_title,
                })
            }

            if (result.length>15) {
                break
            }
        }
        return result;
    }
    return []
}

export { getStaticParams, getPageData, getFirstTopStaticParams }