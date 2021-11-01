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

        <div className="p-6 flex-1 text-shark-500">{children}</div>
      </div>
    </>
  );
};

export default Layout;
