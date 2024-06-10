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
        <div className="flex-col max-w-sm rounded overflow-hidden shadow-lg">
            <div className='relative w-full h-64'>
                <Image
                    className={styles.nextImage}
                    src={props.imageUrl}
                    layout="fill"
                    objectFit="cover"
                    alt = {props.name}
                />
            </div>
            <div className="flex-col content-between px-6 py-4 flex-col h-full">
                <div className='flex-col'>
                    <div className="font-bold text-xl mb-2">{props.name}</div>
                    <p className="text-gray-700 text-base">{props.description}</p>
                </div>
                <div className='flex flex-col justify-center items-end'>
                    <Button className='justify-self-end'
                        onClick={handleNavigate}
                    >More</Button>
                </div>

            </div>

        </div>
    )
}

export default JobItem