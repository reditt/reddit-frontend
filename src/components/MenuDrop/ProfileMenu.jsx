import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { ReactComponent as Logout } from "../../assets/logout.svg";
import { ReactComponent as Person } from "../../assets/personblue.svg";
import { headerVariants } from "../../helpers/framer.helper";

const ProfileMenu = ({ setIsopenmenu2 }) => {
  const Navigate = useHistory();
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.3 }}
        variants={headerVariants}
        className="hidden absolute sm:flex py-2 bg-white sm:w-44 sm:rounded-xs shadow-md top-10 right-0 rounded-md flex-col"
      >
        <p className=" sm:px-2 text-xs font-semibold mb-1">Your Actions</p>
        <div className="w-full">
          <button
            onClick={() => {
              localStorage.clear();
              Navigate.push("/login");
              setTimeout(() => {
                setIsopenmenu2(false);
              }, 0);
            }}
            className="sm:px-2 py-1 flex w-full items-center justify-between hover:bg-gray-100"
          >
            <span className="flex text-xs items-center font-medium">
              <Person className="w-4 mr-1" />
              Logout
            </span>
            <Logout className="w-4" />
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default ProfileMenu;
