# DATA FORMAT VALIDATOR
Uma biblioteca para validação de formatos de dados (em suma brasileiros) utilizando os conceitos de Linguagens Regulares.

## Como usar
**1. No seu projeto, rode:**
```
npm install git+https://github.com/anninha05/data-format-validator.git
```
**2. Compilação Manual (TypeScript para JavaScript)**

Esta biblioteca foi desenvolvida em TypeScript. Como a instalação está sendo feita diretamente via link do GitHub, o NPM pode baixar apenas o código-fonte original (na pasta ```src/```) e pular a etapa de gerar os arquivos finais em JavaScript.

Para que a biblioteca funcione corretamente no seu navegador, faça este passo a passo rápido para compilar o código logo após a instalação:

**Entre na pasta da biblioteca recém-instalada:**
```
cd node_modules/data-format-validator
```
**Instale as dependências da própria biblioteca (isso fará o download do compilador TypeScript):**
```
npm install
```
**Execute o compilador para gerar os arquivos .js:**
```
npx tsc
```
