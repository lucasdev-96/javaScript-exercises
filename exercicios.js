//Exercício 1. Crie uma função que retorna a string "Olá, " concatenada com um argumento text a ser passado para a
// função e com ponto de exclamação "!" no final.
const returnString = (nome) => {
 return `Olá ${nome}!`
}
console.log('Exercício 1:', returnString('Lucas'))

// Exercício 2. Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.

const returnYears = (age) => {
  return age * 365;
}

console.log('Exercício 2:',returnYears(25))

// Exercício 3. Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
// funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
// X", em que X é o quanto o funcionário ganhou no mês.

const salary = (monthHours, payHours) => {
  const result = monthHours * payHours;
  const saldoLiquido = result * 0.30;
  return `Salário igual a R$ ${result - saldoLiquido}`
}

console.log('Exercício 3:', salary(150, 40.5))

// Exercicio 4 Crie uma função que recebe um número de 1 a 12 e retorne o mês correspondente como uma string. Por
// exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
const returnMonth = (month) => {
  switch (month) {
    case 1 : 
    return 'Janeiro';
    case 2 : 
    return 'Fevereiro';
    case 3 : 
    return 'Março';
    case 4 : 
    return 'Abril';
    case 5 : 
    return 'Maio';
    case 6 : 
    return 'Junho';
    case 7 : 
    return 'Julho';
    case 8 : 
    return 'Agosto';
    case 9 : 
    return 'Setembro';
    case 10 : 
    return 'Outubro';
    case 11 : 
    return 'Novembro';
    case 12 : 
    return 'Dezembro';
    default :
    return 'Digite um mês'
  } 

}

console.log('Exercício 4:', returnMonth(8))
// crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo
const number = (a, b) => {
  if(a >= b && typeof b === 'number') return true;
  else return false;
}

console.log('Exercicio 5:', number(2, 4))

// Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
// retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
// numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro
// de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
// tipo ...".

const returnBoolOrNumber = (type) => {
  if(typeof type === "boolean") return !type 
  else if(typeof type === 'number') {
  return -type
  } else  return 'boleano ou number esperados o valor passado é do tipo string'
}
console.log('Exercico 6:', returnBoolOrNumber('-600'))

// Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
// o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
// "entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
// inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
// considerando se numero é igual a minimo ou a maximo.



// const numbers = (numero, minimo, maximo, inclusivo = false) => {
//   if(numero >= minimo && numero <= maximo) return true;
//   else return inclusivo
// }
// console.log('Execercicio 7', numbers(10,100,50))
// 12 10 50 

// Desenvolva uma função que recebe dois números inteiros não negativos maiores ou iguais a zero e realize a
// multiplicação deles. Porém, não utilize o operador de mutiplicação;


 const inteiro = (a, b) => {
   let number = 0;
   if(a > 0 && b > 0 ) {
    for(let index = 0; index < b; index++) {
      number +=  a
  }
}
 return number
 }
 console.log('Exercicio 8:', inteiro(5, 5))

// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
// que o segundo será o número de vezes que haverá repetição. Um array será retornado.


const array = (element, x) => {
 const arrayResult = [];
 for(let index = 0; index < x; index++) {
   arrayResult.push(element)
 }
 return arrayResult;
}
console.log('Exercicio 9:', array(7,3))

// Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
// quantidade especificada no parâmetro.
const concatString= (number) => {
  // return '+'.repeat(number)
   let count = '';
   for(let index = 0; index < number; index ++) {
     count += '+'
   }
    return count
}
console.log('Exercicio 10:', concatString(10))

// Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
// array:

const returnFirstAndLast = (array) => {
  return [array[0], array[array.length - 1] ]
}

console.log('Exercicio 11:', returnFirstAndLast([-100, "aplicativo", 16, 23,2,2,2,2,2,,2,2,2,2,2,2,'lucas']))

// Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, estamos
// apenas modificando-o, mas, em essência, o objeto continua o mesmo, ou seja a sua referência de memória é a
// mesma.
// Num projeto que você está trabalhando, você foi designado a refatorar diversas funções para que façam
// cópias de objetos e manipulem os dados dessas cópias, com o intuito de evitar efeitos indesejáveis em
// algumas situações devido a referências a objetos. Abaixo, está a descrição de uma dessas funções.
// Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o
// nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a
// propriedade especificada no segundo parâmetro.

// Exercicio 12 a fazer

// Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
// array recebido como parâmetro.

const filterArrayByTypeNumber = (array) => {
  return array.filter((ele) => typeof ele === 'number')
}
console.log('Exercicio 13:', filterArrayByTypeNumber(['a', 2, 'b', 10, true]))

// Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
// elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
// exemplos abaixo para um melhor entendimento:

const returnObj = (obj = {}) => {
  return Object.entries(obj)
}
console.log('Exercicio 14:', returnObj({codigo: 11111,preco: 12000}))

// Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
// pares e que também tenham índices pares.

const filterNumberPar = (array) => {
 const result = array.filter((ele, index) => ele % 2 === 0 && index % 2 === 0)
 return result
}

console.log('Exercicio 15:', filterNumberPar([40, 22, 25, 60, 70, 100, 155, 170, 200]))


// A fim de manter o calendário anual ajustado com o movimento de translação da Terra, criou-se os anos
// bissextos, que têm 366 dias em vez dos 365 presentes nos anos normais.
// Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser múltiplo de 100,
// exceto se for também múltiplo de 400.
// Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele
// é bissexto ou não.

const checkBissextoYear = (year) => {
   if(year % 4 === 0  ) {
     return true
   } else return false
}

console.log('Exercicio 16:', checkBissextoYear(2040))



// Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.


const sumArray = (array) => {
   return array.reduce((acc, elementAtual) => acc + elementAtual , 0)
  // let sum = 0;
  // for(let index = 0; index < array.length; index ++) {
  //   sum += array[index]
  // }
  // return sum
}

console.log('Exercicio 17:', sumArray([100,100,100,100]))

// Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
// possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você
// está desenvolvendo no momento é a de somar o total das despesas.
// Crie uma função que receba um array de produtos e retorne o total das despesas.

const returnSumOfProducts = (arrayOfObj) => {
  return arrayOfObj.reduce((acc, {preco}) => acc + preco, 0).toFixed(2);
}

console.log('Exercicio 18', returnSumOfProducts([
  {nome: "Jornal online", categoria: "Informação", preco: 89.99},
  {nome: "Cinema", categoria: "Entretenimento", preco: 150},
  {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
  {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
  ]))

// Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,
// pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo
// usuário.
// Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade
// indeterminada de números e retorne a média simples desses números.


  const media = (array) => {
    return array.reduce((sum, ele) => sum + ele, 0) / array.length;
  }

  console.log('Exercicio 19', media([30, 10]))

//   Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão
// deverá ser de duas casas decimais, arredondando se necessário.

  const returnTriangulo = (base, altura) => {
    const result = base * altura / 2
   return result.toFixed(2)
  }

console.log('Exercicio 20', returnTriangulo(9.25, 13.1))

// Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão
// deverá ser de duas casas decimais, arredondando se necessário.

const returnSmallValue = (array) => {
  // return Math.min.apply(Math, array)
//   let number = 0;
//   for(let index = 0; index < array.length; index++) {
//     if(array[index] < number) number = array[index]
//   }
// return number
 return array.reduce((acc, value) => {
   if(acc < value) return acc;
   else return value
 })
}

console.log('Exercicio 21', returnSmallValue([5, 10, 50, 3]))

// Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será
// gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número
// sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se
// não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.

const returnSortNumber = (number) => {
  const sortNumber = Math.ceil(Math.random() * 10)
  const one = 1;
  const ten = 10;
   if(number >= one && number <= ten ) {
     switch(number) {
       case sortNumber:
         return `Parabéns! O número sorteado foi o ${sortNumber}`
         default:
           return `Que pena! O número sorteado foi o ${sortNumber}`
     }
   }else return 'Insira um número de um a 10'
}
console.log('Exercicio 22', returnSortNumber(5))


// Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.

const countPhrases = (str) => {
return str.split(' ').length
}

console.log('Exercicio 23', countPhrases('Oi Tudo Bem'))

// Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
// vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
// maiúsculas de minúsculas.


const returnXLetra = (caractere, str) => {
  const array = str.split('')
 return array.filter((elem) => elem === caractere ).length
}

console.log('Exercicio 24', returnXLetra('e', 'A sorte favorece os audazes'))


// A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
// identificar palavras semelhantes.
// Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array
// de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.

const filterArray = (str, array) => {
 return array.filter((elem) => elem.includes(str))
}

console.log('Exercicio 25', filterArray("ja", ["javascript", "java", "c++"]))


// Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
// consoantes, ou seja, sem as vogais.


const removeVogais = (str) => {
return str
.split('')
.filter((ele) => ele !== 'a' && ele !== 'e' && ele !== 'i' && ele !== 'o' && ele !== 'u')
.join('')
}
console.log('Exercicio 26', removeVogais('Fundamentos'))