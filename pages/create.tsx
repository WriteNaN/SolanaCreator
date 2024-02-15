import Layout from "@/components/PageLayout";
import Head from "next/head";
import Base from "@/components/CreatorSteps/Base";
import { Wizard } from "react-use-wizard";

export default function Create() {
  return (
    <>
      <Head>
        <title>Token Creator Wizard</title>
      </Head>
      <Layout>
        <div>
          <Wizard>
            <Base />
          </Wizard>
        </div>
      </Layout>
    </>
  );
}
