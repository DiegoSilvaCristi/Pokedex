import { Button } from "antd/lib";
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Examedi Pokedex</h1>
      <div>
        <Link href="/list">
          <Button>Go to List</Button>
        </Link>
        <Link href="/about">
          <Button>About me</Button>
        </Link>
      </div>
    </div>
    
  );
}
