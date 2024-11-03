import { Button } from "@/components/ui/button";

export const PaymentSystemPartners = () => {
    return (
        <>
            <section className="max-w-screen-xl py-20 mx-auto text-center">
                <h2 className="text-3xl text-center">Working With the Best</h2>
                <div className="grid grid-cols-1 gap-6 px-4 mt-8 md:grid-cols-4">
                    {[
                        {
                            src: "https://res.cloudinary.com/dnsekavtx/image/upload/v1730561234/image_14_srs0oe.png",
                            text: "Instant online bank transfer with no fees",
                            marginTop: "mt-5",
                        },
                        {
                            src: "https://res.cloudinary.com/dnsekavtx/image/upload/v1730561234/image_15_snuxma.png",
                            marginTop: "mt-7",
                            text: "Instant deposits with Visa at no cost.",
                        },
                        {
                            src: "https://res.cloudinary.com/dnsekavtx/image/upload/v1730561234/image_16_zugyne.png",
                            marginTop: "mt-3",
                            text: "Instant deposits with Mastercard at no cost.",
                        },
                        {
                            src: "https://res.cloudinary.com/dnsekavtx/image/upload/v1730561234/image_17_wdbliv.png",
                            marginTop: "mt-3",
                            text: "Instant local bank transfers with no fees.",
                        },
                        {
                            src: "https://res.cloudinary.com/dnsekavtx/image/upload/v1730561235/image_18_ulvi4w.png",
                            marginTop: "mt-12",
                            text: "Instant online bank transfer with no fees",
                        },
                        {
                            src: "https://res.cloudinary.com/dnsekavtx/image/upload/v1730561235/image_19_wzadsc.png",
                            marginTop: "mt-11",
                            text: "Instant Perfect Money Transfers with no cost.",
                        },
                        {
                            src: "https://res.cloudinary.com/dnsekavtx/image/upload/v1730561235/Frame_jlg1uf.png",
                            marginTop: "mt-3",
                            text: "Instant QR deposits with no fees.",
                        },
                        {
                            src: "https://res.cloudinary.com/dnsekavtx/image/upload/v1730561235/Frame-1_qsqevn.png",
                            marginTop: "mt-3",
                            text: "Instant e-wallets deposit with no fees.",
                        },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-[#f8f8f8] flex flex-col items-center rounded-md p-6 text-center"
                        >
                            <img className="w-16 mb-4" src={item.src} alt="" />
                            <p
                                className={`text-lg font-normal text-gray-700 ${item.marginTop}`}
                            >
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>

                <Button
                    variant="link"
                    className="p-6 mt-10 rounded-full w-fit text-md"
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
            </section>
        </>
    );
};
