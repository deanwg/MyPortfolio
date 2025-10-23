import { useRef } from "react";
import "./App.css";

const Portfolio = () => {
  const projects = [
    { id: "mtg", name: "MTG Deck Builder" },
    { id: "todo", name: "Todo Application" },
  ];

  const sectionRefs = {
    todo: useRef(null),
    mtg: useRef(null),
  };

  const scrollToSection = (id) => {
    sectionRefs[id].current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#363232] text-gray-200 min-h-screen">
      <section className="h-screen flex flex-col">
        <header className="flex justify-end space-x-6 p-6 text-gray-400">
          <a href="mailto:deanwgiles@gmail.com" className="hover:text-white">
            @
          </a>
          <a
            href="https://github.com/deanwg"
            target="_blank"
            className="hover:text-white"
          >
            GitHub
          </a>
        </header>

        <div className="flex flex-1 justify-between items-center px-64">
          <div className="max-w-lg mb-40">
            <h1 className="text-6xl font-light mb-4">Welcome.</h1>
            <p className="text-gray-400 text-2xl leading-relaxed">
              My name is Dean Giles. I'm a web developer based in NSW,
              Australia. I have a passion for developing interactive apps with
              React, Tailwind, and furthering my skillset using modern tools.
              Curently my portfolio consists of front end web development
              projects but full stack projects are on the way!
            </p>
            <p className="mt-4 text-xl text-gray-400">
              Explore my featured projects below.
            </p>
          </div>

          <div className="mt-120">
            <h2 className="text-xl mb-6">Projects</h2>
            <ul className="space-y-3">
              {projects.map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => scrollToSection(p.id)}
                    className="text-gray-300 hover:text-orange-400  hover:underline hover:cursor-pointer"
                  >
                    {p.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <footer className="text-right text-gray-500 text-sm px-16 py-4">
          {new Date().getFullYear()} Dean Giles
        </footer>

        <div className="absolute top-12 left-12 w-48 h-48 border-t-4 border-l-4 border-orange-400 rounded-br-lg" />
        <div className="absolute bottom-12 right-12 w-48 h-48 border-b-4 border-r-4 border-orange-400 rounded-tl-lg" />
      </section>
      <section
        ref={sectionRefs.mtg}
        id="mtg"
        className="h-screen flex flex-row items-center justify-center bg-gray-800"
      >
        <div className="flex flex-col w-1/2 px-24 space-y-5">
          <h2 className="title">MTG Deck Builder</h2>
          <p className="projectText">
            My first complex application built. This application has room for
            improvement but a good exercise for myself to learn new skills, and
            also learn where i do need to develop.
          </p>
          <p className="projectText">
            A Magic: The Gathering deck builder with a Scryfall API search
            functionality, deck overlay, and quantity editing. Built with React
            + Vite, Tailwind, and Zustand.
          </p>
          <div className="flex flex-row space-x-2">
            <a
              href="https://mtgdeckbuilder-deans-projects-902e8e04.vercel.app/"
              target="_blank"
              className="button"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/deanwg/mtgdeckbuilder"
              target="_blank"
              className="button"
            >
              Github
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            src="/searchDisplay.png"
            alt="MTG Deck Builder Screenshot"
            className="rounded-lg shadow-lg w-160"
          />
        </div>
      </section>
      <section
        ref={sectionRefs.todo}
        id="todo"
        className="h-screen flex items-center justify-center bg-gray-900"
      >
        <div className="flex flex-col w-1/2 px-24 space-y-5">
          <h2 className="title">Todo App</h2>
          <p className="projectText">
            A Simple Todo application that began my portfolio and
            experimentation into React development
          </p>
          <p className="projectText">
            Built with React, TailwindCSS, Material UI, and Framer Motion. This
            app allows users to add, edit, delete, mark tasks as completed,
            reorder todos via drag-and-drop, and remove all completed tasks.
          </p>
          <div className="flex flex-row space-x-2">
            <a
              href="https://todo-lovat-delta-71.vercel.app/"
              target="_blank"
              className="button"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/deanwg/todo"
              target="_blank"
              className="button"
            >
              Github
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            src="/todoApp.png"
            alt="Todo Application Screenshot"
            className="rounded-lg shadow-lg w-160"
          />
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
