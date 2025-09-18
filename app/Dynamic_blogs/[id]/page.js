// import axios from "axios";
// import Image from "next/image";

// export default async function BlogDetails({ params }) {
//   const res = await axios.get("https://carrer.analogueitsolutions.com/allblogs");
//   const blogs = res.data.allblogs;

//   const blog = blogs.find((b) => b._id === params.id);

//   if (!blog) {
//     return <h1>Blog not found</h1>;
//   }

//   return (
//     <div className="h-full w-full text-black border-2 border-red-500 ">
//       <h1>{blog.title}</h1>
//       <p><strong>Tag:</strong> {blog.tag}</p>
//       <p><strong>Date:</strong> {blog.date}</p>
//       <Image src={blog.mainPic} alt={blog.title} width={400} height={100} />
//       <div dangerouslySetInnerHTML={{ __html: blog.description || "" }} />
//     </div>
//   );
// }





// import axios from "axios";
// import Image from "next/image";

// export default async function BlogDetails({ params }) {
//   const res = await axios.get("https://carrer.analogueitsolutions.com/allblogs");
//   const blogs = res.data.allblogs;

//   const blog = blogs.find((b) => b._id === params.id);

//   if (!blog) {
//     return <h1>Blog not found</h1>;
//   }

//   return (
//     <div  className="text-black border-1 border-gray-500 p-2 my-5 h-fit w-fit mx-auto text-center">
//       <h1>{blog.title}</h1>
//       <p><strong>Tag:</strong> {blog.tag}</p>
//       <p><strong>Date:</strong> {blog.date}</p>

//       {blog.mainPic && (
//         <Image
//           src={blog.mainPic}
//           alt={blog.title}
//           width={200}
//           height={100}
//           style={{ marginBottom: "20px", borderRadius: "8px" }}
//         />
//       )}

//       {/* Dynamic blog content */}
//       {blog.content ? (
//         <div
//           style={{ lineHeight: "1.8", fontSize: "18px"}}
//           dangerouslySetInnerHTML={{ __html: blog.content }}
//         />
//       ) : (
//         <p>No content available</p>
//       )}
//     </div>
//   );
// }




// "content": "<h2>Intro</h2><p>This is a <b>sample</b> blog post.</p>"






"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function BlogDetails({ params }) {
  const [blog, setBlog] = useState(null);
  const { id } = params; // ✅ no await, params is already an object in client

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("https://carrer.analogueitsolutions.com/allblogs");
        const allblogs = res.data.allblogs;
        const match = allblogs.find((b) => b._id === id);
        setBlog(match);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, [id]); // ✅ use id

  if (!blog) return <h1>Loading...</h1>;

  return (
    <div className="text-black border-1 border-gray-500 p-2 my-5 h-fit w-fit mx-auto text-center">
      <h1>{blog.title}</h1>
      <p><strong>Tag:</strong> {blog.tag}</p>
      <Image src={blog.mainPic} alt={blog.title} width={200} height={150} />

      {/* Render Block-based content */}
      <div className="blog-content">
        {Array.isArray(blog.content) &&
          blog.content.map((block, index) => {
            switch (block.type) {
              case "heading":
                return <h2 key={index}>{block.text}</h2>;
              case "paragraph":
                return <p key={index}>{block.text}</p>;
              case "image":
                return (
                  <Image
                    key={index}
                    src={block.url}
                    alt={block.alt || "blog image"}
                    width={200}
                    height={150}
                    className="border-2"
                    
                  />
                );
              case "list":
                return block.style === "ordered" ? (
                  <ol key={index}>
                    {block.items.map((item, i) => <li key={i}>{item}</li>)}
                  </ol>
                ) : (
                  <ul key={index}>
                    {block.items.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                );
              case "code":
                return (
                  <pre key={index} style={{ background: "#f4f4f4", padding: "10px" }}>
                    <code>{block.code}</code>
                  </pre>
                );
              default:
                return null;
            }
          })}
      </div>
    </div>
  );
}
