import Link from "next/link";

const AdminButton = () => {
  return (
    <Link href={"/admin"}>
      <div className="py-2 px-4 text-white font-bold bg-red-700 rounded-full text-center">
        Got Sanity Studio
      </div>
    </Link>
  );
};

export default AdminButton;
