import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Card = ({
  title,
  description,
  tags,
  imageUrl,
  imageAlt,
  onViewClick,
}) => {
  return (
    <article className="bg-card rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-border">
      <div className="grid md:grid-cols-2 gap-6 p-8 md:p-10">
        {/* Left Content */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {title}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              {description}
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-1.5 text-sm rounded-full"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <Button
              variant="outline"
              size="lg"
              onClick={onViewClick}
              className="group rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              View Case Study
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-64 md:h-full min-h-[300px] rounded-xl overflow-hidden bg-muted">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </article>
  );
};


