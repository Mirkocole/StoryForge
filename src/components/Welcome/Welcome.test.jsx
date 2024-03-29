import { render, screen } from '@testing-library/react';
import Welcome from './Welcome';

test('Controllo che il componente Welcome venga montato correttamente',()=>{

    render(<Welcome />);
    const component = screen.getByTestId('welcome');
    expect(component).toBeInTheDocument();
});