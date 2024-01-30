import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AirIcon from "@mui/icons-material/Air";
import SpeedIcon from "@mui/icons-material/Speed";
import TodayIcon from "@mui/icons-material/Today";
import DoneIcon from '@mui/icons-material/Done';
import SecurityIcon from '@mui/icons-material/Security';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ShieldIcon from '@mui/icons-material/Shield';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import NoCrashIcon from '@mui/icons-material/NoCrash';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const SubsPage = () => {

  const tenure = [
    {
      value: 'Month',
      label: '1 Month',
    },
    {
      value: 'Months',
      label: '3 Months',
    },
    {
      value: 'Months',
      label: '6 Months',
    },
    {
      value: 'Months',
      label: '9 Months',
    },
    {
      value: 'Months',
      label: '12 Months',
    },
  ];
  const mileage = [
    {
      value: 'Mileage',
      label: 'Unlimited',
    },
    
  ];
  const countries = [
    {
      value: 'countries',
      label: 'Afghanistan',
    },
    {
      value: 'countries',
      label: 'Albania',
    },
    {
      value: 'countries',
      label: 'Algeria',
    },
    {
      value: 'countries',
      label: 'Andorra',
    },
    {
      value: 'countries',
      label: 'Angola',
    },
    {
      value: 'countries',
      label: 'Antigua and Barbuda	',
    },
    {
      value: 'countries',
      label: 'Argentina',
    },
    {
      value: 'countries',
      label: 'Armenia',
    },
    {
      value: 'countries',
      label: 'Australia',
    },
    {
      value: 'countries',
      label: 'Austria',
    },
    {
      value: 'countries',
      label: 'Azerbaijan',
    },
    {
      value: 'countries',
      label: 'Bahamas',
    },
    {
      value: 'countries',
      label: 'Bahrain',
    },
    {
      value: 'countries',
      label: 'Bangladesh',
    },
    {
      value: 'countries',
      label: 'Barbados',
    },
    {
      label: 'Belarus',
    },
    {
      value: 'countries',
      label: 'Belgium',
    },
    {
      value: 'countries',
      label: 'Armenia',
    },
    {
      value: 'countries',
      label: 'Belize',
    },
    {
      value: 'countries',
      label: 'Benin',
    },
    {
      value: 'countries',
      label: 'Bhutan',
    },
    {
      value: 'countries',
      label: 'Bolivia',
    },
    {
      value: 'countries',
      label: 'Bosnia and Herzegovina	',
    },
    {
      value: 'countries',
      label: 'Botswana',
    },
    {
      value: 'countries',
      label: 'Brazil',
    },
    {
      value: 'countries',
      label: 'Brunei',
    },
    {
      value: 'countries',
      label: 'Bulgaria',
    },
    {
      value: 'countries',
      label: 'Burkina Faso',
    },
    {
      value: 'countries',
      label: 'Burundi',
    },
    {
      value: 'countries',
      label: 'Cabo Verde',
    },
    {
      value: 'countries',
      label: 'Cambodia',
    },
    {
      value: 'countries',
      label: 'Bahamas',
    },
    {
      value: 'countries',
      label: 'Cameroon',
    },
    {
      value: 'countries',
      label: 'Canada',
    },
    {
      value: 'countries',
      label: 'Central African Republic',
    },
    {
      value: 'countries',
      label: 'Chad',
    },
    {
      value: 'countries',
      label: 'Chile',
    },
    {
      value: 'countries',
      label: 'China',
    },
    {
      value: 'countries',
      label: 'Colombia',
    },
    {
      value: 'countries',
      label: 'Comoros',
    },
    {
      value: 'countries',
      label: 'Congo (Congo-Brazzaville)	',
    },
    {
      value: 'countries',
      label: 'Costa Rica',
    },
    {
      value: 'countries',
      label: 'Croatia',
    },
    {
      value: 'countries',
      label: 'Cuba',
    },
    {
      value: 'countries',
      label: 'Cyprus',
    },
    {
      value: 'countries',
      label: 'Czechia (Czech Republic)	',
    },
    {
      value: 'countries',
      label: 'Democratic Republic of the Congo	',
    },
    {
      value: 'countries',
      label: 'Denmark',
    },
    {
      value: 'countries',
      label: 'Djibouti',
    },
    {
      value: 'countries',
      label: 'Dominica',
    },
    {
      value: 'countries',
      label: 'Dominican Republic',
    },
    {
      value: 'countries',
      label: 'Ecuador',
    },
    {
      value: 'countries',
      label: 'Egypt',
    },
    {
      value: 'countries',
      label: 'El Salvador	',
    },
    {
      value: 'countries',
      label: 'Equatorial Guinea	',
    },
    {
      value: 'countries',
      label: 'Eritrea',
    },
    {
      value: 'countries',
      label: 'Estonia',
    },
    {
      value: 'countries',
      label: 'Eswatini',
    },
    {
      value: 'countries',
      label: 'Ethiopia',
    },
    {
      value: 'countries',
      label: 'Fiji',
    },
    {
      value: 'countries',
      label: 'Finland',
    },
    {
      value: 'countries',
      label: 'France',
    },
    {
      value: 'countries',
      label: 'Gabon',
    },
    {
      value: 'countries',
      label: 'Gambia',
    },
    {
      value: 'countries',
      label: 'Georgia',
    },
    {
      value: 'countries',
      label: 'Germany',
    },
    {
      value: 'countries',
      label: 'Ghana',
    },
    {
      value: 'countries',
      label: 'Greece',
    },
    {
      value: 'countries',
      label: 'Grenada',
    },
    {
      value: 'countries',
      label: 'Guatemala',
    },
    {
      value: 'countries',
      label: 'Guinea',
    },
    {
      value: 'countries',
      label: 'Guinea-Bissau	',
    },
    {
      value: 'countries',
      label: 'Guyana',
    },
    {
      value: 'countries',
      label: 'Haiti',
    },
    {
      value: 'countries',
      label: 'Holy See',
    },
    {
      value: 'countries',
      label: 'Honduras',
    },
    {
      value: 'countries',
      label: 'Hungary',
    },
    {
      value: 'countries',
      label: 'Iceland',
    },
    {
      value: 'countries',
      label: 'India',
    },
    {
      value: 'countries',
      label: 'Indonesia',
    },
    {
      value: 'countries',
      label: 'Iran',
    },
    {
      value: 'countries',
      label: 'Iraq',
    },
    {
      value: 'countries',
      label: 'Ireland',
    },
    {
      value: 'countries',
      label: 'Israel',
    },
    {
      value: 'countries',
      label: 'Italy',
    },
    {
      value: 'countries',
      label: 'Jamaica	',
    },
    {
      value: 'countries',
      label: 'Japan',
    },
    {
      value: 'countries',
      label: 'Jordan',
    },
    {
      value: 'countries',
      label: 'Kazakhstan',
    },
    {
      value: 'countries',
      label: 'Kenya',
    },
    {
      value: 'countries',
      label: 'Kiribati',
    },
    {
      value: 'countries',
      label: 'Kuwait',
    },
    {
      value: 'countries',
      label: 'Kyrgyzstan',
    },
    {
      value: 'countries',
      label: 'Laos',
    },
    {
      value: 'countries',
      label: 'Latvia',
    },
    {
      value: 'countries',
      label: 'Lebanon',
    },
    {
      value: 'countries',
      label: 'Lesotho',
    },
    {
      value: 'countries',
      label: 'Liberia',
    },
    {
      value: 'countries',
      label: 'Libya	',
    },
    {
      value: 'countries',
      label: 'Liechtenstein',
    },
    {
      value: 'countries',
      label: 'Lithuania',
    },
    {
      value: 'countries',
      label: 'Luxembourg',
    },
    {
      value: 'countries',
      label: 'Madagascar',
    },
    {
      value: 'countries',
      label: 'Malawi',
    },
    {
      value: 'countries',
      label: 'Malaysia',
    },
    {
      value: 'countries',
      label: 'Maldives',
    },
    {
      value: 'countries',
      label: 'Mali',
    },
    {
      value: 'countries',
      label: 'Malta',
    },
    {
      value: 'countries',
      label: 'Marshall Islands',
    },
    {
      value: 'countries',
      label: 'Mauritania',
    },
    {
      value: 'countries',
      label: 'Mauritius	',
    },
    {
      value: 'countries',
      label: 'Mexico',
    },
    {
      value: 'countries',
      label: 'Micronesia',
    },
    {
      value: 'countries',
      label: 'Moldova',
    },
    {
      value: 'countries',
      label: 'Monaco',
    },
    {
      value: 'countries',
      label: 'Mongolia',
    },
    {
      value: 'countries',
      label: 'Montenegro',
    },
    {
      value: 'countries',
      label: 'Morocco',
    },
    {
      value: 'countries',
      label: 'Mozambique',
    },
    {
      value: 'countries',
      label: 'Myanmar',
    },
    {
      value: 'countries',
      label: 'Namibia',
    },
    {
      value: 'countries',
      label: 'Nauru',
    },
    {
      value: 'countries',
      label: 'Nepal',
    },
    {
      value: 'countries',
      label: 'Netherlands',
    },
    {
      value: 'countries',
      label: 'New Zealand	',
    },
    {
      value: 'countries',
      label: 'Nicaragua',
    },
    {
      value: 'countries',
      label: 'Niger',
    },
    {
      value: 'countries',
      label: 'Nigeria',
    },
    {
      value: 'countries',
      label: 'North Korea	',
    },
    {
      value: 'countries',
      label: 'North Macedonia	',
    },
    {
      value: 'countries',
      label: 'Norway',
    },
    {
      value: 'countries',
      label: 'Oman',
    },
    {
      value: 'countries',
      label: 'Pakistan',
    },
    {
      value: 'countries',
      label: 'Palau	',
    },
    {
      value: 'countries',
      label: 'Palestine State		',
    },
    {
      value: 'countries',
      label: 'Panama',
    },
    {
      value: 'countries',
      label: 'Papua New Guinea',
    },
    {
      value: 'countries',
      label: 'Paraguay',
    },
    {
      value: 'countries',
      label: 'Peru',
    },
    {
      value: 'countries',
      label: 'Philippines',
    },
    {
      value: 'countries',
      label: 'Poland',
    },
    {
      value: 'countries',
      label: 'Portugal',
    },
    {
      value: 'countries',
      label: 'Qatar',
    },
    {
      value: 'countries',
      label: 'Romania',
    },
    {
      value: 'countries',
      label: 'Russia',
    },
    {
      value: 'countries',
      label: 'Rwanda',
    },
    {
      value: 'countries',
      label: 'Saint Kitts and Nevis',
    },
    {
      value: 'countries',
      label: 'Saint Lucia	',
    },
    {
      value: 'countries',
      label: 'Saint Vincent and the Grenadines	',
    },
    {
      value: 'countries',
      label: 'Samoa',
    },
    {
      value: 'countries',
      label: 'San Marino	',
    },
    {
      value: 'countries',
      label: 'Sao Tome and Principe	',
    },
    {
      value: 'countries',
      label: 'Saudi Arabia	',
    },
    {
      value: 'countries',
      label: 'Senegal',
    },
    {
      value: 'countries',
      label: 'Serbia',
    },
    {
      value: 'countries',
      label: 'Seychelles',
    },
    {
      value: 'countries',
      label: 'Sierra Leone	',
    },
    {
      value: 'countries',
      label: 'Singapore',
    },
    {
      value: 'countries',
      label: 'Slovakia',
    },
    {
      value: 'countries',
      label: 'Slovenia',
    },
    {
      value: 'countries',
      label: 'Solomon Islands',
    },
    {
      value: 'countries',
      label: 'Somalia',
    },
    {
      value: 'countries',
      label: 'South Africa',
    },
    {
      value: 'countries',
      label: 'South Korea',
    },
    {
      value: 'countries',
      label: 'South Sudan	',
    },
    {
      value: 'countries',
      label: 'Spain',
    },
    {
      value: 'countries',
      label: 'Sri Lanka	',
    },
    {
      value: 'countries',
      label: 'Sudan',
    },
    {
      value: 'countries',
      label: 'Suriname',
    },
    {
      value: 'countries',
      label: 'Sweden',
    },
    {
      value: 'countries',
      label: 'Switzerland',
    },
    {
      value: 'countries',
      label: 'Syria',
    },
    {
      value: 'countries',
      label: 'Tajikistan	',
    },
    {
      value: 'countries',
      label: 'Tanzania',
    },
    {
      value: 'countries',
      label: 'Thailand',
    },
    {
      value: 'countries',
      label: 'Timor-Leste',
    },
    {
      value: 'countries',
      label: 'Togo',
    },
    {
      value: 'countries',
      label: 'Tonga',
    },
    {
      value: 'countries',
      label: 'Trinidad and Tobago',
    },
    {
      value: 'countries',
      label: 'Tunisia	',
    },
    {
      value: 'countries',
      label: 'Turkey',
    },
    {
      value: 'countries',
      label: 'Turkmenistan',
    },
    {
      value: 'countries',
      label: 'Tuvalu',
    },
    {
      value: 'countries',
      label: 'Uganda',
    },
    {
      value: 'countries',
      label: 'Ukraine',
    },
    {
      value: 'countries',
      label: 'United Arab Emirates	',
    },
    {
      value: 'countries',
      label: 'United Kingdom	',
    },
    {
      value: 'countries',
      label: 'United States of America	',
    },
    {
      value: 'countries',
      label: 'Uruguay	',
    },
    {
      value: 'countries',
      label: 'Uzbekistan',
    },
    {
      value: 'countries',
      label: 'Vanuatu',
    },
    {
      value: 'countries',
      label: 'Venezuela',
    },
    {
      value: 'countries',
      label: 'Vietnam',
    },
    {
      value: 'countries',
      label: 'Yemen',
    },
    {
      value: 'countries',
      label: 'Zambia',
    },
    {
      value: 'countries',
      label: 'Zimbabwe',
    },
   
  ];
 

  return (
    <div className="w-full p-9 flex gap-8">
      <div className="w-[70%] px-4 "   >
          <div className=" mt-4 rounded drop-shadow border border-gray-300">
            <div className="flex">
            <div className="w-[50%] m-2 ">               
              <Box className="mt-2"
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 0, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id=""
          select
          label="Tenure"
          defaultValue="1"
          
        >
          {tenure.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
        </Box>
            </div>

            <div className="w-[50%] m-2 ">
        <Box className="mt-2"
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 0, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id=""
          select
          label="Mileage"
          defaultValue="1"
          
        >
          {mileage.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
        </Box>
        </div>
        </div>
          
          

<div className=" " >
<div className="w-full flex ">
  <div className="w-[50%] m-2 ">
  <div class="relative">
    <input type="text" id="floating_filled" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-200 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label for="floating_filled" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">First Name *</label>
</div>
  </div>
  <div className="w-[50%] m-2">
  <div class="relative">
    <input type="text" id="floating_filled" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-200 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label for="floating_filled" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Last Name *</label>
</div>
  </div>
</div>
<div className="w-full flex ">
  <div className="w-[50%] m-2 ">
  <div class="relative">
    <input type="text" id="floating_filled" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-200 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label for="floating_filled" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Phone Number *</label>
</div>
  </div>
  <div className="w-[50%] m-2">
  <div class="relative ">
    <input type="text" id="floating_filled" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-200 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label for="floating_filled" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email *</label>
</div>
  </div>
</div>
<div className="w-full flex ">
  <div className="w-[50%] m-2">
  <div class="relative w-full">
    <input type="text" id="floating_filled" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-200 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label for="floating_filled" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">PickUp Location *</label>
</div>
  </div>
  <div className="w-[50%] m-2">
  <div class="relative w-full">
    <input type="text" id="floating_filled" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-200 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label for="floating_filled" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Drop Location *</label>
</div>
  </div>
  
</div>
<div className="w-full flex ">
  <div className="w-[50%] m-2">
  <div class="relative w-full">
    <input type="text" id="floating_filled" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-200 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label for="floating_filled" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Address *</label>
</div>
  </div>
  <div className="w-[50%] m-2">
  <div class="relative w-full">
    <input type="text" id="floating_filled" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-200 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label for="floating_filled" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">City *</label>
</div>
  </div>
  
</div>
<div className="w-full flex ">
  <div className="w-[50%] m-2">
  <div>
  <Box className="mt-2"
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 0, width: '96.5%',  },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField
          id=""
          select
          label="Select"
          defaultValue=""
          variant="filled"
        >
          {countries.map((option) => (
            <MenuItem key={option.value} value={option.value} >
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
        </Box>
        
        
      </div>
     
  </div>
  
</div>
</div>
</div>

        <div className="text-[22px] font-semibold py-4 text-blue">Extras</div>
      <div className="grid grid-cols-3 gap-4 grid-rows-2">
      <div className="border shadow-md">
  <div className="flex">
    <div style={{ color: "#0891B2", paddingLeft: "10px", paddingTop: "16px" }}>
      <SecurityIcon />
    </div>
    <div className="px-4">
      <div className="py-4 font-semibold relative">
        Additional driver
        <button className="float-right px-1 text-gray-500  hover:text-gray-700 focus:outline-none group">
          <span className=" w-full invisible bg-black group-hover:visible text-[12px] bg-opacity-75 rounded p-1 text-white absolute top-10 right-4  ">
            Want to share the driving? Add other drivers.
          </span>
          <InfoOutlinedIcon style={{ fontSize: "16px" }} />
        </button>
      </div>
      <div className="text-[15px] font-semibold">AED 36.75 / day & driver</div>
    </div>
  </div>
</div>

        <div className="border shadow-md">
        <div className="flex">
        <div style={{ color: "#0891B2", paddingLeft:"10px", paddingTop:"16px" }}><SecurityIcon/></div> 
        <div className="px-4">
      <div className="py-4 font-semibold relative">
      Toll pass
        <button className="float-right px-1 text-gray-500 hover:text-gray-700 focus:outline-none group">
          <span className=" w-full bg-black text-white invisible group-hover:visible bg-opacity-75 rounded p-1 text-[12px] absolute top-10 right-4  ">
          Skip the lines and traffic with our flat rate pass.
          </span>
          <InfoOutlinedIcon style={{ fontSize: "16px" }} />
        </button>
      </div>
      <div className="text-[15px] font-semibold">AED 36.75 / day & driver</div>
    </div>
        </div>
        </div>
        <div className="border shadow-md ">
        <div className="flex">
        <div style={{ color: "#0891B2", paddingLeft:"10px", paddingTop:"16px" }}><SecurityIcon/></div> 
        <div className="px-4">
      <div className="py-4 font-semibold relative">
      Tire and windshield protection
        <button className="float-right px-1 mr-8 text-gray-500 hover:text-gray-700 focus:outline-none group ">
          <span className=" w-full invisible group-hover:visible text-[12px] text-white bg-opacity-75 rounded p-1 bg-black absolute top-10 right-6  ">
          Zero financial responsibility for damage to the windshield, windows, or tires.
          </span>
          <InfoOutlinedIcon style={{ fontSize: "16px" }} />
        </button>
      </div>
      <div className="text-[15px] pb-2 font-semibold">AED 36.75 / day & driver</div>
    </div>
        </div>
        </div>
        <div className="border shadow-md  ">
        <div className="flex">
        <div style={{ color: "#0891B2", paddingLeft:"10px", paddingTop:"16px" }}><SecurityIcon/></div> 
        <div className="px-4">
      <div className="py-4 font-semibold relative">
      Infant seat
        <button className="float-right px-1 text-gray-500 hover:text-gray-700 focus:outline-none group">
          <span className=" w-full invisible group-hover:visible text-[12px] text-white bg-opacity-75 rounded p-1 bg-black absolute top-10 right-4  ">
          Suitable for babies up to 12 months old.
          </span>
          <InfoOutlinedIcon style={{ fontSize: "16px" }} />
        </button>
      </div>
      <div className="text-[15px] font-semibold">AED 36.75 / day & driver</div>
    </div>
        </div> 
        </div>
        <div className="border shadow-md  ">
        <div className="flex">
        <div style={{ color: "#0891B2", paddingLeft:"10px", paddingTop:"16px" }}><SecurityIcon/></div> 
        <div className="px-4">
      <div className="py-4 font-semibold relative">
      Toddler seat
        <button className="float-right px-1 text-gray-500 hover:text-gray-700 focus:outline-none group">
          <span className=" w-full invisible group-hover:visible text-[12px] text-white bg-opacity-75 rounded p-1 bg-black absolute top-10 right-4  ">
          Suitable for children 1-4 years old.
          </span>
          <InfoOutlinedIcon style={{ fontSize: "16px" }} />
        </button>
      </div>
      <div className="text-[15px] font-semibold">AED 36.75 / day & driver</div>
    </div>
        </div>
        </div>
        <div className="border shadow-md ">
        <div className="flex">
        <div style={{ color: "#0891B2", paddingLeft:"10px", paddingTop:"16px" }}><SecurityIcon/></div> 
        <div className="px-4">
      <div className="py-4 font-semibold relative">
      Booster seat
        <button className="float-right px-1 text-gray-500 hover:text-gray-700 focus:outline-none group">
          <span className=" w-full invisible group-hover:visible text-[12px] text-white bg-opacity-75 rounded p-1 bg-black absolute top-10 right-4  ">
          Suitable for children 4-12 years old.
          </span>
          <InfoOutlinedIcon style={{ fontSize: "16px" }} />
        </button>
      </div>
      <div className="text-[15px] font-semibold">AED 36.75 / day & driver</div>
    </div>
        </div>
        </div>
        <div>

        </div>
      </div>
      <div className="text-[22px] font-semibold py-4 text-#00ace6">Insurance</div>
      <div className="grid grid-cols-3 gap-4">
      <div className="border shadow-md  ">
        <div className="flex">
        <div style={{ color: "#0891B2", paddingLeft:"10px", paddingTop:"16px" }}><SecurityIcon/></div> 
        <div className="px-4">
        <div className="py-4 font-semibold">Minimum excess</div>
        <div className="text-[12px] text-slate-700">AED 0.00 financial responsibility</div>
        <div className=" text-slate-700 pt-3 flex"><span className="pr-1" ><DoneIcon style={{color: "gray", fontSize:"16px", }} /></span> 
            <div className="break-words text-[12px] "> Includes theft protection</div>
            </div>
        <div className="text-[15px] py-5 font-semibold">AED 49.88 / day</div>
        </div>
        </div>
        </div>
        <div className="border shadow-md  ">
        <div className="flex">
        <div style={{ color: "#0891B2", paddingLeft:"10px", paddingTop:"16px" }}><SecurityIcon/></div> 
        <div className="px-4">
        <div className="py-4 font-semibold">Reduced excess</div>
        <div className="text-[12px] text-slate-700">AED 0.00 financial responsibility</div>
        <div className=" text-slate-700 pt-3 flex"><span className="pr-1" ><DoneIcon style={{color: "gray", fontSize:"16px", }} /></span> 
            <div className="break-words text-[12px] "> Includes theft protection</div>
            </div>
        <div className="text-[15px] py-5 font-semibold">AED 49.88 / day</div>
        </div>
        </div>
        </div>
        <div className="border shadow-md  ">
        <div className="flex">
        <div style={{ color: "#0891B2", paddingLeft:"10px", paddingTop:"16px" }}><SecurityIcon/></div> 
        <div className="px-4">
        <div className="py-4 font-semibold">Maximum excess</div>
        <div className="text-[12px] text-slate-700">AED 0.00 financial responsibility</div>
        {/* <div className=" text-slate-700 pt-3 flex"><span className="pr-1" ><DoneIcon style={{color: "gray", fontSize:"16px", }} /></span> 
            <div className="break-words text-[12px] "> Includes theft protection</div>
            </div> */}
        <div className="text-[15px] py-5 font-semibold">AED 49.88 / day</div>
        </div>
        </div>
        </div>
        
        
      </div>
      </div>

      <div className="w-[30%] sticky ">
        <div className="w-full mt-4 rounded border-[1px] border-gray-200 shadow-[0.2px_0.2px_6px_1px_rgba(0,0,0,0.3)] ">
        <div className="px-6 pt-4 text-[20px] font-bold">Mercedes-Benz CLA 250 Model 2023</div>
          <img src="../images/carone.png" alt="" className="hover:scale-[1.05]" />

          <div className="grid grid-cols-5 w-full text-[13px] py-3 text-center border-t rounded border-gray-200 ">
            <div className="">
              <span className="px-1">
              <PersonIcon  className="text-[#00ace6]"   />
              </span><br></br>
             5
            </div>
            <div className="">
              <span className="px-1">
                <BusinessCenterIcon  className="text-[#0891B2]  "  />
              </span><br></br>
              2
            </div>
            <div className=" ">
              <span className="px-2">
                <AirIcon  className="text-[#0891B2]"  />
              </span><br></br>
              AC
            </div>
            <div className=" ">
              <span className="px-2">
                <NoCrashIcon  className="text-[#0891B2]"  />
              </span><br></br>
              4 Doors
            </div>
            <div className="">
              <span className="px-2">
                <AutoModeIcon  className="text-[#0891B2]"  />
              </span><br></br>
              Automatic
            </div>
          </div>

        <div className="py-2 mx-8 text-slate-600 border-y  ">
        {/* <div className="font-semibold">Included in the rates</div>
        <div className="flex justify-between">
        <div>Base Rate</div>
        <div>AED 2008.07</div>
        </div>
        <div className="flex justify-between">
        <div>Extras</div>
        <div>AED 2008.07</div>
        </div>
        <div className="flex justify-between">
        <div>Insurance</div>
        <div>AED 2008.07</div>
        </div> */}
         <div className="text-slate-700 pt-3 flex items-center">
  <span className="pr-1">
    <DoneIcon style={{ color: "gray", fontSize: "16px" }} />
  </span>
  <div className="break-words text-[12px]">Includes theft protection</div>
  <div className="ml-auto">
    <button className="p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
      <InfoOutlinedIcon style={{ fontSize: "16px" }} />
    </button>
  </div>
</div>

<div className="text-slate-700 pt-3 flex items-center">
  <span className="pr-1">
    <DoneIcon style={{ color: "gray", fontSize: "16px" }} />
  </span>
  <div className="break-words text-[12px]">Includes theft protection</div>
  <div className="ml-auto">
    <button className="p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
      <InfoOutlinedIcon style={{ fontSize: "16px" }} />
    </button>
  </div>
</div>
<div className="text-slate-700 pt-3 flex ">
  <span className="pr-1">
    <DoneIcon style={{ color: "gray", fontSize: "16px" }} />
  </span>
  <div className="break-words pr-2 text-[12px]">Included Loss Damage Waiver up to AED 7,000.00 financial responsibility</div>
  <div className="ml-auto">
    <button className="p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
      <InfoOutlinedIcon style={{ fontSize: "16px" }} />
    </button>
  </div>
</div>
<div className="text-slate-700 pt-3 flex items-center">
  <span className="pr-1">
    <DoneIcon style={{ color: "gray", fontSize: "16px" }} />
  </span>
  <div className="break-words text-[12px]">Includes theft protection</div>
  <div className="ml-auto">
    <button className="p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
      <InfoOutlinedIcon style={{ fontSize: "16px" }} />
    </button>
  </div>
</div>
        </div>
        <div className="flex justify-between font-semibold pt-5 mx-8">
        <div>Total Price</div>
        <div className="text-[20px]">AED 269.09</div>
        </div>
        <div className="flex justify-between mx-8 font-bold cursor-pointer text-[#0891B2] text-[14px] ">
        <div>Price Details</div>
        </div>
        <div className="flex justify-center items-center my-6">
            <button className="w-[70%] bg-[#0891B2] text-[20px] font-bold p-1 text-white">Next</button>
            </div>
        
        
  

        </div>
      
      </div>
    </div>
  );
}

export default SubsPage;
