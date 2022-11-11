import React, { useState } from 'react'
import './AllPool.css'
import Web3 from 'web3'
import { Link } from 'react-router-dom'
import CandleChart from './CandleChart';
import { Button } from 'rebass'
function DetailPage(props) {
  console.log("jummah mubarak", props)
  const web3 = new Web3('https://bsc-dataseed1.binance.org/')
  const [hours, setHours] = useState(true)
  const [days, setDays] = useState(false)
  const setHoursFunc = () => {
    setHours(true)
    setDays(false)
  }
  const setDaysFunc = () => {
    setHours(false)
    setDays(true)
  }

  return (
    <>
      <div className="container">
        <div className="col-md-12 text-white">
          <div className="d-flex justify-content-end m-4">
            <a href={`https://bscscan.com/address/${props?.dataProps?.address}#code`} target="_blank">
              View on BscScan &nbsp;<i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
        <div className="col-md-12 text-white D-text">
          <i class="fa-regular fa-circle-question"></i> <i class="fa-regular fa-circle-question"></i> &nbsp;{' '}
          {`${props?.dataProps?.symbol1}/${props.dataProps.symbol2}`}
        </div>
        <div className="row text-white mt-3">
          <div className="col-md-8">
            <div className="d-flex flex-row mt-3 align-self-center bd-high">
              <div className="p-2 bd-highlight">
                <i class="fa-regular fa-circle-question"></i> &nbsp;{' '}
                {props?.dataProps?.symbol1 == 'WBNB'
                  ? `1 ${props.dataProps.symbol2}=${(props.dataProps.reserve0 / props.dataProps.reserve1).toFixed(
                      7
                    )}   ${props.dataProps.symbol1}`
                  : `1 ${props.dataProps.symbol1}=${(props.dataProps.reserve1 / props.dataProps.reserve0).toFixed(
                      7
                    )}  ${props.dataProps.symbol2}`}{' '}
              </div>
              <div className="p-2 bd-highlight">
                <i class="fa-regular fa-circle-question"></i> &nbsp;{' '}
                {props?.dataProps?.symbol1 == 'WBNB'
                  ? `1 ${props.dataProps.symbol1}=${(props.dataProps.reserve1 / props.dataProps.reserve0).toFixed(
                      7
                    )}  ${props.dataProps.symbol2}`
                  : `1 ${props.dataProps.symbol2}=${(props.dataProps.reserve0 / props.dataProps.reserve1).toFixed(
                      7
                    )}  ${props.dataProps.symbol1}`}{' '}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex flex-row  justify-content-end  btn-responsive">
              <div className="bd-highlight">
                <Link to={'/add'} className="btn btn-lg ">
                  {' '}
                  Add Liquidity
                </Link>
              </div>
              {/* <div className="bd-highlight"><button className="btn btn-lg"> Trade</button></div> */}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 ">
            <div className="text-white box p-2">
              <div className="m-2">
                <h4>TOTAL TOKENS LOCKED</h4>
              </div>
              <div className="box-1">
                <div className="d-flex flex-row  align-self-center  justify-content-between">
                  <div className="p-2">
                    <i class="fa-regular fa-circle-question"></i> &nbsp;{props?.dataProps?.symbol1}
                  </div>
                  <div className="p-2">{parseFloat(web3.utils.fromWei(props?.dataProps?.reserve0)).toFixed(6)}</div>
                </div>
                <div className="d-flex flex-row  align-self-center justify-content-between">
                  <div className=" p-2">
                    <i class="fa-regular fa-circle-question"></i> &nbsp;{props?.dataProps?.symbol2}
                  </div>
                  <div className=" p-2">{parseFloat(web3.utils.fromWei(props?.dataProps?.reserve1)).toFixed(6)}</div>
                </div>
              </div>

              <div className="m-2">
                <h4 className="">Volume</h4>
              </div>
              <div className="box-2">
                <div className="d-flex flex-row  align-items-center bd-highlight justify-content-between">
                  <div className="p-2 mt-2 bd-highlight">
                    <i class="fa-regular fa-circle-question"></i>
                  </div>
                  <div className="p-2  mt-2 bd-highlight">0000000K</div>
                </div>
              </div>
            </div>
            <div className="text-white box p-2">
              <div className="m-2 d-flex align-items-center justify-content-center">
                <div className=" d-grid gap-3 ">
                  <button
                    className={`${hours == true ? 'btn btn-lg' : 'btn-dis'}`}
                    onClick={() => setHoursFunc()}
                    type="button"
                  >
                    Last 24 Hours
                  </button>
                  <button
                    className={`${days == true ? 'btn btn-block ' : 'btn-dis'}`}
                    onClick={() => setDaysFunc()}
                    type="button"
                  >
                    7days
                  </button>
                </div>
                {/* <div className='btn btn-block'><button type='button' className={`${hours == true ? "btn" : "btn-dis"}`} onClick={() => setHoursFunc()}> Last 24 Hours</button></div>
                                <div className='btn btn-block'> <button type='button' className={`  ${days == true ? "btn" : "btn-dis"}`} onClick={() => setDaysFunc()} >7Days</button> </div> */}
              </div>
              <div className="mt-3 box-1">
                <div className="d-flex flex-row  align-self-center  justify-content-between">
                  <div className="p-2">
                    <i class="fa-regular fa-circle-question"></i> &nbsp;Volume 24h
                  </div>
                  <div className="p-2">LP REWARD FEES 24H</div>
                </div>
                <div className="d-flex flex-row  align-self-center justify-content-between">
                  <div className=" p-2">{parseFloat(web3.utils.fromWei(props?.dataProps?.reserve0)).toFixed(6)}</div>
                  <div className=" p-2">{parseFloat(web3.utils.fromWei(props?.dataProps?.reserve1)).toFixed(6)}</div>
                </div>
                <div className="d-flex flex-row  align-self-center justify-content-between">
                  <div className=" p-2">{parseFloat(web3.utils.fromWei(props?.dataProps?.reserve0)).toFixed(6)}</div>
                  <div className=" p-2">{parseFloat(web3.utils.fromWei(props?.dataProps?.reserve1)).toFixed(6)}</div>
                </div>
              </div>

              {/* <div className='m-2'>
                            <h4 className=''>Volume</h4>
                        </div>
                        <div className="box-2">
                            <div className="d-flex flex-row  align-items-center bd-highlight justify-content-between">
                                <div className="p-2 mt-2 bd-highlight"><i class="fa-regular fa-circle-question"></i></div>
                                <div className="p-2  mt-2 bd-highlight">0000000K</div>
                            </div>
                        </div> */}
            </div>
          </div>

          <div className='col-md-8 mt-4'>
                        <CandleChart />
                    </div>
        </div>
        {/* <div className='row d-flex justify-content-center'>
                    <div className='col-md-4 text-white mt-3'>
                        <div className="d-flex flex-row  align-self-center bd-high justify-content-between bg-high">
                            <button className="btn-btn btn-lg btn-text ">Last 24 Hours</button>
                            <button className="btn-btn btn-lg bg-btn">Last 7 Hours</button>
                        </div>
                    </div>
                </div> */}
        {/* <div className='row d-flex justify-content-center'>
                    <div className='col-md-6 mt-3 text-white'>
                        <p className='mt-3 hr-lines'> 5</p>
                        <p className='mt-3 hr-lines'> 4</p>
                        <p className='mt-3 hr-lines'> 3</p>
                        <p className='mt-3 hr-lines'> 2</p>
                        <p className='mt-3 hr-lines'> 1</p>
                        <p className='mt-3 hr-lines'> 0</p>
                    </div>
                </div> */}
        <div className="row d-flex"></div>
      </div>
    </>
  )
}

export default DetailPage
