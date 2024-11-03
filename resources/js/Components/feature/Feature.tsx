export const Feature = () => {
    return (
        <>
            <section className="max-w-screen-xl mx-auto text-center my-14">
                <h2 className="mb-4 text-4xl">Start Your Trading Journey</h2>
                <p>
                    Make deposits easily with a variety of methods. Local bank
                    options, e-wallets, <br />
                    cryptocurrencies, and credit cards are available for instant
                    deposits..
                </p>
                <div className="grid grid-cols-2 gap-5 mt-10">
                    <div className="bg-[#F8F8F8] text-start p-6 rounded-3xl">
                        <img
                            src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561233/Frame_25_irat6j.svg"
                            alt=""
                        />
                        <h3 className="my-4 text-3xl">30% Trading Bonus</h3>
                        <p>Receive 30% Credit Bonus On Each Deposit*</p>
                        <p className="mb-5">
                            Up to Maximum Bonus Limit of $3,000
                        </p>
                        <a className="text-blue-500 underline" href="#">
                            *T&Cs Applies
                        </a>
                        <img
                            className="w-[70%] mx-auto mt-3"
                            src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730651065/30-tradable-bonus-KV_xmfrte.png"
                            alt=""
                        />
                    </div>
                    <div
                        className="relative flex flex-col justify-end p-3 bg-center bg-cover rounded-3xl text-end"
                        style={{
                            backgroundImage: `url('https://res.cloudinary.com/dnsekavtx/image/upload/v1730609613/people-leisure-communication-concept_boda02.jpg')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="p-5 bg-white bg-opacity-40 backdrop-blur-md rounded-3xl text-start">
                            <h3 className="mb-2 text-3xl font-semibold text-gray-800">
                                Payment Solutions
                            </h3>
                            <p className="text-gray-700">
                                Depositing is easy with local and global payment
                                solutions
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    style={{
                        backgroundImage: `url('https://res.cloudinary.com/dnsekavtx/image/upload/v1730561233/Background_Feature_ndxzxv.png')`,
                        backgroundSize: "cover", // untuk memastikan gambar memenuhi seluruh area
                        backgroundPosition: "center", // untuk posisi gambar di tengah
                        backgroundPositionY: "centar",
                    }}
                    className="grid items-center grid-cols-3 gap-3 p-8 mt-3 rounded-3xl"
                >
                    <div className="text-start w-[70%]">
                        <img
                            src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561231/Frame_22_h17eaj.svg"
                            alt=""
                        />
                        <h3 className="my-3 text-3xl">Instant Deposit</h3>
                        <p>
                            Fund your account instantly and start trading
                            immediately.
                        </p>
                    </div>
                    <div className="p-5 bg-white rounded-3xl">
                        <h3 className="mb-3 text-xl text-start">Deposit</h3>
                        <div className="overflow-hidden border rounded-2xl">
                            <div className="flex items-center justify-between p-3 bg-gray-100 border-b">
                                <div className="flex items-center space-x-2">
                                    <img
                                        src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561231/Group_26_rczfhc.svg"
                                        alt=""
                                    />
                                    <p>Stake ACME</p>
                                </div>
                                <p className="text-gray-500">Done</p>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-gray-200 border-b">
                                <div className="flex items-center space-x-2">
                                    <img
                                        src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561231/Group_27_uxb3ps.svg"
                                        alt=""
                                    />
                                    <p>Deposit & Stake</p>
                                </div>
                                <p className="text-gray-500">Waiting</p>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-gray-200">
                                <div className="flex items-center space-x-2">
                                    <img
                                        src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561230/Group_28_jmdwtk.svg"
                                        alt=""
                                    />
                                    <p>Received by validator</p>
                                </div>
                                <p className="text-gray-500">Automatic</p>
                            </div>
                        </div>
                        <div className="mt-4 space-y-3">
                            <div className="flex items-center justify-between">
                                <p>Transaction ID(s)</p>
                                <p>0874......8m8h</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p>Time</p>
                                <p>1 hour ago</p>
                            </div>
                            <hr />
                            <div className="flex items-center justify-between">
                                <p>Total Amount</p>
                                <p className="flex items-center space-x-1">
                                    <img
                                        src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561228/image_10_p2w8mq.svg"
                                        alt=""
                                        className="w-4 h-4"
                                    />
                                    <span>0.0001 ETH</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div></div>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    <div className="bg-[#F8F8F8] rounded-xl mt-3 p-4">
                        <img
                            src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561233/Frame_25_irat6j.svg"
                            alt=""
                        />
                        <div className="mt-20 space-y-3 text-start">
                            <h3 className="text-3xl">Fast Withdrawals</h3>
                            <p>
                                Withdraw your funds effortlessly in just a few
                                minutes.
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#F8F8F8] rounded-xl mt-3 p-4">
                        <img
                            src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561226/Frame_22-2_eg3yhb.svg"
                            alt=""
                        />
                        <div className="mt-20 space-y-3 text-start">
                            <h3 className="text-3xl">Swap-Free</h3>
                            <p>
                                Fund your account instantly and start trading
                                immediately.
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#F8F8F8] rounded-xl mt-3 p-4">
                        <img
                            src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561231/Frame_22_h17eaj.svg"
                            alt=""
                        />
                        <div className="mt-20 space-y-3 text-start">
                            <h3 className="text-3xl">No Commission</h3>
                            <p>
                                Enjoy commission-free trading on all your
                                transactions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
