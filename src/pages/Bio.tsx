import { ReactElement } from "react";
import { Helmet } from "react-helmet";
import { SiHtml5 } from "react-icons/si";

const Bio = () => {
  return (
    <>
      <Helmet>
        <title>Bio | Kenth Saya-ang Portfolio</title>
      </Helmet>
      <main className="flex flex-col min-h-[90vh] py-8 container mx-auto">
        <div className="gap-6">
          <h1>Bio</h1>
          <TechPill icon={<SiHtml5 />} text="HTML" bgColor="#e34f26"/>
          <section>
            <h2>Tech Stack</h2>
            <p>Web Dev List of web tech here</p>
          </section>
        </div>
      </main>
    </>
  );
};

const TechPill = ({ icon, text, bgColor }: { icon: ReactElement, text: string , bgColor: string}) => {
  return (
    <button className={`flex gap-2 items-center px-2 py-1 font-semibold tracking-wider bg-[${bgColor}] text-ca`}>
      <p>{icon}</p>
      <p>{text}</p>
    </button>
  )
}

export default Bio;
