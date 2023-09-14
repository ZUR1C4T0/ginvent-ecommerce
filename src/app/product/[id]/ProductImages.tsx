'use client'
import Image from 'next/image'
import { useState } from 'react'

export function ProductImages({ images }: { images: string[] }) {
    const [currentImage, setCurrentImage] = useState(images[0])

    return (
        <div className="bg-white rounded-xl p-8 flex flex-col">
            <div className="relative text-center h-[200px] grow">
                <Image
                    className="max-w-full object-contain"
                    src={currentImage}
                    alt={currentImage}
                    fill
                />
            </div>
            <div className="flex justify-evenly gap-3 grow-0 mt-3 ">
                {images.map((image, i) => (
                    <div
                        key={i}
                        className="relative grow border-2 border-solid border-gray-500 h-[50px] p-1 cursor-pointer rounded-md"
                        onClick={() => setCurrentImage(image)}
                    >
                        <Image
                            className="max-w-full object-contain"
                            src={image}
                            alt={image}
                            fill
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
