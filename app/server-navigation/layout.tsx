export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <header className="bordered">
      <input className="bordered mb-2" type="text" placeholder="type something..." /> (sub-layout -{' '}
      <code>app/server-navigation/layout.tsx</code>){children}
    </header>
  );
}
