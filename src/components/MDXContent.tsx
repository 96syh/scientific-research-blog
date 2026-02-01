"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import rehypeHighlight from "rehype-highlight"
import type { ComponentProps } from "react"

// 自定义 Markdown 组件样式
const components = {
  // 标题组件
  h1: (props: ComponentProps<"h1">) => (
    <h1 className="text-4xl font-bold text-gray-900 mt-8 mb-4" {...props} />
  ),
  h2: (props: ComponentProps<"h2">) => (
    <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2" {...props} />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3" {...props} />
  ),
  h4: (props: ComponentProps<"h4">) => (
    <h4 className="text-xl font-semibold text-gray-900 mt-4 mb-2" {...props} />
  ),

  // 段落和文本
  p: (props: ComponentProps<"p">) => (
    <p className="text-gray-700 leading-relaxed my-4" {...props} />
  ),
  strong: (props: ComponentProps<"strong">) => (
    <strong className="font-semibold text-gray-900" {...props} />
  ),
  em: (props: ComponentProps<"em">) => (
    <em className="italic text-gray-800" {...props} />
  ),

  // 列表
  ul: (props: ComponentProps<"ul">) => (
    <ul className="list-disc list-inside my-4 space-y-2 text-gray-700" {...props} />
  ),
  ol: (props: ComponentProps<"ol">) => (
    <ol className="list-decimal list-inside my-4 space-y-2 text-gray-700" {...props} />
  ),
  li: (props: ComponentProps<"li">) => (
    <li className="ml-4" {...props} />
  ),

  // 链接
  a: (props: ComponentProps<"a">) => (
    <a
      className="text-purple-600 hover:text-purple-800 underline underline-offset-2 transition-colors"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),

  // 代码块
  pre: (props: ComponentProps<"pre">) => (
    <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 my-6 overflow-x-auto text-sm" {...props} />
  ),
  code: ({ className, children, ...props }: ComponentProps<"code">) => {
    // 检查是否是行内代码
    const isInline = !className;
    if (isInline) {
      return (
        <code className="bg-gray-100 text-purple-600 px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
          {children}
        </code>
      );
    }
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },

  // 引用
  blockquote: (props: ComponentProps<"blockquote">) => (
    <blockquote className="border-l-4 border-purple-500 pl-4 my-6 italic text-gray-600 bg-gray-50 py-2 rounded-r" {...props} />
  ),

  // 分隔线
  hr: () => <hr className="my-8 border-gray-200" />,

  // 图片
  img: (props: ComponentProps<"img">) => (
    <img className="rounded-lg shadow-md my-6 max-w-full h-auto" alt={props.alt || ""} {...props} />
  ),

  // 表格
  table: (props: ComponentProps<"table">) => (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg" {...props} />
    </div>
  ),
  th: (props: ComponentProps<"th">) => (
    <th className="px-4 py-3 bg-gray-100 text-left text-sm font-semibold text-gray-900" {...props} />
  ),
  td: (props: ComponentProps<"td">) => (
    <td className="px-4 py-3 text-sm text-gray-700 border-t border-gray-200" {...props} />
  ),
}

interface MDXContentProps {
  source: string
}

export function MDXContent({ source }: MDXContentProps) {
  return (
    <article className="prose prose-lg max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
        components={components}
      >
        {source}
      </ReactMarkdown>
    </article>
  )
}
