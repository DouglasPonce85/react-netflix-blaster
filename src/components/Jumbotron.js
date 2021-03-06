/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

import Button from './Button';
import logo from '../img/logo.png';
import { wallpaper } from '../utils/global';

/**
 * @function Jumbotron
 */
const Jumbotron = ({ children }) => (
    <div css={JumbotronCSS}>
        <div className="synopsis">
            <img src={logo} />

            <p>
                All he wants to do is leave town and start over. But first, he needs to
                deal with his ex, his new roomie and the enemies who want him dead.
            </p>

            <Button icon="play">Play</Button>
            <Button icon="info-circle">More Info</Button>
        </div>

        { children }
    </div>
)

const JumbotronCSS = css`
  position: relative;
  background-image: url('${wallpaper}');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 98vh;
  top: 0;

  .synopsis {
    padding-top: 200px;
    max-width: 500px;
    color: white;
    padding-left: 60px;

    img {
      width: 100%;
    }

   .Icon {
      margin-right: 10.5px;
    }
  }

  .slider {
    height: 125px;
    position: absolute;
    bottom: 20px;
    width: calc(100% - 60px);
  }

  .ContentRow {
    position: absolute;
    bottom: 10px;
  }
`;

export default Jumbotron;
