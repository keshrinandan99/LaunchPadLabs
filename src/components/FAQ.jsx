import { Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
//import { BookCallButton } from "@/components/BookCallButton";
import { Card } from "@/components/ui/card";
import { BookCallButton } from "./BookCallButton";

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
    <section className="w-full min-h-screen  py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--badge-background))] mb-6">
            <div className="w-2 h-2 rounded-md " />
            <img src="faqrounded.png" alt="faqImg" className="p-.5 rounded-xl bg-blue-100 "/>
          </div>
          <h1 className="text-[#202020] text-4xl sm:text-5xl font-semibold  mb-4 font-jakarta">
            Got Questions? We've Got Answers
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl text-[#616161] font-medium font-jakarta">
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
                  <AccordionTrigger className="text-left text-base sm:text-lg font-medium text-foreground hover:no-underline py-6 text-[#404040] font-medium font-jakarta">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 pt-2 text-[#616161] font-medium font-jakarta">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* CTA Card */}
          <div className="lg:col-span-1">
            <Card className="p-5  border border-border shadow-[var(--shadow-md)] rounded-xl relative top-8   ">
              <div className="flex flex-col items-start text-left space-y-3">
                <img
                  src="/profileImg.png"
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover shadow-[var(--shadow-md)]"
                />
                <div>
                  <p className="text-[#8C8C8C] mb-1 font-jakarta font-bold text-lg flex ">Still not sure?</p>
                  <h3 className="text-[20px] font-semibold font-jakarta text-black">Book a free call.</h3>
                </div>
                <p className="text-sm text-black font-jakarta font-regular">
                  Learn more about how we work and how we can help you and your startup.
                </p>
                <BookCallButton />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
