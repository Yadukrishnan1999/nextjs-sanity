import Image from "next/image";
import ZipCareLogo from "../../public/ZipCare.png";
import PhoneIcon from "../../public/phone.svg";

const ContactDetails = () => {
  return (
    <div className="space-x-4 hidden md:flex">
      <div className="flex space-x-1 items-center">
        <Image height={25} width={25} src={PhoneIcon} alt={"Phone"} />
        <div>Call us-999 999 999</div>
      </div>
      <div className="cursor-pointer">
        <button className="bg-blue-800 text-white font-bold p-4 rounded-xl cursor-pointer">
          Intrested in buying ZipCare plan
        </button>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex items-center p-4 justify-between">
      <div>
        <Image height={70} width={70} src={ZipCareLogo} alt={"ZIpCare"} />
      </div>
      <div>
        <ContactDetails />
      </div>
    </div>
  );
};

export default Header;
