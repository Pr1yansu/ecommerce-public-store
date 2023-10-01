import { ProductProps } from "@/types";
import React from "react";
import NoResults from "./ui/no-result";
import ProductCard from "./ui/ProductCard";

interface Props {
  title: string;
  products: ProductProps[];
}

const ProductList: React.FC<Props> = ({ products, title }) => {
  if (products.length === 0) {
    return <NoResults />;
  }

  return (
    <div className="space-y-4">
      <h4 className="font-bold">{title}</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => {
          return (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
