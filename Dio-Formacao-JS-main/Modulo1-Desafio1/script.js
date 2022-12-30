// Desafio 1
// Faça um programa que receba:
// Caso a média seja < 5 imprima "REP";
// Caso a média seja >= 5 e < 7 imprima "REC";
// Caso a média seja >7 imprima "APR".

let media = gets();

if (media < 5) {
  print("REP");
} else if (media < 7) {
  print("REC");
} else if (media > 7) {
  print("APR");
}
