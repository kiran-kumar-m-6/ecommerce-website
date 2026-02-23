import { ParaText } from "@/components/atom";
import Link from "next/link";

type NavProps = {
  labels: string;
};
type Props = {
  data: NavProps[];
};

export default function NavProductsGrid({ data }: Props) {
  return (
    <div>
      {data.map((item, index) => (
        <div key={item.labels ?? index}>
          <Link
            href={`/restaurant/device/${item.labels.toLowerCase().replace(" ", "")}`}
          >
            <ParaText
              content={item.labels ?? ""}
              className="text-sky-900  hover:font-bold p-2 px-10 cursor-pointer"
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
