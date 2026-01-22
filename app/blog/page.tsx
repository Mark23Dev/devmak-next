import BlogLayout from "./layout";
import Hero from "./components/Hero";
import Content from "./components/Content";
import CodeBlock from "./components/CodeBlock";
import ImageBlock from "./components/ImageBlock";
import Tags from "./components/Tags";
import Author from "./components/Author";

// --- Define types ---
type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] };

type CodeBlockType = { language: string; code: string };

type BlogType = {
  title: string;
  subtitle: string;
  image: string;
  content: ContentBlock[];
  code: CodeBlockType[];
  images: string[];
  tags: string[];
  author: { name: string; date: string };
};

export default function BlogPage() {
  const dummyBlog: BlogType = {
    title: "Scaling Go Backends for Real-World Projects",
    subtitle: "A deep dive into architecture, performance, and maintainability",
    image: "/go-backend-hero.jpg",
    content: [
      { type: "paragraph", text: "Go is an excellent choice for building high-performance backends..." },
      { type: "heading", text: "Why Go?" },
      { type: "paragraph", text: "It provides simplicity, concurrency, and a rich standard library..." },
      { type: "subheading", text: "Concurrency with Goroutines" },
      { type: "paragraph", text: "Goroutines allow lightweight concurrent execution..." },
      { type: "list", items: ["Lightweight threads", "Channel communication", "Synchronization primitives"] },
      { type: "paragraph", text: "This makes handling thousands of connections simple and efficient." }
    ],
    code: [
      { language: "go", code: `go func() { fmt.Println("Hello, Goroutine!") }()` }
    ],
    images: ["/go-backend-1.png", "/go-backend-2.png"],
    tags: ["Go", "Backend", "Scalable Systems"],
    author: { name: "DevMak", date: "January 22, 2026" }
  };

  return (
    <BlogLayout>
      <Hero title={dummyBlog.title} subtitle={dummyBlog.subtitle} image={dummyBlog.image} />
      <Content content={dummyBlog.content} />
      {dummyBlog.code.map((block, idx) => (
        <CodeBlock key={idx} language={block.language} code={block.code} />
      ))}
      {dummyBlog.images.map((img, idx) => (
        <ImageBlock key={idx} src={img} alt={`Blog image ${idx + 1}`} />
      ))}
      <Tags tags={dummyBlog.tags} />
      <Author name={dummyBlog.author.name} date={dummyBlog.author.date} />
    </BlogLayout>
  );
}
