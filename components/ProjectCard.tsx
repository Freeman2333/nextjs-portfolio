import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../types";

import Image from "next/image"

const ProjectCard: FunctionComponent<{
    project: IProject;
}> = ({
    project:{
        name,
        image_path,
        category,
        deployed_url,
        description,
        github_url,
        key_techs,
    }
}) => {
    const [showDetail, setShowDetail] = useState(false)
    return (
        <div>
            <Image src={image_path} alt={name} className="cursor-pointer" onClick={()=> setShowDetail(true)} layout="responsive" height="150" width="300"/>
            <p className="my-2 text-center">{name}</p>
            {showDetail&&(
                <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
                    <div>
                        <Image src={image_path} alt={name} layout="responsive" height="150" width="300"/>
                        <div className="flex justify-center my-4 space-x-3">
                            <a href={github_url} className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200">
                                <AiFillGithub />
                                <span>Github</span>
                            </a>
                            <a href={deployed_url} className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200">
                                <AiFillGithub />
                                <span>Project</span>
                            </a>
                        </div>
                    </div>
                    <div></div>
                </div>
            )}
        </div>
    )
}

export default ProjectCard
