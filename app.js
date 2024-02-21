let summa = function(son1 =0, son2 = 0){ 
    return son1 + son2
}
console.log(summa(50, ))




function minuts(a = 0){
 console.log(a*60)
 return
}
minuts(3)



function nextInteger(int = 0){

    console.log(int+1)
return
}
nextInteger(50)
 



function uchYuzui(asos = 0, balad = 0){
return (asos * balad)/2
}
console.log(uchYuzui(5 , 40))
  


let yosh = function(yil){
return   yil*365
}
console.log(yosh(40))




function kub(kub){
    return kub**3
}
console.log(kub(4))




function massiv([a, b, c]){
    return a 
}
console.log(massiv([60, 70 ,40]))





let kopayturov = function(son1 =0, son2 = 0){ 
    console.log(son1 * son2)
    return 
}
kopayturov(50,12)





function hours(a = 0){
    console.log(a*3600)
    return
 }
   hours(2)

   let result
function uzunlik(a){
    
    return String(a).length
}
console.log(uzunlik("Hamidullo"))


function number(a){
    
    return +a
}
console.log(number("1123456"))


let daraja = function(son1 =0, son2 = 0){ 
    console.log(son1 ** son2)
    return 
}
daraja(8,5)




function soatMinut(soat , minut){
  let s = soat *3600 ;
  m = minut *60 ;
  console.log(s + m) 
  return
}
soatMinut(1 , 1)



let futtbolOchko = function(yutish , durang , yutkaz){
let y = yutish *3;
 d = durang*1;
m = yutish*0;
console.log(y + d + m)
return
}
futtbolOchko(20, 10 , 10)



function bormi([a] , b){
if([a] == b){
    console.log('true')
}else{
    console.log('folse')
}
return
}
bormi([5 , 4, 3 , 6] , )




function taksi(narhi){
    switch(narhi){
  case 4000:
  console.log(1 ,"km") 
  break
  case narhi :
    console.log(narhi / 1000 , "km")
    break
    }
    return
}
taksi(5000)


function coffe(mikdori){
    let  counter = 0
while(mikdori>3){

    mikdori-=3
    counter++
}
console.log(mikdori + counter)
return
}
coffe(50)


// function suv(a){
    
//     let result = a / 3 
//     console.log(Math.trunc(result) + suv)
//     return
// }

// suv(3)

function cofe(a){
 let c = a / 3 ;
 return Math.trunc(c) + a
}
console.log(cofe(60))