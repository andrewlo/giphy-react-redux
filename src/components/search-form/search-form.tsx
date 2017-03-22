import * as React from 'react';
const ReduxForm = require('redux-form');

import Form from '../form/';
import FormGroup from '../form/form-group';
import FormLabel from '../form/form-label';
import FormError from '../form/form-error';
import Input from '../form/form-input';
import Button from '../button';
import Alert from '../alert';

interface ISearchFormProps {
  onSubmit: () => void;
  handleSubmit?: () => void;
  resetForm?: () => void;
  isPending: boolean;
  hasError: boolean;
  fields?: {
    term: any;
  };
};

// Making this a class-based component until redux-form typings support
// stateless functional components.
class SearchForm extends React.Component<ISearchFormProps, void> {
  render() {
    const {
      handleSubmit,
      resetForm,
      isPending,
      hasError,
      fields: {
        term,
      }
    } = this.props;

    return (
      <Form handleSubmit={ handleSubmit }>
        <Alert
          testid="alert-loading"
          isVisible={ isPending }>
          Loading...
        </Alert>
        <Alert
          testid="alert-error"
          id="qa-alert"
          isVisible={ hasError }
          status="error">
          Search Error
        </Alert>

        <FormGroup testid="search-term">
          <FormLabel id="qa-search-label">Search</FormLabel>
          <Input
            type="text" fieldDefinition={ term }
            id="qa-search-input"
            placeholder="Search"/>
          <FormError id="qa-search-validation"
            isVisible={ !!(term.touched && term.error) }>
            { term.error }
          </FormError>
        </FormGroup>

        <FormGroup testid="login-submit">
          <Button type="submit" className="mr1" id="qa-login-button">
            Search
          </Button>
          <Button onClick={ resetForm }
            type="reset"
            className="bg-red" id="qa-clear-button">
            Clear
          </Button>
        </FormGroup>
      </Form>
    );
  }

  static validate(values) {
    const errors = { term: '' };

    if (!values.term) {
      errors.term = 'Search term is required.';
    }

    return errors;
  }
}

export default ReduxForm.reduxForm({
  form: 'search',
  fields: [
    'term',
  ],
  validate: SearchForm.validate,
})(SearchForm);
