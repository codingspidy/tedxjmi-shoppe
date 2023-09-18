'use client';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
// import { GridTileImage } from '../grid/tile';
// import { createUrl } from '../../lib/utils';
import Image, { StaticImageData } from 'next/image';
// import Link from 'next/link';
// import { usePathname, useSearchParams } from 'next/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
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



  return (
    <div>
      <div className="relative aspect-square h-full max-h-[500px] w-full overflow-hidden">
        {/* <Swiper
          slidesPerView={1}
          modules={[Autoplay, Navigation]}
          navigation={{ nextEl: "#next-slider", prevEl: "#prev-slider" }}
          autoplay={{
            delay: 2000,
          }}
        >
          <SwiperSlide className="">
            <Image
              className="h-full w-full object-contain"
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              alt={images[0]?.altText as string}
              src={tshirt1}
              priority={true}
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <Image
              className="h-full w-full object-contain"
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              alt={images[0]?.altText as string}
              src={tshirt2}
              priority={true}
            />
          </SwiperSlide>
        </Swiper> */}
        <Image
          className="h-full w-full object-contain"
          fill
          sizes="(min-width: 1024px) 66vw, 100vw"
          alt={images[0]?.altText as string}
          src={tshirt1}
          priority={true}
        />
        <div className="absolute bottom-[5%] flex w-full justify-center">
          <div className="mx-auto flex h-11 items-center rounded-full border border-white bg-neutral-50/80 text-neutral-500 backdrop-blur dark:border-black dark:bg-neutral-900/80">
            <button
              id="prev-slider"
              aria-label="Previous product image"
              className='h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-white flex items-center justify-center'
            >
              <ArrowLeftIcon className="h-5" />
            </button>
            <div className="mx-1 h-6 w-px bg-neutral-500"></div>
            <button
              id="next-slider"
              aria-label="Next product image"
              className='h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-white flex items-center justify-center'
            >
              <ArrowRightIcon className="h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* {images.length > 1 ? (
          <div className="absolute bottom-[15%] flex w-full justify-center">
            <div className="mx-auto flex h-11 items-center rounded-full border border-white bg-neutral-50/80 text-neutral-500 backdrop-blur dark:border-black dark:bg-neutral-900/80">
              <Link
                aria-label="Previous product image"
                href={previousUrl}
                className={buttonClassName}
                scroll={false}
              >
                <ArrowLeftIcon className="h-5" />
              </Link>
              <div className="mx-1 h-6 w-px bg-neutral-500"></div>
              <Link
                aria-label="Next product image"
                href={nextUrl}
                className={buttonClassName}
                scroll={false}
              >
                <ArrowRightIcon className="h-5" />
              </Link>
            </div>
          </div>
        ) : null}
      </div>

      {images.length > 1 ? (
        <ul className="mt-6 mb-12 flex items-center justify-center gap-2 overflow-auto py-1 lg:mb-0">
          {images.map((image, index) => {
            const isActive = index === imageIndex;
            const imageSearchParams = new URLSearchParams(searchParams.toString());

            imageSearchParams.set('image', index.toString());

            return (
              <li key={index} className="h-20 w-20">
                <Link
                  aria-label="Enlarge product image"
                  href={createUrl(pathname, imageSearchParams)}
                  scroll={false}
                  className="h-full w-full"
                >
                  <GridTileImage
                    alt={image.altText}
                    src={image.src}
                    width={80}
                    height={80}
                    active={isActive}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null} */}
    </div>
  );
}
