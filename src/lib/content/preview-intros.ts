export interface PreviewIntroContent {
  title: string;
  overview: string;
  currentPreview: string;
  currentWork: string;
  futureDirection: string;
  whyItMatters: string;
  status?: { preview?: string; research?: string; mockNote?: string };
  researchTrajectory?: string[];
}

export const PREVIEW_INTROS: Record<string, PreviewIntroContent> = {
  "ngn-ntn": {
    title: "NGN/NTN–PPDR Digital Twin Preview",
    overview:
      "This preview represents ongoing work on a digital-twin-oriented environment for resilient communications across terrestrial and non-terrestrial network architectures, with emphasis on public protection and disaster relief (PPDR), scenario evaluation, KPI analysis, and operator-facing workflow understanding.",
    currentPreview:
      "The current interactive preview demonstrates representative scenario selection, KPI-oriented outputs, event timelines, and report-style views using mock data derived from the structure of ongoing simulator development.",
    currentWork:
      "Current work focuses on scenario design, KPI interpretation, resilient communication workflows, telecom-space convergence, and representative user-facing views for integrated terrestrial and NTN environments.",
    futureDirection:
      "Future directions include 5G-LENA/ns-3 evaluation, NTN propagation analysis, SDR prototyping, and richer operator-facing digital-twin interfaces.",
    whyItMatters:
      "This direction supports future-facing resilient communications research at the intersection of terrestrial systems, NTN architectures, emergency response, and mission-oriented telecom-space decision support.",
    status: {
      preview: "Frontend preview",
      research: "Ongoing development",
      mockNote: "Representative mock data · No backend",
    },
    researchTrajectory: [
      "5G-LENA / ns-3 aligned evaluation workflows",
      "Doppler and propagation-effect analysis in NTN scenarios",
      "SDR-linked prototyping, including USRP E310-oriented experimentation",
      "richer operator-facing digital-twin interfaces",
      "scenario expansion for resilient communications and PPDR decision support",
    ],
  },
  "policy-sim": {
    title: "AI Policy Simulator Preview",
    overview:
      "This preview represents ongoing work on a policy-facing simulation environment for structured scenario comparison, evidence-aware outputs, and decision-support workflows using representative mock data.",
    currentPreview:
      "The current interactive preview demonstrates scenario comparison, result summaries, evidence-style output blocks, and structured policy-facing analysis through a frontend-only representative workflow.",
    currentWork:
      "Current work focuses on scenario framing, comparative outputs, evidence presentation, and the design of decision-support logic for policy-oriented simulation environments.",
    futureDirection:
      "Future directions include expanded AI governance scenarios, richer evidence layers, broader scenario libraries, and stronger policy-facing decision-support workflows.",
    whyItMatters:
      "This work aims to connect technical simulation outputs with clearer policy reasoning, helping decision-makers evaluate alternative scenarios in a more structured and explainable way.",
    status: {
      preview: "Frontend preview",
      research: "Ongoing development",
      mockNote: "Representative mock data · No backend",
    },
    researchTrajectory: [
      "broader AI governance and operational policy scenarios",
      "deeper evidence-aware comparison layers",
      "richer scenario libraries for structured assessment",
      "explainable policy-facing decision-support workflows",
      "stronger linkage between technical outputs and policy reasoning",
    ],
  },
  "parwaz-orbit": {
    title: "Parwaz Orbit Preview",
    overview:
      "This preview represents a mission-oriented interactive environment related to orbital understanding, challenge-based learning, and visual engagement with space systems concepts.",
    currentPreview:
      "The current preview demonstrates a representative frontend slice of the product experience, including interactive flow, challenge/result logic, and a simplified visualization layer.",
    currentWork:
      "Current work focuses on product refinement, interaction design, educational framing, and visual demonstration of mission-oriented learning concepts.",
    futureDirection:
      "Future directions include richer challenge modes, more detailed orbital interaction layers, stronger educational analytics, and closer integration with classroom or mission-training use cases.",
    whyItMatters:
      "This direction supports accessible and engaging learning experiences around space systems, orbital reasoning, and mission-style technical thinking.",
    status: {
      preview: "Frontend preview",
      research: "Product refinement",
      mockNote: "Representative mock data · No backend",
    },
  },
  "parwaz-mvp": {
    title: "Parwaz MVP Preview",
    overview:
      "This preview represents an early interactive product layer for structured learning, mission-style workflows, and guided user engagement through modular frontend experiences.",
    currentPreview:
      "The current preview shows a representative product slice with module selection, interaction flow, and response/state behavior using local representative data.",
    currentWork:
      "Current work focuses on modular interaction design, educational workflow shaping, product architecture refinement, and demonstrable frontend experience.",
    futureDirection:
      "Future directions include broader module coverage, stronger learning pathways, improved educator-facing structure, and more refined mission/challenge experiences.",
    whyItMatters:
      "This work contributes to the development of scalable interactive learning environments with clearer technical framing and stronger product direction.",
    status: {
      preview: "Frontend preview",
      research: "Product refinement",
      mockNote: "Representative mock data · No backend",
    },
  },
};

export function getPreviewIntro(slug: string): PreviewIntroContent | null {
  return PREVIEW_INTROS[slug] ?? null;
}
