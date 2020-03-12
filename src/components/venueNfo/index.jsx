import React from 'react';
import Zoom from 'react-reveal/Zoom';
import icon_calendar from '../../resources/images/icons/calendar.png';

const VenueNfo = () => {
  return (
    <div class="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">

          <Zoom duration={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_yellow"></div>
                  <div className="vn_icon" style={{background: `url(${icon_calendar})`}}>
                  </div>
                  <div className="vn_title">Event Starts</div>
                  <div className="vn_desc">
                    day month year @time
                  </div>
                </div>
              </div>
            </div>
          </Zoom>

          <Zoom duration={500} delay={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red"></div>
                  <div className="vn_icon" style={{background: `url(${icon_calendar})`}}>
                  </div>
                  <div className="vn_title">Event Ends</div>
                  <div className="vn_desc">
                    day month year @time
                  </div>
                </div>
              </div>
            </div>

          </Zoom>

        </div>
      </div>
    </div>
  )
}

export default VenueNfo;
