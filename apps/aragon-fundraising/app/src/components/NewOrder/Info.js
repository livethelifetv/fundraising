import React from 'react'

const Info = ({ isBuyOrder, slippage }) => {
  return (
    <div
      css={`
        background-color: #f1fbff;
        border-radius: 4px;
        color: #188aaf;
        padding: 1rem;
        margin-top: 2rem;
        border-left: 2px solid #0ab0e5;
      `}
    >
      <p css="font-weight: 700;">Info</p>
      <p>
        {isBuyOrder && 'Opening a buy order will lead you to purchase some shares in this organization.'}
        {!isBuyOrder && 'Opening a sell order will lead you to redeem some of your shares in this organization.'}
      </p>
      <p>
        Note that the return of your order may be different than the one indicated if other users open buy or sell orders simultaneously. In any case you can be
        assured that the price slippage won't exceed <b>{slippage} %</b>.
      </p>
    </div>
  )
}

export default Info
