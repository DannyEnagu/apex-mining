import Menu from "./components/Menu";
import Header from "./components/Header";


export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className="h-screen overflow-hidden grid grid-cols-[300px_minmax(900px,_1fr)] gap-4">
        <Menu />
        <main className="h-full overflow-hidden flex flex-col p-6 pb-0">
            <Header />
            <div className="flex-1 overflow-auto pb-6">
              {children}
            </div>
        </main>
    </div>
  );
}