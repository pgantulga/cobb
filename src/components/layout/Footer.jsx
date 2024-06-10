import styles from './Footer.module.scss';
import Link from 'next/link';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className='container mx-auto flex justify-between items-center'>
            <div className="space-x-4">
                    <Link href="/">
                        <span className="hover:text-gray-300">Home</span>
                    </Link>
                    <Link href="/about">
                        <span className=" hover:text-gray-300">About</span>
                    </Link>
                    <Link href="/jobs">
                        <span className=" hover:text-gray-300">Jobs</span>
                    </Link>
                    <Link href="/privacy">
                        <span className=" hover:text-gray-300">Privacy policy</span>
                    </Link>
                
                    <Link href="/contact">
                        <span className="hover:text-gray-300">Contact</span>
                    </Link>
                </div>
            </div>
        </footer>
    )
}
export default Footer;

