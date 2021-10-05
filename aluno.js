let aluno = {

    nome: 'Samir',
    faltas:1 , 
    novaFalta: function () {
       return faltas++},
    notas:[7,6,8],
    media: function () {
        let notasTotal  = notas.reduce((acumulador,numero) => {return acumulador+numero});
        return media = notasTotal / notas.lenght;
    }
};

new Aluno (valorNome,valorFaltas,valorNotas) {
    this.nome = valorNome;
    this.faltas = valorFaltas;
    this.notas = valorNotas;
};



module.exports = Aluno;