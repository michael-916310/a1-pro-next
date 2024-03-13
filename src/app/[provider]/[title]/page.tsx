import {NextPage} from "next";
import {getPageData, getStaticParams} from '@/modules/shared/repo/game.repo'
import {GameCard} from "@/modules/game/components/game-card.component";

type Props = {
    params: {
        provider: string;
        title: string
    }
}

const Page:NextPage<Props> = async ({params: {title}})=>{

    const data = await getPageData(title);

    return (
        <div>
            <GameCard
                title={data?.title ?? ''}
                provider={data?.provider ?? ''}
                categories={data?.categories ?? []}
                url={`https://d2norla3tyc4cn.cloudfront.net/i/s3/${data?.identifier}.webp`}
            />
        </div>
    )
}

export async function generateStaticParams() {
   return  await getStaticParams();
}

export default Page