// Check that the Login form renders correctly.
// Check that input validation works on form submit.
// Check that the form submits correctly when inputs have content.
// Check that the request works correctly on success.
// Check that request works correctly on error.
// Check that a token is saved to local storage after a successful request.

import { render } from '@testing-library/react';
import Login from '~/components/Login/Login';


describe("Login render Page", () => {
    it('renders the Login page', () => {
      const {getByText} = render(<Login/>);
      expect(getByText(/login/i)).toBeInTheDocument();
    });
  
    it('render 2 input components', () => {
      const {getByLabelText} = render(<Login/>);
      expect(getByLabelText(/username/i)).toBeInTheDocument();
      expect(getByLabelText(/password/i)).toBeInTheDocument();
    });
  
    it('renders a submit button', () => {
      const {getByText} = render(<Login/>);
      expect(getByText("Submit")).toBeInTheDocument();
    });
  });