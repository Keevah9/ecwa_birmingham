import dynamic from "next/dynamic";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

function BlogSingleColumnBlock(props: any) {
  return (
    <div className=" blog flexible-component">
      <ReactMarkdown className="markdown" rehypePlugins={[rehypeRaw]}>
        {props.data?.BlogSingleColumnContent}
      </ReactMarkdown>
    </div>
  );
}
export default BlogSingleColumnBlock;
