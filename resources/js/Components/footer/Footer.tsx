


export const Footer = () => {
    return (
        <>
            <section className="bg-[#f8f8f8] py-10">
                <div className="max-w-screen-xl mx-auto">
                    <div className="grid grid-cols-7 gap-5 mb-7">
                        <div className="col-span-2">
                            <h1 className="text-4xl text-blue-500 font-semibold mb-4">DUHANI</h1>
                            <hr />
                            <div className="flex mt-3 gap-1">
                                <img className="w-4" src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561231/Frame_vjowts.svg" alt="" />
                                <img className="w-4" src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561231/Frame_vjowts.svg" alt="" />
                                <img className="w-4" src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561231/Frame_vjowts.svg" alt="" />
                                <img className="w-4" src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561231/Frame_vjowts.svg" alt="" />
                                <img className="w-4" src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561231/Frame_vjowts.svg" alt="" />
                            </div>
                        </div>
                        <div className="col-span-2 space-y-3 border-r">
                            <div>
                                <p>Address</p>
                                <p>Rruga Pavarsia, Nd:129 H.5, AP/27, Durres Albania</p>
                            </div>
                            <div>
                                <p>Telephone</p>
                                <p>+355 524 20144</p>
                            </div>
                            <div>
                                <p>Email</p>
                                <p>support@duhanicapital.com</p>
                            </div>
                        </div>
                        <div className="col-span-1 border-r space-y-3">
                            <div>
                                <p>Traders</p>
                                <ul>
                                    <li>Account</li>
                                    <li>Market</li>
                                </ul>
                            </div>
                            <div>
                                <p>Tools</p>
                                <ul>
                                    <li>MT5</li>
                                </ul>
                            </div>
                            <div>
                                <p>Career</p>
                            </div>
                        </div>
                        <div className="col-span-1 border-r space-y-3">
                            <div>
                                <p>Partners</p>
                                <p>Introducing Broker Affiliate Program</p>
                            </div>
                            <div>
                                <p>Company</p>
                                <ul>
                                    <li>Story</li>
                                    <li>Legal</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-1 border-r space-y-3">
                            <div>
                                <p>Story</p>
                                <ul>
                                    <li>Account Assistence</li>
                                    <li>Products</li>
                                    <li>Platforms</li>
                                    <li>Promotions</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="flex justify-between mt-8">
                        <p>Copyright 2024 Duhani Capital Ltd</p>
                        <div className="flex justify-between w-96">
                            <a className="underline underline-offset-8 text-xl" href="#">About Duhani</a>
                            <a className="underline underline-offset-8 text-xl" href="#">KYC & AML Policy</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
