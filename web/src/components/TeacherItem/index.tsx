import React from 'react';
import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
  return (
    <article className='teacher-item'>
      <header>
        <img
          src='https://avatars2.githubusercontent.com/u/52797828?s=460&v=4'
          alt='profile'
        />
        <div>
          <strong>Paulo Silva</strong>
          <span>Matemática</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, enim
        neque dignissimos laudantium asperiores qui mollitia nulla, ipsum,
        debitis eaque recusandae a eligendi consequuntur expedita officiis
      </p>
      <footer>
        <p>
          preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type='button'>
          <img src={whatsappIcon} alt='whatsapp' />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
