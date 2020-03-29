/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

import ContentPlayer from './ContentPlayer';
import Icon from './Icon';

/**
 * function DetailPane
 */
const DetailPane = ({ category, pos, setActive, playVideo }) => {
    return (
        category && (
            <div css={css`
                height: 475px;
                background: black;
                width: 100%;
                position: absolute;
                border: 2px solid red;
                top: ${pos + scrollY}px;
                z-index: 99;

                .Icon {
                  font-size: 32px;
                  color: white;
                  position: absolute;
                  right: 20px;
                  top: 20px;
                  cursor: pointer;
                }
            `}>

                { playVideo && ( <ContentPlayer /> ) }

                <Icon type="times" onClick={setActive} />
            </div>
        )
    )
};

export default DetailPane;