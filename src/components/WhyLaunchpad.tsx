import { Card } from "@/components/ui/card"

export function WhyLaunchpad() {
  const features = [
    {
      title: "MVP Package",
      description: "Everything you need SaaS, web app, or landing page build and launch-ready in 2 weeks.",
      image: "/w1.png",
    },
    {
      title: "Integrations",
      description:
        "Payments, logins, emails & more. We connect everything so you're ready to onboard users from day one.",
      image: "/w2.png",
    },
    {
      title: "Modern Stack",
      description: "Built with the latest tech and AI delivering speed, stability, and scalability for real growth.",
      image: "/w3.png",
    },
  ]

  return (
    <section className="w-full py-16 px-4 md:py-24 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-200">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-sm font-medium text-gray-700">Why LaunchPad Labs</span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-jakarta md:text-3xl font-bold text-center mb-6 text-foreground">
          <span className="text-balance">Built faster Built smarter Built by founders</span>
        </h2>

        {/* Description */}
        <p className="text-center text-[#525252] font-jakarta text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
          MVPs built faster, smarter, and better – by founders who've done it before. We turn your idea into a
          launch-ready product in just <span className="font-semibold text-foreground">2 weeks</span>, using modern tech
          and proven systems trusted by <span className="font-semibold text-foreground">50+ funded startups</span>.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 bg-white border-gray-200 hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="mb-6 h-40 rounded-lg overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}