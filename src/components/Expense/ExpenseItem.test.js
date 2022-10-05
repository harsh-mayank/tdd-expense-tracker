import {render, screen} from '@testing-library/react';
import ExpenseItem from './ExpenseItem';

test('renders expense title', ()=> {
    render(<ExpenseItem/>);
    const title = screen.getByText('New Tv');
    expect(title).toBeInTheDocument();
})

test('renders expense date', ()=> {
    render(<ExpenseItem/>);
    const date = screen.getByText('06 Oct, 2022');
    expect(date).toBeInTheDocument()
})