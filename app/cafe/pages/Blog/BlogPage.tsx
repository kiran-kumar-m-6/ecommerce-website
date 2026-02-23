import { Button, Flex, HeadText, Icon, ParaText } from "@/components/atom";
import { Blog } from "@/Data/Blog/Blog";
import Link from "next/link";

type Props = {
  data: Blog[];
};

export default function BlogPage({ data }: Props) {
  return (
    <div>
      <div>
        <HeadText
          content="VAPE LIQUIDS & FLAVOURS"
          className="text-5xl text-blue-950 text-center py-6"
        />
        <Flex className="flex-wrap justify-center gap-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-6 mx-auto">
          {data.map((blog, index) => (
            <Flex
              key={blog.id ?? index}
              className="
                    transform-gpu
                    w-[350px]
                    rounded-xl
                    flex flex-col
                    hover:scale-110
                    hover:shadow-xl
                    transition-all
                    duration-500
                    group
                "
            >
              <div>
                <Icon
                  src={blog.image || ""}
                  alt={blog.heading || "Blog"}
                  width={600}
                  height={450}
                  className="object-cover w-full  aspect-[16/9] rounded-lg hover:rounded-b-none"
                />
              </div>
              <div className="px-4 pt-6 pb-0 m-0 grid justify-start">
                <HeadText
                  content={blog.heading}
                  className="text-blue-950 text-xl font-bold group-hover:text-sky-500"
                />
                <ParaText
                  content={blog.description}
                  className="text-blue-950 font-medium text-sm mt-3 line-clamp-2"
                />
              </div>
              <div className="mt-auto px-6 py-5">
                <Link href={`/cafe/blog/${blog.id}`}>
                  <Button
                    label="Read →"
                    className="
                        border-2 border-blue-950
                        rounded-md
                        font-semibold
                        text-blue-950
                        px-6 py-2
                        group-hover:border-sky-500
                        group-hover:text-sky-500
                        hover:bg-sky-50
                        transition-colors
                      "
                  />
                </Link>
              </div>
            </Flex>
          ))}
        </Flex>
      </div>
    </div>
  );
}
