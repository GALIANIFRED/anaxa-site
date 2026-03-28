"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  ChevronRight,
  CircleDot,
  FileText,
  Scale,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const expertises = [
  {
    title: "Conseils aux grandes entreprises",
    text: "Nous accompagnons les grandes entreprises dans leurs enjeux stratégiques, financiers et organisationnels avec une approche globale et intégrée.",
    details: [
      "Analyse stratégique et financière des projets",
      "Structuration des opérations complexes",
      "Accompagnement des phases de croissance, acquisition ou restructuration",
      "Coordination des dimensions juridiques, fiscales et financières",
    ],
  },
  {
    title: "Audit et expertise des grandes entreprises",
    text: "Nos missions d'audit reposent sur une exigence absolue d'indépendance, de rigueur et de compréhension globale des enjeux de l'entreprise.",
    details: [
      "Commissariat aux comptes et certification des comptes",
      "Audit contractuel et examens limités",
      "Mise en place de systèmes de consolidation",
      "Analyse des risques et fiabilisation des processus",
    ],
  },
  {
    title: "Audit et expertise des PME",
    text: "Nous accompagnons les dirigeants de PME dans le pilotage de leur activité en intégrant les dimensions comptables, fiscales, sociales et stratégiques.",
    details: [
      "Suivi comptable et accompagnement quotidien",
      "Optimisation des choix juridiques et fiscaux",
      "Analyse de performance et tableaux de bord",
      "Sécurisation des décisions du dirigeant",
    ],
  },
  {
    title: "Organismes à but non lucratif",
    text: "Nous intervenons auprès d'associations, fondations et structures de l'économie sociale avec une parfaite maîtrise de leurs spécificités.",
    details: [
      "Audit et accompagnement des structures associatives",
      "Analyse des enjeux de gouvernance",
      "Respect des obligations réglementaires spécifiques",
      "Valorisation et sécurisation des ressources",
    ],
  },
  {
    title: "Consulting",
    text: "Nous accompagnons les transformations des organisations en apportant une vision structurée et opérationnelle des projets.",
    details: [
      "Organisation et optimisation des processus",
      "Amélioration de la performance",
      "Mise en place d'outils de pilotage",
      "Accompagnement des projets digitaux",
    ],
  },
  {
    title: "Corporate finance",
    text: "Nous intervenons sur les opérations financières structurantes avec une approche technique et indépendante.",
    details: [
      "Évaluation d'entreprises",
      "Acquisition et cession",
      "Structuration financière",
      "Recherche de financements",
    ],
  },
  {
    title: "Corporate recovery",
    text: "Nous accompagnons les entreprises en difficulté dans l'analyse de leur situation et la mise en œuvre de solutions de redressement.",
    details: [
      "Diagnostic financier et opérationnel",
      "Élaboration de plans de restructuration",
      "Analyse de solvabilité et de trésorerie",
      "Accompagnement des négociations avec les partenaires",
    ],
  },
  {
    title: "Forensic & litigation",
    text: "Nous intervenons dans des contextes sensibles nécessitant analyse, expertise et indépendance.",
    details: [
      "Investigations financières",
      "Analyse de fraudes et risques",
      "Assistance dans les litiges",
      "Expertise indépendante en contexte judiciaire",
    ],
  },
];

const resources = [
  {
    category: "Actualités",
    title: "Veille juridique, fiscale et sociale",
    text: "Le site publie régulièrement des actualités juridiques, fiscales et sociales pour aider les entreprises à suivre les évolutions qui les concernent.",
  },
  {
    category: "Agenda",
    title: "Échéances et calendrier",
    text: "Le portail propose un agenda comprenant les évènements, échéances fiscales, délais sociaux et manifestations.",
  },
  {
    category: "Guides, dossiers et outils",
    title: "Des contenus utiles et opérationnels",
    text: "Guides pratiques, indices et taux, dossiers du mois, vidéos, modèles de lettre et simulateurs complètent l'offre éditoriale du site.",
  },
];

const menu = [
  ["Accueil", "accueil"],
  ["Le cabinet", "cabinet"],
  ["Expertises", "expertises"],
  ["Ressources", "ressources"],
  ["Contact", "contact"],
] as const;

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  text,
  center = false,
}: {
  eyebrow: string;
  title: string;
  text: string;
  center?: boolean;
}) {
  return (
    <FadeIn>
      <div style={center ? { textAlign: "center" } : undefined}>
        <div className="eyebrow">{eyebrow}</div>
        <h2 className="section-title">{title}</h2>
        <p className="section-text" style={center ? { marginInline: "auto" } : undefined}>
          {text}
        </p>
      </div>
    </FadeIn>
  );
}

function PremiumPanel({
  label,
  title,
  text,
  children,
  reverse = false,
}: {
  label: string;
  title: string;
  text: string;
  children: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <FadeIn>
      <div className="split">
        <div style={reverse ? { order: 2 } : undefined}>
          <div className="panel" style={{ height: "100%", padding: 40 }}>
            <div className="eyebrow" style={{ marginBottom: 14 }}>{label}</div>
            <h3 style={{ margin: 0, fontSize: "clamp(2rem,4vw,3.5rem)", lineHeight: 0.95, letterSpacing: "-0.04em" }}>
              {title}
            </h3>
            <p className="section-text" style={{ marginTop: 24 }}>{text}</p>
          </div>
        </div>
        <div style={reverse ? { order: 1 } : undefined}>
          <div className="panel" style={{ minHeight: 320, padding: 40 }}>{children}</div>
        </div>
      </div>
    </FadeIn>
  );
}

export default function HomePage() {
  return (
    <main>
      <header
        className="glass"
        style={{ position: "sticky", top: 0, zIndex: 20, borderTop: 0, borderLeft: 0, borderRight: 0 }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 0" }}>
          <a href="#accueil" style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ display: "grid", placeItems: "center", width: 42, height: 42, borderRadius: 18, border: "1px solid rgba(255,255,255,.15)", background: "rgba(255,255,255,.05)" }}>
              <Scale size={18} />
            </div>
            <div>
              <div style={{ fontSize: 12, letterSpacing: ".30em", textTransform: "uppercase", color: "rgba(255,255,255,.45)" }}>Bureau</div>
              <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: ".18em" }}>ANAXA</div>
            </div>
          </a>
          <nav style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {menu.map(([label, id]) => (
              <a key={id} href={`#${id}`} style={{ color: "rgba(255,255,255,.72)", fontSize: 14 }}>{label}</a>
            ))}
          </nav>
          <a className="btn btn-primary" href="#contact">Nous contacter</a>
        </div>
      </header>

      <section id="accueil" className="container" style={{ padding: "80px 0 96px" }}>
        <div className="hero-grid">
          <FadeIn>
            <div>
              <div className="pill"><CircleDot size={14} /> Expertise comptable · audit · conseil</div>
              <h1 style={{ margin: "20px 0 0", fontSize: "clamp(3.5rem,8vw,7rem)", lineHeight: 0.9, letterSpacing: "-0.05em" }}>
                Une autre idée
                <span style={{ display: "block", color: "rgba(255,255,255,.45)" }}>de vos intérêts.</span>
              </h1>
              <p style={{ maxWidth: 760, marginTop: 28, color: "rgba(255,255,255,.70)", fontSize: "1.15rem", lineHeight: 1.9 }}>
                Sur la base des valeurs associées à l'univers d'Anaxagore, le cabinet affirme une ambition claire :
                devenir pour ses clients un accélérateur constant de progrès, de sécurité et de lecture stratégique.
              </p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 36 }}>
                <a className="btn btn-primary" href="#expertises">Découvrir nos expertises</a>
                <a className="btn btn-secondary" href="#cabinet">Le cabinet <ArrowRight size={16} /></a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="panel" style={{ padding: 32 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
                <div>
                  <div className="eyebrow" style={{ marginBottom: 10 }}>Positionnement</div>
                  <div style={{ fontSize: 28, fontWeight: 600 }}>Stimulateur de potentiels et de richesses</div>
                </div>
                <div style={{ border: "1px solid rgba(255,255,255,.10)", background: "rgba(255,255,255,.05)", padding: "8px 12px", borderRadius: 999, fontSize: 12, color: "rgba(255,255,255,.6)" }}>ANAXA</div>
              </div>
              {[
                "Fiabiliser",
                "Éclairer",
                "Accompagner",
              ].map((word) => (
                <motion.div key={word} whileHover={{ x: 6 }} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", borderRadius: 20, border: "1px solid rgba(255,255,255,.10)", background: "rgba(0,0,0,.20)", marginBottom: 14 }}>
                  <span style={{ fontSize: 32, fontWeight: 500 }}>{word}</span>
                  <ChevronRight size={18} color="rgba(255,255,255,.45)" />
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="marquee">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} style={{ display: "flex", gap: 40 }}>
              {[
                "Créer, gérer, pérenniser",
                "Préparer l'avenir",
                "Cultiver l'innovation",
                "Accélérer le progrès",
                "Audit • Conseil • Expertise",
                "Indépendance • Rigueur • Vision",
              ].map((item) => (
                <div key={`${i}-${item}`}>{item}</div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="container" style={{ padding: "96px 0" }}>
        <SectionTitle
          eyebrow="Signature"
          title="Une présence plus éditoriale, plus immersive, plus contemporaine."
          text="L'accueil devient une scène d'ouverture : identité forte, rythme typographique, respiration et mise en valeur des fondamentaux du cabinet."
          center
        />
        <div style={{ marginTop: 56, display: "grid", gap: 32 }}>
          <PremiumPanel
            label="Vision"
            title="L'intelligence au service de l'action."
            text="ANAXA ne se limite pas à produire une information fiable. Le cabinet cherche à rendre cette information décisive, exploitable et utile à ceux qui dirigent, arbitrent et projettent l'avenir."
          >
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
              <div className="eyebrow">Approche</div>
              <div style={{ display: "grid", gap: 18, fontSize: "clamp(1.8rem,4vw,3rem)", lineHeight: 1.05, fontWeight: 500 }}>
                <span>Comprendre les enjeux.</span>
                <span>Structurer les décisions.</span>
                <span>Sécuriser les trajectoires.</span>
              </div>
            </div>
          </PremiumPanel>
          <PremiumPanel
            label="Différence"
            title="Une lecture globale des entreprises et des organisations."
            text="L'approche d'ANAXA articule audit, expertise, fiscalité, conseil et structuration financière dans une même logique : relier la technique à la stratégie et la conformité à la performance."
            reverse
          >
            <div className="two-col" style={{ height: "100%" }}>
              {[
                "Audit",
                "Expertise",
                "Conseil",
                "Finance",
              ].map((item) => (
                <motion.div key={item} whileHover={{ y: -4 }} style={{ display: "flex", alignItems: "end", minHeight: 120, borderRadius: 24, border: "1px solid rgba(255,255,255,.10)", background: "rgba(0,0,0,.20)", padding: 22, fontSize: 28, fontWeight: 500 }}>
                  {item}
                </motion.div>
              ))}
            </div>
          </PremiumPanel>
        </div>
      </section>

      <section id="cabinet" className="container" style={{ padding: "48px 0 96px" }}>
        <SectionTitle
          eyebrow="Le cabinet"
          title="Une structure pensée pour durer, évoluer et éclairer."
          text="Le cabinet ANAXA s'inscrit dans une logique d'exigence, de continuité et d'intelligence stratégique."
          center
        />
        <div style={{ marginTop: 56, display: "grid", gap: 32 }}>
          <PremiumPanel
            label="Vision"
            title="L'expertise comme levier de décision"
            text="Le cabinet ne se limite pas à produire de l'information. Il transforme les données en décisions, et les contraintes en opportunités."
          >
            <div style={{ fontSize: "clamp(1.8rem,4vw,3rem)", lineHeight: 1.05, fontWeight: 500 }}>Lire • Comprendre • Anticiper • Décider</div>
          </PremiumPanel>
          <PremiumPanel
            label="Structure"
            title="Une organisation expérimentée"
            text="Trois experts-comptables associés, une équipe structurée et une approche pluridisciplinaire permettent d'intervenir sur des missions complexes avec précision."
            reverse
          >
            <div style={{ display: "grid", gap: 14, color: "rgba(255,255,255,.72)" }}>
              <div>Mathieu BACCI</div>
              <div>Jean-Michel MINICONI</div>
              <div>Stéphanie ROSSI</div>
              <div>Frédéric GALIANI</div>
              <div>Florent GALIANI</div>
            </div>
          </PremiumPanel>
          <div className="card-grid">
            {[
              [Building2, "Notre profession", "La profession d'expert-comptable relève de l'ordonnance du 19 septembre 1945 et couvre la tenue, la révision et l'appréciation des comptabilités ainsi que l'attestation de la régularité et de la sincérité des comptes."],
              [ShieldCheck, "Notre histoire", "Le cabinet a été créé par Mathieu BACCI en 1992. Au 1er janvier 2004 lui a succédé la SCEC Mathieu BACCI – Jean-Michel MINICONI – Bureau ANAXA, puis Stéphanie ROSSI a rejoint la structure au 1er janvier 2008."],
              [Scale, "Notre bureau aujourd'hui", "Le site présente aujourd'hui trois experts-comptables associés et commissaires aux comptes, une équipe support et dix collaborateurs, dans une logique de proximité et de continuité."],
            ].map(([Icon, title, text], index) => (
              <FadeIn key={title as string} delay={index * 0.06}>
                <div className="card">
                  <div style={{ display: "grid", placeItems: "center", width: 48, height: 48, borderRadius: 18, border: "1px solid rgba(255,255,255,.10)", background: "rgba(255,255,255,.05)" }}>
                    <Icon size={18} />
                  </div>
                  <h3 style={{ margin: "18px 0 0", fontSize: 24 }}>{title as string}</h3>
                  <p style={{ margin: "14px 0 0", color: "rgba(255,255,255,.68)", lineHeight: 1.8 }}>{text as string}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="expertises" className="container" style={{ padding: "48px 0 96px" }}>
        <SectionTitle
          eyebrow="Expertises"
          title="Des missions structurées pour accompagner chaque trajectoire."
          text="Chaque expertise est pensée comme un levier d'action au service de la performance et de la sécurité des organisations."
          center
        />
        <div style={{ marginTop: 56, display: "grid", gap: 32 }}>
          {expertises.map((item, index) => (
            <PremiumPanel
              key={item.title}
              label={`Mission 0${index + 1}`}
              title={item.title}
              text={item.text}
              reverse={index % 2 === 1}
            >
              <ul className="list">
                {item.details.map((detail) => (
                  <li key={detail}><span className="dot" /> <span>{detail}</span></li>
                ))}
              </ul>
            </PremiumPanel>
          ))}
        </div>
      </section>

      <section id="ressources" className="container" style={{ padding: "48px 0 96px" }}>
        <SectionTitle
          eyebrow="Ressources"
          title="Une offre éditoriale déjà riche, à valoriser davantage."
          text="Le portail actuel comprend des actualités, un agenda, des guides pratiques, des indices et taux, des dossiers du mois, des vidéos, des modèles de lettre et des simulateurs."
          center
        />
        <div className="card-grid" style={{ marginTop: 56 }}>
          {resources.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.06}>
              <div className="card">
                <div className="pill" style={{ letterSpacing: ".24em", paddingInline: 12 }}>{item.category}</div>
                <h3 style={{ margin: "18px 0 0", fontSize: 28 }}>{item.title}</h3>
                <p style={{ margin: "14px 0 0", color: "rgba(255,255,255,.68)", lineHeight: 1.8 }}>{item.text}</p>
                <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 10, color: "rgba(255,255,255,.82)" }}>
                  <FileText size={16} /> Accéder à la rubrique
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="contact" className="container" style={{ padding: "48px 0 96px" }}>
        <SectionTitle
          eyebrow="Contact"
          title="Entrer en relation avec le cabinet."
          text="Une approche simple, directe et confidentielle."
          center
        />
        <div className="two-col" style={{ marginTop: 56 }}>
          <PremiumPanel
            label="Coordonnées"
            title="Bureau ANAXA"
            text="Immeuble Ivoire · Route de Mezzavia"
          >
            <div style={{ display: "grid", gap: 12, color: "rgba(255,255,255,.72)" }}>
              <div>04 95 20 20 11</div>
              <div>04 95 20 96 35</div>
              <div>audit.conseil@bureauanaxa.com</div>
            </div>
          </PremiumPanel>
          <PremiumPanel
            label="Demande"
            title="Formulaire de contact"
            text="Nous vous recontactons rapidement."
            reverse
          >
            <div style={{ display: "grid", gap: 12 }}>
              {[
                "Nom / société",
                "Adresse e-mail",
                "Téléphone",
                "Votre message",
              ].map((field, index) => (
                <div key={field} style={{ border: "1px solid rgba(255,255,255,.10)", background: "rgba(255,255,255,.03)", borderRadius: 18, padding: index === 3 ? "24px 16px" : "16px", color: "rgba(255,255,255,.45)" }}>
                  {field}
                </div>
              ))}
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start", color: "rgba(255,255,255,.55)", fontSize: 14, lineHeight: 1.6 }}>
                <div style={{ width: 16, height: 16, borderRadius: 4, border: "1px solid rgba(255,255,255,.20)", marginTop: 3 }} />
                J'accepte que les informations transmises soient utilisées pour me recontacter dans le cadre de ma demande.
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
                <button className="btn btn-primary">Envoyer la demande</button>
                <button className="btn btn-secondary">Prendre rendez-vous</button>
              </div>
            </div>
          </PremiumPanel>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: 24 }}>
        <div className="panel" style={{ padding: 36 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 24, flexWrap: "wrap" }}>
            <div>
              <div className="pill"><Sparkles size={14} /> Refonte premium</div>
              <h3 style={{ margin: "20px 0 0", maxWidth: 760, fontSize: "clamp(2rem,5vw,4rem)", lineHeight: 0.95, letterSpacing: "-0.04em" }}>
                Une présence digitale plus immersive, plus précise, plus mémorable.
              </h3>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a className="btn btn-primary" href="#contact">Nous contacter</a>
              <a className="btn btn-secondary" href="#expertises">Explorer les missions</a>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid rgba(255,255,255,.10)", background: "rgba(0,0,0,.20)" }}>
        <div className="container" style={{ padding: "48px 0 24px" }}>
          <div className="footer-grid">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ display: "grid", placeItems: "center", width: 42, height: 42, borderRadius: 18, border: "1px solid rgba(255,255,255,.15)", background: "rgba(255,255,255,.05)" }}>
                  <Scale size={18} />
                </div>
                <div style={{ fontSize: 18, fontWeight: 600 }}>Bureau ANAXA</div>
              </div>
              <p style={{ marginTop: 16, color: "rgba(255,255,255,.58)", lineHeight: 1.8, maxWidth: 360 }}>
                Cabinet d'expertise comptable et de commissariat aux comptes. Accompagnement des entreprises, organisations et dirigeants.
              </p>
            </div>
            <div>
              <div className="eyebrow">Navigation</div>
              <div style={{ display: "grid", gap: 10, color: "rgba(255,255,255,.62)" }}>
                {menu.map(([label, id]) => (
                  <a key={id} href={`#${id}`}>{label}</a>
                ))}
              </div>
            </div>
            <div>
              <div className="eyebrow">Contact</div>
              <div style={{ display: "grid", gap: 10, color: "rgba(255,255,255,.62)" }}>
                <div>Immeuble Ivoire</div>
                <div>Route de Mezzavia</div>
                <div>04 95 20 20 11</div>
                <div>audit.conseil@bureauanaxa.com</div>
              </div>
            </div>
            <div>
              <div className="eyebrow">Légal</div>
              <div style={{ display: "grid", gap: 10, color: "rgba(255,255,255,.62)" }}>
                <a href="#">Mentions légales</a>
                <a href="#">Confidentialité</a>
                <a href="#">Cookies</a>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 36, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,.10)", color: "rgba(255,255,255,.40)", fontSize: 12 }}>
            © {new Date().getFullYear()} Bureau ANAXA — Prototype optimisé pour mise en ligne
          </div>
        </div>
      </footer>
    </main>
  );
}
