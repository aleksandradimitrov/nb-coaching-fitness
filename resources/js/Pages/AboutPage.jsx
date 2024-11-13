import Navbar from "@/CustomComponents/Navbar";
import { aboutText, coachAchievements } from "@/Constants/StaticData";
import Footer from "@/CustomComponents/Footer";

const AboutPage = () => {
    return (
        <div className="relative">
            <Navbar />
            <div className="flex-col-20 bg-header-image py-32 bg-no-repeat">
                <h1 className="font-bold text-5xl text-center">За Мен</h1>
                <div className="max-w-wrapper grid-2 gap-10">
                    <div>
                        <div className="flex-col-3 sticky top-32">
                            <img
                                className="rounded-full h-auto w-[420px]"
                                src="/assets/coach.jpg"
                                alt="trainer"
                            />
                            <div className="flex-1">
                                {coachAchievements.map((ach, idx) => (
                                    <div
                                        key={idx}
                                        className={`rounded-xl px-2`}
                                        style={{ backgroundColor: ach.color }}
                                    >
                                        <span className="text-sm">
                                            {ach.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <h1 className="font-bold text-2xl">Никола Бугов</h1>
                        </div>
                    </div>
                    <div className="flex-col-20">
                        {aboutText.map((text, idx) => {
                            const { heading, textOne, textTwo, span } = text;
                            return (
                                <div key={idx} className="flex-col-5">
                                    <h1 className="font-bold text-4xl">
                                        {heading}
                                    </h1>
                                    <p>{textOne}</p>
                                    <p>{textTwo}</p>
                                    <span className="text-white font-bold">
                                        {span}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="pt-32 px-5 lg:px-10 lg:bg-black overflow-hidden">
                    <div className="rounded-xl border border-red-600 bg-sign-up-image bg-cover bg-no-repeat bg-center">
                        <div className="max-w-wrapper p-5 py-14">
                            <div className="flex-col-5 max-w-md">
                                <h1 className="font-bold text-3xl">
                                    Интересувате се от персонални тренировки?
                                </h1>
                                <p>
                                    Предлагам индивидуален подход, съобразен с
                                    вашите цели и нужди. За повече информация,
                                    свържете се с мен.
                                </p>
                                <button className="fill-red-button w-max">
                                    Безплатна консултация
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutPage;
