import {Cliente, Empresa, Telefone, Endereco} from './RI4.js'

const enderecoEmpresa = new Endereco("SP", "São José dos Campos", "Rua dos Aguia do vale", 520)
const Empresa1 = new Empresa("Teste Company LTDA", "Teste", "62.173.620/0001-80", "Rua da empresa teste" )
const telefone1 = new Telefone(12, 9123124)
const telefone2 = new Telefone(12, 8731243)
Empresa1.adicionarTelefone(telefone1)
Empresa1.adicionarTelefone(telefone2)


const endereco1 = new Endereco("NM", "Albuquerque", "Rua das Casas Com Detetização", 123);
const Cliente1 = new Cliente("Walter White", "392.492.49-40", endereco1);
const telefone1C1 = new Telefone(87, 12345244);
const telefone2C1 = new Telefone(87, 3534543);
Cliente1.adicionarTelefone(telefone1C1);
Cliente1.adicionarTelefone(telefone2C1);


const endereco2 = new Endereco("NM", "Albuquerque", "Rua da Liberdade", 456);
const Cliente2 = new Cliente("Jesse Pinkman", "123.456.78-90", endereco2);
const telefone1C2 = new Telefone(87, 99887766);
const telefone2C2 = new Telefone(87, 11223344);
Cliente2.adicionarTelefone(telefone1C2);
Cliente2.adicionarTelefone(telefone2C2);


const endereco3 = new Endereco("NM", "Albuquerque", "Av. dos Advogados", 789);
const Cliente3 = new Cliente("Saul Goodman", "234.567.89-01", endereco3);
const telefone1C3 = new Telefone(87, 77665544);
const telefone2C3 = new Telefone(87, 44332211);
Cliente3.adicionarTelefone(telefone1C3);
Cliente3.adicionarTelefone(telefone2C3);


const endereco4 = new Endereco("NM", "Albuquerque", "Rua dos cara foda", 321);
const Cliente4 = new Cliente("Mike Ehrmantraut", "345.678.90-12", endereco4);
const telefone1C4 = new Telefone(87, 66778899);
const telefone2C4 = new Telefone(87, 99889977);
Cliente4.adicionarTelefone(telefone1C4);
Cliente4.adicionarTelefone(telefone2C4);


const endereco5 = new Endereco("NM", "Albuquerque", "Rua dos Minerais", 654);
const Cliente5 = new Cliente("Hank Schrader", "456.789.01-23", endereco5);
const telefone1C5 = new Telefone(87, 55667788);
const telefone2C5 = new Telefone(87, 22334455);
Cliente5.adicionarTelefone(telefone1C5);
Cliente5.adicionarTelefone(telefone2C5);

console.log(Cliente1)
const Clientes = [Cliente1, Cliente2, Cliente3, Cliente4, Cliente5]

Clientes.forEach(cliente => {
    Empresa1.adicionarCliente(cliente)
});


console.log(Empresa1.detalhe())

