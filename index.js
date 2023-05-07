  import {Cliente} from "./Cliente.js";
  import {Gerente} from "./Funcionario/Gerente.js";
  import {Diretor} from "./Funcionario/Diretor.js";
  import { SistemaAutenticacao } from "./SistemaAutenticacao.js";


const diretor = new Diretor(`Roberto`, 1111111111, 15000);
diretor.cadastrarSenha(`111`);

const gerente = new Gerente(`Fabio`, 2222222222, 6000);
gerente.cadastrarSenha(`222`);
 
const diretorEstaLogado = SistemaAutenticacao.login(diretor, `111`);
console.log(`Diretor Logado`,diretorEstaLogado);


const gerenteEstaLogado = SistemaAutenticacao.login(gerente, `222`); 
console.log(`Gerente Logado`,gerenteEstaLogado);


const cliente= new Cliente(`Maria`, 3333333333, `333`);
const clienteLogado = SistemaAutenticacao.login(cliente, `333`);
console.log(`Cliente Logado`, clienteLogado);






  



