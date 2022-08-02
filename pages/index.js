import Link from 'next/link';

const Index = () => (
  <div>
    <Link href='/about'><button>About</button></Link>
    <Link href='/robots'><button>Robots</button></Link>
    <h1>SSR Magician</h1>
  </div>
);

export default Index