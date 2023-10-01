"use client";
import { ProductProps } from "@/types";
import React from "react";
import Image from "next/image";
import { Toast } from "react-hot-toast";
import { X } from "lucide-react";
import IconButton from "@/components/ui/IconButton";
import Currency from "@/components/ui/Currency";
import useCart from "@/hooks/use-cart";

interface Props {
  item: ProductProps;
}

const CartItem: React.FC<Props> = ({ item }) => {
  const cart = useCart();
  const onRemove = () => {
    cart.removeItem(item.id);
  };
  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={item.images[0]?.url}
          alt="Product Image"
          className="rounded-md object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-col flex-1 justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <h5 className="font-semibold">{item.name}</h5>
          </div>
          <div className="flex mt-1 text-sm">
            <p>{item.color.name}</p>
            <p className="ml-4 border-l border-gray-200 pl-4">
              {item.size.name}
            </p>
          </div>
          <div>
            <Currency price={item.price} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
