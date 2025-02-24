/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";
// import Link from "next/link";
import React, {FC} from "react";
import { BiSearch } from "react-icons/bi";
// import { BiSearch } from "react-icons/bi";

type Props = object;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Hero: FC<Props> = (props) => {
    return(
        <div className="w-full 1000px:flex items-center">
            <div className="w-[95%] md:!w-[90%] 2xl:!w-[85%] m-auto flex-col md:flex items-center justify-center h-[90vh] relative z-20">
                {/* <div className="w-full md:flex items-left justify-end flex-row-reverse pt-10 md:pt-0">
                    <Image
                    // eslint-disable-next-line @typescript-eslint/no-require-imports
                    src={require("../../public/assets/girl-engrossed-online-learning-while-sitting-pile-books-generative-ai_804788-97403.jpg")}
                    alt=""
                    className="object-contain 1100px:max-w-[50%] w-[50%] 1500px:max-w-[85%] h-[auto] z-[10]"
                    />
                </div> */}
                <div className="1000px:w-[60%] flex flex-col items-center 1000px:mt-[0px] text-center 1000px:text-left mt-[150px]">
                    <h2 className="dark:text-white text-[#000000c7] text-[30px] px-3 w-full 1000px:text-[70px] font-[600] font-Josefin py-2 1000px:leading-[75px]">
                        Improve Your Online Learning Experience Better Instantly
                    </h2>
                    <br/>
                    <p className="dark:text-[#edfff4] text-[#000000c7] font-Josefin font-[600] text-[18px] 1500px:!w[55%] 1100px:!w-[78%]">
                        We have 40k+ Online courses & 500k+ Online registered student. Find
                        Your desired Courses from them.
                    </p>
                    <br/>
                    <br/>
                    <div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] h-[50px] bg-transparent relative">
                        <input
                            type="search"
                            placeholder="Search Courses..."
                            className="bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 w-full h-full outline-none text-[#0000004e] dark:text-[#ffffffe6] text-[20px] font-[500] font-Josefin"
                        />
                        <div className="absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0 bg-[#39c1f3] rounded-r-[5px]">
                            <BiSearch className="text-white" size={30}/>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] flex items-center">
                        <img
                            src="https://edmy-react.hibootstrap.com/images/banner/client-3.jpg"
                            alt=""
                            className="rounded-full"
                        />
                        <img
                            src="https://edmy-react.hibootstrap.com/images/banner/client-1.jpg"
                            alt=""
                            className="rounded-full ml-[-20px]"
                        />
                        <img
                            src="https://edmy-react.hibootstrap.com/images/banner/client-2.jpg"
                            alt=""
                            className="rounded-full ml-[-20px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Hero;