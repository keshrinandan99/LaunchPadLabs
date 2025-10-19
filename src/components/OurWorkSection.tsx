

import { ArrowUpRight } from "lucide-react"


interface Project {
  id: string
  title: string
  description: string
  image: string
  link?: string
}

interface OurWorkSectionProps {
  projects?: Project[]
}

const defaultProjects: Project[] = [
  {
    id: "fitai",
    title: "FitAI",
    description: "Transform Your Home Workouts",
    image: "/p2.png",
  },
  {
    id: "finsub",
    title: "FinSub",
    description: "Subscription management for fintech companies",
    image: "/p3.png",
  },
  {
    id: "billflow",
    title: "BillFlow",
    description: "Smart invoicing for freelancers",
    image: "/p4.png",
  },
  {
    id: "finsu",
    title: "FinSu",
    description: "Financial management tools",
    image: "/p2.png",
  },
]

export function OurWorkSection({ projects = defaultProjects }: OurWorkSectionProps) {
  return (
    <section className="w-full bg-[#F5F5F5] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
      
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-blue-500" />
            <span className="text-sm font-medium text-foreground">Our Work</span>
          </div>

         
          <h2 className="text-balance text-3xl font-jakarta font-bold tracking-tight text-foreground md:text-3xl lg:text-5xl">
            Every product here went from idea to live in 2 weeks
          </h2>

          <p className="text-lg text-jakarta text-[#525252]">Built, launched, and loved by real users</p>
        </div>

       
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link || "#"}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:border-primary"
            >
              
              <div className="relative h-50 w-full overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                 
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

             
              <div className=" flex flex-row">
              <div className="flex flex-1 items-center justify-between p-2">
                <div className="">
                  <h3 className="text-md text-jakarta font-semibold text-[#404040]">{project.title}</h3>
                
                </div>

              
                <div className="flex items-center justify-end">
                  <div className="rounded-lg bg-muted  transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
