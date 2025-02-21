import React from 'react'

const ProjectCard = ({ img, title, desc }: { img: string, title: string, desc: string }) => {
    return (
        <div className='min-w-[60ex] h-[60ex] group '>
            <div className='size-[90%] relative'>
                <img src={img} alt="project" />
                <div className='size-full absolute top-0 flex items-end p-5 bg-green-700 cursor-pointer opacity-0 group-hover:opacity-80  transition-all duration-500'>
                    <p className='text-white text-lg'>{desc}</p>
                </div>
            </div>
            <h3 className='font-bold text-2xl group-hover:text-secondary transition-all duration-500'>{title}</h3>
        </div>
    )
}

export default ProjectCard