import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Button, Card, Col, Pagination, Row } from 'antd/lib';

interface Sprite {
  front_default: string;
  // Add other sprite properties as needed
}

interface Pokemon {
  name: string;
  height: number;
  weight: number;
  sprites: Sprite;
}

async function getPokemons(offset: number) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=12`);
    return response.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function getPokemon(url: string) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Capitalize the first letter of a string
function capitalizeFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export default function List() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]); // Call fetchData whenever currentPage changes

  async function fetchData(page: number) {
    const offset = (page - 1) * 12; // Calculate offset based on page number
    const pokemonList = await getPokemons(offset);
    const pokemonDetails = await Promise.all(pokemonList.map((pokemon: { url: string }) => getPokemon(pokemon.url)));
    setPokemons(pokemonDetails);
  }

  return (
    <div>
      <h1>List view</h1>
      <Link href="/">
        <Button>Back</Button>
      </Link>
      <Row gutter={[50, 50]}>
        {pokemons.map((pokemon, index) => (
          <Col span={4} key={index}>
            <Card cover={<img src={pokemon.sprites.front_default} alt={pokemon.name} />}>
              <div>
                <h1>{capitalizeFirstLetter(pokemon.name)}</h1>
              </div>
              <Row gutter={[16, 16]}>
                <Col sm={12}>
                  <p>Height: {pokemon.height}</p>
                </Col>
                <Col sm={12}>
                  <p>Weight: {pokemon.weight}</p>
                </Col>
              </Row>
              <Link href="/">
                <Button>Info</Button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
      <Pagination
        defaultCurrent={1}
        total={1015}
        pageSize={12}
        showSizeChanger={false}
        showQuickJumper={true}
        onChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
