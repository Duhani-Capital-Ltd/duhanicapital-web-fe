import { Button } from "@/components/ui/button"

export const VarietyOfAccounts = () => {
    return (
        <>
            <section className="bg-black text-white">
                <div className="max-w-screen-xl mx-auto py-20">
                    <h2 className="text-4xl text-center mb-14">
                        Select from a variety of account <br /> options to suit your trading needs <br />and start your journey today
                    </h2>
                    <div className="grid grid-cols-5 gap-3">
                        {Array(5).fill(0).map((_, idx) => (
                            <div key={idx} className="bg-[#1C1C1C] rounded-md p-5">
                                <p className="bg-blue-500 rounded-full text-white w-fit text-xs px-2 mb-3">Starters</p>
                                <h4 className="text-2xl mb-5">Micro</h4>
                                <hr />
                                <ul className="space-y-3 mt-3 text-sm font-extralight">
                                    {[
                                        "Spread as low as 1.2pips",
                                        "No Commission",
                                        "Swap Free",
                                        "No Minimum Deposit",
                                        "Stop Out 30%",
                                        "Margin Call 100%",
                                        "FX Leverage up to 1000",
                                        "Gold Leverage up to 500"
                                    ].map((feature, index) => (
                                        <li key={index} className="flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                height="15"
                                                viewBox="0 0 14 15"
                                                fill="none"
                                                className="mr-2"
                                            >
                                                <path
                                                    d="M13.7322 7.12967L11.7237 6.55446C10.8192 6.2989 9.99524 5.815 9.33074 5.14906C8.66623 4.48311 8.18338 3.65741 7.92837 2.75095L7.3544 0.738073C7.32554 0.667649 7.27643 0.607415 7.21333 0.565024C7.15022 0.522633 7.07597 0.5 7 0.5C6.92403 0.5 6.84978 0.522633 6.78667 0.565024C6.72357 0.607415 6.67446 0.667649 6.6456 0.738073L6.07163 2.75095C5.81662 3.65741 5.33377 4.48311 4.66926 5.14906C4.00476 5.815 3.18084 6.2989 2.27634 6.55446L0.26781 7.12967C0.19069 7.15161 0.122814 7.19816 0.0744817 7.26225C0.0261497 7.32635 0 7.4045 0 7.48484C0 7.56518 0.0261497 7.64333 0.0744817 7.70743C0.122814 7.77153 0.19069 7.81808 0.26781 7.84001L2.27634 8.41523C3.18084 8.67078 4.00476 9.15468 4.66926 9.82063C5.33377 10.4866 5.81662 11.3123 6.07163 12.2187L6.6456 14.2316C6.66749 14.3089 6.71393 14.3769 6.77789 14.4254C6.84185 14.4738 6.91983 14.5 7 14.5C7.08017 14.5 7.15815 14.4738 7.22211 14.4254C7.28607 14.3769 7.33251 14.3089 7.3544 14.2316L7.92837 12.2187C8.18338 11.3123 8.66623 10.4866 9.33074 9.82063C9.99524 9.15468 10.8192 8.67078 11.7237 8.41523L13.7322 7.84001C13.8093 7.81808 13.8772 7.77153 13.9255 7.70743C13.9739 7.64333 14 7.56518 14 7.48484C14 7.4045 13.9739 7.32635 13.9255 7.26225C13.8772 7.19816 13.8093 7.15161 13.7322 7.12967Z"
                                                    fill="white"
                                                />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="w-full flex justify-center">
                    <Button className="rounded-full mt-10 bg-blue-600 text-white">Open an Account</Button>
                    </div>
                </div>
            </section>
        </>
    )
}
