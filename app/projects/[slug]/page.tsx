'use client';

import { use } from 'react';
import { allProjects } from '@/src/components/UI/projectsPage/mock';
import FeaturedProjectsCarousel from '@/src/components/UI/ProjectsCarousel';
import {
  ProjectBadge,
  type ProjectStatus,
} from '@/src/components/UI/featuredProjects/ProjectBadge';
import {
  ArrowLeftIcon,
  ArrowUpRightIcon,
  CheckCircleIcon,
  GithubLogoIcon,
} from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const projectText = [
    {
      title: 'The Challenge',
      desc: project.challenge,
    },
    {
      title: 'The Solution',
      desc: project.solution,
    },
  ];

  return (
    <main className="min-h-screen bg-primary-black text-primary-white">
      <section className="py-24 sm:py-32">
        <div className="container mx-auto max-w-4xl px-4">
          <Link
            href="/projects"
            className="mb-8 flex w-max items-center gap-2 font-medium text-primary-grey transition-colors hover:text-secondary-yellow"
          >
            <ArrowLeftIcon size={20} /> Back to Projects
          </Link>

          <div className="mb-8 flex items-center gap-4 text-sm font-medium text-primary-white/80">
            <span>{project.role}</span>
            <span>•</span>
            <span>{project.year}</span>
            <span>•</span>
            <span>{project.category}</span>
          </div>

          <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2">
            <h1 className="text-4xl font-bold md:text-5xl">{project.title}</h1>
            {project.status && (
              <ProjectBadge status={project.status as ProjectStatus} />
            )}
          </div>

          <p className="mb-12 text-xl text-primary-white/80">
            {project.tagline}
          </p>

          <div className="mb-16 aspect-video w-full overflow-hidden rounded-xl">
            <FeaturedProjectsCarousel images={project.images} />
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="space-y-12 lg:col-span-2">
              <div className="space-y-8">
                {projectText.map((item, index) => item.desc && (
                  <div key={index}>
                    <h2 className="mb-4 text-2xl font-bold text-primary-white">
                      {item.title}
                    </h2>
                    <div className="space-y-4">
                      {item.desc.split('\n\n').map((paragraph, i) => (
                        <p key={i} className="text-lg leading-relaxed text-primary-grey">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {project.features?.length > 0 && (
                <div>
                  <h2 className="mb-6 text-2xl font-bold text-primary-white">
                    Key Features
                  </h2>
                  <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {project.features.map((feature: string) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-primary-grey"
                      >
                        <CheckCircleIcon
                          size={20}
                          className="mt-1 flex-shrink-0 text-secondary-yellow"
                        />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="space-y-12 lg:pl-8">
              <div>
                <h2 className="mb-6 text-xl font-bold text-primary-white">
                  Technologies
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag: string) => (
                    <span key={tag} className="tags">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {(project.github || project.live) && (
                <div>
                  <h2 className="mb-6 text-xl font-bold text-primary-white">
                    Links
                  </h2>
                  <div className="flex flex-col gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-medium text-primary-grey transition-colors hover:text-secondary-yellow"
                      >
                        <GithubLogoIcon size={20} /> View Source Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-medium text-primary-grey transition-colors hover:text-secondary-yellow"
                      >
                        <ArrowUpRightIcon size={20} /> Visit Live Demo
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
