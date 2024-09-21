import IconCloud from "../magicui/Icon-Cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "netlify",
  "git",
  "vite",
  "github",
  "redux",
  "postman",
  "tailwindcss",
  "bootstrap",
];

export function SkillLoader() {
  return (
    <div>
      <h2 className="text-blue-500 font-semibold text-4xl text-center">Skills</h2><br/>
      <div className="relative flex h-full w-full max-w-[32rem] items-center  overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 " id="box">
        <IconCloud iconSlugs={slugs} />
      </div>
    </div>
  );
}
