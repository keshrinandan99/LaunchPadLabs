interface ProcessCardProps {
    number: string
    title: string
    description: string
    image: string
    isLarge?: boolean
  }
  
  export function ProcessCard({ number, title, description, image, isLarge = false }: ProcessCardProps) {
    return (
        <div
          className={`group relative overflow-hidden rounded-2xl border border-blue-100 transition-all duration-300 hover:shadow-lg hover:border-blue-200 md:w-[360px] md:h-[418px] ${isLarge ? "md:col-span-1" : ""}`}
        >
        
          <div className="absolute inset-0">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
    
     
          <div className="relative z-10 flex flex-col h-full p-6">
            {/* Number Badge */}
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 text-white font-bold text-sm mb-4">
              {number}
            </div>
    
           
            <h3 className="text-xl font-jakarta font-bold text-foreground mb-3">{title}</h3>
    
          
            <p className="text-sm font-jakarta text-regular text-muted-foreground leading-relaxed">{description}</p>
          </div>
    
        
          <div className="absolute inset-0 rounded-2xl border border-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
      )
  }