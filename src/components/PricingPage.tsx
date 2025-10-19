import { Check } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-jakarta font-medium text-gray-700">Pricing</span>
          </div>

          <h1 className="text-[34px] font-jakarta font-bold text-gray-900 mb-4 whitespace-nowrap w-[740px] h-[31px] ml-45 mb-5">
            Two ways to launch fast – and keep growing even faster
          </h1>

          <p className="text-[20px] whitespace-nowrap font-semi-bold font-jakarta text-gray-600 text-balance w-[463px] h-[31px] ml-85">
            Choose the perfect package to launch and grow your startup
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* MVP Development Card */}
          <div className="bg-[#F5F5F5] rounded-3xl p-8 border  shadow-lg bg-gray-50 p-4 border-gray-200   ">
            <div className="flex items-start justify-between mb-6">
              <div className="w-17 h-17 rounded-lg flex items-center justify-center  ">
                <img src="/rocket.png" alt="rocket" className="w-full h-full" />
              </div>
              <span className="text-xs font-jakarta font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">One Time</span>
            </div>

            <h2 className="text-2xl font-jakarta font-bold text-gray-900 mb-1">MVP Development</h2>
            <p className="text-gray-600 text-sm font-jakarta mb-6">MVP Development Package</p>

            <div className="mb-6">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-lg font-jakarta text-gray-400 line-through">$6500</span>
                <span className="text-4xl font-jakarta font-bold text-gray-900">$4997</span>
              </div>
              <p className="text-sm font-jakarta text-gray-600 italic">Complete MVP Delivered in just 2 weeks</p>
            </div>

            <button className="cursor-pointer w-full border-2 border-gray-300 text-gray-900 font-jakarta font-semibold py-3 px-6 rounded-full hover:bg-gray-50 transition mb-8">
              Book a Free MVP Call
            </button>

            {/* What's Included */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="font-jakarta font-semibold text-gray-900 mb-4">What's Included</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-jakarta">Full web or mobile MVP - built to scale</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-jakarta">Modern, reliable tech stack (AI-ready)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-jakarta">Seamless integrations (payments, auth, email, etc)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-jakarta">30 days of free post-launch support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-jakarta">Direct founder-led development & weekly updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-jakarta">Transparent progress tracking - no surprises</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Growth Retainer Package Card */}
          <div className="relative">
            <div className="absolute -top-4 right-8 bg-blue-500 text-white font-jakarta font-bold px-6 py-2 rounded-full text-sm">
              Most Popular
            </div>

            <div className="bg-white rounded-3xl p-8 border-2 border-blue-300 shadow-xl">
              <div className="flex items-start justify-between mb-6">
                <div className="w-10 h-10   rounded-lg flex items-center justify-center shadow-md">
                  <img src="/growth.png" alt="rocket" className="" />
                </div>
              </div>

              <h2 className="text-2xl font-jakarta font-bold text-gray-900 mb-1">Growth Retainer Package</h2>
              <p className="text-gray-600 text-sm font-jakarta mb-6">Continuous Growth Package</p>

              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-lg font-jakarta text-gray-400 line-through">$5000/m</span>
                  <span className="text-4xl font-jakarta font-bold text-gray-900">$3997</span>
                  <span className="text-gray-600 font-jakarta font-semibold">/m</span>
                </div>
                <p className="text-sm font-jakarta text-gray-600 italic">No long-term commitment–cancel anytime</p>
              </div>

              <button className="cursor-pointer w-full bg-blue-500 text-white font-jakarta font-semibold py-3 px-6 rounded-full hover:bg-blue-600 transition mb-8">
                Book My MVP Build
              </button>

              {/* Monthly Services */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-jakarta font-semibold text-gray-900 mb-4">Monthly Services:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-jakarta">60 hours of flexible dev time monthly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-jakarta">Priority feature updates & bug fixes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-jakarta">Weekly strategy + product calls</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-jakarta">Continuous performance optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-jakarta">Same-day emergency support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-jakarta">Cancel anytime - zero hassle</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
