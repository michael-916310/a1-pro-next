import {FC} from "react";
import cls from './select.module.css'

type Value = string;

type Props = {
    options:Array<Value>;
    value: Value
}

const Select:FC<Props> = ({value, options})=>{
    console.log();

    return (
        <button className={cls.button}>
            {value}
        </button>
    )
}

export { Select }