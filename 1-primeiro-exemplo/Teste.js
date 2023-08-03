/*let nome = 'awari';
console.log(nome);
nome = 10;
console.log(nome);

let xc, yc;

xc = 1*20;
yc = xc**2;
console.log(yc, xc);*/

const btnBuscaCep = document.getElementById('btnBuscaCep');

btnBuscaCep.addEventListener('click', () => {
    const cep = document.getElementById('cep').value;
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then((res) => {
        return res.json();
    }).then((response) => {
      if (response) {       
        const endereco = document.getElementById('endereco'); 
        endereco.innerHTML =`
        <b>Rua: </b> ${response.logradouro}
        <b>Bairro: </b> ${response.bairro}
        <b>Municipio: </b> ${response.localidade}
        <b>UF: </b> ${response.uf}
        ` 
      } 
    }).catch((error) => {
        console.error(error);
    })
});
