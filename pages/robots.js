import Link from 'next/link';

const Robots = (props) => {
  return (
    <div>
      <Link href='/'>
        <button>Home</button>
      </Link>
      <h1>Robots</h1>
      <div>
        {
          props.robots.map(robot => (
            <li key={robot.id}>
              <Link href={`/robots/${robot.id}`} key={robot.id}>
                <a>{robot.name}</a>
              </Link>
            </li>
          ))
        }
      </div> 
    </div>
  );
}

export async function  getStaticProps () {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  console.log(data);

  return {
    props: {
      robots: data
    } // will be passed to the page component as robots props
  }
}

export default Robots;