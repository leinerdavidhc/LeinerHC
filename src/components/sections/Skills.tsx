export default function Skills() {
  const skills=[
    {name:"Html",img:"/html5.svg"},
    {name:"Css",img:"/css.svg"},
    {name:"Javascript",img:"/javascript.svg"},
    {name:"React",img:"/react.svg"},
    {name:"Nextjs",img:"/nextjs.svg"},
    {name:"Angular",img:"/angular.svg"},
    {name:"Astro",img:"/astro.svg"},
    {name:"Taiilwind",img:"/tailwindcss.svg"},
    {name:"Typescript",img:"/typescript.svg"},
    {name:"Nodejs",img:"/nodejs.svg"},
    {name:"Express",img:"/expressjs.svg"},
    {name:"Django",img:"/django.svg"},
    {name:"Java",img:"/java.svg"},
    {name:"Python",img:"/python.svg"},
    {name:"Mongodb",img:"/mongodb.svg"},
    {name:"Mysql",img:"/mysql.svg"},
    {name:"PostgreSQL",img:"/postgresql.svg"},
    {name:"Git",img:"/git.svg"},
    {name:"Github",img:"/github.svg"},
    {name:"Figma",img:"/figma.svg"},
]
  return (
     <div className="grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-4">
      {skills.map((skill,index)=>(
        <article key={index} className="flex flex-col justify-center items-center bg-card p-2 gap-3">
          <img src={skill.img} alt={skill.name} className="h-20 w-14" />
          <h3>{skill.name}</h3>
        </article>
      ))}
    </div>
  )
}
