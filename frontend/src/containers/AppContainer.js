
//Redux Things
import * as actions from 'actions';
import {connect} from 'react-redux';

import App from 'components/App';

const mapStateToProps = (state) => ({
  testString: state.test.string
})

const mapDispatchToProps = (dispatch) => ({
  reducerTest: () => dispatch(actions.reducerTest())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

