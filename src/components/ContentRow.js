/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

import ContentBlock from './ContentBlock';

/**
 * @function ContentRow
 */
const ContentRow = ({ category, setActive, rail }) => {
    return (
        <div className="ContentRow"
            css={css`
                padding: 30px 40px 5px;
            `}>

            <div css={css`
                h2 {
                    margin: 10px 0 10px;
                    color: white;
                }

                .block-wrapper {
                    display: flex;
                    width: 100%;
                    position: relative;
                }
            `}>
                <h2>{category}</h2>
                <div className="block-wrapper">
                    {
                        rail.map(show => (
                            <ContentBlock
                                key={show.id}
                                category={category}
                                showSelected={show}
                                setActive={setActive}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

ContentRow.defaultProps = {
    category: 'Action',
    rail: []
}

export default ContentRow;
