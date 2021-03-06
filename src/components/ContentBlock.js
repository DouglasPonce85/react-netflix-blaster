/** @jsx jsx */
import React, { useState, useCallback } from 'react';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

import Icon from './Icon';

/**
 * @function ContentBlock
 */
const ContentBlock = ({ category, showSelected, setActive, isOriginalTile }) => {
    const [hovered, setHovered] = useState(false);

    const handleHover = useCallback(e => {
        e.type === 'mouseenter' ?
            setHovered(e.target.getAttribute('data-img')) :
            setHovered(false);
    }, []);

    const getPos = useCallback(e => {
        const pos = e.target.parentElement.getBoundingClientRect();
        const playVideo = false;

        setActive({ category, pos, playVideo, showSelected });
    }, []);

    const playVideo = useCallback(e => {
        const pos = e.target.parentElement.getBoundingClientRect();
        const playVideo = true;

        setActive({ category, pos, playVideo, showSelected });
    }, []);

    return (
        <BlockContainer
            data-img={showSelected.imgUrl}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
        >
            {showSelected.imgUrl === hovered && (
                <div className="content">
                    <Icon type="play" onClick={playVideo} />
                    { !isOriginalTile && ( <Icon type="info-circle" onClick={getPos} /> )}
                </div>)
            }
            <img src={showSelected.imgUrl} />
        </BlockContainer>
    )
};

ContentBlock.defaultProps = {
    isOriginalTile: false
}

const BlockContainer = styled.div`
    position: relative;
    flex: calc(18vw - 4px);
    flex-shrink: 0;
    margin-right: 4px;
    transition: 300ms, transform 250ms ease;
    -moz-transition: 300ms, transform 250ms ease;
    -webkit-transition: 300ms, transform 250ms ease;

    &:hover {
        -ms-transform: scale(1.5); /* IE 9 */
        -webkit-transform: scale(1.5); /* Safari */
        transform: scale(1.5);
        margin-left: 5%;
        margin-right: 5.5%;
    }

    &:active {
        -ms-transform: scale(0.99); /* IE 9 */
        -webkit-transform: scale(0.99); /* Safari */
        transform: scale(0.99);
    }

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
