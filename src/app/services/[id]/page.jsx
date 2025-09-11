import React from 'react'
import dbConnect, { collectionNameObj } from '../../../../lib/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';

export default async function ServicesDetailsPage({ params }) {
    const p = await params;
    const servicesCollection = dbConnect(collectionNameObj.servicesCollection);
    const data = await servicesCollection.findOne({ _id: new ObjectId(p.id) });
    console.log(data)
    return (
        <div>
            {/* Banner */}
            <section className='flex items-center justify-center'>
                <figure className='relative'>
                    <Image 
                    src={'/assets/images/checkout/checkout.png'} 
                    alt='Checkout Image' 
                    width={1137} 
                    height={300}/>
                    <div className='overlay-bg absolute w-full h-full top-0 rounded-md'>
                        <div className='w-full h-full flex items-center pl-16'>
                            <div>
                                <h2 className='text-white text-7xl font-bold'>Services Details</h2>
                            </div>
                        </div>
                    </div>
                </figure>
            </section>
            <section>
                <Image src={data?.img} alt={data.title} width={500} height={300} />
            </section>
        </div>
    )
}