import React from "react";
import { ReactComponent as Rocket } from "../../assets/rocket.svg";
import { ReactComponent as Fire } from "../../assets/fire.svg";
import { ReactComponent as New } from "../../assets/new.svg";
import { ReactComponent as Top } from "../../assets/top.svg";
import cx from "classnames";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const CategoryTab = () => {
  const Location = useLocation();
  const Navigation = useHistory();
  const Params = useParams();

  // * CONDITIONALLY CLASSNAMES
  const activeState1 = cx({
    "bg-black text-primary": Location.pathname.includes("best"),
    "bg-gray-100 text-black  hover:bg-gray-200":
      !Location.pathname.includes("best"),
  });
  const activeState2 = cx({
    "bg-black text-primary": Location.pathname.includes("hot"),
    "bg-gray-100 text-black hover:bg-gray-200":
      !Location.pathname.includes("hot"),
  });
  const activeState3 = cx({
    "bg-black text-primary": Location.pathname.includes("new"),
    "bg-gray-100 text-black hover:bg-gray-200":
      !Location.pathname.includes("new"),
  });
  const activeState4 = cx({
    "bg-black text-primary": Location.pathname.includes("top"),
    "bg-gray-100 text-black hover:bg-gray-200":
      !Location.pathname.includes("top"),
  });

  return (
    <>
      <div className="px-2 py-3 rounded-lg flex bg-white mt-4">
        <button
          onClick={() => Navigation.push(`/community/${Params.name}/best`)}
          className={`w-20 p-0.5 justify-center rounded-full  flex items-center text-sm font-semibold mr-4  ${activeState1}`}
        >
          {" "}
          <Rocket className="w-4 mr-1" /> Best
        </button>
        <button
          onClick={() => Navigation.push(`/community/${Params.name}/hot`)}
          className={`w-20 p-0.5 justify-center rounded-full flex items-center text-sm font-semibold mr-4  ${activeState2}`}
        >
          <Fire className="w-4 mr-1" /> Hot
        </button>
        <button
          onClick={() => Navigation.push(`/community/${Params.name}/new`)}
          className={`w-20 p-0.5 justify-center rounded-full flex items-center text-sm font-semibold mr-4  ${activeState3}`}
        >
          <New className="w-4 mr-1" />
          New
        </button>
        <button
          onClick={() => Navigation.push(`/community/${Params.name}/top`)}
          className={`w-20 p-0.5 justify-center rounded-full flex items-center text-sm font-semibold mr-4  ${activeState4}`}
        >
          <Top className="w-4 mr-1" />
          Top
        </button>
      </div>
    </>
  );
};

export default CategoryTab;
