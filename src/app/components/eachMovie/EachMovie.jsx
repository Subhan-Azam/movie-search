import Box from "../box/Box";

export default function EachMovies(props) {
  const allMovies = props.movies.map((item, index) => {
    return <Box key={index} />;
  });
  return (
    <>
      <div className="grid grid-cols-4 gap-10 mt-5">{allMovies}</div>
    </>
  );
}

// const Box = (props) => {
//   const IMGPATH = "https://image.tmdb.org/t/p/w1280";
//   return (
//       <div className='shadow min-h-[200px] mt-3 pb-1'>
//           <img src={IMGPATH + props.image} alt="" className='w-full' />
//           <div className='flex justify-between px-2 items-center'>
//               <span className='text-2xl'>{props.title}</span>
//               <span className='text-xl text-yellow-500 font-bold'>{props.rating}</span>
//           </div>
//       </div>
//   )
// }
