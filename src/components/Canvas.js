import React from 'react'
import './Canvas.css'
import { FiSearch} from "react-icons/fi";
import { RiNotification2Line } from "react-icons/ri";
import card from './svg/card.svg'




 function Canvas() {
  return (
    <div className='userContent'>
      <div className='top-content'>
        <div className='active-user'>
          <FiSearch className='SearchIcon'/>
          <RiNotification2Line className='NotificationIcon'/>
        <div className='user-name'>
          <p>
            Jane Doe
          </p>
          <div className='user-avatar'>
          J
          </div>
        </div>
        </div>
      </div>
      <div className='middle-content'>
        <div className='middle-top'>
          <h3>
            Your Card
          </h3>
          <p>
            11:46, 15 October 2022
          </p>
        </div>
      </div>
      <div className='middle'>
        <img height={200} src={card} alt="Card" />
      </div>
      <div className='middle-content'>
        <div className='middle-top'>
          <h3>
            Recent Transactions
          </h3>
          <p>
            Veiw All
          </p>
        </div>
      </div>
      <div className='bottom'>
        <ul>
          <li>
            TRANSACTIONS NAME
          </li>
          <li>
            USE
          </li>
          <li>
            DATE
          </li>
          <li>
            TIME
          </li>
          <li>
            ACTIONS
          </li>
        </ul>
        <div className='menu'>
          <div className = 'item-1'>
            <h3>
              Bank
            </h3>
            <h3>
              Criminal records
            </h3>
            <h3>
              15 October 2022
            </h3>
            <h3>
              8:30 AM
            </h3>
            <button>
              Details
            </button>
          </div>
          <div className = 'item-2'>
          <h3>
              Bank
            </h3>
            <h3>
            Licenses
            </h3>
            <h3>
              17 October 2022
            </h3>
            <h3>
              5:60 PM
            </h3>
            <button>
              Details
            </button>
          </div>
          <div className='item-3'>
          <h3>
              Bank
            </h3>
            <h3>
            Licenses
            </h3>
            <h3>
            25 October 2022
            </h3>
            <h3>
              12:00 PM
            </h3>
            <button>
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Canvas;
