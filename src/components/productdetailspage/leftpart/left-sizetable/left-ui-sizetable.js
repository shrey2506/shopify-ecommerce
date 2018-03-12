import React from 'react';
import './left-ui-sizetable.css';

export const LeftUiSizeTable = (props) => {

    const variants = props.selectedProduct.variants;

    let listNumber=0;

    return (

        <div className="leftuisizetable-container">
            <table>
                <tr>
                    <th>Id</th>
                    <th>Size</th>
                    <th>Price</th>
                </tr>
                {variants.map((variant) => {
                    listNumber++;
                    return (

                    <tr>
                        <td>{listNumber}</td>
                        <td>{variant.title}</td>
                        <td>NZD{variant.price}</td>
                    </tr>
                    )
                }
            
            )}
            </table>
        </div>

    )
}

