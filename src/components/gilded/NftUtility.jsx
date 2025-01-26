
import React from 'react'

const NftUtility = () => {
    return (
        <div className='bg-utility bg-no-repeat bg-cover bg-center' id='about'>
            <div className='max-w-[1232px] px-4 mx-auto pt-[105px] pb-[194px] max-lg:py-20 max-md:py-[60px]'>
                <div className='flex lg:flex-row items-center justify-between max-lg:justify-center flex-wrap'>
                    <div className='flex flex-col'>
                        <h2 className='text-white text-5xl !leading-custom-9xl font-bold max-lg:text-center max-md:text-3xl'>
                            <span className='text-gradient'>NFT</span> Utility
                        </h2>
                        <p className='text-xl leading-9 font-Poppins text-white/70 max-w-[649px] pt-4 max-lg:text-center max-lg:max-w-none max-md:text-base max-md:leading-7'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                            curabitur iaculis id cursus dignissim. Volutpat placerat volutpat
                            commodo id ultricies volutpat vestibulum. Egestas venenatis
                            dignissim fames maecenas. Blandit orci consectetur mauris, ipsum
                            viverra quisque. Vulputate sollicitudin tellus eget consequat
                            lectus dignissim integer in vitae. Commodo integer dis tortor cras
                            maecenas sit. Et nunc et platea elementum, cursus morbi. Placerat
                            molestie nibh parturient lectus magna sed fusce diam urna. Quam
                            magna duis imperdiet posuere iaculis.
                        </p>
                    </div>
                    <div className='max-lg:pt-10 max-md:pt-5'>
                        <img height={638} width={370} src="/assets/images/webp/girl-image.webp" alt='girl-image' className='xl:h-[638px] lg:h-[500px] h-[450px] w-full' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NftUtility