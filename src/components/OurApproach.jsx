export default function OurApproach() {
  return (
    <section className="w-full bg-[#F3F7F8] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8 sm:mb-12 lg:mb-16 flex flex-col items-center gap-4 sm:gap-6 text-center">
          <img 
            src="div.png" 
            alt="ourWorkImg" 
            className="w-auto h-auto max-w-full"
          />
          
          <h2 className="font-jakarta font-semibold tracking-tight text-gray-900 text-xl sm:text-2xl md:text-3xl lg:text-[28px] px-4 sm:px-0 max-w-2xl">
            Why founders launch faster with LaunchPad labs
          </h2>
        </div>

        {/* Images Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
          <img 
            src="OA1.png" 
            alt="OAImg" 
            className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
          />
          <img 
            src="OA2.png" 
            alt="OAImg"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}