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
                <AboutUs />
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
                        Welcome to Duhani Capital
                        <br />
                        Your Trusted Partner in Global Trading
                    </h1>
                    <p className="text-lg">
                        At Duhani Capital, we empower traders at all levels with
                        accessible, secure, and innovative trading solutions.
                        From demo accounts for beginners to advanced tools for
                        professionals, we provide a client-focused platform to
                        navigate global markets with confidence and ease. Join
                        us in revolutionizing the trading experience.
                    </p>
                </div>
            </section>
        </>
    );
};

export const AboutUs = () => {
    return (
        <section className="max-w-screen-xl px-4 py-16 mx-auto space-y-12 md:space-y-20">
            <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
                {/* Left Side: Text Content */}
                <div className="text-center md:text-left">
                    <h2 className="text-4xl font-bold text-gray-800">
                        About Us
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        At Duhani Capital, we are committed to providing a
                        seamless trading experience to traders of all levels.
                        Our platform offers a wide range of trading options
                        tailored to meet the needs of both beginners and
                        seasoned professionals. We focus on accessibility,
                        innovation, and empowering our clients with the tools
                        they need for successful trading.
                    </p>
                </div>

                {/* Right Side: Image */}
                <div className="flex justify-center md:justify-end">
                    <img
                        src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730661263/Menara-TM-5_kx1q8t.jpg" // Ganti URL_GAMBAR_GEDUNG dengan URL gambar gedung yang ingin digunakan
                        alt="Duhani Capital Building"
                        className="w-full rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Our Story Section */}
            <div className="grid items-start max-w-screen-xl grid-cols-1 gap-8 mx-auto mb-16 md:grid-cols-2">
                <div className="flex flex-col">
                    <h3 className="mb-4 text-3xl font-semibold text-black">
                        Our Story
                    </h3>
                    <img
                        src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730661941/1000147350_njcpnv.jpg"
                        alt="Our Story Image"
                        className="w-full shadow-md rounded-xl"
                    />
                </div>
                <div>
                    <p className="text-lg leading-relaxed text-gray-700 mt-11">
                        Founded with a vision to revolutionize online trading,
                        Duhani Capital was born out of a passion for finance and
                        technology. Our journey began with a small team of
                        dedicated professionals who believed in the power of
                        innovative solutions. Over the years, we have grown into
                        a global broker, trusted by thousands of traders from
                        all corners of the world. Our story is one of continuous
                        improvement, driven by a commitment to excellence and a
                        focus on our clients' success.
                        <br />
                        <br />
                        From our humble beginnings, we have always prioritized
                        the needs of our clients, striving to provide a platform
                        that is both robust and intuitive. Our dedication to
                        innovation has led us to integrate the latest
                        technological advancements, ensuring our clients have
                        access to the best trading tools and resources.
                        <br />
                        <br />
                        Today, Duhani Capital stands as a testament to what can
                        be achieved with a clear vision, unwavering dedication,
                        and a client-centric approach. As we look to the future,
                        we remain committed to our founding principles, always
                        seeking new ways to enhance the trading experience and
                        support our clients in their journey to financial
                        success.
                    </p>
                </div>
            </div>

            {/* Our Mission and Our Purpose Section */}
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
                <div
                    className="p-8 rounded-lg shadow-sm text-gray-50"
                    style={{
                        backgroundImage: `url('https://res.cloudinary.com/dnsekavtx/image/upload/v1730561236/Hero_Background_Home_cewmzf.png')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <h3 className="mb-4 text-3xl font-semibold text-black">
                        Our Mission
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-700">
                        At Duhani Capital, our mission is to empower traders
                        with the tools, knowledge, and support needed to
                        navigate global financial markets confidently. We are
                        committed to providing a secure, reliable, and
                        user-friendly trading platform that caters to both
                        beginners and seasoned professionals.
                        <br />
                        <br />
                        Our goal is to foster financial growth and success for
                        our clients worldwide. We aim to build long-lasting
                        relationships with our clients by offering unparalleled
                        customer service, advanced trading technologies, and
                        continuous educational resources to enhance their
                        trading experience.
                    </p>
                </div>

                {/* Our Purpose */}
                <div
                    className="p-8 text-white rounded-lg shadow-sm"
                    style={{
                        backgroundImage: `url('https://res.cloudinary.com/dnsekavtx/image/upload/v1730561233/CTA_Background_Desktop_yask6z.png')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <h3 className="mb-4 text-3xl font-semibold text-white">
                        Our Purpose
                    </h3>
                    <p className="text-lg leading-relaxed">
                        Our purpose at Duhani Capital is to democratize access
                        to global financial markets, ensuring that everyone has
                        the opportunity to invest and trade with transparency,
                        integrity, and fairness. We strive to bridge the gap
                        between sophisticated trading technology and
                        user-centric service, making financial markets more
                        accessible and understandable for all.
                        <br />
                        <br />
                        By promoting financial literacy and providing
                        cutting-edge tools, we aim to empower individuals to
                        take control of their financial future and achieve their
                        investment goals.
                    </p>
                </div>
            </div>
            <hr id="contactUs" />
            {/* Contact Us Section */}
            <div className="max-w-screen-xl px-6 mx-auto mt-16 text-center">
                <h2 className="text-4xl font-bold text-gray-800">
                    How to Reach Us
                </h2>
                <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
                    Our dedicated customer support team is readily available to
                    assist you.
                </p>

                <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Live Chat */}
                    <div className="flex flex-col items-center p-6 text-center bg-white rounded-lg shadow-md">
                        <div className="p-4 mb-4 bg-blue-500 rounded-full">
                            <svg
                                className="w-8 h-8 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M20 13V5a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h6l4 4 4-4h0a2 2 0 002-2z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">
                            Live Chat
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Engage with our live chat representatives 24/5 for
                            quick and efficient troubleshooting.
                        </p>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col items-center p-6 text-center bg-white rounded-lg shadow-md">
                        <div className="p-4 mb-4 bg-blue-500 rounded-full">
                            <svg
                                className="w-8 h-8 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zM3 8l7.39 5.26a2 2 0 002.22 0L20 8"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">
                            Email
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Reach out to our support team via email at{" "}
                            <a
                                href="mailto:support@duhanicapital.com"
                                className="text-blue-500 hover:underline"
                            >
                                support@duhanicapital.com
                            </a>{" "}
                            and expect a prompt response.
                        </p>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col items-center p-6 text-center bg-white rounded-lg shadow-md">
                        <div className="p-4 mb-4 bg-blue-500 rounded-full">
                            <svg
                                className="w-8 h-8 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 5h18M3 12h18m-8 7h8"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">
                            Phone
                        </h3>
                        <p className="mt-2 text-gray-600">
                            For direct assistance, call us at +355 52 420 144.
                            Our phone lines are accessible Monday-Friday, 9:00
                            AM to 5:00 PM GMT.
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
