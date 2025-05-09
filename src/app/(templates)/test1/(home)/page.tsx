import Link from 'next/link';

function Home() {
    return (
        <div>
            <Link href={'/collection'}>Collection</Link>
        </div>
    );
}

export default Home;
