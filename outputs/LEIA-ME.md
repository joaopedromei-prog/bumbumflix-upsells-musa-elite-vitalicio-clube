# Entrega — três TSLs de upsell

## Páginas

- `consultoria-musa-elite/index.html`
- `upsell-vitalicio-bumbumflix/index.html`
- `clube-das-musas-desbloqueado/index.html`

Cada pasta é independente e pode ser publicada copiando a pasta inteira para o servidor. Todos os caminhos de CSS, JavaScript e imagens são relativos.

## Antes de publicar

1. Substitua o valor de `data-payt-object` da tag `<body>` em cada `index.html`:
   - `PAYT_OBJECT_CONSULTORIA`
   - `PAYT_OBJECT_VITALICIO`
   - `PAYT_OBJECT_APLICATIVO`
2. Confirme o objeto correspondente no ambiente seguro da Payt. O JavaScript replica o valor do `<body>` para todos os CTAs e para o seletor de parcelas.
3. Enquanto um valor começar com `PAYT_OBJECT_`, a biblioteca de checkout não é carregada e os CTAs exibem um aviso em vez de iniciar cobrança.
4. Depois de inserir os IDs reais, teste one-click e PIX em ambiente seguro, sem concluir uma compra.

## Provas adicionais

As páginas usam somente provas já aprovadas e capturas reais do aplicativo sem dados pessoais visíveis. Os pontos para materiais ainda não fornecidos estão marcados por comentários `PROVA EXTRA` no HTML:

- Consultoria: cardápio/diagnóstico real e print ou áudio específico de Nutrição Ativadora.
- Vitalício: evidência real de uma atualização já lançada.
- Aplicativo: gravação vertical limpa do uso real, caso seja fornecida.

Não substitua esses espaços por depoimentos, resultados, funcionalidades ou atualizações não comprovados.

## Integrações preservadas

GTM, Microsoft Clarity, UTMify, pixel, propagação de UTMs, backredirect, downsell e links legais foram herdados do controle. O downsell aponta para `https://bumbum-pessego.com/down1/` e recebe os parâmetros da página atual.

## Validação realizada

- Larguras de 320, 375, 390 e 1440 px, sem overflow horizontal.
- Assets locais, imagens e tipografia carregando.
- FAQs operacionais e foco visível definido para teclado.
- Contador regressivo com chave de armazenamento própria por página.
- Respeito a `prefers-reduced-motion`.
- Checkout bloqueado com placeholders e biblioteca Payt não carregada.
- CTAs com IDs únicos, UTMs no downsell e caminhos relativos para publicação.

O teste final do checkout real depende exclusivamente dos três IDs Payt definitivos.
