const catalogoFilmes = [
    // Filme 1
    {
        nome: "Vingadores",
        duracao: 160,
        ano: 2019,
        atores: ["José", "Maria", "Augusto"],
        dados: () => `O filme ${this.nome} com a duração de ${this.duracao}min, foi lançado em ${this.ano} os atores principais são: ${this.atores}`,
    },

    // Filme 2
    {
        nome: "João e Maria",
        duracao: 160,
        ano: 2010,
        atores: ["José", "Maria", "Augusto"],
        dados: () => `O filme ${this.nome} com a duração de ${this.duracao}min, foi lançado em ${this.ano} os atores principais são: ${this.atores}`,
    },

    // Filme 3
    {
        nome: "Superman",
        duracao: 160,
        ano: 2015,
        atores: ["José", "Maria", "Augusto"],
        dados: () => `O filme ${this.nome} com a duração de ${this.duracao}min, foi lançado em ${this.ano} os atores principais são: ${this.atores}`,
    },

    // Filme 4
    {
        nome: "Batman",
        duracao: 160,
        ano: 2017,
        atores: ["José", "Maria", "Augusto"],
        dados: () => `O filme ${this.nome} com a duração de ${this.duracao}min, foi lançado em ${this.ano} os atores principais são: ${this.atores}`,
    },

    // Filme 5
    {
        nome: "Mulher Maravilha",
        duracao: 160,
        ano: 2018,
        atores: ["José", "Maria", "Augusto"],
        dados: () => `O filme ${this.nome} com a duração de ${this.duracao}min, foi lançado em ${this.ano} os atores principais são: ${this.atores}`,
    },
];

for (const filme of catalogoFilmes) {
    console.log(filme);
}