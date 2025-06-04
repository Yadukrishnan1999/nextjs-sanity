"use cleint";

import { getHomePageData } from "../../sanity/sanity-utility";
import Image from "next/image";
import Logo from "../../public/ZipCare.png";
import Link from "next/link";
import AdminButton from "./AdminButton";

export default async function Home() {
  try {
    const project = await getHomePageData();
    console.log(project, "test");
  } catch (e) {
    console.log("error", e);
  }

  return (
    <div className="flex flex-col items-center justify-center py-4">
      <div className="self-end mr-8">
        <AdminButton />
      </div>
      <div className="pt-80">
        <Link href="/home">
          <Image height={200} width={200} src={Logo} alt={"ZipCare"} />
        </Link>
      </div>
    </div>
  );
}
