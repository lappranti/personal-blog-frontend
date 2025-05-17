import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { ProjectGridComponent } from '../../components/project-grid/project-grid.component';

interface Project {
  id: string;
  title: string;
  thumbnail: string;
  shortDescription: string;
  tags: string[];
  demoVideo?: string;
  codeSnippets?: Array<{
    language: string;
    code: string;
    explanation: string;
  }>;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    FormsModule,
    MatChipsModule,
    ProjectGridComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: '1',
      title: 'Projet 1',
      thumbnail: 'assets/projects/project1.jpg',
      shortDescription: 'Une brève description du projet 1',
      tags: ['Angular', 'TypeScript', 'UI/UX'],
      demoVideo: 'https://example.com/video1.mp4',
      codeSnippets: [
        {
          language: 'typescript',
          code: 'interface User {\n  id: string;\n  name: string;\n}',
          explanation: "Définition de l'interface User",
        },
      ],
    },
    {
      id: '2',
      title: 'Projet 2',
      thumbnail: 'assets/projects/project2.jpg',
      shortDescription: 'Une brève description du projet 2',
      tags: ['React', 'JavaScript', 'Frontend'],
      demoVideo: 'https://example.com/video2.mp4',
      codeSnippets: [
        {
          language: 'javascript',
          code: 'function greet(name) {\n  return `Hello, ${name}!`\n}',
          explanation: 'Fonction de salutation simple',
        },
      ],
    },
  ];

  selectedProject: Project | null = null;
  searchQuery = '';
  selectedCategory: string | null = null;
  selectedTag: string | null = null;
  private clipboard: Clipboard;

  constructor(clipboard: Clipboard) {
    this.clipboard = clipboard;
  }

  getUniqueTags(): string[] {
    return [...new Set(this.projects.flatMap((project) => project.tags))];
  }

  getFilteredProjects(): Project[] {
    return this.projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(this.searchQuery.toLowerCase())
        );

      const matchesTag =
        !this.selectedTag || project.tags.includes(this.selectedTag);

      return matchesSearch && matchesTag;
    });
  }
}
