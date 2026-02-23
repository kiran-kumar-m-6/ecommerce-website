import { BlogData } from "@/Data/BlogData/BlogData";
import BlogPage from "../pages/Blog/BlogPage";

export default function Blogs() {
  return <BlogPage data={BlogData} />;
}
