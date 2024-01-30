import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';

function TableData() {

    // const travelItenary = [];

    const dataa = [
       
        {
          "travelItenary": {
            "reservationType": "0",
            "pickupLocation": "Dubai Marina - Dubai - United Arab Emirates",
            "dropLocation": "Dubai Marina - Dubai - United Arab Emirates",
            "pickupDate": "Nov,26,2023",
            "pickupTime": "2:00",
            "dropDate": "Nov,27,2023",
            "dropTime": "10:30",
            "residency": "",
            "age": "25"
          },
          "_id": "655f055644b444bca9e94b13",
          "reservationID": "RES1700726102349",
          "userID": "US2986397905",
          "car": {
            "type": "Compact Cars",
            "typeID": "1",
            "src": "Kia Picanto",
            "title": "Kia Picanto 1.2L or similar",
            "_id": "655f055644b444bca9e94b14"
          },
          "extras": [
            {
              "id": "01",
              "name": "CDW",
              "title": "Collision Damage Waiver (CDW)",
              "checked": false,
              "img": "",
              "description": "Your solid back-up plan. With CDW, you are protected if your personal insurance or credit card doesn't cover you for losses from a stolen or damaged rental.",
              "price": { "daily": 40 }
            }
          ],
          "currencyInfo": {
            "currency": "INR",
            "currencyRate": 22.67,
            "_id": "655f055644b444bca9e94b15"
          },
          "payment": "Completed",
          "payType": "payNow",
          "reservationDate": "23-11-2023",
          "reservationDays": 1,
          "reservationStatus": "Pending",
          "allocatedCarID": "",
          "allocatedDriverID": "",
          "promoCode": ""
        },
        {
          "travelItenary": {
            "reservationType": "0",
            "pickupLocation": "Dubai Marina - Dubai - United Arab Emirates",
            "dropLocation": "Dubai Marina - Dubai - United Arab Emirates",
            "pickupDate": "Nov,26,2023",
            "pickupTime": "8:30",
            "dropDate": "Nov,27,2023",
            "dropTime": "12:00",
            "residency": "",
            "age": "25"
          },
          "_id": "655f39e34c1a8c92eb37d63a",
          "reservationID": "RES1700739555339",
          "userID": "US2986397905",
          "car": {
            "type": "Compact Cars",
            "typeID": "1",
            "src": "Kia Picanto",
            "title": "Kia Picanto 1.2L or similar",
            "_id": "655f39e34c1a8c92eb37d63b"
          },
          "extras": [
            {
              "id": "01",
              "name": "CDW",
              "title": "Collision Damage Waiver (CDW)",
              "checked": false,
              "img": "",
              "description": "Your solid back-up plan. With CDW, you are protected if your personal insurance or credit card doesn't cover you for losses from a stolen or damaged rental.",
              "price": { "daily": 40 }
            }
          ],
          "currencyInfo": {
            "currency": "INR",
            "currencyRate": 22.67,
            "_id": "655f39e34c1a8c92eb37d63c"
          },
          "payment": "Completed",
          "payType": "payNow",
          "reservationDate": "23-11-2023",
          "reservationDays": 1,
          "reservationStatus": "Pending",
          "allocatedCarID": "",
          "allocatedDriverID": "",
          "promoCode": "",
          "finalInvoice": false
        },
        {
          "travelItenary": {
            "reservationType": "0",
            "pickupLocation": "Dubai Marina - Dubai - United Arab Emirates",
            "dropLocation": "Dubai Marina - Dubai - United Arab Emirates",
            "pickupDate": "Nov,26,2023",
            "pickupTime": "3:00",
            "dropDate": "Nov,27,2023",
            "dropTime": "11:30",
            "residency": "",
            "age": "25"
          },
          "_id": "655f3a364c1a8c92eb37d645",
          "reservationID": "RES1700739638105",
          "userID": "US5548598378",
          "car": {
            "type": "Compact Cars",
            "typeID": "1",
            "src": "Kia Picanto",
            "title": "Kia Picanto 1.2L or similar",
            "_id": "655f3a364c1a8c92eb37d646"
          },
          "extras": [
            {
              "id": "01",
              "name": "CDW",
              "title": "Collision Damage Waiver (CDW)",
              "checked": false,
              "img": "",
              "description": "Your solid back-up plan. With CDW, you are protected if your personal insurance or credit card doesn't cover you for losses from a stolen or damaged rental.",
              "price": { "daily": 40 }
            }
          ],
          "currencyInfo": {
            "currency": "INR",
            "currencyRate": 22.67,
            "_id": "655f3a364c1a8c92eb37d647"
          },
          "payment": "Completed",
          "payType": "payNow",
          "reservationDate": "23-11-2023",
          "reservationDays": 1,
          "reservationStatus": "Pending",
          "allocatedCarID": "",
          "allocatedDriverID": "",
          "promoCode": "",
          "finalInvoice": false
        },
        // {
        //   "travelItenary": {
        //     "reservationType": "0",
        //     "pickupLocation": "Dubai Marina - Dubai - United Arab Emirates",
        //     "dropLocation": "Dubai Marina - Dubai - United Arab Emirates",
        //     "pickupDate": "Nov,26,2023",
        //     "pickupTime": "4:00",
        //     "dropDate": "Nov,27,2023",
        //     "dropTime": "9:30",
        //     "residency": "",
        //     "age": "25"
        //   },
        //   "_id": "655f3a3a4c1a8c92eb37d650",
        //   "reservationID": "RES1700739641862",
        //   "userID": "US5548598378",
        //   "car": {
        //     "type": "Compact Cars",
        //     "typeID": "1",
        //     "src": "Kia Picanto",
        //     "title": "Kia Picanto 1.2L or similar",
        //     "_id": "655f3a3a4c1a8c92eb37d651"
        //   },
        //   "extras": [
        //     {
        //       "id": "01",
        //       "name": "CDW",
        //       "title": "Collision Damage Waiver (CDW)",
        //       "checked": false,
        //       "img": "",
        //       "description": "Your solid back-up plan. With CDW, you are protected if your personal insurance or credit card doesn't cover you for losses from a stolen or damaged rental.",
        //       "price": { "daily": 40 }
        //     }
        //   ],
        //   "currencyInfo": {
        //     "currency": "INR",
        //     "currencyRate": 22.67,
        //     "_id": "655f3a3a4c1a8c92eb37d652"
        //   },
        //   "payment": "Completed",
        //   "payType": "payNow",
        //   "reservationDate": "23-11-2023",
        //   "reservationDays": 1,
        //   "reservationStatus": "Completed",
        //   "allocatedCarID": "",
        //   "allocatedDriverID": "",
        //   "promoCode": "",
        //   "finalInvoice": false
        // },
        // {
        //   "travelItenary": {
        //     "reservationType": "0",
        //     "pickupLocation": "Dubai Marina - Dubai - United Arab Emirates",
        //     "dropLocation": "Dubai Marina - Dubai - United Arab Emirates",
        //     "pickupDate": "Nov,26,2023",
        //     "pickupTime": "5:00",
        //     "dropDate": "Nov,27,2023",
        //     "dropTime": "9:00",
        //     "residency": "",
        //     "age": "25"
        //   },
        //   "_id": "655f3a424c1a8c92eb37d65b",
        //   "reservationID": "RES1700739650764",
        //   "userID": "US5548598378",
        //   "car": {
        //     "type": "Compact Cars",
        //     "typeID": "1",
        //     "src": "Kia Picanto",
        //     "title": "Kia Picanto 1.2L or similar",
        //     "_id": "655f3a424c1a8c92eb37d65c"
        //   },
        //   "extras": [
        //     {
        //       "id": "01",
        //       "name": "CDW",
        //       "title": "Collision Damage Waiver (CDW)",
        //       "checked": false,
        //       "img": "",
        //       "description": "Your solid back-up plan. With CDW, you are protected if your personal insurance or credit card doesn't cover you for losses from a stolen or damaged rental.",
        //       "price": { "daily": 40 }
        //     }
        //   ],
        //   "currencyInfo": {
        //     "currency": "INR",
        //     "currencyRate": 22.67,
        //     "_id": "655f3a424c1a8c92eb37d65d"
        //   },
        //   "payment": "Completed",
        //   "payType": "payNow",
        //   "reservationDate": "23-11-2023",
        //   "reservationDays": 1,
        //   "reservationStatus": "Completed",
        //   "allocatedCarID": "",
        //   "allocatedDriverID": "",
        //   "promoCode": "",
        //   "finalInvoice": false
        // },
        // {
        //   "travelItenary": {
        //     "reservationType": "0",
        //     "pickupLocation": "Dubai Marina - Dubai - United Arab Emirates",
        //     "dropLocation": "Dubai Marina - Dubai - United Arab Emirates",
        //     "pickupDate": "Nov,26,2023",
        //     "pickupTime": "1:30",
        //     "dropDate": "Nov,27,2023",
        //     "dropTime": "10:00",
        //     "residency": "",
        //     "age": "25"
        //   },
        //   "_id": "656026c596c12107eab6e59d",
        //   "reservationID": "RES1700800197013",
        //   "userID": "US5548598378",
        //   "car": {
        //     "type": "Compact Cars",
        //     "typeID": "1",
        //     "src": "Kia Picanto",
        //     "title": "Kia Picanto 1.2L or similar",
        //     "_id": "656026c596c12107eab6e59e"
        //   },
        //   "extras": [
        //     {
        //       "id": "01",
        //       "name": "CDW",
        //       "title": "Collision Damage Waiver (CDW)",
        //       "checked": false,
        //       "img": "",
        //       "description": "Your solid back-up plan. With CDW, you are protected if your personal insurance or credit card doesn't cover you for losses from a stolen or damaged rental.",
        //       "price": { "daily": 40 }
        //     }
        //   ],
        //   "currencyInfo": {
        //     "currency": "INR",
        //     "currencyRate": 22.67,
        //     "_id": "656026c596c12107eab6e59f"
        //   },
        //   "payment": "Completed",
        //   "payType": "payNow",
        //   "reservationDate": "24-11-2023",
        //   "reservationDays": 1,
        //   "reservationStatus": "Pending",
        //   "allocatedCarID": "",
        //   "allocatedDriverID": "",
        //   "promoCode": "",
        //   "finalInvoice": false
        // },
        // {
        //   "travelItenary": {
        //     "reservationType": "0",
        //     "pickupLocation": "Dubai Marina - Dubai - United Arab Emirates",
        //     "dropLocation": "Dubai Marina - Dubai - United Arab Emirates",
        //     "pickupDate": "Nov,26,2023",
        //     "pickupTime": "12:00",
        //     "dropDate": "Nov,27,2023",
        //     "dropTime": "12:00",
        //     "residency": "",
        //     "age": "25"
        //   },
        //   "_id": "6560270296c12107eab6e5a8",
        //   "reservationID": "RES1700800258791",
        //   "userID": "US5548598378",
        //   "car": {
        //     "type": "Compact Cars",
        //     "typeID": "1",
        //     "src": "Kia Picanto",
        //     "title": "Kia Picanto 1.2L or similar",
        //     "_id": "6560270296c12107eab6e5a9"
        //   },
        //   "extras": [
        //     {
        //       "id": "01",
        //       "name": "CDW",
        //       "title": "Collision Damage Waiver (CDW)",
        //       "checked": false,
        //       "img": "",
        //       "description": "Your solid back-up plan. With CDW, you are protected if your personal insurance or credit card doesn't cover you for losses from a stolen or damaged rental.",
        //       "price": { "daily": 40 }
        //     }
        //   ],
        //   "currencyInfo": {
        //     "currency": "INR",
        //     "currencyRate": 22.67,
        //     "_id": "6560270296c12107eab6e5aa"
        //   },
        //   "payment": "Completed",
        //   "payType": "payNow",
        //   "reservationDate": "24-11-2023",
        //   "reservationDays": 1,
        //   "reservationStatus": "Pending",
        //   "allocatedCarID": "",
        //   "allocatedDriverID": "",
        //   "promoCode": "",
        //   "finalInvoice": true
        // },
        // {
        //   "travelItenary": {
        //     "reservationType": "0",
        //     "pickupLocation": "Dubai Marina - Dubai - United Arab Emirates",
        //     "dropLocation": "Dubai Marina - Dubai - United Arab Emirates",
        //     "pickupDate": "Nov,26,2023",
        //     "pickupTime": "2:00",
        //     "dropDate": "Nov,27,2023",
        //     "dropTime": "7:00",
        //     "residency": "",
        //     "age": "25"
        //   },
        //   "_id": "65606cc9815f69a97196e589",
        //   "reservationID": "RES1700818120911",
        //   "userID": "US5548598378",
        //   "car": {
        //     "type": "Compact Cars",
        //     "typeID": "1",
        //     "src": "Kia Picanto",
        //     "title": "Kia Picanto 1.2L or similar",
        //     "_id": "65606cc9815f69a97196e58a"
        //   },
        //   "extras": [
        //     {
        //       "id": "01",
        //       "name": "CDW",
        //       "title": "Collision Damage Waiver (CDW)",
        //       "checked": false,
        //       "img": "",
        //       "description": "Your solid back-up plan. With CDW, you are protected if your personal insurance or credit card doesn't cover you for losses from a stolen or damaged rental.",
        //       "price": { "daily": 40 }
        //     }
        //   ],
        //   "currencyInfo": {
        //     "currency": "INR",
        //     "currencyRate": 22.67,
        //     "_id": "65606cc9815f69a97196e58b"
        //   },
        //   "payment": "Completed",
        //   "payType": "payNow",
        //   "reservationDate": "24-11-2023",
        //   "reservationDays": 1,
        //   "reservationStatus": "Pending",
        //   "allocatedCarID": "",
        //   "allocatedDriverID": "",
        //   "promoCode": "",
        //   "finalInvoice": true
        // }
      ]

      const [editId, setEditID] = useState(-1)
      const [data, setData] = useState(dataa);

      const handleEdit = (reservationID) => {
          setEditID(reservationID)
      }
      const handlesavechange=(id)=>{
            
           setEditID(-1);
      }

      const onChangeInput = (e, val) => {
        const { name, value } = e.target
        console.log(name +" "+ value);

        const editData = data.map((item) =>
          item.reservationID === reservationID && name ? { ...item, [name]: value } : item
        )
    
        setData(editData)
      }

      // const onChangeInput = (e, val) => {
      //   const { name, value } = e.target;
      //   // console.log(name + " " + value);
      
      //   const editData = data.map((item) =>
      //     item.reservationID === val.reservationID && name
      //       ? { ...item, travelItenary: { ...item.travelItenary, [name]: value } }
      //       : item
      //   );
      
      //   setData(editData);
      // };
  return (
    <div>
        <div className="w-full">
            <table className=' w-full '>
                <tr className='bg-blue-900 text-white '>
                    <th className='w-[10%] border' >Reservation ID</th>
                    <th className='w-[15%] border' >Pick Up Location</th>
                    <th className='w-[15%] border' >Drop Location</th>
                    <th className='w-[10%] border'>Pick Date</th>
                    <th className='w-[10%] border'>Drop Date</th>
                    <th className='w-[10%] border'>Pick Up Time</th>
                    <th className='w-[10%] border'>Drop Time</th>
                    <th className='w-[10%] border'>Reservation Status</th>
                    <th className='w-[10%] border'> Action</th>
                </tr>
                {data.map((val, index) =>   
                 (
                  val.reservationID === editId ?
                  <tr key={index}>
                    <td><input type="text" value={val.reservationID} /></td>
                    <td><input type="text" value={val.travelItenary.pickupLocation} onChange={(e) => onChangeInput(e, reservationID)}/></td>
                    <td><input type="text" value={val.travelItenary.dropLocation} /></td>
                    <td><input type="text" value={val.travelItenary.pickupDate} /></td>
                    <td><input type="text" value={val.travelItenary.dropDate} /></td>
                    <td><input type="text" value={val.travelItenary.pickupTime} /></td>
                    <td><input type="text" value={val.travelItenary.dropTime} /></td>
                    <td><input type="text" value={val.reservationStatus} /></td>
                    <td className='flex' ><div onClick={()=>handlesavechange(-1)}><SaveIcon /></div>
                    <div><CloseIcon/></div>
                    </td>
                  </tr>
                  :
                        <tr key={index}>
                            <td className='border text-center '>{val.reservationID}</td>
                            <td className='border text-center'>{val.travelItenary.pickupLocation}</td>
                            <td className='border text-center'>{val.travelItenary.dropLocation}</td>
                            <td className='border text-center'>{val.travelItenary.pickupDate}</td>
                            <td className='border text-center'>{val.travelItenary.dropDate}</td>
                            <td className='border text-center'>{val.travelItenary.pickupTime}</td>
                            <td className='border text-center'>{val.travelItenary.dropTime}</td>
                            <td className='border text-center'>{val.reservationStatus}</td>
                            <td className='flex justify-center items-center'>
                                        {/* <button  className='mr-3 py-4 text-blue-600'><></></button> */}
                                        <div className='w-[50%] py-3 px-5' onClick={() => handleEdit(val.reservationID) } ><EditIcon className=''/></div>
                                        {/* <button  className='mr-3 text-red-600'>View</button> */}
                                        <div className='w-[50%] py-3 px-5'><VisibilityIcon/></div>
                                    </td>

                        </tr>
                    )
                )}
            </table>
        </div>
</div>
    
  )
}

export default TableData