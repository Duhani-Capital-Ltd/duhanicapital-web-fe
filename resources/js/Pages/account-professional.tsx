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
                <ProfessionalAccountSection />
                <ProfessionalAccountBenefits />
                <ProfessionalAccountConsideration />
                <LowSpreadAccountSection />
                <ZeroSpreadAccountSection />
                <ZeroSpreadConsideration />
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
                        At Duhani Capital, we provide three exceptional trading
                        accounts— Professional, Low Spread, and Zero
                        Spread—crafted to meet the diverse needs of traders at
                        every level. Whether you're a seasoned expert or just
                        starting, our accounts offer flexibility, affordability,
                        and powerful tools for your trading journey
                    </p>
                </div>
            </section>
        </>
    );
};
export const ProfessionalAccountSection = () => {
    return (
        <section className="max-w-screen-md mx-auto text-center my-14">
            <h4 className="mb-2 text-sm font-semibold text-blue-500">
                Professional Account
            </h4>
            <h2 className="mb-4 text-4xl">
                Tailored for the Experienced Trader
            </h2>
            <p className="mb-6 text-gray-700">
                Elevate your trading experience with the Duhani Capital
                Professional Account, designed for traders seeking optimal
                conditions and advanced features.
            </p>
            <div className="w-full max-w-screen-xl mx-auto overflow-hidden rounded-3xl">
                <img
                    src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730656938/stock-market-day-trader-working-exchange-office-with-multi-monitor-setup-with-real-time-inves_322096292.htm_fromView_search_page_1_position_12_uuid_bffc4b99-5548-40fa-ae63-1ef82e4feb10_duvzei.png"
                    alt="Professional trader with trading charts in the background"
                    className="object-cover w-full h-96"
                />
            </div>
        </section>
    );
};
export const ProfessionalAccountBenefits = () => {
    return (
        <section className="max-w-screen-xl mx-auto text-center my-14">
            <h2 className="mb-4 text-4xl">
                Why Choose the Duhani Capital Professional Account?
            </h2>
            <div className="grid grid-cols-3 gap-5 my-8">
                <div className="bg-[#F8F8F8] rounded-xl p-6">
                    <img
                        src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561233/Frame_25_irat6j.svg"
                        alt="Icon for Low Spread"
                    />
                    <div className="mt-8 space-y-3 text-start">
                        <h3 className="text-xl">Spread as Low as 0.6 Pips</h3>
                        <p className="text-sm text-gray-700">
                            Enjoy competitive pricing that maximizes your
                            trading potential.
                        </p>
                    </div>
                </div>

                <div className="bg-[#F8F8F8] rounded-xl p-6">
                    <img
                        src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561226/Frame_22-2_eg3yhb.svg"
                        alt="Icon for No Commission"
                    />
                    <div className="mt-8 space-y-3 text-start">
                        <h3 className="text-xl">No Commission</h3>
                        <p className="text-sm text-gray-700">
                            Trade without the burden of additional transaction
                            fees.
                        </p>
                    </div>
                </div>

                <div className="bg-[#F8F8F8] rounded-xl p-6">
                    <img
                        src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561231/Frame_22_h17eaj.svg"
                        alt="Icon for Swap Free"
                    />
                    <div className="mt-8 space-y-3 text-start">
                        <h3 className="text-xl">Swap Free</h3>
                        <p className="text-sm text-gray-700">
                            Benefit from our swap-free trading options for added
                            flexibility.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export const ProfessionalAccountConsideration = () => {
    return (
        <section className="bg-black py-14">
            <div className="max-w-screen-xl mx-auto text-center text-white">
                <h2 className="mb-8 text-3xl">
                    Who Should Consider a Professional Account?
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="overflow-hidden rounded-xl">
                        <img
                            src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730649274/image-1_kjzuru.png"
                            alt="Experienced Traders"
                            className="object-cover w-full h-90"
                        />
                        <div className="p-4">
                            <h3 className="text-xl">Experienced Traders</h3>
                            <p className="mt-2 text-gray-400">
                                Ideal for those looking for superior trading
                                conditions and advanced features.
                            </p>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-xl">
                        <img
                            src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730649274/image_tplpvc.png"
                            alt="High-Volume Traders"
                            className="object-cover w-full h-90"
                        />
                        <div className="p-4">
                            <h3 className="text-xl">High-Volume Traders</h3>
                            <p className="mt-2 text-gray-400">
                                Perfect for individuals executing multiple
                                trades daily, benefiting from low spreads and no
                                commissions.
                            </p>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-xl">
                        <img
                            src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730649402/c10c56f0b2e0d8dc967e0ea327f17fe7_bafjpj.png"
                            alt="Flexibility Seekers"
                            className="object-cover w-full h-90"
                        />
                        <div className="p-4">
                            <h3 className="text-xl">Flexibility Seekers</h3>
                            <p className="mt-2 text-gray-400">
                                Great for traders who require a competitive and
                                structured trading environment.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
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
                            Take your trading to the next level!
                        </a>
                    </Button>
                    <p className="mt-4">
                        Open a Professional Account today and experience premium
                        trading at its finest!
                    </p>
                </div>
            </div>
        </section>
    );
};
export const LowSpreadAccountSection = () => {
    return (
        <section className="max-w-screen-md mx-auto text-center my-14">
            <h4 className="mb-2 text-sm font-semibold text-blue-500">
                Low Spread Account
            </h4>
            <h2 className="mb-4 text-4xl">Your Affordable Trading Solution</h2>
            <p className="mb-6 text-gray-700">
                The Duhani Capital Low Spread Account offers an excellent option
                for traders seeking competitive pricing without compromising on
                quality. This account type is ideal for those who want to trade
                efficiently and effectively.
            </p>
            <div className="w-full max-w-screen-xl mx-auto overflow-hidden rounded-3xl">
                <img
                    src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730656938/stock-market-day-trader-working-exchange-office-with-multi-monitor-setup-with-real-time-inves_322096292.htm_fromView_search_page_1_position_12_uuid_bffc4b99-5548-40fa-ae63-1ef82e4feb10_duvzei.png"
                    alt="Trader celebrating trading success"
                    className="object-cover w-full h-96"
                />
            </div>
        </section>
    );
};
export const ZeroSpreadAccountSection = () => {
    return (
        <section className="max-w-screen-xl mx-auto text-center my-14">
            <h4 className="mb-2 text-2xl text-left">
                Benefits of the Duhani Capital Standard Account
            </h4>
            <div className="grid grid-cols-4 gap-5 my-8">
                <div className="bg-[#F8F8F8] rounded-xl p-6">
                    <img
                        src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561233/Frame_25_irat6j.svg"
                        alt="Icon for Low Spread"
                    />
                    <div className="mt-8 space-y-3 text-start">
                        <h3 className="text-xl">Spread as Low as 0.6 Pips</h3>
                        <p className="text-sm text-gray-700">
                            Enjoy competitive pricing that maximizes your
                            trading potential.
                        </p>
                    </div>
                </div>

                <div className="bg-[#F8F8F8] rounded-xl p-6">
                    <img
                        src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561226/Frame_22-2_eg3yhb.svg"
                        alt="Icon for No Commission"
                    />
                    <div className="mt-8 space-y-3 text-start">
                        <h3 className="text-xl">No Commission</h3>
                        <p className="text-sm text-gray-700">
                            Trade without the burden of additional transaction
                            fees.
                        </p>
                    </div>
                </div>

                <div className="bg-[#F8F8F8] rounded-xl p-6">
                    <img
                        src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561231/Frame_22_h17eaj.svg"
                        alt="Icon for Swap Free"
                    />
                    <div className="mt-8 space-y-3 text-start">
                        <h3 className="text-xl">Swap Free</h3>
                        <p className="text-sm text-gray-700">
                            Benefit from our swap-free trading options for added
                            flexibility.
                        </p>
                    </div>
                </div>
                <div className="bg-[#F8F8F8] rounded-xl p-6">
                    <img
                        src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561231/Frame_22_h17eaj.svg"
                        alt="Icon for Swap Free"
                    />
                    <div className="mt-8 space-y-3 text-start">
                        <h3 className="text-xl">No Minimum Deposit</h3>
                        <p className="text-sm text-gray-700">
                            Start trading without financial barriers, making it
                            accessible for everyone.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const ZeroSpreadConsideration = () => {
    return (
        <section className="max-w-screen-xl mx-auto my-24 text-center">
            <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
                {/* Image */}
                <div className="w-full md:w-1/2">
                    <img
                        src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730657249/laptop-phone-woman2_silomo.png"
                        alt="Trader with tablet"
                        className="object-cover w-full h-96 rounded-3xl"
                    />
                </div>
                {/* List */}
                <div className="w-full md:w-1/2 text-start">
                    <h2 className="mb-4 text-4xl font-semibold">
                        Who Should Consider a Low Spread Account?
                    </h2>
                    <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start">
                            <StarIcon className="mt-1 mr-2 text-blue-500" />
                            <div>
                                <p className="text-xl font-semibold">
                                    Active Traders
                                </p>
                                <p>
                                    Perfect for those who trade frequently and
                                    demand the best pricing.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <StarIcon className="mt-1 mr-2 text-blue-500" />
                            <div>
                                <p className="text-xl font-semibold">
                                    Price-Conscious Investors
                                </p>
                                <p>
                                    Ideal for experienced traders seeking tight
                                    spreads and ready to manage commissions.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <StarIcon className="mt-1 mr-2 text-blue-500" />
                            <div>
                                <p className="text-xl font-semibold">
                                    Performance-Driven Traders
                                </p>
                                <p>
                                    Great for individuals focused on maximizing
                                    returns while minimizing costs.
                                </p>
                            </div>
                        </li>
                    </ul>
                    <div className="mt-10">
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
                                Unlock your trading potential today!
                            </a>
                        </Button>
                        <p className="mt-4 text-gray-600">
                            Open a Zero Spread Account with Duhani Capital and
                            <br />
                            trade with confidence!
                        </p>
                    </div>
                </div>
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
