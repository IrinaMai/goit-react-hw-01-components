import React from 'react';
import style from './Transaction.module.css'

const isColored = (index) => {
    if (index % 2 === 0) {
        return style.isOdd
    } else {
        return style.isEven
    }
}

const Transaction = ({ transactions }) => {
    return (
        <table className={style.transactionHistory}>
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map(({ id, type, amount, currency }, index) => {
                    
                    return (
                    <tr key ={id} index = "index" className = {isColored(index)} >
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