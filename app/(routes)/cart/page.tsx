"use client";
import Container from "@/components/ui/Container";
import useCart from "@/hooks/use-cart";
import React, { useEffect, useState } from "react";
import CartItem from "./components/CartItem";
import Summary from "./components/Summary";

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-2xl">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <h1 className="text-2xl cursive">Your cart is empty</h1>
                  <p className="text-gray-500">
                    Looks like you haven&apos;t added any items to your cart
                    yet.
                  </p>
                </div>
              ) : (
                <ul>
                  {cart.items.map((item) => {
                    return <CartItem key={item.id} item={item} />;
                  })}
                </ul>
              )}
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
