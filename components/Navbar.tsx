import Image from "next/image";
import React from "react";
import Container from "./ui/Container";
import Link from "next/link";
import MainNav from "./ui/MainNav";
import { getCategories } from "@/actions/get-categories";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <header className="bg-white border-b">
      <Container>
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <div className="flex items-center">
              <Image
                src="/assets/logo.png"
                alt="logo"
                width={100}
                height={40}
                className="cursor-pointer h-16 object-cover object-center"
              />
              <h2 className="cursive text-violet-600">Store</h2>
            </div>
          </Link>
          <MainNav data={categories} />
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
