import Meta from './meta';
import SideBar from './sidebar';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />

      <div className="relative min-h-screen md:flex">
        <SideBar />

        <div className="p-10 text-2xl font-bold flex-1">{children}</div>
      </div>
    </>
  );
};

export default Layout;
