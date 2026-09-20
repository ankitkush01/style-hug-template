import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { Newsletter } from "@/components/ui/newsletter";
import { CryptoCoinScene } from "./crypto-coin-scene";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden hero-padding-top pb-10 md:pb-0 bg-[url(/images/home/hero-bg.webp)] bg-cover bg-center">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <StaggerContainer>
            <AnimateOnView
              blur
            >
              <h1
                className="h1 text-foreground mb-4"
              >
                Trade Crypto and Mint NFTs in One Place
              </h1>
            </AnimateOnView>

            <AnimateOnView
              blur
              delay={0.2}
            >
              <p
                className="text-body-md max-w-2xl mx-auto mb-5"
              >
                Buy, swap and stake tokens, launch NFT collections, and track every wallet from a single dashboard.
              </p>
            </AnimateOnView>

            <AnimateOnView
              className="flex items-center justify-center mb-16"
              delay={0.3}
            >
              <Newsletter />
            </AnimateOnView>
          </StaggerContainer>

          <AnimateOnView delay={0.15} className="relative mx-auto w-full max-w-[960px]">
            <CryptoCoinScene />
          </AnimateOnView>
        </div>
      </div>
    </section>
  );
};

export default Hero;
