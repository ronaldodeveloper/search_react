import React, {useState, useRef} from 'react';
import './search.css'


const txt= `
O Poema sujo é considerado a obra-prima do poeta Ferreira Gullar e foi concebido no ano de 1976, quando o criador estava no exílio, em Buenos Aires.
A extensa criação (são mais de dois mil versos) narra um pouco de tudo: desde a origem do poeta, até as suas crenças políticas, o seu percurso pessoal e profissional e o seu sonho de ver o país encontrar a liberdade.
Marcadamente autobiográfico, o Poema sujo é também um retrato político e social do Brasil dos anos setenta marcado pela ditadura militar.
Que importa um nome a esta hora do anoitecer em São Luís
do Maranhão à mesa do jantar sob uma luz de febre entre irmãos
e pais dentro de um enigma?
mas que importa um nome
debaixo deste teto de telhas encardidas vigas à mostra entre
cadeiras e mesa entre uma cristaleira e um armário diante de
garfos e facas e pratos de louças que se quebraram já
um prato de louça ordinária não dura tanto
e as facas se perdem e os garfos
se perdem pela vida caem pelas falhas do assoalho e vão conviver com ratos
e baratas ou enferrujam no quintal esquecidos entre os pés de erva-cidreira
`


function Button(){
const getValueInput = useRef(null)
const [exibirResultado, setExibirResultado]= useState('')

 function busca(){
    const getValue= getValueInput.current.value  // obtem o valor do input
    const regex= new RegExp(getValue, 'gi')      // insere o valor do input como padrão de busca 
    const busca= txt.match(regex)       // armazena o valor obtido    
    
    if (busca==null || getValue== " "){
    console.log('Aproximadamente')
    alert('Busca não encontrada!')
    }else{
        console.log(busca)
        if(busca){ 
            setExibirResultado(
                busca.map((item)=>{
                return (
                    <>
                        <cite>{item}</cite><br />                                   
                    </>
                ) 
            })) 
        }
    }
 }


 const icon= 
    <svg className="svg-icon">
        <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z">
        </path>
    </svg>

 return(
    <>
    <section>
    <input      
        ref={getValueInput}  
        type="seatch" 
        placeholder='Digite sua busca'>
    </input>
    <button type="button" onClick={busca}>{icon}</button>
    </section>
    <p>{txt}</p>
    <p><strong>Aproximadamente {exibirResultado.length}</strong></p>
    <p className="txt">{exibirResultado}</p>
    </>
 )
}
export default Button;