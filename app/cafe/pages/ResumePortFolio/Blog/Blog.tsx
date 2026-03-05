import { Icon } from "@/components/atom";
import { BlogProps } from "@/Data/Type/PortFolio/PortFolioTypes"; 

type Props = {
  data: BlogProps[];
};
export default function Blog({ data }: Props) {
  return (
    <div className="pt-[70px]">
      <div className="grid justify-center" id="target-blog">
        <div className="text-center grid justify-center">
          <h2 className="text-5xl text-[#2B2B2B] font-bold text-center capitalize h-[40px] dark:text-white">
            Blog
          </h2>
          <p className="text-[#767676] dark:text-gray-400 text-center pt-6 max-w-[438px]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Lorem ipsum
          </p>
        </div>
      </div>
      <div className="pt-[50px] flex justify-center flex-wrap gap-7">
        {data.map((blog, index) => (
          <div
            key={blog.title ?? index}
            className="bg-white dark:bg-gray-800 grid w-[310px] h-[474px]"
          >
            <Icon
              src={blog.image ?? ""}
              alt={blog.title ?? "Blog Image"}
              width={310}
              height={300}
            />
            <div className="pt-[25px] pl-[25px] pr-[36px] pb-[16px]">
              <h4 className="font-semibold text-[#2B2B2B] text-xl mt-auto capitalize line-clamp-1 dark:text-white">
                {blog.title ?? "Title"}
              </h4>
              <p className="text-[#767676] capitalize pt-[8px] pb-[9px] dark:text-white">
                {blog.description ?? "Description"}
              </p>
              <h4 className="text-[#FFB400] mb-auto capitalize line-clamp-2 dark:text-[#FFB400]">
                Learn More ﹥
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
