import AppLayout from "@/Layouts/AppLayout";
import { useForm } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

export default function Chat(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        message: "",
    });
    const [chat, setChat] = useState({
        receiverChat: {},
        senderChat: {},
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setData((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        post(`/chat/${props.userLogin.username}`, {
            onSuccess: () => {
                reset();
            },
        });
    }

    function checkReceive(ChatReceive) {
        return ChatReceive.receiver_id == props.userLogin.id;
    }

    useEffect(() => {
        // props.dataChat.filter(checkReceive).forEach((Chat) => {
        //     console.log(Chat.message);
        //     setChat((values) => ({
        //         ...values,
        //         ["receiverChat"]: Chat.message,
        //     }));
        // });
        // console.log(chat);
    }, []);

    return (
        <>
            <div className="flex flex-col justify-between h-[97vh]">
                <div className="border-b px-4 py-2">
                    <h1 className="font-semibold text-xl">
                        {props.userLogin.username}
                    </h1>
                </div>
                <div className="p-4 flex-1 overflow-y-auto">
                    {props.dataChat.length > 0 ? (
                        props.dataChat.map((chat) => chat)
                    ) : (
                        <h3>No Chat</h3>
                    )}
                </div>
                <div className="border-t-2">
                    <form method="post" onSubmit={handleSubmit}>
                        <input
                            value={data.message}
                            onChange={handleChange}
                            className="w-full border-x-green-950 form-input border-0 focus:border-t-2 focus:ring-0"
                            placeholder="text message"
                            type="text"
                            name="message"
                            id="message"
                        />
                    </form>
                </div>
            </div>
        </>
    );
}

Chat.layout = (page) => <AppLayout children={page} />;
