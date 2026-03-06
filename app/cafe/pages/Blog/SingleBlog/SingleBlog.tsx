import { HeadText, Icon, ParaText } from "@/components/atom";
import { Blog as BlogType } from "@/Data/Blog/Blog";

type Props = {
  data: BlogType;
};

export default function SingleBlog({ data }: Props) {
  return (
    <div data-testid="singleBlog-page">
      <div className="pt-10">
        <HeadText
          content={data.heading}
          className="text-5xl text-blue-950 text-center"
        />
        <HeadText
          content="KATE THOMPSON | 17.12.2025"
          className="text-sky-500 text-center text-5xl pt-3"
        />
      </div>
      <div className="py-7">
        <Icon
          src={data.image || ""}
          alt={data.heading || "blog"}
          height={450}
          width={450}
          className="w-full"
        />
      </div>
      <div>
        <ParaText
          content={data.description}
          className="text-5xl text-blue-950 text-center py-6"
        />
      </div>
    </div>
  );
}
