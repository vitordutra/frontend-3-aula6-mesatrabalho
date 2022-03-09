import React from 'react';

export default function FunctionalComponent({ name, task }) {
  return (
    <li>
      {name} brings {task}
    </li>
  );
}
