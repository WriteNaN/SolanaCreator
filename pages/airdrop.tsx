import Layout from "@/components/PageLayout";
import Head from "next/head";
import AirdropForm from "@/components/AirdropForm";

export default function Airdrop() {
  return (
    <>
      <Head>
        <title>Solana Test Faucet</title>
      </Head>

      <Layout>
        <AirdropForm />
      </Layout>
    </>
  );
}
