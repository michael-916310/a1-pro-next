import {GameRepoResponseDto} from "@/modules/shared/dto/game-repo.response.dto";
import {PageModel} from "@/modules/shared/model/page-model";

const pageModelAdapter = (dto:GameRepoResponseDto,  title: string ):PageModel|undefined =>{
    const filtered = dto.find((item)=>(item.seo_title===title));

    if (filtered) {
        return {
            identifier: filtered.identifier,
            provider: filtered.provider,
            title:filtered.title,
            categories: filtered.categories
        }
    }

}

export { pageModelAdapter }
