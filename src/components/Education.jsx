import React, { useEffect, useState, useContext } from 'react';
import { Chrono } from 'react-chrono';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import { ThemeContext } from 'styled-components';
import endpoints from '../constants/endpoints';
import Header from './Header';
import FallbackSpinner from './FallbackSpinner';
import '../css/education.css';

function Education(props) {
  const theme = useContext(ThemeContext);
  const { header } = props;
  const [data, setData] = useState(null);
  const [width, setWidth] = useState('50vw');
  const [mode, setMode] = useState('VERTICAL_ALTERNATING');

  useEffect(() => {
    fetch(endpoints.education, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);

    if (window?.innerWidth < 576) {
      setMode('VERTICAL');
    }

    if (window?.innerWidth < 576) {
      setWidth('90vw');
    } else if (window?.innerWidth >= 576 && window?.innerWidth < 768) {
      setWidth('90vw');
    } else if (window?.innerWidth >= 768 && window?.innerWidth < 1024) {
      setWidth('75vw');
    } else {
      setWidth('50vw');
    }
  }, []);

  return (
    <div style = {{backgroundImage: "url('/images/education/nanyang.jpg')", backgroundSize: 'cover', width: '100%', height: "100%"}}>
      <Header title={header} />
      {data ? (
        <Fade>
          <Row>
            <Col>
              <div style = {{marginTop: "50px", fontSize: "40px", color: 'blue'}}>
                Bachelor of Computer Science - 2018
              </div>
            </Col>

            <Col>
              <div style={{ fontSize: "40px", marginTop: "100px", color: 'blue'}}>Technical university of denmark</div>
            </Col>
          </Row>
        </Fade>
      ) : <FallbackSpinner /> }
    </div>
  );
}

Education.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Education;
