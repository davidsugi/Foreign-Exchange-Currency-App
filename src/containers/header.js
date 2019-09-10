import _ from 'lodash';
import { connect } from 'react-redux';
import { clearQueryPush } from '../actions';
import { getPokemon, search } from '../actions/pokemons';
import Header from '../component/Header'


const mapStateToProps = state => ({
  currency: state.currency.data,
  my_currency: state.my_currency,
  isAdding: state.currency.isAdding,
})

const mapDispatchToProps = {
  getPokemon,
  push: clearQueryPush,
  search,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)