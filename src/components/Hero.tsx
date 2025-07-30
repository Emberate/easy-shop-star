import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/20 py-24 sm:py-32">
      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Premium Tech
            <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Simplified
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Discover cutting-edge technology that enhances your daily life. From wireless audio to smart devices, 
            we curate only the finest tech products.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="h-12 px-8">
              Shop Now
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8">
              View Collections
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-32 w-32 rounded-full bg-primary/10 blur-xl"></div>
      <div className="absolute top-1/3 right-1/4 h-24 w-24 rounded-full bg-primary-glow/10 blur-xl"></div>
    </section>
  );
};

export default Hero;