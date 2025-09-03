import Image from 'next/image';
import React from 'react'
import dbConnect from '../../../lib/dbConnect';

export default async function ServicesSection() {
    const servicesCollection = dbConnect("servicesCollection");
    const data = await servicesCollection.find({}).toArray();
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-12 gap-y-10'>
                {
                    data.map((d, index) => (
                        <div key={index} className='col-span-12 md:col-span-6 lg:col-span-4 w-fit mx-auto border border-[#E8E8E8] p-5 rounded-xl space-y-5'>
                            <Image src={d?.img} alt={d.title} width={314} height={208} />
                            <h2 className='text-2xl font-semibold'>{d.title}</h2>
                            <div>
                                <h2 className='text-xl font-semibold'>Price : ${d?.price}</h2>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
