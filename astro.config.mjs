import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const emojis = ['🌐','☁️','🔌','🧮','🚀','🔀','🏢','🧭','🗣️','🌐','🩺','☁️'];

const unitSlugs = [
  '01-instalacion-servidores-web',
  '02-instalacion-cms',
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
  'Instalación de servidores de aplicaciones web',
  'Instalación de gestores de contenidos',
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
  site: 'https://pabloperezgonzalez.github.io/IAW',
  base: '/IAW',
  integrations: [
    starlight({
      title: 'IAW',
      description: 'Implantación de Aplicaciones Web — 7 Unidades de Programación — Pablo Pérez González',
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
        { tag: 'meta', attrs: { name: 'theme-color', content: '#16a34a' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/svg+xml', href: '/IAW/favicon.svg' } },
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
              label: '🌐 UP1. Instalación de servidores de aplicaciones web',
              collapsed: true,
              items: [
                { slug: '01-instalacion-servidores-web', label: 'Introducción' },
                { slug: '01-1-software', label: 'UP1.1. Software necesario para un entorno Web - CE1.a)' },
                { slug: '01-2-tecnologias', label: 'UP1.2. Tecnologías empleadas en aplicaciones Web - CE1.b)' },
                { slug: '01-3-servidores-bbdd', label: 'UP1.3. Procesamiento en cliente y servidor - CE1.d)' },
                { slug: '01-4-documentacion', label: 'UP1.4. Documentación del entorno Web - CE1.i)' },
                { slug: '01-5-procesamiento', label: 'UP1.5. Instalación y configuración de servidores Web y BBDD - CE1.c)' },
                { slug: '01-6-componentes-modulos', label: 'UP1.6. Procesamiento de código en el servidor - CE1.e)' },
                { slug: '01-7-acceso-bbdd', label: 'UP1.7. Acceso de las aplicaciones Web a bases de datos - CE1.f)' },
                { slug: '01-8-seguridad', label: 'UP1.8. Seguridad en los accesos al servidor - CE1.g)' },
                { slug: '01-9-plataformas', label: 'UP1.9. Plataformas integradas para desarrollo y pruebas - CE1.h)' },
              ],
            },/*
            {
              label: '☁️ UP2. Instalación de gestores de contenidos',
              collapsed: true,
              items: [
                { slug: '02-instalacion-cms', label: 'Introducción' },
                { slug: '02-1-uso-cms', label: 'UP2.1. Uso y utilidad de los gestores de contenidos - CE2.a)' },
                { slug: '02-2-clasificacion-cms', label: 'UP2.2. Clasificación de los gestores de contenidos - CE2.b)' },
                { slug: '02-3-caracteristicas-cms', label: 'UP2.3. Características de los gestores de contenidos - CE2.d)' },
                { slug: '02-4-instalacion-cms', label: 'UP2.4. Instalación de gestores de contenidos - CE2.c)' },
                { slug: '02-5-personalizacion-cms', label: 'UP2.5. Personalización y configuración de los gestores de contenidos - CE2.e)' },
                { slug: '02-6-seguridad-cms', label: 'UP2.6. Seguridad de los gestores de contenidos - CE2.f)' },
                { slug: '02-7-pruebas-cms', label: 'UP2.7. Pruebas de funcionamiento de los gestores de contenidos - CE2.g)' },
                { slug: '02-8-publicacion-cms', label: 'UP2.8. Publicación de los gestores de contenidos - CE2.h)' },
              ],
            },*/

          // resto de unidades...
        ],
        },
      ],
    }),
  ],
});