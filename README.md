
# 🦁 Zoo Functions

> Projeto desenvolvido durante o módulo de **Fundamentos** do curso de **Desenvolvimento Web da Trybe**, com foco em **JavaScript**, **lógica de programação** e **manipulação de dados**.

O **Zoo Functions** consiste na implementação de diversas funções para gerenciar informações de um zoológico fictício, utilizando apenas JavaScript puro, seguindo requisitos e testes previamente definidos.

---

## 🧠 Sobre o Projeto

Neste projeto, o objetivo foi **resolver desafios práticos de lógica** simulando operações reais de um zoológico, como:

* 🐘 Buscar animais por espécie ou localização;
* 🕒 Verificar horários de funcionamento;
* 💰 Calcular preços de ingressos;
* 👩‍💼 Gerenciar colaboradores (funcionários);
* 📊 Organizar dados complexos usando arrays e objetos.

Todo o projeto foi orientado a **testes automatizados**, exigindo que cada função retornasse exatamente o comportamento esperado.

---

## 🎯 Objetivos de Aprendizado

Com este projeto, foram desenvolvidas as seguintes habilidades:

* ✔️ Escrita de funções em **JavaScript ES6+**;
* ✔️ Manipulação avançada de **arrays e objetos**;
* ✔️ Uso de **[Higher Order Functions](https://medium.com/@fabiosenracorrea/javascript-higher-order-functions-map-e-reduce-do-zero-ao-topo-6365784f959a)**(`map`, `filter`, `reduce`, `find`);
* ✔️ Leitura e interpretação de testes automatizados;
* ✔️ Lógica de programação aplicada a problemas reais;
* ✔️ Código limpo, reutilizável e organizado.

---

## 🛠 Tecnologias Utilizadas

* **JavaScript (ES6+)**
* **Node.js**
* **Jest** (para testes automatizados)
* **ESLint** (padronização de código)

---

## 📂 Estrutura do Projeto

```text
📦 Poject-Zoo-Functions
 ┣ 📂 src
 ┃ ┣ 📄 animals.js
 ┃ ┣ 📄 employees.js
 ┃ ┣ 📄 prices.js
 ┃ ┣ 📄 schedule.js
 ┃ ┣ 📄 handlerElephants.js
 ┃ ┗ 📄 zoo.js
 ┣ 📂 test
 ┃ ┗ 📄 *.test.js
 ┣ 📄 data.js
 ┣ 📄 README.md
 ┗ 📄 package.json
```

* `src/`: contém as funções que foram implementadas;
* `test/`: arquivos de teste que validam cada função;
* `data.js`: base de dados utilizada pelas funções.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

✔️ Node.js
✔️ npm

### 1. Clone o repositório

```bash
git clone https://github.com/Thaisvc/Poject-Zoo-Functions.git
cd Poject-Zoo-Functions
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute os testes

```bash
npm test
```

💡 O objetivo do projeto é **fazer todos os testes passarem**, garantindo que as funções estejam corretas.

---

## 🧪 Testes

Os testes foram escritos com **Jest** e cobrem:

* Retornos esperados;
* Tipos de dados;
* Casos de erro;
* Comportamentos específicos de cada função.

Cada função implementada é validada individualmente, incentivando boas práticas e raciocínio lógico.

---

## 📌 Funcionalidades Implementadas

Algumas das funções desenvolvidas no projeto:

* `getAnimalsOlderThan`
* `getEmployeeByName`
* `getEmployeesCoverage`
* `getSchedule`
* `getAnimalMap`
* `calculateEntry`
* `countAnimals`
* `handlerElephants`

Cada função segue rigorosamente os requisitos definidos pelo projeto e pelos testes automatizados.

---

## 🧾 Boas Práticas Aplicadas

* 🧠 Código legível e bem estruturado;
* 🔁 Reutilização de funções;
* 🧪 Desenvolvimento guiado por testes;
* 📏 Padronização com ESLint;
* 🚫 Sem uso de bibliotecas externas além das permitidas.

---

## 📝 Observações

Este projeto faz parte do processo de aprendizado da Trybe e **não possui interface gráfica**, sendo totalmente focado em lógica e backend com JavaScript.

---
