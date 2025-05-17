import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Project {
  id: string;
  title: string;
  description: string;
  demoVideo?: string;
  tags: string[];
  codeSnippets?: Array<{
    language: string;
    code: string;
    explanation: string;
  }>;
}

@Component({
  selector: 'app-project-detail',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  project: Project | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Dans une vraie application, vous récupéreriez les données du projet depuis un service
    const projectId = this.route.snapshot.paramMap.get('id');
    if (projectId) {
      // Ici on simule la récupération des données
      this.project = {
        id: projectId,
        title: 'Projet 1',
        description: 'Description détaillée du projet 1. Ici vous pouvez mettre une description plus longue et détaillée du projet.',
        tags: ['Angular', 'TypeScript', 'UI/UX'],
        demoVideo: 'https://example.com/video1.mp4',
        codeSnippets: [
          {
            language: 'typescript',
            code: 'interface User {\n  id: string;\n  name: string;\n  email: string;\n}',
            explanation: 'Définition de l\'interface User avec les propriétés essentielles'
          },
          {
            language: 'html',
            code: '<div class="container">\n  <h1>{{ title }}</h1>\n  <p>{{ description }}</p>\n</div>',
            explanation: 'Structure HTML de base du composant'
          }
        ]
      };
    }
  }

  copyCode(code: string): void {
    navigator.clipboard.writeText(code).then(() => {
      alert('Code copié dans le presse-papiers !');
    });
  }
}
