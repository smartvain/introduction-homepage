import React from "react";

type HomePageProps = {
  data: {
    message: string;
  };
};

const HomePage: React.FC<HomePageProps> = ({ data }) => {
  return (
    <div>
      <h1>Welcome to My Static Site</h1>
      <p>{data.message}</p>
    </div>
  );
};

// getStaticProps関数を追加
export async function getStaticProps() {
  // ここでデータを取得します。例えば、APIからデータを取得することができます。
  const data = { message: "This is a static message generated at build time." };

  return {
    props: {
      data,
    },
  };
}

export default HomePage;
