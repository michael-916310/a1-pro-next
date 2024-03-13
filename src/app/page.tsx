'use client'
import {Select} from "@/components/select";
import {useState} from "react";

const options = ["account", "wallet", "bonuses" , "bets", "history"];

export default function Home() {
  const [value, setValue] = useState<string>(options[0]);

  return (
      <div>
          <div>
              Выбрана: {value}
          </div>
          <br/>
          <div>
              Выберите опцию:
          </div>
          <br/>
          <Select value={value} options={options} onChange={setValue}/>

      </div>
  );
}
