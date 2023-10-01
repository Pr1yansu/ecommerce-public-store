import Image from "next/image";
import React from "react";
import Container from "./ui/Container";
import Link from "next/link";
import MainNav from "./ui/MainNav";
import { getCategories } from "@/actions/get-categories";
import NavbarActions from "./Navbar-actions";

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
                height={100}
              />
              <h2 className="cursive text-violet-600">Store</h2>
            </div>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
