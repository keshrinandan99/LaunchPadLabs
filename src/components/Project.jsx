
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
    <div>

    <img src='ourWork1.png' alt='ourWorkImg'/>
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
        <img src='ourWork3.png' alt='ourWorkfooterImg'/>
    </div>
  )
}

export default Project