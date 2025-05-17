import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  selector: 'app-project-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-grid.component.html',
  styleUrls: ['./project-grid.component.scss'],
})
export class ProjectGridComponent implements OnInit {
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
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onProjectClick(project: Project): void {
    this.router.navigate(['/projects', project.id]);
  }
}
