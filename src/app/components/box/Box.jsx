import React from "react";

export default function Box() {
  return (
    <div className="border border-black min-h-[200px]">
      <img
        src="https://images.unsplash.com/photo-1716396502668-26f0087e1c7d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="flex justify-between px-2">
        <p className="text-xl font-semibold">Title</p>
        <span className="text-lg text-yellow-600 font-medium">7.5</span>
      </div>
    </div>
  );
}


// import React from "react";

// export default function Box(props) {
//   const IMGPATH = "https://image.tmdb.org/t/p/w1280";
//   return (
//     <div className="border border-black min-h-[200px]">
//       <img src={IMGPATH + props.image} alt="" />
//       <div className="flex justify-between px-2">
//         <p className="text-xl font-semibold">{props.title}</p>
//         <span className="text-lg text-yellow-600 font-medium">
//           {props.rating}
//         </span>
//       </div>
//     </div>
//   );
// }