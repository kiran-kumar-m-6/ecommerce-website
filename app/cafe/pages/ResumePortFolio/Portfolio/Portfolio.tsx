import { Icon } from "@/components/atom";
import {
  PortfolioCategoryProps,
  PortfolioProps,
} from "@/Data/Type/PortFolio/Porfolio";

type Props = {
  data: PortfolioProps[];
  categories?: PortfolioCategoryProps[];
};

export default function Portfolio({ data, categories }: Props) {
  return (
    <div className="pt-[70px]">
      <div id="target-portfolio">
        <div className="text-center grid justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#2B2B2B] font-bold text-center capitalize h-[40px] dark:text-white">
            Portfolio
          </h2>
          <p className="text-[#767676] dark:text-gray-400 text-center pt-[25px] capitalize max-w-[438px]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. lorem ipsum
          </p>
        </div>
      </div>
      <div>
        <div className="pt-[50px] flex flex-row justify-center gap-[37px] overflow-x-auto overflow-y-hidden">
          {categories?.map((category, catIndex) => (
            <h4
              key={catIndex}
              className=" text-[#2B2B2B] text-xs sm:text-lg cursor-pointer hover:text-[#FFB400] font-semibold dark:text-white dark:hover:text-[#FFB400] capitalize mb-2"
            >
              {category.categories ?? "Category"}
            </h4>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="pt-[50px] flex flex-wrap justify-center gap-[20px] w-[970px]">
          {data.map((image, index) => (
            <div key={image.alt ?? index}>
              <Icon
                src={image.image ?? ""}
                alt={image.alt ?? "Portfolio"}
                width={310}
                height={300}
                className="object-scale-down"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
