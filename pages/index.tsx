import { Inter } from "next/font/google";
import Head from "@/components/Head/Home";
import Layout from "@/components/PageLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head />

      <div className={`${inter.className}`}>
        <Layout>
          hello, world!
        </Layout>
      </div>
    </>
  );
}
