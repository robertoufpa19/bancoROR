
  // classe abstrata(funciona somente para ser herdada e nao instanciada)
export class Conta{

    constructor(saldoInicial, cliente, agencia){

      if(this.constructor == Conta){
       // console.log(` Atencao! \n Voce nao deveria instancia um objeto do tipo Conta!`);
       throw new Error(` Atencao! \n Voce nao deveria instancia um objeto do tipo Conta diretamente!`);
      }

        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = saldoInicial; 

       
     }

       
     set cliente(novoValor){
      if(novoValor instanceof Cliente){
            this._cliente = novoValor;
      }
    } 

    get cliente(){
      return  this._cliente;
    }


    get saldo(){
      return this._saldo;
    }

     // metodo abstrato
    sacar(valor){
      throw new Error(` Atencao! \n O metodo Sacar da classe Conta e abstrato`);

    }

    _sacarPrivado(valor , taxa){
      const valorSacado = taxa * valor;
      if(this._saldo >= valorSacado){
          this._saldo -= valor; // subtrair saldo
            return valorSacado;
      }else{
          console.log(`Saldo insuficiente para o saque!`);
      }
    }

    depositar(valor){
            if(valor > 0 ){
              this._saldo += valor; // somar saldo
              return valor;
            }else{
              console.log(`Erro ao depositar!`);
            }
    }

    transferir(valor , conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valor);
    }

    
 }