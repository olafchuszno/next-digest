export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <input className="bordered mb-2" type="text" placeholder="type something..." /> SUB-LAYOUT
      {children}
    </>
  );
}
