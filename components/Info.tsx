"use client";
import { ProductProps } from "@/types";
import React from "react";
import Currency from "./ui/Currency";
import { Button } from "./ui/Button";
import { ShoppingCart } from "lucide-react";

interface Props {
  data: ProductProps;
}

const Info: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <h1 className="text-violet-500 text-3xl">{data.name}</h1>
      <p className="text-gray-500">{data.description}</p>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-gray-900">
          <Currency price={data.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-x-4">
          <h6 className="font-medium">Size :</h6>
          <p className="text-gray-500">{data.size?.name}</p>
        </div>
        <div className="flex items-center gap-x-4">
          <h6 className="font-medium">Color :</h6>
          <div
            className="h-6 w-6 border rounded-full"
            style={{ backgroundColor: data.color?.value }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex items-center gap-2 bg-violet-600 font-medium rounded-md shadow-md">
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Info;
