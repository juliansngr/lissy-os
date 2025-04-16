export default async function NoNavbarLayout({ children }) {
  return (
    <>
      <main className="max-w-4xl mx-auto px-4 ">{children}</main>
    </>
  );
}
