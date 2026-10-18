import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { NgClass } from '@angular/common';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

type TimelineIcon = 'LucideBean' | 'LucideSunMoon' | 'LucideSalad' | 'LucideSprout' | 'LucideRose';

interface TimelineEvent {
  stage: string;
  date: string;
  location: string;
  headline: string;
  color: string;
  icon: TimelineIcon;
  description: string;
  highlights: string[];
  featured?: boolean;
}

@Component({
  selector: 'about',
  standalone: true,
  imports: [TimelineModule, NgClass, AnimateOnScrollModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly events: TimelineEvent[] = [
    {
      stage: 'Colegio San Agustín',
      date: 'Dec 2016',
      location: 'Panama City, Panama',
      headline: 'Where curiosity met ambition',
      color: 'bg-lime-600',
      icon: 'LucideBean',
      description:
        'My journey began in Panama, where I developed an early fascination with emerging technologies and their potential to improve lives. Beyond academics, I discovered my passion for leadership and public speaking, representing my school and country in international debates and earning recognition in competitive events.',
      highlights: ['Public Speaking', 'Leadership', 'International Debates'],
    },
    {
      stage: 'Fraser International College',
      date: 'Dec 2019',
      location: 'British Columbia, Canada',
      headline: 'A new country. A new challenge.',
      color: 'bg-green-600',
      icon: 'LucideSunMoon',
      description:
        'Moving to Canada challenged me to adapt, grow, and build a future in an unfamiliar environment. I completed the Engineering Science university transfer program with a 3.0 GPA, discovering my passion for programming along the way. I continued developing my analytical and communication skills through Model United Nations and case competitions, earning Best Speaker recognition and winning a case competition in 2018.',
      highlights: ['Engineering Sciences', 'Adaptability', 'Case Competition Winner'],
    },
    {
      stage: 'Gluwa | QA Engineer (Co-op)',
      date: 'Apr 2021 - Apr 2022',
      location: 'British Columbia, Canada',
      headline: 'From learning software to engineering quality',
      color: 'bg-amber-500',
      icon: 'LucideSalad',
      description:
        'My first professional engineering role brought me into fintech, contributing to quality assurance at Gluwa, a company developing blockchain-based financial solutions. I gained hands-on experience with unit testing, Selenium, TestRail, and automated testing workflows while learning the importance of reliability in production software. This experience shaped a principle I continue to follow: quality should be engineered from the beginning, not added at the end.',
      highlights: ['Fintech', 'Test Automation', 'Software Quality'],
    },
    {
      stage: 'Simon Fraser University',
      date: 'Jun 2025',
      location: 'British Columbia, Canada',
      headline: 'Building systems. Leading people.',
      color: 'bg-orange-500',
      icon: 'LucideSprout',
      description:
        'I earned my BASc in Computer Engineering while balancing academics, part-time work, and student leadership. As President of ALAS and VP Administration of the Engineering Science Student Society, I helped organize career fairs, develop partnerships, and connect students with professional opportunities. Alongside these responsibilities, I built a technical foundation spanning embedded systems, FPGAs, databases, and software development. University taught me that strong engineering requires more than technical knowledge. It requires initiative, collaboration, and the ability to turn ideas into action.',
      highlights: ['Computer Engineering', 'Embedded Systems', 'Student Leadership'],
    },
    {
      stage: 'Wärtsilä PortLink | Full-Stack Software Engineer',
      date: 'Dec 2025 - Sep 2026',
      location: 'British Columbia, Canada',
      headline: 'Engineering software for global operations',
      color: 'bg-red-700',
      icon: 'LucideRose',
      description:
        'I brought my engineering foundation into the maritime industry, developing enterprise port management systems using Angular, C#, .NET, and SQL Server. My work supported software solutions for international clients, including the Panama Canal Authority, Port of Québec, and Port of Tauranga. Beyond writing code, I participated in client-facing workshops, supported user acceptance testing, and helped translate complex operational requirements into actionable engineering work. This experience reinforced one of my greatest strengths: connecting technical teams with the people who depend on their solutions.',
      highlights: [
        'Angular & TypeScript',
        'C# / .NET',
        'SQL Server',
        'Enterprise Software',
        'Client Collaboration',
      ],
    },
  ];
}
