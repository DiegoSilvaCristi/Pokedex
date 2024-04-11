import { Button } from "antd/lib";
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Sobre mi</h1>
      <Link href="/">
        <Button>Back</Button>
      </Link>
    </div>
    
  );
}
