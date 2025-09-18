import Image from "next/image";

export default function BlogPageTesting() {
  const blogsData = [
    {
      id: 1,
      title: "Dynamic Blog Example 1",
      author: "Author 1",
      blocks: [
        { type: "heading", data: "Welcome to blog 1" },
        { type: "paragraph", data: "This is an introduction for blog 1." },
        {
          type: "image",
          data: { url: "/BlogImages/BlogsImg-1.svg", alt: "Sample 1" },
        },
        { type: "quote", data: "Consistency is the key!" },
      ],
    },
    {
      id: 2,
      title: "Dynamic Blog Example 2",
      author: "Author 2",
      blocks: [
        { type: "heading", data: "Welcome to blog 2" },
        { type: "paragraph", data: "This is an introduction for blog 2." },
        {
          type: "image",
          data: { url: "/BlogImages/BlogsImg-1.svg", alt: "Sample 2" },
        },
        { type: "subheading", data: "Section A" },
        { type: "paragraph", data: "Some details about section A..." },
      ],
    },
  ];

  const blogs = blogsData; // normally this comes from API

  return (
    <div
      style={{ margin: "auto", padding: "20px" }}
      className="grid grid-cols-2 gap-5 text-black "
    >
      {blogs.map((blog) => (
        <div
          key={blog.id}
          style={{
            border: "2px solid #ddd",
            padding: "20px",
            marginBottom: "30px",
          }}
        >
          <h1 className="font-bold text-xl">{blog.title}</h1>
          <p>By {blog.author}</p>

          {blog.blocks.map((block, index) => {
            switch (block.type) {
              case "heading":
                return <h2 key={index}>{block.data}</h2>;

              case "subheading":
                return <h3 key={index}>{block.data}</h3>;

              case "paragraph":
                return <p key={index}>{block.data}</p>;

              case "image":
                return (
                  <Image
                    key={index}
                    src={block.data.url}
                    alt={block.data.alt}
                    width={200}
                    height={150}
                    style={{ width: "100%", margin: "10px 0" }}
                  />
                );

              case "quote":
                return (
                  <blockquote
                    key={index}
                    style={{
                      fontStyle: "italic",
                      color: "gray",
                      borderLeft: "3px solid #ccc",
                      paddingLeft: "10px",
                    }}
                  >
                    {block.data}
                  </blockquote>
                );

              default:
                return null;
            }
          })}
        </div>
      ))}
    </div>
  );
}








// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import axios from "axios";
// import Image from "next/image";

// export default function BlogDetails() {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);

//   useEffect(() => {
//     axios.get(`https://carrer.analogueitsolutions.com/allblogs/${id}`)
//       .then((res) => {
//         setBlog(res.data);
//       })
//       .catch((err) => console.error(err));
//   }, [id]);

//   if (!blog) return <p>Loading...</p>;

//   return (
//     <div className="container">
//       <h1>{blog.title}</h1>
//       <p><strong>Tag:</strong> {blog.tag}</p>
//       <Image src={blog.mainPic} alt={blog.title} width={500}  height={150}/>

//       {/* Render Block-based content */}
//       <div className="blog-content">
//         {blog.content.map((block, index) => {
//           switch (block.type) {
//             case "heading":
//               return <h2 key={index}>{block.text}</h2>;
//             case "paragraph":
//               return <p key={index}>{block.text}</p>;
//             case "image":
//               return <Image key={index} src={block.url} alt={block.alt} style={{ maxWidth: "100%" }} width={500}  height={150} />;
//             case "list":
//               return block.style === "ordered" ? (
//                 <ol key={index}>
//                   {block.items.map((item, i) => <li key={i}>{item}</li>)}
//                 </ol>
//               ) : (
//                 <ul key={index}>
//                   {block.items.map((item, i) => <li key={i}>{item}</li>)}
//                 </ul>
//               );
//             case "code":
//               return (
//                 <pre key={index} style={{ background: "#f4f4f4", padding: "10px" }}>
//                   <code>{block.code}</code>
//                 </pre>
//               );
//             default:
//               return null;
              
//           }
//         })}
//       </div>
//     </div>
//   );
// }















































// {
//   "_id": "68baa3bb72806fcc48e05948",
//   "title": "Test Blog with Blocks",
//   "tag": "IT",
//   "mainPic": "/uploadings/blog1.jpg",
//   "date": "2025-09-20",
//   "content": [
//     {
//       "type": "heading",
//       "level": 2,
//       "text": "Introduction to Block-based Blog"
//     },
//     {
//       "type": "paragraph",
//       "text": "Block-based content helps us structure blogs in a flexible way without hardcoding HTML."
//     },
//     {
//       "type": "image",
//       "url": "/uploadings/sample.jpg",
//       "alt": "Sample blog image"
//     },
//     {
//       "type": "list",
//       "style": "unordered",
//       "items": [
//         "Easier to render",
//         "Safer than raw HTML",
//         "Structured data"
//       ]
//     },
//     {
//       "type": "code",
//       "language": "javascript",
//       "code": "console.log('Hello World');"
//     }
//   ]
// }

