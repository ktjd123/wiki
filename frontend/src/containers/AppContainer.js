import React from 'react'
import * as actions from 'actions';
import { connect } from 'react-redux';

import { MainTemplate } from 'components'
import { Main } from 'components';

class AppContainer extends React.Component {
  render() {
    return (
      <div>
        <MainTemplate App={<Main {...this.props} />} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  testString: state.test.get('string')
})

const mapDispatchToProps = (dispatch) => ({
  reducerTest: () => dispatch(actions.reducerTest())
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

