import { Check, X } from "lucide-react";

const CompareTable = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* Header Section */}
        <div className="mb-20 text-center">
          <h1 className="mb-6 text-6xl font-normal tracking-tight">
            Why Choose Us
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-400">
            Skip the overhead, long hiring cycles, and hidden costs — get
            reliable, high-level AI talent exactly when your business needs it
            most.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid gap-8 rounded-2xl bg-zinc-900/50 p-8 md:grid-cols-2 md:p-12">
          {/* Left Column - Other Agencies */}
          <div className="space-y-8">
            <h2 className="text-2xl font-normal">
              Working with Other Agencies
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <X className="mt-1 h-5 w-5 shrink-0 text-red-500" />
                <div>
                  <p className="text-gray-300">Slow, disconnected teams</p>
                </div>
              </div>

              <div className="flex gap-4">
                <X className="mt-1 h-5 w-5 shrink-0 text-red-500" />
                <div>
                  <p className="text-gray-300">
                    Prolonged timelines, unclear communication, and hidden costs
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <X className="mt-1 h-5 w-5 shrink-0 text-red-500" />
                <div>
                  <p className="text-gray-300">
                    Generic, one-size-fits-all templates that restrict
                    flexibility
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <X className="mt-1 h-5 w-5 shrink-0 text-red-500" />
                <div>
                  <p className="text-gray-300">
                    Limited or no support after project launch
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <X className="mt-1 h-5 w-5 shrink-0 text-red-500" />
                <div>
                  <p className="text-gray-300">
                    Poor visibility into project progress and performance
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <X className="mt-1 h-5 w-5 shrink-0 text-red-500" />
                <div>
                  <p className="text-gray-300">
                    Poor visibility into project progress and performance
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <X className="mt-1 h-5 w-5 shrink-0 text-red-500" />
                <div>
                  <p className="text-gray-300">
                    Poor visibility into project progress and performance
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Tecway */}
          <div className="space-y-8">
            <h2 className="text-2xl font-normal">
              Working with <span className="text-orange-600 font-bitcount">Tecway</span>
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Check className="mt-1 h-5 w-5 shrink-0 text-green-500" />
                <div>
                  <p className="font-medium text-white">
                    End-to-end development
                  </p>
                  <p className="mt-1 text-sm text-gray-400">
                    From strategy and design to deployment and scaling
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="mt-1 h-5 w-5 shrink-0 text-green-500" />
                <div>
                  <p className="font-medium text-white">Custom solutions</p>
                  <p className="mt-1 text-sm text-gray-400">
                    built specifically around your goals and workflow
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="mt-1 h-5 w-5 shrink-0 text-green-500" />
                <div>
                  <p className="font-medium text-white">
                    Fast, agile delivery with milestone-based project tracking
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="mt-1 h-5 w-5 shrink-0 text-green-500" />
                <div>
                  <p className="font-medium text-white">
                    Cutting-edge technology
                  </p>
                  <p className="mt-1 text-sm text-gray-400">
                    web, mobile, AI, and cloud under one roof
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="mt-1 h-5 w-5 shrink-0 text-green-500" />
                <div>
                  <p className="font-medium text-white">
                    Free 6-month maintenance
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="mt-1 h-5 w-5 shrink-0 text-green-500" />
                <div>
                  <p className="font-medium text-white">Transparent pricing</p>
                  <p className="mt-1 text-sm text-gray-400">
                    with no hidden costs or vague estimates
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="mt-1 h-5 w-5 shrink-0 text-green-500" />
                <div>
                  <p className="font-medium text-white">
                    Dedicated project manager
                  </p>
                  <p className="mt-1 text-sm text-gray-400">
                    Ensuring clear communication at every step
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareTable;
