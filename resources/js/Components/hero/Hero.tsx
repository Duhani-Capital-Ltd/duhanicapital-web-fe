import { Button } from "@/components/ui/button";

export const Hero = () => {
    return (
        <>
            <section
                className="mt-20"
                style={{
                    backgroundImage: `url('https://res.cloudinary.com/dnsekavtx/image/upload/v1730561236/Hero_Background_Home_cewmzf.png')`,
                    backgroundSize: 'cover', // untuk memastikan gambar memenuhi seluruh area
                    backgroundPosition: 'center', // untuk posisi gambar di tengah
                    height: '74vh', // contoh untuk mengatur tinggi background
                }}
            >
                <div className="flex max-w-screen-xl mx-auto justify-between">
                    <div className="flex flex-col">
                        <div className="w-[80%] mt-20">
                            <p className="rounded-full shadow-sm w-fit px-3 py-1 border mb-2">Tarde CFDs and Forex on a Single Platform</p>
                            <h1 className="text-6xl leading-[1.1em] mb-2">Explore The World of CFDs and FX Trading with Duhani Capital</h1>
                            <p>Discover the market's potential with us. Click here to open your trading account and embark on your journey. it's simple. Start now and tailor your trading experince to meet your financial goals</p>
                            <Button className="w-fit rounded-full p-6 text-md mt-10">Open an Account</Button>
                        </div>
                    </div>
                    <div className="">
                        <img className="max-w-lg float-end" src="https://res.cloudinary.com/du0tz73ma/image/upload/v1730603468/hero_nxnnxd.png" alt="" />
                    </div>
                </div>

            </section>
        </>
    );
};
