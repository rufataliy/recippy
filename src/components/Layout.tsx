import { Header, Sidebar } from "../views";

export const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar toggleSidebar={toggleSidebar} open={sidebarOpen} />
    </>
  );
};
