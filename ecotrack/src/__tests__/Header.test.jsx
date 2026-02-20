import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../components/Header';
import { AuthProvider } from '../../context/AuthContext';
import { MemoryRouter } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom')),
  useNavigate: () => jest.fn(),
}));

describe('Header component', () => {
  test('renders title and Login when unauthenticated', () => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <Header title="EcoTrack" />
        </AuthProvider>
      </MemoryRouter>
    );

    expect(screen.getByText('EcoTrack')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  test('matches snapshot (unauthenticated)', () => {
    const { container } = render(
      <MemoryRouter>
        <AuthProvider>
          <Header title="EcoTrack" />
        </AuthProvider>
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
