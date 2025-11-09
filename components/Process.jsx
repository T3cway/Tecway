import { TrendingDown, BarChart3, DollarSign, Send } from "lucide-react";

const Process = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-6xl font-light text-center mb-16 text-balance">
          Our Process
        </h1>

        {/* Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
          {/* Step 01 - Evaluate */}
          <div className="bg-[#0C0C0D] border border-zinc-800 rounded-lg overflow-hidden">
            {/* Accent bar */}
            <div className="h-1.5 bg-gradient-to-r from-amber-900 to-orange-800" />

            <div className="p-8">
              <div className="text-sm text-zinc-400 mb-4">{"{ Step 01 }"}</div>

              <h2 className="text-3xl font-light mb-4">Evaluate</h2>

              <p className="text-zinc-400 mb-8 leading-relaxed">
                We start by understanding your business goals and challenges to
                define the right digital solution.
              </p>

              {/* Metrics */}
              <div className="space-y-3 mb-8">
                <div className="flex gap-3">
                  <div className="bg-zinc-900 border border-zinc-800 rounded-full px-4 py-1.5 text-sm">
                    Revenue <span className="text-green-400 ml-2">+6%</span>
                  </div>
                  <div className="bg-zinc-900 border border-zinc-800 rounded-full px-4 py-1.5 text-sm">
                    Productivity <span className="text-red-400 ml-2">-4%</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-zinc-900 border border-zinc-800 rounded-full px-4 py-1.5 text-sm">
                    Sales <span className="text-green-400 ml-2">+7%</span>
                  </div>
                  <div className="bg-zinc-900 border border-zinc-800 rounded-full px-4 py-1.5 text-sm">
                    Costs <span className="text-green-400 ml-2">+3%</span>
                  </div>
                </div>
              </div>

              {/* Placeholder boxes */}
              {/* <div className="grid grid-cols-3 gap-3">
                <div className="aspect-square bg-zinc-900 rounded-lg" />
                <div className="aspect-square bg-zinc-900 rounded-lg" />
                <div className="aspect-square bg-zinc-900 rounded-lg" />
              </div> */}

            </div>
          </div>

          {/* Step 02 - Develop */}
          <div className="bg-[#0C0C0D] border border-zinc-800 rounded-lg overflow-hidden">
            {/* Accent bar */}
            <div className="h-1.5 bg-gradient-to-r from-amber-900 to-orange-800" />

            <div className="p-8">
              <div className="text-sm text-zinc-400 mb-4">{"{ Step 02 }"}</div>

              <h2 className="text-3xl font-light mb-4">Develop</h2>

              <p className="text-zinc-400 mb-8 leading-relaxed">
                We build reliable web apps, mobile apps, landing pages, and
                intelligent tools tailored to your needs.
              </p>

              {/* Service tags - scattered layout */}
              <div className="space-y-3 mb-8">

                <div className="flex flex-wrap gap-2">
                  <div className="bg-zinc-900 border border-zinc-800 rounded px-3 py-1.5 text-xs flex items-center gap-2">
                    <span className="text-zinc-500">🖥️</span> landing pages
                  </div>
                  <div className="bg-zinc-900 border border-zinc-800 rounded px-3 py-1.5 text-xs flex items-center gap-2">
                    <span className="text-zinc-500">💻</span> Web Apps
                  </div>
                  <div className="bg-zinc-900 border border-zinc-800 rounded px-3 py-1.5 text-xs flex items-center gap-2">
                    <span className="text-zinc-500">📱</span> Mobile App
                  </div>
                  <div className="bg-zinc-900 border border-zinc-800 rounded px-3 py-1.5 text-xs flex items-center gap-2">
                    <span className="text-zinc-500">💻</span> UI/UX 
                  </div>
                  
                </div>


                <div className="flex flex-wrap gap-2">
                  <div className="bg-zinc-900 border border-zinc-800 rounded px-3 py-1.5 text-xs flex items-center gap-2">
                    <span className="text-zinc-500">⚡</span> Workflow
                    automation
                  </div>
                  <div className="bg-zinc-900 border border-zinc-800 rounded px-3 py-1.5 text-xs flex items-center gap-2">
                    <span className="text-zinc-500">💬</span> AI chatbots
                  </div>
                  <div className="bg-zinc-900 border border-zinc-800 rounded px-3 py-1.5 text-xs flex items-center gap-2">
                    <span className="text-zinc-500">✉️</span> Email automation
                  </div>
                </div>
             
              </div>

              {/* Input field */}
              {/* <div className="relative">
                <input
                  type="text"
                  placeholder="Everything for your busin"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-400 placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-700"
                  readOnly
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2">
                  <Send className="w-4 h-4 text-zinc-400" />
                </button>
              </div> */}
            </div>
          </div>

          {/* Step 03 - Growth */}
          <div className="bg-[#0C0C0D] border border-zinc-800 rounded-lg overflow-hidden">
            {/* Accent bar */}
            <div className="h-1.5 bg-gradient-to-r from-amber-900 to-orange-800" />

            <div className="p-8">
              <div className="text-sm text-zinc-400 mb-4">{"{ Step 03 }"}</div>

              <h2 className="text-3xl font-light mb-4">Growth</h2>

              <p className="text-zinc-400 mb-8 leading-relaxed">
                After launch, we optimize performance, provide support, and
                scale your solution as your business evolves.
              </p>

              {/* Metrics with icons */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-2.5">
                    <BarChart3 className="w-5 h-5 text-zinc-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-base font-medium mb-1">
                      Productivity
                    </div>
                    <div className="text-sm text-green-400">
                      78.3%{" "}
                      <span className=" text-zinc-500">Up from past week</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-2.5">
                    <TrendingDown className="w-5 h-5 text-zinc-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-base font-medium mb-1">Costs</div>
                    <div className="text-sm text-green-400">
                      3.3%{" "}
                      <span className="text-zinc-500">
                        Down from past week
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-2.5">
                    <DollarSign className="w-5 h-5 text-zinc-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-base font-medium mb-1">Revenue</div>
                    <div className="text-sm text-green-400">
                      23.4%{" "}
                      <span className="text-zinc-500">Up from past week</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Process;
