import {NextPage} from "next";
import {getStaticParams} from '@/modules/game/repo/game.repo'

type Props = {
    params: {
        provider: string;
        title: string
    }
}

const Page:NextPage<Props> = ({params: {provider,title}})=>{
    console.log(`log ${provider} ${title}`)
    return <div>Page: {provider} {title}</div>
}

export async function generateStaticParams() {
    // const products = await fetch('https://.../products').then((res) => res.json())
    //
    // return products.map((product) => ({
    //     category: product.category.slug,
    //     product: product.id,
    // }))

   return  await getStaticParams();

}

export default Page