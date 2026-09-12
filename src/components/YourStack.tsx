type Tech = {
  id: string
  name: string
  icon: string
  category: string
}

type YourStackProps = {
  stack: Tech[]
  onRemove: (id: string) => void
  onRemoveAll: () => void
}

export default function YourStack({ stack, onRemove, onRemoveAll }: YourStackProps) {
  const count = stack.length

  return (
    <aside className="border border-gray-200 rounded-xl p-5 bg-white h-fit lg:sticky lg:top-24">
      <h3 className="font-bold text-gray-900 text-lg">Your Stack</h3>
      <p className="text-sm text-gray-400 mb-4">
        {count === 0
          ? "No technologies selected yet."
          : `${count} Technology Selected`}
      </p>

      {count === 0 ? (
        <div className="border border-dashed border-gray-200 rounded-lg py-8 text-center text-sm text-gray-300">
          Your stack is empty.
        </div>
      ) : (
        <ul className="flex flex-col gap-2">
          {stack.map((tech) => (
            <li
              key={tech.id}
              className="flex items-center gap-3 border border-gray-100 rounded-lg px-3 py-2"
            >
              <img
                src={tech.icon}
                alt=""
                aria-hidden="true"
                className="h-7 w-7 object-contain shrink-0"
              />
              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">
                  {tech.name}
                </p>
                <p className="text-xs text-gray-400">{tech.category}</p>
              </div>
              <button
                type="button"
                onClick={() => onRemove(tech.id)}
                aria-label={`Remove ${tech.name} from your stack`}
                className="ml-auto text-gray-400 hover:text-gray-700 text-lg leading-none px-1"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}

      {count > 0 && (
        <button
          type="button"
          onClick={onRemoveAll}
          className="mt-4 w-full py-2.5 rounded-lg font-semibold text-sm border border-red-200 text-red-500 hover:bg-red-50 transition-colors"
        >
          Remove All
        </button>
      )}
    </aside>
  )
}