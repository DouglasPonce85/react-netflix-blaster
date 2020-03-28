/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

import { imgs } from '../utils/global';

/**
 * @function ContentRow
 */

const ContentRow = ({ category }) => {
    return (
        <div className="ContentRow"
            css={css`
                padding: 60px;
                overflow-x: hidden;
            `}>

            <h2>{ category }</h2>
            <div
                css={css`
                    display:flex
                `}
            >
                { imgs.map(img => <img key={img} src={img} />) }
            </div>
        </div>
    )
};

ContentRow.defaultProps = {
    category: 'Action'
}

export default ContentRow;
