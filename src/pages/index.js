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
      <DropdownSelect/>
      <div className="flex flex-wrap flex-row items-center justify-center h-full">
        <div className="w-1/2 h-full max-h-3/4 bg-gray-400">
          <div className="block h-56 bg-gray-600 m-4 text-center">
            Picture
          </div>
          <div className="block m-4">
            <h1 className="font-bold text-2xl">Pikachu</h1>
            <h2 className="text-md italic mx-3">Description</h2>
            <h2 className="font-bold mt-3">Skill 1</h2>
            <h2 className="text-sm mx-2">Skill Description</h2>
            <h2 className="font-bold mt-3">Skill 2</h2>
            <h2 className="text-sm mx-2">Skill Description</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
