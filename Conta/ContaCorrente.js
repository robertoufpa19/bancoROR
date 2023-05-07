
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    //  "#" ou "_" sao simbolos que significa atributos privados
    // publicos
       static numeroDeContas = 0;
       
        constructor(cliente, agencia){
          super(0,cliente,agencia ); // chama o construtor da classe CONTA
               ContaCorrente.numeroDeContas += 1; // conta a quantidades de contas corrente
            }
     
            sacar(valor){
               let  taxa = 1.1 ; // taxa de 10% ao sacar
                   
               return  this._sacarPrivado(valor, taxa); // metodo privado da classe Conta
             }

  }