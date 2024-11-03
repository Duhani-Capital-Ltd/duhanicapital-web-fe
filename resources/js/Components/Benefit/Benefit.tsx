

export const Benefit = () => {
    return (
        <>
            <section className="max-w-screen-xl mx-auto">
                <div
                    className="grid grid-cols-3 rounded-3xl my-20 items-center"
                    style={{
                        backgroundImage: `url('https://res.cloudinary.com/dnsekavtx/image/upload/v1730561233/CTA_Background_Desktop_yask6z.png')`,
                        backgroundSize: 'cover', // untuk memastikan gambar memenuhi seluruh area
                        backgroundPosition: 'center', // untuk posisi gambar di tengah
                    }}
                >
                    <div className="col-span-1 px-5 py-10">
                        <img className="w-56 mx-auto" src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561234/KV_CTA_lu0uyu.svg" alt="" />
                    </div>
                    <div className="col-span-2 space-y-4 text-white">
                        <h3 className="text-4xl">Negative Balance Protection</h3>
                        <p className="w-[65%]">Never worry about losing more than your investment. Our Negative Balance Protection resets your account to zero if it goes negative, keeping your risk limited and your trading safe.</p>
                    </div>
                </div>
            </section>
        </>
    )
}
