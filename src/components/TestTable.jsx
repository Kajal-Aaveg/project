import axios from "axios";
import React, { useEffect, useState } from "react";
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SaveIcon from '@mui/icons-material/Save';

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
    seteditId(-1);
    console.log(reservID);
    console.log(pickLoc);
    console.log(dropLoc);
    console.log(pickD);
    console.log(dropD);
    console.log(pickT);
    console.log(dropT);
    console.log(reservStatus);
  };

  const handleCancel = () => {
seteditId(-1);
  }

  const [show,setShow] = useState(false);

  function openTerms(id){
    console.log(id);
      setShow(id);
  }

  function closeTerms(){
      setShow(false)
  }


  function getDaysInBetween(startDateStr, endDateStr){
    // Parse the start and end dates from their string representations
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

    // Calculate the difference in milliseconds
    const timeDifference = endDate - startDate;

    // Calculate the difference in days
    const daysDifference = timeDifference / (1000 * 3600 * 24);

    // Round to the nearest whole number to get the number of days
    // console.log(Math.round(daysDifference));
    return Math.round(daysDifference);
  }



  return (
    <div className="relative">
      {/* <div>
            <form >
                <input type="text" placeholder='Enter Name'  className='border'  />
                <input type="text" placeholder='Enter Email' className='border' />
                <button className='bg-green-600 px-2 text-white'>Add</button>
            </form>
        </div> */}
      <table>
        <thead>
          <tr className="bg-blue-950 text-white ">
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
                <td className="w-[10%] border ">
                  <input
                    type="text"
                    value={reservID}
                    onChange={(e) => setreservID(e.target.value)} className="w-full px-2"
                  />
                </td>
                <td className="w-[15%] border" >
                  <input
                    type="text"
                    value={pickLoc}
                    onChange={(e) => setpickLoc(e.target.value)} className="w-full px-2"
                  />
                </td>
                <td className="w-[15%] border">
                  <input
                    type="text"
                    value={dropLoc}
                    onChange={(e) => setdropLoc(e.target.value)} className="w-full px-2"
                  />
                </td>
                <td className="w-[10%] border">
                  <input
                    type="date"
                    value={pickD}
                    onChange={(e) => setpickD(e.target.value)} className="w-full px-2"
                  />
                </td>
                <td className="w-[10%] border">
                  <input 
                    type="date"
                    value={dropD}
                    onChange={(e) => setdropD(e.target.value)} className="w-full px-2"
                  />
                </td>
                <td className="w-[10%] border">
                  {/* <input
                    type="time"
                    value={pickT}
                    onChange={(e) => setpickT(e.target.value)} className="w-full px-2"
                  /> */}
                  <select
                    value={dropT}
                    onChange={(e) => setpickT(e.target.value)} className="w-full px-2"
                  >
                    <option value="08:00">8:00 AM</option>
                    <option value="09:00">9:00 PM</option>
                    {/* Add more options as needed */}
                  </select>
                </td>
                {/* <td><input type="time" value={dropT} onChange={e => setdropT(e.target.value)}/></td> */}
                <td className="w-[10%] border">
                  <select
                    value={dropT}
                    onChange={(e) => setdropT(e.target.value)} className="w-full px-2"
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
                <td className="w-[10%] border">
                  <select className="w-full px-2"
                    value={reservStatus}
                    onChange={(e) => setreservStatus(e.target.value)}>
                    <option value="Pending">Pending</option>
                    <option value="Enroute">Enroute</option>
                    <option value="Completed">Completed</option>
                    <option value="Noshow">Noshow</option>
                    <option value="Overdue">Overdue</option>
                    <option value="Cancel">Cancel</option>
                    {/* Add more options as needed */}
                  </select>
                </td >
                <td className="flex justify-center items-center ">
                  <button className=" px-6 py-2 text-gray-800" onClick={() => handleUpdate()}><SaveIcon/></button>
                  <button className=" py-2 pr-6 text-gray-800" onClick={() => handleCancel(user.reservationID)}><CancelIcon/></button>
                </td>
              </tr>
            ) : (
              <tr key={index}>
                <td className="border text-center px-2 ">{user.reservationID}</td>
                <td className="border text-center px-2 ">
                  {user.travelItenary.pickupLocation}
                </td>
                <td className="border text-center px-2 ">
                  {user.travelItenary.dropLocation}
                </td>
                <td className="border text-center px-2 ">
                  {user.travelItenary.pickupDate}
                </td>
                <td className="border text-center px-2 ">
                  {user.travelItenary.dropDate}
                </td>
                <td className="border text-center px-2 ">
                  {user.travelItenary.pickupTime}
                </td>
                <td className="border text-center px-2 ">
                  {user.travelItenary.dropTime}
                </td>
                <td className="border text-center px-2 ">{user.reservationStatus}
                </td>
                <td className="flex justify-center item-center ">
                  <button
                    className="px-6 py-2 text-gray-800"
                    onClick={() => handleEdit(user.reservationID)}
                  >
                    <EditIcon/>
                  </button>
                  {show===user.reservationID?<>
               <div className="w-full mt-2 block overflow-y-auto absolute left-40 top-11 ">
                      <div className="w-[70%] bg-[#EBEBEB] px-4 overflow-auto ">
                        <div className="bg-[#EBEBEB] w-full p-4  rounded mb-4 flex justify-between">
                        <span className='pr-2 absolute left-[910px] top-1 cursor-pointer'onClick={closeTerms}><CancelIcon /></span>
                          <div>
                            <div className="font-bold text-black text-base">
                              Pick-Up
                            </div>
                            <div className="text-[#2F2F2F] mt-1 text-sm font-normal">
                              {user?.travelItenary?.pickupLocation}
                            </div>
                            <div className="text-[#092C85] mt-1 text-sm font-semibold">
                              {user?.travelItenary?.pickupDate}
                            </div>
                          </div>
                          <div className="p-4">
                            <div className="text-center text-xs mb-1 inline-flex justify-center items-center w-full">
                              <span className="max-sm:block">-----</span>
                              {getDaysInBetween(user?.travelItenary?.pickupDate,user?.travelItenary?.dropDate) + 1} Days
                              <span className="max-sm:block">-----</span>
                            </div>
                          </div>
                          <div>
                            <div className="font-bold text-black">Drop-off</div>
                            <div className="text-[#2F2F2F] mt-1 text-sm font-normal">
                              {user?.travelItenary?.dropLocation}
                          </div>
                            <div className="text-[#092C85] mt-1 text-sm font-semibold">
                              {user?.travelItenary?.dropDate}
                            </div>
                          </div>
                        </div>
                        <div className="bg-white w-full pt-4 pl-4 pr-4  rounded block border-2 border-[#EBEBEB]">
                          <div className="flex">
                            <div className="w-full flex items-center">
                              <img
                                // src={(user?.car?.src) ? process.env.PUBLIC_URL +
                                //   "/images/" + user?.car?.src.split(" ").join("") + ".png" : ""}
                                src="https://media.istockphoto.com/id/1189903200/photo/red-generic-sedan-car-isolated-on-white-background-3d-illustration.jpg?s=612x612&w=0&k=20&c=uRu3o_h5FVljLQHS9z0oyz-XjXzzXN_YkyGXwhdMrjs="
                                alt=""
                                onError={(e) => {
                                  e.target.src = "../static/staticcarimage.png";
                                }}
                                className="object-cover"
                              />
                            </div>
                            <div className="w-full py-2 pb-4">
                              <div className="font-bold text-base">
                                {user?.car?.type}
                              </div>
                              <div className="mt-1 text-sm">{user?.car?.title}</div>
                              
                            </div>
                          </div>
                        </div>
                        {user.extras.length > 0 ? 
                        <>
                        <div className="text-2xl font-bold mt-4 mb-4">
                          Extras 
                        </div>
                        {user.extras.map((item, index) => (
                          <>
                            <div className="bg-[#EBEBEB] w-full p-4  rounded mb-4 flex justify-between">
                          <div>
                            {index + 1}{". "}{item.name}
                          </div>
                        </div>
                          </>
                        ))
                        }
                        </> 
                        : 
                        <></>}
                      </div>
                    </div>    
      {/* <div className="w-full mt-2 block h-[400px] absolute overflow-y-auto">
        <div className="full">
        <div className="font-bold text-black text-base">
                              Pick-Up
                            </div>
                            <div className="text-[#2F2F2F] mt-1 text-sm font-normal">
                              {user?.travelItenary?.pickupLocation}
                            </div>
        </div>
      </div> */}
                  </>:
                  <button className="py-2 pr-6 text-gray-800 "  onClick={()=>openTerms(user.reservationID)}><VisibilityIcon/></button>}

                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
     
    </div>
  );
}

export default TestTable;
