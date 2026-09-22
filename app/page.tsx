'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, ChevronDown, Menu, Minus, Moon, Plus, Sun, X } from 'lucide-react'

const assets = {
  logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-EhPbjzwjr8QIDcKTaJaQjnNJhh9q3F.png',
  video: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-ca3q7p9DegAU8ZASDscuXZdn62Zmkk.mp4',
  fabiana: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fabiana-xIRL0bb9hmlusggu5ZJ507FNuXQrxL.jpg',
  team: [
    { name: 'Dra. Fabiana Paulo', role: 'Proprietária · Fisioterapeuta · CREFITO 337508-F', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fabiana%20paulo%20-%20dona%20da%20empresa-sdo69dx7enSgpMZZZAIrt9E937mu1p.jpeg' },
    { name: 'Lívia Sales', role: 'Fisioterapeuta', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/L%C3%ADvia%20Sales%20-%20Fisioterapeuta-j6CWlANzbcPZwmY8p7mlDRJO2GiVbk.jpeg' },
    { name: 'Silvana Melo', role: 'Educadora Física', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Silvana%20Melo%20-%20Profissional%20de%20Educa%C3%A7%C3%A3o%20F%C3%ADsica%20e%20T%C3%A9cnica%20do%20Trabalho-roK0csSjhDSZgxfaRQFfHSoxdNk3I1.jpeg' },
  ],
  services: [
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/svc-ginastica-bgloJChQjTsjxOo2bDuYhmWIom8XV4.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/svc-quickmassage-EzBbx0L5m57hQvwAQEiAp69jHjEwi8.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/svc-blitz-CztpBxDVwEBXGedQ2OWz5qMcZXl357.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/svc-mindfulness-ts2oQl5SWLZVnmcErXI7d11E0vmqht.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/svc-ortopedica-NTaK0t0D8ME4WyMmw4Ro9EINRJ65JJ.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/svc-sipat-w982ogrxUcUho2pKRN9j9gS5RnPEbs.jpg',
  ],
}

const services = [
  ['Ginástica laboral', 'Exercícios que promovem saúde, previnem lesões e aumentam a produtividade no ambiente de trabalho.', 'Sessões curtas conduzidas no próprio posto de trabalho, prescritas a partir das demandas físicas de cada setor — preparatória, compensatória ou de relaxamento.', 'A escala é montada junto à liderança de produção, em blocos de 10 a 15 minutos por equipe, com registro de presença e ajuste contínuo.'],
  ['Quick massage', 'Sessões de relaxamento imediato, aliviando tensões musculares dos colaboradores no ambiente de trabalho.', 'Massagem rápida em cadeira ergonômica, sem troca de roupa, com foco em cervical, ombros e lombar.', 'Ideal para semanas de saúde, campanhas internas e ações de reconhecimento, com agendamento por equipe.'],
  ['Blitz postural', 'Avaliação e correção postural para prevenir problemas ergonômicos.', 'Ação itinerante pelos setores: avaliamos a postura no posto real, apontamos ajustes na hora e orientamos cada colaborador.', 'Os achados viram um panorama por setor para priorizar ajustes de mobiliário, layout e rotina.'],
  ['Mindfulness e workshops de relaxamento', 'Técnicas de meditação e atenção plena para reduzir o estresse.', 'Encontros guiados de respiração, atenção plena e relaxamento para equipes sob pressão.', 'Pontuais em campanhas de saúde mental ou recorrentes em um programa anual.'],
  ['Fisioterapia ortopédica', 'Suporte completo no pré e pós-operatório ortopédico.', 'Foco no alívio da dor, redução de processos inflamatórios e fortalecimento muscular, com recuperação mais rápida, segura e eficaz.', 'Presencial ou domiciliar, também para colaboradores em retorno ao trabalho.'],
  ['Palestras sobre saúde e SIPAT', 'Palestras educativas sobre ergonomia, saúde ocupacional e prevenção.', 'Postura, prevenção de LER/DORT, pausas e autocuidado, em linguagem prática.', 'Programação completa da SIPAT com atividades especializadas.'],
]

const testimonials = [
  ['“A adesão surpreendeu. Em três meses a ginástica laboral virou rotina dos turnos, sem atrito com a produção.”', 'Coordenação de RH · metalúrgica, 480 colaboradores'],
  ['“O relatório trimestral nos deu argumento técnico para investir em ajuste de posto. É consultoria, não só atividade.”', 'Gerência de SST · centro de distribuição'],
  ['“As queixas de lombalgia no turno da noite caíram visivelmente. A equipe cobra quando a Faergo atrasa.”', 'Supervisão de produção · alimentos'],
  ['“A palestra da SIPAT foi a mais bem avaliada dos últimos anos. Linguagem simples e muito prática.”', 'Comitê de SIPAT · logística'],
  ['“Profissionalismo do início ao fim: diagnóstico honesto, cronograma cumprido e relatório claro para a diretoria.”', 'Diretoria de operações · indústria química'],
]

function Eyebrow({ children }: { children: React.ReactNode }) { return <span className="eyebrow">{children}</span> }
function SectionHeader({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) { return <div className="section-header"><div><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2></div>{children}</div> }

export default function Page() {
  const [openService, setOpenService] = useState<number | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'
  }, [darkMode])

  function submitWhatsApp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const message = `Olá, Faergo! Vim pelo site e gostaria de uma proposta.\n\nNome: ${form.get('nome')}\nEmpresa: ${form.get('empresa')}\nE-mail: ${form.get('email')}\nNº de colaboradores: ${form.get('colaboradores')}\n\nCenário atual: ${form.get('mensagem')}`
    window.open(`https://wa.me/5511970689514?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  return <main>
    <section className="hero" id="inicio">
      <video className="hero-video" autoPlay muted loop playsInline poster={assets.fabiana} ref={(video) => { if (video) { video.muted = true; video.volume = 0 } }}><source src={assets.video} type="video/mp4" /></video>
      <div className="hero-overlay" />
      <header className="site-header container">
        <a href="#inicio" aria-label="Faergo início"><img className="logo" src={assets.logo} alt="Faergo Fisioterapia Avançada" /></a>
        <button className="menu-toggle" aria-label="Abrir menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Navegação principal">
          <a href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a><a href="#processo" onClick={() => setMenuOpen(false)}>Como funciona</a><a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a><a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
          <button className="theme-toggle" type="button" onClick={() => setDarkMode(!darkMode)} aria-label={darkMode ? 'Ativar modo claro' : 'Ativar modo escuro'} aria-pressed={darkMode}>{darkMode ? <Sun /> : <Moon />}<span>{darkMode ? 'Modo claro' : 'Modo escuro'}</span></button><a className="button button-orange nav-cta" href="#contato" onClick={() => setMenuOpen(false)}>Solicitar proposta <ArrowUpRight /></a>
        </nav>
      </header>
      <div className="hero-content container"><Eyebrow>Fisioterapia avançada para empresas</Eyebrow><h1>Saúde ocupacional que se vê no chão de fábrica e no resultado.</h1><p>Ginástica laboral, fisioterapia do trabalho e programas de bem-estar conduzidos pela Dra. Fabiana Paulo, com indicadores reportados ao RH e à diretoria.</p><div className="hero-actions"><a className="button button-orange" href="#contato">Agendar diagnóstico gratuito <ArrowUpRight /></a><a className="button button-outline" href="#servicos">Ver serviços</a></div></div>
    </section>

    <section className="stats container-wide"><div><strong>5 anos</strong><span>em saúde ocupacional</span></div><div><strong>40+</strong><span>empresas atendidas</span></div><div><strong>6.000</strong><span>colaboradores em programa</span></div><div><strong>NR-1 e NR-17</strong><span>conformidade como base</span></div></section>

    <section className="section container" id="servicos"><SectionHeader eyebrow="O que fazemos" title="Serviços"><p>Uma gama completa de serviços para transformar seu ambiente de trabalho em um verdadeiro espaço de bem-estar.</p><span className="section-note">Clique em um serviço para ver os detalhes</span></SectionHeader><div className="service-list">{services.map((service, i) => <div className={`service-item ${openService === i ? 'active' : ''}`} key={service[0]}><button className="service-trigger" onClick={() => setOpenService(openService === i ? null : i)} aria-expanded={openService === i}><span className={`service-line line-${i % 2}`} /><span className="service-number">0{i + 1}</span><span className="service-name">{service[0]}</span><span className="service-short">{service[1]}</span><span className="circle-button">{openService === i ? <Minus /> : <Plus />}</span></button>{openService === i && <div className="service-detail"><img src={assets.services[i]} alt={`Equipe Faergo realizando ${service[0]}`} /><div><p>{service[2]}</p><p>{service[3]}</p><div className="detail-actions"><a className="button button-teal" href="#contato">Solicitar este serviço <ArrowUpRight /></a><button className="text-button" onClick={() => setOpenService(null)}>Fechar</button></div></div></div>}</div>)}</div></section>

    <section className="section section-pale" id="processo"><div className="container"><SectionHeader eyebrow="Como funciona" title="Do diagnóstico ao próximo ciclo." /><div className="process-grid">{[['01','Diagnóstico','Visita técnica aos postos, leitura de absenteísmo e conversa com RH e SESMT.'],['02','Plano de trabalho','Escopo, cronograma por turno, metas de adesão e indicadores acordados.'],['03','Execução','Sessões em campo, com registro de presença e ajuste contínuo por setor.'],['04','Relatório','Indicadores, evolução das queixas e recomendações para o ciclo seguinte.']].map((item, i) => <div className={`process-card card-${i}`} key={item[0]}><span>{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p></div>)}</div></div></section>

    <section className="section container about" id="sobre"><div className="about-image"><img src={assets.fabiana} alt="Dra. Fabiana Paulo, fundadora da Faergo" /></div><div className="about-copy"><Eyebrow>Sobre nós</Eyebrow><h2>Dra. Fabiana Paulo</h2><p className="serif-lead">Transformar o ambiente corporativo em um espaço mais saudável, produtivo e humano.</p><p>À frente da Faergo, Fabiana atua na saúde do trabalhador com uma abordagem prática, próxima e orientada por evidências.</p><p>O trabalho começa no posto real: ouvimos colaboradores, dialogamos com RH e SESMT e traduzimos a rotina em ações que fazem sentido para cada operação.</p><div className="credentials"><span><b>CREFITO</b>337508-F</span><span><b>ATUAÇÃO</b>Fisioterapia do trabalho e ergonomia</span></div><div className="about-cards"><div><Eyebrow>Faergo Laboral</Eyebrow><p>Saúde ocupacional e qualidade de vida no trabalho em São Paulo e região: programas que integram movimento, relaxamento e conscientização.</p></div><div><span className="eyebrow orange-text">Faergo Fisioterapia Avançada</span><p>Atendimento fisioterapêutico ortopédico — alívio da dor, fortalecimento muscular e acompanhamento em pré e pós-operatórios.</p></div></div></div></section>

    <section className="section team-section"><div className="container"><SectionHeader eyebrow="Quem faz acontecer" title="Uma equipe que cuida do movimento." ><p>Profissionais que unem conhecimento técnico, escuta e presença para levar saúde ocupacional de verdade às empresas.</p></SectionHeader><div className="team-grid">{assets.team.map((member) => <article className="team-card" key={member.name}><div className="team-photo"><img src={member.image} alt={`${member.name}, ${member.role}`} /></div><div className="team-card-copy"><h3>{member.name}</h3><p>{member.role}</p></div></article>)}</div></div></section>

    <section className="section section-pale values"><div className="container"><SectionHeader eyebrow="O que nos move" title="Cuidado que vira cultura." /><div className="values-grid"><div className="value-block teal-top"><Eyebrow>Nossa missão</Eyebrow><p>Levar qualidade de vida ao trabalho, prevenindo doenças ocupacionais e fortalecendo o equilíbrio físico e mental dos colaboradores.</p></div><div className="value-block orange-top"><Eyebrow>Nossa visão</Eyebrow><p>Ser referência em saúde ocupacional, transformando empresas em espaços mais humanos, produtivos e saudáveis.</p></div></div><div className="tags-block"><Eyebrow>Nossos valores</Eyebrow><div className="tags">{['Humanização','Inovação','Excelência','Ética','Bem-estar integral','Parceria'].map(t => <span key={t}>{t}</span>)}</div></div></div></section>

    <section className="section container results"><SectionHeader eyebrow="Resultados que reportamos" title="Indicadores para decidir melhor."><p>Médias observadas em programas contínuos de 12 meses. Os indicadores do seu contrato são definidos no plano de trabalho.</p></SectionHeader><div className="result-grid">{[['−31%','queixas de dor na triagem'],['87%','adesão média por turno'],['−18%','absenteísmo musculoesquelético']].map(r => <div key={r[0]}><strong>{r[0]}</strong><span>{r[1]}</span></div>)}</div></section>

    <section className="testimonials"><div className="container testimonial-heading"><div><Eyebrow>Relações duradouras</Eyebrow><h2>O que dizem os clientes</h2></div><div className="rating"><b>★★★★★</b><span>4,9 de 5 · 38 avaliações</span></div></div><div className="marquee"><div className="marquee-track">{[...testimonials, ...testimonials].map((t, i) => <article className="quote-card" key={`${t[1]}-${i}`}><b>★★★★★</b><p>{t[0]}</p><small>{t[1]}</small></article>)}</div></div></section>

    <section className="section container faq"><div><Eyebrow>Perguntas frequentes</Eyebrow><h2>O que você precisa saber antes de começar.</h2></div><div className="faq-list">{[['Qual o tamanho mínimo de empresa atendida?','A partir de 30 colaboradores para programas contínuos. Abaixo disso, formatos pontuais: palestras, quick massage e avaliação postural.'],['As sessões param a produção?','Não. A escala é montada com a liderança de cada setor, em blocos de 10 a 15 minutos, geralmente em janelas já existentes.'],['O programa atende à NR-1 e à NR-17?','As ações apoiam o cumprimento da NR-1 e da NR-17, integrando-se aos programas de SST existentes. Laudos e AET formais são escopo específico.']].map(item => <details key={item[0]}><summary>{item[0]}<ChevronDown /></summary><p>{item[1]}</p></details>)}</div></section>

    <section className="section section-pale location"><div className="container location-grid"><iframe title="Mapa da localização da Faergo" src="https://www.google.com/maps?q=Av.+Dr.+Chucri+Zaidan,+940+-+Torre+II+-+Vila+Cordeiro,+São+Paulo+-+SP,+04583-110&output=embed" loading="lazy" /><div><Eyebrow>Onde estamos</Eyebrow><h2>Saúde que chega até sua empresa.</h2><p>Estamos localizados em São Paulo e atendemos a região, levando saúde e bem-estar para a sua empresa.</p><address>Av. Dr. Chucri Zaidan, 940 — 3º andar, Torre II<br />Vila Cordeiro, São Paulo — SP, 04583-110<br /><em>Atendimento de fisioterapia presencial</em></address><p>Segunda a sexta, das 9h às 18h</p><a className="button button-outline-teal" href="https://www.google.com/maps/dir/?api=1&destination=Av.+Dr.+Chucri+Zaidan,+940,+São+Paulo+-+SP" target="_blank" rel="noreferrer">Traçar rota no Google Maps <ArrowUpRight /></a></div></div></section>

    <section className="section container contact" id="contato"><div className="contact-copy"><Eyebrow>Contato</Eyebrow><h2>Vamos avaliar sua operação.</h2><p>Envie os dados e retornamos em até um dia útil com uma proposta de diagnóstico sem custo.</p><div className="contact-links"><a href="mailto:contato@faergolaboral.com">contato@faergolaboral.com</a><a href="tel:+5511970689514">(11) 97068-9514</a><a href="https://www.instagram.com/faergolaboral" target="_blank" rel="noreferrer">@faergolaboral</a></div></div><form className="contact-form" onSubmit={submitWhatsApp}><div className="form-grid"><label>Nome *<input name="nome" required /></label><label>Empresa<input name="empresa" /></label><label>E-mail corporativo *<input name="email" type="email" required /></label><label>Nº de colaboradores<input name="colaboradores" /></label></div><label>Cenário atual<textarea name="mensagem" rows={5} /></label><button className="button button-teal" type="submit">Enviar pelo WhatsApp <ArrowUpRight /></button><small>Ao enviar, abrimos uma conversa no WhatsApp da Faergo com os seus dados preenchidos.</small></form></section>

    <section className="section section-pale seo"><div className="container"><div><Eyebrow>Onde atendemos</Eyebrow><p>São Paulo capital, ABC Paulista, Guarulhos, Osasco, Barueri, Alphaville, Campinas e região metropolitana — indústrias, centros de distribuição e escritórios.</p></div><div><Eyebrow>Especialidades</Eyebrow><div className="tags">{['Ginástica laboral para empresas','Fisioterapia do trabalho','Saúde ocupacional','Ergonomia, NR-1 e NR-17','Prevenção de LER/DORT','Quick massage empresarial','Palestras de SIPAT','Pausas ativas','Qualidade de vida no trabalho','Redução de absenteísmo'].map(t => <span key={t}>{t}</span>)}</div></div></div></section>

    <footer className="footer"><div className="container footer-inner"><img src={assets.logo} alt="Faergo" /><span>Saúde laboral para empresas · São Paulo/SP</span><span>Site desenvolvido por <a href="https://www.sitesvortex.com.br/" target="_blank" rel="noreferrer">VÓRTEX</a></span><span>© 2026 Faergo</span></div></footer><a className="whatsapp" href="https://wa.me/5511970689514" target="_blank" rel="noreferrer">Falar no WhatsApp <ArrowUpRight /></a>
  </main>
}

