import NavigationItem from "./NavigationItem";
import UserProfileInfo from "./UserProfileInfo";

type Props = {};
const NavigationDrawer = (props: Props) => {
  return (
    <nav className="w-80 h-full bg-zinc-700 p-4 text-white">
      <div className="h-full w-full bg-zinc-800">
        <UserProfileInfo />
        <div className="w-full h-fit flex flex-col justify-start p-4 hover:bg-zinc-900">
          <NavigationItem />
        </div>
      </div>
    </nav>
  );
};

export default NavigationDrawer;
