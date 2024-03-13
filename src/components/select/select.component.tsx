'use client'

import {FC, memo, useCallback, useEffect, useMemo, useRef, useState} from "react";
import cls from './select.module.css'
import cn from 'classnames';
import {Arrow} from './arrow'

type Value = string;

type Props = {
    options:Array<Value>;
    value: Value;
    onChange: (value: Value)=>void;
}

const Select:FC<Props> = ({value, options, onChange})=>{
    const [isOpen, setIsOpen] = useState(false);

    const ref = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        if (ref?.current) {
            const clickCallback = (e: MouseEvent) => {
                const wrapperContain = ref?.current?.contains(e.target as HTMLElement);

                if (!wrapperContain) {
                    setIsOpen(false);
                }
            };

            document.body.addEventListener("click", clickCallback);

            return () => {
                document.body.removeEventListener("click", clickCallback);
            };
        }
    }, [ref]);

    const toggle = useCallback(()=>setIsOpen((value)=>!value),[])

    const optionList = useMemo(
        ()=>options.map(
            (option)=>
                isOpen ?
                    <div key={option} className={cls.option} onClick={()=>onChange(option)}>
                        {option}
                        <Arrow/>
                    </div>
                    : null
        ),[isOpen, onChange, options])

    return (
        <button className={cls.button} onClick={toggle} ref={ref}>
            {value}
            <div className={cn(cls.collapser, {[cls.collapserShow]: isOpen})}>
                {optionList}
            </div>
        </button>
    )
}

export { Select }