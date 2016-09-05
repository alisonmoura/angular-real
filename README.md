# Angular Real

Um projeto, extremamente simples para formatação de moeda brasileira

## Instalação
### Bower
> $ bower install angular-real

### NPM
> $ npm install angular-real

## Uso
Em seu html principal, adicione o seguinte código:

Bower:
``<script src="bower_components/angular-real/dist/angular-real.js"></script>``

NPM:
``<script src="node_modules/angular-real/dist/angular-real.js"></script>``

Adicione o módulo ``AngularReal`` como dependencia do seu projeto.

``angular.module('MeuApp',['AngularReal'])``

Para usar o filter, faça o seguinte:

``{{ meuTexto | real }}``
