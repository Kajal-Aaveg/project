import axios from "axios";
import React, { useEffect, useState } from "react";

function TestTable() {
  const [data, setData] = useState([]);
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  const [editId, seteditId] = useState(-1);

  const [reservID, setreservID] = useState("");
  const [pickLoc, setpickLoc] = useState("");
  const [dropLoc, setdropLoc] = useState("");
  const [pickD, setpickD] = useState("");
  const [dropD, setdropD] = useState("");
  const [pickT, setpickT] = useState("");
  const [dropT, setdropT] = useState("");
  const [reservStatus, setreservStatus] = useState("");
  const[showUpdate,setShowUodate] = useState(false);

  useEffect(() => {
    axios
      .get("https://wticarrental.ae:3000/app/v1/reservation/getReservations")
      .then((res) => setData(res.data.result))
      .catch((er) => console.log(er));
  }, []);

  // useEffect(() => {
  //     fetch("https://wticarrental.ae:3000/app/v1/reservation/getReservations").then(
  //       (result) => {
  //         result.json().then((resp) => {
  //           console.log("result",resp)
  //         //   setimgData(resp);
  //         });
  //       }
  //     );
  //   }, []);

  // const handleSubmit = (event) => {
  //     event.preventDefault();
  //     axios.post('https://wticarrental.ae:3000/app/v1/reservation/getReservations'),
  // }

  const handleEdit = (reservationID) => {
    setShowUodate(true);
    seteditId(reservationID);
    // axios.get('https://wticarrental.ae:3000/app/v1/reservation/getReservations' +reservationID)
    // .then(res => {
    //     console.log(res.data.result)
    //     setreservID(res.data.result.reservationID)
    //     setpickLoc(res.data.result.pickupLocation)
    // })
    // .catch(er => console.log(er));
    const filteredReservation = data.filter(
      (reservation) => reservation.reservationID === reservationID
    );

    if (filteredReservation.length > 0) {
      setreservID(filteredReservation[0].reservationID);
      setpickLoc(filteredReservation[0].travelItenary.pickupLocation);
      setdropLoc(filteredReservation[0].travelItenary.dropLocation);
      setpickD(filteredReservation[0].travelItenary.pickupDate);
      setdropD(filteredReservation[0].travelItenary.dropDate);
      setpickT(filteredReservation[0].travelItenary.pickupTime);
      setdropT(filteredReservation[0].travelItenary.dropTime);
      setreservStatus(filteredReservation[0].reservStatus);
    } else {
      // Handle case where reservation with the specified ID is not found
      console.log("Reservation not found");
    }
  };

  const handleUpdate = () => {
    //     axios.put('https://wticarrental.ae:3000/app/v1/reservation/getReservations/'+editId, {reservationID: editId, pickupLocation: pickLoc, dropLocation : dropLoc, pickupDate: pickD, dropDate: dropD, pickupTime:pickT, reservationStatus:reservStatus })
    //     .then(res => {
    //     console.log(res);
    //     location.reload();
    //     seteditId(-1);
    // }).catch(err => console.log (err));
    console.log(reservID);
    console.log(pickLoc);
    console.log(dropLoc);
    console.log(pickD);
    console.log(dropD);
    console.log(pickT);
    console.log(dropT);
    console.log(reservStatus);
  };

  return (
    <div>
      {/* <div>
            <form >
                <input type="text" placeholder='Enter Name'  className='border'  />
                <input type="text" placeholder='Enter Email' className='border' />
                <button className='bg-green-600 px-2 text-white'>Add</button>
            </form>
        </div> */}
      <table>
        <thead>
          <tr className="bg-blue-900 text-white ">
            <th className="w-[10%] border">Reservation ID</th>
            <th className="w-[15%] border">Pick Up Location</th>
            <th className="w-[15%] border">Drop Location</th>
            <th className="w-[10%] border">Pick Date</th>
            <th className="w-[10%] border">Drop Date</th>
            <th className="w-[10%] border">Pick Up Time</th>
            <th className="w-[10%] border">Drop Time</th>
            <th className="w-[10%] border">Reservation Status</th>
            <th className="w-[10%] border"> Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) =>
            user.reservationID === editId ? (
              <tr>
                <td>
                  <input
                    type="text"
                    value={reservID}
                    onChange={(e) => setreservID(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={pickLoc}
                    onChange={(e) => setpickLoc(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={dropLoc}
                    onChange={(e) => setdropLoc(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="date"
                    value={pickD}
                    onChange={(e) => setpickD(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="date"
                    value={dropD}
                    onChange={(e) => setdropD(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="time"
                    value={pickT}
                    onChange={(e) => setpickT(e.target.value)}
                  />
                </td>
                {/* <td><input type="time" value={dropT} onChange={e => setdropT(e.target.value)}/></td> */}
                <td>
                  <select
                    value={dropT}
                    onChange={(e) => setdropT(e.target.value)}
                  >
                    <option value="08:00">8:00 AM</option>
                    <option value="09:00">9:00 PM</option>
                    {/* Add more options as needed */}
                  </select>
                </td>
                {/* <td>
                  <input
                    type="text"
                    value={reservStatus}
                    onChange={(e) => setreservStatus(e.target.value)}/>
                </td> */}
                <td>
                  <select
                    value={reservStatus}
                    onChange={(e) => setreservStatus(e.target.value)}
                  >
                    <option value="">Pending</option>
                    <option value="">Enroute</option>
                    <option value="">Completed</option>
                    <option value="">Noshow</option>
                    <option value="">Overdue</option>
                    <option value="">Cancel</option>
                    {/* Add more options as needed */}
                  </select>
                </td>
                {showUpdate?     <td>
                  <button className="bg-green-600 text-white" onClick={() => handleUpdate()}>Update</button>
                </td>:<></>}
           
              </tr>
            ) : (
              <tr key={index}>
                <td className="border text-center ">{user.reservationID}</td>
                <td className="border text-center ">
                  {user.travelItenary.pickupLocation}
                </td>
                <td className="border text-center ">
                  {user.travelItenary.dropLocation}
                </td>
                <td className="border text-center ">
                  {user.travelItenary.pickupDate}
                </td>
                <td className="border text-center ">
                  {user.travelItenary.dropDate}
                </td>
                <td className="border text-center ">
                  {user.travelItenary.pickupTime}
                </td>
                <td className="border text-center ">
                  {user.travelItenary.dropTime}
                </td>
                <td className="border text-center ">{user.reservationStatus}
                  {/* <select name="" id="" className="w-[80%]">
                    <option value="">Pending</option>
                    <option value="">Enroute</option>
                    <option value="">Completed</option>
                    <option value="">Noshow</option>
                    <option value="">Overdue</option>
                    <option value="">Cancel</option>
                  </select> */}
                </td>
                {showUpdate && editId==user.reservationID ?<></>:  <td className="flex justify-center item-center ">
                  <button
                    className="bg-blue-900 text-white px-2"
                    onClick={() => handleEdit(user.reservationID)}
                  >
                    Edit
                  </button>
                  <button className="bg-red-900 text-white px-2">Delete</button>
                </td>}
              
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TestTable;
