import Image from "next/image";
import PhoneIcon from "../../public/phone.svg";

const Footer = () => {
  return (
    <div className="space-x-4 flex flex-col md:hidden border-t border-blue-800 justify-center items-center pt-4 pb-4">
      <div className="flex space-x-1 items-center">
        <Image height={25} width={25} src={PhoneIcon} alt={"Phone"} />
        <div>Need help? Call us-999 999 999</div>
      </div>
      <div className="cursor-pointer pt-2">
        <button className="bg-blue-800 text-white font-bold p-4 rounded-xl cursor-pointer">
          Intrested in buying ZipCare plan
        </button>
      </div>
    </div>
  );
};

export default Footer;
