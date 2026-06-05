import { useState } from "react";
import Icon from "@/components/ui/icon";




const Index = () => {
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
          Горычева Виктория
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
          {["about", "works"].map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="font-display text-4xl font-light tracking-widest uppercase"
            >
              {id === "about" ? "О себе" : "Работы"}
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

        <h1
          className="font-display text-[clamp(3rem,10vw,9rem)] font-light leading-[0.9] tracking-tight opacity-0 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Мои
          <br />
          <em className="italic">практические</em>
          <br />
          <span className="text-[#C8A96E]">работы.</span>
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
              Горычева<br />
              <em className="italic">Виктория</em>
            </h2>
          </div>
          <div className="space-y-6 pt-16">
            <p className="text-lg font-light leading-relaxed text-[#444]">
              Студентка 1 курса академической группы «Педагогическое образование. История и Обществознание» Тихоокеанского Государственного Университета.
            </p>
          </div>
        </div>
      </section>

      {/* Works */}
      <section id="works" className="px-8 md:px-16 py-32 border-t border-[#1a1a1a]/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#888] mb-4">02 / Работы</p>
            <h2 className="font-display text-5xl md:text-6xl font-light leading-tight">
              Мои<br />
              <em className="italic">работы</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Работа 1 — ссылки */}
            <div className="border border-[#1a1a1a]/10 rounded-2xl p-8 flex flex-col gap-6 hover:border-[#C8A96E]/50 transition-colors">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-[#888] mb-2">Работа 1</p>
                <h3 className="font-display text-2xl font-light">Интерактивные задания</h3>
              </div>
              <div className="flex flex-col gap-3 mt-auto">
                <a
                  href="https://usld.ru/ru/challenges/T51L1nCUIk5RQqRQ0uBE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group/link text-sm text-[#444] hover:text-[#C8A96E] transition-colors"
                >
                  <Icon name="ExternalLink" size={14} className="shrink-0 text-[#C8A96E]" />
                  usld.ru — задание
                </a>
                <a
                  href="https://www.mindomo.com/mindmap/ecbce1952a5944be894aaf3e11e2df77"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-[#444] hover:text-[#C8A96E] transition-colors"
                >
                  <Icon name="ExternalLink" size={14} className="shrink-0 text-[#C8A96E]" />
                  mindomo.com — интеллект-карта
                </a>
              </div>
            </div>

            {/* Работа 2 — картинки */}
            <div className="border border-[#1a1a1a]/10 rounded-2xl p-8 flex flex-col gap-6 hover:border-[#C8A96E]/50 transition-colors">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-[#888] mb-2">Работа 2</p>
                <h3 className="font-display text-2xl font-light">Буклет «Лапа Помощи»</h3>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <a href="https://cdn.poehali.dev/projects/e9a9ff50-92e9-4df0-9e82-eff31bda857b/bucket/3cc9359c-0004-4a54-ba41-b20346122119.png" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://cdn.poehali.dev/projects/e9a9ff50-92e9-4df0-9e82-eff31bda857b/bucket/3cc9359c-0004-4a54-ba41-b20346122119.png"
                    alt="Буклет страница 1"
                    className="w-full aspect-[3/4] object-cover rounded-lg hover:opacity-80 transition-opacity cursor-zoom-in"
                  />
                </a>
                <a href="https://cdn.poehali.dev/projects/e9a9ff50-92e9-4df0-9e82-eff31bda857b/bucket/ddccaf72-b2b9-4c74-b7ee-9320ae012f04.png" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://cdn.poehali.dev/projects/e9a9ff50-92e9-4df0-9e82-eff31bda857b/bucket/ddccaf72-b2b9-4c74-b7ee-9320ae012f04.png"
                    alt="Буклет страница 2"
                    className="w-full aspect-[3/4] object-cover rounded-lg hover:opacity-80 transition-opacity cursor-zoom-in"
                  />
                </a>
                <a href="https://cdn.poehali.dev/projects/e9a9ff50-92e9-4df0-9e82-eff31bda857b/bucket/4a1a0625-1ea4-4c57-a505-28156f70b6e2.png" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://cdn.poehali.dev/projects/e9a9ff50-92e9-4df0-9e82-eff31bda857b/bucket/4a1a0625-1ea4-4c57-a505-28156f70b6e2.png"
                    alt="Буклет страница 3"
                    className="w-full aspect-[3/4] object-cover rounded-lg hover:opacity-80 transition-opacity cursor-zoom-in"
                  />
                </a>
              </div>
            </div>

            {/* Работа 3 — ссылка */}
            <div className="border border-[#1a1a1a]/10 rounded-2xl p-8 flex flex-col gap-6 hover:border-[#C8A96E]/50 transition-colors">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-[#888] mb-2">Работа 3</p>
                <h3 className="font-display text-2xl font-light">Упражнение LearningApps</h3>
              </div>
              <div className="mt-auto">
                <a
                  href="https://learningapps.org/watch?v=p3vvbfy7226"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-[#444] hover:text-[#C8A96E] transition-colors"
                >
                  <Icon name="ExternalLink" size={14} className="shrink-0 text-[#C8A96E]" />
                  learningapps.org
                </a>
              </div>
            </div>

            {/* Работа 4 — ссылки тесты */}
            <div className="border border-[#1a1a1a]/10 rounded-2xl p-8 flex flex-col gap-6 hover:border-[#C8A96E]/50 transition-colors">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-[#888] mb-2">Работа 4</p>
                <h3 className="font-display text-2xl font-light">Онлайн-тесты</h3>
              </div>
              <div className="flex flex-col gap-3 mt-auto">
                {[
                  { href: "https://anketolog.ru/rs/1038877/RyGxbOnB", label: "Онлайн Тестпад" },
                  { href: "https://forms.yandex.ru/u/6a2123ad90fa7b62dca14a44", label: "Яндекс Формы" },
                  { href: "https://urok.1c.ru/share/task/2743dbc6f7da2d9a7cda23db0d62de94/", label: "1С Урок" },
                  { href: "https://banktestov.ru/test/113781", label: "Банк тестов" },
                ].map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-[#444] hover:text-[#C8A96E] transition-colors"
                  >
                    <Icon name="ExternalLink" size={14} className="shrink-0 text-[#C8A96E]" />
                    {label}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="px-8 md:px-16 py-6 bg-[#1a1a1a] border-t border-white/10 flex items-center justify-between">
        <p className="text-xs text-[#444] tracking-widest uppercase">© 2026 Горычева Виктория</p>
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