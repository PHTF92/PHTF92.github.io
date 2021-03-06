//Parte 2 - ex1

const fatorial = a => {
    let fatorial = 1
    for (let i = a; i >= 1; i--) {
        fatorial *= i
    }
    return fatorial
}

console.log(`O fatorial é ${fatorial(1)}`);

const fatorialRecursivo = b => {
    return resultado = b > 1 ? b * fatorialRecursivo(b - 1) : 1
}
console.log(fatorialRecursivo(5));

//Parte 2 - ex2

const maiorPalavra = c => {
    const arranjoPalavras = c.split(' ');
    let maiorPalavra = null;
    let tamanho = 0
    for (let i = 0; i < arranjoPalavras.length; i++) {
        if (arranjoPalavras[i].length > tamanho) {
            tamanho = arranjoPalavras[i].length
            maiorPalavra = arranjoPalavras[i]
        }
    }
    return maiorPalavra;
}

console.log(maiorPalavra("Antônio foi no banheiro e não sabemos o que acontxxxeceu"));

//Parte 2 ex3
const botao = document.getElementsByTagName('button')[0];
let i = 0;
botao.addEventListener('click', () => {
    i +=1;
    document.getElementsByTagName('p')[0].innerText = i;
})



//Parte 2 ex 4
const skills = [" JS", " CSS", " HTML", " Soft Skill", " Hard Skill"];
const skillsOrdenados = skills.sort();
const inicial = `Tryber x aqui!
Tudo bem?`
const saudacao = (a, b) => {
    const substituicao = b.replace('x', a);
    return substituicao
}

const func2 = (a, b) => {
    resultado = `${a}
    Minhas 5 habilidades são: ${b}
    Go Trybe`
    return resultado
}

console.log(saudacao("Pedro", inicial));
console.log(skillsOrdenados)
console.log(func2(saudacao("Pedro", inicial), skillsOrdenados))