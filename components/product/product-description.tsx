// import { AddToCart } from 'components/cart/add-to-cart';
import Link from 'next/link';
import Price from '../price';
import Prose from '../prose';
// import { Product } from 'lib/shopify/types';
// import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: any }) {
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 border-neutral-700">
        <h1 className="mb-2 text-3xl md:text-5xl text-black font-medium">{product.title}</h1>
        <div className="mr-auto w-auto rounded-full border border-black py-2 px-4 text-sm text-black">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
      </div>

      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight text-black/[70%]"
          html={product.descriptionHtml}
        />
      ) : null}
      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfX8Y61uGcg8NeFPIz6OccjEyfLzMuX0pq8BpypGOqxuwM_0g/viewform" className="mr-auto w-auto font-medium rounded-md bg-[#e62b1e] py-2 px-4 text-base text-white uppercase">
        Buy now
      </Link>
      {/* <AddToCart variants={product.variants} availableForSale={product.availableForSale} /> */}
    </>
  );
}
