// import React, {useEffect, useState} from "react";
// import Dropzone from 'react-dropzone'
// import axios from "axios";
// import DynamicButton from "../button";

// interface DocumentRequiredProps {
//     setSuccess?: (message: string) => void,
//     documentName?: string;
//     documentDescription?: string;
//     id?: number;
//     length?: number;
// }

// type LocalProps = DocumentRequiredProps & {
//     getUpdatedDocuments?: () => void,
//     setLoading?: (loading: boolean) => void,
// };

// function DropzoneMedia(props: LocalProps) {
//     const [uploadDocument, setUploadDocument] = useState(false);
//     const [documentSlotId, setDocumentSlotId] = useState(0);
//     const [mediaId, setMediaId] = useState(0);
//     const [uploadComplete, setUploadComplete] = useState(false);
//     const [fileName, setFileName] = useState("");

//     // useEffect(() => {
//     //     if (uploadComplete) {
//     //         confirmDocument(documentSlotId, mediaId, fileName);
//     //         props.setSuccess(fileName + " successfully uploaded");
//     //     }
//     // }, [uploadComplete])

//     const onDrop = (files: any) => {
//         const file = files[0];
//         props.setSuccess("");
//         // props.getPresignedUrl({})
//         //   .then((response) => {
//         //       setMediaId(response.id);
//         //       setFileName(file.name);
//         //       const signedUrl = response.url;
//         //       const options = {
//         //           headers: {
//         //               'Content-Type': file.type
//         //           }
//         //       };
//         //       return axios.put(signedUrl, file, options);
//         //   })
//         //   .then(() => {
//         //       setUploadComplete(true);
//         //   })
//     }

//     // const confirmDocument = (slotId: number, mediaId: number, fileName: string) => {
//     //     props.confirmDocument({
//     //         slotId: slotId,
//     //         mediaId: mediaId,
//     //         fileName: fileName
//     //     })
//     //       .then(() => {
//     //           props.setLoading(true);
//     //           setUploadComplete(false);
//     //           props.getUpdatedDocuments();
//     //       })
//     //       .catch(error => console.error(error))
//     // }

//     return (
//         <>

//            <p className="pb-3 font-bold text-[14px]">If you have any sketches or examples, upload them here</p>
//                 <div className={`mb-4  p-6 bg-[#EFF6F9] rounded-lg `}>
//                 <div className={"px-3"}>

//                         <Dropzone
//                         onDrop={onDrop}
//                         >
//                             {({getRootProps, getInputProps}) => (
//                                 <section>
//                                     <div {...getRootProps()}>
//                                         <input {...getInputProps()} />
//                                         <p className={" border-dashed text-[#157CFB] rounded text-center text-whit font-bold"}> Upload a file</p>
//                                     </div>
//                                 </section>
//                             )}
//                         </Dropzone>
//                     </div>

//                 </div>

//         </>
//     )
// }

// export default DropzoneMedia;

// // import React from "react";
// // import "react-dropzone-uploader/dist/styles.css";
// // import Dropzone from "react-dropzone-uploader";

// // const Uploader = () => {
// //   const axios = require("axios").default;
// // // https://snnypcf9xb.execute-api.ap-southeast-1.amazonaws.com/default/getPresignedImageURL
// //   const API_ENDPOINT =
// //     "";
// //   const handleChangeStatus = ({ meta, remove }, status) => {
// //     // console.log(status, meta);
// //   };

// //   const handleSubmit = async (files) => {
// //     const f = files[0];
// //     // console.log(f["file"]);
// //     // * GET request: presigned URL
// //     const response = await axios({
// //       method: "GET",
// //       url: API_ENDPOINT,
// //     });

// //     console.log("Response: ", response);

// //     // * PUT request: upload file to S3
// //     const result = await fetch(response.data.uploadURL, {
// //       method: "PUT",
// //       body: f["file"],
// //     });
// //     // console.log("Result: ", result);
// //   };

// //   return (
// //     <Dropzone
// //       onChangeStatus={handleChangeStatus}
// //       onSubmit={handleSubmit}

// //       maxFiles={1}
// //       multiple={false}
// //       canCancel={false}
// //       inputContent="Drop A File"
// //       styles={{
// //         dropzone: { width: 400, height: 200 },
// //         dropzoneActive: { borderColor: "blue" },
// //       }}
// //     />
// //   );
// // };

// // <Uploader />;

// // export default Uploader;

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
// import { ArrowUpTrayIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Dropzone = ({ className }) => {
  const [files, setFiles] = useState([]);
  const [rejected, setRejected] = useState([]);

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (acceptedFiles?.length) {
      setFiles((previousFiles) => [
        ...previousFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    }

    if (rejectedFiles?.length) {
      setRejected((previousFiles) => [...previousFiles, ...rejectedFiles]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    maxSize: 1024 * 1000,
    onDrop,
  });

  useEffect(() => {
    // Revoke the data uris to avoid memory leaks
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  const removeFile = (name) => {
    setFiles((files) => files.filter((file) => file.name !== name));
  };

  const removeAll = () => {
    setFiles([]);
    setRejected([]);
  };

  const removeRejected = (name) => {
    setRejected((files) => files.filter(({ file }) => file.name !== name));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!files?.length) return;

    const formData = new FormData();
    files.forEach((file) => formData.append("file", file));
    // formData.append('file', 'friendsbook')
    formData.append(
      "g-recaptcha-response",
      "6LceYMcnAAAAAH8LX7ElKqv-CupIf0lJbJx6d-a2"
    );

    const URL = "https://unique.use-fuse.com/rest/v2/enquiry";
    const data = await fetch(URL, {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

  
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        {...getRootProps({
          className: className,
        })}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center gap-4">
          {/* <ArrowUpTrayIcon className='w-5 h-5 fill-current' /> */}
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag & drop files here, or click to select files</p>
          )}
        </div>
      </div>

      {/* Preview */}
      <section className="mt-10">
        <div className="flex gap-4">
          <h2 className="title text-3xl font-semibold">Preview</h2>
          <button
            type="button"
            onClick={removeAll}
            className="border-secondary-400 hover:bg-secondary-400 mt-1 rounded-md border px-3 text-[12px] font-bold uppercase tracking-wider text-neutral-500 transition-colors hover:text-white"
          >
            Remove all files
          </button>
          <button
            type="submit"
            data-callback="handleSubmit"
            data-sitekey={"6LceYMcnAAAAAH8LX7ElKqv-CupIf0lJbJx6d-a2"}
            className="ml-auto mt-1 rounded-md border border-purple-400 px-3 text-[12px] font-bold uppercase tracking-wider text-neutral-500 transition-colors hover:bg-purple-400 hover:text-white"
          >
            Upload to Cloudinary
          </button>
        </div>

        {/* Accepted files */}
        <h3 className="title mt-10 border-b pb-3 text-lg font-semibold text-neutral-600">
          Accepted Files
        </h3>
        <ul className="mt-6 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {files.map((file) => (
            <li key={file.name} className="relative h-32 rounded-md shadow-lg">
              <Image
                src={file.preview}
                alt={file.name}
                width={100}
                height={100}
                onLoad={() => {
                  URL.revokeObjectURL(file.preview);
                }}
                className="h-full w-full rounded-md object-contain"
              />
              <button
                type="button"
                className="border-secondary-400 bg-secondary-400 absolute -right-3 -top-3 flex h-7 w-7 items-center justify-center rounded-full border transition-colors hover:bg-white"
                onClick={() => removeFile(file.name)}
              >
                {/* <XMarkIcon className='w-5 h-5 fill-white hover:fill-secondary-400 transition-colors' /> */}
              </button>
              <p className="mt-2 text-[12px] font-medium text-neutral-500">
                {file.name}
              </p>
            </li>
          ))}
        </ul>

        {/* Rejected Files */}
        <h3 className="title mt-24 border-b pb-3 text-lg font-semibold text-neutral-600">
          Rejected Files
        </h3>
        <ul className="mt-6 flex flex-col">
          {rejected.map(({ file, errors }) => (
            <li key={file.name} className="flex items-start justify-between">
              <div>
                <p className="mt-2 text-sm font-medium text-neutral-500">
                  {file.name}
                </p>
                <ul className="text-[12px] text-red-400">
                  {errors.map((error) => (
                    <li key={error.code}>{error.message}</li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                className="border-secondary-400 hover:bg-secondary-400 mt-1 rounded-md border px-3 py-1 text-[12px] font-bold uppercase tracking-wider text-neutral-500 transition-colors hover:text-white"
                onClick={() => removeRejected(file.name)}
              >
                remove
              </button>
            </li>
          ))}
        </ul>
      </section>
    </form>
  );
};

export default Dropzone;
