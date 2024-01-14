//Função para calcular o saldo e determinar o nível
const calcularNivel = (vitorias, derrotas) => {
    // Calculando o saldo de Rankeadas
    let saldoVitorias = vitorias - derrotas;

    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    //Mensagem que será exibida
    return `O Herói tem um saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

const resultado = calcularNivel(60,20);
console.log(resultado);