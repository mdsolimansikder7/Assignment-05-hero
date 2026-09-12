type Tech = {
  id: string
  name: string
  icon: string
  description: string
  badge: string
  category: string
  difficulty: string
  rating: number
}

type TechCardProps = {
  tech: Tech
  isAdded: boolean
  onAdd: (tech: Tech) => void
}
    


export default function TechCard({ tech, isAdded, onAdd }) {
  return (
    <div className="border border-gray-200 rounded-xl p-5 flex flex-col bg-white">
      <div className="flex items-start justify-between mb-3">
        <img
          src={tech.icon}
          alt=""
          aria-hidden="true"
          className="h-9 w-9 object-contain"
          loading="lazy"
        />
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
          {tech.badge}
        </span>
      </div>

      <h3 className="font-bold text-gray-900 text-lg">{tech.name}</h3>
      <p className="mt-1 text-sm text-gray-500 flex-1">{tech.description}</p>

      <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
        <span className="px-2 py-1 rounded bg-gray-100">{tech.category}</span>
        <span className="px-2 py-1 rounded bg-gray-100">
          {tech.difficulty}
        </span>
        <span className="ml-auto flex items-center gap-1 font-medium text-gray-700">
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-yellow-400">
            <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
          </svg>
          {tech.rating}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`mt-4 w-full py-2.5 rounded-lg font-semibold text-sm transition-colors ${
          isAdded
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
