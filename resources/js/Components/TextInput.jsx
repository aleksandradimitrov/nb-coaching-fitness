import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
    { type = "text", className = "", isFocused = false, ...props },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                {...props}
                type={type}
                className={
                    "bg-transparent text-[var(--mainDarkLightTextColor)] border-[var(--mainDarkLightTextColor)] outline-none rounded-md shadow-sm " +
                    className
                }
                ref={input}
            />
        </div>
    );
});
