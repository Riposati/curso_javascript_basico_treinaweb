/* Desafio triangulo */

// let str = ''
// for(i=1;i<=10;i++){
//     var j = i
//     while(j > 0){
//         str += '*'
//         j--
//     }
//     console.log(str)
//     str = ''
// }

// str = ''
// for(i=10;i>=1;i--){
//     var j = i
//     while(j > 0){
//         str += '*'
//         j--
//     }
//     console.log(str)
//     str = ''
// }

/* Desafio número primo */

// function isPrime(number){
    
//     let cont = 0
//     let aux = number

//     while(number >= 1){

//         if((aux % number === 0)){
//             console.log(number)
//             cont++
//         }
//         number--
//     }
//     return cont
// }

// let n = 9974

// if(n >=1 && isPrime(n) <= 2){
//     console.log('primo')
// }else
//     console.log('nao e primo')


/* desafio fatorial */

// function fatorial(n){
//     if(n===0)
//         return 1

//     return n * fatorial(n-1)
// }

// console.log(fatorial(6))

/* Desafio arrow function */

// let v = (n) => {

//     if(n % 2 === 0)
//         return n * 2
//     else 
//         return n * 3
// }

// let n = 3
// console.log(v(n))

/* Desafio menor da lista */

// function smaller(arr){

//     let smaller = arr[0]

//     for(let a of arr){

//         if(a < smaller){
//             smaller = a
//         }
//     }

//     return smaller
// }

// let arr = [5,4,3,2,1,0,-5,-44,-8]

// console.log(smaller(arr))

/* Desafio elevador */

// elevator = {

//     floorBuilding : 0,

//     down: function(){
//         if(this.floorBuilding > 0)
//             this.floorBuilding--
//     },
//     up: function(){
//         if(this.floorBuilding < 3)
//             this.floorBuilding++
//     },
//     show: function(){
//         if(this.floorBuilding === 0)
//             console.log('ground floor (térreo) ')
//         else
//             console.log(`Andar => ${this.floorBuilding}`)
//     }
// }

// var myElevator = elevator


/* Desafio segundo maior no array  */

// let v = [10, 9, 9, 8, 8, 11, 8, 0, 9, 1]

// let o = v.sort(function(a, b){return a - b})

// let resp = 0

// for(let i=o.length-1;i>0;i--){

//     if(o[i]!=o[i-1]){
//         resp = o[i-1]
//         break
//     }
// }
// console.log(resp)


/* Desafio objeto */

// function meuObjeto(a,b)
// {
//     class Geometry{
//             constructor(a,b){
//             this.largura = a,
//             this.comprimento = b,
//             this.perimetro = 2 * (this.largura + this.comprimento),
//             this.area = this.largura * this.comprimento
//         }
//     }

//     return new Geometry(a,b)
// }

// function main(valores)
// {   
//     let obj = meuObjeto(valores[0], valores[1]);
//     console.log(obj.largura);
//     console.log(obj.comprimento);
//     console.log(obj.perimetro);
//     console.log(obj.area);
// }

// let arr = [5,5]
// main(arr)

/* desafio mensagens aleatórias  */
// function message(){
//     let arr = ['ola mundo js', 'ola tudo bem?', 'suave na nave?' , 'como estas?', 'JS é muito legal', 'treina web é muito boa', 'Cheetos']
//     let pos = Math.trunc(Math.random(...arr) * 7)
//     // console.log("array index => " + pos + "message => " + arr[pos])
//     console.log(arr[pos])
// }
// message()

/* desafio potenciação */

// function resp (a,b,n){

//     let somatorio = 0
//     let anw = ''

//     for(let i=0;i<n;i++){

//         if(i==0)
//             somatorio += (a + (2 ** (i)) * b)
//         else 
//             somatorio += 2 ** (i) * b

//         anw += somatorio + " "
//     }

//     console.log(anw)
// }

// resp(0,2,3)

/* Desafio regex */



// function returnDigits(number){

//     let regExp = /\d+/g
//     return number.match(regExp)
// }

// let arr = returnDigits("1.5")
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// function getDiaSemana(dataString)
// {
//     let d = dataString.split('/')
//     let d2 = new Date(d[2] + '-' + d[1] + '-' + d[0])
//     let day = d2.getDay() 
//     let resp

//     if(day==0)
//         resp = 'Domingo'
//     if(day==1)
//         resp = 'Segunda-Feira'
//     if(day==2)
//         resp = 'Terça-Feira'
//     if(day==3)
//         resp = 'Quarta-Feira'
//     if(day==4)
//         resp = 'Quinta-Feira'
//     if(day==5)
//         resp = 'Sexta-Feira'
//     if(day==6)
//         resp = 'Sábado'
//     return resp
// }

// console.log(getDiaSemana('01/07/2020'))
// console.log(getDiaSemana('10/11/2009'))
// console.log(getDiaSemana('11/10/2010'))

// function getData(dataString)
// {
//     let d = dataString.split('-')
//     let d2 = d[1] + '/' + d[2] + '/' + d[0]
//     return d2
// }

// console.log(getData('2009-10-11'))
// console.log(getData('2010-11-10'))

/* desafio vetores */

// let m = ['2','4', '5', '9','0', '13']
// let n = ['2', '4', '11', '12', '5', '400']

// diferenca(m,n)

// function diferenca(m, n)
// {
//     m = m.map(x=> parseInt(x))
//     n = n.map(t => parseInt(t))

//     let v = Array()

//     v = m.filter(e => !n.includes(e)).concat(n.filter(e => !m.includes(e)));
    
//     console.log(v.sort((c,d) => { 
//         if(c > d) 
//             return 1
//         else if(c < d) 
//             return -1
//         else if(c===d)
//             return 0
//     }).join('\n'))
// }  

/* Desafio objetos */ 

// function quantidade(objetos)
// {
//     console.log(objetos)
    
//     let cont=0
 
//     var arr = Object.values(objetos) // pega os valores do objeto e joga em um vetor
//     // console.log(arr)
//     for(var i=0;i<arr.length;i++){
//         var o = arr[i]
//         // console.log(o)
//         if(o.x===o.y)
//             cont++
//     }
//     return cont

//     /* OU ASSIM */

//     // let count = 0;
//     // for(var obj of objetos)
//     // {
//     //     if(obj.x == obj.y)
//     //         count++;
//     // }
//     // return count;
// }

// let objetos = [
//     { x: 1, y: 1 },
//     { x: 2, y: 3 },
//     { x: 3, y: 3 },
//     { x: 3, y: 4 },
//     { x: 5, y: 5 }
// ]

// console.log(quantidade(objetos))

/* desafio 2 objetos */
// function ordenacao(jogadores)
// {
//     // console.log(jogadores)
//     jogadores.sort(function (a, b){ 
//         if(a.placar < b.placar){
//             return 1
//         }else if(a.placar > b.placar){
//             return -1
//         }else{
//             if(a.nome > b.nome){
//                 return 1
//             }else if(a.nome < b.nome){
//                 return -1
//             }
//         }
//     })

//     for(let a of jogadores)
//         console.log(a.nome + " " + a.placar)
// }

// let jogadores = [
//     { nome: "amy", placar: 100 },
//     { nome: "david", placar: 100 },
//     { nome: "heraldo", placar: 50 },
//     { nome: "aakansha", placar: 75 },
//     { nome: "aleksa", placar: 150 },
// ]

// ordenacao(jogadores)

/* desafio conversão código */

// function operacao(segInt, segFloat, segString)
// {
//     let priInt = 4;
//     let priFloat = 3.17;
//     let priString = "JavaScript - ";
    
//     console.log(priInt + parseInt(segInt))
//     console.log(priFloat + parseFloat(segFloat))
//     console.log(priString + segString)
// }

// operacao("7",5.32,"Básico")


/* desafio lista */

// function listItens(arr){

//     ulTag = document.querySelector('ul')

//     for(let a of arr){
//         myLi = document.createElement('li')
//         myLi.innerText = 'Item ' + a
//         ulTag.appendChild(myLi)
//     }
//     //console.log(ulTag)
// }

// function getEventTarget(e) { // outra forma de acessar a li que vc clicou
//     e = e || window.event
//     return e.target || e.srcElement
// }

// let arr = [1,2,3,4,5,6,7,8,9,'chocolate','extrato tomate', 'macarrão']
// let myLi
// let myTimeOut
// listItens(arr) // seta a lista fake auxiliar

// let input = document.querySelector('input')
// let ul = document.querySelector('ul')

// ul.onclick = function(event) {
//     var target = getEventTarget(event)
//     target.remove()
// }

// input.addEventListener('keyup',function(e){
    
//     clearTimeout(myTimeOut)

//     myTimeOut = setTimeout(function(){

//         let verification = input.value.trim()

//         if(verification===''){
//             console.log('item vazio não pode!')
//         }else{

//             if(e.keyCode == 13){ // envia ao apertar enter 
//                 ulTag = document.querySelector('ul')
//                 myLi = document.createElement('li')
//                 myLi.innerText = 'Item ' + input.value
//                 ulTag.appendChild(myLi)
//                 input.value = ''
//             }
//         }
//     },1000)
// })

