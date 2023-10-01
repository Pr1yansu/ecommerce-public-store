"use client";
import { Button } from "@/components/ui/Button";
import { cn } from "@/libs/utils";
import { ColorProps, SizeProps } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import React from "react";

interface Props {
  data: (SizeProps | ColorProps)[];
  name: string;
  valueKey: string;
}

const Filter: React.FC<Props> = ({ data, name, valueKey }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };
    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="mb-8">
      <h6 className="font-medium">{name}</h6>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              className={cn(
                "text-sm rounded-md p-2  text-gray-800 bg-white border border-gray-300",
                selectedValue === filter.id
                  ? "bg-violet-600 text-white"
                  : "bg-gray-100 text-gray-700"
              )}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
