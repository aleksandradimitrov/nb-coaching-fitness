import Footer from "@/CustomComponents/Footer";
import Navbar from "@/CustomComponents/Navbar";
import { Share } from "lucide-react";
import React from "react";

const BlogPostPage = () => {
    return (
        <div>
            <Navbar />
            <div className="flex-col-10 max-w-2xl mx-auto px-5 lg:px-0 py-32">
                <div className="flex-col-3">
                    <h1 className="text-3xl lg:text-5xl font-bold">
                        Искаш да живееш здравословно? Ето какво НЕ ТРЯБВА да
                        правиш!
                    </h1>
                    <div className="flex-between">
                        <div className="flex-2">
                            <img
                                src="/assets/coach.jpg"
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <p>NBcoaching</p>
                                <p>Днес, 10 Ноем. 2024 • Четене: 4 мин.</p>
                            </div>
                        </div>
                        <div className="flex-2">
                            <Share
                                className="text-stone-400 cursor-pointer"
                                size={15}
                            />
                            <p>Сподели</p>
                        </div>
                    </div>
                </div>
                <img src="/assets/blog/image-1.png" />
                <div className="flex-col-5 px-10">
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Condimentum a
                        euismod nascetur id dui sed eget quis id. Dictum diam
                        natoque placerat eget vulputate augue vel nulla.
                    </p>
                    <p>
                        Ако трябваше да прелистите списание за фитнес на касата
                        на местния бакалин, ще попаднете на истинска колекция от
                        реклами на добавки, но може да не намерите нищо за
                        спортисти за издръжливост. Разкъсаните тела на тези
                        лъскави страници биха могли лесно да ви заблудят да
                        мислите, че всяка добавка на пазара е насочена към това
                        да ви грабне, но - за щастие - не можете да грешите
                        повече.
                    </p>
                    <div className="flex-col-2">
                        <h1 className="font-bold text-2xl">
                            1. Креатин монохидрид
                        </h1>
                        <img src="/assets/blog/image-2.png" />
                    </div>
                    <p>
                        Ако трябваше да прелистите списание за фитнес на касата
                        на местния бакалин, ще попаднете на истинска колекция от
                        реклами на добавки, но може да не намерите нищо за
                        спортисти за издръжливост. Разкъсаните тела на тези
                        лъскави страници биха могли лесно да ви заблудят да
                        мислите, че всяка добавка на пазара е насочена към това
                        да ви грабне, но - за щастие - не можете да грешите
                        повече.
                    </p>
                    <p>
                        Спортистите за издръжливост обикновено прекарват часове
                        наред в непрекъсната дейност, независимо дали става
                        въпрос за проследяване на 50-60 мили седмично бягане,
                        изминаване на над 200 мили седмично с техните шосейни
                        велосипеди или плуване на стотици обиколки в басейна.
                        Този голям обем тренировки, добавени към няколко
                        тренировки за съпротива седмично, означава, че
                        спортистите за издръжливост трябва да обърнат
                        изключително внимание на диетата и добавките си.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BlogPostPage;
