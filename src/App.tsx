import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import Navbar from "./components/Nav"
import { Banner as Hero } from "./components/Banner"
import TechGrid from "./components/TechGrid"
import YourStack from "./components/YourStack"
import { Footer } from "./components/Footer"
import LoadingState from "./components/Loadingstate"
import type { Tech } from "./type"

export default function App() {
  const [technologies, setTechnologies] = useState<Tech[]>([])
  const [stack, setStack] = useState<Tech[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    async function loadTechnologies() {
      try {
        const response = await fetch("/data.json")
        if (!response.ok) throw new Error("Failed to load technologies")
        const data = await response.json()
        if (isMounted) setTechnologies(data)
      } catch (err) {
        if (isMounted) setError((err as Error).message)
      } finally {
        if (isMounted) setIsLoading(false)
      }
    }

    loadTechnologies()
    return () => {
      isMounted = false
    }
  }, [])

  const stackIds = new Set(stack.map((tech) => tech.id))

  function handleAdd(tech: Tech) {
    if (stackIds.has(tech.id)) {
      toast.warn(`${tech.name} is already in your stack.`)
      return
    }
    setStack((prev) => [...prev, tech])
    toast.success(`${tech.name} added to your stack.`)
  }

  function handleRemove(id: string) {
    const removed = stack.find((tech) => tech.id === id)
    setStack((prev) => prev.filter((tech) => tech.id !== id))
    if (removed) toast.info(`${removed.name} removed from your stack.`)
  }

  function handleRemoveAll() {
    setStack([])
    toast.info("Your stack has been cleared.")
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />

      <section id="technologies" className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
        <h2 className="text-3xl font-extrabold">
          Explore the{" "}
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="mt-2 text-gray-500">
          Pick one technology per category to build your ideal stack.
        </p>

        <div className="mt-10 grid lg:grid-cols-[1fr_300px] gap-8 items-start">
          {isLoading ? (
            <LoadingState />
          ) : error ? (
            <p className="text-red-500 py-16 text-center">
              Couldn't load technologies: {error}
            </p>
          ) : (
            <TechGrid
              technologies={technologies}
              stackIds={stackIds}
              onAdd={handleAdd}
            />
          )}

          <YourStack
            stack={stack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </section>

      <Footer />
    </div>
  )
}
