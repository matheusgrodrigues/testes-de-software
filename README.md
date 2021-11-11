# testes-de-software

No desenvolvimento Ágil, testar é parte da nossa rotina como pessoas desenvolvedoras. È tão importante que, há muito tempo atrás, Mike Cohn introduziu o conceito da Pirâmide de Testes, buscando apresentar uma forma de como pensar a estratégia de testes.

![Piramide de testes](https://res.cloudinary.com/practicaldev/image/fetch/s--BuF5otLs--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/inn0v523cch7npqrgwl6.png)

Na pirâmide de testes, vemos mais testes unitários na base, por serem mais rápidos de desenvolver e rodar. A quantidade de testes diminui conforme vamos subindo a pirâmide, pois aumenta o esforço neessário e o tempo de execução de cada tipo de teste. Para fazer um teste de UI, por exemplo, é necessário muito mais esforço e demora mais para rodar e ter feedback. Por isso, segundo a pirâmide, devemos ter menos testes deste tipo.

Porém, como foi dito, a pirâmide é apenas uma forma de pensar a nossa estratégia de testes, e não um caminho para ser seguido ao pé da letra. Se pensarmos em como colocar em prática em aplicações que sãp exclusivamente front-end, pode ser que usá-la não faça sentido.

## Tipos de testes

### Testes Manuais

### Testes de UI

### Testes de Integração

Nós já sabemos que as unidades do nosso código estão funcionando corretamente de forma isolada, mas precisamos garantir que, quando uma parte se comunicar com a outra, as coisas vão funcionar como esperado. No front-end, eu acredito que os testes de integração são ainda mais importantes, porque queremos nos certificar de que nossos componentes funcionam conforme esperado quando estão sendo usados em conjunto.

Por exemplo, se tivermos um formulário contendo vários inputs diferentes e com um botão para enviar os dados. Queremos testar que, ao preencher todos os dados corretamente e clicar no botão, veremos a mensagem de sucesso esperada. Sendo cada input e botão um componente separado, não seria suficiente testar cada um isoladamente.

Algumas Ferramentas: Jest e Cypress

### Testes Unitários

É o tipo de testes que mais ouvimos falar. Podemos considerar uma unidade como sendo a menor parte de um código. Pode ser uma função, por exemplo. Quando falamos de testes unitários, estamos verificando que essa pequena parte de código faz oque deveria fazer, independente de outras unidades.

Esse tipo de teste é mais rápido e fácil de escrever e, por isso, é recomendado escrever muitos destes. Quanto mais partes do código conseguirmos testar com esse tipo de teste, menos vamos precisar fazer os outros tipos de testes, que são mais custosos.

Quando desenvolvemos software para o front-end, muitas vezes trabalhamos com componentes. Os testes unitários nos permitem garantir que eles funcionam como esperado de forma isolada, mas também é preciso saber se esses componentes funcionam quando utilizados de forma conjunta. Por exemplo, podemos alterar as propriedades que um componente espera receber e alterar seus testes unitários, garantindo que continua funcionando de forma isolada. Os testes unitários vão continuar passando. Porém, como saber que os outros componentes que o utilizam não vão parar de funcionar com essa mudança? Para isso, podemos pensar em outros tipos de teste.

Algumas Ferramentas: Jest, Jasmine, Mocha e Chai