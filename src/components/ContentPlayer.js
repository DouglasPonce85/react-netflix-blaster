/** @jsx jsx */
import React from 'react';
import ReactPlayer from 'react-player';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

/**
 * @function ContentPlayer
 */
const ContentPlayer = ({ showSelected }) => {
    return (
        <PlayerWrapper>
            <ReactPlayer
                className='react-player'
                url={showSelected.videoUrl}
                playing
            />
        </PlayerWrapper>
    )
};

const PlayerWrapper = styled.div`
    position: relative;
    padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
    box-sizing: border-box;
    width: 100%;
    height: 100%;

    .react-player {
        position: absolute;
        top: 0;
        left: 0;
        width: 100% !important;
        height: 25em !important;
    }
`;

export default ContentPlayer;
