"use client";
import { cn } from "@/libs/utils";
import { CategoryProps } from "@/types";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import NavbarActions from "../Navbar-actions";

interface Props {
  data: CategoryProps[];
}

const MainNav: React.FC<Props> = ({ data }) => {
  const pathName = usePathname();
  const [open, setOpen] = React.useState(false);
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathName === `/category/${route.id}`,
  }));

  return (
    <>
      <button
        className="min-[450px]:hidden z-[999] relative"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav
        className={`flex items-center min-[450px]:space-x-6 lg:space-x-4 min-[450px]:ml-4 ${
          open
            ? "max-[450px]:fixed max-[450px]:top-0 max-[450px]:left-0 right-0 bottom-0 bg-white z-50 max-[450px]:flex-col max-[450px]:justify-center  max-[450px]:gap-4"
            : "max-[450px]:hidden"
        }`}
      >
        {routes.map((route) => {
          return (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm font-medium text-zinc-600 transition-colors hover:text-violet-600",
                route.active && "!text-violet-600"
              )}
            >
              {route.label}
            </Link>
          );
        })}
        <NavbarActions />
      </nav>
    </>
  );
};

export default MainNav;
