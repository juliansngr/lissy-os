import Navbar from "../components/Navbar";

export default async function WithNavbarLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col justify-center items-center">
        {children}
      </main>
    </>
  );
}
