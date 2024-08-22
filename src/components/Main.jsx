import produtosServicos from '../datasets/ServicosCards'
import animaisTabela from '../datasets/Animais'
import './Header.css'
import Carrossel from './Carrossel'
import itens from '../datasets/Carrossel';
import ServicosCards from './ServicosCards'
import { useState } from 'react';
import AnimaisTabela from './AnimaisTabela';

const Main = () =>{
    let [servicos, setServicos] = useState([...produtosServicos]);
    let [animais, setAnimais] = useState([...animaisTabela]);

    const handleAdotar = (id) => {
        setAnimais((prevAnimais) =>
          prevAnimais.map((animal) =>
            animal.id === id
              ? { ...animal, disponiveis: animal.disponiveis - 1 }
              : animal
          )
        );
      };

    return (
        <main>
            <Carrossel itens={itens}></Carrossel>
            <ServicosCards servicos={servicos}></ServicosCards>
            <AnimaisTabela animais={animais} onAdotar={handleAdotar}></AnimaisTabela>
        </main>
    );

}
 
export default Main;