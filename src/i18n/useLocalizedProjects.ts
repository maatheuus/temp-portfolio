'use client';

import { allProjects } from '@/src/components/UI/projectsPage/mock';
import { useLanguage } from './LanguageContext';
import { projectsPt } from './projectsTranslations';

export function useLocalizedProjects() {
  const { locale } = useLanguage();

  if (locale === 'en') return allProjects;

  return allProjects.map((project) => ({
    ...project,
    ...projectsPt[project.slug],
  }));
}

export function useLocalizedProject(slug: string) {
  const projects = useLocalizedProjects();
  return projects.find((p) => p.slug === slug);
}
