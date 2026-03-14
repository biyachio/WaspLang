// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders WaspLangFull title', () => {
    render(<App />);
    const titleElement = screen.getByText(/WaspLangFull/i);
    expect(titleElement).toBeInTheDocument();
});
