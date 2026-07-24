# Afetto Desenvolvimento Humano — landing page

Landing page (seção única, scroll) para a clínica de psicologia e neuropsicologia
**Afetto Desenvolvimento Humano**, em Palmas — TO, fundada pela Dra. Patrícia.

Site estático, sem build. É só abrir o `index.html` no navegador ou publicar a pasta
em qualquer hospedagem de arquivos estáticos (GitHub Pages, Netlify, Vercel, Cloudflare Pages).

## Estrutura

```
index.html              → marcação e conteúdo (copy em PT-BR)
assets/css/styles.css   → sistema visual (tokens de cor + tipografia)
assets/js/main.js        → menu mobile, entrada do hero, ano do rodapé
assets/img/             → coloque aqui a foto da Dra. Patrícia
```

## Conceito de design

- **Tese da marca como sistema:** verde `#AFD5C0` governa o conteúdo racional/cognitivo,
  rosa `#FDC1BC` governa o acolhimento emocional, marrom `#C29250` é a estrutura que integra os dois.
- **Elemento de assinatura — "o fio da integração":** uma linha marrom contínua (SVG) que,
  no hero, tece entre as formas verde (razão) e rosa (emoção) e reaparece como costura entre as seções.
- **Tipografia:** display `De Rotterdam Demo` (fallback web **Fredoka**) em minúsculas + corpo **Mulish**.
  Para usar a fonte oficial, adicione os arquivos `De Rotterdam Demo` em `assets/fonts/` e um
  `@font-face` no topo do `styles.css` — o fallback já mantém o mesmo caráter arredondado.
- **Movimento:** uma única entrada orquestrada no hero; `prefers-reduced-motion` respeitado.

## O que substituir antes de publicar

Todos os pontos abaixo estão marcados no `index.html` com comentários `<!-- SUBSTITUIR ... -->`:

| Item | Onde | Valor atual (placeholder) |
|------|------|---------------------------|
| WhatsApp | hero + contato (`wa.me/...` e `(63) 99999-9999`) | `5563999999999` |
| Foto da Dra. Patrícia | `assets/img/dra-patricia.jpg` | ausente (mostra fallback) |
| Registro profissional | seção Dra. Patrícia | `CRP 23/XXXXX` |
| Formação | seção Dra. Patrícia (`.prof-facts`) | títulos genéricos |
| Endereço | seção contato | `Rua Exemplo, 000 · Plano Diretor Sul` |
| Horário | seção contato | Seg–sex 8h–19h · Sáb 8h–12h |
| Mapa | iframe do Google Maps | `q=Palmas, Tocantins` |

> A foto tem tratamento de fallback automático: se `dra-patricia.jpg` não existir,
> aparece um espaço reservado no lugar, sem quebrar o layout. Recomenda-se um retrato
> vertical na proporção **4:5**.

## Acessibilidade

- Skip link, `:focus-visible` visível em toda a navegação por teclado.
- Menu mobile com `aria-expanded`, fecha no `Esc`.
- Hierarquia semântica (`header`/`main`/`section`/`footer`, um único `h1`).
