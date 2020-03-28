/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

import { imgs } from '../utils/global';
import ContentBlock from './ContentBlock';

/**
 * @function ContentRow
 */
const ContentRow = ({ category }) => {
    return (
        <div className="ContentRow"
            css={css`
                padding: 30px 40px 5px;
                overflow-x: hidden;
            `}>

            <div css={css`
                h2 {
                    margin: 20px 0 10px;
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
                        imgs.map(img => (
                            <ContentBlock
                                key={img}
                                img={img}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

ContentRow.defaultProps = {
    category: 'Action'
}

export default ContentRow;
