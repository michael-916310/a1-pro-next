import {FC, PropsWithChildren} from "react";
import cls from './global-layout.module.css'
import Link from "next/link";
import {getFirstTopStaticParams} from "@/modules/shared/repo/game.repo";

const GlobalLayout:FC<PropsWithChildren> = async ({children})=>{
    console.log("")

    const linksData = await getFirstTopStaticParams();

    return (
        <main className={cls.main}>
            <aside>
                <span>Посмотреть Select на главной</span>
                <Link className={cls.link} href={'/'}>Главная ( Select )</Link>
                <span>Несколько ссылок</span>
                {
                    linksData.map((param, index) => {
                        const url = `/${param.provider}/${param.title}`;
                        return (<Link className={cls.link} key={index} href={url}>{url}</Link>)
                    })
                }
            </aside>
            <div>{children}</div>
        </main>)
}

export {GlobalLayout}