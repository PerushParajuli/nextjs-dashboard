import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}

// The code ({ children }: { children: React.ReactNode }) reads like this:

// “Take the children property out of the props object,
// and assume that the props object has the type { children: React.ReactNode }

// More Documentation on this

// ✅ Destructuring + typing (most common)
// function Layout({ children }: { children: React.ReactNode }) { ... }

// ✅ Without destructuring
// function Layout(props: { children: React.ReactNode }) {
//   const { children } = props;
//   ...
// }
