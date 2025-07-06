import React, { useState } from 'react'
import projectData from '../data/projects.json'
import '../styles/Projects.css'

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const categories = ['all', ...new Set(projectData.map(p=>p.category))]

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={filter===cat?'active':''}
            onClick={()=>setFilter(cat)}
          >{cat}</button>
        ))}
      </div>
      <div className="grid">
        {projectData
          .filter(p => filter==='all'||p.category===filter)
          .map(p => (
            <div className="card" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <a href={p.link} target="_blank">View</a>
            </div>
          ))
        }
      </div>
    </section>
  )
}
