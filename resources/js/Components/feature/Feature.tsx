


export const Feature = () => {
    return (
        <>
            <section className="max-w-screen-xl mx-auto text-center my-14">
                <h2 className="text-4xl mb-4">Start Your Trading Journey</h2>
                <p>Make deposite easily with a variety of methodes. Local bank options, e-wallets,</p>
                <p>cryptocurrencies, and credit cards are available for instant deposits.</p>
                <div className="grid grid-cols-2 mt-10 gap-5">
                    <div className="bg-[#F8F8F8] text-start p-6 rounded-3xl">
                        <img src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561233/Frame_25_irat6j.svg" alt="" />
                        <h3 className="text-3xl my-4">30% Trading Bonus</h3>
                        <p>Receive 30% Credit Bonus On Each Deposite*</p>
                        <p className="mb-5">Up to Maximum Bonus Limit of $3,000*</p>
                        <a className="text-blue-500 underline" href="#">*T&Cs Applies</a>
                        <img className="w-[70%] mx-auto mt-3" src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730607057/kv-30_pz4zts.png" alt="" />
                    </div>
                    <div
                        className="relative bg-cover bg-center rounded-3xl p-3 text-end flex flex-col justify-end"
                        style={{
                            backgroundImage: `url('https://res.cloudinary.com/dnsekavtx/image/upload/v1730609613/people-leisure-communication-concept_boda02.jpg')`,
                            backgroundSize: 'cover', // untuk memastikan gambar memenuhi seluruh area
                            backgroundPosition: 'center', // untuk posisi gambar di tengah
                        }}
                    >
                        <div className="bg-white bg-opacity-90 rounded-3xl p-5 text-start">
                            <h3 className="text-3xl mb-2">Payment Solution</h3>
                            <p>Depositing is easy with local and global payment solutions</p>
                        </div>
                    </div>
                </div>

                <div
                    style={{
                        backgroundImage: `url('https://res.cloudinary.com/dnsekavtx/image/upload/v1730561233/Background_Feature_ndxzxv.png')`,
                        backgroundSize: 'cover', // untuk memastikan gambar memenuhi seluruh area
                        backgroundPosition: 'center', // untuk posisi gambar di tengah
                        backgroundPositionY: 'centar'
                    }}
                    className="grid grid-cols-3 gap-3 mt-3 items-center rounded-3xl p-8">
                    <div className="text-start w-[70%]">
                        <img src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561233/Frame_25_irat6j.svg" alt="" />
                        <h3 className="text-3xl my-3">Instant Deposit</h3>
                        <p>Fund your account instanly and start trading immediatly </p>
                    </div>
                    <div
                        className="bg-white rounded-3xl p-5">
                        <h3 className="text-xl text-start mb-3">Deposit</h3>
                        <div className="border rounded-2xl">
                            <div className="flex justify-between items-center border-b p-3">
                                <div>
                                    <img src="" alt="" />
                                    <p>Stack ACME</p>
                                </div>
                                <p>Done</p>
                            </div>
                            <div className="flex justify-between items-center border-b p-3">
                                <div>
                                    <img src="" alt="" />
                                    <p>Stack ACME</p>
                                </div>
                                <p>Done</p>
                            </div>
                            <div className="flex justify-between items-center p-3">
                                <div>
                                    <img src="" alt="" />
                                    <p>Stack ACME</p>
                                </div>
                                <p>Done</p>
                            </div>
                        </div>
                        <div className="mt-4 space-y-3">
                            <div className="flex justify-between items-center">
                                <p>Transaction ID(s)</p>
                                <p>0872563773</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p>Time</p>
                                <p>1 hour ago</p>
                            </div>
                            <hr />
                            <div className="flex justify-between items-center">
                                <p>Total Amount</p>
                                <p>0.0001 ETH</p>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    <div className="bg-[#F8F8F8] rounded-xl mt-3 p-4">
                        <img src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561233/Frame_25_irat6j.svg" alt="" />
                        <div className="mt-20 text-start space-y-3">
                            <h3 className="text-3xl">Fast Withdawls</h3>
                            <p>Withdraw your funds effortlys in just a few minutes</p>
                        </div>
                    </div>
                    <div className="bg-[#F8F8F8] rounded-xl mt-3 p-4">
                        <img src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561233/Frame_25_irat6j.svg" alt="" />
                        <div className="mt-20 text-start space-y-3">
                            <h3 className="text-3xl">Fast Withdawls</h3>
                            <p>Withdraw your funds effortlys in just a few minutes</p>
                        </div>
                    </div>
                    <div className="bg-[#F8F8F8] rounded-xl mt-3 p-4">
                        <img src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561233/Frame_25_irat6j.svg" alt="" />
                        <div className="mt-20 text-start space-y-3">
                            <h3 className="text-3xl">Fast Withdawls</h3>
                            <p>Withdraw your funds effortlys in just a few minutes</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
