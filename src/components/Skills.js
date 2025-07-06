import React from 'react'
import { useInView } from 'react-intersection-observer'
import './Skills.css'

const skillList = [
  {name:'Python', level:90},
  {name:'PyTorch', level:80},
  // …
]

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce:true, threshold:0.3 })

  return (
    <section className="skills" ref={ref}>
      <h2>Skills</h2>
      {skillList.map(s => (
        <div className="bar-container" key={s.name}>
          <span>{s.name}</span>
          <div className="bar-bg">
            <div
              className="bar-fill"
              style={{ width: inView ? `${s.level}%` : '0%' }}
            />
          </div>
        </div>
      ))}
    </section>
  )
}
