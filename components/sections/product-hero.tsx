import { LucideIcon } from 'lucide-react';

interface ProductHeroProps {
  icon: LucideIcon;
  name: string;
  tagline: string;
  description: string;
}

export function ProductHero({ icon: Icon, name, tagline, description }: ProductHeroProps) {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container-custom text-center text-text-inverse">
        <div className="w-20 h-20 bg-bg-surface/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Icon className="w-10 h-10" />
        </div>
        <h1 className="text-h1 lg:text-display-lg font-bold mb-4">{name}</h1>
        <p className="text-xl lg:text-2xl font-semibold mb-6">{tagline}</p>
        <p className="text-body-lg text-text-inverse/90 max-w-3xl mx-auto">{description}</p>
      </div>
    </section>
  );
}
