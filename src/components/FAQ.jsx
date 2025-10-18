import { Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";


const faqs = [
  {
    id: "item-1",
    question: "How long does it take to launch my MVP with LaunchPad Labs?",
    answer: "We specialize in speed. Most MVPs are launched in as little as 2-4 weeks, depending on complexity.",
  },
  {
    id: "item-2",
    question: "What exactly is included in the MVP package?",
    answer: "Our MVP package includes complete product design, development, testing, and deployment. We handle everything from initial wireframes to launch, ensuring your product is market-ready.",
  },
  {
    id: "item-3",
    question: "Do I need to have all my ideas finalized before starting?",
    answer: "Not at all! We work collaboratively with you throughout the process. Many successful products evolve during development as we validate assumptions and gather feedback.",
  },
  {
    id: "item-4",
    question: "How involved will I be during the development process?",
    answer: "You'll be as involved as you want to be. We provide regular updates and check-ins, but we handle the technical heavy lifting so you can focus on strategy and business development.",
  },
  {
    id: "item-5",
    question: "Can I scale my MVP into a full product later?",
    answer: "Absolutely! We build MVPs with scalability in mind. The architecture and code quality ensure smooth transition from MVP to full product as your user base grows.",
  },
];

export const FAQSection = () => {
  return (
    <section className="w-full min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--badge-background))] mb-6">
            <div className="w-2 h-2 rounded-full bg-[hsl(var(--badge-dot))]" />
            <span className="text-sm font-medium text-[hsl(var(--badge-foreground))]">FAQ</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Got Questions? We've Got Answers
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Simple explanations for your most important questions
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* FAQ Accordion */}
          <div className="lg:col-span-2">
            <Accordion type="single" collapsible defaultValue="item-1" className="space-y-4">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="bg-card rounded-xl border border-border shadow-[var(--shadow-sm)] px-6 py-2 data-[state=open]:shadow-[var(--shadow-md)] transition-shadow"
                >
                  <AccordionTrigger className="text-left text-base sm:text-lg font-medium text-foreground hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* CTA Card */}
          <div className="lg:col-span-1">
            <Card className="p-8 bg-card border border-border shadow-[var(--shadow-md)] rounded-xl sticky top-8">
              <div className="flex flex-col items-center text-center space-y-6">
                <img
                  src="/profileImg.png"
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover shadow-[var(--shadow-md)]"
                />
                <div>
                  <p className="text-muted-foreground mb-2">Still not sure?</p>
                  <h3 className="text-2xl font-bold text-foreground">Book a free call.</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Learn more about how we work and how we can help you and your startup.
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all">
                  <Phone className="w-4 h-4 mr-2" />
                  Book A Call
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
