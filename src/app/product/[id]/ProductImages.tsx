'use client'
import Image from 'next/image'
import { useState } from 'react'

export function ProductImages({ images }: { images: string[] }) {
    const [currentImage, setCurrentImage] = useState(images[0])

    return (
        <div className="bg-white rounded-xl p-8">
            <div className="text-center">
                <Image
                    className="max-w-full max-h-[200px] object-contain"
                    src={currentImage}
                    alt={currentImage}
                    width={720}
                    height={720}
                />
            </div>
            <div className="flex gap-3 grow-0 mt-3">
                {images.map((image, i) => (
                    <div
                        key={i}
                        className="border-2 border-solid border-gray-500 h-[50px] p-1 cursor-pointer rounded-md"
                        onClick={() => setCurrentImage(image)}
                    >
                        <Image
                            className="max-w-full max-h-full object-contain"
                            src={image}
                            alt={image}
                            width={720}
                            height={720}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
