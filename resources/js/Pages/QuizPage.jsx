import ProgressBar from "@/CustomComponents/ui/progress-bar";

import { z } from "zod";
import { ArrowLeft } from "lucide-react";
import { questions } from "@/Constants/StaticData";
import React, { useEffect, useState } from "react";

const textSchema = z.string().min(1, "This field is required");
const singleChoiceSchema = z.string().min(1, "Please select an option");
const multipleChoiceSchema = z
    .array(z.string())
    .min(1, "Please select at least one option");

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userResponses, setUserResponses] = useState([]);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [showSummary, setShowSummary] = useState(false);

    // Load responses from localStorage if present
    useEffect(() => {
        const savedResponses = JSON.parse(localStorage.getItem("quizResponses"));
        if (savedResponses) {
            setUserResponses(savedResponses);
        }
    }, []);

    // Save responses to localStorage whenever updated
    useEffect(() => {
        localStorage.setItem("quizResponses", JSON.stringify(userResponses));
    }, [userResponses]);

    const handleAnswerChange = (value, subKey) => {
        const currentQuestion = questions[currentQuestionIndex];
        const questionId = currentQuestion.id;

        const updatedResponse = {
            questionId,
            response: subKey
                ? { ...userResponses.find((resp) => resp.questionId === questionId)?.response, [subKey]: value }
                : value,
        };

        setUserResponses((prevResponses) => {
            const existingIndex = prevResponses.findIndex(
                (resp) => resp.questionId === questionId
            );

            if (existingIndex !== -1) {
                const updatedResponses = [...prevResponses];
                updatedResponses[existingIndex] = updatedResponse;
                return updatedResponses;
            }

            return [...prevResponses, updatedResponse];
        });
    };

    const validateAnswer = (value) => {
        const currentQuestion = questions[currentQuestionIndex];

        try {
            if (
                currentQuestion.type === "text" ||
                currentQuestion.type === "textarea"
            ) {
                textSchema.parse(value);
            } else if (currentQuestion.type === "single-choice") {
                singleChoiceSchema.parse(value);
            } else if (currentQuestion.type === "multiple-choice") {
                multipleChoiceSchema.parse(value);
            } else if (currentQuestion.type === "multi-input") {
                currentQuestion.subquestions.forEach((subq) => {
                    textSchema.parse(value[subq.label]);
                });
            }
            setIsButtonDisabled(false);
        } catch (error) {
            setIsButtonDisabled(true);
        }
    };

    useEffect(() => {
        const currentResponse =
            userResponses.find(
                (resp) =>
                    resp.questionId === questions[currentQuestionIndex].id
            )?.response || "";
        validateAnswer(currentResponse);
    }, [currentQuestionIndex, userResponses]);

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowSummary(true);
            submitResponses();
        }
    };

    const handleBack = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const submitResponses = () => {
        console.log("User responses:", userResponses);



        // Implement API call or further processing here
    };

    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    const currentQuestion = questions[currentQuestionIndex];
    const userAnswer =
        userResponses.find(
            (resp) => resp.questionId === currentQuestion.id
        )?.response || "";

    return (
        <div className="">
            <ProgressBar progress={progress} />
            <div className="h-[70px] lg:hidden" />
            <div className="flex-center bg-header-image max-h-screen overflow-hidden px-5">
                <div className="flex flex-col justify-between max-w-[400px] w-full gap-5 min-h-screen  py-56">
                    <div className="flex flex-col gap-5 lg:gap-3">
                        <h3 className="text-2xl font-bold">
                            {currentQuestionIndex + 1}.{" "}
                            {currentQuestion.question}
                        </h3>

                        <p>{currentQuestion.textone}</p>

                        {/* Render the question input based on type */}
                        {currentQuestion.type === "single-choice" && (
                            <div className="flex flex-col gap-3">
                                {currentQuestion.options?.map((option) => (
                                    <label
                                        key={option}
                                        className="custom-radio-box-container"
                                        htmlFor={option}
                                    >
                                        <input
                                            type="radio"
                                            id={option}
                                            name="single-choice"
                                            value={option}
                                            className="hidden-radio-input hidden"
                                            checked={userAnswer === option}
                                            onChange={() =>
                                                handleAnswerChange(option)
                                            }
                                        />
                                        <span className="custom-radio-box">
                                            {option}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        )}

                        {currentQuestion.type === "multiple-choice" && (
                            <div className="flex flex-col gap-3">
                                {currentQuestion.options?.map((option) => (
                                    <label
                                        key={option}
                                        className="custom-radio-box-container"
                                        htmlFor={option}
                                    >
                                        <input
                                            type="checkbox"
                                            id={option}
                                            name="multiple-choice"
                                            value={option}
                                            className="hidden-radio-input hidden"
                                            checked={
                                                Array.isArray(userAnswer) &&
                                                userAnswer.includes(option)
                                            }
                                            onChange={(e) => {
                                                const selectedOptions =
                                                    Array.isArray(userAnswer)
                                                        ? [...userAnswer]
                                                        : [];
                                                if (e.target.checked) {
                                                    selectedOptions.push(
                                                        option
                                                    );
                                                } else {
                                                    const index =
                                                        selectedOptions.indexOf(
                                                            option
                                                        );
                                                    selectedOptions.splice(
                                                        index,
                                                        1
                                                    );
                                                }
                                                handleAnswerChange(
                                                    selectedOptions
                                                );
                                            }}
                                        />
                                        <span className="custom-radio-box">
                                            {option}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        )}

                        {currentQuestion.type === "text" && (
                            <div className="input-container">
                                <input
                                    type="text"
                                    className="input"
                                    value={userAnswer}
                                    placeholder={currentQuestion.placeholder}
                                    onChange={(e) =>
                                        handleAnswerChange(e.target.value)
                                    }
                                />
                            </div>
                        )}

                        {currentQuestion.type === "textarea" && (
                            <div className="input-container">
                                <textarea
                                    placeholder={currentQuestion.placeholder}
                                    value={userAnswer}
                                    className="input"
                                    rows={5}
                                    onChange={(e) =>
                                        handleAnswerChange(e.target.value)
                                    }
                                />
                            </div>
                        )}

                        {currentQuestion.type === "multi-input" && (
                            <div className="flex-col-3">
                                {currentQuestion.subquestions.map((subq) => (
                                    <div
                                        key={subq.label}
                                        className="input-container"
                                    >
                                        <label className="text-white text-sm block mb-1">
                                            {subq.label}
                                        </label>
                                        <input
                                            type={subq.type}
                                            placeholder={subq.placeholder}
                                            className="input"
                                            value={
                                                userAnswer &&
                                                typeof userAnswer ===
                                                    "object" &&
                                                userAnswer[subq.label]
                                                    ? userAnswer[subq.label]
                                                    : ""
                                            }
                                            onChange={(e) => {
                                                handleAnswerChange(
                                                    e.target.value,
                                                    subq.label
                                                );
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex-3">
                        {currentQuestionIndex > 0 && (
                            <button
                                className="border border-neutral-600 w-max p-2 flex-center rounded-full"
                                onClick={handleBack}
                            >
                                <ArrowLeft className="text-white" />
                            </button>
                        )}
                        <button
                            disabled={isButtonDisabled}
                            className="bg-white w-max p-2 px-4 rounded-full disabled:bg-white/50 disabled:cursor-not-allowed"
                            onClick={handleNext}
                        >
                            {currentQuestionIndex < questions.length - 1
                                ? "Следващ въпрос"
                                : "Submit"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quiz;
