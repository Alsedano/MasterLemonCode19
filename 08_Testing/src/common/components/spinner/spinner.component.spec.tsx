import { render, screen, waitFor } from '@testing-library/react';
import { SpinnerComponent } from './spinner.component';
import React from 'react';
import * as promiseTracker from 'react-promise-tracker';

vi.mock('react-promise-tracker', () => ({
  usePromiseTracker: vi.fn(),
}));
const usePromiseTrackerMock = vi.mocked(promiseTracker.usePromiseTracker);

describe('common/Spinner Component', () => {
  it('should render if promise in progress', async () => {
    // Arrange
    usePromiseTrackerMock.mockReturnValue({ promiseInProgress: true });
    // Act
    render(<SpinnerComponent />);

    const element = screen.queryByRole('presentation');

    // Assert
    expect(element).toBeInTheDocument();
  });

  it('should render if promise completed', async () => {
    // Arrange
    usePromiseTrackerMock.mockReturnValue({ promiseInProgress: false });

    // Act
    render(<SpinnerComponent />);

    const element = screen.queryByRole('presentation');

    // Assert
    expect(element).not.toBeInTheDocument();
  });
});
