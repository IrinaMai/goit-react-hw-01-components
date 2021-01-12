import React from 'react';
import style from './Transaction.module.css'

const Transaction = ({ transactions }) => {
    console.log({transactions})
    return (
        <table className="style.transactionHistory">
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map(({id, type, amount, currency}) => {
                    return (
                    <tr key ={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                        </tr>
                    )
                }) }

            </tbody>
    </table>
    )

};

export default Transaction