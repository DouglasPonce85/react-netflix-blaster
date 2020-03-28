/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

import Icon from './Icon';

/**
 * @function ContentBlock
 */
const ContentBlock = ({ img }) => {
    return (
        <div css={contentStyle}>
            <div className="content">
                <Icon type="play" />
                <Icon type="info-circle" />
            </div>
            <img src={img} />
        </div>
    )
};

const contentStyle = css`
    position: relative;
    flex: calc(18vw - 4px);
    flex-shrink: 0;
    height: 9.5vw;
    margin-right: 4px;

    .content {
        position: absolute;
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
        justify-content: center;
        transition: background-color ease 0.2s;

        &:hover {
            background-color: rgba(0, 0, 0, 0.65);
            cursor: pointer;
        }

        .Icon {
            font-size: 32px;
        }

        .Icon:first-of-type {
            color: red;
            margin-right: 25px;
        }

        .Icon:last-of-type {
            color: white;
        }
    }

    img {
        height: 100%;
        width: 100%;
        pointer-events: none;

    }
`;

export default ContentBlock;
