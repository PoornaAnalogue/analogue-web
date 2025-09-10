import Image from "next/image";

export default function BlogPageTesting() {
  const blogsData = [
  {
    id: 1,
    title: "Dynamic Blog Example 1",
    author: "Madhavika",
    blocks: [
      { type: "heading", data: "Welcome to blog 1" },
      { type: "paragraph", data: "This is an introduction for blog 1." },
      { type: "image", data: { url: "/BlogImages/BlogsImg-1.svg", alt: "Sample 1" } },
      { type: "quote", data: "Consistency is the key!" }
    ]
  },
  {
    id: 2,
    title: "Dynamic Blog Example 2",
    author: "Madhavika",
    blocks: [
      { type: "heading", data: "Welcome to blog 2" },
      { type: "paragraph", data: "This is an introduction for blog 2." },
      { type: "image", data: { url: "/BlogImages/BlogsImg-1.svg", alt: "Sample 2" } },
      { type: "subheading", data: "Section A" },
      { type: "paragraph", data: "Some details about section A..." }
    ]
  }
];

  const blogs = blogsData; // normally this comes from API

  return (
    <div style={{  margin: "auto", padding: "20px" }} className="grid grid-cols-2 gap-5 text-black ">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          style={{ border: "2px solid #ddd", padding: "20px", marginBottom: "30px" }}
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
