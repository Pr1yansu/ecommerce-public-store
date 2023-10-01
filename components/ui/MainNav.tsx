"use client";
import { cn } from "@/libs/utils";
import { CategoryProps } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  data: CategoryProps[];
}

const MainNav: React.FC<Props> = ({ data }) => {
  const pathName = usePathname();
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathName === `/category/${route.id}`,
  }));

  return (
    <nav className="flex items-center space-x-6 lg:space-x-4 ml-4">
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
    </nav>
  );
};

export default MainNav;
