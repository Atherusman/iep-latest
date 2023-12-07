import React, { ChangeEvent, useState } from 'react';

interface FileUploadProps {
  onFileChange: (file: File | null) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileChange }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
    onFileChange(file);
  };

  return (
    // <div className="flex items-center mt-4">
    //   <label className="flex justify-center cursor-pointer bg-white border border-dashed border-gray-300 px-6 py-3 rounded-md shadow-md">
    //     <span className="text-gray-600">Choose a file</span>
    //     <input
    //       type="file"
    //       className="hidden"
    //       onChange={handleFileChange}
    //     />
    //   </label>
    //   {selectedFile && (
    //     <span className="ml-4 text-gray-700">{selectedFile.name}</span>
    //   )}
    // </div>
    <div className="flex w-full h-screen items-center justify-center bg-grey-lighter flex-col ">
      <div>
      <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-600 hover:text-white">
        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="mt-2 text-base leading-normal">Select a file</span>
        <input
         type="file"
           className="hidden"
           onChange={handleFileChange}
           accept='application/pdf'
         />
         {selectedFile && (
         <span className="ml-4 text-gray-700">{selectedFile.name}</span>
      )}
      </label>
      </div>
  
      <button className='p-3  mt-4  bg-blue-800 hover:bg-red-500 text-white ml-4 rounded ' type="button" value="" >Upload </button>
</div>
  );
};

export default FileUpload;
