import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '../../Contact';

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
        render(<Contact />);
    });

    it('renders', () => {
        const { asFragment } = render(<Contact />);
        expect(asFragment()).toMatchSnapshot();
    });
})

//data-testid attribute for the <h1> tag in the ContactForm component matches the text content to be "Contact me"
it('renders', () => {
    const { getByTestId } = render(<Contact />)
    expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
})

//data-testid attribute to locate the <button>, to match the text content "Submit".
it('renders', () => {
    const { getByTestId } = render(<Contact />)
    expect(getByTestId('button')).toHaveTextContent('Submit')
})