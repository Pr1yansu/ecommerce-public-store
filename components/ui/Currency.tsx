"use client";
import React from "react";

const Currency = ({ price }: { price: number }) => {
  const [isMounted, setIsMounted] = React.useState(false);
  const formatter = new Intl.NumberFormat("en-US", {
    currency: "INR",
    style: "currency",
  });

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <span>Price :</span>{" "}
      <span className="text-neutral-500">
        {price && formatter.format(price)}
      </span>
    </>
  );
};

export default Currency;
