class Cliente{
    #cpf
    constructor(nome, cpf, endereco){
        this.nome = nome
        this.#cpf = cpf
        this.endereco = endereco
        this.getCpf = () => {
            return this.#cpf
        }
        this.setUpperNome = () => {
            return this.nome.toUpperCase()
        }
        
        this.setLowerNome = () =>{
            return this.nome.toLowerCase()
        }

        this.setEnderecoUpper = () => {
            return this.endereco.toUpperCase();
        }

        this.setEnderecoLower = () => {
            return this.endereco.toLowerCase();
        }
        this.telefones = new Set()

        this.adicionarTelefone = (telefone) => {
            this.telefones.add(telefone)
        }

    }
}


class Telefone{
    constructor(ddd, numero){
        this.ddd = ddd
        this.numero = numero
    }
}


class Endereco{
    constructor(estado, cidade, rua, numero){
            this.estado = estado
            this.cidade = cidade
            this.rua = rua
            this.numero = numero
    }
}

class Empresa{
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco){
        this.endereco
        this.razaoSocial = razaoSocial
        this.nomeFantasia = nomeFantasia
        this.#cnpj = cnpj
        this.endereco = endereco
        this.clientes = new Set()
        this.telefones = new Set()
        this.getCnpj = () => {
            return this.#cnpj
        }




     this.adicionarCliente= (cliente) => {
        this.clientes.add(cliente);
    }

    this.adicionarTelefone = (telefone) => {
        this.telefones.add(telefone)
    }

     this.detalhe = () => {
        let output = `Razão Social: ${this.razaoSocial}\n`;
        output += `Nome fantasia: ${this.nomeFantasia}\n`;
        output += `-------------------\n`;

        for (const cliente of this.clientes) {
            output += `Nome: ${cliente.nome}\n`;
            output += `Estado: ${cliente.endereco.estado} cidade: ${cliente.endereco.cidade} rua: ${cliente.endereco.rua} numero: ${cliente.endereco.numero}\n`;

            for (const tel of cliente.telefones) {
                output += `ddd: ${tel.ddd} numero: ${tel.numero}\n`;
            }

            output += `\n`;
        }

        return output;
    }



    }
}

export { Cliente, Empresa, Endereco, Telefone };