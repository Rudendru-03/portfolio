// components/Skills.tsx
import SkillBar from "./SkillBar"; // Ensure correct import path

const Skills: React.FC = () => {
  const skillLevels = {
    JavaScript: 90,
    React: 80,
    TypeScript: 75,
    NodeJS: 70,
    HTML: 70,
    CSS: 65,
    Postgresql: 60,
    MongoDB: 50,
    AWS: 45,
    Firebase: 40,
    NextJS: 35,
    Docker: 25,
    Kubernetes: 20,
    Debugger: 80,
    TailwindCSS: 85,
    Redis: 25,
  };

  return (
    <section className="bg-gray-900 text-white p-20">
      <h2 className="text-3xl mb-4">My Skills</h2>
      <div className="flex flex-wrap space-x-4">
        {Object.entries(skillLevels).map(([skill, level]) => (
          <SkillBar key={skill} skill={skill} level={level} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
