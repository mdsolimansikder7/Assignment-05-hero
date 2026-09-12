
import TechCard from "./Techcard"
import type { Tech } from "../type"

type TechGridProps = {
  technologies: Tech[]
  stackIds: Set<string>
  onAdd: (tech: Tech) => void
}

export default function TechGrid({ technologies, stackIds, onAdd }: TechGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {technologies.map((tech) => (
        <TechCard
          key={tech.id}
          tech={tech}
          isAdded={stackIds.has(tech.id)}
          onAdd={onAdd}
        />
      ))}
    </div>
  )
}