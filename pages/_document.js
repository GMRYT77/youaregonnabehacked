import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="dark:bg-neutral-700 bg-[#f3f3f3] text-[#333] overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
