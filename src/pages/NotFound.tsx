import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Kenth Saya-ang Portfolio</title>
      </Helmet>
      <main className="min-h-[400px] container mx-auto 80)] bg-cover bg-center bg-no-repeat">
        <div className="py-12 mx-auto text-4xl font-bold">404 Not found</div>
      </main>
    </>
  );
};

export default NotFound;
