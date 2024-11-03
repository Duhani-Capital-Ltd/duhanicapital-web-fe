import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Navbar } from '@/Components/nav/Nav';
import { Hero } from '@/Components/hero/Hero';
import { Feature } from '@/Components/feature/Feature';
import { VarietyOfAccounts } from '@/Components/varietyOfAccounts/VarietyOfAccount';
import { Benefit } from '@/Components/Benefit/Benefit';
import { VarietyOfAccountOption } from '@/Components/varietyOfAccountOption/VarietyOfAccountOption';
import { PaymentSystemPartners } from '@/Components/paymentSystemPartners/PaymentSystemPartners';
import { Footer } from '@/Components/footer/Footer';

export default function Index({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    return (
        <>
            <section className=''>
                <Navbar />
                <Hero />
                <Feature/>
                <VarietyOfAccounts/>
                <Benefit/>
                <VarietyOfAccountOption/>
                <PaymentSystemPartners/>
                <Footer/>
            </section>
        </>
    );
}
