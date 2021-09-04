const filme01 = {
    nome: "Vingadores",
    duracao: 160,
    ano: 2019,
    atores: ["José", "Maria", "Augusto"], //lista
    dados() {
        return `O filme ${this.nome} com a duração de ${this.duracao}min, foi lançado em ${this.ano} os atores principais são: ${this.atores}`;
    }, //função anonima
};

const filme02 = {
    nome: "João e Maria",
    duracao: 160,
    ano: 2010,
    atores: ["José", "Maria", "Augusto"],
    dados() {
        return `O filme ${this.nome} com a duração de ${this.duracao}min, foi lançado em ${this.ano} os atores principais são: ${this.atores}`;
    },
};

const filme03 = {
    nome: "Superman",
    duracao: 160,
    ano: 2015,
    atores: ["José", "Maria", "Augusto"],
    dados() {
        return `O filme ${this.nome} com a duração de ${this.duracao}min, foi lançado em ${this.ano} os atores principais são: ${this.atores}`;
    },
};

const filme04 = {
    nome: "Batman",
    duracao: 160,
    ano: 2017,
    atores: ["José", "Maria", "Augusto"],
    dados() {
        return `O filme ${this.nome} com a duração de ${this.duracao}min, foi lançado em ${this.ano} os atores principais são: ${this.atores}`;
    },
};

const filme05 = {
    nome: "Mulher Maravilha",
    duracao: 160,
    ano: 2018,
    atores: ["José", "Maria", "Augusto"],
    dados() {
        return `O filme ${this.nome} com a duração de ${this.duracao}min, foi lançado em ${this.ano} os atores principais são: ${this.atores}`;
    },
};

console.log(filme01.dados());
console.log(filme02.dados());
console.log(filme03.dados());
console.log(filme04.dados());
console.log(filme05.dados());