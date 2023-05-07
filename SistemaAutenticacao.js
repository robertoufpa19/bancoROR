export class SistemaAutenticacao{

    
     //usuario = autenticavel
    static login(usuario, senha){
        if(SistemaAutenticacao.ehAutenticavel(usuario)){
            return usuario.autenticar(senha);
        }
        // se nao for autenticavel retornar falso
        return false
    }

    static ehAutenticavel(usuario){
         return "autenticar" in usuario && usuario.autenticar instanceof Function;
    }


    
}