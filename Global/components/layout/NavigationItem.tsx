import { Route } from "../../../App/routes/app.routes";
import Link from "next/link";
import { useRouter } from "next/router";
import { AppRoutesEnum } from "../../../App/enums/AppRoutesEnum";

type Props = {
  route: Route;
};

const NavigationItem = (props: Props) => {
  const router = useRouter();

  return (
    <div
      className={
        "w-full h-fit flex flex-col justify-start hover:bg-zinc-900 cursor-pointer"
      }
    >
      <Link href={props.route.route}>
        <span
          className={
            router.pathname === props.route.route
              ? "p-4 bg-zinc-900 font-bold"
              : "p-4"
          }
        >
          {props.route.pathname}
        </span>
      </Link>
    </div>
  );
};

export default NavigationItem;
