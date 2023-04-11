import Head from "next/head";

type PageHeadTag = {
  title: string;
  desc: string;
};

const PageHeadTag = ({ title, desc }: PageHeadTag) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default PageHeadTag;
