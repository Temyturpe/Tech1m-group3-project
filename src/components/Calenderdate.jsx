import dayjs from "dayjs";
import React, { useState } from "react";
import { generateDate, months } from "../util/calendar";
import cn from "../util/cn";
import Prev from '../assets/icons/prev.svg';
import Next from '../assets/icons/next.svg';

export default function Calendardate() {
	const days = ["S", "M", "T", "W", "T", "F", "S"];
	const currentDate = dayjs();
	const [today, setToday] = useState(currentDate);
	const [selectDate, setSelectDate] = useState(currentDate);
	return (
		<div className="">
			<div className="w-full h-96">
				<div className="flex justify-between items-center">
					<h1 className="select-none font-semibold text-primary-500 text-xl">
						{months[today.month()]} {today.year()}
					</h1>
					<div className="flex gap-10 items-center ">
            <div className="prev" onClick={() => {
								setToday(today.month(today.month() - 1));
							}}><img src={Prev} alt=""className="hover:scale-105 transition-all" />
            </div>
            <div className="next"onClick={() => {
								setToday(today.month(today.month() + 1));
							}}><img src={Next} alt=""className="hover:scale-105 transition-all" />
            </div>
					</div>
				</div>
				<div className="grid grid-cols-7">
					{days.map((day, index) => {
						return (
							<h1
								key={index}
								className="text-base mt-5 text-center grid text-primary-300 select-none"
							>
								{day}
							</h1>
						);
					})}
				</div>

				<div className=" grid grid-cols-7 ">
					{generateDate(today.month(), today.year()).map(
						({ date, currentMonth, today }, index) => {
							return (
								<div
									key={index}
									className="p-2 text-center grid place-content-center text-primary-200 text-sm"
								>
									<h1
										className={cn(
											currentMonth ? "" : "hidden",
											today
												? "bg-primary-300 text-white"
												: "",
											selectDate
												.toDate()
												.toDateString() ===
												date.toDate().toDateString()
												? "bg-primary-300 text-white-30"
												: "",
											"h-10 w-10 rounded-full grid place-content-center hover:bg-primary-300 hover:text-white-30 transition-all cursor-pointer select-none"
										)}
										onClick={() => {
											setSelectDate(date);
										}}
									>
										{date.date()}
									</h1>
								</div>
							);
						}
					)}
				</div>
			</div>
		</div>
	);
}
