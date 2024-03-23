import { Inter } from "next/font/google";
import Head from "@/components/Head/Home";
import Layout from "@/components/PageLayout";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const router = useRouter(); 

  return (
    <>
      <Head />

      <div className={`${inter.className}`}>
        <Layout>
          <div className="flex flex-col mb-40 text-lg">
            You don't have any token created!
            <button onClick={() => router.push("/create")} className="m-2 btn text-lg font-manrope text-slate-800 btn-primary">
              Lets change that
            </button>
          </div>
        </Layout>
      </div>
    </>
  );
}
