import NavigationItem from "./NavigationItem";
import UserProfileInfo from "./UserProfileInfo";
import { availableAppRoutes } from "../../../App/routes/app.routes";

type Props = {};
const NavigationDrawer = (props: Props) => {
  return (
    <nav className="w-96 h-full bg-zinc-700 text-white">
      <div className="h-full w-full bg-zinc-800">
        <UserProfileInfo />

        {availableAppRoutes.map((route) => {
          return <NavigationItem route={route} />;
        })}
      </div>
    </nav>
  );
};

export default NavigationDrawer;
