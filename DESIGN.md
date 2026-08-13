---
name: "Upsells Musa"
description: "A Carta da Musa — TSL editorial íntima, progressiva e orientada por prova."
colors:
  paper: "#FFFFFF"
  ink: "#1A1A1A"
  ink-soft: "#4A5568"
  ink-muted: "#586577"
  line: "#E2E8F0"
  line-soft: "#EDF2F7"
  musa-pink: "#D11963"
  musa-pink-soft: "#FCE7F3"
  musa-pink-deep: "#BE185D"
  value-yellow: "#FCD34D"
  value-paper: "#FFFBEB"
  value-purple: "#7C3AED"
  action-green: "#066936"
  action-green-light: "#08783E"
  action-green-deep: "#04552B"
  success-line: "#D1FAE5"
  success-paper: "#ECFDF5"
  alert-red: "#C31810"
  alert-red-soft: "#EF4444"
  alert-paper: "#FEE2E2"
  demo-canvas: "#050507"
  demo-surface: "#101014"
  demo-line: "#292932"
  demo-copy-muted: "#B8B8C2"
  demo-pink: "#F72585"
  demo-pink-soft: "#F472B6"
typography:
  display:
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(2rem, 6.5vw, 3rem)"
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.5rem, 4.5vw, 2.125rem)"
    fontWeight: 900
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.25rem"
    fontWeight: 900
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
    fontFeature: "'ss01', 'cv11'"
  label:
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.875rem"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "0.04em"
rounded:
  tag: "4px"
  compact: "12px"
  action: "14px"
  card: "16px"
  feature: "18px"
  offer: "20px"
  device: "28px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "18px"
  xl: "24px"
  2xl: "28px"
  3xl: "32px"
  4xl: "36px"
  section: "48px"
components:
  cta-primary:
    backgroundColor: "{colors.action-green}"
    textColor: "{colors.paper}"
    rounded: "{rounded.action}"
    padding: "22px 24px"
    width: "100%"
  alert-bar:
    backgroundColor: "{colors.alert-red}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    padding: "13px 16px"
    width: "100%"
  approved-badge:
    backgroundColor: "{colors.success-paper}"
    textColor: "{colors.action-green-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  price-callout:
    backgroundColor: "{colors.value-paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.offer}"
    padding: "36px 24px"
    width: "100%"
  proof-panel:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "20px"
    width: "100%"
  case-story:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "0"
    width: "100%"
  guarantee:
    backgroundColor: "{colors.success-paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.feature}"
    padding: "28px 24px"
    width: "100%"
  scarcity:
    backgroundColor: "{colors.alert-paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "22px 24px"
    width: "100%"
  app-screen-carousel:
    backgroundColor: "{colors.demo-canvas}"
    textColor: "{colors.paper}"
    padding: "58px 24px 64px"
    width: "100%"
---

# Design System: Upsells Musa

## Overview

**Creative North Star: "A Carta da Musa"**

O sistema transforma resposta direta em uma carta íntima: uma coluna clara e estreita conduz a leitora por reconhecimento, mecanismo, demonstração, prova, valor e decisão. A voz visual é acolhedora, franca e feminina sem infantilização; a energia comercial nasce da progressão e da clareza, nunca de enfeite ou pressão prematura.

A base permanece editorial e luminosa. Rosa marca promessas e ideias-chave, verde confirma aprovação e ação, amarelo enquadra valor e vermelho sinaliza somente alerta ou escassez. Superfícies escuras são uma exceção funcional para mostrar biblioteca, produto ou aplicativo; não são um tema alternativo para a carta.

**Key Characteristics:**

- Leitura concentrada em uma coluna de 640px, otimizada primeiro para celular.
- Prova e demonstração aparecem antes da pressão comercial.
- Inter sustenta toda a hierarquia, da conversa ao CTA.
- Blocos claros e suavemente arredondados herdam a familiaridade do controle.
- Contraste alto, foco visível e movimento reduzido são invariantes.

## Colors

A paleta funciona como um vocabulário de intenção: cada acento tem um significado estável e não compete com os demais.

### Primary

- **Rosa Musa:** enfatiza promessas, palavras-chave, progressão e pequenos sinais de marca; suas variações suaves criam contexto sem dominar a carta.

### Secondary

- **Verde de Ação:** identifica compra aprovada, garantia e o caminho afirmativo; o CTA usa uma variação mais profunda para manter contraste forte.

### Tertiary

- **Amarelo de Valor:** enquadra preço, comparação e trechos de valor percebido.
- **Vermelho de Alerta:** fica restrito à barra crítica e à escassez verdadeira.
- **Violeta de Fechamento:** conclui blocos de valor, sem disputar a função do rosa.
- **Paleta de Demonstração:** preto editorial, superfícies grafite e rosa vivo enquadram telas reais de produto ou aplicativo.

### Neutral

- **Papel Branco:** fundo dominante e superfície de leitura.
- **Tinta:** texto principal e números de maior peso.
- **Tinta Suave:** explicações, apoio e corpo secundário.
- **Tinta Atenuada:** microtexto, metadados e recusa.
- **Linhas de Papel:** bordas e divisores discretos que organizam sem fechar a carta em caixas.

### Named Rules

**The Four Signals Rule.** Rosa enfatiza promessas e chaves; verde fica reservado a aprovação e ação; amarelo enquadra valor; vermelho aparece apenas em alerta ou escassez.

**The Dark Demonstration Rule.** Superfícies escuras só entram quando o produto, a biblioteca ou o aplicativo precisam ser demonstrados.

## Typography

**Display Font:** Inter (com fallbacks nativos de sistema)
**Body Font:** Inter (com fallbacks nativos de sistema)

**Character:** Uma única família torna a carta direta e confiável. Peso, escala, ritmo e cor criam a hierarquia; não há troca de fonte para simular luxo ou feminilidade.

### Hierarchy

- **Display:** títulos de abertura compactos, muito pesados e centralizados; uma frase pode receber ênfase rosa sem virar etiqueta.
- **Headline:** abre seções e mudanças de raciocínio, com peso alto e entrelinha firme.
- **Title:** nomeia cartões, provas, passos e entregas sem competir com a narrativa principal.
- **Body:** mantém leitura confortável e coloquial, com ritmo amplo dentro da coluna estreita.
- **Label:** atende estados, metadados e alertas; caixa alta é reservada a informação operacional curta.
- **Action:** usa o maior peso da família e texto inequívoco para declarar a consequência do clique.

### Named Rules

**The Inter Is the Voice Rule.** Inter é uma exigência do controle e deve permanecer em todas as páginas e componentes, com pesos de 400 a 900 carregados sob demanda.

**The No Eyebrow Rule.** A hierarquia começa pela mensagem, não por rótulos decorativos acima do título.

## Layout

A carta ocupa uma coluna central de 640px com respiro lateral de 24px. Em telas de até 480px, esse respiro cai para 18px e os blocos densos reduzem padding; aos 560px, comparações e mecanismos passam de duas colunas para uma; aos 760px, o tour do aplicativo vira uma faixa horizontal com scroll snap. Blocos claros seguem o fluxo da coluna, enquanto a demonstração do aplicativo pode romper a largura total da viewport sem abandonar o alinhamento interno.

A progressão padrão é narrativa antes de comercial: contexto e mecanismo, demonstração e prova, valor e preço, CTA, garantia e escassez. A página pode repetir o CTA após nova evidência, mas cada repetição deve estar ligada ao conteúdo que acabou de ser comprovado.

**The Proof Before Pressure Rule.** Demonstre o mecanismo e a entrega antes de intensificar preço, CTA ou escassez.

## Elevation & Depth

O sistema é plano por padrão e cria profundidade principalmente com cor tonal, borda suave e espaçamento. Cartões editoriais recebem apenas uma sombra ambiente discreta (`0 6px 20px rgba(0,0,0,.04)`); o CTA usa elevação responsiva (`0 10px 24px rgba(15,23,42,.2)`) e sobe 2px no hover; mockups de aplicativo recebem profundidade maior (`0 22px 46px rgba(0,0,0,.38)`) porque representam um objeto físico sobre palco escuro.

**The Soft Lift Rule.** Sombras são difusas e funcionais; nunca use sombra dura, glow decorativo ou elevação em todos os blocos.

## Shapes

As formas são gentis e utilitárias: etiquetas pequenas usam cantos de 4px; FAQs e cartões compactos ficam em 12px; ações e callouts usam 14px; cartões recorrentes usam 16px; garantias e destaques usam 18px; ofertas e palcos usam 20px; molduras de telas usam 28px. Pílulas ficam restritas a estados curtos, como compra aprovada, cashback e selo de prova. Círculos identificam passos, selos e avatares.

## Components

### CTAs

- **Primary:** ocupa toda a coluna, usa gradiente verde profundo, texto branco de peso máximo e ação escrita em primeira pessoa.
- **Hover / Focus / Active:** clareia levemente e sobe 2px no hover; recebe contorno rosa de alto contraste no foco por teclado; desce 2px ao pressionar. `prefers-reduced-motion` reduz as transições ao mínimo.
- **Pending:** quando o objeto de checkout ainda é placeholder, mantém a aparência mas bloqueia cobrança e comunica o estado com semântica desabilitada.

### Alert Bar

- **Style:** faixa vermelha fixa no topo, texto branco curto em caixa alta e ícone SVG de alerta.
- **Purpose:** comunica apenas um estado operacional crítico; não serve como banner promocional genérico.

### Approved Badge

- **Style:** pílula verde clara com texto verde profundo e check SVG.
- **Purpose:** confirma a compra anterior antes de apresentar a nova oferta.

### Price Callout

- **Style:** cartão amarelo de grande respiro com condição rosa, âncora riscada, cashback verde e preço em escala dominante.
- **Purpose:** torna a condição comercial legível em poucos segundos sem misturar evidência ou escassez dentro do preço.

### Proof and Case Cards

- **Proof Panel:** superfície branca elevada para mostrar uma entrega real ou uma demonstração explicitamente identificada como ilustrativa.
- **Case Story:** sequência editorial sem caixa, separada por linha tracejada, com contexto, ajuste, resultado e mídia aprovada.
- **Evidence:** nomes, fotos, métricas e depoimentos só entram quando aprovados; resultados variáveis recebem ressalva visível.

### Guarantee

- **Style:** bloco verde claro centralizado, selo ou escudo, título firme e explicação simples da garantia.
- **Purpose:** reduz risco depois da decisão de valor e antes das últimas chamadas.

### Scarcity

- **Style:** bloco vermelho claro com número dominante e justificativa operacional.
- **Purpose:** apresenta apenas limites confirmados da oferta; o vermelho não se espalha para preço, prova ou CTA.

### App Screen Carousel

- **Style:** palco preto em largura total com cartões de tela grafite, moldura arredondada, legenda branca e metadado cinza.
- **Responsive / Focus:** três colunas em telas amplas; abaixo de 760px vira carrossel horizontal com scroll snap, pista textual e foco rosa visível no contêiner navegável.
- **Purpose:** demonstra um produto ou aplicativo existente; não é uma licença para escurecer outras seções.

## Do's and Don'ts

### Do:

- **Do** preserve alto contraste, foco visível, HTML semântico e respeito a `prefers-reduced-motion`.
- **Do** mantenha Inter, a coluna de 640px e o fluxo progressivo de carta íntima.
- **Do** use ícones SVG simples quando um símbolo realmente melhora a compreensão.
- **Do** identifique demonstrações ilustrativas e use somente provas, números e condições comerciais confirmados.
- **Do** apresente cada variante como uma oferta única e fácil de compreender.

### Don't:

- **Don't** use eyebrows, emoji como ícone, pulse, glow decorativo ou sombra dura.
- **Don't** troque a semântica cromática entre rosa, verde, amarelo e vermelho.
- **Don't** invente dados pessoais, depoimentos, métricas, histórico, atualizações ou alegações de resultado.
- **Don't** descreva uma oferta unificada como combo, pacote ou soma de produtos.
- **Don't** use superfícies escuras fora de demonstrações reais de produto, biblioteca ou aplicativo.
