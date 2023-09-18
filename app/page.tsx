// import type { Metadata } from 'next';
// import { notFound } from 'next/navigation';
// import { Suspense } from 'react';

// import { GridTileImage } from '../components/grid/tile';
// import Footer from 'components/layout/footer';
import { Gallery } from '../components/product/gallery';
import { ProductDescription } from '../components/product/product-description';
// import { HIDDEN_PRODUCT_TAG } from 'lib/constants';
// import { getProduct, getProductRecommendations } from 'lib/shopify';
// import { Image } from 'lib/shopify/types';
// import Link from 'next/link';
import tshirt1 from "../images/tshirt-mockup.jpg";
// import { StaticImageData } from 'next/image';

export const runtime = 'edge';

// export async function generateMetadata({
//     params
// }: {
//     params: { handle: string };
// }): Promise<Metadata> {
//     const product = await getProduct(params.handle);

//     if (!product) return notFound();

//     const { url, width, height, altText: alt } = product.featuredImage || {};
//     const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

//     return {
//         title: product.seo.title || product.title,
//         description: product.seo.description || product.description,
//         robots: {
//             index: indexable,
//             follow: indexable,
//             googleBot: {
//                 index: indexable,
//                 follow: indexable
//             }
//         },
//         openGraph: url
//             ? {
//                 images: [
//                     {
//                         url,
//                         width,
//                         height,
//                         alt
//                     }
//                 ]
//             }
//             : null
//     };
// }

export default function ProductPage() {
    const product = {
        id: "product-1",
        handle: "product-handle-1",
        availableForSale: true,
        title: "TEDxJMI T-Shirt",
        description: "Cotton T-shirt of TEDxJMI with the theme of Chasing horizons.",
        descriptionHtml: "<p>Cotton T-shirt of TEDxJMI with the theme of Chasing horizons.</p>",
        options: [
            {
                name: "Size",
                values: ["Small", "Medium", "Large"],
            },
            {
                name: "Color",
                values: ["Red", "Blue", "Green"],
            },
        ],
        priceRange: {
            maxVariantPrice: {
                amount: 1999,
                currencyCode: "INR",
            },
            minVariantPrice: {
                amount: 1499,
                currencyCode: "INR",
            },
        },
        variants: [
            {

                id: "variant-1",
                title: "Small Red",
                availableForSale: true,
                selectedOptions: [
                    { name: "Size", value: "Small" },
                    { name: "Color", value: "Red" },
                ],
                price: {
                    amount: 1499,
                    currencyCode: "INR",
                },

            },
            {

                id: "variant-2",
                title: "Medium Blue",
                availableForSale: true,
                selectedOptions: [
                    { name: "Size", value: "Medium" },
                    { name: "Color", value: "Blue" },
                ],
                price: {
                    amount: 1699,
                    currencyCode: "INR",
                },

            },
            {

              id: "variant-2",
              title: "Medium Blue",
              availableForSale: true,
              selectedOptions: [
                  { name: "Size", value: "Medium" },
                  { name: "Color", value: "Blue" },
              ],
              price: {
                  amount: 1699,
                  currencyCode: "INR",
              },

          },
        ],
        featuredImage: {
            id: "featured-image-1",
            src: "https://example.com/product1-image.jpg",
            alt: "Product 1 Image",
        },
        images:
            [
                {

                    url: "https://example.com/product1-image1.jpg",
                    altText: "Product 1 Image 1",
                },
                {

                    url: "https://example.com/product1-image2.jpg",
                    altText: "Product 1 Image 2",
                },
                {

                  url: "https://example.com/product1-image2.jpg",
                  altText: "Product 1 Image 2",
              },
            ],

        seo: {
            title: "Product 1 - Best Product Ever",
            description: "Discover the amazing features of Product 1.",
            keywords: ["product", "example", "1"],
        },
        tags: ["product", "example", "1"],
        updatedAt: "2023-09-18T12:00:00Z",
    };;

    const productJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.title,
        description: product.description,
        image: product.featuredImage.src,
        offers: {
            '@type': 'AggregateOffer',
            availability: product.availableForSale
                ? 'https://schema.org/InStock'
                : 'https://schema.org/OutOfStock',
            priceCurrency: product.priceRange.minVariantPrice.currencyCode,
            highPrice: product.priceRange.maxVariantPrice.amount,
            lowPrice: product.priceRange.minVariantPrice.amount
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(productJsonLd)
                }}
            />
            <div className="mx-auto max-w-screen-xl px-4 py-20">
                <div className="flex flex-col rounded-lg border p-8 border-neutral-800 bg-black md:p-12 lg:flex-row lg:gap-8">
                    <div className="h-full w-full basis-full lg:basis-3/6">
                        <Gallery
                            images={product.images.map((image: any) => ({
                                src: tshirt1,
                                altText: image.altText
                            }))}
                        />
                    </div>

                    <div className="basis-full lg:basis-3/6">
                        <ProductDescription product={product} />
                    </div>
                </div>
                
            </div>
            {/* <Suspense>
                <Footer />
            </Suspense> */}
        </>
    );
}

