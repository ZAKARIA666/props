import React from 'react'
import PropTypes from 'prop-types';

const Home = ({esm,lastname,handleName}) => {
   

  return (
    <div>
      <p style={{color:"pink",TextDecoder:"underline"}}> hello i'm {esm}  {lastname}</p>
      <bye><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy-bkRtD9CMlyfp6fNPiz06ypbqSBh55GRfQ&usqp=CAU" alt="An example image" />
      </bye>
      <h1 onClick={handleName}>{esm}</h1>
      
    </div>
  ) ;
}
Home.defaultProps={
    esm:"zak",
}
const proptypes={
    esm: PropTypes.string,
}


export default Home
