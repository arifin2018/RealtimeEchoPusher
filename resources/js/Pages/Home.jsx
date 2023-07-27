import AppLayout from "@/Layouts/AppLayout";
import React from "react";

export default function Home() {
    return (
        <div className="p-3">
            <p>Start chat now...</p>
        </div>
    );
}

Home.layout = (page) => <AppLayout children={page} />;
