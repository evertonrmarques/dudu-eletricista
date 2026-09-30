import { ArrowRight, Check, ChevronDown, House, Lightbulb, MapPin, MessageCircle, Phone, ShieldCheck, Store, Wrench, Zap } from 'lucide-react'

const whatsappUrl = 'https://wa.me/557996532448?text=Ol%C3%A1%2C%20Dudu%20Eletricista!%20Encontrei%20voc%C3%AA%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.'

const services = [
  [Zap, 'Instalações elétricas', 'Novos pontos, ajustes e instalações para residências e comércios.'],
  [Wrench, 'Manutenção elétrica', 'Manutenção preventiva e corretiva para problemas do dia a dia.'],
  [Lightbulb, 'Iluminação', 'Instalação e ajustes de iluminação interna e externa.'],
  [ShieldCheck, 'Quadros elétricos', 'Organização, manutenção e adequações conforme a necessidade.'],
  [House, 'Atendimento residencial', 'Serviços para casas, apartamentos e imóveis residenciais.'],
  [Store, 'Atendimento comercial', 'Soluções para lojas, escritórios e outros ambientes comerciais.'],
]

const faqs = [
  ['Vocês atendem em Poço Redondo?', 'Sim. O foco é o atendimento local em Poço Redondo - SE. Para localidades próximas, consulte a disponibilidade pelo WhatsApp.'],
  ['Como peço um orçamento?', 'Clique em qualquer botão de WhatsApp e explique o serviço que você precisa. Fotos e vídeos podem ajudar na avaliação inicial.'],
  ['Posso enviar fotos do problema?', 'Sim. O WhatsApp é o canal indicado para enviar fotos, vídeos e detalhes do serviço.'],
  ['Vocês atendem empresas?', 'Sim. Há atendimento para comércios, escritórios e outros ambientes comerciais mediante agendamento.'],
]

export default function App() {
  return (
    <div className="site">
      <header className="header">
        <div className="container nav">
          <a href="#inicio" className="brand">
            <span className="brand-mark"><Zap size={21} /></span>
            <span><strong>DUDU ELETRICISTA</strong><small>Poço Redondo · Sergipe</small></span>
          </a>
          <nav className="nav-links">
            <a href="#servicos">Serviços</a>
            <a href="#atendimento">Atendimento</a>
            <a href="#duvidas">Dúvidas</a>
            <a href="#contato">Contato</a>
          </nav>
          <a className="button button-small button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Pedir orçamento</a>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span /> ELETRICISTA LOCAL · POÇO REDONDO - SE</div>
              <h1>Serviço elétrico bem cuidado, do jeito que precisa.</h1>
              <p>Instalações, manutenção, iluminação, quadros e correções para sua casa, comércio ou empresa, com atendimento a domicílio em Poço Redondo.</p>
              <div className="hero-actions">
                <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                  <MessageCircle size={18} /> Falar no WhatsApp <ArrowRight size={17} />
                </a>
                <a className="button button-ghost" href="#servicos">Ver serviços</a>
              </div>
              <div className="trust-row">
                <div><Check size={16}/> Atendimento local</div>
                <div><Check size={16}/> Residencial e comercial</div>
                <div><Check size={16}/> A domicílio</div>
              </div>
            </div>

            <aside className="hero-card">
              <div className="hero-card-top">
                <div className="availability"><span /> Atendimento por agendamento</div>
                <Zap size={55} className="hero-zap" />
              </div>
              <p className="card-kicker">ATENDIMENTO DIRETO</p>
              <h2>Explique o que precisa.</h2>
              <p className="card-text">Converse pelo WhatsApp, envie detalhes do serviço e combine o atendimento.</p>
              <div className="contact-box">
                <div><span>WhatsApp</span><strong>(79) 96532-2448</strong></div>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Abrir WhatsApp"><MessageCircle size={21}/></a>
              </div>
            </aside>
          </div>
        </section>

        <section className="section" id="servicos">
          <div className="container">
            <div className="section-heading">
              <p className="kicker">SERVIÇOS</p>
              <h2>O que o Dudu pode resolver</h2>
              <p>Soluções elétricas para necessidades residenciais e comerciais.</p>
            </div>
            <div className="services-grid">
              {services.map(([Icon, title, text]) => (
                <article className="service-card" key={title}>
                  <div className="service-icon"><Icon size={21}/></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft" id="atendimento">
          <div className="container split-grid">
            <div>
              <p className="kicker">ATENDIMENTO</p>
              <h2>Para sua casa ou para sua empresa.</h2>
              <p className="section-description">Atendimento simples: você explica a necessidade, combina os detalhes e agenda o serviço.</p>
              <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Solicitar orçamento</a>
            </div>
            <div className="points">
              <div className="point"><div className="point-icon"><House size={19}/></div><div><strong>Residencial</strong><p>Casas, apartamentos e outros imóveis.</p></div></div>
              <div className="point"><div className="point-icon"><Store size={19}/></div><div><strong>Comercial</strong><p>Lojas, escritórios e ambientes de atendimento.</p></div></div>
              <div className="point"><div className="point-icon"><MapPin size={19}/></div><div><strong>Atendimento local</strong><p>Poço Redondo - Sergipe e localidades próximas a consultar.</p></div></div>
              <div className="point"><div className="point-icon"><ShieldCheck size={19}/></div><div><strong>Organização</strong><p>Foco em serviço funcional e bem apresentado.</p></div></div>
            </div>
          </div>
        </section>

        <section className="section" id="duvidas">
          <div className="container faq-wrap">
            <div className="section-heading"><p className="kicker">DÚVIDAS</p><h2>Perguntas frequentes</h2></div>
            <div className="faq-list">
              {faqs.map(([question, answer]) => (
                <details className="faq-item" key={question}>
                  <summary>{question}<ChevronDown size={18}/></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contato">
          <div className="container">
            <div className="contact-card">
              <div><p className="kicker dark-kicker">ORÇAMENTO</p><h2>Precisa de um eletricista em Poço Redondo?</h2><p>Envie uma mensagem e explique o serviço que você precisa.</p></div>
              <a className="button button-dark" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Chamar no WhatsApp</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <a href="#inicio" className="brand"><span className="brand-mark"><Zap size={21}/></span><span><strong>DUDU ELETRICISTA</strong><small>Poço Redondo · Sergipe</small></span></a>
            <p className="footer-copy">Serviços elétricos residenciais e comerciais em Poço Redondo - SE.</p>
          </div>
          <div className="footer-contact">
            <a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={17}/> (79) 96532-2448</a>
            <span><MapPin size={17}/> Poço Redondo - Sergipe</span>
            <a href="tel:+557996532448"><Phone size={17}/> Ligar</a>
          </div>
        </div>
        <div className="container copyright">© {new Date().getFullYear()} DUDU ELETRICISTA. Todos os direitos reservados.</div>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar pelo WhatsApp"><MessageCircle size={25}/></a>
    </div>
  )
}