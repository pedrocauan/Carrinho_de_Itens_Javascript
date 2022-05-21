//Append child coloca um filho em um elemento HTML
//Para que um filho seja colocado ele precisa  ser criado com o createElement
const main = document.querySelector("#principal");
const button = document.querySelector("button"); //Botao que vai adicionar containers

//Criando os  arrays que vão guarar os N elementos
const containers = []; //Quadrado vermelho que guarda os elementos
const titulos = []; //h2 que tem o titulo
const imgs = []; //Imagem que fica no centro
const descricoes = []; //descrição
let classContainer = "vermelho"; //classe CSS de container que vai ser adicionado

const imagemAleatoria = () => {
    //Site com as imagens aleatorias
    const imagens = [
    `https://source.unsplash.com/random/200x200?r=1`, 
    `https://source.unsplash.com/random/200x200?r=2`, 
    `https://source.unsplash.com/random/200x200?r=3`, 
    `https://source.unsplash.com/random/200x200?r=4`,
    `https://source.unsplash.com/random/200x200?r=5`,
    `https://source.unsplash.com/random/200x200?r=6`,
    `https://source.unsplash.com/random/200x200?r=7`,
    `https://source.unsplash.com/random/200x200?r=8`,
    `https://source.unsplash.com/random/200x200?r=9`,
    ]; 
    let sorteada =  Math.floor(Math.random(imagens.length) * imagens.length); //Sorteia uma das imagens da lista
    let randimg = imagens[sorteada];
    return randimg;
}

//Criando elementos nos arrays 
const criaElementos = () =>{
    containers.push(document.createElement("div"));
    titulos.push(document.createElement("h2"));
    imgs.push(document.createElement("img"));
    descricoes.push(document.createElement("p"));
}
//Atribuindo valores a eles
const atribuiValores = (containerStyle) => {
    for(let i = 0; i < containers.length; i++)
    {  
        containers[i].classList.add(classContainer); //COloca o estilo do container
        titulos[i].innerHTML = `Titulo${i+1}`;
        imgs[i].src = imagemAleatoria(); //Atribui uma imagem aleatoria
        descricoes[i].innerHTML = `Descricao`;
    }   
}

//Cria os quadrados com titulo, imagem e descrição
const criaContainers = () => {
    for(let i = 0; i < containers.length; i++)
    {
        containers[i].appendChild(titulos[i]);
        containers[i].appendChild(imgs[i]);
        containers[i].appendChild(descricoes[i]);
    }

}
//Coloca no quadrado o  titulo, imagem e descricao
const addContainer = (grid) => {
    criaElementos();
    atribuiValores();
    criaContainers();
    //adicionando no main
    for(let i = 0; i < containers.length; i++)
    {
        grid.appendChild(containers[i]);
    }
}

//Coloca os quadrados quando clica no botao
button.addEventListener("click", () => {
    addContainer(main);
})
