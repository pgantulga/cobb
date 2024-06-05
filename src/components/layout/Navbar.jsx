import Link from 'next/link';
import styles from './Navbar.module.scss';
import Image from 'next/image';
import Button from '../common/Button/Button';
const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className="container mx-auto flex justify-between items-center">
                <div className=" text-xl font-bold">
                    <Link href="/">
                        <Image
                            src="/navbar_logo.jpg"
                            alt='Cobb logo'
                            width={150}
                            height={100}
                            />
                    </Link>
                </div>
                <div className="space-x-4">
                    <Link href="/">
                        <span className="hover:text-gray-700">Home</span>
                    </Link>
                    <Link href="/about">
                        <span className=" hover:text-gray-700">About</span>
                    </Link>
                    <Link href="/news">
                        <span className=" hover:text-gray-700">News</span>
                    </Link>
                    <Link href="/contact">
                        <span className="hover:text-gray-700">Contact</span>
                    </Link>
                    <Button>Book</Button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;