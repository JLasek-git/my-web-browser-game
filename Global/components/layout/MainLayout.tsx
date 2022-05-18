import NavigationDrawer from "./NavigationDrawer";

type Props = {
  children: JSX.Element;
};
const MainLayout = (props: Props) => {
  return (
    <main className="app__container w-screen h-screen flex justify-center bg-zinc-700">
      <NavigationDrawer />
      <section className="h-full w-full p-4">{props.children}</section>
    </main>
  );
};

export default MainLayout;
