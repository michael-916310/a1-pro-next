import {FC} from "react";
import cls from './game-card.module.css'
import Image from "next/image";

type Props = {
    title: string;
    provider: string;
    categories: Array<string>;
    url: string;
}

const GameCard:FC<Props>=({title, provider, categories, url})=>{
    console.log('');
    return (
        <div className={cls.card}>
            <div>
                <label className={cls.row}>Текстовое название игры: <span>{title}</span></label>
                <label className={cls.row}>Провайдер: <span>{provider}</span></label>
                <label className={cls.row}>Список категорий игры: <span>{categories.join(", ")}</span></label>
            </div>
            <Image src={url} alt={"картинка игры"} width={"100"} height={"100"}/>
        </div>
    )
}

export {GameCard}