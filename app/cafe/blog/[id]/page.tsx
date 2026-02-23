import { HeadText } from "@/components/atom";
import { BlogData } from "@/Data/BlogData/BlogData";
import SingleBlog from "../../pages/Blog/SingleBlog/SingleBlog";

type Props = {
  params: {
    id: string;
  };
};

const getBlogById = (id: string) => BlogData.find((b) => String(b.id) === id);

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params;
  const blog = getBlogById(id);

  return {
    title: blog?.heading || "Blog Not Found",
  };
}

export default async function Blog({ params }: Props) {
  const { id } = await params;
  const blogs = getBlogById(id);

  if (!blogs) return <HeadText content="Blog Not Found" />;

  return <SingleBlog data={blogs} />;
}
