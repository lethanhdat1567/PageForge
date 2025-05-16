import Link from 'next/link';

function Home() {
    return (
        <div>
            Home
            <Link href={'/collection'}>Collection</Link>
        </div>
    );
}

export default Home;
