import InputError from "@/Components/InputError";

import { useForm } from "@inertiajs/react";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <form onSubmit={submit} className="account-container">
            <div className="flex-center min-h-screen max-w-2xl mx-auto">
                <div className="w-full px-5 lg:px-10 xl:px-32 mx-auto">
                    <div className="flex-col-10">
                        <h1 className="font-bold text-4xl text-center">Забравена парола</h1>

                        <div className="flex-col-3">
                            {status && (
                                <div className="mb-4 font-medium text-sm text-green-600">
                                    {status}
                                </div>
                            )}

                            <div className="input-container">
                                <label className="text-white">
                                    Email<span className="text-red-600">*</span>
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={onHandleChange}
                                    placeholder="Имейл"
                                />
                            </div>
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />

                            <button className="uppercase font-bold w-full mt-3 bg-red-600 text-white disabled:text-red-600/50 rounded-md p-3 transition-all hover:-translate-y-1">
                                Потвърди
                            </button>
                        </div>
                        <a href="/" className="text-white underline text-center">Назад</a>
                    </div>
                </div>
            </div>
        </form>
    );
}
