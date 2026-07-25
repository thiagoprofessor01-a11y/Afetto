# Afetto Desenvolvimento Humano — landing page

Landing page (seção única, scroll) para a clínica de psicologia e neuropsicologia
**Afetto Desenvolvimento Humano**, em Palmas — TO, fundada por **Patrícia Miranda**
(psicóloga e neuropsicóloga, CRP 23/132).

Site estático, sem build. É só abrir o `index.html` no navegador ou publicar a pasta
em qualquer hospedagem de arquivos estáticos (GitHub Pages, Netlify, Vercel, Cloudflare Pages).

## Estrutura

```
index.html               marcação e conteúdo (copy em PT-BR)
assets/css/styles.css    sistema visual (tokens de cor + tipografia)
assets/js/main.js         menu mobile, entrada do hero, ano do rodapé
assets/img/              logotipo, favicons e fotos da Dra. Patrícia
```

## Identidade visual (fiel ao manual de marca)

- **Logotipo oficial** extraído do manual (`assets/img/logo-lockup.png`, fundo transparente)
  usado no cabeçalho e rodapé; `logo-heart.png` é o símbolo do coração isolado.
- **Cores da marca** aplicadas com significado, não como blocos:
  - Verde `#AFD5C0` → conteúdo racional/cognitivo (avaliação, estimulação, TDAH, dislexia…)
  - Rosa `#FDC1BC` → acolhimento emocional (psicoterapia, ansiedade, grupos…)
  - Marrom `#C29250` → integração/estrutura (CTA, links, o "fio" que costura as seções)
  - Bege de fundo → leveza e neutralidade
- **Elemento de assinatura — "o fio da integração":** linha marrom contínua (a árvore/neurônio
  do logo) que emoldura a foto do hero e reaparece entre as seções.
- **Tipografia:** display `De Rotterdam Demo` (fallback web **Fredoka**) em minúsculas + corpo **Mulish**.
  Para usar a fonte oficial, coloque os arquivos em `assets/fonts/` e adicione um `@font-face`
  no topo do `styles.css` — o fallback já mantém o mesmo caráter arredondado.

## Fotos — como adicionar

Há duas formas:

1. **Pelo chat (mais fácil):** reenvie as imagens como anexos de arquivo que eu embuto
   na página e republico — sem mexer em código.
2. **Manualmente:** coloque os arquivos em `assets/img/` com os nomes exatos abaixo.
   Enquanto não existirem, a página mostra um espaço reservado elegante, sem quebrar o layout.

| Arquivo | Onde aparece | Sugestão |
|---------|--------------|----------|
| `patricia-3.jpg` | **hero** (coluna direita) | retrato acolhedor (poltrona), vertical ~5:6 |
| `patricia-1.jpg` | seção **profissional** | retrato formal (blazer branco), vertical ~4:5 |
| `clinica-1.jpg` | seção **o espaço** | recepção / entrada, horizontal ~4:3 |
| `clinica-2.jpg` | seção **o espaço** | sala de atendimento, horizontal ~4:3 |
| `clinica-3.jpg` | seção **o espaço** | espaço de estimulação / grupos, horizontal ~4:3 |

## Dados de contato já preenchidos (do manual)

- WhatsApp: **(63) 99223-5938** → `wa.me/5563992235938`
- E-mail: **afetto.desenvolvimento@gmail.com**
- Instagram: **@patmiranda.neuropsicologa**
- Endereço: **Quadra 204 Sul, Alameda 01, Lote 43 · Plano Diretor Sul · Palmas — TO · CEP 77.020-490**
- CNPJ: **49.867.094/0001-90**

> Único item a confirmar: os **horários de atendimento** na seção de contato são um
> placeholder (Seg–sex 8h–19h · Sáb 8h–12h). Marcado com `<!-- CONFIRMAR -->` no HTML.

## Acessibilidade

- Skip link, `:focus-visible` visível em toda a navegação por teclado.
- Menu mobile com `aria-expanded`, fecha no `Esc`.
- Hierarquia semântica (`header`/`main`/`section`/`footer`, um único `h1`).
- `prefers-reduced-motion` respeitado (a única animação orquestrada é a entrada do hero).
