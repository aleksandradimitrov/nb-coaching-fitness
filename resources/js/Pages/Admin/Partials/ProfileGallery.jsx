import React from "react";
import Modal from "@/Components/Modal";
import Zoom from 'react-medium-image-zoom';
import UserPageController from "@/Controllers/UserPageController";
import { Swiper, SwiperSlide } from "swiper/react";
import { UploadImageInnerModal } from "@/CustomComponents/Modals";
import { Plus, Trash2 } from "lucide-react";

const ProfileGallery = ({ user, images }) => {
    const { isModalTwoOpen, setIsModalTwoOpen } = UserPageController();

    return (
        <div className="p-6 rounded-lg gradient-two">
            <div className="flex-col-3">
                {/* Title and Button in the same div */}
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Прогрес</h1>
                    <button
                        className="flex items-center bg-red-600 hover:bg-red-700 text-white rounded-md py-2 px-4 transition-all duration-300"
                        onClick={() => setIsModalTwoOpen(true)}
                    >
                        <span className="hidden sm:inline">Добави Снимка</span>
                        <Plus />
                    </button>
                </div>

                {user && images.length !== 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {images.map((image, id) => (
                            <div
                                key={id}
                                className="flex flex-col p-4 bg-neutral-800 border border-neutral-700 hover:border-red-500 rounded-lg transition-all duration-300"
                            >
                                <Zoom>
                                    <img
                                        className="w-full lg:w-[300px] h-[300px] object-cover rounded-md"
                                        src={image.path}
                                        alt="Progress"
                                    />
                                </Zoom>
                                <div className="mt-4 flex justify-between items-center">
                                    <p className="text-lg font-bold text-white">{image.date}</p>
                                    <button
                                        className="text-red-500 hover:text-red-700 transition-all duration-300"
                                        onClick={() => {console.log('sad')}}
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <h1 className="text-center text-lg text-gray-400 w-full py-10">
                        Този потребител няма качени снимки.
                    </h1>
                )}
            </div>

            <Modal
                onClose={() => setIsModalTwoOpen(false)}
                show={isModalTwoOpen}
            >
                <UploadImageInnerModal setIsModalTwoOpen={setIsModalTwoOpen} user={user} />
            </Modal>
        </div>
    );
};

export default ProfileGallery;
