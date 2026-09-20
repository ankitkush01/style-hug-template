import Layout from "@/components/layout";
import PricingDetailsHero from "@/components/sections/pricing/pricing-details-hero";
import FAQ from "@/components/sections/shared/faq";

const StarterPricing = () => {
    return (
        <Layout>
            <PricingDetailsHero
                heading="Starter Plans"
                subheadline="Start trading with zero platform fees, and unlock creator tools for just $5/month."
                aboutText="We've got you covered with everything from smart consulting to cutting-edge digital solutions, all about quality. Dive into digital transformation and get ready for the future! CryptoSync makes life easier. The dashboard shows me my on-chain health in a snap, and the automation features take the hassle out of budgeting."
                features={[
                    "0.1% trading fee on all swaps",
                    "Self-custody wallet with hardware key support",
                    "Same-day ACH transfers for only $0,5",
                    "Token swaps at a 0.1% fee",
                    "Unlimited collections and allowlists",
                    "Cross-chain bridging at 0.3%"
                ]}
                planName="Starter"
                price="$5"
                cardDescription="Customize your business journey effortlessly with Paymaker dashboard."
            />
            <FAQ />
        </Layout>
    );
};

export default StarterPricing;