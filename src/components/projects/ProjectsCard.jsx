import React from 'react'

const ProjectsCard = (props) => {
  return (
    <>
     <div className="left w-1/2 h-full relative bg-green-500 cursor-pointer group overflow-hidden hover:rounded-[40px] transition-all duration-200">
          <img src={props.image1} alt="" className="w-full  h-full object-cover" />
          <div className="overlay opacity-0 absolute inset-0 w-full h-full group-hover:opacity-100 bg-black/30 transition-all duration-200 flex justify-center items-center">
            <h1 className="font-[f2] rounded-full border-3 px-24 text-[3rem] font-bold pt-4">
              VIEW MORE
            </h1>
          </div>
        </div>
          <div className="left w-1/2 h-full relative bg-green-500 cursor-pointer group overflow-hidden hover:rounded-[40px] transition-all duration-200">
          <img src={props.image2} alt="" className="w-full  h-full object-cover" />
          <div className="overlay opacity-0 absolute inset-0 w-full h-full group-hover:opacity-100 bg-black/30 transition-all duration-200 flex justify-center items-center">
            <h1 className="font-[f2] rounded-full border-3 px-24 text-[3rem] font-bold pt-4">
              VIEW MORE
            </h1>
          </div>
        </div>
    </>
  )
}

export default ProjectsCard