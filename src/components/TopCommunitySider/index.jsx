import React, { useEffect, useState } from "react";
import madditlogo1 from "../../assets/medditlogo1.png";
import Community from "../../api/community.api";
import SiderCommunityList from "../../skeleton/SiderCommunityList";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

const communityApi = new Community();

const TopCommunitySider = () => {
  const Navigate = useHistory();

  const [top, setTop] = useState([]);
  const [btnText, setBtnText] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCommunity();
  }, []);

  // ! CURRENTLY FETCHING ALL COMMUNITIES NEED TO BE CHANGED
  const fetchCommunity = async () => {
    try {
      const result = await communityApi.getAllCommunities();
      if (result.status === 200) {
        setTop(result?.data.data.reverse());
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //   * METHOD TO JOIN COMMUNITY
  const joinCommunity = async (name) => {
    try {
      const joinStatus = await communityApi.joinCommunity(name);
      if (joinStatus.status === 200) {
        setBtnText([...btnText, name]);
        console.log(joinStatus);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return !loading ? (
    <div className="w-full rounded-xl sticky top-20 ">
      <div
        className={`h-14 rounded-t-xl bg-gray-100 flex items-center justify-center text-center p-2 bg-img`}
      >
        <h2 className="text-white font-semibold ">Top growing communities</h2>
      </div>
      {top && top?.length ? (
        <div className="w-full bg-white p-2 rounded-b-xl">
          {top &&
            top?.map((item, index) => {
              if (index > 4) {
                return null;
              }
              return (
                <div
                  key={index}
                  className="flex items-center py-3 border-b-2 border-gray-50 hover:bg-gray-50 cursor-pointer"
                >
                  <div
                    className="flex items-center justify-center"
                    onClick={() => {
                      Navigate.push(`/community/${item?.name}`);
                    }}
                  >
                    <img
                      src={item?.logo || madditlogo1}
                      className="h-7 w-7 object-cover object-center rounded-full"
                      alt="avatar"
                    />
                    <motion.p
                      transition={{ duration: 0.4 }}
                      whileHover={{ x: [0, 3, 0] }}
                      className="font-semibold text-black text-sm ml-2 "
                    >
                      {item?.name.length > 10
                        ? item?.name?.slice(0, 14) + "..."
                        : item?.name}
                    </motion.p>
                  </div>
                  <button
                    onClick={() => joinCommunity(item?.name)}
                    className="ml-auto px-4 py-1 text-xs font-semibold text-white bg-primary rounded-full hover:bg-blue-400"
                  >
                    {btnText.includes(item?.name) ? "Leave" : "Join"}
                  </button>
                </div>
              );
            })}
          <button className="w-full p-1 rounded-full bg-black text-primary font-semibold text-sm mt-2">
            View all
          </button>
        </div>
      ) : (
        <div className="flex w-full bg-white rounded-b-xl">
          <p className="text-sm text-gray-400 my-4 mx-auto">
            Error loading communities
          </p>
        </div>
      )}
    </div>
  ) : (
    <SiderCommunityList arrayLength={5} />
  );
};

export default TopCommunitySider;
