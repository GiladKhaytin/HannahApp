import Hannah from '@/components/Hannah';
import disciplinaryRegulations from '@/data/dir.json';
import React from 'react';

export default function Disciplinary() { 
  return (
    <Hannah  data={disciplinaryRegulations} />
  );
}
