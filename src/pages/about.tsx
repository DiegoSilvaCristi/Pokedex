import { Button } from "antd/lib";
import Link from 'next/link'
import "../styles/landing.css";    
import Image from "next/image";
import Examedipokemon from "./../assets/examedipokemon.png";

export default function About() {
  return (
        <div className="layout">
          <div>
            <Image src={Examedipokemon} alt="Examedi Pokedex" width={300} height={200} />
          </div>
          <h1>Sobre mi</h1>
          <div className="buttons">
          <Link href="/list">
            <Button className="button">Go to List</Button>
          </Link>
          <Link href="/">
            <Button className="button">Back</Button>
          </Link>
          </div>
        </div>

  );
}
