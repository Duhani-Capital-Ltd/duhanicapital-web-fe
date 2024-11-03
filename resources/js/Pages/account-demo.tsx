import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/Components/nav/Nav";
import { Feature } from "@/Components/feature/Feature";
import { VarietyOfAccounts } from "@/Components/varietyOfAccounts/VarietyOfAccount";
import { Banner } from "@/Components/Banner/Banner";
import { VarietyOfAccountOption } from "@/Components/varietyOfAccountOption/VarietyOfAccountOption";
import { PaymentSystemPartners } from "@/Components/paymentSystemPartners/PaymentSystemPartners";
import { Footer } from "@/Components/footer/Footer";

export default function Index({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const pageTitle = "Homepage";
    return (
        <>
            <section className="">
                <Navbar />
                <Hero />
                <DemoAccountBenefits />
                <WhoOpenDemoAccount />
                <Footer />
            </section>
        </>
    );
}
export const Hero = () => {
    return (
        <>
            <section
                className="flex items-center justify-center text-center"
                style={{
                    backgroundImage: `url('https://res.cloudinary.com/dnsekavtx/image/upload/v1730561236/Hero_Background_Home_cewmzf.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "74vh",
                }}
            >
                <div className="max-w-screen-md px-4 mx-auto">
                    <h1 className="text-6xl leading-[1.1em] mb-4 font-bold">
                        Discover Your Ideal Trading Account with Duhani Capital
                    </h1>
                    <p className="text-lg">
                        Are you ready to explore the exciting world of trading
                        without any financial risk? With our Demo Account at
                        Duhani Capital, you can sharpen your skills, test out
                        strategies, and navigate the markets in a completely
                        risk-free environment.
                    </p>
                </div>
            </section>
        </>
    );
};

export const DemoAccountBenefits = () => {
    return (
        <section className="max-w-screen-xl mx-auto bg-white my-14 rounded-3xl">
            <div className="flex flex-col items-center md:flex-row">
                {/* Left Side: Image */}
                <div className="w-full mb-8 md:w-1/2 md:mb-0 md:mr-8">
                    <img
                        src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730609613/people-leisure-communication-concept_boda02.jpg"
                        alt="Woman with laptop and phone"
                        className="object-cover w-full rounded-3xl"
                    />
                </div>

                {/* Right Side: Text and List */}
                <div className="w-full md:w-1/2">
                    <h2 className="mb-6 text-3xl font-semibold">
                        Why Choose Our Demo Account?
                    </h2>
                    <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start">
                            <StarIcon className="mt-1 mr-2" />
                            <div>
                                <p className="font-semibold">Zero Risk</p>
                                <p>
                                    Trade with confidence, knowing you won’t
                                    lose real money. Our demo account provides a
                                    safe space to practice.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <StarIcon className="mt-1 mr-2" />
                            <div>
                                <p className="font-semibold">
                                    Real Market Conditions
                                </p>
                                <p>
                                    Experience live market data and trading
                                    scenarios to prepare yourself for real
                                    trades.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <StarIcon className="mt-1 mr-2" />
                            <div>
                                <p className="font-semibold">
                                    Unlimited Virtual Funds
                                </p>
                                <p>
                                    Start with an abundance of virtual capital,
                                    enabling you to explore various strategies
                                    without limitations.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <StarIcon className="mt-1 mr-2" />
                            <div>
                                <p className="font-semibold">
                                    Comprehensive Learning Resources
                                </p>
                                <p>
                                    Gain access to a wealth of educational
                                    materials, from tutorials to webinars,
                                    designed to boost your trading expertise.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <StarIcon className="mt-1 mr-2" />
                            <div>
                                <p className="font-semibold">
                                    User-Friendly Platforms
                                </p>
                                <p>
                                    Easily navigate our intuitive trading
                                    platforms, whether you’re using a desktop or
                                    mobile device.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <section className="max-w-screen-xl mx-auto text-center my-14">
                <h2 className="mb-4 text-4xl">Key Features</h2>
                <div className="grid grid-cols-4 gap-5 my-8">
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
        </section>
    );
};
const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="15"
        viewBox="0 0 14 15"
        fill="none"
        {...props}
    >
        <path
            d="M13.7322 7.12967L11.7237 6.55446C10.8192 6.2989 9.99524 5.815 9.33074 5.14906C8.66623 4.48311 8.18338 3.65741 7.92837 2.75095L7.3544 0.738073C7.32554 0.667649 7.27643 0.607415 7.21333 0.565024C7.15022 0.522633 7.07597 0.5 7 0.5C6.92403 0.5 6.84978 0.522633 6.78667 0.565024C6.72357 0.607415 6.67446 0.667649 6.6456 0.738073L6.07163 2.75095C5.81662 3.65741 5.33377 4.48311 4.66926 5.14906C4.00476 5.815 3.18084 6.2989 2.27634 6.55446L0.26781 7.12967C0.19069 7.15161 0.122814 7.19816 0.0744817 7.26225C0.0261497 7.32635 0 7.4045 0 7.48484C0 7.56518 0.0261497 7.64333 0.0744817 7.70743C0.122814 7.77153 0.19069 7.81808 0.26781 7.84001L2.27634 8.41523C3.18084 8.67078 4.00476 9.15468 4.66926 9.82063C5.33377 10.4866 5.81662 11.3123 6.07163 12.2187L6.6456 14.2316C6.66749 14.3089 6.71393 14.3769 6.77789 14.4254C6.84185 14.4738 6.91983 14.5 7 14.5C7.08017 14.5 7.15815 14.4738 7.22211 14.4254C7.28607 14.3769 7.33251 14.3089 7.3544 14.2316L7.92837 12.2187C8.18338 11.3123 8.66623 10.4866 9.33074 9.82063C9.99524 9.15468 10.8192 8.67078 11.7237 8.41523L13.7322 7.84001C13.8093 7.81808 13.8772 7.77153 13.9255 7.70743C13.9739 7.64333 14 7.56518 14 7.48484C14 7.4045 13.9739 7.32635 13.9255 7.26225C13.8772 7.19816 13.8093 7.15161 13.7322 7.12967Z"
            fill="#0073e6"
        />
    </svg>
);
export const WhoOpenDemoAccount = () => {
    return (
        <section className="max-w-screen-xl p-8 mx-auto bg-white my-14 rounded-3xl">
            <div className="flex flex-col items-center md:flex-row">
                {/* Left Side: Image */}
                <div className="w-full mb-8 md:w-1/2 md:mb-0 md:mr-8">
                    <img
                        src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730609613/people-leisure-communication-concept_boda02.jpg"
                        alt="Person with phone showing trading app"
                        className="object-cover w-full rounded-3xl"
                    />
                </div>

                {/* Right Side: Text and List */}
                <div className="w-full md:w-1/2">
                    <h2 className="mb-6 text-3xl font-semibold">
                        Who Should Open a Demo Account?
                    </h2>
                    <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start">
                            <StarIcon className="mt-1 mr-2" />
                            <div>
                                <p className="font-semibold">New Traders</p>
                                <p>
                                    Perfect for beginners eager to learn the
                                    basics of trading without any financial
                                    commitment.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <StarIcon className="mt-1 mr-2" />
                            <div>
                                <p className="font-semibold">
                                    Experienced Traders
                                </p>
                                <p>
                                    Ideal for testing new strategies or getting
                                    acquainted with our trading platform.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <StarIcon className="mt-1 mr-2" />
                            <div>
                                <p className="font-semibold">
                                    Strategic Thinkers
                                </p>
                                <p>
                                    Excellent for individuals looking to refine
                                    their trading approaches risk-free before
                                    entering live markets.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Button and Subtitle */}
            <div className="flex flex-col items-center mt-8">
                <Button
                    variant="link"
                    className="p-4 rounded-full w-fit text-md"
                    style={{
                        backgroundColor: "#126DFF",
                        color: "white",
                        textDecoration: "none",
                    }}
                >
                    <a href="/your-target-page" className="text-white">
                        Get Started Today!
                    </a>
                </Button>

                {/* Subtitle Text */}
                <p className="max-w-lg mt-6 text-center text-gray-600">
                    Open your Demo Account with Duhani Capital and take the
                    first step on your trading journey with confidence. Sign Up
                    Now to unlock unlimited opportunities and set the stage for
                    your success!
                </p>
            </div>
        </section>
    );
};
