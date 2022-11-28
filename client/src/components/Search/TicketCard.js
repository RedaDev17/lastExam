import React from 'react';

function TicketCard(props) {
  const { filteredData, passengerCount } = props;

  function saveData(data) {
    localStorage.setItem("ticket", JSON.stringify(data));
    console.log(localStorage.getItem("ticket"));
  }

  return (
    <>
      {filteredData.map((data, i) => {
        return (
          <div className="card mb-3" id="ticket_card" key={i}>
            <div className="card-body">
              <div style={{ display: 'flex' }}>
                <div
                  style={{
                    width: '60%',
                    fontSize: '13px',
                    display: 'flex',
                    lineHeight: '1.5rem',
                  }}
                >
                  <div>
                    <div
                      style={{
                        marginBottom: '6px',
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span>
                        <b>$ {data.price * passengerCount}</b>
                      </span>
                      <span style={{ fontSize: '11px' }}>
                        <b>{passengerCount} P</b>
                      </span>
                    </div>
                    <div>
                      <b>
                        {data.from.short} {'>>'} {data.to.short}
                      </b>
                    </div>
                    <div>{data.code}</div>
                    <div>Depart: {data.departTime}</div>
                    <div>Arrive: {data.arrivalTime}</div>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '40%',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ height: '100px', width: '140px' }}>
                    <img
                      src={data.flightImg}
                      alt="flight_img"
                      style={{ height: '100%', width: '100%' }}
                    />
                  </div>
                  <div>
                    <a onClick={() => {saveData(data)}}>
                      <button type="button" className="btn btn-sm btn-info">
                        <b>Book</b>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default TicketCard;
