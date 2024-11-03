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
                <BlogCategoriesSection />
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
                        Market Analysis Blog
                    </h1>
                    <p className="text-lg">
                        Welcome to Duhani Capital's Market Analysis Blog! Dive
                        into expert insights, strategies, and the latest trends
                        in forex and beyond.
                    </p>
                </div>
            </section>
        </>
    );
};
export const BlogCategoriesSection = () => {
    return (
        <section className="max-w-screen-xl mx-auto my-14">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                {/* Left Sidebar for Categories */}
                <div>
                    <h2 className="mb-4 text-2xl font-semibold">
                        Blog Categories
                    </h2>
                    <ul className="space-y-3">
                        <li className="p-2 font-bold text-blue-500 bg-blue-100 rounded-md">
                            Forex News
                        </li>
                        <li className="text-gray-700">Technical Analysis</li>
                        <li className="text-gray-700">Fundamental Analysis</li>
                        <li className="text-gray-700">Trading Strategies</li>
                        <li className="text-gray-700">Market Outlook</li>
                        <li className="text-gray-700">Economic Events</li>
                    </ul>
                </div>

                {/* Blog Articles */}
                <div className="col-span-3 space-y-6">
                    {[1, 2, 3, 4, 5].map((post) => (
                        <div
                            className="flex gap-4 p-4 bg-white rounded-lg shadow-md"
                            key={post}
                        >
                            <img
                                src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730660058/Image-blog_f2crew.png"
                                alt="Blog post image"
                                className="object-cover rounded-lg h-46 w-96"
                            />
                            <div className="flex flex-col justify-between">
                                <div>
                                    <span className="p-1 text-xs font-semibold text-blue-500 bg-blue-100 rounded-md">
                                        Freelance
                                    </span>
                                    <h3 className="mt-2 text-xl font-semibold text-gray-800">
                                        Accenture on The Future of Payments and
                                        Financial Automation
                                    </h3>
                                    <p className="mt-1 text-gray-600">
                                        Nunc diam in integer massa nibh volutpat
                                        neque. Nascetur viverra integer arcu et
                                        ac sit. Diam massa risus consequat in ut
                                        sed ullamcorper...
                                    </p>
                                </div>
                                <div className="flex items-center mt-4 text-sm text-gray-500">
                                    <img
                                        src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730656938/stock-market-day-trader-working-exchange-office-with-multi-monitor-setup-with-real-time-inves_322096292.htm_fromView_search_page_1_position_12_uuid_bffc4b99-5548-40fa-ae63-1ef82e4feb10_duvzei.png"
                                        alt="Author"
                                        className="object-cover w-6 h-6 rounded-full"
                                    />
                                    <span className="ml-2">Soós Annamária</span>
                                    <span className="mx-2">•</span>
                                    <span>March 12, 2024</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col items-center mt-16">
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
                        Ready to Elevate Your Trading?
                    </a>
                </Button>
                <p className="max-w-md mt-4 text-center text-gray-600">
                    Stay ahead of the market and refine your strategies with
                    insights from Duhani Capital’s Market Analysis Blog.
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
