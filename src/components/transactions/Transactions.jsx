import React from 'react';
import PropTypes from 'prop-types';
import {tableTransact, headTransact, trTransact, tbodyTransact, trBodyTransact, thTran, tbTran} from './transactions.module.css';
const Transactions = (props) => {
    return (

        <table className={tableTransact}>
            <thead className={headTransact}>
                <tr className={trTransact}>
                    <th className={thTran}>TYPE</th>
                    <th className={thTran}>AMOUNT</th>
                    <th className={thTran}>CURRENCY</th>
                </tr>
            </thead>
            <tbody className={tbodyTransact}>
                {props.items.map((keys) => 
                <tr className={trBodyTransact}>
                    <td className={tbTran}>{keys.type}</td>
                    <td className={tbTran}>{keys.amount}</td>
                    <td className={tbTran}>{keys.currency}</td>
                </tr>
                )}
            </tbody>
        </table>

    );
}
Transactions.propTypes = {
    items: PropTypes.array.isRequired
}
export default Transactions;