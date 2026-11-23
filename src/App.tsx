import { useState, useEffect } from "react";
import heroPortrait from "./assets/portfolio/86bb5c61-1745-4be2-b8f0-d74e059c4a0e.png";
import devilIcon from "./assets/portfolio/74e6be28-23a1-4e78-88e5-ac69fe9353ef.png";
import creaturePortrait from "./assets/portfolio/5cf9974e-73eb-4e5f-a8f9-376f238bc8b3.png";
import beadPortrait from "./assets/portfolio/3d8fd0ce-6813-4ce3-81f9-1becdec09cd9.png";
import sketchGold from "./assets/portfolio/79e6035a-8374-4800-9ebd-48756d6d9d61.png";
import sketchHeart from "./assets/portfolio/a0f206f1-5b9f-4088-b9f8-3b9ac0e04a28.png";
import sketchHands from "./assets/portfolio/d2ae4864-4ca3-462c-a184-f47ca824701d.png";
import sketchbook from "./assets/portfolio/e86896ac-e2c1-4807-9ca3-afca46db20f4.png";
import extraOne from "./assets/portfolio/61fcde9c-dd2b-47b7-b2c6-4f94f8d32a47.png";
import extraTwo from "./assets/portfolio/e56f7296-4c16-4c7d-a3d0-a358b01f8841.png";
import paintedEyes from "./assets/portfolio/050dc256-0962-46e0-9be2-03b93d21ce7d.png";
import purplePieta from "./assets/portfolio/a9be01b8-8ed0-49bb-bb8b-a48f0a53c032.png";
import canvasColor from "./assets/portfolio/31c7f938-c5a7-476f-ad18-894f0bbaa03f.png";
import canvasStructure from "./assets/portfolio/8892297d-3ce5-4472-9708-18ff0a496c96.png";
import charSketch from "./assets/portfolio/artattack.png";
import charSketch2 from "./assets/portfolio/artattack2.jpg";
import charSketch3 from "./assets/portfolio/artattack3.jpg";
import canvasSketch from "./assets/portfolio/9479943d-cfdf-44b9-bbf5-21c7348d0363.png";
import characterLoop from "./assets/video/1025ce63-f920-4c84-9723-d9456633dd2c.mp4";
import classroomPerformance from "./assets/video/43d7273e-3d2e-4233-8372-b65eab648287.mp4";
import classroomAction from "./assets/video/8f0a080f-f042-4ba5-a866-78a998d168b7.mp4";
import characterPoster from "./assets/video/character-loop-poster.jpg";
import performancePoster from "./assets/video/classroom-performance-poster.jpg";
import actionPoster from "./assets/video/classroom-action-poster.jpg";
import blenderIcon from "./assets/Blender.webp";
import kritaIcon from "./assets/krita.webp";
import zbrushIcon from "./assets/zbrush.svg";
import centipedeGif from "./assets/centipede-ironguest.gif";
import eyesGif from "./assets/eyes.gif";
import teethImage from "./assets/teeth2.png";
import stampImg from  "./assets/sello.png";

type GalleryCategory = "TODO" | "DIGITAL" | "SKETCHBOOK" | "PINTURA";

interface GalleryEntry {
  src: string;
  alt: string;
  title: string;
  meta: string;
  category: Exclude<GalleryCategory, "TODO">;
  logNote: string;
}

const galleryItems: GalleryEntry[] = [
  {
    src: creaturePortrait,
    alt: "Ilustración digital de criatura con apéndices orgánicos",
    title: "01 / ESTUDIO DE CRIATURA",
    meta: "Ilustración digital · personaje",
    category: "DIGITAL",
    logNote: "Exploración anatómica y silueta orgánica en tono frío.",
  },
  {
    src: beadPortrait,
    alt: "Retrato digital de personaje con cuentas rojas",
    title: "02 / RETRATO",
    meta: "Luz · volumen · carácter",
    category: "DIGITAL",
    logNote: "Contraste cromático y énfasis en la mirada y textura.",
  },
  {
    src: sketchHeart,
    alt: "Página de sketchbook con corazón anatómico y figuras",
    title: "03 / CARNE & DEVOCIÓN",
    meta: "Sketchbook · medios mixtos",
    category: "SKETCHBOOK",
    logNote: "Cruces entre anatomía simbólica y trazo directo.",
  },
  {
    src: sketchGold,
    alt: "Página de bocetos con figuras y cráneo dorado",
    title: "04 / ESTUDIOS",
    meta: "Grafito · color · anatomía",
    category: "SKETCHBOOK",
    logNote: "Estudio de figura, proporción y acento áureo.",
  },
  {
    src: sketchHands,
    alt: "Página de sketchbook con manos y personajes",
    title: "05 / ARCHIVO DE FORMAS",
    meta: "Observación · exploración",
    category: "SKETCHBOOK",
    logNote: "Gesto manual y postura expresiva sin pulir.",
  },
  {
    src: sketchbook,
    alt: "Página de sketchbook llena de bocetos de personajes",
    title: "06 / CUADERNO ABIERTO",
    meta: "Ideas antes de pulirse",
    category: "SKETCHBOOK",
    logNote: "Banco de ideas y variaciones rápidas de rostros.",
  },
  {
    src: extraOne,
    alt: "Obra de ilustración adicional",
    title: "07 / EXPERIMENTO",
    meta: "Archivo personal",
    category: "SKETCHBOOK",
    logNote: "Prueba de atmósfera y composición fuera de serie.",
  },
  {
    src: extraTwo,
    alt: "Obra de ilustración adicional",
    title: "08 / EXPERIMENTO",
    meta: "Archivo personal",
    category: "SKETCHBOOK",
    logNote: "Exploración de ritmo visual y tensión cromática.",
  },
  {
    src: paintedEyes,
    alt: "Pintura de personaje rodeado de manos y ojos",
    title: "09 / BAJO LA MIRADA",
    meta: "Pintura · personaje · tensión",
    category: "PINTURA",
    logNote: "Motivos repetidos de vigilancia y fragmentación.",
  },
  {
    src: purplePieta,
    alt: "Ilustración digital de dos personajes sobre un monumento bajo un cielo púrpura",
    title: "10 / PIEDAD VIOLETA",
    meta: "Ilustración digital · narrativa",
    category: "DIGITAL",
    logNote: "Escena dramática con paleta violeta y peso escultórico.",
  },
  {
    src: charSketch,
    alt: "Ilustración digital de un personaje original",
    title: "11 / GOBLIN",
    meta: "Ilustración digital ",
    category: "DIGITAL",
    logNote: "Personaje exotico y expresivo.",
  },
  {
    src: charSketch2,
    alt: "Ilustración digital de un personaje original",
    title: "12 / DOCTOR",
    meta: "Ilustración digital",
    category: "DIGITAL",
    logNote: "Personaje de colores vibrantes y actitud confiada.",
  },
  {
    src: charSketch3,
    alt: "Ilustración digital de un personaje original",
    title: "13 / HARLEQUIN",
    meta: "Ilustración digital ",
    category: "DIGITAL",
    logNote: "Personaje con expresividad.",
  },
  ...(() => {
    const newPortfolioImages = import.meta.glob<string>(
      "./assets/portfolio/WhatsApp*.jpeg",
      { eager: true, query: "?url", import: "default" },
    );

    return Object.entries(newPortfolioImages)
      .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
      .map(([, src], index) => {
        const number = String(index + 11).padStart(2, "0");

        return {
          src,
          alt: "Obra añadida al archivo visual de Betsary Moon",
          title: `${number} / ARCHIVO NUEVO`,
          meta: "Sketchbook · boceto",
          category: "SKETCHBOOK",
          logNote: "Nueva pieza incorporada al archivo visual.",
        };
      });
  })(),
];

const categories: GalleryCategory[] = ["TODO", "DIGITAL", "SKETCHBOOK", "PINTURA"];

const sysPrompts = [
  {
    q: "¿Qué buscas provocar?",
    a: "Tensión, atmósfera y presencia. Que una imagen se quede rondando después de cerrar la pestaña.",
  },
  {
    q: "¿Cómo trabajas?",
    a: "Cruzo dibujo tradicional, digital y 3D: absorbo referencias, desarmo la idea, pruebo sin apego y tenso el ritmo.",
  },
  {
    q: "Ir a #animacion",
    a: "Saltando al módulo 03 / ANIMACIÓN 3D para revisar loops, blocking y actuación de personaje.",
    targetId: "animacion",
  },
];

const skills = [
  [
    "01",
    "Dirección visual",
    "Convierto referencias dispersas en una atmósfera clara, intensa y reconocible.",
  ],
  [
    "02",
    "Ilustración",
    "Personajes, retratos y criaturas que viven entre lo bello, lo extraño y lo incómodo.",
  ],
  [
    "03",
    "Narrativa multimedia",
    "Pienso cada pieza como una escena: ritmo, encuadre, sonido, textura y emoción.",
  ],
  [
    "04",
    "Experimentación",
    "Cruzo dibujo tradicional, procesos digitales y accidentes visuales para encontrar una voz propia.",
  ],
];

const process = [
  [
    "01",
    "Absorber",
    "Escucho, observo y colecciono. Una canción, una escena o una textura pueden abrir el proyecto.",
  ],
  [
    "02",
    "Desarmar",
    "Identifico la emoción central, el problema real y lo que la pieza necesita comunicar.",
  ],
  [
    "03",
    "Probar",
    "Boceto rápido, cambio de escala, ensucio, recorto y construyo varias rutas sin enamorarme de la primera.",
  ],
  [
    "04",
    "Tensar",
    "Refino contraste, composición y ritmo hasta que cada decisión se sienta intencional.",
  ],
  ["05", "Entregar", "Aterrizo una solución funcional sin quitarle rareza, carácter ni emoción."],
];

const tools = [
  { id: "photoshop", name: "Photoshop", mark: "Ps" },
  { id: "krita", name: "Krita", asset: kritaIcon },
  { id: "after-effects", name: "After Effects", mark: "Ae" },
  { id: "zbrush", name: "ZBrush", asset: zbrushIcon },
  { id: "blender", name: "Blender", asset: blenderIcon },
  { id: "maya", name: "Maya" },
  { id: "drawing", name: "Dibujo tradicional" },
  { id: "storyboard", name: "Storyboard" },
];

function ToolIcon({ id, mark, asset }: (typeof tools)[number]) {
  if (asset) {
    return <img className={`tool-icon-image tool-icon-image-${id}`} src={asset} alt="" />;
  }

  if (mark) {
    return (
      <span className={`tool-icon-mark tool-icon-mark-${id}`} aria-hidden="true">
        {mark}
      </span>
    );
  }

  return (
    <svg
      className={`tool-icon-svg tool-icon-svg-${id}`}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      {id === "maya" && (
        <>
          <path d="M8 37V11h6l10 14 10-14h6v26h-7V22L24 34l-9-12v15H8Z" />
          <path d="M13 7h22" />
        </>
      )}
      {id === "drawing" && (
        <>
          <path d="m11 33 3-9L34 4l10 10-20 20-9 3-4-4Z" />
          <path d="m14 24 10 10M30 8l10 10M7 41l7-1" />
        </>
      )}
      {id === "storyboard" && (
        <>
          <rect x="5" y="7" width="38" height="34" rx="1" />
          <path d="M24 7v34M5 24h38" />
          <path d="m12 18 7-5v10l-7-5ZM29 32l7-5v10l-7-5Z" />
        </>
      )}
    </svg>
  );
}

function App() {
  const [activePhoto, setActivePhoto] = useState(0);
  useEffect(() => {
    document.title = "BetsaryMoon.exe";
  }, []);

  const [stackRatio, setStackRatio] = useState("4 / 3");
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("TODO");
  const [sysOpen, setSysOpen] = useState(false);
  const [sysReply, setSysReply] = useState(
    "SYS_READY // Selecciona un comando para consultar el archivo o saltar de módulo.",
  );
  const [inspectedReel, setInspectedReel] = useState<string | null>(null);

  const visibleItems =
    selectedCategory === "TODO"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const safeIndex = activePhoto % Math.max(visibleItems.length, 1);
  const currentVisibleItem = visibleItems[safeIndex];

  const handleNextPhoto = () => {
    if (!visibleItems.length) return;
    setActivePhoto((prev) => (prev + 1) % visibleItems.length);
  };

  const handlePreviousPhoto = () => {
    if (!visibleItems.length) return;
    setActivePhoto((prev) => (prev - 1 + visibleItems.length) % visibleItems.length);
  };

  const handleSelectCategory = (cat: GalleryCategory) => {
    setSelectedCategory(cat);
    setActivePhoto(0);
  };

  const handleSysPrompt = (item: (typeof sysPrompts)[number]) => {
    setSysReply(item.a);
    if (item.targetId) {
      const el = document.getElementById(item.targetId);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#inicio">
          BETSARYMOON<span>.EXE</span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#perfil">Perfil</a>
          <a href="#trabajo">Trabajo</a>
          <a href="#animacion">3D</a>
          <a href="#proceso">Proceso</a>
        </nav>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setSysOpen((o) => !o)}
            className="sys-toggle border border-white/30 px-2.5 py-1 text-[10px] tracking-widest uppercase hover:border-[#e51b23] hover:text-[#e51b23] transition cursor-pointer"
          >
            {sysOpen ? "CLOSE //" : "// SYS"}
          </button>
          <span className="status">
            <i /> DISPONIBLE PARA CREAR
          </span>
        </div>
      </header>

      {sysOpen && (
        <aside
          aria-label="Consola de sistema"
          className="fixed bottom-5 right-5 z-50 w-[min(92vw,360px)] bg-[#0a0a0a] text-white border-2 border-[#e51b23] shadow-[8px_8px_0_#e8e4dc] p-4 font-mono text-xs"
        >
          <div className="flex items-center justify-between border-b border-white/20 pb-2 mb-3">
            <span className="text-[10px] tracking-[0.16em] text-[#d6ef35] font-semibold">
              NAVIGATOR // HELP
            </span>
            <button
              type="button"
              onClick={() => setSysOpen(false)}
              className="text-white/70 hover:text-[#e51b23] cursor-pointer text-xs"
              aria-label="Cerrar consola"
            >
              [×]
            </button>
          </div>
          <p className="text-[11px] leading-relaxed text-[#e8e4dc] mb-3 min-h-[42px]">{sysReply}</p>
          <div className="flex flex-col gap-1.5">
            {sysPrompts.map((p) => (
              <button
                key={p.q}
                type="button"
                onClick={() => handleSysPrompt(p)}
                className="text-left text-[10px] tracking-wider uppercase px-2.5 py-1.5 bg-white/5 hover:bg-[#e51b23] hover:text-black transition cursor-pointer"
              >
                &gt; {p.q}
              </button>
            ))}
          </div>
        </aside>
      )}

      <section id="inicio" className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <img className="hero-eyes-mobile-art" src={eyesGif} alt="" aria-hidden="true" />
            <p className="eyebrow">DISEÑADORA MULTIMEDIA</p>
            <h1>
              HAGO
              <br />
              <em>VISIBLE</em>
              <br />
              LO QUE
              <br />
              INCOMODA.
            </h1>
            <p className="hero-intro">
              Diseño personajes, imágenes y experiencias con pulso propio. Mi lenguaje vive entre lo{" "}
              <strong>experimental</strong>, lo visceral y la nostalgia digital.
            </p>
            <a href="#trabajo" className="primary-link">
              VER ARCHIVO VISUAL <span>↓</span>
            </a>
          </div>
          <figure className="hero-art">
            <div className="xp-window">
              <div className="xp-title">
                <span>identidad_final_FINAL.psd</span>
                <b>—</b>
                <b>□</b>
                <b>×</b>
              </div>
              <img src={heroPortrait} alt="Retrato digital de personaje de cabello rojo" />
            </div>
            <img className="hero-eyes-art" src={eyesGif} alt="" aria-hidden="true" />
            <img className="devil-sticker" src={devilIcon} alt="" aria-hidden="true" />
            <span className="stamp">
            <img src={stampImg} alt="Sello Caos con método" />
            </span>
          </figure>
        </div>
        <div className="ticker" aria-hidden="true">
          <div>
            ILUSTRACIÓN ✦ ANIMACIÓN ✦ DISEÑO VISUAL ✦ PERSONAJES ✦ STORYTELLING ✦ ILUSTRACIÓN ✦
            ANIMACIÓN ✦ DISEÑO VISUAL ✦
          </div>
        </div>
      </section>

      <section id="perfil" className="profile section-pad survival-profile survival-section">
        <div className="survival-texture" aria-hidden="true" />
        <div className="survival-vignette" aria-hidden="true" />
        <div className="survival-hud survival-hud-left" aria-hidden="true">
          <span>FILE_01</span>
          <b>PROFILE DATA</b>
        </div>
        <div className="survival-hud survival-hud-right" aria-hidden="true">
          <i />
          SIGNAL UNSTABLE
        </div>
        <div className="profile-title">
          <h2>
            No diseño para
            <br />
            decorar. Diseño para
            <br />
            <em>provocar algo.</em>
          </h2>
          <p>SOY UNA DISEÑADORA MULTIMEDIA QUE USA LA IMAGEN COMO UN ESPACIO DE TENSIÓN.</p>
        </div>
        <blockquote className="featured-quote">
          <span>“</span>
          <p>
            Art should comfort the disturbed
            <br />
            and disturb the comfortable.
          </p>
          <cite>— Cesar A. Cruz</cite>
        </blockquote>
        <div className="profile-body">
          <p className="big-copy">
            Me interesa lo que tiene una grieta: la belleza rara, los cuerpos imposibles, los rojos
            que gritan y las historias que se quedan rondando después de verlas.
          </p>
          <div className="manifesto">
            <p>
              Mi formación me permite moverme entre disciplinas y entender un proyecto como un
              sistema completo, no como una pieza aislada. Aporto curiosidad, sensibilidad narrativa
              y una mirada que no teme ensuciarse.
            </p>
            <p>
              La música dirige el ritmo. El cine define la luz. Los libros alimentan la atmósfera.
              Después, dibujo hasta encontrar la forma exacta.
            </p>
          </div>
        </div>
        <div className="survival-save" aria-hidden="true">
          <span>SAVE DATA</span>
          <span>MEMORY CARD / SLOT 01</span>
          <b>▓▓▓▓▓▓▓▓░░ 82%</b>
        </div>
        <div className="survival-glitch-bar" aria-hidden="true" />
        <style>{`
          .survival-profile {
            position: relative;
            isolation: isolate;
            overflow: hidden;
            background: #d5d1c7;
          }
          .survival-section {
            position: relative;
            isolation: isolate;
            overflow: hidden;
            background: #d5d1c7;
            color: #15120f;
          }
          .survival-section.survival-dark {
            background: #0a0a0a;
            color: #e8e4dc;
          }
          .survival-section.survival-blood {
            background: #761417;
            color: #e8e4dc;
          }
          .survival-section > *:not(.survival-texture):not(.survival-vignette):not(style) {
            position: relative;
            z-index: 2;
          }
          .topbar,
          .survival-section .section-index,
          .survival-hud,
          .eyebrow,
          .stack-card figcaption,
          .stack-counter,
          .stack-hint,
          .reel-meta,
          .animation-footer,
          .process-list > article > span {
            font-family: "VCR OSD Mono", "IBM Plex Mono", monospace;
          }
          .survival-texture {
            position: absolute;
            z-index: 0;
            inset: 0;
            background-image: url("/profile-survival-texture.png");
            background-size: 510px auto;
            background-repeat: repeat;
            opacity: .17;
            filter: grayscale(.35) contrast(1.45) sepia(.4);
            mix-blend-mode: multiply;
            pointer-events: none;
          }
          .survival-section .section-index {
            border-color: rgba(54, 27, 17, .65);
            color: #351b13;
            text-shadow: 1px 0 rgba(229, 27, 35, .55);
          }
          .survival-section .work-heading h2,
          .survival-section.animation h2,
          .survival-section.strengths h2,
          .survival-section.process h2 {
            color: #11100d;
            text-shadow: 3px 0 0 rgba(132, 20, 20, .28), -2px 0 0 rgba(33, 71, 63, .25);
            animation: profile-title-glitch 6s steps(1, end) infinite;
          }
          .survival-section .work-heading h2 em,
          .survival-section.animation h2 em,
          .survival-section.strengths h2 em,
          .survival-section.process h2 em {
            color: #9d171b;
          }
          .survival-section .work-heading > div > p,
          .survival-section .animation-head > p,
          .survival-section .reel-meta p,
          .survival-section .process-head > p {
            color: #493b34;
          }
          .survival-section .canvas-intro h3 {
            color: #15120f;
            text-shadow: 2px 0 rgba(132, 20, 20, .2);
          }
          .survival-section .canvas-intro p,
          .survival-section .canvas-process figcaption {
            color: #493b34;
          }
          .survival-section .animation-footer {
            border-color: rgba(35, 20, 14, .65);
          }
          .survival-section.survival-dark .survival-texture {
            opacity: .14;
            filter: grayscale(.7) contrast(1.3);
            mix-blend-mode: screen;
          }
          .survival-section.survival-dark .survival-vignette {
            box-shadow: inset 0 0 160px 35px rgba(0, 0, 0, .8);
          }
          .survival-section.survival-dark::before {
            background: repeating-linear-gradient(
              0deg,
              transparent 0,
              transparent 3px,
              rgba(255, 255, 255, .035) 4px
            );
          }
          .survival-section.survival-dark .section-index {
            border-color: rgba(232, 228, 220, .28);
            color: #a9a197;
            text-shadow: 1px 0 rgba(229, 27, 35, .65);
          }
          .survival-section.survival-dark .survival-hud {
            color: #b4aaa0;
          }
          .survival-section.survival-dark .reel-meta {
            border-color: rgba(232, 228, 220, .25);
          }
          .survival-section.survival-dark h2 {
            color: #e8e4dc;
            text-shadow: 3px 0 rgba(132, 20, 20, .55), -2px 0 rgba(33, 71, 63, .3);
          }
          .survival-section.survival-dark h2 em {
            color: #e51b23;
          }
          .survival-section.survival-dark .work-heading > div > p,
          .survival-section.survival-dark .animation-head > p,
          .survival-section.survival-dark .reel-meta p,
          .survival-section.survival-dark .reel > p,
          .survival-section.survival-dark .canvas-intro p,
          .survival-section.survival-dark .canvas-process figcaption {
            color: #aaa39a;
          }
          .survival-section.survival-dark .canvas-intro h3 {
            color: #e8e4dc;
            text-shadow: 2px 0 rgba(229, 27, 35, .35);
          }
          .survival-section.survival-dark .animation-footer {
            border-color: rgba(232, 228, 220, .3);
          }
          .survival-section.survival-blood::before {
            background: repeating-linear-gradient(
              0deg,
              transparent 0,
              transparent 3px,
              rgba(0, 0, 0, .12) 4px
            );
          }
          .survival-section.survival-blood .section-index {
            border-color: rgba(10, 10, 10, .45);
            color: #27090a;
          }
          .survival-section.survival-blood .survival-hud {
            color: #e8c5bd;
          }
          .survival-section.survival-blood h2 {
            color: #e8e4dc;
            text-shadow: 3px 0 rgba(10, 10, 10, .45), -2px 0 rgba(229, 27, 35, .4);
          }
          .survival-section.survival-blood h2 em,
          .survival-section.survival-blood .process-head > p,
          .survival-section.survival-blood .process-list p {
            color: #f0d7d1;
          }
          .survival-section.survival-blood .process-list,
          .survival-section.survival-blood .process-list article {
            border-color: rgba(10, 10, 10, .58);
          }
          .survival-section.survival-blood .process-list > article > span,
          .survival-section.survival-blood .process-list i {
            color: #170809;
          }
          .survival-section .survival-glitch-bar {
            top: 46%;
          }
          .survival-section::before {
            content: "";
            position: absolute;
            z-index: 1;
            inset: 0;
            background: repeating-linear-gradient(
              0deg,
              transparent 0,
              transparent 3px,
              rgba(10, 10, 10, .07) 4px
            );
            pointer-events: none;
          }
          .survival-vignette {
            position: absolute;
            z-index: 1;
            inset: 0;
            box-shadow: inset 0 0 140px 35px rgba(16, 9, 5, .6);
            pointer-events: none;
          }
          .survival-profile .section-index {
            border-color: rgba(54, 27, 17, .65);
            color: #351b13;
            text-shadow: 1px 0 rgba(229, 27, 35, .55);
          }
          .survival-profile .profile-title h2 {
            color: #11100d;
            text-shadow: 3px 0 0 rgba(132, 20, 20, .28), -2px 0 0 rgba(33, 71, 63, .25);
            animation: profile-title-glitch 6s steps(1, end) infinite;
          }
          .survival-profile .profile-title h2 em {
            color: #9d171b;
            filter: saturate(.8) contrast(1.3);
          }
          .survival-profile .featured-quote {
            background: #8f1718;
            color: #e4ded1;
            border: 1px solid #34110e;
            box-shadow: 10px 10px 0 #18110e, inset 0 0 45px rgba(0, 0, 0, .35);
          }
          .survival-profile .featured-quote::after {
            content: "ERROR // COMFORT NOT FOUND";
            position: absolute;
            right: 14px;
            top: 12px;
            font-size: 8px;
            letter-spacing: .16em;
            color: rgba(255, 255, 255, .55);
          }
          .survival-hud {
            position: absolute !important;
            z-index: 3 !important;
            display: flex;
            align-items: center;
            gap: 9px;
            font-size: 8px;
            letter-spacing: .16em;
            color: #471b16;
          }
          .survival-hud-left {
            top: 18px;
            left: 5vw;
              font-size: 15px;
          }
          .survival-hud-left span {
            padding: 4px 6px;
            background: #761417;
            color: #e8e4dc;
            font-size: 15px;
          }
          .survival-hud-right {
            top: 22px;
            right: 5vw;
            font-size: 15px;
          }
          .survival-hud-right i {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #991419;
            box-shadow: 0 0 8px #991419;
            animation: profile-signal 1.2s steps(2, end) infinite;
          }
          .survival-save {
            margin-top: 65px;
            padding: 13px 15px;
            border: 1px solid rgba(35, 20, 14, .72);
            background: rgba(17, 14, 11, .9);
            color: #c8c0ad;
            display: grid;
            grid-template-columns: 1fr 1fr auto;
            gap: 20px;
            align-items: center;
            font-size: 8px;
            letter-spacing: .14em;
            box-shadow: 5px 5px 0 rgba(111, 20, 21, .7);
          }
          .survival-save b {
            color: #a72726;
            font-weight: 500;
          }
          .survival-glitch-bar {
            position: absolute !important;
            z-index: 4 !important;
            left: 0;
            top: 46%;
            width: 100%;
            height: 2px;
            opacity: 0;
            background: rgba(205, 35, 39, .8);
            box-shadow: 0 3px 0 rgba(17, 63, 57, .65), 0 -5px 0 rgba(0, 0, 0, .35);
            animation: profile-glitch-bar 5.4s steps(1, end) infinite;
            pointer-events: none;
          }
          @keyframes profile-title-glitch {
            0%, 91%, 94%, 100% { transform: translate(0); clip-path: none; }
            92% { transform: translate(4px, -1px); clip-path: inset(16% 0 58% 0); }
            93% { transform: translate(-3px, 1px); clip-path: inset(62% 0 12% 0); }
          }
          @keyframes profile-glitch-bar {
            0%, 88%, 91%, 100% { opacity: 0; transform: translateY(0) scaleX(1); }
            89% { opacity: .8; transform: translateY(-90px) scaleX(.65); }
            90% { opacity: .45; transform: translateY(130px) scaleX(1); }
          }
          @keyframes profile-signal {
            0%, 60% { opacity: 1; }
            61%, 100% { opacity: .2; }
          }
          @media (prefers-reduced-motion: reduce) {
            .survival-section h2,
            .survival-glitch-bar,
            .survival-hud-right i { animation: none; }
          }
          @media (max-width: 600px) {
            .survival-hud-right { display: none; }
            .survival-vignette { box-shadow: inset 0 0 70px 15px rgba(16, 9, 5, .55); }
            .survival-save { grid-template-columns: 1fr; gap: 8px; }
            .survival-profile .featured-quote::after { display: none; }
            .survival-section .work-heading h2,
            .survival-section.animation h2,
            .survival-section.process h2 { font-size: 43px; }
            .survival-section.strengths h2 { font-size: 38px; }
          }
        `}</style>
      </section>

      <section id="trabajo" className="work section-pad survival-section survival-dark">
        <div className="survival-texture" aria-hidden="true" />
        <div className="survival-vignette" aria-hidden="true" />
        <div className="survival-hud survival-hud-left" aria-hidden="true">
          <span>FILE_02</span>
          <b>VISUAL ARCHIVE</b>
        </div>
        <div className="survival-hud survival-hud-right" aria-hidden="true">
          <i />
          SIGNAL UNSTABLE
        </div>
        <div className="survival-glitch-bar" aria-hidden="true" />
        <div className="work-heading">
          <h2>
            PERSONAJES,
            <br />
            CARNE <em>&</em> RUIDO.
          </h2>
          <div>
            <p>
              Una selección de exploraciones digitales y análogas. Haz clic sobre las fotos apiladas
              o utiliza los controles para recorrer el archivo en ambas direcciones.
            </p>
            <div
              className="flex flex-wrap gap-2 mt-5"
              role="group"
              aria-label="Filtrar archivo visual"
            >
              {categories.map((cat) => {
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handleSelectCategory(cat)}
                    className={`px-3 py-1.5 text-[10px] tracking-[0.14em] uppercase border transition cursor-pointer ${
                      active
                        ? "bg-[#e51b23] text-white border-[#e51b23] font-semibold"
                        : "bg-transparent text-[#999] border-[#333] hover:border-white hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="photo-stack-wrapper">
          <div
            className="photo-stack"
            style={{ aspectRatio: stackRatio }}
            onClick={handleNextPhoto}
            role="button"
            tabIndex={0}
            aria-label="Pasar a la siguiente fotografía del archivo visual"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " " || e.key === "ArrowRight") {
                e.preventDefault();
                handleNextPhoto();
              } else if (e.key === "ArrowLeft") {
                e.preventDefault();
                handlePreviousPhoto();
              }
            }}
          >
            {visibleItems.map((item, idx) => {
              const offset = (idx - safeIndex + visibleItems.length) % visibleItems.length;
              const isVisible = offset < 4;
              const angles = [0, -3.5, 4, -2];
              const xShifts = [0, -14, 16, -8];
              const yShifts = [0, 8, 14, 20];
              const isTop = offset === 0;

              return (
                <figure
                  key={item.title}
                  className={`stack-card ${isTop ? "is-top" : ""}`}
                  style={{
                    zIndex: visibleItems.length - offset,
                    opacity: isVisible ? 1 - offset * 0.14 : 0,
                    pointerEvents: isTop ? "auto" : "none",
                    transform: isVisible
                      ? `translate(${xShifts[offset]}px, ${yShifts[offset]}px) rotate(${angles[offset]}deg) scale(${1 - offset * 0.03})`
                      : "translate(0px, 30px) scale(0.88)",
                  }}
                >
                  <div className="stack-image-frame">
                    <img
                      src={item.src}
                      alt={item.alt}
                      draggable={false}
                      onLoad={(e) => {
                        if (isTop) {
                          const { naturalWidth, naturalHeight } = e.currentTarget;
                          if (naturalWidth && naturalHeight) {
                            setStackRatio(`${naturalWidth} / ${naturalHeight}`);
                          }
                        }
                      }}
                    />
                  </div>
                  <figcaption>
                    <div>
                      <b>{item.title}</b>
                      <span>{item.meta}</span>
                    </div>
                    <span className="stack-counter">
                      {String(idx + 1).padStart(2, "0")} /{" "}
                      {String(visibleItems.length).padStart(2, "0")} ↻
                    </span>
                  </figcaption>
                </figure>
              );
            })}
          </div>

          <div className="flex items-center justify-center gap-5 mt-6" role="group" aria-label="Controles del archivo visual">
            <button
              type="button"
              onClick={handlePreviousPhoto}
              disabled={visibleItems.length <= 1}
              className="border border-[#555] px-4 py-2 text-[10px] tracking-[0.14em] uppercase text-[#e8e4dc] hover:border-[#e51b23] hover:text-[#e51b23] disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
              aria-label="Ver fotografía anterior"
            >
              ← ANTERIOR
            </button>
            <span className="text-[10px] tracking-[0.14em] text-[#aaa] tabular-nums">
              {String(safeIndex + 1).padStart(2, "0")} / {String(visibleItems.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={handleNextPhoto}
              disabled={visibleItems.length <= 1}
              className="border border-[#555] px-4 py-2 text-[10px] tracking-[0.14em] uppercase text-[#e8e4dc] hover:border-[#e51b23] hover:text-[#e51b23] disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
              aria-label="Ver fotografía siguiente"
            >
              SIGUIENTE →
            </button>
          </div>


        </div>

        <div className="canvas-process">
          <div className="canvas-intro">
            <span>CASO DE PROCESO / 01</span>
            <h3>
              DEL CARBÓN
              <br />
              AL COLOR.
            </h3>
            <p>
              La imagen aparece por capas: primero el gesto y la composición; después, la sombra
              organiza el espacio; al final, el color empuja la emoción.
            </p>
          </div>
          <figure>
            <img src={canvasSketch} alt="Boceto inicial de pintura sobre lienzo" />
            <figcaption>01 · TRAZO</figcaption>
          </figure>
          <figure>
            <img src={canvasStructure} alt="Estructura y fondo en carboncillo sobre lienzo" />
            <figcaption>02 · ESTRUCTURA</figcaption>
          </figure>
          <figure>
            <img src={canvasColor} alt="Primera capa de color aplicada a la pintura" />
            <figcaption>03 · COLOR</figcaption>
          </figure>
        </div>
      </section>

      <section id="animacion" className="animation section-pad survival-section survival-dark">
        <div className="survival-texture" aria-hidden="true" />
        <div className="survival-vignette" aria-hidden="true" />
        <div className="survival-hud survival-hud-left" aria-hidden="true">
          <span>FILE_03</span>
          <b>MOTION DATA</b>
        </div>
        <div className="survival-hud survival-hud-right" aria-hidden="true">
          <i />
          SIGNAL UNSTABLE
        </div>
        <div className="survival-glitch-bar" aria-hidden="true" />
        <div className="animation-head">
          <div>
            <p className="eyebrow red">MOVIMIENTO · PERSONAJE · ESPACIO</p>
            <h2>
              CUANDO EL
              <br />
              PERSONAJE
              <br />
              <em>RESPIRA.</em>
            </h2>
          </div>
          <p>
            Exploro actuación, pose, ritmo y cámara para transformar un modelo en una presencia.
            Cada movimiento debe contar algo, incluso antes del diálogo.
          </p>
        </div>
        <div className="reel-grid">
          <article className="reel reel-featured">
            <div className="video-shell">
              <video
                src={characterLoop}
                poster={characterPoster}
                autoPlay
                muted
                loop
                playsInline
                controls
                aria-label="Loop de actuación de personaje 3D"
              />
              <span>LOOP / 00:03</span>
            </div>
            <div className="reel-meta">
              <div>
                <b>01 / CHARACTER LOOP</b>
                <p>Actuación · pose · animación estilizada</p>
              </div>
              <button
                type="button"
                onClick={() => setInspectedReel((r) => (r === "loop" ? null : "loop"))}
                className="underline text-[9px] tracking-widest uppercase cursor-pointer"
              >
                {inspectedReel === "loop" ? "OCULTAR NOTA" : "INSPECCIONAR"}
              </button>
            </div>
            {inspectedReel === "loop" && (
              <p className="text-[10px] text-[#2b2a40] mt-2 leading-relaxed">
                Foco en inercia secundaria, limpieza de arcos y lectura inmediata de la pose clave.
              </p>
            )}
          </article>
          <article className="reel">
            <div className="video-shell">
              <video
                src={classroomPerformance}
                poster={performancePoster}
                autoPlay
                muted
                loop
                playsInline
                controls
                aria-label="Animación 3D de personaje en un salón"
              />
              <span>SHOT / 00:03</span>
            </div>
            <div className="reel-meta">
              <div>
                <b>02 / CLASSROOM PERFORMANCE</b>
                <p>Blocking · composición · timing</p>
              </div>
              <button
                type="button"
                onClick={() => setInspectedReel((r) => (r === "room" ? null : "room"))}
                className="underline text-[9px] tracking-widest uppercase cursor-pointer"
              >
                {inspectedReel === "room" ? "OCULTAR NOTA" : "INSPECCIONAR"}
              </button>
            </div>
            {inspectedReel === "room" && (
              <p className="text-[10px] text-[#2b2a40] mt-2 leading-relaxed">
                Trabajo de espacio escénico, encuadre y pausa antes del cambio de intención.
              </p>
            )}
          </article>
          <article className="reel">
            <div className="video-shell">
              <video
                src={classroomAction}
                poster={actionPoster}
                autoPlay
                muted
                loop
                playsInline
                controls
                aria-label="Secuencia de acción animada en 3D"
              />
              <span>SHOT / 00:04</span>
            </div>
            <div className="reel-meta">
              <div>
                <b>03 / ACTION STUDY</b>
                <p>Peso · anticipación · continuidad</p>
              </div>
              <button
                type="button"
                onClick={() => setInspectedReel((r) => (r === "action" ? null : "action"))}
                className="underline text-[9px] tracking-widest uppercase cursor-pointer"
              >
                {inspectedReel === "action" ? "OCULTAR NOTA" : "INSPECCIONAR"}
              </button>
            </div>
            {inspectedReel === "action" && (
              <p className="text-[10px] text-[#2b2a40] mt-2 leading-relaxed">
                Énfasis en anticipación, transferencia de peso y seguimiento en la trayectoria.
              </p>
            )}
          </article>
        </div>
        <div className="animation-footer">
          <span>3D ANIMATION</span>
          <span>CHARACTER PERFORMANCE</span>
          <span>VISUAL STORYTELLING</span>
        </div>
      </section>

      <section className="strengths section-pad survival-section">
        <div className="survival-texture" aria-hidden="true" />
        <div className="survival-vignette" aria-hidden="true" />
        <div className="survival-hud survival-hud-left" aria-hidden="true">
          <span>FILE_04</span>
          <b>SKILL DATA</b>
        </div>
        <div className="survival-hud survival-hud-right" aria-hidden="true">
          <i />
          SIGNAL UNSTABLE
        </div>
        <div className="survival-glitch-bar" aria-hidden="true" />
        <div className="strength-layout">
          <div>
            <p className="eyebrow red">NO SOLO EJECUTO</p>
            <h2>
              Veo la historia
              <br />
              detrás de la
              <br />
              <em>forma.</em>
            </h2>
          </div>
          <div className="skills-list">
            {skills.map(([n, title, text]) => (
              <article key={n}>
                <span>{n}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="tools" role="group" aria-label="Herramientas de trabajo">
          <div className="tools-header">
            <div>
              <span>TOOLBOX</span>
              <small>SOFTWARE + OFICIO</small>
            </div>
            <span className="tools-capacity">INVENTARIO // 08·08</span>
          </div>
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <article className={`tool-slot tool-slot-${tool.id}`} key={tool.id}>
                <span className="tool-slot-index">{String(index + 1).padStart(2, "0")}</span>
                <div className="tool-icon-frame">
                  <ToolIcon {...tool} />
                </div>
                <span className="tool-name">{tool.name}</span>
                <span className="tool-slot-status">READY</span>
              </article>
            ))}
          </div>
          <div className="tools-footer">
            <span>MEMORY CASE / SLOT 04</span>
            <span>LOAD STATUS: 100%</span>
          </div>
        </div>
      </section>

      <section id="proceso" className="process section-pad survival-section survival-blood">
        <div className="survival-texture" aria-hidden="true" />
        <div className="survival-vignette" aria-hidden="true" />
        <div className="survival-hud survival-hud-left" aria-hidden="true">
          <span>FILE_05</span>
          <b>PROCESS DATA</b>
        </div>
        <div className="survival-hud survival-hud-right" aria-hidden="true">
          <i />
          SIGNAL UNSTABLE
        </div>
        <div className="survival-glitch-bar" aria-hidden="true" />
        <div className="process-head">
          <h2>
            DEL RUIDO
            <br />A LA <em>FORMA.</em>
          </h2>
          <p>
            Mi proceso no es lineal, pero sí intencional. Investigo desde la intuición y edito desde
            el criterio.
          </p>
        </div>
        <div className="process-list">
          {process.map(([n, title, text]) => (
            <article key={n}>
              <span>{n}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <i>↘</i>
            </article>
          ))}
        </div>
        <img className="centipede-art" src={centipedeGif} alt="" aria-hidden="true" />
      </section>

      <footer>
        <p>
          ¿TIENES UNA IDEA
          <br />
          QUE NECESITA <em>DIENTES?</em>
        </p>
        <img className="teeth-art" src={teethImage} alt="" aria-hidden="true" />
        <a href="https://www.instagram.com/betsarymoon/">HABLEMOS ↗</a>
        <div>
          <span>DISEÑO MULTIMEDIA · 2026</span>
          <span>HECHO CON RUIDO, CURIOSIDAD Y ANSIEDAD</span>
        </div>
      </footer>
    </main>
  );
}

export default App;
