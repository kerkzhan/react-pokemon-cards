import React from "react";
import DropdownSelect from "../components/DropdownSelect";
import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`, `pokemon`, `kerk zhan`]}
        title="Home"
      />
      <div className="flex flex-wrap flex-row items-center justify-center h-full">
        <DropdownSelect/>
      </div>
    </Layout>
  );
}

export default IndexPage;
