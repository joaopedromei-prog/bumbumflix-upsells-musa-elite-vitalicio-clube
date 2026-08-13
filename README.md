# Upsells Musa — TSLs em HTML

Três páginas estáticas e responsivas de upsell para o funil do BumbumFlix:

- `outputs/consultoria-musa-elite/index.html`
- `outputs/upsell-vitalicio-bumbumflix/index.html`
- `outputs/clube-das-musas-desbloqueado/index.html`

Cada pasta funciona de forma independente, usa caminhos relativos e pode ser publicada diretamente em um servidor estático. Os assets visuais estão em WebP.

## Antes de publicar

Substitua os placeholders Payt presentes no `data-payt-object` de cada página:

- `PAYT_OBJECT_CONSULTORIA`
- `PAYT_OBJECT_VITALICIO`
- `PAYT_OBJECT_APLICATIVO`

Enquanto esses placeholders permanecerem ativos, os CTAs não iniciam cobrança.

Consulte [as instruções completas](outputs/LEIA-ME.md) para integrações, provas e validações realizadas.
