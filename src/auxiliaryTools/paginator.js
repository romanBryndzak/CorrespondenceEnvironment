import s from "./auxiliaryTools.module.css";
import React, {useState} from "react";

const Paginator = ({countItems, amountUsers, activePage, onSetCurrentPage, portionSize}) => {

    let [portionNumber, setPortionNumber] = useState(1)

    const amountPage = Math.ceil(countItems / amountUsers)
    const amountPages = []
    for (let i = 1; i <= amountPage; i++) {
        amountPages.push(i)
    }

    const portionCount = Math.ceil(amountPage / portionSize)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={s.paginator}>
            {portionNumber > 1 && <button className={s.button} onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>Prev</button>}

            {amountPages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(p => {
                return <span key={p.id} className={activePage === p ? s.active : s.wrapperSpan}
                             onClick={() => {
                                 onSetCurrentPage(p)
                             }}>{p}</span>
            })}
            {portionCount > portionNumber && <button className={s.button} onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>Next</button>}
        </div>

    )
}

export default Paginator