
import { Sparkles, BookOpen, Brain, Star } from "lucide-react";

export default function AuthLayout({ children, title, subtitle }) {
  return (
    <div className="min-h-screen bg-[#f7f5ff] flex items-center justify-center p-4">

      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">

        {/* Left illustration section */}
        <div className="hidden md:flex flex-col justify-between bg-gradient-to-br from-violet-600 to-indigo-500 text-white p-12">

          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-3 rounded-xl">
              <Sparkles size={28} />
            </div>
            <h1 className="text-2xl font-bold">WonderLearn AI</h1>
          </div>

          <div>
            <div className="text-7xl mb-8">🚀📚</div>

            <h2 className="text-4xl font-bold leading-tight">
              Discover.
              <br />
              Learn.
              <br />
              Explore.
            </h2>

            <p className="mt-5 text-indigo-100 text-lg">
              Every question is a new adventure.
              Start your learning journey with AI!
            </p>

            <div className="flex gap-5 mt-10">
              <BookOpen />
              <Brain />
              <Star />
            </div>
          </div>

          <p className="text-sm text-indigo-100">
            Learning made fun with WonderLearn AI.
          </p>

        </div>

        {/* Right form section */}
        <div className="p-7 sm:p-12 flex flex-col justify-center">

          <div className="md:hidden text-center mb-8">
            <span className="text-4xl">🚀</span>
            <h1 className="text-2xl font-bold text-violet-700">
              WonderLearn AI
            </h1>
          </div>

          <h2 className="text-3xl font-bold text-gray-800">
            {title}
          </h2>

          <p className="text-gray-500 mt-2 mb-8">
            {subtitle}
          </p>

          {children}

        </div>

      </div>
    </div>
  );
}
