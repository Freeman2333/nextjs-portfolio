import Bar from "../components/Bar";

const Resume = ({ languages, tools }) => {
  
  return (
    <div className="px-6 py-2">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Computer Science Engineering
            </h5>
            <p className="font-semibold">Udemy and Youtube (2018-2021)</p>
            <p className="my-3">
              I am currently working as a Wordpress React
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Frontend Developer</h5>
            <p className="font-semibold">Innovations Development Lab</p>
          </div>
        </div>
      </div>
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language,i)=>(
              <Bar value={language} key={i}/>
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool,i)=>(
              <Bar value={tool} key={i}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/languages");
  const { languages } = await res.json();
  const resTools = await fetch("http://localhost:3000/api/tools");
  const { tools } = await resTools.json();
  return {
    props: { languages , tools},
  };
};

export default Resume;
