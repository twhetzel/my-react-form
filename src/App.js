import React, { Fragment } from 'react';
import BasicForm from './BasicForm';
import SyncValidationForm from './SyncValidationForm';
import MaterialSyncForm from './MaterialSyncForm';
import ComponentLifecycleForm from './ComponentLifecycleForm';


class App extends React.Component {
  render() {
    return (
      <Fragment>
        <div id="basicForm">
          <BasicForm />
        </div>
        <hr />
        <div id="syncForm">
          <SyncValidationForm />
        </div>
        <hr />
        <div id="matSyncForm">
          <MaterialSyncForm />
        </div>
        <hr />
        <div id="compLcForm">
          <ComponentLifecycleForm />
        </div>
      </Fragment>
    )
  }
}
export default App;
