import React from "react";

export default function AppLayout({ children }) {
    return (
        <>
            <div className="flex">
                <div className="w-1/3">Arifin</div>
                <div className="w-2/3">{children}</div>
            </div>
        </>
    );
}
