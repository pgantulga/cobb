import React from 'react'
import Image from 'next/image';
import styles from './JobItem.module.scss'
import Link from 'next/link';
import Button from '@/components/common/Button/Button';
import { useRouter } from 'next/router';

function JobItem(props) {
    const router = useRouter();

    function handleNavigate() {
        router.push('/' + props.id);
    }
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className='relative w-full h-64'>
                <Image
                    className={styles.nextImage}
                    src={props.imageUrl}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.name}</div>
                <p className="text-gray-700 text-base">{props.description}</p>


                <Button
                    onClick={handleNavigate}
                >More</Button>
                {/* <Link href="/about">
                    <span className="text-red-500 hover:text-red-700 py-3 rounded transition duration-300">More</span>
                </Link> */}
            </div>

        </div>
    )
}

export default JobItem