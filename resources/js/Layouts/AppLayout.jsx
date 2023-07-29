import { Link, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

export default function AppLayout({ children }) {
    let { user, auth } = usePage().props;
    let { url } = usePage();
    let data = false;

    function activeClass(username) {
        if (`/chat/${username}` === url) {
            data = true;
        } else {
            data = false;
        }
    }

    return (
        <>
            <div className="flex">
                <div className="w-1/3 border flex border-r-1 flex-col justify-between h-screen">
                    <div className="p-6 space-y-4 overflow-y-auto h-[70vh]">
                        {user.map((users) => (
                            <Link
                                onClick={activeClass(users.username)}
                                className={`block text-right ${
                                    data ? "text-red-700  font-semibold" : null
                                } ${!data ? "hover:text-blue-300" : null}`}
                                key={users.id}
                                href={`/chat/${users.username}`}
                            >
                                {users.name}
                            </Link>
                        ))}
                    </div>
                    <div className="justify-between text-right p-6">
                        <div className="bg-slate-300 rounded-xl p-6 space-y-3">
                            <span className="block text-sky-600 tracking-wide">
                                {auth.user.username}
                            </span>
                            <Link
                                href="/logout"
                                className="border bg-white font-medium rounded-xl p-2"
                                method="get"
                                as="button"
                            >
                                Logout
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-2/3 p-3">{children}</div>
            </div>
        </>
    );
}
