import { ReactComponent as Home } from "../assets/home.svg";
import { ReactComponent as Add } from "../assets/add.svg";
import { ReactComponent as Post } from "../assets/post.svg";
import { ReactComponent as Community } from "../assets/community.svg";

export const feeds = [
  {
    Label: "Home",
    Icon: Home,
    SideIcon: null,
    Route: "/",
  },
  {
    Label: "Top",
    Icon: Home,
    SideIcon: null,
    Route: "/top",
  },
];
export const create = [
  {
    Label: "Create community",
    Icon: Community,
    SideIcon: Add,
    Route: "",
  },
  {
    Label: "Create post",
    Icon: Post,
    SideIcon: Add,
    Route: "/createpost",
  },
];
