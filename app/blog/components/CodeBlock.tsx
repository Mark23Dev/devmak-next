import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeBlock({ language, code }: { language: string; code: string }) {
  return (
    <SyntaxHighlighter language={language} style={oneDark} className="rounded-xl my-4">
      {code}
    </SyntaxHighlighter>
  );
}
