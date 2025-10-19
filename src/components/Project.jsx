import {Card} from './Card' 

const tags=[
  "UI/UX",
  "Web Developement",
  "Mobile App"
]
const title="FitAI"
const description="FitAI brings personalized, AI-powered home workouts to your fingertips — tailored plans, real-time guidance, and progress tracking to help you stay fit anytime, anywhere."

const img="/project.png"
const imgalt='projectImg'

function Project() {
  return (
    <div className='w-full'>
      <img src='ourWork1.png' alt='ourWorkImg' className='w-full h-auto'/>
      <div className='w-full bg-[#F3F7F8] '>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8'>
        <Card
          tags={tags}
          title={title}
          description={description}
          imageUrl={img}
          imageAlt={imgalt}
        />
        <Card
          tags={tags}
          title={title}
          description={description}
          imageUrl={img}
          imageAlt={imgalt}
        />
        <Card
          tags={tags}
          title={title}
          description={description}
          imageUrl={img}
          imageAlt={imgalt}
        />
      </div>
      
      <img src='ourWork3.png' alt='ourWorkfooterImg' className='w-full h-auto mt-8 sm:mt-12 lg:mt-20'/>
    </div>
    </div>
  )
}

export default Project