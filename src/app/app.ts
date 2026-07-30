import { Component, effect, signal } from '@angular/core';
import { BrandLogo } from './brand-logo';
import { Icon, type IconName } from './icon';

@Component({
  selector: 'app-root',
  imports: [Icon, BrandLogo],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly year = new Date().getFullYear();
  readonly menuOpen = signal(false);

  /** Substitua pelo número real com DDI (ex: 5561999999999) */
  readonly whatsappNumber = '5561999999999';
  readonly whatsappMessage =
    'Olá Renata! Quero planejar minha viagem personalizada.';

  constructor() {
    effect(() => {
      if (typeof document === 'undefined') return;
      document.body.classList.toggle('menu-locked', this.menuOpen());
    });
  }

  get whatsappUrl(): string {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappMessage)}`;
  }

  readonly navLinks = [
    { href: '#problema', label: 'Por quê' },
    { href: '#renata', label: 'Renata' },
    { href: '#diferenciais', label: 'Diferenciais' },
    { href: '#como-funciona', label: 'Como funciona' },
    { href: '#experiencias', label: 'Experiências' },
    { href: '#faq', label: 'FAQ' },
  ];

  readonly checks = [
    'Viagens nacionais e internacionais',
    'Concierge durante toda a viagem',
    '31 anos criando experiências inesquecíveis',
  ];

  readonly stats = [
    { value: '31 anos', label: 'de experiência' },
    { value: 'Panrotas 2023', label: 'Melhor Agente do Brasil' },
    { value: 'Concierge', label: 'durante toda a viagem' },
    { value: '100%', label: 'roteiros personalizados' },
  ];

  readonly differentials: { icon: IconName; title: string; text: string }[] = [
    {
      icon: 'plane',
      title: 'Roteiro feito para você',
      text: 'Nada de pacotes prontos. Cada viagem é construída conforme seus desejos, orçamento e estilo.',
    },
    {
      icon: 'globe',
      title: 'Destinos exclusivos',
      text: 'Experiências únicas, hotéis selecionados e roteiros cuidadosamente planejados.',
    },
    {
      icon: 'headset',
      title: 'Concierge durante a viagem',
      text: 'Se surgir qualquer imprevisto, você terá suporte sempre que precisar.',
    },
    {
      icon: 'heart-handshake',
      title: 'Atendimento próximo',
      text: 'Você fala diretamente com quem está planejando sua viagem. Sem atendimento genérico.',
    },
    {
      icon: 'award',
      title: '31 anos de experiência',
      text: 'Mais de três décadas criando viagens para famílias, casais, grupos e empresas.',
    },
    {
      icon: 'star',
      title: 'Reconhecimento nacional',
      text: 'Melhor Agente de Viagens do Brasil pela Panrotas 2023.',
    },
  ];

  readonly steps = [
    {
      n: '01',
      title: 'Conversamos',
      text: 'Entendemos seu destino, orçamento, datas e expectativas.',
    },
    {
      n: '02',
      title: 'Criamos seu roteiro',
      text: 'Selecionamos hotéis, voos, passeios e experiências ideais.',
    },
    {
      n: '03',
      title: 'Você aprova',
      text: 'Ajustamos tudo até ficar exatamente como imaginou.',
    },
    {
      n: '04',
      title: 'Você viaja tranquilo',
      text: 'Com suporte antes, durante e depois da viagem.',
    },
  ];

  readonly experiences: { icon: IconName; label: string }[] = [
    { icon: 'palm', label: 'Praias paradisíacas' },
    { icon: 'mountain', label: 'Natureza' },
    { icon: 'wine', label: 'Enoturismo' },
    { icon: 'snowflake', label: 'Destinos de inverno' },
    { icon: 'landmark', label: 'Europa' },
    { icon: 'building', label: 'Oriente Médio' },
    { icon: 'ship', label: 'Cruzeiros' },
    { icon: 'heart', label: 'Lua de Mel' },
    { icon: 'users', label: 'Família' },
    { icon: 'compass', label: 'Melhor idade' },
    { icon: 'briefcase', label: 'Viagens corporativas' },
  ];

  readonly faqs = [
    {
      q: 'O atendimento tem custo?',
      a: 'O planejamento é feito sob medida. Na conversa inicial alinhamos expectativas, orçamento e o melhor caminho para a sua viagem — sem compromisso genérico.',
    },
    {
      q: 'Vocês fazem viagens internacionais?',
      a: 'Sim. Planejamos viagens nacionais e internacionais, com documentação, roteiros e suporte em cada etapa.',
    },
    {
      q: 'Posso personalizar todo o roteiro?',
      a: 'Sim. Nada de pacotes prontos: cada viagem é construída conforme seu perfil, desejos, datas e estilo.',
    },
    {
      q: 'Vocês dão suporte durante a viagem?',
      a: 'Sim. Você conta com concierge durante toda a viagem — antes, durante e depois — para qualquer imprevisto.',
    },
  ];

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
