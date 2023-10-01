"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/Button";
import { ShoppingBag } from "lucide-react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();

  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-4">
      <Button
        className="flex items-center rounded-md bg-violet-500 px-4 py-2"
        onClick={() => {
          router.push("/cart");
        }}
      >
        <ShoppingBag size={20} color="#fff" />
        <span className="ml-2 font-medium">({cart.items.length})</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
