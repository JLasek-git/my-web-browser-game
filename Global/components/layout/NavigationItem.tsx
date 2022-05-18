import { Route } from "../../../App/routes/app.routes";
import Link from "next/link";

type Props = {
  route: Route;
};

const NavigationItem = (props: Props) => {
  return (
    <div className="w-full h-fit flex flex-col justify-start p-4 hover:bg-zinc-900">
      <Link href={props.route.path}>{props.route.name}</Link>
    </div>
  );
};

export default NavigationItem;
