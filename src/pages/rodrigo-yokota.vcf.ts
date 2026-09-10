import type { APIRoute } from 'astro';

export const prerender = true;

const vCard = [
  'BEGIN:VCARD',
  'VERSION:3.0',
  'FN:Rodrigo Yokota',
  'N:Yokota;Rodrigo;;;',
  'ORG:Zephyr Cloud',
  'TITLE:Platform Engineer',
  'EMAIL:rodrigo@yokota.dev',
  'URL:https://yokota.dev',
  'URL:https://github.com/ryok90',
  'URL:https://www.linkedin.com/in/rodrigo-yokota/',
  'NOTE:Platform Engineer building deployment infrastructure\, federated frontend tooling\, and agent platforms.',
  'END:VCARD',
  '',
].join('\r\n');

export const GET: APIRoute = () =>
  new Response(vCard, {
    headers: {
      'Content-Type': 'text/vcard; charset=utf-8',
      'Content-Disposition': 'attachment; filename="rodrigo-yokota.vcf"',
    },
  });
