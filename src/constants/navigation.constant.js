import { ReactComponent as Home } from "../assets/home.svg";
import { ReactComponent as Add } from "../assets/add.svg";
import { ReactComponent as Post } from "../assets/post.svg";
import { ReactComponent as Community } from "../assets/community.svg";
import { ReactComponent as Rocket } from "../assets/rocket.svg";
import { ReactComponent as Fire } from "../assets/fire.svg";
import { ReactComponent as New } from "../assets/new.svg";
import { ReactComponent as Top } from "../assets/top.svg";

export const feeds = [
  {
    Label: "Home",
    Icon: Home,
    SideIcon: null,
    Route: "/",
  },
  {
    Label: "Top",
    Icon: Top,
    SideIcon: null,
    Route: "/top",
  },
  {
    Label: "New",
    Icon: New,
    SideIcon: null,
    Route: "/new",
  },
  {
    Label: "Hot",
    Icon: Fire,
    SideIcon: null,
    Route: "/hot",
  },
  {
    Label: "Best",
    Icon: Rocket,
    SideIcon: null,
    Route: "/best",
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
    Route: "/create/post",
  },
];
