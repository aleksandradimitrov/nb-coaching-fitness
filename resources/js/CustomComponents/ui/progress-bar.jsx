import { X } from "lucide-react";
import React from "react";

const ProgressBar = ({ progress }) => {
    return (
        <div className="fixed w-full bg-black">
            <div className="flex-between p-3">
                <div
                    className="-ml-5 cursor-pointer px-5"
                    onClick={() => (window.location.href = "/")}
                >
                    <img
                        className="h-auto w-[100px]"
                        src="/assets/logo.png"
                        alt="logo"
                    />
                </div>
                <X className="text-white" />
            </div>
            <div
                style={{
                    width: "100%",
                    backgroundColor: "#e0e0e0",
                    borderRadius: "5px",
                }}
            >
                <div
                    style={{
                        width: `${progress}%`,
                        height: "9px",
                        backgroundColor: "red",
                        transition: "width 0.5s",
                    }}
                />
            </div>
        </div>
    );
};

export default ProgressBar;
