// src/components/Table.tsx
import React, { useState } from "react";
import DetailModal from "../components/DetailModal";

interface UserData {
  author: string;
  function: string;
  status: string;
  employedDate: string;
  editLink: string;
  imgSrc: string;
  altText: string;
}

const data: UserData[] = [
  {
    author: "John Michael",
    function: "Manager",
    status: "Online",
    employedDate: "23/04/18",
    editLink: "javascript:;",
    imgSrc: "../../src/assets/images/team-2.jpg",
    altText: "user1",
  },
  {
    author: "Alexa Liras",
    function: "Programator",
    status: "Offline",
    employedDate: "11/01/19",
    editLink: "javascript:;",
    imgSrc: "../../src/assets/images/team-2.jpg",
    altText: "user2",
  },
  {
    author: "Laurent Perrier",
    function: "Executive",
    status: "Online",
    employedDate: "19/09/17",
    editLink: "javascript:;",
    imgSrc: "../../src/assets/images/team-2.jpg",
    altText: "user3",
  },
  {
    author: "Michael Levi",
    function: "Programator",
    status: "Online",
    employedDate: "24/12/08",
    editLink: "javascript:;",
    imgSrc: "../../src/assets/images/team-2.jpg",
    altText: "user4",
  },
  {
    author: "Richard Gran",
    function: "Manager",
    status: "Offline",
    employedDate: "04/10/21",
    editLink: "javascript:;",
    imgSrc: "../../src/assets/images/team-2.jpg",
    altText: "user5",
  },
  {
    author: "Miriam Eric",
    function: "Programtor",
    status: "Offline",
    employedDate: "14/09/20",
    editLink: "javascript:;",
    imgSrc: "../../src/assets/images/team-2.jpg",
    altText: "user6",
  },
];

const Table: React.FC = () => {
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
    <>
      <div className="w-full px-6 py-6 mx-auto">
        <div className="flex flex-wrap -mx-3">
          <div className="flex-none w-full max-w-full px-3 ">
            <div className="table-auto relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
              <div className="p-6 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent ">
                <h6>Authors table</h6>
              </div>
              <div className="flex-auto px-0 pt-0 pb-2">
                <div className="p-0 overflow-x-auto"></div>

                <table className=" items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                  <thead className="align-bottom">
                    <tr>
                      <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Author
                      </th>
                      <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Function
                      </th>
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Status
                      </th>
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Employed
                      </th>
                      <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                      <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((user, index) => (
                      <tr key={index}>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <div className="flex px-2 py-1">
                            <div>
                              {/* <img
                                src={user.imgSrc}
                                className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl"
                                alt={user.altText}
                              /> */}
                            </div>
                            <div className="flex flex-col justify-center">
                              <h6 className="mb-0 text-sm leading-normal">
                                {user.author}
                              </h6>
                              <p className="mb-0 text-xs leading-tight text-slate-400">
                                {user.employedDate}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <p className="mb-0 text-xs font-semibold leading-tight">
                            {user.function}
                          </p>
                          <p className="mb-0 text-xs leading-tight text-slate-400">
                            Organization
                          </p>
                        </td>
                        <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span
                            className={`bg-gradient-to-tl ${
                              user.status === "Online"
                                ? "from-green-600 to-lime-400 p-2 rounded-md"
                                : "from-slate-600 to-slate-300 p-2 rounded-md"
                            } px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight text-slate-400">
                            {user.employedDate}
                          </span>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <a
                            href={user.editLink}
                            className="text-xs font-semibold leading-tight text-slate-400"
                          >
                            {" "}
                            Edit{" "}
                          </a>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <button
                            onClick={() => openModal(user)}
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
      </div>
      {isModalOpen ? (
        <DetailModal open={openModal} close={closeModal} user={singleUser} />
      ) : (
        ""
      )}
    </>
  );
};

export default Table;
