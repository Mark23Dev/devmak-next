type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] };

interface ContentProps {
  content: ContentBlock[];
}

export default function Content({ content }: ContentProps) {
  return (
    <div className="prose prose-invert max-w-full">
      {content.map((block, idx) => {
        switch (block.type) {
          case "paragraph":
            return <p key={idx}>{block.text}</p>;
          case "heading":
            return <h2 key={idx}>{block.text}</h2>;
          case "subheading":
            return <h3 key={idx}>{block.text}</h3>;
          case "list":
            return (
              <ul key={idx}>
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
