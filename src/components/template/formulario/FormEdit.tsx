/* eslint-disable react-hooks/exhaustive-deps */
// import JoditEditor from "jodit-react";
import { Controller, useFormContext } from "react-hook-form";
import dynamic from 'next/dynamic';

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

type Props = {
  name: string;
  label: string;
};

export function FormEdit({ name, label }: Props) {
  const { control } = useFormContext();

    return (
    <>
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field: { onBlur, onChange, value } }) => (
          <div className="jodit-editor-wrapper">
            <JoditEditor
              value={value}
              config={{ readonly: false }}
              onBlur={(value: string) => {
                onBlur();
                onChange(value);
              }}
            />
          </div>
        )}
      />
    </>
  );
}


// import { useRef, useMemo } from 'react'
// import JoditEditor from 'jodit-react'

// const Jodit = ({ content, setContent }) => {
//   const editor = useRef(null)

//   return (
//     <JoditEditor
//        ref={editor}
//         value={content}
//         tabIndex={1} // tabIndex of textarea
//         onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
//         onChange={(newContent) => setContent(newContent)}
//     />
//   )
// }
// export default Jodit

// import { useEffect } from "react";
// import dynamic from "next/dynamic";
// import { Controller, useFormContext } from "react-hook-form";

// const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

// type Props = {
//   name: string;
//   label: string;
// };

// export function FormEdit({ name, label }: Props) {
//   const { control, setValue } = useFormContext();

//   useEffect(() => {
//     register({ name }); // Registre o campo no react-hook-form
//   }, [name]);

//   return (
//     <>
//       <label>{label}</label>
//       <Controller
//         name={name}
//         control={control}
//         render={({ field: { onBlur, onChange, value } }) => (
//           <div className="jodit-editor-wrapper">
//             <JoditEditor
//               value={value}
//               config={{ readonly: false }}
//               onBlur={(value: string) => {
//                 onBlur();
//                 onChange(value);
//               }}
//               onChange={(value: string) => {
//                 onChange(value);
//                 setValue(name, value); // Atualize o valor no react-hook-form
//               }}
//             />
//           </div>
//         )}
//       />
//     </>
//   );
// }

// function register(arg0: { name: string; }) {
//   return null
//   throw new Error("Function not implemented.");
// }

