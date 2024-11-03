import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/Components/nav/Nav";
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
                <TradingSuccessSection />
                <FeaturesKey />
                <AccountBenefits />
                <DemoAccountBenefits />
                <StandardAccountSection />
                <StandardAccountBenefits />
                <StandardAccountFeatures />
                <StandardAccountConsideration />
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
                        Discover Your Perfect Trading Account with Duhani
                        Capital
                    </h1>
                    <p className="text-lg">
                        At Duhani Capital, we provide two adaptable trading
                        accounts— Micro and Standard—crafted to cater to traders
                        of all experience levels. Whether you’re stepping into
                        the trading arena for the first time or seeking a
                        well-rounded option, our accounts deliver flexibility,
                        affordability, and robust trading resources.
                    </p>
                </div>
            </section>
        </>
    );
};
export const TradingSuccessSection = () => {
    return (
        <section className="max-w-screen-md mx-auto text-center my-14">
            <h4 className="mb-2 text-sm font-semibold text-blue-500">
                Micro Account
            </h4>
            <h2 className="mb-4 text-4xl">Your Gateway to Trading Success</h2>
            <p className="mb-6 text-gray-700">
                Ready to embark on your trading adventure with a strong
                foundation? The Duhani Capital Micro Account is the ideal
                starting point, offering an accessible pathway for new traders
                or those with limited funds to confidently explore the markets.
            </p>
            <div className="w-full max-w-screen-xl mx-auto overflow-hidden rounded-3xl">
                <img
                    src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730609613/people-leisure-communication-concept_boda02.jpg"
                    alt="Happy trader with stock charts in the background"
                    className="object-cover w-full h-96"
                />
            </div>
        </section>
    );
};
export const FeaturesKey = () => {
    return (
        <section className="max-w-screen-xl mx-auto text-center my-14">
            <h2 className="mb-4 text-4xl">
                Why Choose the
                <br />
                Duhani Capital Micro Account
            </h2>
            <div className="grid grid-cols-3 gap-5 my-8">
                <div className="bg-[#F8F8F8] rounded-xl p-6">
                    <img
                        src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561233/Frame_25_irat6j.svg"
                        alt=""
                    />
                    <div className="mt-8 space-y-3 text-start">
                        <h3 className="text-3xl">Tailored for Beginners</h3>
                        <p>
                            Focused on affordability and minimizing risk, making
                            it the perfect option for novice traders.
                        </p>
                    </div>
                </div>
                <div className="bg-[#F8F8F8] rounded-xl p-6">
                    <img
                        src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561226/Frame_22-2_eg3yhb.svg"
                        alt=""
                    />
                    <div className="mt-8 space-y-3 text-start">
                        <h3 className="text-3xl">Low Minimum Deposit</h3>
                        <p>
                            Start with just $10, allowing you to explore our
                            platform and test strategies without a hefty
                            financial commitment.
                        </p>
                    </div>
                </div>
                <div className="bg-[#F8F8F8] rounded-xl p-6">
                    <img
                        src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561231/Frame_22_h17eaj.svg"
                        alt=""
                    />
                    <div className="mt-8 space-y-3 text-start">
                        <h3 className="text-3xl">Smaller Trade Sizes</h3>
                        <p>
                            Execute trades from 0.01 lot, facilitating effective
                            risk management while gaining practical experience.
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-5 my-8">
                <div className="bg-[#F8F8F8] rounded-xl p-6">
                    <img
                        src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561231/Frame_22_h17eaj.svg"
                        alt=""
                    />
                    <div className="mt-8 space-y-3 text-start">
                        <h3 className="text-3xl">Flexible Leverage</h3>
                        <p>
                            Enjoy leverage up to 1:1000 for FX and 1:500 for
                            gold, giving you the power to minimize potential
                            losses as you learn.
                        </p>
                    </div>
                </div>
                <div className="bg-[#F8F8F8] rounded-xl p-6">
                    <img
                        src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561231/Frame_22_h17eaj.svg"
                        alt=""
                    />
                    <div className="mt-8 space-y-3 text-start">
                        <h3 className="text-3xl">User-Friendly Platform</h3>
                        <p>
                            Our intuitive interface is designed for ease of use,
                            ensuring a straightforward trading experience for
                            newcomers.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export const AccountBenefits = () => {
    return (
        <section className="bg-black py-14">
            <div className="max-w-screen-xl mx-auto text-center text-white">
                <h2 className="mb-8 text-3xl">Benefits of a Micro Account</h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="overflow-hidden rounded-xl">
                        <img
                            src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730649274/image-1_kjzuru.png"
                            alt="Practice Makes Perfect"
                            className="object-cover w-full h-90"
                        />
                        <div className="p-4">
                            <h3 className="text-xl">Practice Makes Perfect</h3>
                            <p className="mt-2 text-gray-400">
                                Test your trading strategies in a low-risk
                                environment to build your confidence and skills.
                            </p>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-xl">
                        <img
                            src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730649274/image_tplpvc.png"
                            alt="Low Barrier to Entry"
                            className="object-cover w-full h-90"
                        />
                        <div className="p-4">
                            <h3 className="text-xl">Low Barrier to Entry</h3>
                            <p className="mt-2 text-gray-400">
                                With its budget-friendly structure, the Micro
                                Account makes online trading accessible to
                                everyone.
                            </p>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-xl">
                        <img
                            src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730649402/c10c56f0b2e0d8dc967e0ea327f17fe7_bafjpj.png"
                            alt="Peace of Mind"
                            className="object-cover w-full h-90"
                        />
                        <div className="p-4">
                            <h3 className="text-xl">Peace of Mind</h3>
                            <p className="mt-2 text-gray-400">
                                Smaller trade sizes and manageable leverage
                                levels enable effective risk management as you
                                develop your trading.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export const DemoAccountBenefits = () => {
    return (
        <section className="max-w-screen-xl mx-auto bg-white my-14 rounded-3xl">
            <h2 className="mb-6 text-4xl text-center">
                Who Should Consider a Micro Account?
            </h2>
            <div className="flex flex-col items-center md:flex-row">
                {/* Right Side: Text and List */}
                <div className="w-full md:w-1/2">
                    <ul className="w-auto space-y-4 text-gray-700">
                        <li className="flex items-start">
                            <StarIcon className="mt-1 mr-2 text-blue-500" />
                            <div>
                                <p className="text-xl font-bold">New Traders</p>
                                <p>
                                    Ideal for individuals just starting their
                                    trading journey who desire a simple,
                                    <br />
                                    risk-managed approach.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <StarIcon className="mt-1 mr-2 text-blue-500" />
                            <div>
                                <p className="text-xl font-bold">
                                    Traders with Limited Capital
                                </p>
                                <p>
                                    Perfect for those wishing to start trading
                                    without
                                    <br /> a significant initial investment.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <StarIcon className="mt-1 mr-2 text-blue-500" />
                            <div>
                                <p className="text-xl font-bold">
                                    Learners and Experimenters
                                </p>
                                <p>
                                    A great fit for anyone looking to test
                                    strategies and gain experience
                                    <br /> in a low-risk setting.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <StarIcon className="mt-1 mr-2 text-blue-500" />
                            <div>
                                <p className="text-xl font-bold">
                                    Risk-Averse Investors
                                </p>
                                <p>
                                    Suitable for those who prefer to trade
                                    smaller lot sizes and
                                    <br /> manage risks carefully.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* Left Side: Image */}
                <div className="w-full mb-8 md:w-1/2 md:mb-0 md:mr-8">
                    <img
                        src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730609613/people-leisure-communication-concept_boda02.jpg"
                        alt="Woman with laptop and phone"
                        className="object-cover w-full h-96 rounded-3xl"
                    />
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <Button
                    variant="link"
                    className="p-6 rounded-full w-fit text-md"
                    style={{
                        backgroundColor: "#126DFF",
                        color: "white",
                        textDecoration: "none",
                    }}
                >
                    <a href="/your-target-page" className="text-white">
                        Open an Account
                    </a>
                </Button>
            </div>
        </section>
    );
};
export const StandardAccountSection = () => {
    return (
        <section className="max-w-screen-md mx-auto text-center my-14">
            <h4 className="mb-2 text-sm font-semibold text-blue-500">
                Standard Account
            </h4>
            <h2 className="mb-4 text-4xl">Your Versatile Trading Solution</h2>
            <p className="mb-6 text-gray-700">
                For traders seeking a balanced and adaptable trading experience,
                the Duhani Capital Standard Account is the perfect choice.
                Designed to bridge the gap between beginner and professional
                levels, it accommodates a variety of trading styles and
                strategies.
            </p>
            <div className="w-full max-w-screen-xl mx-auto overflow-hidden rounded-3xl">
                <img
                    src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730656938/stock-market-day-trader-working-exchange-office-with-multi-monitor-setup-with-real-time-inves_322096292.htm_fromView_search_page_1_position_12_uuid_bffc4b99-5548-40fa-ae63-1ef82e4feb10_duvzei.png"
                    alt="Happy trader with stock charts in the background"
                    className="object-cover w-full h-96"
                />
            </div>
        </section>
    );
};
export const StandardAccountBenefits = () => {
    return (
        <section className="max-w-screen-xl mx-auto text-center my-14">
            <h2 className="mb-4 text-4xl">
                Benefits of the Duhani Capital Standard Account
            </h2>
            <div className="grid grid-cols-4 gap-5 my-8">
                <div className="bg-[#F8F8F8] rounded-xl p-6">
                    <img
                        src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561233/Frame_25_irat6j.svg"
                        alt="Icon for Accessible Entry Point"
                    />
                    <div className="mt-8 space-y-3 text-start">
                        <h3 className="text-xl">Accessible Entry Point</h3>
                        <p className="text-sm text-gray-700">
                            Start trading with a minimum deposit of just $10,
                            making it an affordable entry for new traders.
                        </p>
                    </div>
                </div>

                <div className="bg-[#F8F8F8] rounded-xl p-6">
                    <img
                        src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561226/Frame_22-2_eg3yhb.svg"
                        alt="Icon for Flexible Trade Sizes"
                    />
                    <div className="mt-8 space-y-3 text-start">
                        <h3 className="text-xl">Flexible Trade Sizes</h3>
                        <p className="text-sm text-gray-700">
                            With a minimum trade size of 0.01 lot, you can
                            experiment and manage risk effectively.
                        </p>
                    </div>
                </div>

                <div className="bg-[#F8F8F8] rounded-xl p-6">
                    <img
                        src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561231/Frame_22_h17eaj.svg"
                        alt="Icon for Ample Leverage Options"
                    />
                    <div className="mt-8 space-y-3 text-start">
                        <h3 className="text-xl">Ample Leverage Options</h3>
                        <p className="text-sm text-gray-700">
                            Enjoy leverage up to 1:1000 for FX and 1:500 for
                            gold, enabling you to maximize returns while
                            managing your risk appetite.
                        </p>
                    </div>
                </div>

                <div className="bg-[#F8F8F8] rounded-xl p-6">
                    <img
                        src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561233/Frame_25_irat6j.svg"
                        alt="Icon for Diverse Trading Instruments"
                    />
                    <div className="mt-8 space-y-3 text-start">
                        <h3 className="text-xl">Diverse Trading Instruments</h3>
                        <p className="text-sm text-gray-500">
                            Access a wide range of assets, including forex,
                            commodities, indices, and more, for a dynamic
                            trading experience.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const StandardAccountFeatures = () => {
    return (
        <section className="max-w-screen-xl mx-auto my-24">
            <div className="flex flex-col gap-10 md:flex-row">
                {/* Left Image */}
                <div className="w-full md:w-1/2">
                    <img
                        src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730657248/laptop-phone-woman_aswei8.png"
                        alt="Trader with laptop and phone"
                        className="object-cover w-full h-96 rounded-3xl"
                    />
                </div>
                {/* Right Text */}
                <div className="w-full md:w-1/2">
                    <h2 className="my-4 text-4xl font-semibold">
                        What Makes the Standard Account Stand Out?
                    </h2>
                    <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start">
                            <StarIcon className="mt-1 mr-2 text-blue-500" />
                            <div>
                                <p className="text-xl font-semibold">
                                    Balanced Features
                                </p>
                                <p>
                                    Offers a harmonious blend of affordability
                                    and professional trading capabilities
                                    without incurring commissions.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <StarIcon className="mt-1 mr-2 text-blue-500" />
                            <div>
                                <p className="text-xl font-semibold">
                                    Seamless Platform Integration
                                </p>
                                <p>
                                    Experience hassle-free trading on our
                                    intuitive Duhani Capital platform,
                                    simplifying trade management.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <StarIcon className="mt-1 mr-2 text-blue-500" />
                            <div>
                                <p className="text-xl font-semibold">
                                    Scalable for Growth
                                </p>
                                <p>
                                    As your trading knowledge and capital grow,
                                    easily upgrade to more advanced accounts
                                    with enhanced features.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
export const StandardAccountConsideration = () => {
    return (
        <section className="max-w-screen-xl mx-auto my-24">
            <div className="flex flex-col items-center gap-10 md:flex-row">
                {/* Left Text */}
                <div className="w-full md:w-1/2">
                    <h2 className="mb-4 text-4xl font-semibold">
                        Who Should Consider a Standard Account?
                    </h2>
                    <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start">
                            <StarIcon className="mt-1 mr-2 text-blue-500" />
                            <div>
                                <p className="text-xl font-semibold">
                                    New Investors
                                </p>
                                <p>
                                    This account provides an affordable and
                                    accessible way for newcomers to learn while
                                    entering the market.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <StarIcon className="mt-1 mr-2 text-blue-500" />
                            <div>
                                <p className="text-xl font-semibold">
                                    Active Traders
                                </p>
                                <p>
                                    Ideal for those who wish to balance costs
                                    with features for frequent trading.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <StarIcon className="mt-1 mr-2 text-blue-500" />
                            <div>
                                <p className="text-xl font-semibold">
                                    Long-Term Investors
                                </p>
                                <p>
                                    Perfect for managing diverse portfolios
                                    without incurring higher fees.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <StarIcon className="mt-1 mr-2 text-blue-500" />
                            <div>
                                <p className="text-xl font-semibold">
                                    Risk-Averse Investors
                                </p>
                                <p>
                                    With flexible leverage, risk-conscious
                                    traders can engage in the market
                                    comfortably.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* Right Image */}
                <div className="w-full md:w-1/2">
                    <img
                        src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730657249/laptop-phone-woman2_silomo.png"
                        alt="Woman with tablet"
                        className="object-cover w-full rounded-3xl"
                    />
                </div>
            </div>
            <div className="mt-16 text-center">
                <div className="flex justify-center">
                    <Button
                        variant="link"
                        className="p-6 rounded-full w-fit text-md"
                        style={{
                            backgroundColor: "#126DFF",
                            color: "white",
                            textDecoration: "none",
                        }}
                    >
                        <a href="/your-target-page" className="text-white">
                            Unlock your trading potential!
                        </a>
                    </Button>
                </div>
                <p className="mt-4 text-gray-600">
                    Open a Standard Account with Duhani Capital today and
                    <br /> trade the way you want with powerful, flexible tools.
                </p>
            </div>
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
