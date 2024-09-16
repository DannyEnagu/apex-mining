import PrimeReactClientProvider from "./PrimeReactClientProvider";

export default function AppProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
      <PrimeReactClientProvider>
        {children}
      </PrimeReactClientProvider>
    )
}