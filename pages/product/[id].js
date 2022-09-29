import Head from "next/head";
import { useRouter } from "next/router";
import products from "../../ItemData/data";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const { category } = router.query;

  return (
    <>
      <Head>
        <title>{products[0].name}</title>
      </Head>
      <section className="flex relative w-full px-2 mt-4">
        <div className="flex flex-col w-full max-w-[1240px] bg-white rounded mx-auto">
          <div className="">{id}</div>
          <div className="">{category}</div>
        </div>
      </section>{" "}
    </>
  );
};

export default Post;
