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
      "Live prices across 20+ chains",
      "NFT portfolio and floor price tracking",
      "Unlimited watchlists and price alerts",
      "Standard staking pools",
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
      "No-code NFT collection minting",
      "Gas-optimized batch transactions",
      "Creator royalties and allowlist tools",
      "Advanced on-chain analytics",
      "Priority access to new drops",
    ],
    buttonText: "Get Started Today!",
    buttonLink: "/pricing/professional",
    isHighlighted: true,
    backgroundImage: "/images/pricing/pricing-bg.webp",
  },
]

const Pricing = () => {

  return (
    <section className="py-12 md:py-[60px]">
      <Container className="space-y-8 md:space-y-20">
        <StaggerContainer className="text-center">
          <AnimateOnView blur>
            <h2
              className="h2 mb-5"
            >
              Pricing that Match with you
            </h2>
          </AnimateOnView>
          <AnimateOnView blur delay={0.2}>
            <p
              className="text-muted-foreground"
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

export default Pricing

