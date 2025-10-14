/*
 * Copyright (C) 2025 Adheesh Trivedi <adheeshtrivedi@gmail.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 */

import "./Projects.css"

import PageLayout from "../components/PageLayout";
import ActivityCard from "../components/ActivityCard";
import projectsDataRaw from "../assets/projects.json";

function Projects() {
  return (
    <PageLayout title="Projects" subtitle="My personal projects">
      {Array.isArray(projectsDataRaw) && projectsDataRaw.length > 0 ? (
        projectsDataRaw.map((section: any, idx: number) => (
          <div key={idx} className="project-section">
            <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>{section.heading}</h2>
            {Array.isArray(section.projects) && section.projects.length > 0 ? (
              section.projects.map((exp: any, i: number) => (
                <ActivityCard key={i} {...exp} />
              ))
            ) : (
              <p style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>No projects found in this section.</p>
            )}
          </div>
        ))
      ) : (
        <p style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>No projects data found.</p>
      )}
    </PageLayout>
  );
}

export default Projects;