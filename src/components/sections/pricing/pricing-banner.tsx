import { AnimateOnView } from '@/components/ui/motion/animate-on-view'
import { StaggerContainer } from '@/components/ui/motion/stagger'
import Container from '../../container'
import { PricingCard } from '../../ui/pricing-card'

const pricingPlans = [
    {
        id: 1,
        title: "Starter",
        description: "Everything you need to trade crypto and collect NFTs.",
        price: "$2",
        pricePeriod: "/month",
        features: [
            "0.5% trading fee on all swaps",
            "Self-custody wallet with hardware key support",
            "Instant swaps with gas optimization",
            "Token swaps at a 0.5% fee",
            "Unlimited watchlists and price alerts",
            "Cross-chain bridging at 0.8%",
        ],
        buttonText: "Get Started",
        buttonLink: "/pricing/starter",
        isHighlighted: false,
    },
    {
        id: 2,
        title: "Professional",
        description: "For creators and active traders launching their own collections.",
        price: "$5",
        pricePeriod: "/month",
        features: [
            "0.1% trading fee on all swaps",
            "Self-custody wallet with hardware key support",
            "Priority swaps with MEV protection",
            "Token swaps at a 0.1% fee",
            "Unlimited collections and allowlists",
            "Cross-chain bridging at 0.3%",
        ],
        buttonText: "Get Started Today!",
        buttonLink: "/pricing/professional",
        isHighlighted: true,
        backgroundImage: "/images/pricing/pricing-bg.webp",
    },
]

const PricingBanner = () => {

    return (
        <section className="hero-padding-top pb-20 bg-[url(/images/common/banner-gradient.webp)] bg-cover bg-center">
            <Container className="md:space-y-20 space-y-8">
                <StaggerContainer className="text-center md:max-w-[540px] max-w-sm mx-auto">
                    <AnimateOnView blur>
                        <h1
                            className="h1 mb-5"
                        >
                            Pricing that Match with you
                        </h1>
                    </AnimateOnView>
                    <AnimateOnView blur delay={0.2}>
                        <p
                            className=""
                        >
                            Start trading with zero platform fees, and unlock creator tools for just $5/month.
                        </p>
                    </AnimateOnView>
                </StaggerContainer>
                <StaggerContainer>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1058px] mx-auto">
                        {pricingPlans.map((plan, index) => (
                            <AnimateOnView
                                key={plan.id}
                                delay={index * 0.1}
                            >
                                <PricingCard
                                    title={plan.title}
                                    description={plan.description}
                                    price={plan.price}
                                    pricePeriod={plan.pricePeriod}
                                    features={plan.features}
                                    buttonText={plan.buttonText}
                                    buttonLink={plan.buttonLink}
                                    isHighlighted={plan.isHighlighted}
                                    backgroundImage={plan.backgroundImage}
                                />
                            </AnimateOnView>
                        ))}
                    </div>
                </StaggerContainer>
            </Container>
        </section>
    )
}

export default PricingBanner

