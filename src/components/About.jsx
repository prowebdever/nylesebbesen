import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  introTextContainer: {
    margin: 10,
    flexDirection: 'column',
    whiteSpace: 'pre-wrap',
    textAlign: 'left',
    fontSize: '1.2em',
    fontWeight: 500,
  },
  introImageContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
};

function About(props) {
  const { header } = props;
  const [data, setData] = useState(null);

  const parseIntro = (text) => (
    <ReactMarkdown
      children={text}
    />
  );

  useEffect(() => {
    fetch(endpoints.about, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <>
      <Header title={header} />
      <div className="section-content-container">
        <Container>
          {data
            ? (
              <Fade>
                <Row>
                  <Col style={styles.introTextContainer}>
                    <h1>About me</h1>
                    {parseIntro(data.about)}
                  </Col>
                  {/* <Col style={styles.introImageContainer}>
                    <img src={data?.imageSource} alt="profile" />
                  </Col> */}
                </Row>
                <Row>
                  <Col style={styles.introTextContainer}>
                    <h1>Key Acievement</h1>
                    • Best tokenomics experience such as burn rates, anti-whaling, reflection and variable taxes.<br></br>
                    • Developed an upgradeable smart contract to adapt to the changing environment of smart.<br></br>
                    contracts deployed with proxy pattern (fix bugs, overcome the limitations of immutable contract).<br></br>
                    • Rich experience in gas fee optimization and smart contract audits similar to Certick Audit and GAudit Company.<br></br>
                    • Smart contract development, deployment and validation of project using Truffle and Hardhat.<br></br>
                    • Developed a multi blockchain exchange(DEX like 1inch, pancake swap).<br></br>
                    • Developed a token price alert bot for telegram and email, and a green buy bot for all tokens.<br></br>
                    • Developed a tradingview charts and trade data analysis using web3.js, GraphQL and BitQuery.<br></br>
                    • Developed smart contracts and frontends for NFT Pack games and NFT Farming.<br></br>
                    • Managed a Bitbucket (Github) of team development.<br></br>
                    • Monitored installation, integration, configuration, and maintenance of the IT system for 0% downtime.<br></br>
                    • Managed a web service platforms like Cloudflare, AWS and CPanel.<br></br>
                    • Trained over 10 staff members in internal website functions.

                  </Col>
                </Row>
              </Fade>
            )
            : <FallbackSpinner />}
        </Container>
      </div>
    </>
  );
}

About.propTypes = {
  header: PropTypes.string.isRequired,
};

export default About;
