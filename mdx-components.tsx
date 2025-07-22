import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

const components = {
  h1: (props: HeadingProps) => (
    <h1
      className="text-4xl font-bold mt-8 mb-4 leading-tight"
      {...props}
    />
  ),
  h2: (props: HeadingProps) => (
    <h2
      className="text-3xl font-semibold mt-8 mb-3 leading-snug"
      {...props}
    />
  ),
  h3: (props: HeadingProps) => (
    <h3
      className="text-2xl font-semibold mt-6 mb-2 leading-snug"
      {...props}
    />
  ),
  h4: (props: HeadingProps) => (
    <h4
      className="text-xl font-semibold mt-4 mb-2"
      {...props}
    />
  ),
  p: (props: ParagraphProps) => (
    <p
      className="text-base leading-relaxed mb-4"
      {...props}
    />
  ),
  ol: (props: ListProps) => (
    <ol
      className="list-decimal list-inside ml-6 mb-4"
      {...props}
    />
  ),
  ul: (props: ListProps) => (
    <ul
      className="list-disc list-inside ml-6 mb-4"
      {...props}
    />
  ),
  li: (props: ListItemProps) => (
    <li
      className="mb-1"
      {...props}
    />
  ),
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="italic" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-bold" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    if (href?.startsWith("/")) {
      return (
        <Link
          href={href}
          className="text-blue-600 underline hover:text-blue-800 transition-colors"
          {...props}
        >
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        className="text-blue-600 underline hover:text-blue-800 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  },
  code: ({
    children,
    ...props
  }: ComponentPropsWithoutRef<"code">) => (
    <code
      className="bg-gray-100 rounded px-1.5 py-0.5 font-mono text-sm"
      {...props}
    >
      {children}
    </code>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="border-l-4 border-gray-300 pl-4 italic text-gray-700 my-4"
      {...props}
    />
  ),
  table: (props: ComponentPropsWithoutRef<"table">) => (
    <table
      className="w-full border-collapse my-6"
      {...props}
    />
  ),
  th: (props: ComponentPropsWithoutRef<"th">) => (
    <th
      className="border px-4 py-2 bg-gray-100 font-semibold"
      {...props}
    />
  ),
  td: (props: ComponentPropsWithoutRef<"td">) => (
    <td
      className="border px-4 py-2"
      {...props}
    />
  ),
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}