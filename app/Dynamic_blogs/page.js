import Link from "next/link";
import axios from "axios";

export default async function Blogs() {
  const res = await axios.get("https://carrer.analogueitsolutions.com/allblogs");
  const blogs = res.data.allblogs; // 👈 use allblogs array

  return (
    <div className="h-fit w-fit text-black mx-auto leading-7 text-center">
      <h1 className="font-bold py-2">All Blogs</h1>
      <ul  >
        {blogs.map((blog) => (
          <li className="border-1 border-gray-500 p-2 my-5" key={blog._id}>
            <Link href={`/Dynamic_blogs/${blog._id}`}>
              {blog.title}
            </Link>
            <p>{blog.tag} | {blog.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
