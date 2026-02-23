import { useEffect, useState } from "react";
import {
  Button,
  Icon,
  Input,
  HeadText,
  ParaText,
  Flex,
} from "@/components/atom";
import { useOutsideClick } from "@/hook/useOutSideClick";
import { Product } from "@/Data/Type/Product/Product";
import Link from "next/link";

type SearchBar = {
  id?: string;
  image: string;
  name: string;
  price?: string;
  description: string;
};

type NotFound = {
  id: string;
  name: string;
  image: string;
  description: string;
};

type Props = {
  logo: string;
  foundData?: Product[];
  notFoundData?: NotFound[];
  open: boolean;
  onClose: () => void;
};

export default function SearchBar({
  logo,
  foundData,
  notFoundData,
  open,
  onClose,
}: Props) {
  const [searchValue, setSearchValue] = useState<string>("");
  const [resultView, setResultView] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  const searchBar = useOutsideClick({
    onOutsideClick: () => {
      if (open) onClose();
    },
  });

  useEffect(() => {
    if (!searchValue || searchValue === " ") {
      setProducts([]);
      setResultView(true);
      return;
    }
    const filtered =
      foundData?.filter((item) =>
        (item.flavour || item.label || item.name)
          ?.toLowerCase()
          .includes(searchValue.toLowerCase()),
      ) || [];

    setProducts(filtered);
    setResultView(filtered.length > 0);
  }, [searchValue, foundData]);

  if (!open) return null;
  return (
    <div
      ref={searchBar}
      className="absolute w-full bg-white transition-all duration-100 visible h-[100vh] md:h-auto left-0 top-0 z-[9999]"
    >
      <nav className="flex items-center justify-between px-6 py-4 bg-white">
        <Link href={`/restaurant/home`}>
          <Icon
            src={logo}
            alt="cafe"
            width={48}
            height={48}
            className="hidden md:block"
          />
        </Link>
        <Flex className="justify-center align-middle border border-gray-500 rounded-lg">
          <div className="px-4 py-0.5 border-r border-gray-500">
            <Icon
              src={"/search.svg"}
              alt="search"
              width={36}
              height={36}
              className="py-0.5"
            />
          </div>
          <Input
            type="text"
            placeholder="Search Products"
            id="search-products"
            name="search-products"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            className="text-lg font-semibold border-none w-full sm:w-[400px] md:w-[350px] h-[40px]"
          />
        </Flex>
        <Button label="✕" onClick={onClose} className="hover:scale-150" />
      </nav>

      {resultView ? (
        <div>
          {products?.map((item, index) => (
            <Flex
              key={item?.id ?? index}
              className="flex-row justify-center align-middle p-4"
            >
              <div className="grid px-4 gap-0">
                <Link
                  href={`/restaurant/product/${item.id}`}
                  onClick={() => {
                    onClose();
                  }}
                >
                  <HeadText
                    content={(item.label || item.name) ?? ""}
                    className="text-sky-800 text-2xl font-bold hover:underline"
                  />
                </Link>
                <ParaText
                  content={`${item.price}`}
                  className="text-blue-950 text-xl font-bold"
                />
              </div>
              <div className="block items-center p-3 ">
                <ParaText
                  content={item.description}
                  className="text-blue-950 text-lg font-semibold w-auto md:w-[300px]"
                />
              </div>
              <div>
                <Icon
                  src={item.image ?? ""}
                  alt={item.flavour ?? ""}
                  height={160}
                  width={160}
                  className="md:h-30 md:w-30 lg:w-20 lg:h-20"
                />
              </div>
            </Flex>
          ))}
        </div>
      ) : (
        <Flex className="justify-center align-middle p-5">
          {notFoundData?.map((item, index) => (
            <div key={item?.id ?? index} className="grid">
              <div>
                <Icon
                  src={item.image}
                  alt={item.name}
                  height={216}
                  width={216}
                />
              </div>
              <HeadText content={item.name} />
              <ParaText content={item.description} />
            </div>
          ))}
        </Flex>
      )}
    </div>
  );
}
