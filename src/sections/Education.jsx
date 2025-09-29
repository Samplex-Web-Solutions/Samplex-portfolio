import { educationData } from "../constants";
const Education = () => {
  return (
    <div id="education" className="educationData w-full mx-0.5 mt-3 mb-10">
      <div className="eduContainer p-4 ">
        <h2 className="text-blue-400 text-[23px]  md:mb-10 md:text-[28px]  font-bold font-mono w-[100%] flex flex-row-reverse items-center gap-3 justify-end ">
          Education <div className="arrow border bg-blue-300 w-[120px] h-[3px] "></div>
        </h2>
        <div className="eduWrapper   bg-gray-500/20  border-2 flex-col  rounded-lg border-blue-800/50  px-3" >
          {educationData.map((index) => (
            <div key={index.id} className="bg-gray-800 font-bold font-sans flex flex-col rounded-2xl shadow-lg shadow-black/40 p-6  not-[2]:my-5">
              <span className="bg-white w-max text-xl text-zinc-800 py-0.5 mb-1 px-5 rounded-3xl">{index.year}</span>
              <span className="text-lg">{index.institute}</span>
              <span className="text-gray-400 text-[16px] italic">{index.course}</span>
              <span className="text-gray-300 mt-2">{index.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
