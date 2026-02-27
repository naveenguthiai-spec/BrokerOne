import React from 'react';

const Icon = ({ name, size = 18 }) => {
  const icons = {
    dashboard: (
      <svg width={size} height={size} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2}>
        <rect x='3' y='3' width='7' height='7' rx='1' />
        <rect x='14' y='3' width='7' height='7' rx='1' />
        <rect x='3' y='14' width='7' height='7' rx='1' />
        <rect x='14' y='14' width='7' height='7' rx='1' />
      </svg>
    ),
    cases: (
      <svg width={size} height={size} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2}>
        <path d='M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z' />
        <polyline points='14,2 14,8 20,8' />
        <line x1='16' y1='13' x2='8' y2='13' />
        <line x1='16' y1='17' x2='8' y2='17' />
      </svg>
    ),
    plus: (
      <svg width={size} height={size} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2}>
        <circle cx='12' cy='12' r='10' />
        <line x1='12' y1='8' x2='12' y2='16' />
        <line x1='8' y1='12' x2='16' y2='12' />
      </svg>
    ),
    chart: (
      <svg width={size} height={size} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2}>
        <line x1='18' y1='20' x2='18' y2='10' />
        <line x1='12' y1='20' x2='12' y2='4' />
        <line x1='6' y1='20' x2='6' y2='14' />
        <line x1='2' y1='20' x2='22' y2='20' />
      </svg>
    ),
    bell: (
      <svg width={size} height={size} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2}>
        <path d='M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9' />
        <path d='M13.73 21a2 2 0 01-3.46 0' />
      </svg>
    ),
    user: (
      <svg width={size} height={size} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2}>
        <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2' />
        <circle cx='12' cy='7' r='4' />
      </svg>
    ),
    search: (
      <svg width={size} height={size} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2}>
        <circle cx='11' cy='11' r='8' />
        <line x1='21' y1='21' x2='16.65' y2='16.65' />
      </svg>
    ),
    arrow: (
      <svg width={size} height={size} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2}>
        <line x1='5' y1='12' x2='19' y2='12' />
        <polyline points='12 5 19 12 12 19' />
      </svg>
    ),
    close: (
      <svg width={size} height={size} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2}>
        <line x1='18' y1='6' x2='6' y2='18' />
        <line x1='6' y1='6' x2='18' y2='18' />
      </svg>
    ),
    check: (
      <svg width={size} height={size} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2}>
        <polyline points='20 6 9 17 4 12' />
      </svg>
    ),
    doc: (
      <svg width={size} height={size} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2}>
        <path d='M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z' />
        <polyline points='13 2 13 9 20 9' />
      </svg>
    ),
    settings: (
      <svg width={size} height={size} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2}>
        <circle cx='12' cy='12' r='3' />
        <path d='M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M12 2v2M12 20v2M2 12h2M20 12h2M19.07 19.07l-1.41-1.41M4.93 19.07l1.41-1.41' />
      </svg>
    ),
    logout: (
      <svg width={size} height={size} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2}>
        <path d='M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4' />
        <polyline points='16 17 21 12 16 7' />
        <line x1='21' y1='12' x2='9' y2='12' />
      </svg>
    )
  };

  return icons[name] || null;
};

export default Icon;
