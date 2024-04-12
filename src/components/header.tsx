import Image from "next/image";
import Examedipokemon from "./../assets/examedipokemon.png";

export default function Header() {
    return (
        <div>
            <Image src={Examedipokemon} alt="Examedi Pokedex" width={300} height={200} />
        </div>
    );
  }
  