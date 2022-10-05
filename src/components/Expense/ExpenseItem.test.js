import {render, screen} from '@testing-library/react';
import ExpenseItem from './ExpenseItem';

test('renders expense title', ()=> {
    render(<ExpenseItem/>);
    const title = screen.getByText('New Tv');
    expect(title).toBeInTheDocument();
})

