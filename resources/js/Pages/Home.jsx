import AppLayout from "@/Layouts/AppLayout";
import React from "react";

export default function Home() {
    return (
        <>
            <h1>Arifin</h1>
        </>
    );
}

Home.layout = (page) => <AppLayout children={page} />;
