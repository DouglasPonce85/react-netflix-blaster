/** @jsx jsx */
import React from 'react';
import ReactPlayer from 'react-player';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

/**
 * @function ContentPlayer
 */
const ContentPlayer = ({ url }) => {
    return (
        <PlayerWrapper>
            <ReactPlayer
                className='react-player'
                url={url}
                playing
            />
        </PlayerWrapper>
    )
};

ContentPlayer.defaultProps = {
    url: 'https://youtu.be/M8PsZki6NGU'
}

const PlayerWrapper = styled.div`
    position: relative;
    padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */

    .react-player {
        position: absolute;
        top: 0;
        left: 0;
        width: 95% !important;
        height: 65% !important;
    }
`;

export default ContentPlayer;
