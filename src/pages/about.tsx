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
          <h1>Sobre el proyecto</h1>
          <ul>Tecnologías utilizadas:
            <br></br>
            <br></br>
            <li>React y Typescript</li>
            <li>Next JS como framework</li>
            <li>CSS puro para el estilo de las páginas</li>
            <li>Ant Design para los componentes de la interfaz</li>
            <li>API de Pokémon</li>
          </ul>
          <br></br>
          <h2>¿Por qué soy un buen fit para Examedi?</h2>
          <p className="paragraph">Porque es una empresa emergente y que se ve muy entretenida. He leído acerca del producto y la cultura, 
            y me emociona mucho poder aprender en un ambiente de este estilo. Creo que tengo buenas habilidades 
            que puedo poner al servicio de la empresa y sobre todo ganas de aprender mucho para seguir creciendo como 
            desarrollador. Tuve la oportunidad de trabajar en una startup en el pasado y me gusta mucho el ritmo ágil y
            la posibilidad de aprender de distintas áreas de la empresa
          </p>
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
