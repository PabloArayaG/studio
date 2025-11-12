#!/bin/bash
# Script para optimizar imágenes automáticamente
# Requiere: brew install webp (macOS) o apt install webp (Linux)

echo "🚀 Optimizando imágenes..."

# Crear backup
mkdir -p backup-images
echo "📦 Creando backup..."
cp -r src/assets/img backup-images/

# Crítico 1: Fondo ROI (reducir tamaño y calidad)
echo "🔴 Optimizando bg.webp..."
cwebp -q 75 src/assets/img/roi/bg.webp -o src/assets/img/roi/bg-optimized.webp
mv src/assets/img/roi/bg-optimized.webp src/assets/img/roi/bg.webp

# Crítico 2: Thumbnail video (redimensionar)
echo "🔴 Optimizando thumbnail-1.webp..."
cwebp -resize 665 374 -q 80 src/assets/img/hero/thumbnail-1.webp -o src/assets/img/hero/thumbnail-1-optimized.webp
mv src/assets/img/hero/thumbnail-1-optimized.webp src/assets/img/hero/thumbnail-1.webp

# Crítico 3: Logo WhatsApp BSP (redimensionar)
echo "🔴 Optimizando whatsapp-bsp..."
cwebp -resize 800 0 -q 80 src/assets/img/whatsapp/whatsapp-bsp-2048x403.webp -o src/assets/img/whatsapp/whatsapp-bsp-optimized.webp
mv src/assets/img/whatsapp/whatsapp-bsp-optimized.webp src/assets/img/whatsapp/whatsapp-bsp-2048x403.webp

# Alta Prioridad: Logos de clientes (redimensionar a 300px ancho)
echo "🟡 Optimizando logos de clientes..."
for logo in src/assets/img/clients/*.webp; do
    echo "   Optimizando: $logo"
    cwebp -resize 300 0 -q 85 "$logo" -o "${logo%.webp}-optimized.webp"
    mv "${logo%.webp}-optimized.webp" "$logo"
done

# Alta Prioridad: Imágenes Solutions
echo "🟡 Optimizando imágenes de Solutions..."
cwebp -q 78 src/assets/img/solutions/image-2.webp -o src/assets/img/solutions/image-2-optimized.webp
mv src/assets/img/solutions/image-2-optimized.webp src/assets/img/solutions/image-2.webp

cwebp -q 78 src/assets/img/solutions/mkp.webp -o src/assets/img/solutions/mkp-optimized.webp
mv src/assets/img/solutions/mkp-optimized.webp src/assets/img/solutions/mkp.webp

cwebp -q 78 src/assets/img/solutions/respuestas.webp -o src/assets/img/solutions/respuestas-optimized.webp
mv src/assets/img/solutions/respuestas-optimized.webp src/assets/img/solutions/respuestas.webp

echo "✅ ¡Optimización completada!"
echo "📊 Ahorro estimado: ~680 KB"
echo "💾 Backup guardado en: backup-images/"
echo ""
echo "Para restaurar si algo sale mal:"
echo "   rm -rf src/assets/img && cp -r backup-images/img src/assets/"


