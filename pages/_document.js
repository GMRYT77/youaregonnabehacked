import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="p-0 m-0 box-border overflow-x-hidden">
      <Head />
      <body className="dark:bg-neutral-700 bg-[#f3f3f3] text-[#333] ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
