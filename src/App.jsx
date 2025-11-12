import React, { useMemo } from 'react'
import Spline from '@splinetool/react-spline'

function App() {
  const planets = useMemo(
    () => [
      {
        name: 'Mercury',
        type: 'Rocky',
        color: '#b1b1b1',
        sizeRelEarth: 0.38,
        distance: '57.9M km',
        sizeKm: '4,880 km',
        fact: 'A year on Mercury is just 88 Earth days.',
        orbitPx: 90,
        speed: 'fastest',
      },
      {
        name: 'Venus',
        type: 'Rocky',
        color: '#e0b084',
        sizeRelEarth: 0.95,
        distance: '108.2M km',
        sizeKm: '12,104 km',
        fact: "Hottest planet due to runaway greenhouse effect.",
        orbitPx: 130,
        speed: 'fast',
      },
      {
        name: 'Earth',
        type: 'Rocky',
        color: '#3ba7ff',
        sizeRelEarth: 1,
        distance: '149.6M km',
        sizeKm: '12,742 km',
        fact: 'The only known planet with life.',
        orbitPx: 170,
        speed: 'medium',
      },
      {
        name: 'Mars',
        type: 'Rocky',
        color: '#d14f2b',
        sizeRelEarth: 0.53,
        distance: '227.9M km',
        sizeKm: '6,779 km',
        fact: 'Home to Olympus Mons, the tallest volcano.',
        orbitPx: 210,
        speed: 'medium',
      },
      {
        name: 'Jupiter',
        type: 'Gas Giant',
        color: '#d2b48c',
        sizeRelEarth: 11.21,
        distance: '778.5M km',
        sizeKm: '139,820 km',
        fact: 'Has a persistent storm called the Great Red Spot.',
        orbitPx: 260,
        speed: 'slow',
      },
      {
        name: 'Saturn',
        type: 'Gas Giant',
        color: '#e8d08b',
        sizeRelEarth: 9.45,
        distance: '1.43B km',
        sizeKm: '116,460 km',
        fact: 'Famous for its complex ring system.',
        orbitPx: 310,
        speed: 'slow',
      },
      {
        name: 'Uranus',
        type: 'Ice Giant',
        color: '#89d6e9',
        sizeRelEarth: 4.01,
        distance: '2.87B km',
        sizeKm: '50,724 km',
        fact: 'Rotates on its side with a 98° tilt.',
        orbitPx: 360,
        speed: 'slower',
      },
      {
        name: 'Neptune',
        type: 'Ice Giant',
        color: '#3b6ee3',
        sizeRelEarth: 3.88,
        distance: '4.5B km',
        sizeKm: '49,244 km',
        fact: 'Strongest winds in the solar system.',
        orbitPx: 410,
        speed: 'slowest',
      },
    ],
    []
  )

  const scrollToSolar = () => {
    const el = document.getElementById('solar')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen w-full bg-[#05060b] text-white">
      {/* Landing / Hero */}
      <section className="relative h-[100svh] w-full overflow-hidden">
        {/* Spline cover background */}
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/ZbxuTuCsFbT2izmF/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        {/* Starfield overlay for depth */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(13,15,25,0)_0%,rgba(5,6,11,0.65)_55%,rgba(5,6,11,1)_100%)]" />

        {/* Content */}
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-wider drop-shadow-[0_0_20px_rgba(56,189,248,0.45)]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-200 to-indigo-300">AstroVista</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-blue-100/90">
            Your journey through the cosmos…
          </p>
          <button
            onClick={scrollToSolar}
            className="mt-10 rounded-full px-8 py-3 text-sm sm:text-base font-semibold bg-cyan-500/20 backdrop-blur border border-cyan-300/30 text-cyan-100 shadow-[0_0_20px_rgba(34,211,238,0.25)] hover:shadow-[0_0_35px_rgba(34,211,238,0.5)] hover:border-cyan-300/60 hover:bg-cyan-400/20 transition-all duration-300"
          >
            Start Journey
          </button>

          {/* ambient shooting stars */}
          <div className="pointer-events-none absolute inset-0">
            <div className="shooting-star left-[15%] top-[20%]" />
            <div className="shooting-star left-[70%] top-[35%] delay-1000" />
            <div className="shooting-star left-[55%] top-[10%] delay-2000" />
          </div>
        </div>

        {/* bottom gradient */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#05060b] to-transparent" />
      </section>

      {/* Solar System */}
      <section id="solar" className="relative w-full py-16 md:py-24 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(22,28,45,0.6),rgba(5,6,11,1))] overflow-hidden">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 md:mb-14 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-cyan-200 to-blue-200">
              The Solar System
            </h2>
            <p className="mt-3 text-blue-200/80">
              Hover over each planet to explore details and compare sizes to Earth.
            </p>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[800px]">
            {/* Sun */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="sun-glow" />
              <div className="sun-core" />
            </div>

            {/* Orbits + Planets */}
            {planets.map((p, idx) => {
              const sizePx = Math.max(6, Math.min(26, Math.round(10 * Math.sqrt(p.sizeRelEarth)))) // clamp visual size
              const orbitSize = p.orbitPx * 2
              const speedClass = {
                fastest: 'orbit-fastest',
                fast: 'orbit-fast',
                medium: 'orbit-medium',
                slow: 'orbit-slow',
                slower: 'orbit-slower',
                slowest: 'orbit-slowest',
              }[p.speed]
              return (
                <div
                  key={p.name}
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 ${speedClass}`}
                  style={{ width: orbitSize, height: orbitSize }}
                >
                  {/* orbit marker dots */}
                  <div className="absolute inset-0 rounded-full border-t border-white/5" />

                  {/* Planet holder (rotates with orbit) */}
                  <div className="absolute left-1/2 top-0 -translate-x-1/2">
                    <div className="group relative">
                      <div
                        className="planet shadow-[0_0_12px_rgba(255,255,255,0.35)]"
                        style={{ background: p.color, width: sizePx, height: sizePx }}
                      />

                      {/* Tooltip */}
                      <div className="pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 w-64 origin-left scale-95 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100">
                        <div className="rounded-lg border border-white/10 bg-white/5 backdrop-blur px-4 py-3 shadow-xl">
                          <div className="flex items-center justify-between">
                            <div className="font-semibold text-white/95">{p.name}</div>
                            <div className="text-[10px] rounded-full border border-white/20 px-2 py-0.5 text-white/70">
                              {p.type}
                            </div>
                          </div>
                          <div className="mt-2 grid grid-cols-2 gap-2 text-xs text-blue-100/80">
                            <div>Size: <span className="text-white/90">{p.sizeKm}</span></div>
                            <div>Distance: <span className="text-white/90">{p.distance}</span></div>
                          </div>
                          <div className="mt-2 text-xs text-blue-100/80">{p.fact}</div>
                          <div className="mt-3">
                            <div className="mb-1 flex items-center justify-between text-[11px] text-blue-100/80">
                              <span>Size vs Earth</span>
                              <span className="text-white/90">{p.sizeRelEarth}×</span>
                            </div>
                            <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-indigo-300"
                                style={{ width: `${Math.min(100, p.sizeRelEarth * 9)}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* soft edges */}
        <div className="pointer-events-none absolute inset-0 -z-[0]">
          <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-xs text-blue-200/60">
        © {new Date().getFullYear()} AstroVista — A conceptual exploration UI
      </footer>
    </div>
  )
}

export default App
