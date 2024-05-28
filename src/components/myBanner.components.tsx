import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function MyBanner() {
    return (
        <div className="space-y-2">
            <div className="rounded-lg mb-5 w-5/6 m-auto bg-[#8cafa4] text-white shadow-lg text-center p-2">
                <p>
                    Need to have a diet that suits you?
                </p>
                <p>
                    Trust us to support you in your search for culinary well-being.
                </p>
            </div>
            <div className="flex w-4/5 m-auto flex-col md:flex-row justify-center items-center md:space-x-4">
                <Image
                    src="/images/salade-de-fruits.jpg"
                    alt="banner"
                    width={500}
                    height={500}
                    className="rounded-lg shadow-lg shadow-blue-300"
                />
                <div className="flex flex-col space-y-2 text-center md:text-left p-3">
                    <h1 className="font-bold text-2xl">Let’s immortalize our passion for gastronomy</h1>
                    <p className='text-[15px] w-4/6'>
                        Immortalizing our passion for gastronomy means preserving
                        and celebrate this culinary art that unites people around the world.
                        By documenting and sharing recipes via videos and manuscripts
                        we pass on our know-how
                        and our traditions to future generations. Through recipes, shared
                        your know-how in order to benefit everyone.
                    </p>
                    <div className='mt-4 space-y-2'>
                        <p className='italic text-gray-500'>Still don&apos;t have an account? </p>
                        <div className="bg-[#20847D] hover:bg-[#BAE7D9] hover:cursor-pointer max-w-40 text-white font-bold py-2 px-4 rounded flex items-center space-x-2">
                            <Link href="/register">
                                <p className="text-black">Join us now! {` `}✉️</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

