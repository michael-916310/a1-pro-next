import {StaticParamsModel} from "@/modules/shared/model/static-params.model";
import {GameRepoResponseDto} from "@/modules/shared/dto/game-repo.response.dto";

const  staticParamsModelAdapter = (dto:GameRepoResponseDto):Array<StaticParamsModel> => {

    const result : Array<StaticParamsModel>= []

    dto.forEach((game)=> {
        result.push({
            provider:`${game.provider}`,
            title: game.seo_title,
        })
        game.categories.forEach((category)=>{
            result.push({
                provider:`${category}`,
                title: game.seo_title,
            })
        })
    })

    return result;
};

export {staticParamsModelAdapter}