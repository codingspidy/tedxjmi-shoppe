'use client';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
// import { GridTileImage } from '../grid/tile';
// import { createUrl } from '../../lib/utils';
import Image, { StaticImageData } from 'next/image';
// import Link from 'next/link';
// import { usePathname, useSearchParams } from 'next/navigation';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";
import tshirt2 from "../../images/back-mock.jpg"
import tshirt1 from "../../images/front-mock.png"



export function Gallery({ images }: { images: { src: StaticImageData; altText: string }[] }) {
  // const pathname = usePathname();
  // const searchParams = useSearchParams();
  // const imageSearchParam = searchParams.get('image');
  // const imageIndex = imageSearchParam ? parseInt(imageSearchParam) : 0;

  // const nextSearchParams = new URLSearchParams(searchParams.toString());
  // const nextImageIndex = imageIndex + 1 < images.length ? imageIndex + 1 : 0;
  // nextSearchParams.set('image', nextImageIndex.toString());
  // const nextUrl = createUrl(pathname, nextSearchParams);

  // const previousSearchParams = new URLSearchParams(searchParams.toString());
  // const previousImageIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1;
  // previousSearchParams.set('image', previousImageIndex.toString());
  // const previousUrl = createUrl(pathname, previousSearchParams);
  const swiper = useSwiper()


  return (
    <>
      <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden">
        <Swiper
          className='mySwiper'
          slidesPerView={1}
          modules={[Autoplay, Navigation]}
          navigation={{ nextEl: "#next-slider", prevEl: "#prev-slider" }}
          autoplay={{
            delay: 3000,
          }}
        >
          <SwiperSlide className="">
            <Image
              className="h-full w-full object-cover object-top"
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              alt={images[0]?.altText as string}
              src={tshirt1}
              priority={true}
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <Image
              className="h-full w-full object-cover object-top"
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              alt={images[0]?.altText as string}
              src={tshirt2}
              priority={true}
            />
          </SwiperSlide>
          <div className="absolute bottom-[5%] z-10 flex w-full justify-center">
            <div className="mx-auto flex h-11 items-center rounded-full border border-white bg-neutral-50/80 text-neutral-500 backdrop-blur dark:border-black dark:bg-neutral-900/80">
              <button
                id="prev-slider"
                onClick={() => swiper.slidePrev()}
                aria-label="Previous product image"
                className='cursor-pointer h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black flex items-center justify-center'
              >
                <ArrowLeftIcon className="h-5" />
              </button>
              <div className="mx-1 h-6 w-px bg-neutral-500"></div>
              <button
                id="next-slider"
                onClick={() => swiper.slideNext()}
                aria-label="Next product image"
                className='cursor-pointer h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black flex items-center justify-center'
              >
                <ArrowRightIcon className="h-5" />
              </button>
            </div>
          </div>
        </Swiper>

      </div>
    </>
      
  );
}
