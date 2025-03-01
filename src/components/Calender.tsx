import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CalendarComponent = ({data}) => {
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());
    const [message, setMessage] = useState("");
    const months = [
        "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ];

    const daysOfWeek = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]; // Chủ Nhật -> Thứ Bảy

    const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); // Lấy thứ của ngày 1

    const days = Array.from({ length: getDaysInMonth(currentYear, currentMonth) }, (_, i) => i + 1);

    const occupiedDays = ["2025-01-28", "2025-01-29", "2025-02-04"];

    const isOccupied = (day: number) => {
        const formattedDate = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        return occupiedDays.includes(formattedDate);
    };

    const changeMonth = (direction: "prev" | "next") => {
        if (direction === "prev") {
            if (currentMonth === 0) {
                setCurrentMonth(11);
                setCurrentYear(currentYear - 1);
            } else {
                setCurrentMonth(currentMonth - 1);
            }
        } else {
            if (currentMonth === 11) {
                setCurrentMonth(0);
                setCurrentYear(currentYear + 1);
            } else {
                setCurrentMonth(currentMonth + 1);
            }
        }
    };

    return (
        <div className="container-cal mx-auto p-6 bg-white">
            <div className="w-full">
                <div className="flex items-center">
                    <div className="line-title"></div>
                    <h2 className="features-title mb-2">{data.title}</h2>
                    <div className="line-title"></div>
                </div>
            </div>
            <div className="calender">
                <div className="flex justify-center items-center my-4">
                    <button onClick={() => changeMonth("prev")} className="text-red-500 text-3xl px-3">&lt;</button>
                    <span className="text-xl font-bold text-gray-800">{months[currentMonth]} {currentYear}</span>
                    <button onClick={() => changeMonth("next")} className="text-red-500 text-3xl px-3">&gt;</button>
                </div>

                <div className="grid grid-cols-7 gap-2 text-center font-bold text-gray-700">
                    {daysOfWeek.map((day) => (
                        <div key={day} className="py-2">{day}</div>
                    ))}
                </div>

                {/* Hiển thị các ngày */}
                <div className="grid grid-cols-7 gap-2 my-2">
                    {/* Thêm ô trống cho ngày đầu tiên của tháng */}
                    {Array.from({length: firstDayOfMonth}).map((_, i) => (
                        <div key={`empty-${i}`} className="py-2"></div>
                    ))}

                    {days.map((day) => {
                        const occupied = isOccupied(day);
                        return (
                            <button
                                key={day}
                                className={`btn-cal flex flex-col items-center ${
                                    occupied ? "btn-day cursor-not-allowed" :
                                        selectedDate === `${currentYear}-${currentMonth + 1}-${day}` ? "bg-blue-200 text-white" : "btn-available"
                                }`}
                                disabled={occupied}
                                onClick={() => setSelectedDate(`${currentYear}-${currentMonth + 1}-${day}`)}
                            >
                                <span className={`${occupied ? "occupied-day" : ""} day`}>{day}</span>
                                <span className={`${occupied ? "occupied" : "available"}`}>
                {occupied ? "Occupied" : "Libre"}
              </span>
                            </button>
                        );
                    })}

                </div>
            </div>
            <form className="mt-4">
                <div className="flex items-center">
                    <label className="block mb-2 w-1/6 text-left">{data.btn_1[0]}:</label>
                    <input type="text" className="p-2 mb-2 ml-6" placeholder={data.btn_1[1]}/>
                </div>
                <div className="flex items-center">
                    <label className="block mb-2 w-1/6 text-left">{data.btn_2[0]}:</label>
                    <input type="email" className="p-2 mb-2 ml-6"
                           placeholder={data.btn_2[1]}/>
                </div>
                <div className="flex items-center">
                    <label className="block mb-2 w-1/6 text-left">{data.btn_3}:</label>
                    <ReactQuill theme="snow" value={message} onChange={setMessage}
                                className="toolbar w-full bg-white mb-2 ml-4 min-h-[120px]"/>
                </div>
                <div className="flex items-center gap-2 mb-4">
                    <label className="block mb-2 w-1/6 text-left">{data.btn_4[0]}:</label>
                    <span className="text-blue-500 cursor-pointer">📎 {data.btn_4[1]}</span>
                    <span className="text-gray-400">(*{data.btn_4[2]})</span>
                </div>

                <div className="flex justify-end">
                    <button type="reset" className="btn-cancel">{data.btn_5}
                    </button>
                    <button
                        className="btn-submit">{data.btn_6}
                        <img src="/assets/send-2.svg" alt="send2"/>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CalendarComponent;
