import { Button } from "@/components/ui/button";

export const Hero = () => {
    return (
        <>
            <section
                className="mt-20"
                style={{
                    backgroundImage: `url('https://res.cloudinary.com/dnsekavtx/image/upload/v1730561236/Hero_Background_Home_cewmzf.png')`,
                    backgroundSize: "cover", // untuk memastikan gambar memenuhi seluruh area
                    backgroundPosition: "center", // untuk posisi gambar di tengah
                    height: "74vh", // contoh untuk mengatur tinggi background
                }}
            >
                <div className="flex justify-between max-w-screen-xl mx-auto">
                    <div className="flex flex-col">
                        <div className="w-[80%] mt-20">
                            <p className="px-3 py-1 mb-2 border rounded-full shadow-sm w-fit">
                                Trade CFDs and Forex on a Single Platform
                            </p>
                            <h1 className="text-6xl leading-[1.1em] mb-2">
                                Explore the World of CFDs and FX Trading with
                                Duhani Capital
                            </h1>
                            <p>
                                Discover the market’s potential with us. Click
                                here to open your trading account and embark on
                                your journey. It’s simple. Start now and tailor
                                your trading experience to meet your financial
                                goals.
                            </p>
                            import Link from "next/link";
                            <Button
                                variant="link"
                                className="p-6 mt-10 rounded-full w-fit text-md"
                                style={{
                                    backgroundColor: "#126DFF",
                                    color: "white",
                                    textDecoration: "none",
                                }}
                            >
                                <a
                                    href="/your-target-page"
                                    className="text-white"
                                >
                                    Open an Account
                                </a>
                            </Button>
                        </div>
                    </div>
                    <div className="">
                        <img
                            className="max-w-lg float-end"
                            src="https://res.cloudinary.com/du0tz73ma/image/upload/v1730603468/hero_nxnnxd.png"
                            alt=""
                        />
                    </div>
                </div>
            </section>
        </>
    );
};
