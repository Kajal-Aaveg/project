import React, { useRef, useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import SpeedIcon from '@mui/icons-material/Speed';
import DialpadIcon from '@mui/icons-material/Dialpad';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CancelIcon from '@mui/icons-material/Cancel';

// import {Formik} from "formik"
import * as yup from 'yup';




import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";

    

function Form() {
    const startLocation = useRef(null);
    const pickUpLocation = useRef(null);
    const totalHours = useRef(null);
    const vehicleSearchText = useRef(null);
    const vehicleClass = useRef(null);
    const makeAndModel = useRef(null);
    const kmOut = useRef(null);
    const kmIn = useRef(null);
    const customerSearch = useRef(null);
    const driverS = useRef(null);
    const bookingStatus = useRef(null)
    const assignToStaff = useRef(null);
    const sourceBookings = useRef(null);
    const referencE = useRef(null);
    const rentAmountFor = useRef(null);
    const rentAmount = useRef(null);
    const trafficFine = useRef(null);
    const salikAmount = useRef(null);
    const extraMileageCharge = useRef(null);
    const additionalInformation = useRef(null);

    const fileUploadClick = useRef(null);


    const [value, setValue] = useState(new Date(''));
    


    const [valueD, setValueD] = useState(new Date(''));
    const [valueTotalDays, setValueTotalDays] = useState(new Date(''));
    const [valueTD, setValueTD] = useState(new Date(''));

    const [fuelData, setData] = useState(0);
    const [fuelValue, setRangeData] = useState(0);

    const [file, setFile] = useState('');
    // const [setShow] = useState(false);

    const validationForm = yup.object().shape({
        name: yup.string().required('Name is required'),
        number: yup.string().email('Invalid email').required('Email is required'),
        
      });


    const handleSaveForm = () => {
        // console.log(startLocation.current.value);
        // console.log(pickUpLocation.current.value);
        // console.log(totalHours.current.value);
        // console.log(vehicleSearchText.current.value);
        // console.log(vehicleClass.current.value);
        // console.log(makeAndModel.current.value);
        // console.log(kmOut.current.value);
        // console.log(kmIn.current.value);
        // console.log(customerSearch.current.value);
        // console.log(driverS.current.value);
        // console.log(data);
        // console.log(dataValue);
        // console.log(bookingStatus.current.value);
        // console.log(value);

        const formDataSubmit = {
            startLoc: startLocation.current.value,
            pickUpLoc: pickUpLocation.current.value,
            totalHrs: totalHours.current.value,
            vehicleSearch: vehicleSearchText.current.value,
            vehicleCls: vehicleClass.current.value,
            makeAndModel: makeAndModel.current.value,
            kOut: kmOut.current.value,
            kIn: kmIn.current.value,
            customerS: customerSearch.current.value,
            driverS: driverS.current.value,
            fuelOut: fuelData,
            fuelIn: fuelValue,
            bookingS: bookingStatus.current.value,
            startDate: value,
            assignStaff: assignToStaff.current.value,
            srcBooking: sourceBookings.current.value,
            ref: referencE.current.value,
            rentAmtFor: rentAmountFor.current.value,
            rentAmt: rentAmount.current.value,
            trafficF: trafficFine.current.value,
            salikAmt: salikAmount.current.value,
            mileageCharge: extraMileageCharge.current.value,
            additionalInfo: additionalInformation.current.value,
            pickUpDate: valueD,
            totalDays: valueTotalDays,
            tDays: valueTD,
            fileUpload: fileUploadClick.current.value

        }
        console.log(formDataSubmit);
        console.log(validationForm);


        // YUP VALIDATION

    validationForm.validate({ })

    }

    const handleChange = (e) => {

        console.log(e.target.files);
            setFile(URL.createObjectURL(e.target.files[0]));
    }


    const handleDivClick = () => {

        fileUploadClick.current.click();
        // console.log("hello");
    }
    function closeTerm() {
        setFile('');
        // setShow(false);
    }

    


    return (
        <>
            <div className="w-[100%] px-[15px] h-[full] ">
                <div className="w-[100%] px-[15px] ">
                    <div className="flex">
                        <div className="w-[50%] max-sm:w-full p-3 flex  ">
                            <div className="  text-[white] text-xs h-[5vh] mt-[10px] "><ArrowBackIcon className="bg-[#ed8413] rounded-[100px]" /></div>
                            <h3 className="ml-[10px] text-[26px] max-sm:text-[20px] max-sm:pt-[7px] max-sm:font-semibold ">Add Booking</h3>
                        </div>
                        <div className="w-[50%] max-sm:w-full p-3">
                            <div className="w-[28%] flex max-sm:w-full max-sm:relative max-sm:left-[59px] relative left-[450px] top-[2.5px] bottom-[2.5px]">
                                <div className="mr-[3px] text-[#808080] " ><PersonIcon className=" max-sm:text-[15px] " /></div>
                                <h6 className="align-center text-[#4D4D4D] font-[500] max-sm:text-[12px] max-sm:pt-[6px] ">Admin User</h6>
                                <div className="align-center text-[#4D4D4D]" ><ArrowDropDownIcon className=" max-sm:text-[15px]" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[100%] text-right">
                        <ul className="flex p-3 ">
                            <li className="p-[15px] text-[#495057] text-[12px] border border-b-0 "><a href="#">Booking Info</a></li>
                            <li className="p-[15px] text-[#495057] text-[12px] border border-b-0"><a href="#">Vehicle Damage Info</a></li>
                        </ul>
                    </div>

                    <div className="w-[100%] mt-[15px] px-[15px] border-slate-300  h-[full] rounded-xl shadow-2xl">
                        <div className="flex max-sm:flex-col  max-sm:items-center">
                            <div className="w-[75%] border border-slate-200 shadow-md m-[10px] p-[15px] max-sm:w-full">
                                <h1 className="w-[70%] p-[10px] text-[15px] text-[#061f65] font-bold ">START/PICK UP</h1>
                                <div className="flex items-center max-sm:block ">
                                    <div className="w-[30%] p-[4px] border-none max-sm:w-full ">
                                        <h1 className="w-[70%] text-[13px] text-slate-600 font-semibold">Start Date *</h1>
                                        <div className="w-[90%] border border-slate-300 mt-2 rounded-3xl flex justify-between items-center ">
                                            <input type="date" value={value} name="date" onChange={(e) => setValue(e.target.value)} className="w-[90%] m-1 border-black rounded-3xl outline-0 text-[13px] p-[2px]" />
                                        </div>
                                    </div>
                                    <div className="w-[30%] p-[4px] max-sm:w-full">
                                        <h1 className="w-[70%] text-[13px] text-slate-600 font-semibold ">Start Location *</h1>
                                        <div className="w-[90%] border border-slate-300 rounded-3xl mt-2">
                                            <input type="text" ref={startLocation} className="w-[75%] m-1 rounded-3xl outline-0 text-[13px] p-[2px]" />
                                            <span><LocationOnOutlinedIcon /></span>
                                        </div>
                                    </div>
                                    <div className="w-[30%] p-[4px] max-sm:w-full ">
                                        <h1 className="w-[70%] text-[13px] text-slate-600 font-semibold">Pick Up Date *</h1>
                                        <div className="w-[90%] border border-slate-300 rounded-3xl mt-2">
                                            <input type="date" value={valueD} name="date" onChange={(val) => setValueD(val.target.value)} className="w-[90%] m-1 border-black rounded-3xl outline-0 text-[13px] p-[2px]" />
                                        </div>
                                    </div>
                                    <div className="w-[30%] p-[4px] max-sm:w-full ">
                                        <h1 className="w-[70%] text-[13px] text-slate-600 font-semibold">Pick Up Location</h1>
                                        <div className="w-[90%] border border-slate-300 rounded-3xl mt-2">
                                            <input type="text" ref={pickUpLocation} className="w-[75%] m-1 rounded-3xl outline-0 text-[13px] p-[2px]" />
                                            <span><LocationOnOutlinedIcon /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[40%] border border-slate-200 shadow-md m-[10px] p-[15px] max-sm:w-full ">
                                <h1 className="p-[10px] text-[15px] text-[#061f65] font-bold ">DAYS/ HOURS</h1>
                                <div className="flex max-sm:block ">
                                    <div className="w-[70%] p-[4px] max-sm:w-full  ">
                                        <h1 className="w-[70%] text-[13px] text-slate-600 font-semibold ">Total Days</h1>
                                        <div className="w-[90%] flex border border-slate-300  rounded-3xl mt-2">
                                            <input type="date" value={valueTotalDays} name="date" onChange={(td) => setValueTotalDays(td.target.value)} className="w-[90%] m-1 rounded-3xl outline-0 text-[13px] p-[2px] " />
                                        </div>
                                    </div>
                                    <div className="w-[70%] p-[4px] max-sm:w-full ">
                                        <h1 className="w-[70%] text-[13px] text-slate-600 font-semibold">Total Hours</h1>
                                        <div className="w-[90%] border border-slate-300  rounded-3xl mt-2">
                                            <input type="text" name="number" ref={totalHours} className="w-[75%] m-1 rounded-3xl outline-0 text-[13px] p-[2px]" />
                                            <span><AccessTimeIcon /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div>
                            <div className="w-[98.2%] border border-b-0 border-slate-200 m-[10px] p-[15px] max-sm:mb-0 max-sm:pb-15px  ">
                                <h1 className="w-[70%] p-[10px] text-[15px] text-[#061f65] font-bold">VEHICLE DETAILS</h1>
                                <div className="flex max-sm:block ">
                                    <div className="w-[32%] p-[4px] mr-[20px] max-sm:w-full  ">
                                        <h1 className="w-[70%] text-[13px] text-slate-600 font-semibold  ">Vehicle Search *</h1>
                                        <div className="w-[100%] border border-slate-300 flex rounded-3xl mt-2 ">
                                            <input ref={vehicleSearchText} type="text" name="vehiclename" placeholder="Enter Vehicle Search" className="w-[90%] m-1 rounded-3xl outline-0 text-[13px] p-[2px]" />
                                            <div className="w-[10%] flex items-center"><SearchOutlinedIcon className="text-slate-600" /></div>
                                        </div>
                                    </div>
                                    <div className="w-[32%] p-[4px] mr-[20px] max-sm:w-full ">
                                        <h1 className="w-[70%] text-[13px] text-slate-600 font-semibold ">Vehicle Class</h1>
                                        <div className="w-[100%] border border-slate-300 flex rounded-3xl mt-2">
                                            <input type="text" ref={vehicleClass} placeholder="Enter Vehicle Class" className="w-[90%] m-1 rounded-3xl outline-0 text-[13px] p-[2px] " />
                                            <div className="w-[10%] items-center"><DirectionsCarFilledIcon className="text-slate-600" /></div>
                                        </div>
                                    </div> 
                                    <div className="w-[32%] p-[4px] mr-[20px] max-sm:w-full ">
                                        <h1 className="w-[70%] text-[13px] text-slate-600 font-semibold ">Make and Model *</h1>
                                        <div className="w-[100%] flex border border-slate-300 rounded-3xl mt-2">
                                            <input type="text" ref={makeAndModel} placeholder="Enter Make and Model" className="w-[90%] m-1 rounded-3xl outline-0 text-[13px] p-[2px] " />
                                            <div className="w-[10%] items-center"><DirectionsCarFilledIcon className="text-slate-600" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[98.2%] border border-t-0 border-slate-200 shadow-md mt-[-10px] m-[10px] p-[15px] max-sm:pt-0  ">
                                <div className="flex max-sm:block ">
                                    <div className="w-[32%] p-[4px] mr-[40px] max-sm:w-full ">
                                        <h1 className="w-[70%] text-[13px] text-slate-600 font-semibold ">KM Out</h1>
                                        <div className="w-[100%] flex border border-slate-300  rounded-3xl mt-2">
                                            <input type="text" ref={kmOut} placeholder="Enter KM Out" className="w-[90%] m-1 rounded-3xl outline-0 text-[13px] p-[2px]" />
                                            <div className="w-[10%] flex items-center"><SpeedIcon className="text-slate-600" /></div>
                                        </div>
                                    </div>
                                    <div className="w-[32%] p-[4px] mr-[40px] max-sm:w-full ">
                                        <h1 className="w-[70%] text-[13px] text-slate-600 font-semibold ">KM In</h1>
                                        <div className="w-[100%] flex border border-slate-300  rounded-3xl mt-2">
                                            <input type="text" ref={kmIn} placeholder="Enter KM In" className="w-[90%] m-1 rounded-3xl outline-0 text-[13px] p-[2px] " />
                                            <div className="w-[10%] flex items-center"><SpeedIcon className="text-slate-600" /></div>
                                        </div>
                                    </div>
                                    <div className="w-[15%] p-[4px] mr-[10px] max-sm:w-[90%] ">
                                        <h1 className="w-[100%] text-[13px] text-slate-600 font-semibold ">Fuel Level Out</h1>
                                        <input type="range" value={fuelData} onChange={(e) => setData(e.target.value)} className="w-full rounded-3xl mt-2 " />
                                        <p className="text-[13px] text-slate-700">{fuelData}%</p>
                                    </div>
                                    <div className="w-[15%] p-[4px] mr-[40px] max-sm:w-[90%] ">
                                        <h1 className="w-[100%] text-[13px] text-slate-600 font-semibold ">Fuel Level In</h1>
                                        <input type="range" value={fuelValue} onChange={(e) => setRangeData(e.target.value)} className="w-full rounded-3xl mt-2" />
                                        <p className="text-[13px] text-slate-700" >{fuelValue}%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[98.2%] border border-slate-200 shadow-md m-[10px] p-[15px]">
                                <h1 className="w-[70%] p-[10px] text-[15px] text-[#061f65] font-bold ">CUSTOMER DETAILS</h1>
                                <div className="flex max-sm:block ">
                                    <div className="w-[32%] p-[4px] mr-[40px] max-sm:w-full  ">
                                        <h1 className="w-[70%] text-[13px] text-slate-600 font-semibold ">Customer Search *</h1>
                                        <div className="w-[100%] flex border border-slate-300  rounded-3xl mt-2">
                                            <input type="text" ref={customerSearch} placeholder="Enter Customer Details" className="w-[90%] m-1 rounded-3xl outline-0 text-[13px] p-[2px] " />
                                            <div className="w-[10%] flex items-center"><SearchOutlinedIcon className="text-slate-600" /></div>
                                        </div>
                                    </div>
                                    <div className="w-[32%] p-[4px] mr-[40px] max-sm:w-full  ">
                                        <h1 className="w-[70%] text-[13px] text-slate-600 font-semibold ">Driver</h1>
                                        <div className="w-[100%] flex border border-slate-300  rounded-3xl mt-2">
                                            <input type="text" ref={driverS} className="w-[90%] m-1 rounded-3xl outline-0 text-[13px] p-[2px]  " />
                                            <div className="w-[10%] flex items-center"><SearchOutlinedIcon className="text-slate-600" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[98.2%] border border-b-0 border-slate-200 m-[10px] p-[15px] max-sm:mb-0 max-sm:pb-0 ">
                                <h1 className="w-[70%] p-[10px] text-[15px] text-[#061f65] font-bold ">STATUS</h1>
                                <div className="flex max-sm:block">
                                    <div className="w-[30%] p-[4px] mr-[40px] max-sm:w-full  ">
                                        <h1 className="w-[70%] text-[13px] text-slate-600 font-semibold ">Booking Status</h1>
                                        <div className="w-[100%] border border-slate-300 rounded-3xl mt-2 ">
                                            <select ref={bookingStatus} className="w-[97.5%] m-1 rounded-3xl outline-0 text-[13px] p-[2px]">
                                                <option value="Upcoming" className="text-[13px] text-slate-600 font-normal " >Upcoming </option>
                                                <option value="Ongoing" className="text-[13px] text-slate-600 font-normal " >Ongoing</option>
                                                <option value="Completed" className="text-[13px] text-slate-600 font-normal " >Completed</option>
                                                <option value="Cancelled" className="text-[13px] text-slate-600 font-normal " >Cancelled</option>
                                                <option value="Overdue" className="text-[13px] text-slate-600 font-normal " >Overdue</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="w-[30%] p-[4px] mr-[40px] max-sm:w-full ">
                                        <h1 className="w-[70%] text-[13px] text-slate-600 font-semibold ">Assign to staff</h1>
                                        <div className="w-[100%] border border-slate-300  rounded-3xl mt-2 ">
                                            <select ref={assignToStaff} className="w-[97.5%] m-1 rounded-3xl outline-0 text-[13px] p-[2px] ">
                                                <option value="staff1" className="text-[13px] text-slate-600 font-normal " >staff1</option>
                                                <option value="staff2" className="text-[13px] text-slate-600 font-normal " >staff2</option>
                                                <option value="staff3" className="text-[13px] text-slate-600 font-normal " >staff3</option>
                                                <option value="staff4" className="text-[13px] text-slate-600 font-normal " >staff4</option>
                                                <option value="staff5" className="text-[13px] text-slate-600 font-normal " >staff5</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="w-[30%] p-[4px] mr-[40px] max-sm:w-full  ">
                                        <h1 className="w-[70%] text-[13px] text-slate-600 font-semibold ">Source of Bookings</h1>
                                        <div className="w-[100%] border border-slate-300  rounded-3xl mt-2 ">
                                            <select ref={sourceBookings} className="w-[97.5%] m-1 rounded-3xl outline-0 text-[13px] p-[2px] ">
                                                <option value="Booking1" className="text-[13px] text-slate-600 font-normal " >Booking1</option>
                                                <option value="Booking2" className="text-[13px] text-slate-600 font-normal " >Booking2</option>
                                                <option value="Booking3" className="text-[13px] text-slate-600 font-normal " >Booking3</option>
                                                <option value="Booking4" className="text-[13px] text-slate-600 font-normal " >Booking4</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[98.2%] border border-t-0 border-slate-200 shadow-md mt-[-10px] m-[10px] p-[15px] max-sm:mt-[0px] max-sm:pt-0  ">
                                <div className="flex max-sm:block">
                                    <div className="w-[30%] p-[4px] mr-[40px] max-sm:w-full ">
                                        <h1 className="w-[70%] text-[13px] text-slate-600 font-semibold ">Ref #</h1>
                                        <div className="w-[100%] flex border border-slate-300  rounded-3xl">
                                            <input type="text" ref={referencE} className="w-[90%] m-1 rounded-3xl" />
                                            <div className="w-[10%] flex items-center"><DialpadIcon className="text-slate-600 " /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[98.2%] border border-slate-200 m-[10px] p-[15px]">
                                <h1 className="w-[100%] p-[10px] text-[15px] text-[#061f65] font-bold">UPLOAD SIGNED CONTRACT</h1>
                                <div className="flex ">
                                    <div className="w-[100%] p-[4px] mr-[40px]">
                                        <div className="w-[100%] bg-slate-100 h-[30vh] pt-2">
                                            <div className="w-[12%] h-[25vh] m-[10px] border border-dashed border-slate-500 relative cursor-pointer overflow-hidden flex justify-center items-center max-sm:w-full">
                                                <input type="file" ref={fileUploadClick} onChange={handleChange} className="w-[90] m-1 hidden " />
                                                {
                                                    file == '' ?
                                                        <>
                                                        <div onClick={()=> handleDivClick()} >
                                                            <div className="text-center p-[15px] pb-[0px] text-blue-500 "><FileUploadIcon /></div>
                                                            <p className="text-sm text-center text-[#90a0b1] font-bold ">Drag &amp; Drop Contract Document (PDF, JPEG &amp; PNG)</p>
                                                        </div>
                                                        </>
                                                        :
                                                        <><img src={file} className="w-full object-contain   " /> 
                                                        <span className="cursor-pointer " ><CancelIcon onClick={() => closeTerm()} className="text-[18px] absolute top-[8px] left-[100px] m-[1px] "/></span> </>
                                                }

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[98.2%] border border-b-0 border-slate-200 m-[10px] p-[15px] max-sm:mb-[0px]  ">
                                <div className="flex max-sm:block">
                                    <div className="w-[30%] p-[4px] mr-[40px] max-sm:w-full ">
                                        <h1 className="w-[70%] text-[13px] text-slate-600 font-semibold ">Rent amount for</h1>
                                        <div className="w-[100%] border border-slate-300  rounded-3xl mt-2 ">
                                            <select ref={rentAmountFor} className="w-[97.5%] m-1 rounded-3xl outline-0 text-[13px] p-[2px] ">
                                                <option value="Rent1" className="text-[13px] text-slate-600 font-normal " >Rent1</option>
                                                <option value="Rent2" className="text-[13px] text-slate-600 font-normal " >Rent2</option>
                                                <option value="Rent2" className="text-[13px] text-slate-600 font-normal " >Rent3</option>
                                                <option value="Rent4" className="text-[13px] text-slate-600 font-normal " >Rent4</option>
                                                <option value="Rent5" className="text-[13px] text-slate-600 font-normal " >Rent5</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="w-[30%] p-[4px] mr-[40px] max-sm:w-full">
                                        <h1 className="w-[70%] text-[13px] text-slate-600 font-semibold ">Rent Amount</h1>
                                        <div className="w-[100%] flex border border-slate-300 rounded-3xl mt-2">
                                            <input type="text" ref={rentAmount} className="w-[90%] m-1 rounded-3xl outline-0 text-[13px] p-[2px]" />
                                            <div className="w-[10%] flex items-center"><AttachMoneyIcon className="text-slate-600 " /></div>
                                        </div>
                                    </div>
                                    <div className="w-[30%] p-[4px] mr-[40px] max-sm:w-full ">
                                        <h1 className="w-[70%] text-[13px] text-slate-600 font-semibold ">Total Days</h1>
                                        <div className="w-[100%] border border-slate-300  rounded-3xl mt-2">
                                            <input type="date" value={valueTD} name="date" onChange={(totalD) => setValueTD(totalD.target.value)} className="w-[95%] m-1 rounded-3xl outline-0 text-[13px] p-[2px]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[98.2%] border border-t-0 border-slate-200 shadow-md mt-[-10px] m-[10px] p-[15px] max-sm:pt-[0px] ">
                                <div className="flex max-sm:block"> 
                                    <div className="w-[30%] p-[4px] mr-[40px] max-sm:w-full ">
                                        <h1 className="w-[70%] text-[13px] text-slate-600 font-semibold ">Traffic fine</h1>
                                        <div className="w-[100%] flex border border-slate-300  rounded-3xl mt-2 ">
                                            <input type="text" ref={trafficFine} className="w-[90%] m-1 rounded-3xl outline-0 text-[13px] p-[2px] " />
                                            <div className="w-[10%] flex items-center"><AttachMoneyIcon className="text-slate-600 " /></div>
                                        </div>
                                    </div>
                                    <div className="w-[30%] p-[4px] mr-[40px] max-sm:w-full">
                                        <h1 className="w-[70%] text-[13px] text-slate-600 font-semibold ">Salik</h1>
                                        <div className="w-[100%] flex border border-slate-300  rounded-3xl mt-2">
                                            <input type="text" ref={salikAmount} className="w-[90%] m-1 rounded-3xl outline-0 text-[13px] p-[2px] " />
                                            <div className="w-[10%] flex items-center"><AttachMoneyIcon className="text-slate-600 " /></div>
                                        </div>
                                    </div>
                                    <div className="w-[30%] p-[4px] mr-[40px] max-sm:w-full">
                                        <h1 className="w-[70%] text-[13px] text-slate-600 font-semibold ">Extra Mileage Charge</h1>
                                        <div className="w-[100%] flex border border-slate-300 rounded-3xl mt-2 ">
                                            <input type="text" ref={extraMileageCharge} className="w-[90%] m-1 rounded-3xl outline-0 text-[13px] p-[2px] " />
                                            <div className="w-[10%] flex items-center"><AttachMoneyIcon className="text-slate-600 " /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[98.2%] mt-[-10px] m-[10px] p-[15px]">
                                <div className="">
                                    <div className="w-[50%] p-[4px] mr-[40px] max-sm:w-full ">
                                        <h1 className="w-[70%] text-[13px] text-slate-600 font-semibold ">Additional Information</h1>
                                        <textarea ref={additionalInformation} id="message" rows="5" class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white mt-2 outline-0 text-[13px] p-[5px]" placeholder="Additional Information"></textarea>
                                    </div>
                                    <div className="w-[100%] p-[4px] mr-[40px] mt-10 border-t border-slate-200 ">
                                        <button onClick={handleSaveForm} type="button" className="w-[8%] h-[5vh] bg-[#3595FF] shadow-[0px_5px_10px_3px_rgba(88,103,221,0.19)] rounded-2xl mt-5 mr-[5px] text-white text-xs max-sm:w-[25%] max-sm:h-[4vh] max-sm:rounded-3xl ">Save</button>
                                        <button type="button" className="w-[8%] h-[5vh] bg-[#ebf6fa] shadow-[0px_5px_10px_3px_rgba(88,103,221,0.19)] rounded-2xl text-xs max-sm:w-[25%] max-sm:h-[4vh] max-sm:rounded-3xl ">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form;