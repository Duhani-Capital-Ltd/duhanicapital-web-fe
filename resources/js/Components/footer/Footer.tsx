export const Footer = () => {
    return (
        <>
            <section className="bg-[#f8f8f8] py-10">
                <div className="max-w-screen-xl px-6 mx-auto">
                    <div className="grid grid-cols-7 gap-8 mb-7">
                        {/* Left Column - Logo and Social Icons */}
                        <div className="col-span-2">
                            <h1 className="mb-4 text-4xl font-semibold text-blue-500">
                                DUHANI
                            </h1>
                            <div className="flex gap-3 mt-4">
                                <img
                                    className="w-5"
                                    src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561231/Frame_vjowts.svg"
                                    alt="Social Icon"
                                />
                                <img
                                    className="w-5"
                                    src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561226/Frame-1_qphnzz.svg"
                                    alt="Social Icon"
                                />
                                <img
                                    className="w-5"
                                    src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561228/Frame-2_vagern.svg"
                                    alt="Social Icon"
                                />
                                <img
                                    className="w-5"
                                    src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561226/Frame-3_tjzm57.svg"
                                    alt="Social Icon"
                                />
                            </div>
                        </div>

                        {/* Middle Columns - Contact Info */}
                        <div className="col-span-2 pr-6 space-y-4 border-r">
                            <div>
                                <p className="font-semibold">Address:</p>
                                <p className="text-sm text-gray-500">
                                    Rruga Pavaresia,  Nd:129 H.5, Ap/27, Durres
                                    Albania
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold">Telephone:</p>
                                <p className="text-sm text-gray-500">
                                    +355 524 20144
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold">Email:</p>
                                <p className="text-sm text-gray-500">
                                    support@duhanicapital.com
                                </p>
                            </div>
                        </div>

                        {/* Sections with Links */}
                        <div className="col-span-1 pr-6 space-y-4 border-r">
                            <p className="font-semibold">Traders:</p>
                            <ul className="space-y-1 text-sm text-gray-500">
                                <li>
                                    <a href="#" className="hover:text-gray-700">
                                        Account
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-700">
                                        Market
                                    </a>
                                </li>
                            </ul>
                            <p className="mt-4 font-semibold">Tools:</p>
                            <p>
                                <a
                                    href="#"
                                    className="text-sm text-gray-500 hover:text-gray-700"
                                >
                                    MT5
                                </a>
                            </p>
                            <p className="mt-4 font-semibold">Career</p>
                        </div>

                        <div className="col-span-1 pr-6 space-y-4 border-r">
                            <p className="font-semibold">Partners:</p>
                            <ul className="space-y-1 text-sm text-gray-500">
                                <li>
                                    <a href="#" className="hover:text-gray-700">
                                        Introducing Broker
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-700">
                                        Affiliate Program
                                    </a>
                                </li>
                            </ul>
                            <p className="mt-4 font-semibold">Company:</p>
                            <ul className="space-y-1 text-sm text-gray-500">
                                <li>
                                    <a href="#" className="hover:text-gray-700">
                                        Story
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-700">
                                        Legal
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-1 space-y-4">
                            <p className="font-semibold">Story:</p>
                            <ul className="space-y-1 text-sm text-gray-500">
                                <li>
                                    <a href="#" className="hover:text-gray-700">
                                        Account Assistance
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-700">
                                        Products
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-700">
                                        Platforms
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-700">
                                        Promotions
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Footer Bottom Section */}
                    <hr className="my-6" />
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500">
                            Copyright © 2024 Duhani Capital Ltd.
                        </p>
                        <div className="flex space-x-8">
                            <a
                                className="text-gray-500 underline underline-offset-4"
                                href="/about"
                            >
                                About Duhani
                            </a>
                            <a
                                className="text-gray-500 underline underline-offset-4"
                                href="#"
                            >
                                KYC & AML Policy
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
