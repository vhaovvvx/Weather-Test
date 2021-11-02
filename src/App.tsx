import React, { useEffect } from 'react';
import { connect } from 'redux-zero/react';
import Main from './components/Main';
import { getDataWeek, findCityName } from './reduxZero/actions';

function App({ data, getDataWeek }: any) {
  console.log(data);
  useEffect(() => {
    getDataWeek(21.0245, 105.8412);
  }, []);

  return (
    <div className='app'>
      <Main />
    </div>
  );
}

const actions = {
  getDataWeek,
};
const mapToProps = ({ data }: any) => ({ data });

const connected = connect(mapToProps, actions);

export default connected(App);
