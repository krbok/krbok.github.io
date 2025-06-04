import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "nodejs-svgrepo-com",
    "R_logo",
    "cplusplus",
    "css-3-svgrepo-com",
    "python-svgrepo-com",
    "mongodb-svgrepo-com",
    "github-icon-1-logo-svgrepo-com",
    "html5",
    "javascript",
    "microsoft",
    "matlab-svgrepo-com",
    "kaggle-svgrepo-com",
    "sql-svgrepo-com",
  ];

  // Create a copy for the reverse orbit to avoid mutating the original array
  const reverseSkills = [...skills].reverse();

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={`outer-${index}`} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {reverseSkills.map((skill, index) => (
          <Icon key={`inner-${index}`} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img 
    src={src} 
    alt="Technology icon"
    className="duration-200 rounded-sm hover:scale-110" 
  />
);
