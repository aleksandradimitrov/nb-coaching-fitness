import React from "react";
import Navbar from "@/CustomComponents/Navbar";

import { aboutCards } from "@/Constants/StaticData";

import Footer from "@/CustomComponents/Footer";

const Welcome = (props) => {
    return (
        <div className="relative overflow-hidden">
            <Navbar />

            <div className="min-h-screen bg-cover bg-no-repeat bg-header-image">
                <header className="grid-2 justify-center items-center gap-5 lg:gap-0 max-w-wrapper py-32">
                    <div className="flex-col-5">
                        <div className="flex flex-col gap-1 text-6xl">
                            <h1>Добре дошли в</h1>
                            <h1 className="font-bold">
                                <span className="text-red-600">NB</span>coaching
                            </h1>
                        </div>
                        <p className="text-lg max-w-[300px]">
                            Платформа за персонализиран онлайн фитнес коучинг{" "}
                        </p>
                        <div className="flex items-center gap-5">
                            <button className="outline-red-button">
                                <a className="text-white" href="#learnMore">
                                    Научете повече
                                </a>
                            </button>
                            <button className="fill-red-button">
                                <a href="/quiz" className="text-white">
                                    Take the quiz
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src="assets/landingPage/header-image-one.webp"
                            className="w-[90%] lg:w-[1000px] border border-red-600 rounded-xl"
                        />
                        <img
                            src="assets/landingPage/header-image-2.jpg"
                            className="absolute right-0 lg:-left-32 top-1/2  w-[250px] lg:w-[400px] h-auto border border-red-600 rounded-xl"
                        />
                    </div>
                </header>
            </div>

            <section
                id="научи-повече"
                className="flex-col-10 flex-center min-h-[80vh] py-32 max-w-wrapper"
            >
                <div className="flex-col-5 text-center px-5">
                    <h1 className="font-bold text-3xl lg:text-5xl">
                        Какво включва <span className="text-red-600">NB</span>
                        coaching<span className="text-red-600">?</span>
                    </h1>
                </div>
                <div className=" grid-2 gap-x-56 gap-y-10 lg:gap-y-5">
                    {aboutCards.map((item, index) => (
                        <div className="flex items-center gap-3" key={index}>
                            <div className="bg-white rounded-full p-2 w-max">
                                <i>{item.icon}</i>
                            </div>
                            <div className="flex-col-1 z-10">
                                <h1 className="text-xl font-bold">
                                    {item.heading}
                                </h1>
                                <p className="max-w-sm">{item.p}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="learnMore" className="bg-grid-image bg-cover bg-no-repeat py-32">
                <div className="grid-2 max-w-wrapper">
                    <h1 className="font-bold text-3xl lg:text-5xl">
                        Какво е <span className="text-red-600">NB</span>
                        coaching<span className="text-red-600">?</span>
                    </h1>
                    <div className="flex-col-5">
                        <p>
                            NBcoaching е персонализирана онлайн платформа, която
                            предлага ефективни ресурси и насоки, за да
                            постигнете вашите фитнес цели. С фокус върху
                            практичността и дългосрочните резултати, разработвам
                            за вас индивидуални стратегии за тренировки, хранене
                            и суплементация.
                        </p>
                        <p>
                            Консултацията е първата стъпка, в която ще науча
                            повече за вашите цели, хранителни навици, начин на
                            живот, нивото ви на активност, здравословното ви
                            състояние и ежедневието ви. Ще анализирам вашата
                            физическа форма. Тази информация ще ми помогне да
                            разбера по-добре как мога да ви помогна в
                            постигането на вашите фитнес цели.
                        </p>
                        <p className="text-white">
                            Започнете още сега и реализирайте пълния си
                            потенциал.
                        </p>
                        <button className="fill-red-button w-max">
                            <a className="text-white" href="/contact">
                                Свържете се с мен
                            </a>
                        </button>
                    </div>
                </div>
            </section>

            <section className="grid-2 gap-5 max-w-wrapper py-32">
                <div className="flex-col-5">
                    <h1 className="font-bold text-3xl lg:text-5xl">
                        За кого е подходяща услугата?
                    </h1>
                    <p className="max-w-lg">
                        Услугата е насочена към хора, които имат минимум 6
                        месеца опит в тренировките и искат да напреднат и да
                        достигнат нови висоти във фитнеса. Ако сте готови да
                        направите сериозна промяна и да работите усилено за
                        постигане на Вашите цели, аз съм тук, за да Ви помогна.
                    </p>
                </div>
                <img
                    src="assets/landingPage/section-image.jpg"
                    className="rounded-xl w-full"
                    alt="section-image-2"
                />
            </section>

            <div className="py-32 px-5 lg:px-10  overflow-hidden">
                <section className="rounded-xl border lg:bg-black border-red-600 grid-2 w-full">
                    <div className="px-5 lg:px-20 py-10  flex-col-5">
                        <h1 className="text-3xl lg:text-5xl font-bold">
                            Интересувате се от персонални тренировки?
                        </h1>
                        <p>
                            Предлагам индивидуален подход, съобразен с вашите
                            цели и нужди. За повече информация, свържете се с
                            мен.
                        </p>
                        <button className="w-max fill-red-button">
                            <a className="text-white" href="/">
                                Безплатна консултация
                            </a>
                        </button>
                    </div>
                    <img className="z-[-1] lg:z-10 opacity-35 object-cover lg:opacity-100 absolute lg:static p-[3px]" src="/assets/landingPage/landingpage-4.jpg"/>
                </section>
            </div>

            <Footer />
        </div>
    );
};

export default Welcome;
