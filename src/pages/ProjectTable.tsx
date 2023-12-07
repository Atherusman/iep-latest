import React, { useState } from "react";
import DetailModal from "../components/DetailModal";


interface Project {
  name: string;
  budget: string;
  status: string;
  completion: number;
  image:string,
}


const projects: Project[] = [
  { name: "Spotify", image:'src/assets/icons/logo-spotify.svg', budget: "$2,500", status: "working", completion: 60 },
  { name: "Invision", image:'src/assets/icons/logo-invision.svg', budget: "$5,000", status: "done", completion: 100 },
  { name: "Jira",image:'src/assets/icons/logo-jira.svg', budget: "$3,400", status: "canceled", completion: 30 },
  { name: "Slack",image:'src/assets/icons/logo-slack.svg', budget: "$1,000", status: "canceled", completion: 0 },
  { name: "Webdev",image:'src/assets/icons/logo-webdev.svg', budget: "$14,000", status: "working", completion: 80 },
  { name: "Adobe XD", image:'src/assets/icons/logo-xd.svg', budget: "$2,300", status: "done", completion: 100 },
];

const ProjectsTable: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [singleUser, setSingleUser] = useState(null);

  const openModal = (data: any) => {
    setModalOpen(true);
    setSingleUser(data);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="flex flex-wrap  rounded-md p-2 mx-2">
      <div className="flex-none w-full max-w-full px-3 mt-5 ">
        <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-md p-3 rounded-2xl bg-clip-border">
          <div className="p-6 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
            <h6>Projects table</h6>
          </div>
          <div className="flex-auto px-0 pt-0 pb-2">
            <div className="p-0 overflow-x-auto">
              <table className="items-center justify-center w-full mb-0 align-top border-gray-200 text-slate-500">
                <thead className="align-bottom">
                  <tr>
                    <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      Project
                    </th>
                    <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      Budget
                    </th>
                    <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      Status
                    </th>
                    <th className="px-6 py-3 pl-2 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      Completion
                    </th>
                    <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap"></th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project, index) => (
                    <tr key={index}>
                      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <div className="flex px-2">
                          <div>
                            {/* <img
                              src={project.image}
                              className="inline-flex items-center justify-center mr-2 text-sm text-white transition-all duration-200 rounded-full ease-soft-in-out h-9 w-9"
                              alt={project.name}
                            /> */}
                          </div>
                          <div className="my-auto ml-2">
                            <h6 className="mb-0 text-sm leading-normal">
                              {project.name}
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <p className="mb-0 text-sm font-semibold leading-normal">
                          {project.budget}
                        </p>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <span className="text-xs font-semibold leading-tight">
                          {project.status}
                        </span>
                      </td>
                      <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <div className="flex items-center justify-center">
                          <span className="mr-2 text-xs font-semibold leading-tight">{`${project.completion}%`}</span>
                          <div>
                            <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                              {/* <div  className={`duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-400 -mt-0.38 -ml-px flex h-1.5 w-${project.completion}/5 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all`} */}
                              {/* role="progressbar"
                                aria-valuenow={project.completion}
                                aria-valuemin={0}
                                aria-valuemax={100}> */}
                              <input
                                className={`duration-600 ease-soft bg-gradient-to-tl from-red-600 to-green-400 -mt-0.38 -ml-px flex h-1.5 w-${project.completion}/5 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all`}
                                type="range"
                                value={project.completion}
                                name=""
                                id=""
                              />

                              {/* </div> */}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <button className="inline-block px-6 py-3 mb-0 text-xs font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none leading-pro ease-soft-in bg-150 tracking-tight-soft bg-x-25 text-slate-400">
                          <i className="text-xs leading-tight fa fa-ellipsis-v"></i>
                        </button>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <button
                            onClick={() => openModal(project)}
                            className=" bg-gradient-to-tl from-green-600 to-lime-400  p-2 text-xs rounded  inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white "
                          >
                            {" "}
                            Show More{" "}
                          </button>
                        </td>
                    </tr>

                    
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen ? (
        <DetailModal open={openModal} close={closeModal} user={singleUser} />
      ) : (
        ""
      )}
    </div>
  );
};

export default ProjectsTable;
