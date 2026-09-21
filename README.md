# 📐 jQuery: Manipulando Dimensões Dinamicamente

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
![Status](https://img.shields.io/badge/status-em%20estudo-yellow?style=for-the-badge)

Projeto de estudo focado em **como ler e alterar as dimensões de elementos do DOM com jQuery**, entendendo a diferença entre os métodos `width()`, `innerWidth()` e `outerWidth()` (e seus equivalentes de altura).

---

## 📑 Sumário

- [Sobre o projeto](#-sobre-o-projeto)
- [Conceitos abordados](#-conceitos-abordados)
- [Como as dimensões são calculadas](#-como-as-dimensões-são-calculadas)
- [Código de exemplo](#-código-de-exemplo)
- [Exemplo de resultado](#-exemplo-de-resultado)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Como executar](#-como-executar)
- [Aprendizados](#-aprendizados)
- [Próximos passos](#-próximos-passos)
- [Autor](#-autor)

---

## 📖 Sobre o projeto

O objetivo deste repositório é praticar a manipulação de dimensões com jQuery, aprendendo a:

- **Definir** a largura de um elemento dinamicamente com `.css()` e `.width()`;
- **Obter** as dimensões calculadas de um elemento no navegador;
- **Diferenciar** o que cada método inclui no cálculo (conteúdo, padding, borda e margem);
- **Depurar** os valores usando `console.log()`.

---

## 🧠 Conceitos abordados

| Conceito | Descrição |
| --- | --- |
| Seletores jQuery | Selecionar elementos com `$('.box')` |
| `.css()` | Definir propriedades CSS via JavaScript |
| `.width()` / `.height()` | Ler ou definir a dimensão do conteúdo |
| `.innerWidth()` / `.innerHeight()` | Dimensão do conteúdo + padding |
| `.outerWidth()` / `.outerHeight()` | Dimensão do conteúdo + padding + borda (+ margem, com `true`) |
| `$(function(){})` | Executar o código somente após o DOM estar pronto |

---

## 📏 Como as dimensões são calculadas

```
┌──────────────────────── margin ────────────────────────┐
│  ┌──────────────────── border ──────────────────────┐  │
│  │  ┌────────────────── padding ────────────────┐   │  │
│  │  │  ┌────────────── content ──────────────┐  │   │  │
│  │  │  │       width() / height()            │  │   │  │
│  │  │  └─────────────────────────────────────┘  │   │  │
│  │  │         innerWidth() / innerHeight()      │   │  │
│  │  └───────────────────────────────────────────┘   │  │
│  │         outerWidth() / outerHeight()             │  │
│  └──────────────────────────────────────────────────┘  │
│      outerWidth(true) / outerHeight(true)              │
└────────────────────────────────────────────────────────┘
```

| Método | Conteúdo | Padding | Borda | Margem |
| --- | :---: | :---: | :---: | :---: |
| `width()` / `height()` | ✅ | ❌ | ❌ | ❌ |
| `innerWidth()` / `innerHeight()` | ✅ | ✅ | ❌ | ❌ |
| `outerWidth()` / `outerHeight()` | ✅ | ✅ | ✅ | ❌ |
| `outerWidth(true)` / `outerHeight(true)` | ✅ | ✅ | ✅ | ✅ |

---

## 💻 Código de exemplo

```javascript
$(function () {

  // Define a largura do elemento
  $('.box').css('width', '900');

  // width/height = dimensão do conteúdo (sem padding, borda e margem)
  // innerWidth/innerHeight = conteúdo + padding
  // outerWidth/outerHeight = conteúdo + padding + borda
  //   -> ao passar `true`, a margem também é incluída

  console.log('width: ' + $('.box').width());
  console.log('Inner Width: ' + $('.box').innerWidth());
  console.log('Outer Width: ' + $('.box').outerWidth());

  console.log('height: ' + $('.box').height());
  console.log('Inner height: ' + $('.box').innerHeight());
  console.log('Outer height: ' + $('.box').outerHeight(true));

});
```

### HTML e CSS de apoio

```html
<div class="box">Conteúdo da caixa</div>
```

```css
.box {
  height: 200px;
  padding: 20px;
  border: 5px solid #333;
  margin: 10px;
  background-color: #f0f0f0;
}
```

---

## 🖥️ Exemplo de resultado

Considerando o CSS acima (com `box-sizing: content-box`) e a largura definida em `900`, o console exibirá:

```
width: 900
Inner Width: 940
Outer Width: 950
height: 200
Inner height: 240
Outer height: 270
```

> 💡 Note que `Outer height` retorna `270` porque foi chamado com `outerHeight(true)`, o que inclui a margem (10px em cima + 10px embaixo).

---

## 📂 Estrutura do projeto

```
📦 nome-do-repositorio
 ┣ 📂 css
 ┃ ┗ 📜 style.css
 ┣ 📂 js
 ┃ ┗ 📜 script.js
 ┣ 📜 index.html
 ┗ 📜 README.md
```

> Ajuste a estrutura acima conforme a organização real do seu projeto.

---

## 🚀 Como executar

1. **Clone o repositório**

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. **Acesse a pasta do projeto**

   ```bash
   cd nome-do-repositorio
   ```

3. **Abra o arquivo `index.html`** no navegador.

4. **Abra o console** (`F12` → aba *Console*) para visualizar os valores impressos.

> ⚠️ Certifique-se de que a biblioteca jQuery está sendo carregada no `index.html`, por exemplo via CDN:
>
> ```html
> <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
> ```

---

## 🎯 Aprendizados

- `width()` e `height()` retornam apenas a área de **conteúdo**, sem padding, borda ou margem.
- `innerWidth()` e `innerHeight()` **somam o padding** ao conteúdo.
- `outerWidth()` e `outerHeight()` **somam padding e borda**; ao passar `true`, a **margem** também entra no cálculo.
- Os valores retornados são **números** (sem `px`), o que facilita cálculos.
- Usar `$(function(){ ... })` garante que o DOM esteja carregado antes de o script rodar.

---

## 🔭 Próximos passos

- [ ] Alterar dimensões com `.width()` e `.height()` passando valores
- [ ] Ajustar dimensões em resposta a eventos (`click`, `resize`)
- [ ] Animar mudanças de tamanho com `.animate()`
- [ ] Explorar posicionamento com `.offset()` e `.position()`
- [ ] Trabalhar com scroll: `.scrollTop()` e `.scrollLeft()`

---

## 📚 Referências

- [Documentação oficial do jQuery – `.width()`](https://api.jquery.com/width/)
- [Documentação oficial do jQuery – `.innerWidth()`](https://api.jquery.com/innerWidth/)
- [Documentação oficial do jQuery – `.outerWidth()`](https://api.jquery.com/outerWidth/)

---

## 👨‍💻 Autor

Feito com 💙 por **Seu Nome**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/seu-usuario)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/seu-perfil)

---

⭐ Se este projeto te ajudou de alguma forma, deixe uma estrela no repositório!
