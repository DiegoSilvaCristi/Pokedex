import { Button } from "antd/lib";
import Link from 'next/link'
import Image from "next/image";
import Examedipokemon from "./../assets/examedipokemon.png";  

export default function Home() {
  return (
    <div className="layout">
      <div>
        <Image src={Examedipokemon} alt="Examedi Pokedex" width={300} height={200} />
      </div>
      <h1>Examedi Pokedex</h1>
      <div className="buttons">
        <Link href="/list">
          <Button className="button">Go to List</Button>
        </Link>
        <Link href="/about">
          <Button className="button">About</Button>
        </Link>
      </div>
    </div>
  );
}
