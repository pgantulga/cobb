import styles from './ButtonLink.module.scss';
import Link from 'next/link';

function ButtonLink({ path, target, children, external = false }) {
    if (external) {
        return (
            <Link
                href={path}
                target="_blank"
                className={styles.buttonLink}

                rel="noopener noreferrer"
                // className="text-red-500 hover:text-red-700 font-bold py-2 px-4 rounded transition duration-300"
            >
                {children}
            </Link>
        );
    }

    return (
        <Link
            href={path}
            className={styles.buttonLinkInternal}
            target={target ? "_blank" : "_self"}
        >
            {children}
        </Link>
    );
}

export default ButtonLink;