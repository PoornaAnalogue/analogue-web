import BlogCard from "@/app/blogCard/page";
import { blogsdata } from "@/app/BlogsData/blogData";

export default function Home() {
  return (
    <div className="bg-white container mx-auto py-10 px-10 grid grid-cols-1 md:grid-cols-2 gap-6">
      {blogsdata.map((blog, index) => (
        <BlogCard key={index} {...blog} />
      ))}
    </div>
  );
}