/** @jsx jsx */
/** @jsxFrag React.Fragment */

// eslint-disable-next-line
import React from 'react';
import { jsx, css } from '@emotion/core';

import logo from './images/header-logo.png';
import logoForbes from './images/logo-forbes.png';
import logoUclahealth from './images/logo-uclahealth.png';
import logoHowstuffworks from './images/logo-howstuffworks.png';
import logoFox11 from './images/logo-fox11.png';
import logoSpectrum from './images/logo-spectrum.png';
import logoDiscovery from './images/logo-discovery.png';
import logoNbc4 from './images/logo-nbc4.png';
import logoMeaww from './images/logo-meaww.png';
import logoTechrepublic from './images/logo-techrepublic.png';
import logoThesciencetimes from './images/logo-thesciencetimes.png';
import logoHackernoon from './images/logo-hackernoon.png';
import bannerSection2 from './images/section_3_bg.jpg';
import bannerSection3 from './images/section_2.jpg';

import img from './images/background.jpg';

const logoStyles = css`
  margin-right: 890px;
  margin-left: 160px;
  height: 50px;
  width: 50px;
  box-sizing: border-box;
  position: relative;
  margin-top: 50px;
  margin-bottom: 22px;
`;

const sectionOne = css`
  background-image: url(${img});
  background-size: cover;
  height: 105vh;
  margin: 0;
  background-position-y: -31px;
`;

const h1Styles = css`
  margin-right: 890px;
  margin-left: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 49px;
  text-decoration: none;
  color: #2f4d67;
  font-weight: normal;
  line-height: 1.2;
  margin-bottom: 20px;
`;

const div1Styles = css`
  font-weight: bold;
`;

const pStyles = css`
  margin-right: 910px;
  margin-left: 160px;
  margin-top: 0px;
  margin-bottom: 0px;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  text-decoration: none;
  color: #2f4d67;
  margin-bottom: 40px;
  line-height: 2;
  font-weight: 400;
`;

const h3Styles = css`
  margin-top: 70px;
  margin-right: 860px;
  margin-left: 160px;
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  text-decoration: none;
  color: #2f4d67;
  font-weight: 400;
`;

const navStyles = css`
  display: flex;
  justify-content: space-between;
  margin-right: 880px;
  margin-left: 160px;
`;

const placeholderStyle = css`
  border: 0;
  width: 400px;
  height: 55px;
  font-size: 14px;
  padding: 5px;
  padding-left: 20px;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
`;

const button1Styles = css`
  border: 0;
  height: 55px;
  width: 150px;
  color: #2f4d67;
  background-color: white;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  margin-right: 10px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background: #2f4d67;
    color: white;
    border: 1px solid white;
  }
`;

const button2Styles = css`
  border: 0;
  height: 55px;
  width: 150px;
  color: #2f4d67;
  background-color: white;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background: #2f4d67;
    color: white;
    border: 1px solid white;
  }
`;

const h4Styles = css`
  text-align: center;
  font-size: 18px;
  color: #4d516b;
`;

const hrStyle = css`
  margin-left: 720px;
  margin-right: 720px;
`;

const sectionTwo = css`
  background-image: url(${bannerSection2});
  background-size: cover;
  height: 80vh;
  margin: 0;
  background-position-y: 0px;
  background-position-x: -180px;
`;

function App() {
  return (
    <>
      <main>
        <section css={sectionOne}>
          <div>
            <img css={logoStyles} src={logo} alt="Expper Logo" />
            <h1 css={h1Styles}>
              <div>I am Robin,</div>
              <div css={div1Styles}> Robot Companion for Children</div>
            </h1>
            <p css={pStyles}>
              My purpose is to support children during medical treatment and
              alleviate their pain by creating positive experiences.
              Hospitalized children have certain emotional needs and I’m here to
              address them in a new, personalized way.
            </p>
            <h3 css={h3Styles}>Subscribe for Updates</h3>
            <div css={navStyles}>
              <input
                css={placeholderStyle}
                placeholder="Enter your email"
                type="email"
              />
              <button css={button1Styles}>Subscribe</button>
              <button button css={button2Styles}>
                Buy Now
              </button>
            </div>
          </div>
        </section>

        <h4 css={h4Styles}>AS FEATURED IN</h4>
        <hr css={hrStyle} />
        <a href="#a">
          <img
            src="https://www.expper.tech/media/logo-therobotreport.svg"
            alt="The Robotreport Logo"
          />
        </a>
        <a href="#a">
          <img src={logoForbes} alt="The Forbes Logo" />
        </a>
        <a href="#a">
          <img src={logoUclahealth} alt="The Ucla health Logo" />
        </a>
        <a href="#a">
          <img src={logoHowstuffworks} alt="The How stuff works Logo" />
        </a>
        <a href="#a">
          <img src={logoFox11} alt="The Fox11 Logo" />
        </a>
        <a href="#a">
          <img src={logoSpectrum} alt="The Spectrum Logo" />
        </a>
        <a href="#a">
          <img src={logoDiscovery} alt="The Discovery Logo" />
        </a>
        <a href="#a">
          <img src={logoNbc4} alt="The Nbc 4 Logo" />
        </a>
        <a href="#a">
          <img src={logoMeaww} alt="The Meaww Logo" />
        </a>
        <a href="#a">
          <img src={logoTechrepublic} alt="The Tech republic Logo" />
        </a>
        <a href="#a">
          <img src={logoThesciencetimes} alt="The Science times Logo" />
        </a>
        <a href="#a">
          <img src={logoHackernoon} alt="The Hackernoon Logo" />
        </a>

        <section css={sectionTwo}>
          <h2 css={h1Styles}>I Make Medical Procedures Less Overwhelming</h2>
          <p css={pStyles}>
            Depending on their age, character, and condition, children may react
            to unfamiliar situations in different ways. Some children may not
            even understand why they are in hospital. This can lead to
            psychological trauma.
          </p>
          <p css={pStyles}>
            As a companion, I help children go through the treatment process
            more smoothly. With me, they feel more comfortable and secure during
            their treatment.
          </p>
        </section>
        <section>
          <img src={bannerSection3} alt="The Robot and the girl who stands" />
          <h2>I Help them Deal with Hospital Stress and Discomfort</h2>
          <p>
            Being in hospital is stressful for children as they are exposed to
            negative emotional experiences. They are vulnerable to external
            influences and need support on an emotional level.
          </p>
          <p>
            By connecting with children through natural interactions, I adapt to
            their needs and help to overcome stress and anxiety. I’m here to
            change the way hospitals provide psychological care to children.
          </p>
        </section>
        <section>
          <h3>Contact Us</h3>
          <input placeholder="Enter your email" type="email" />
          <button>Submit</button>
        </section>
      </main>
      <footer>
        <div>
          © 2020 Expper Technologies, Inc. All Rights Reserved.
          <a href="#a">Terms of Use</a>
          <a href="#a">Privacy Policy</a>
        </div>
      </footer>
    </>
  );
}

export default App;
