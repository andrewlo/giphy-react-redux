import * as React from 'react';
const connect = require('react-redux').connect;

import { increment, decrement } from '../actions/counter';
import { giphySearch } from '../actions/giphy';

import Counter from '../components/counter';
import Container from '../components/container';

interface ICounterPageProps extends React.Props<any> {
  counter: number;
  increaseCounter: () => void;
  decreaseCounter: () => void;
  giphySearch: (term: string) => void;
};

function mapStateToProps(state) {
  return {
    counter: state.counter.count,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: (): void => dispatch(increment()),
    decreaseCounter: (): void  => dispatch(decrement()),
    giphySearch: (term: string): void => dispatch(giphySearch(term))
  };
}

class CounterPage extends React.Component<ICounterPageProps, void> {

  componentDidMount() {
    this.props.giphySearch('cats');
  }

  render() {
    const { counter, increaseCounter, decreaseCounter } = this.props;
 
    return (
      <Container testid="counter" size={2} center>
      <h2
        data-testid="counter-heading"
        className="center caps"
        id="qa-counter-heading">
        Counter
      </h2>

      <Counter
        counter={ counter }
        increment={ increaseCounter }
        decrement={ decreaseCounter } />
    </Container>
    );
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterPage);
