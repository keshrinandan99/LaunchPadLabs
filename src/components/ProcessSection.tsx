import { ProcessCard } from "./ProcessCard"

const processSteps = [
  {
    number: "01",
    title: "Launch Call",
    description:
      "Kick off with a direct call with our founder. We clarify your idea, goals, and success metrics so we build exactly what investors and users will love",
    image: "/process1.png",
  },
  {
    number: "02",
    title: "Launch Plan",
    description:
      "We map your MVP blueprint and deliver a clear PRD defining features, flows, and timelines with zero fluff, zero surprises.",
    image: "/process2.png",
  },
  {
    number: "03",
    title: "Launch Sprint",
    description:
      "Our dev team moves fast daily updates, transparent progress, and agile feedback loops. You'll see your product take shape in real time.",
    image: "/process3.png",
  },
  {
    number: "04",
    title: "Launch Delivery",
    description:
      "Your MVP goes live — fully functional, tested, and ready for demos, users, or fundraising. We handle deployment and hosting so you focus on traction.",
    image: "/process4.png",
  },
  {
    number: "05",
    title: "Launch Support",
    description:
      "You get 4 weeks of free maintenance and optimization. We fix, tune, and upgrade ensuring your MVP runs smooth post-launch.",
    image: "/process5.png",
  },
]

export function ProcessSection() {
  return (
    <section className="w-full py-16 px-4 md:py-24 md:px-6">
      <div className="max-w-7xl mx-auto">
       
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-200 mb-6 shadow-md">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-sm font-medium text-blue-700">Our Process</span>
          </div>

          <h2 className="text-4xl font-jakarta md:text-4xl font-bold text-foreground mb-4 text-balance">The LaunchPad Process</h2>

          <p className="text-lg font-jakarta text-[#525252] max-w-2xl mx-auto text-balance">
            A transparent, founder-friendly journey from idea to live MVP in just{" "}
            <span className="font-semibold text-foreground">2 weeks</span>.
          </p>
        </div>

     
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, index) => (
            <ProcessCard
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              image={step.image}
              isLarge={index >= 3}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
