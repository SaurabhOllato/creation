// import React from "react";

// export default function LoadingScreen() {
//   return (
//     <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
//       <img
//         src="https://res.cloudinary.com/dxscy1ixg/image/upload/v1749640342/Untitled_design_csegf7.png" // replace with your loader image
//         alt="Loading..."
//         className="w-20 h-20 object-contain animate-pulse"
//       />
//     </div>
//   );
// }

import React from "react";

export default function LoadingScreen() {
  return (
    <div
      className="fixed inset-0 z-50 bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dxscy1ixg/image/upload/v1749640342/Untitled_design_csegf7.png')",
      }}
    >
     
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></div>
    
    </div>
  );
}
