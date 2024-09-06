import { connect } from 'react-redux';
import List from '../components/List';

function mapStateProps(state) {
  const { goods } = state;
  return { goods: goods };
}

export default connect(mapStateProps, null)(List);
