import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen, render } from '@testing-library/react';
import data from './data.js';

import SearchBar from './components/search-bar/SearchBar';
import Cards from './components/cards/Cards';

describe('SearchBar', () => {
  it('El componente debería contener un "form"', () => {
    const { container } = render(<SearchBar />)
    container.querySelector('form')[0]
  });

  it('Dentro del form debe contener un botón con el nombre "Buscar"', () => {
    const { container } = render(<SearchBar />)
    const form = container.querySelectorAll('form')[0]
    const element = form.querySelectorAll('button')[0]
    expect(element.innerHTML).toBe('Buscar')
  });

  it('El form debe tener un input con placeholder "Buscar ubicación" y tipo "search"', () => {
    const { container } = render(<SearchBar />)
    const form = container.querySelectorAll('form')[0]
    const element = form.querySelectorAll('input')[0]
    expect(element.type).toBe('search');
    expect(element.placeholder).toBe('Buscar ubicación');
  });
});

describe('Cards', () => {
  
  it('El componente Cards debe renderizar una ciudad', () => {
    const city = data[0]
    render(<Cards cities={[city]}/>)
  })

  it('El componente debería poder renderizar varias ciudades recibidas por props' , () => {
    const cities = data;
    render(<Cards cities={cities} />)
  })

})