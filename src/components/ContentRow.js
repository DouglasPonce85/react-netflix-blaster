/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

import ContentBlock from './ContentBlock';
import styled from '@emotion/styled';

/**
 * @function ContentRow
 */
const ContentRow = ({ category, setActive, rail, isOriginalTile }) => {
    return (
        <div className="ContentRow" css={css` padding: 30px 40px 5px;`}>
            <ContentRowStyle>
                <h2>{category}</h2>
                <div className="block-wrapper">
                    {
                        rail.map(show => (
                            <ContentBlock
                                key={show.id}
                                category={category}
                                showSelected={show}
                                setActive={setActive}
                                isOriginalTile={isOriginalTile}
                            />
                        ))
                    }
                </div>
            </ContentRowStyle>
        </div>
    )
};

ContentRow.defaultProps = {
    category: 'Action',
    rail: [],
    isOriginalTile: false
}

const ContentRowStyle = styled.div`
    h2 {
        margin: 10px 0 10px;
        color: white;
    }

    .block-wrapper {
        display: flex;
        width: 100%;
        position: relative;
    }
`;

export default ContentRow;
