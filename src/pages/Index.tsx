import { useState } from "react";
import Icon from "@/components/ui/icon";

const projects = [
  {
    id: 1,
    title: "Проект первый",
    category: "Дизайн",
    year: "2024",
    image: "https://cdn.poehali.dev/projects/e9a9ff50-92e9-4df0-9e82-eff31bda857b/files/31a22509-2b89-40b9-8576-f47273421d6e.jpg",
    description: "Краткое описание проекта — чем занимались, какую задачу решили.",
  },
  {
    id: 2,
    title: "Проект второй",
    category: "Разработка",
    year: "2024",
    image: "https://cdn.poehali.dev/projects/e9a9ff50-92e9-4df0-9e82-eff31bda857b/files/89264956-f5df-4160-a18f-aec1a5c26ea0.jpg",
    description: "Краткое описание проекта — чем занимались, какую задачу решили.",
  },
  {
    id: 3,
    title: "Проект третий",
    category: "Фотография",
    year: "2023",
    image: "https://cdn.poehali.dev/projects/e9a9ff50-92e9-4df0-9e82-eff31bda857b/files/f9ec6895-0f3b-402b-bb91-1c5caeda1e45.jpg",
    description: "Краткое описание проекта — чем занимались, какую задачу решили.",
  },
];

const skills = ["Стратегия", "Дизайн", "Разработка", "Брендинг", "Фотография"];

const Index = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F8F6F2] font-sans text-[#1a1a1a]">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-[#F8F6F2]/90 backdrop-blur-sm border-b border-[#1a1a1a]/8">
        <button
          onClick={() => scrollTo("hero")}
          className="font-display text-xl font-light tracking-widest uppercase hover:opacity-60 transition-opacity"
        >
          Имя Фамилия
        </button>
        <div className="hidden md:flex items-center gap-10">
          <button
            onClick={() => scrollTo("about")}
            className="text-sm tracking-widest uppercase hover:opacity-60 transition-opacity"
          >
            О себе
          </button>
          <button
            onClick={() => scrollTo("works")}
            className="text-sm tracking-widest uppercase hover:opacity-60 transition-opacity"
          >
            Работы
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="text-sm tracking-widest uppercase hover:opacity-60 transition-opacity"
          >
            Контакт
          </button>
        </div>
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F8F6F2] flex flex-col items-center justify-center gap-10 animate-fade-in-slow">
          {["about", "works", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="font-display text-4xl font-light tracking-widest uppercase"
            >
              {id === "about" ? "О себе" : id === "works" ? "Работы" : "Контакт"}
            </button>
          ))}
        </div>
      )}

      {/* Hero */}
      <section
        id="hero"
        className="min-h-screen flex flex-col justify-end px-8 md:px-16 pb-20 pt-32 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, #1a1a1a 0px, #1a1a1a 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #1a1a1a 0px, #1a1a1a 1px, transparent 1px, transparent 60px)",
            }}
          />
        </div>

        <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <p className="text-sm tracking-[0.3em] uppercase text-[#888] mb-6">
            Дизайнер · Разработчик · Творец
          </p>
        </div>

        <h1
          className="font-display text-[clamp(3rem,10vw,9rem)] font-light leading-[0.9] tracking-tight opacity-0 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Создаю
          <br />
          <em className="italic">вещи,</em>
          <br />
          которые
          <br />
          <span className="text-[#C8A96E]">работают.</span>
        </h1>

        <div
          className="mt-16 flex items-center gap-6 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          <button
            onClick={() => scrollTo("works")}
            className="flex items-center gap-3 text-sm tracking-widest uppercase hover:gap-6 transition-all duration-300"
          >
            Смотреть работы
            <Icon name="ArrowRight" size={16} />
          </button>
          <span className="w-16 h-px bg-[#1a1a1a]/30" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 md:px-16 py-32 border-t border-[#1a1a1a]/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#888] mb-8">01 / О себе</p>
            <h2 className="font-display text-5xl md:text-6xl font-light leading-tight mb-8">
              Привет, я —<br />
              <em className="italic">Имя</em>
            </h2>
          </div>
          <div className="space-y-6 pt-16">
            <p className="text-lg font-light leading-relaxed text-[#444]">
              Расскажите здесь о себе — кто вы, чем занимаетесь, какой опыт есть за плечами. Это место для вашей истории.
            </p>
            <p className="text-lg font-light leading-relaxed text-[#444]">
              Несколько предложений о вашем подходе к работе, ценностях или уникальном взгляде на профессию.
            </p>
            <div className="pt-8 border-t border-[#1a1a1a]/10">
              <p className="text-xs tracking-[0.2em] uppercase text-[#888] mb-4">Специализация</p>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-4 py-2 border border-[#1a1a1a]/20 rounded-full hover:border-[#C8A96E] hover:text-[#C8A96E] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-6 grid grid-cols-3 gap-6">
              {[
                { num: "5+", label: "Лет опыта" },
                { num: "30+", label: "Проектов" },
                { num: "20+", label: "Клиентов" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p className="font-display text-4xl font-light text-[#C8A96E]">{num}</p>
                  <p className="text-xs tracking-widest uppercase text-[#888] mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Works */}
      <section id="works" className="px-8 md:px-16 py-32 border-t border-[#1a1a1a]/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#888] mb-4">02 / Работы</p>
              <h2 className="font-display text-5xl md:text-6xl font-light leading-tight">
                Избранные<br />
                <em className="italic">проекты</em>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="relative overflow-hidden aspect-[4/3] mb-5 bg-[#eee]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#1a1a1a]/0 group-hover:bg-[#1a1a1a]/30 transition-all duration-500 flex items-end p-6">
                    <p
                      className="text-white text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0"
                      style={{ transitionDelay: "0.1s" }}
                    >
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-xl font-light group-hover:text-[#C8A96E] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#888] mt-1 tracking-wide">{project.category}</p>
                  </div>
                  <span className="text-sm text-[#888]">{project.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 md:px-16 py-32 border-t border-[#1a1a1a]/10 bg-[#1a1a1a] text-[#F8F6F2]">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-[#888] mb-8">03 / Контакт</p>
          <div className="grid md:grid-cols-2 gap-20 items-end">
            <h2 className="font-display text-5xl md:text-7xl font-light leading-tight">
              Давайте<br />
              <em className="italic text-[#C8A96E]">работать</em><br />
              вместе
            </h2>
            <div className="space-y-8">
              <p className="text-lg font-light leading-relaxed text-[#aaa]">
                Открыт к новым проектам и интересному сотрудничеству. Напишите — обсудим вашу идею.
              </p>
              <div className="space-y-4">
                {[
                  { label: "Email", value: "hello@example.com", icon: "Mail" },
                  { label: "Telegram", value: "@username", icon: "Send" },
                ].map(({ label, value, icon }) => (
                  <div key={label} className="flex items-center gap-4 group cursor-pointer">
                    <Icon name={icon} size={16} className="text-[#C8A96E]" />
                    <div>
                      <p className="text-xs tracking-widest uppercase text-[#666] mb-0.5">{label}</p>
                      <p className="text-sm group-hover:text-[#C8A96E] transition-colors">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-6 pt-4 border-t border-white/10">
                {["Instagram", "Behance", "LinkedIn"].map((soc) => (
                  <button
                    key={soc}
                    className="text-xs tracking-widest uppercase text-[#666] hover:text-[#C8A96E] transition-colors"
                  >
                    {soc}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 md:px-16 py-6 bg-[#1a1a1a] border-t border-white/10 flex items-center justify-between">
        <p className="text-xs text-[#444] tracking-widest uppercase">© 2024 Имя Фамилия</p>
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2 text-xs text-[#444] hover:text-[#C8A96E] transition-colors tracking-widest uppercase"
        >
          Наверх <Icon name="ArrowUp" size={12} />
        </button>
      </footer>
    </div>
  );
};

export default Index;
