Fortune Cookie - Projeto Interativo

Um projeto de página interativa de Biscoito da Sorte, desenvolvido com Next.js 14+ e Tailwind CSS. A página mostra uma imagem de cookie que, ao ser clicada, “quebra” e revela uma frase da sorte e números aleatórios.

Funcionalidades

Página totalmente responsiva.

Animações suaves usando framer-motion.

Componentes separados para manter o código organizado:

Cookie → controla a interação do biscoito.

Fortune → exibe a frase da sorte e os números.

LoadingDots → animação enquanto a sorte é gerada.

Alt text nas imagens para acessibilidade.

Estilos aplicados via Tailwind CSS e CSS global.

Tecnologias utilizadas

Next.js 14+
 (App Router)

React

Tailwind CSS

Framer Motion

Instalação e execução

Clone este repositório:

git clone https://github.com/nycolasas/fortune-cookie.git


Entre na pasta do projeto:

cd fortune-cookie


Instale as dependências:

npm install


Rode o projeto em modo de desenvolvimento:

npm run dev


Abra o navegador em http://localhost:3000

Estrutura do projeto
app/
  ├─ page.tsx          # Página principal
components/
  ├─ Cookie.tsx
  ├─ Fortune.tsx
  └─ LoadingDots.tsx
public/
  └─ cookie.png
styles/
  └─ globals.css      # CSS global do projeto

Observações

Certifique-se de que todas as imagens usadas estejam na pasta public.

Projeto desenvolvido para fins de aprendizado e demonstração de conceitos de React e Next.js.
