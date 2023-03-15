import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export default function Pagination({paginateFront,paginateBack,currentPage}) {
    return (
        <div className='py-2 w-full '>
            <div className="buttons mt-8 w-full">
                <div className="paginationbtns flex gap-1 justify-center items-center">
                    <a onClick={() => {paginateBack(); }} href>
                    <div className="nextbtn text-white cursor-pointer py-2 sm:py-3 px-3 sm:px-4 text-base sm:text-xl flex items-center justify-center text-primary-100"><span><IoIosArrowBack /> </span><span className="text-sm">Prev</span></div>
                    </a>
                    <div className="page-nums flex gap-2">
                    <p className="px-3 py-1 bg-primary-500 text-white-0 border-[.5px] border-primary-500 rounded-md">{currentPage}</p>
                    <p className="px-3 py-1 bg-white-0 text-primary-100 border-[.5px] border-primary-500 rounded-md">{currentPage + 1}</p>
                    </div>
                    <a onClick={() => {paginateFront();}} href>
                        <div className="nextbtn text-white cursor-pointer py-2 sm:py-3 px-3 sm:px-4 text-base sm:text-xl flex items-center justify-center text-primary-100"><span className="text-sm">Next</span><span><IoIosArrowForward /> </span></div>
                    </a>
                </div>
            </div>
        </div>
    );
}