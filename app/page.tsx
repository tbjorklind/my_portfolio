// import Header from "@/components/header/header";
// import Skills from "@/components/skills/skills";
// import Projects from "@/components/projects/projects";
// import CV from "@/components/cv/cv";
// // import FixedButton from "@/components/contact/fixedButton";

// export default function Page() {
//   return (
//     <div>
//       <Header />
//       {/* <FixedButton /> */}
//       <main className=" mx-auto p-8 space-y-16">
//         <section className="text-center">
//           <h1 className="text-8xl font-bold mt-15">Hi, I'm Tanja</h1>
//           <p className="mt-7 text-lg mb-30">
//             A Front End Developer with a passion for... x, y, z.
//           </p>
//         </section>

//         <section>
//           <h1 className="text-7xl font-bold">A little</h1>
//           <h1 className="text-7xl font-bold ml-7 mb-120">about me</h1>
//         </section>

//         <section>
//           <h1 className="text-7xl font-bold">My tech-skills</h1>
//         </section>
//         <Skills />
//         <section className="bg-white z-10">
//           <h1 className="text-7xl font-bold mb-10">And my projects</h1>
//           <Projects />
//         </section>

//         <section>
//           <h1 className="text-7xl font-bold mb-10">CV</h1>
//           <CV />
//         </section>

//         <section>
//           <h1 className="text-7xl font-bold mb-120">Contact</h1>
//         </section>
//       </main>
//     </div>
//   );
// }
// pages/index.tsx
import Header from "@/components/header/header";
import Skills from "@/components/skills/skills";
import Projects from "@/components/projects/projects";
import CV from "@/components/cv/cv";
import FixedButton from "@/components/contact/fixedButton";
import About from "@/components/about/about"; 

export default function Page() {
  return (
    <div>
      <Header />
      <FixedButton />
      <main className=" mx-auto p-8 space-y-16">
        <section className="text-center">
          <h1 className="text-8xl font-bold mt-15">Hi, I'm Tanja</h1>
          <p className="mt-7 text-lg mb-30">
            A Front End Developer with a passion for... x, y, z.
          </p>
        </section>

        <section>
          <h1 className="text-7xl font-bold sticky top-10">A little</h1>
          <h1 className="text-7xl font-bold ml-7 sticky top-28">about me</h1>
          < About />
        </section>


        <section>
          <h1 className="text-7xl font-bold">My tech-skills</h1>
        </section>
        <Skills />
        
        {/* Lägg till id för att identifiera sektionen */}
        <section id="projects-section">
          <h1 className="text-7xl font-bold mb-10">And my projects</h1>
          <Projects />
        </section>

        <section>
          <h1 className="text-7xl font-bold mb-10 sticky top-20 pb-50">CV</h1>
          <CV />
        </section>

        <section>
          <h1 className="text-7xl font-bold mb-140">Contact</h1>
        </section>
      </main>
    </div>
  );
}
