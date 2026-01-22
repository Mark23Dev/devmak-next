export type Project = {
  img: string;
  title: string;
  desc: string;
  link: string;
  featured?: boolean; // optional, default false
};

export const projectsData: Project[] = [
  {
    img: "/projects/ecothreads.png",
    title: "EcoThreads — E-Commerce Backend (Go)",
    desc: "React frontend ready; Go backend in progress for payments & order management.",
    link: "/projects/ecothreads",
    featured: true, // will appear in HomePage
  },
  {
    img: "/projects/notes.png",
    title: "Notes System — Backend Migration to Go",
    desc: "React frontend with Express backend, migrating to Go for performance & clean architecture.",
    link: "/projects/notes",
  },
  {
    img: "/projects/library.png",
    title: "Library Management System (Go)",
    desc: "Go system with hexagonal architecture, HTTP APIs, PostgreSQL, CLI, and future auth/RBAC/gRPC.",
    link: "/projects/library",
    featured: true,
  },
  {
    img: "/projects/students.png",
    title: "Student Management System (Go)",
    desc: "Go backend project exploring domain modeling and clean business logic.",
    link: "/projects/students",
  },
  {
    img: "/projects/bank.png",
    title: "Banking Simulation System (Go)",
    desc: "DDD & EDA learning project simulating real-world banking workflows in Go.",
    link: "/projects/bank",
    featured: true,
  },
  {
    img: "/projects/cloud-storage.png",
    title: "Distributed HDD Cloud System (Go)",
    desc: "Cloud system for external HDDs focusing on storage abstraction and reliability in Go.",
    link: "/projects/cloud-storage",
  },
];
