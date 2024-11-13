import { contactFormGridThree } from "@/Constants/StaticData";
import { contactFormInputs } from "@/Constants/DynamicData";
import Navbar from "@/CustomComponents/Navbar";
import { Instagram, Mail, MessageCircle, Phone, Send } from "lucide-react";
import React, { useState } from "react";
import { ChatBubbleIcon } from "@radix-ui/react-icons";

const ContactPage = () => {
    const [data, setData] = useState({
        firstName: "",
        secondName: "",
        phone: "",
        email: "",
        additional_info: "",
    });

    const contactFormInput = contactFormInputs(data);

    const handleChange = (e) => {
        const { value, name } = e.target;
        setData((state) => ({
            ...state,
            [name]: value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <div className="relative account-container overflow-hidden">
                <Navbar />
                <div className="flex-col-3 max-w-wrapper w-full py-32">
                    <div className="grid-2 gap-10 items-center">
                        <div className="flex-col-20 max-w-sm">
                            <div className="flex-col-5">
                                <h1 className="text-5xl font-bold">
                                    Контакт с <br />
                                    <span className="font-bold text-red-600">
                                        NB
                                    </span>
                                    coaching<span></span>
                                </h1>
                                <p>
                                    Ако търсите индивидуален подход, насоки и
                                    фитнес стратегии, които да ви помогнат да
                                    постигнете целите си, ще се радвам да се
                                    свържете с мен!
                                </p>
                                <p>
                                    Попълните контактната форма или пишете на
                                    WhatsApp.
                                </p>
                            </div>
                            <div className="flex-col-3">
                                <p>Контакт чрез WhatsApp</p>
                                <div className="flex-2">
                                    <MessageCircle
                                        className="text-white"
                                        size={25}
                                    />
                                    <p className="text-white">+359 878920042</p>
                                </div>
                            </div>
                        </div>
                        <form onSubmit={onSubmit} className="flex-col-3">
                            {contactFormInput.map((data, index) => (
                                <div
                                    className="input-container flex-col-1"
                                    key={index}
                                >
                                    <label className="text-white">
                                        {data.placeholder}
                                        <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        id={data.value}
                                        name="name"
                                        autoComplete="name"
                                        onChange={handleChange}
                                        required
                                        placeholder={data.placeholder}
                                    />
                                </div>
                            ))}
                            <button className="fill-red-button w-max p-3">
                                Изпращане
                            </button>

                            <div className="flex-col-3 mt-10">
                                <div className="flex-3">
                                    <Phone className="text-white" />
                                    <p className="text-white">+359 878920042</p>
                                </div>
                                <div className="flex-3">
                                    <Mail className="text-white" />
                                    <p className="text-white">
                                        nbcoachingfitness@gmail.com
                                    </p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-neutral-800 rounded-full">
                                        <MessageCircle className="text-white" />
                                    </div>
                                    <div className="p-2 bg-neutral-800 rounded-full">
                                        <Instagram className="text-white" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className=" w-full flex flex-col lg:flex-row justify-center lg:items-center gap-3 p-5">
                <p>Настройки за бисквитките</p>
                <p>Условия и правила за ползване</p>
                <p>Защити и сигурност</p>
                <p>Всички права запазени ©{new Date().getFullYear()}</p>
            </div>
        </div>
    );
};

export default ContactPage;
