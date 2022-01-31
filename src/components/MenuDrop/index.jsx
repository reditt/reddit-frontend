import { useDispatch } from "react-redux";
import { setCommunityModal } from "../../redux/actions/modal.action";
import { headerVariants } from "../../helpers/framer.helper";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { create, feeds } from "../../constants/navigation.constant";

const MenuDrop = ({ setIsopenmenu }) => {
  const Dispatch = useDispatch();
  const Navigate = useHistory();

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.3 }}
        variants={headerVariants}
        className="hidden absolute sm:flex py-2 bg-white sm:w-44 sm:rounded-xs shadow-md top-10 rounded-md flex-col"
      >
        <p className=" sm:px-2 text-xs font-semibold mb-1">Create something</p>
        <div className="w-full">
          {create.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  if (item.Label.includes("community")) {
                    Dispatch(setCommunityModal(true));
                    setTimeout(() => {
                      setIsopenmenu(false);
                    }, 0);
                  } else {
                    Navigate.push(`${item.Route}`);
                    setTimeout(() => {
                      setIsopenmenu(false);
                    }, 0);
                  }
                }}
                className="sm:px-2 py-1 flex w-full items-center justify-between hover:bg-gray-100"
              >
                <span className="flex text-xs items-center font-medium">
                  <item.Icon className="w-4 mr-1" />
                  <motion.span
                    transition={{ duration: 0.4 }}
                    whileHover={{ x: [0, 3, 0] }}
                  >
                    {item.Label}
                  </motion.span>
                </span>
                <item.SideIcon className="w-4" />
              </button>
            );
          })}
        </div>

        <p className=" sm:px-2 text-xs font-semibold mb-1 mt-2">Feeds</p>
        <div className="w-full">
          {feeds.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  Navigate.push(`${item.Route}`);
                  setTimeout(() => {
                    setIsopenmenu(false);
                  }, 0);
                }}
                className="sm:px-2 py-1 flex w-full items-center justify-between hover:bg-gray-100"
              >
                <span className="flex text-xs items-center font-medium">
                  <item.Icon className="w-4 mr-1" />
                  <motion.span
                    transition={{ duration: 0.4 }}
                    whileHover={{ x: [0, 3, 0] }}
                  >
                    {item.Label}
                  </motion.span>
                </span>
                {item?.SideIcon ? <item.SideIcon className="w-4" /> : null}
              </button>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default MenuDrop;
