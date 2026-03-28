"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

function RevealWords({ text, className = "" }) {
  return (
    <div className={className}>
      {text.split(" ").map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: i * 0.04, duration: 0.45 }}
          className="mr-3 inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

function Grain() {
  return <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:radial-gradient(#0f172a_0.6px,transparent_0.6px)] [background-size:12px_12px]" />;
}

export default function AnaxaSignatureLight() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f8fc] text-slate-900">

      {/* HEADER */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200/70 bg-white/70 px-10 py-6 backdrop-blur-xl">
        <div className="text-lg font-semibold tracking-wider">ANAXA</div>
        <nav className="space-x-8 text-sm text-slate-600">
          <span className="hover:text-slate-900 cursor-pointer">Accueil</span>
          <span className="hover:text-slate-900 cursor-pointer">Cabinet</span>
          <span className="hover:text-slate-900 cursor-pointer">Expertises</span>
          <span className="hover:text-slate-900 cursor-pointer">Contact</span>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-10 pt-24 pb-32">
        <motion.div
          aria-hidden
          animate={{ x: mouse.x * 50 - 25, y: mouse.y * 50 - 25 }}
          transition={{ type: "spring", stiffness: 40, damping: 18 }}
          className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-indigo-200/50 blur-3xl"
        />
        <motion.div
          aria-hidden
          animate={{ x: mouse.x * -70 + 35, y: mouse.y * -70 + 35 }}
          transition={{ type: "spring", stiffness: 36, damping: 16 }}
          className="absolute right-0 top-28 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl"
        />
        <Grain />
        <motion.h1
          variants={fade}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.8 }}
          className="relative z-10 text-6xl md:text-8xl lg:text-[8.5rem] font-semibold leading-[0.88] tracking-[-0.05em]"
        >
          Une autre idée
          <span className="block text-slate-400">de vos intérêts</span>
        </motion.h1>

        <motion.p
          variants={fade}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="relative z-10 mt-10 max-w-2xl text-xl text-slate-600 leading-relaxed"
        >
          Cabinet d'expertise comptable et de commissariat aux comptes.
          Nous transformons la complexité en décisions claires, fiables
          et stratégiques.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="relative z-10 mt-12 flex flex-wrap gap-4"
        >
          <button className="rounded-full bg-slate-900 px-6 py-3 text-white transition hover:bg-slate-800">Découvrir le cabinet</button>
          <button className="rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-slate-900 transition hover:bg-slate-100">Explorer les expertises</button>
        </motion.div>
      </section>

      {/* SPLIT SECTION */}
      <section className="px-10 py-24 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-xs uppercase tracking-[0.35em] text-slate-400">Manifeste</div>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold">
              L'intelligence au service de l'action
            </h2>
            <p className="mt-6 text-slate-600 leading-relaxed">
              ANAXA développe une approche globale qui relie audit, expertise, conseil et stratégie afin de sécuriser et accélérer les décisions des dirigeants.
            </p>
            <RevealWords text="Comprendre. Structurer. Sécuriser. Éclairer." className="mt-8 text-2xl font-medium leading-tight text-slate-900" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[linear-gradient(135deg,#ffffff,rgba(241,245,249,0.95))] p-10 shadow-[0_20px_80px_rgba(15,23,42,0.08)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.12),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.12),transparent_24%)]" />
            <Grain />
            <div className="relative space-y-4 text-lg">
              <div>Comprendre les enjeux</div>
              <div>Structurer les décisions</div>
              <div>Sécuriser les trajectoires</div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* EXPERTISES GRID */}
      <section className="px-10 py-24">
        <div className="mx-auto mb-10 max-w-7xl overflow-hidden rounded-full border border-slate-200 bg-white/70 py-4">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex w-[200%] whitespace-nowrap text-xs uppercase tracking-[0.35em] text-slate-500"
          >
            {Array.from({ length: 2 }).map((_, idx) => (
              <div key={idx} className="flex min-w-1/2 justify-around">
                <span>Audit</span><span>Expertise</span><span>Conseil</span><span>Vision</span><span>Indépendance</span><span>Structure</span>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-xs uppercase tracking-[0.35em] text-slate-400">Expertises</div>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold">Des missions structurées comme une architecture de décision.</h2>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {[
              "Audit",
              "Expertise comptable",
              "Conseil stratégique",
              "Corporate finance",
              "Restructuration",
              "Forensic"
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_80px_rgba(15,23,42,0.10)]"
              >
                <div className="mb-4 text-xs uppercase tracking-[0.3em] text-slate-400">Mission</div>
                <h3 className="text-xl font-semibold">{item}</h3>
                <p className="mt-3 text-slate-600 text-sm">
                  Une approche experte et structurée au service de vos
                  décisions.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LARGE STATEMENT */}
      <section className="px-10 py-32 bg-slate-900 text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-[-0.04em]"
        >
          Une présence digitale plus claire, plus stratégique,
          plus différenciante.
        </motion.h2>
      </section>

      {/* CONTACT */}
      <section className="px-10 py-24 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-slate-400">Contact</div>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold">Entrer en relation avec le cabinet.</h2>
            <p className="mt-6 max-w-lg text-slate-600 leading-relaxed">
              Une prise de contact simple, confidentielle et claire, pensée comme une extension naturelle de l'expérience de marque.
            </p>
          </div>

          <div className="space-y-4 rounded-[2rem] border border-slate-200 bg-[#f8fbff] p-8 shadow-[0_20px_80px_rgba(15,23,42,0.06)]">
            <input className="w-full border border-slate-200 p-4 rounded-xl" placeholder="Nom" />
            <input className="w-full border border-slate-200 p-4 rounded-xl" placeholder="Email" />
            <textarea className="w-full border border-slate-200 p-4 rounded-xl" placeholder="Message" />
            <button className="rounded-full bg-slate-900 px-6 py-3 text-white transition hover:bg-slate-800">
              Envoyer
            </button>
          </div>

        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white/70 px-10 py-8 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-slate-500">Bureau ANAXA — version studio ultime</div>
          <div className="flex gap-6 text-sm text-slate-500">
            <span>Accueil</span>
            <span>Cabinet</span>
            <span>Expertises</span>
            <span>Contact</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
