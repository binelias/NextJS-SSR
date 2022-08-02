import Link from 'next/link';
import Image from '../components/Image';

const About = () => {
  return (
    <div style={{fontSize: '20px', color: 'blue'}}>
      <Link href='/'><button>Home</button></Link>
      <Link href='/robots'><button>Robots</button></Link>
      <h1>I am a SSR pirate</h1>
      <Image />
    </div>
  );
};

export default About