import React from 'react';
import DestinationPage from '../DestinationPage.jsx';
import alaska1 from '../../../img/banner/alaska1.jpg';
import alaska2 from '../../../img/banner/alaska2.jpg';
import alaska3 from '../../../img/banner/alaska3.jpg';
import alaska4 from '../../../img/banner/alaska4.jpg';

function Alaska() {
  return (
    <DestinationPage title='Alaska' bannerImage1={alaska1} bannerImage2={alaska2} bannerImage3={alaska3} bannerImage4={alaska4}/>
  )
};

export default Alaska;