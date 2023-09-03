import Overview from "./aboutus/overview";
import Trust from "./aboutus/truststructure";
import ComInfo from "./management/cominfo";
import Lessee from "./management/lessee";

const AppRoutes = [
  {
    path: "/About_Us/Overview",
    element: <Overview />,
  },
  {
    path: "/About_Us/Trust_Structures",
    element: <Trust />,
  },
  {
    path: "/Management/REIT_Manager/Company_Information",
    element: <ComInfo />,
  },
  {
    path: "/Management/Lessee%2F_Sub-Lessee_and_Hotel_Operator",
    element: <Lessee />,
  },
];

export default AppRoutes;
