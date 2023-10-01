"use client";
import { ProductProps } from "@/types";
import Image from "next/image";
import React, { MouseEventHandler } from "react";
import IconButton from "./IconButton";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./Currency";
import usePreviewModels from "@/hooks/use-preview-models";
import { useRouter } from "next/navigation";
import useCart from "@/hooks/use-cart";

interface Props {
  product: ProductProps;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const router = useRouter();
  const previewModal = usePreviewModels();
  const cart = useCart();

  const handleClick = () => {
    router.push(`/product/${product.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(product);
  };
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(product);
  };
  return (
    <div
      className="w-full h-full border bg-white cursor-pointer rounded-md p-2 space-y-4"
      onClick={handleClick}
    >
      <div className="aspect-square rounded-md bg-gray-100 relative group shadow-md shadow-zinc-100">
        <Image
          src={product?.images?.[0]?.url}
          fill
          alt={product?.images?.[0]?.url}
          className="rounded-md object-cover object-center aspect-square"
        />
        <div className="opacity-0 group-hover:opacity-100 transition-all absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-500" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-500" />}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <h6 className="font-semibold text-lg">{product.name}</h6>
          <div>
            <p className="text-[10px] text-center">color</p>
            <div
              className="w-6 h-6 rounded-full"
              style={{
                backgroundColor: product.color.value,
              }}
            />
          </div>
        </div>
        <p className="text-gray-500">{product.category?.name}</p>
        <div className="flex items-center justify-between mt-1">
          <Currency price={product.price} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
