import React, {useState} from "react"; 


function CalculadoradeSoma(){
const[numero1,setNumero1] = useState('');
const[numero2,setNumero2] = useState('');
const[soma,setsoma] = useState(null);
const[sub,setsub] = useState(null);


const calcularSoma = () => {
    //converta os valores para numeros e calcular soma
    const resultado = Number(numero1) + Number(numero2);
    setsoma(resultado);

}
const calcularSub = () => {
    //converta os valores para numeros e calcular soma
    const resultado = Number(numero1) - Number(numero2);
    setsub(resultado);

}

return (
<div>


<input
type="number"
value={numero1}
onChange={(e) => setNumero1(e.target.value)} 
placeholder="Digite o primeiro número"
/>

<input
type="number"
value={numero2}
onChange={(e) => setNumero2(e.target.value)} 
placeholder="Digite o segundo número"
/>

<button onClick={calcularSoma}>soma</button>
{soma !== null && <p>Resultado :  {soma}</p>}

<button onClick={calcularSub}>subtração</button>
{sub !== null && <p>Resultado :  {sub}</p>}



</div>

)

}

export default CalculadoradeSoma