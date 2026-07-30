import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const emojis = ['🌐','📡','🔌','🧮','🚀','🔀','🏢','🧭','🗣️','🌐','🩺','☁️'];

const unitSlugs = [
  '01-caracterizacion-redes',
  '02-modelos-osi-analisis',
  '03-infraestructura-fisica',
  '04-ipv4-subnetting',
  '05-ipv6-transicion',
  '06-switching-stp',
  '07-vlans',
  '08-routing-acls',
  '09-routing-dinamico',
  '10-nat-internet',
  '11-diagnostico-monitorizacion',
  '12-cloud-virtualizacion-futuro',
];

const unitLabels = [
  'Caracterización de redes',
  'Modelos OSI y análisis',
  'Infraestructura física',
  'IPv4 y subnetting',
  'IPv6 y transición',
  'Switching y STP',
  'VLANs',
  'Routing y ACLs',
  'Routing dinámico',
  'NAT y acceso a Internet',
  'Diagnóstico y monitorización',
  'Cloud, virtualización y futuro',
];

const nn = (i) => String(i + 1).padStart(2, '0');

const boletinItems = (i) => [
  { link: `/boletines/boletin-u${nn(i)}-inicial-resuelto`, label: '✅ Inicial resuelto' },
  { link: `/boletines/boletin-u${nn(i)}-inicial`, label: '🟢 Inicial por resolver' },
  { link: `/boletines/boletin-u${nn(i)}-avanzado-resuelto`, label: '💪 Avanzado resuelto' },
  { link: `/boletines/boletin-u${nn(i)}-avanzado`, label: '⭐ Avanzado por resolver' },
];

export default defineConfig({
  site: 'https://pabloperezgonzalez.github.io/PAR',
  base: '/PAR',
  integrations: [
    starlight({
      title: 'PAR',
      description: 'Planificación y Administración de Redes — 7 Unidades de Programación — Pablo Pérez González',
      customCss: [
        './src/styles/custom.css',
        '@fontsource/geist-sans',
      ],
      locales: {
        root: { label: 'Castellano', lang: 'es' },
      },
      defaultLocale: 'root',
      tableOfContents: true,
      head: [
        { tag: 'meta', attrs: { name: 'theme-color', content: '#2563eb' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/svg+xml', href: '/PAR/favicon.svg' } },
      ],
      sidebar: [
        {
          slug: 'index',
          label: 'Inicio',
        },
        {
          label: '📚 Unidades de Programación',
          /*
          items: unitSlugs.map((slug, i) => ({
            slug,
            label: `${emojis[i]} UP${i+1}. ${unitLabels[i]}`,
          })),*/
          items: [
            {
              label: '🌐 UP1. Caracterización de redes',
              collapsed: true,
              items: [
                { slug: '01-caracterizacion-redes', label: 'Introducción' },
                { slug: '01-01-concepto-red', label: '1.1 Concepto de red' },
                { slug: '01-02-tipos-redes', label: '1.2 Tipos de redes' },
                { slug: '01-03-topologias', label: '1.3 Topologías' },
                { slug: '01-04-componentes', label: '1.4 Componentes' },
              ],
            },
          {
            label: '📡 UP2. Modelos OSI y análisis',
            collapsed: true,
            items: [
              { slug: '02-modelos-osi-analisis', label: 'Introducción' },
              { slug: '02-01-modelo-osi', label: '2.1 Modelo OSI' },
              { slug: '02-02-encapsulacion', label: '2.2 Encapsulación' },
            ],
          },

          // resto de unidades...
        ],
      },
        {
          label: '📝 Boletines',
          collapsed: true,
          items: Array.from({ length: 12 }, (_, i) => ({
            label: `${emojis[i]} Unidad ${nn(i)}`,
            collapsed: true,
            items: boletinItems(i),
          })),
        },
      ],
    }),
  ],
});
