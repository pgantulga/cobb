import Link from 'next/link';
import styles from './Navbar.module.scss';
import Image from 'next/image';
import Button from '../common/Button/Button';
import ButtonLink from '../common/ButtonLink/ButtonLink';
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
                        <span className="hover:text-primary">Home</span>
                    </Link>
                    <Link href="/about">
                        <span className=" hover:text-primary">About</span>
                    </Link>
                    <Link href="/jobs">
                        <span className=" hover:text-primary">Jobs</span>
                    </Link>
                    <Link href="/contact">
                        <span className=" hover:text-primary">Contact</span>
                    </Link>
                    <ButtonLink external={true} path="https://docs.google.com/forms/d/e/1FAIpQLSeXS4qTkeXRTH1JrwE4G-XkcBZkATEpA5h2_unBoM-VKsCJOA/viewform?usp=sharing">Book</ButtonLink>

                    {/* <Button
                       
                    >Book</Button> */}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;