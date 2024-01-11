// Rp.js

import React from 'react';
import '../css/Rp.css';

const Rp = () => {
  const RpData = [
    {
      id: 1,
      degree: 'TK',
      school: 'TK Harapan',
      year: '2008 - 2011',
    },
    {
      id: 2,
      degree: 'SD',
      school: 'SDN Pringgowirawan 01',
      year: '2011 - 2017',
    },
    {
      id: 3,
      degree: 'SMP',
      school: 'SMPN 4 Tanggul',
      year: '2017 - 2020',
    },
    {
      id: 4,
      degree: 'SMK',
      school: 'SMKN 6 Jember',
      year: '2020 - 2024',
    },
    {
      id: 5,
      degree: 'MAGANG',
      school: 'Kantor KPU Kab.Jember',
      year: '6 Bulan',
    },
  ];

  return (
    <section className="rp">
      <div className="rp-list">
        {RpData.map((edu) => (
          <div
            key={edu.id}
            className="rp-item"
            style={{ background: edu.background }}
          >
            <h3>{edu.degree}</h3>
            <p className="school">{edu.school}</p>
            <p className="year">{edu.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rp;
