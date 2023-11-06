import React,{ useState } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';


function Dashboard() {
    const [show,setShow] = useState(false);

    function openTerms(){
        setShow(true);
    }

    function closeTerms(){
        setShow(false)
    }

    return (
        <div className='w-screen h-screen flex justify-center items-center bg-transparent' id="MainPopupDiv">
            {show==true?<></>:
            <button className='p-4 bg-blue-500 text-white border rounded-md' onClick={openTerms}>Click me</button>}
            
            {show==true?
            <div className="w-[50%] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] h-5/6">
                <div className="flex justify-between items-center w-full bg-white py-1 box-border block cursor-default opacity-100 border-b border-slate-300 h-1/6">
                    <h1 className="text-2xl px-6 py-3">RENTAL TERMS AND CONDITIONS</h1>
                    <span className='pr-2 cursor-pointer'onClick={closeTerms}><CancelIcon /></span>
                </div>
                <div className='p-6 flex flex-col relative overflow-y-visible bg-white overflow-auto h-5/6'>
                    <h3 className="font-semibold text-sm px-6 py-6 pt-2.5">THESE TERMS AND CONDITIONS CONTAIN A BINDING ARBITRATION CLAUSE AND CLASS ACTION WAIVER THAT IMPACT YOUR RIGHTS ABOUT HOW TO RESOLVE DISPUTES. PLEASE READ THIS PROVISION CAREFULLY.</h3>
                    <p className="px-6 pb-6">
                        <b>1. The Rental Agreement.</b> These Rental Terms and Conditions, the rental document you receive when you are given access to the car you are renting (the "Rental Contract") any additional agreement signed by you, any documents or agreements (or links to on-line documents or agreements) sent to you electronically in connection with your rental, the Privacy Notice, and the return receipt or record (the "Rental Receipt") with computed rental charges together constitute the "Rental Agreement" between yourself and Avis Rent A Car System, LLC, or the independent Avis System Licensee identified on the Rental Contract (“Avis”).
                    </p>
                    <p className='px-6 pb-6'>
                        <b>2. Your Rental.</b> You rent from Avis the car described on the Rental Contract, which rental is solely a transfer of possession, and not of ownership. You agree to the terms in the Rental Agreement provided any such term is not prohibited by the law of a jurisdiction covering this rental, in which case such law controls. “You” and “your” refer to the person who signs this agreement, “we”, “our” and “us” refer to Avis. You also agree that you are not our agent for any purpose; and that you cannot assign delegate or transfer your obligations under the Rental Agreement and any discrete part thereof.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>3. Changes.</b> Any change in the Rental Agreement or our rights must be in writing and signed by an authorized Avis officer. You further agree that we have the unilateral right to change these Terms and Conditions from time to time either upon written notice to you, in paper or electronic form, or upon our posting such changes on the Avis web site.  Such changes will apply to rentals that you reserve after such notice has been given, as indicated by the date of such notice, if sent in written form, or the date such changes are posted on the Avis web site, which date will be indicated therein, without any requirement by you to sign the changed Terms and Conditions.  Changes to these Terms and Conditions will be posted as they occur on the Avis web site at www.Avis.com and will govern all rentals commencing after posting even if the terms provided at time of reserving the rental car are different.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>4. Meaning of Car.</b> The word “car” in the Rental Agreement means the vehicle rented to you or its replacement and includes tires, tools, keys, key fobs, equipment, included and optional accessories, plates, documents, and any other products or property provided by Avis with the vehicle and separately rented to you by Avis unless otherwise explicitly specified in the Rental Agreement.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>5. Who May Drive The Car.</b> You represent to Avis that you are a capable and validly licensed driver and will remain a capable and validly licensed driver throughout the term of your rental. You agree that we have the right to verify that your license has been validly issued and is in good standing (not suspended, revoked or otherwise restricted in any way) as a condition precedent to each rental; and that we may in our sole discretion refuse to rent to you if your license is not in good standing. We reserve the right to deny rentals based upon (i) information about your license status, (ii) authenticity of your driver's license or other credentials, (iii) the inability to verify your identity or payment methods, (iv) your driving record provided by the Motor Vehicle Department of the jurisdiction that issued your license, or (v) any other information received from any other source in the business of validating an identity or the driver's license credential that we believe to be reliable. We reserve the right to validate your driving credentials and license good standing periodically without notice to you except as required by law. Except where otherwise specifically authorized by applicable law, only you, your spouse or domestic partner, or, if you rent from us under your employer’s corporate account agreement, your employer or a regular fellow employee incidental to business duties may drive the car (each a "Permitted Driver"), but only with your prior permission. Any Permitted Driver must be at least 25 years old and must also be a capable and validly licensed driver at all times during which such person is operating the car.  Any person other than you or a Permitted Driver that operates the car must sign an additional driver form at the time of the rental. We may charge for each additional driver authorized to drive the car, which will be specified on the Rental Contract. You acknowledge that you will remain financially responsible under the Rental Agreement at all times even if the car is operated by a Permitted Driver or someone other than yourself.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>6. Return of the Car.</b> You agree to return the car to us in the same condition you received it, ordinary wear and tear excepted, on the date, at the time and to the location specified in the Rental Contract. You must return it sooner on our demand. If you return it earlier or later, a different or higher rental rate may apply and, if returned later, you may also be charged a late return fee. You may not return the car outside of the return location's operating hours unless specifically allowed by that location.  If you do, your responsibility for damage to or loss of the car will continue and all charges stated on the Rental Contract as a periodic rate will continue to accrue until the return location reopens and we process the return of the car. Operating hours vary by location. If we do not find the car when that location opens, your responsibility for all charges and for damage to or loss of the car will continue until the car is actually returned or recovered. If you wish to extend any rental you must contact us at 1-888-897-8448 or use a method we approve to request the extension before your return date. We may or may not grant an extension or decline to grant it for the entire period you request, in our sole discretion. If you do not return the car to the location specified in the Rental Agreement, as and when required under the Rental Agreement, you may be subject to criminal penalties. If we do grant an extension a different or higher rate may be applied to the extension period and a service fee may also apply.
                    </p>
                    <p className='px-6 pb-6'>
                        <strong>7. Where You’ll Return the Car.</strong> The car must be returned to the agreed return location as specified on the Rental Contract. If return is indicated to a location other than the location where your rental commences, you may have to pay a one way service fee. If you return the car to a different location from the agreed return location without our permission, you agree to pay an unauthorized return location fee specified by us.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>8. Rental Charges.</b> You will pay for the number of miles/kilometers you drive and the period of time you rent the car at the rate indicated on the Rental Contract, or your applicable corporate rate. Unless otherwise indicated on the Rental Contract, the minimum charge is one day (24 hours), plus mileage/kilometerage, or a fixed fee. We will determine the miles/kilometers by reading the factory-installed odometer or utilize the vehicle's telematics device. The daily charge applies to consecutive 24 hour periods starting at the hour and minute the rental begins or, if a calendar day is specified on the Rental Contract, each consecutive calendar day or any part of a calendar day starting on the calendar day on which the rental occurs. If you fail to comply with any conditions for special rates specified on the Rental Contract our otherwise applicable rates will be charged. You’ll pay all charges that apply to the rental for miscellaneous services and, where permitted, airport facility fees and/or concession recovery fees, vehicle license recovery fees, other fees and surcharges.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>a)</b> If you present any rewards certificates, coupons or vouchers associated with a loyalty rewards program, you may be charged a redemption fee. Additionally if you choose to earn airline miles or other comparable loyalty program benefits, you may be charged a fee.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>b)</b> You will also pay a reasonable fee for cleaning the car’s interior upon return if any stains, dirt, odor, or soiling attributable to your use cannot be cleaned with our standard post-rental procedures as determined by us in our sole discretion.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>c)</b> If the key(s) or key fob(s) are not returned with the car, you may be charged additional fees.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>d)</b> We maintain a non-smoking fleet, including a prohibition on the use of e-cigarettes in the car. You will pay an additional charge if you return the car and it smells or is soiled from smoke or e-cigarette vapor.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>e)</b> You and any third party to whom any rental charges are billed, such as an insurer or employer, are jointly and severally responsible for payment of all such charges. If you direct us to bill any such charges to a third party, you represent that you are authorized to do so on behalf of the third party.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>f)</b> If you use a car with automatic toll payment capability, see the disclosures regarding "e-Toll" in Paragraph 16 below.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>g)</b> To the extent you utilize any rate/benefit discount code in association with a rental, you represent you meet the requisite criteria for utilizing such discount code. Any other use will be viewed as an unlawful use and theft of services for which Avis can pursue legal remedies, including, but not limited to, reasonable attorneys’ fees and costs, and may void any associated discounts or rental benefits.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>h)</b>  Avis makes every effort to ensure that all prices and descriptions quoted on its website or elsewhere are correct and accurate. However, in the case of a manifest error or omission, Avis reserves the right to rescind the Rental Agreement, even if we have already accepted your reservation and/or received your payment. Our liability in that event will be limited to the return of any money that you have paid with respect to the reservation. In the case of a manifest error in which we permit you to keep your reservation, we reserve the right to require that you pay the difference between the quoted price and the correct price, as confirmed in writing by Avis after the manifest error has been discovered. A "manifest error", as the term is used in this paragraph, means, in relation to an incorrect price, a price quoted in error by Avis which is more than 15% less than the price that would have been quoted had the mistake not been made.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>9. Taxes, Surcharges & Fees.</b> You’ll also pay all applicable taxes as well as any additional charges provided on the Rental Agreement which are over and above the base rental rate. These may be surcharges and/or recovery fees to recover certain costs.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>10. Card Reserve.</b> You acknowledge that you have been informed that if you use a charge card (including any digital wallet or mobile payment application linked to your charge card account), your credit, up to an amount of the estimated total charges due under the Rental Agreement, as indicated on the Rental Contract, based on your representations about this rental, may be set aside or reserved by the card issuer of the card, which you present for payment of your rental charges; or, if you use a debit card funds in the account to which that card is linked may be set aside for the greater of the amount of the estimated total charges due under the Rental Agreement, based on your representations about this rental, as indicated on the Rental Contract, or the deposit amount indicated on signs at the location at which you rent the car at the time of rental. You consent to the reservation or setting aside of that estimated total amount at the time of commencement of the rental. You understand that we will authorize the release of any excess reserve or set aside upon the completion of your rental (return of the car and our determination of whether any additional fees or charges apply), and that your card issuer’s rules apply to your credit line or your account being credited for such excess and may not be immediately released by your card issuer.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>11. Repossessing the Car.</b> We can repossess the car at any time in our sole discretion for reasons that include, but are not limited to the following: the car is found illegally parked, being used to violate the law or the terms of the Rental Agreement, or appears to be abandoned. You agree that we need not notify you in advance and that we may take any actions reasonably necessary to obtain possession of the car, including remotely disabling the engine, remotely locking the doors, tracking the location of the car through GPS tracking devices and utilizing for our benefit any other devices connected to the car or affecting the car's operation. If the car is repossessed, you agree to pay or reimburse us for the actual and reasonable costs incurred by us to repossess the car. You agree that such costs will be charged to the credit or debit card or account you used to rent the car.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>12. Loss Damage Waiver (LDW).</b> Loss Damage Waiver (LDW) is not insurance and is not mandatory. If you accept full LDW by your initials on the Rental Contract at the additional daily rate, for each full or partial day that the car is rented to you, and the car is operated in accordance with this agreement, we assume responsibility for the loss of or damage to the car except, if permitted by law, for lost, damaged or stolen keys or remote entry devices, towing or tire services unless related to an accident, or recovery of the car if stolen, (except in the state of Alaska), and except for your amount of “responsibility”, if any, specified on the Rental Contract. Partial Loss Damage Waiver (PDW) is available only where permitted by law. If you accept PDW at the indicated daily rate, and the car is operated in accordance with the Rental Agreement, we assume responsibility for the loss or damage to the car up to the amount as specified on the Rental Contract and you accept responsibility for all other loss or damage. If you do not accept either LDW or PDW, you owe for all loss or damage to the car. Loss and damage are described in  paragraph 13 below. YOU ACKNOWLEDGE YOU HAVE BEEN ADVISED THAT YOUR OWN INSURANCE MAY COVER LOSS OR DAMAGE TO THE CAR. YOU ALSO ACKNOWLEDGE READING THE NOTICE ON LOSS OR DAMAGE SHOWN ON THE RENTAL CONTRACT, OR IN THESE TERMS, OR IN A SEPARATE NOTICE FORM, INCLUDING WITHOUT LIMITATION THE STATE SPECIFIC NOTICES SET FORTH IN PARAGRAPH 36 WITH RESPECT TO THE STATE IN WHICH YOU RENTED THE CAR AND EACH STATE WHERE YOU TAKE THE CAR.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>13. Damage to/Loss of the Car.</b> If you do not accept  Loss Damage Waiver, or if the car is lost or damaged as a direct or indirect result of a violation of paragraph 14, or damaged as a result of an act of nature, you are responsible and you will pay us for all loss of or damage to the car regardless of cause, or who, or what caused it. If the car is damaged, you will pay our estimated repair cost, or if, in our sole discretion, we determine to sell the car in its damaged condition, you will pay the difference between the car’s retail fair market value before it was damaged and the sale proceeds, except in Canada or as otherwise required by law. In Canada, you will pay the greater of the car's retail fair market value or its value on our books of account (also known as depreciated book value) before theft or, in the case of damage, the sales proceeds. Depreciated book value may be higher than retail fair market value. Where permitted by law, you authorize us to charge you for the actual cost of repair or replacement of lost or damaged items such as glass, mirrors, tires, and antenna, as part of your rental charges at the time of return. If the car is stolen and not recovered you will pay us the car’s fair market value before it was stolen. As part of our loss, you’ll also pay for loss of use of the car, without regard to our fleet utilization, plus an administrative fee, plus towing and storage charges, if any (“Incidental Loss”). If your responsibility is covered by any insurance, credit card benefit, travel insurance or such other insurance or benefits, you authorize us to contact the benefit provider directly on your behalf and you assign all of your benefits directly to us to recover all consequential and incidental damages, including but not limited to the repairs of the car plus diminished value or the fair market retail value of the car (less salvage value plus costs incurred in the salvage-sale), and all Incidental Loss and administrative fees. If we collect our loss from a third party after we have collected our loss from you, we will refund the difference, if any, between what you paid us and what we collected from the third party. If the law of a jurisdiction covering this rental requires conditions on LDW that are different than the terms of the Rental Agreement, such as if your liability for ordinary negligence is limited by such law, that law prevails. You understand that you are not authorized to repair or have the car repaired without our express prior written consent. If you repair or have the car repaired without our consent, you will pay the estimated cost to restore the car to the condition it was in prior to your rental. If we authorize you to have the car repaired and the cost of repair is our responsibility, we will reimburse you for those repairs only if you give us the repair receipt.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>14. Prohibited Use of the Car.</b> Certain uses of the car and other actions you or a driver may take, or fail to take, will violate the Rental Agreement.<b> A VIOLATION OF THIS PARAGRAPH, WILL AUTOMATICALLY TERMINATE YOUR RENTAL AND IS AN EXCLUSION TO AND VOIDS ALL LIABILITY PROTECTION AND ANY OPTIONAL SERVICES THAT YOU HAVE ACCEPTED, INCLUDING BUT NOT LIMITED TO SUPPLEMENTAL LIABILITY INSURANCE, PERSONAL ACCIDENT INSURANCE, PERSONAL EFFECTS INSURANCE, ANY ROADSIDE ASSISTANCE PLAN, EMERGENCY SICKNESS PROTECTION AND LOSS DAMAGE WAIVER (LDW) OR PARTIAL DAMAGE WAIVER. IT ALSO MAKES YOU LIABLE TO US FOR ALL PENALTIES, FINES, FORFEITURES, LIENS AND RECOVERY AND STORAGE COSTS, INCLUDING ALL RELATED ATTORNEYS' FEES, LEGAL EXPENSES, FEES AND COSTS THAT WE MAY INCUR. It is a violation of this Paragraph if any of the following occurs:</b>
                    </p>
                    <p className='px-6 pb-6'>
                        <b>A. You use or permit the car to be used:</b>
                        <ul className='space-y-1 list-disc list-inside pl-6 leading-tight'>
                            <li className='pt-6'><b>by anyone other than an authorized driver, as defined in paragraph 5;</b></li>
                            <li><b>to carry passengers or property for hire or more passengers than the car has seat belts to carry;</b></li>
                            <li><b>to tow or push anything;</b></li>
                            <li><b>to be operated in a test, race or contest or on unpaved roads;</b></li>
                            <li><b>while the driver is under the influence of alcohol, any controlled substance, including without limitation any federally controlled substance listed under the Controlled Substance Act, Title 21 of the United States Code (a "Controlled Substance"), or medications that affect vehicle operation and/or constitute driving while impaired under applicable law;</b></li>
                            <li><b>for conduct that could be charged as a crime such as a felony or misdemeanor, including the transportation of a Controlled Substance or contraband, stolen goods, illegal devices, or persons protected by prohibitions against human trafficking;</b></li>
                            <li><b>recklessly or while overloaded; or</b></li>
                            <li><b>if the car is driven into Mexico without our expressed permission.</b></li>

                        </ul>
                    </p>
                    <p className='px-6 pb-6'>
                        <b>B. You or an additional driver, whether authorized or not: </b>
                        <ul className='space-y-1 list-disc list-inside pl-6 leading-tight'>
                            <li className='pt-6'><b>fail to promptly report to Avis any damage to or loss of the car when it occurs or when you learn of it and provide us with a written accident/incident report or fail to cooperate with our investigation;</b></li>
                            <li><b>Where required by law, failed to report an accident to law enforcement;</b></li>
                            <li><b>obtained the car through fraud or misrepresentation;</b></li>
                            <li><b>leave the car and fail to remove the keys (or key fobs) or close and lock all doors, close all windows and the trunk and the car is stolen or vandalized; or</b></li>
                            <li><b>intentionally or with willful disregard cause or allow damage to the car.</b></li>
                        </ul>
                    </p>
                    <p className='px-6 pb-6'>
                        <b>C. You or an additional driver, whether authorized or not, return the car after hours and the car is damaged, stolen or vandalized or you otherwise fail to take reasonable steps to secure the car, its keys, key fobs, or other remote entry and starting devices.  </b>
                    </p>
                    <p className='px-6 pb-6'>
                        <b>D. Driving or operating this car while using a hand-held wireless communication device or other device that is capable of receiving or transmitting telephonic communications, electronic data, mail or text messages shall be deemed a breach of the Rental Agreement.</b>
                    </p>
                    <p className='px-6 pb-6'>
                        <b>15. Fuel Service Charge.</b> Most rentals come with a full tank of fuel, but that is not always the case.
                    </p>
                    <p className='px-6 pb-6'>
                        Where available, if permitted by law, if you drive less than 75 miles, you acknowledge that we will add a flat fee to the rental, the amount of which will be disclosed on the Rental Contract and at the counter prior to rental. You may avoid this charge at time of return by providing a receipt for fuel purchased at which time the flat fee will be reversed from your total rental charges. If this subparagraph (a) does not apply, there are three refueling options:
                    </p>
                    <p className='px-6 pb-6'>
                        <b>1)</b> If you do not accept the fuel service option, where available, at the beginning of your rental, and you return the car with less fuel than was in it when you received it, as we determine in our sole discretion, we will charge you a fuel service charge at the applicable rate per-mile or rate per-gallon specified on the Rental Contract or disclosed at the location. The per-mile rate is used if you do not buy fuel during the rental. To calculate this amount, we multiply the number of miles driven, as shown on the car’s odometer (or provided by the vehicle's telematics device), times the per-mile rate shown on the Rental Contract. The per gallon rate is used if you buy fuel during the rental and provide us with a receipt on our request, but the tank is not as full when you return the car as when you received the car (by using the factory installed gauge, rounded down to the nearest 1/8 tank), times the per-gallon rate shown on the Rental Contract.
                    </p>
                    <p className='px-6 pb-6'>
                        Although two methods are used for ease of calculation, the per mile and per-gallon rates produce approximately the same result. Some of our cars are equipped with onboard telematics which record the actual amounts of fuel in the gas tank. In the event your car has such a device, you will be charged for the actual amount of gasoline needed to fill the tank based on the reading of this device.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>2)</b> If you accept the fuel service option at the beginning of your rental, you will be charged as shown on the Rental Contract for that purchase and you will not pay us a fuel service charge. If you choose this option, you will not incur an additional fuel service charge, but you will not receive any credit for fuel left in the tank at the time of return.  If you accept the partial fuel service option at the beginning of your rental, you will be charged as shown on the Rental Contract for that purchase and you will pay a fuel service charge for any fuel not covered by the partial fuel service option. The per-gallon cost of the fuel service option will always be lower than the fuel service charge. The cost of refueling the car yourself at a local service station may be lower than the fuel service charge or the fuel service option. You acknowledge that the fuel service charge is not a retail sale of fuel.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>3)</b> You may avoid a fuel service charge if you return the car with the fuel tank as full as when you received it and, if requested by us, present a receipt for your fuel purchase. If you put fuel into the car, you must use the correct fuel (having the grade of gasoline stated on the car fuel information decal, or on-road diesel). Do not use ethanol fuel even if the car states that it is a flex-fuel vehicle.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>16. e-Toll (optional electronic toll payment service).</b> You are responsible for payment of all tolls incurred during the rental period. Avis offers an optional service called e-Toll that allows customers to use electronic toll lanes on highways, bridges, tunnels and other tolled passages. All Avis vehicles are pre-equipped to electronically process tolls. Unless you directly pay the toll yourself as described below (see “Opting Out of e-Toll”), you will automatically opt-into e-Toll and pay the fees described herein if you drive through an electronic toll. <b>e-Toll fees (Standard):</b> If you use the e-Toll service at any time during your rental, you agree to pay a convenience fee of $5.95 for each day on which you incur a toll up to a maximum amount of $29.75 per rental period (not to exceed 30 days). In addition, you will pay all tolls incurred at the maximum prevailing non-discounted or cash rates posted by the toll authority.<b>e-Toll Unlimited:</b> Avis also offers e-Toll Unlimited, which includes the cost of tolls and convenience fees. If you choose e-Toll Unlimited, you agree to pay a daily flat fee of $10.99 - $25.99, depending on checkout location, for each day of the rental period, regardless of whether or not you incur any tolls, up to a maximum of $54.95 - $129.95 per week. e-Toll Unlimited must be selected at the time you reserve or check out your vehicle; otherwise, you agree to pay the standard e-Toll fees if you use the e-Toll service. <b>Opting Out of e-Toll:</b> If you do not choose e-Toll Unlimited, you may avoid the standard e-Toll fees on any day during the term of the rental if you ensure the transponder shield box is in the “closed” position and you (i) pay cash for all tolls, (ii) use your own adequately funded, properly mounted and compatible electronic toll device to pay for all tolls, (iii) pay the toll authority directly through any available online or other service according to the toll authority’s rules and requirements; or (iv) avoid electronic toll roads or passages. <b>Toll Administrator:</b> If you use the standard e-Toll service, a third party toll program administrator (the “Toll Administrator”) contracted by Avis will process payment of each electronic toll that you incur during the term of the rental and charge your credit/ debit card for the amount of tolls and convenience fees set forth above. Regardless of the service you choose, you agree that, in connection with e-Toll, we may share your personal information, (including your address, credit card/ debit information, and other rental information) with the Toll Administrator. You also authorize the Toll Administrator and Avis to charge your credit/debit card for all e-Toll fees described above based on the option that you select. You agree that the Toll Administrator may contact you directly regarding the e-Toll fees. The e-Toll fees may take 4-8 weeks after the rental concludes to be billed to your credit card/ debit card on file. You agree to indemnify and hold us, the Toll Administrator, and any other agent we authorize harmless for any fines, charges or administrative fees incurred for any toll violations for which you may be liable. For more information on tolling, please visit Avis.com/etoll
                    </p>
                    <p className='px-6 pb-6'>
                        <b>17. Fines, Expenses, Costs and Administrative Fees.</b> You’ll pay or reimburse us for all fines, penalties, interest, and court costs for parking, traffic, toll and other violations, including storage liens and charges incurred as a result of your rental. You will also pay a reasonable administrative fee with respect to any violation of the Rental Agreement, such as for repossessing or recovering the car for any reason.  You agree we may, in our sole discretion, pay all tickets, citations, fines, penalties and interest on your behalf directly to the appropriate authority and you will pay us for what we paid to the appropriate authority or their designated agents plus a reasonable administrative fee and any attorneys' fees and expenses we incur. You agree and acknowledge that we cooperate with all federal, state/provincial, municipal and local officials charged with enforcing these infractions to provide any information necessary as they may request or may otherwise be required.
                    </p>
                    <p className='px-6 pb-6'>
                        You authorize us to release the rental and credit/debit card information regarding your rental to ATS Processing Services, LLC (ATS), Violation Management Services (VMS), or another agent we authorize to act on our behalf for the purpose of processing and billing you for any tickets, citations, fines and penalties incurred by you or assessed against us or the car during your rental plus a reasonable administrative fee not to exceed $50 per violation. You authorize as our agent ATS, VMS or another agent we appoint to bill you directly to the credit/debit card you used to rent the car. You authorize ATS, VMS or another agent we authorize to contact you directly regarding any tickets, citations, fines and penalties incurred by your or assessed against us or to our car while the car was rented to you.
                    </p>
                    <p className='px-6 pb-6'>
                        In the event we use a third party collection service or agent to resolve any tickets, citations, fines, penalties, and interest, you agree to pay all costs and collection fees including but not limited to administrative and legal costs to such agent upon demand without protest. You acknowledge that you have no right to contest any such infraction or enter any plea other than guilty or no contest unless we consent to your action, provided that the penalty for the infraction is only the payment of money and does not involve any other administrative, civil, or criminal penalty.
                    </p>
                    <p className='px-6 pb-6'>
                        You agree to indemnify and hold us ATS, VMS and any other agent we authorize harmless for any such tickets, citations, fines, penalties, interest and administrative fees.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>18. Roadside Assistance.</b> Roadside assistance is available to all renters. In some instances, you may purchase added protection under a roadside assistance plan (a "Roadside Assistance Plan") in which Avis offers to cover potential costs associated with lost keys, remote entry devices, lockouts, flat tires, towing (if the car becomes inoperable), jump starts, or emergency fuel delivery (up to 3 gallons). If you do not purchase the Roadside Assistance Plan in advance, you may incur added costs for providing the above referenced services. When paying in advance for a Roadside Assistance Plan, you will pay for any full or partial day at the rate specified in the Rental Contract.  There are no refunds if you do not use the Roadside Assistance Plan. Once purchased, you cannot cancel or rescind the Roadside Assistance Plan during the rental.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>19. Emergency Sickness Protection (ESP).</b> ESP is available only to non-US resident renters.   You’ll pay for ESP if you accept it. You’ll be charged the ESP rate per day for a full day even if you don’t have the car for the entire day. Visit www.Avis.com for additional information, terms and coverage limits.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>20. Personal Accident and Effects Insurance (PAE).</b> You’ll pay for PAE and PAE-Plus (where available) if you accept it.  You understand that you will be charged the PAE rate per day for a full day even if you don’t have the car the entire day. Visit www.Avis.com for additional information, terms and coverage limits.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>21. Liability Protection.</b> Except with respect to rentals in California and Texas, anyone driving the car who is permitted to drive it by the Rental Agreement will be protected against liability for causing bodily injury or death to others or damaging the property of someone other than the authorized driver and/or the renter up to the minimum financial responsibility limits required by the law of the jurisdiction in which the accident occurs.  The limit for bodily injury sustained by any one person includes any claim for loss of that person’s consortium or services. Where applicable law extends this protection to a non-Permitted Driver, the same limits will apply. Except where required by law to be primary or excess, any protection provided by us shall be secondary to, and not in excess of, any applicable insurance available to you, or any other driver, from any other source, whether primary, excess, secondary or contingent in any way. If this protection is extended by operation of law to anyone not permitted by the Rental Agreement to drive the car, or to any person or instance where coverage is not intended to be afforded by the Rental Agreement, the financial responsibility limits of the jurisdiction in which the accident occurred will apply.
                    </p>
                    <p className='px-6 pb-6'>
                        You agree that we can provide coverage under a certificate of self-insurance or an insurance policy, or both, as we choose. In any case, a copy of the policy and/or certificate will be available for your inspection at our main office. You understand that unless required by applicable law, we will not provide
                    </p>
                    <p className='px-6 pb-6'>
                        <b>(a)</b> coverage for fines, penalties, punitive or exemplary damages;
                    </p>
                    <p className='px-6 pb-6'>
                        <b>(b)</b> coverage for bodily injury to you, or your death while not a driver, or any member of your family or the driver’s family related by blood, marriage or adoption residing with you or them; or the drivers family, or to a fellow employee arising out of or in the course of employment;
                    </p>
                    <p className='px-6 pb-6'>
                        <b>(c)</b> defense against any claim, unless we are required to provide primary protection, but in such event not after the applicable limits of protection that we furnish are tendered;
                    </p>
                    <p className='px-6 pb-6'>
                        <b>(d)</b> supplementary no fault, noncompulsory uninsured or under-insured motorist coverage, and any other optional or rejectable coverage, and you and we reject all such coverages to the extent permitted by law. Where any of these coverages are required or implied by law, the limits will be the minimum required under the applicable statute. Where permitted by law, you are rejecting uninsured or underinsured motorist and all optional automobile insurance coverages and under any policy of insurance or certificate of self-insurance in connection with the Rental Agreement, for you and all other passengers in the car. You understand that uninsured and underinsured motorist coverage protects you and other passengers in a car for losses and damages suffered if injury is caused by the negligence of a driver who does not have any insurance or has insufficient insurance to pay for losses and damages. There is no coverage in Mexico, and the car may not be taken into Mexico under any circumstances, unless special arrangements are made at the renting location for separate Mexican insurance, where such insurance is available.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>22. Supplemental Liability Insurance (SLI) & Exclusions.</b> If you elect to purchase SLI, coverage will be provided to you and any authorized driver under an excess coverage automobile policy issued to Avis. SLI provides protection for third party automobile claims for the difference between the minimum financial responsibility limits provided under paragraph 21 above and a maximum combined single limit of liability of $1,000,000 or $2,000,000 depending on the jurisdiction of rental and vehicle type for bodily injury, death or property damage for each accident. This coverage is provided under a policy of excess liability insurance more fully described in the available brochure and is subject to all of the conditions and limitations described in paragraph 21 above, except that notwithstanding anything contained in the Rental Agreement, the terms of the policy will at all times control.<b> SLI does not apply to liability for bodily injury or property damage arising out of any “prohibited use of the car” as described in paragraph 14 of the Rental Agreement, all of which are exclusions to SLI. Other exclusions to SLI are listed in the SLI policy.</b> You understand that you will be charged the rate per day for a full day even if you don’t have the car for the entire day.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>23. Indemnification and Waiver.</b> You shall defend, indemnify, and hold us, our parent and affiliated companies harmless from all losses, liabilities, damages, injuries, claims, demands, awards, costs, attorney fees, and other expenses incurred by us in any manner from this rental transaction or from the use of the car by you or any person, including claims of, or liabilities to, third parties. You may present a claim to your insurance carrier for such events or losses; but in any event, you shall have final responsibility to us for all such losses. <b>YOU WAIVE ANY CLAIM AGAINST US FOR INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES IN CONNECTION WITH THE RENTAL.</b>  You agree that if the rental takes place at a location operated by an Avis System Licensee, any claim by you,  including one that alleges unfair, deceptive or unconscionable conduct, your sole right and remedy is against that Avis System Licensee and not Avis Rent A Car System, LLC, its parent or any of its affiliated companies.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>24. Property in the Car.</b> We are not responsible for loss of, theft, or damage to any property in or on the car, in any service vehicle, such as a transit van or bus, on our premises, or received or handled by us, regardless of who is at fault. You’ll be responsible to us for claims by others for loss or damage caused by your property.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>25. Currency Conversion.</b> If you use a credit or charge card that is issued by a financial institution outside of the United States and your charges are billed to us in a currency other than U.S. Dollars, the full amount of your charges will be converted to the card account’s billing currency by us unless you have instructed us not to perform the conversion process on your personal account profile or submitted a written request in advance to have the currency conversion performed by your card issuer. Our conversion will be based on a conversion rate published by Reuters or another independent reporting service and will incorporate a processing charge no higher than 3% applied to all amounts relating to the transaction. This charge will replace the currency conversion processing charge applied by your card issuer. You understand that your card issuer has a currency conversion process; that you have chosen not to use your card issuer’s currency conversion process; and that you will have no recourse against your card issuer with respect to any matter related to the currency conversion or disclosure thereof.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>26. Error in Rental Charges.</b> The charges shown on the return record are not final and are subject to review. You’ll pay any undercharges and you’ll receive a refund for any overcharges we discover on review.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>27. Collections.</b> If you do not pay all amounts due to us under the Rental Agreement upon demand, including all charges, fees, expenses, fines, penalties, and all matters associated with the rental of the car including, without limitation, payment for loss of or damage to the car, rental charges, parking, red light and traffic fines and penalties, toll charges, towing, storage and impoundment fees, we will take the following actions: a) You agree to pay a late charge of 1 & 1/2% per month on the past due balance or the highest rate permitted by applicable law, whichever is less (collectively, “Charges”). b) You agree to also pay for any costs that we incur in seeking to collect such Charges including, without limitation, court costs and attorney’s fees in addition to any administrative fees, cost of recovery, insufficient funds fees and collection fees (collectively, “Costs”). If the law permits, you authorize us and our collection agent, to contact you or your employer, at your place of business about the payment of any past due Charges or Costs. You also agree that we or our collection agent(s) may access the personal information that you provided to us in any effort to collect any Charges or Costs under this section and may use the address provided by you on the Rental Contract, or in any customer profile, as the place to send any demands or collection notices. c) In the event that you presented a credit card or debit card for payment, you understand that we may report such deficiency to an appropriate credit reporting agency and you also authorize us to share that credit and debit card information with third party collection agents and further authorize us or our collection agents to charge any amounts due to us including, but not limited to, the Charges and Costs referenced above, to that credit or debit card.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>28. Arbitration.</b> Pre-Dispute Resolution Procedure: Before asserting a claim in any proceeding (including, but not limited to, in an individual arbitration proceeding or in a small claims court proceeding), you and Avis agree that each shall give the other party written notice of the claim to be asserted 30 days before initiating a proceeding and make a reasonable good faith effort to resolve the claim. If you intend to assert a claim against Avis, you must send the written notice of the claim to Attention: Avis Rent A Car System, LLC, 6 Sylvan Way, Parsippany, New Jersey, 07054 Attn: Legal Department. If Avis intends to assert a claim against you, we will send the written notice of the claim to you at your address appearing in our records. The parties may, but are under no obligation to, engage in privileged settlement negotiations during this 30 day period. NO SETTLEMENT DEMAND OR SETTLEMENT OFFER USED IN THIS PRE-DISPUTE RESOLUTION PROCESS MAY BE USED IN ANY PROCEEDING, INCLUDING AS EVIDENCE OR AS AN ADMISSION OF ANY LIABILITY OR DAMAGES (OR LACK THEREOF).<u> Dispute Resolution: (Not applicable if mandatory arbitration is prohibited by law).  Except as otherwise provided below, in the event of a dispute that cannot be resolved informally through the pre-dispute resolution procedure, <b>all disputes between you and Avis arising out of, relating to or in connection with your rental of a car from Avis and the Rental Agreement shall be exclusively adjudicated by binding arbitration</b> through the American Arbitration Association (“AAA”) pursuant to the AAA’s then-current rules for commercial arbitration.<b> There is an impartial arbitrator but no judge or jury in arbitration. Both parties waive the right to jury trial.</b>  Arbitration procedures are simpler and more limited than rules applicable in court and review by a court is limited.</u>
                    </p>
                    <p className='px-6 pb-6'>
                        <u>YOU AND AVIS AGREE THAT ANY SUCH ARBITRATION SHALL BE CONDUCTED ON AN INDIVIDUAL BASIS AND NOT IN A CLASS, CONSOLIDATED OR REPRESENTATIVE ARBITRATION PROCEEDING. Notwithstanding any provision in the Rental Agreement to the contrary, if the class action waiver in the prior sentence is deemed invalid or unenforceable, neither you nor we are entitled to pursue dispute resolution by binding arbitration. If you are an individual (instead of, for instance, a partnership, corporation, or other form of entity or non-natural person), in the event that (1) your claim is less than $10,000, and (2) you are able to demonstrate that the costs of arbitration will be prohibitive as compared to costs of litigation, Avis will pay as much of your filing and hearing fees in connection with the arbitration as the arbitrator deems necessary to prevent the arbitration from being cost-prohibitive as compared to the cost of litigation. This arbitration agreement is subject to the Federal Arbitration Act. The arbitrator’s award may be entered in any court of competent jurisdiction. Notwithstanding any provision in the Rental Agreement to the contrary, the parties agree that if Avis seeks to delete or materially modify the agreement to arbitrate from this dispute resolution provision, any such deletion or material modification will not apply to any individual claim(s) of which you have already provided notice to Avis. Information on AAA, its rules and procedures, and how to file an arbitration claim can be found by contacting AAA at 800-778-7879 or on its website at http://www.adr.org.</u>
                    </p>
                    <p className='px-6 pb-6'>
                        Disputes and claims that are within the scope of a small claims court’s authority, as well as disputes and claims regarding personal injury and/or damage to or loss of a car related to your Avis rental, are exempt from the foregoing dispute resolution provision.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>29.  Communication Services and Satellite Radio.</b> You acknowledge that the car may be equipped with a communication service (such as OnStar or a similar service) (a "Communication System"), that provides emergency notification, navigation, diagnostics, tracking and other services, and a receiver for receiving audio signals from subscription satellite radio services to which Budget may subscribe ("Satellite Radio"). You expressly authorize all of those services. You acknowledge that you understand that a Communication System, such as OnStar,  requires the car’s electrical system and equipment, cellular service and satellite technologies to be available and operating to function properly. Not all services offered by the Communication System provider are available on all cars. The Communication System acts as a link to existing emergency and other service providers. Services are limited by, and neither the Communication System provider nor Budget is liable for, conditions or services outside their control. Any information (e.g. navigational route support) provided through a Communication System is on an “as is” basis. The Communication System provider (including OnStar), its service providers and Budget will not be liable to you or any user of the Communication System in connection with the use of such information. You understand and agree that the Communication System provider may provide us and/or law enforcement with all necessary information to enable us and/or law enforcement to locate the car, if you fail to return the car when and where required under the Rental Agreement. You agree to release and hold us, and the Communication System providers, harmless for any Communication System failures. You also agree to limit claims against the Communication System provider for damages for any losses under any theory to the pro rata portion of the rate for use of the car for one day.  If your rental car has active Communication System equipment, you understand that your use of the car is subject to the terms and conditions of the Communication System provider, including system and service limitations, warranty exclusions, limitations of liability, wireless service provider terms, privacy practices relating to the Communication System provider's collection, use and sharing of information about you and the car, and the application of other relevant provisions including responsibilities you have when using the Communication System.  You should review the Communication System provider's website for details regarding their Terms and Conditions and Privacy Statement. Details regarding the OnStar Terms and Conditions and Privacy Statement are available at OnStar.com. By proceeding to rent the car and sign this contract, you authorize the provision of the Communication System in accordance with and agree to be bound by the Terms and Conditions and Privacy Statement of the Communication System provider. Not every car is equipped with a Communication System and/or Satellite Radio. Some cars in our fleet may have a Communication System and/or Satellite Radio equipment, however, such equipment may not be active. We may charge separately for access to Satellite Radio as an optional accessory on the Rental Contract and the Rental Receipt. We may establish an access code for Satellite Radio or program the car not to give you access to Satellite Radio unless you have reserved that option in advance. If we provide you access to Satellite Radio based on your advance reservation, you will be charged for access whether or not you use this option. Unless you are advised that you have a car with a Communication System and/or Satellite Radio, you will not have access to the systems and you should not rely upon them or take steps to activate them. Renters shall not activate any service and in the event that a renter does activate a service in violation of this provision, the renter agrees to be completely responsible for the annual subscription and/or cancellation fees(s) for that service.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>30.  Additional Services and Products.</b> From time to time we may offer additional services and/or products with associated terms and conditions or terms of use. If you purchase and/or use these services or products you agree to be bound by such associated terms and conditions or terms of use, which are incorporated herein by reference.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>31. GPS by Garmin®</b> At various locations, Avis may offer for rental a Garmin® Global Positioning System ("GPS") receiver for your use. If you rent such a unit you will pay the additional daily charge shown on the Rental Contract. This unit is not part of the car. You are responsible for any loss or damage to the unit and its accessories regardless of cause even if you have accepted LDW or PEP. If the unit and/or its accessories are lost or damaged so as to, in our sole opinion, require repair or replacement, you will pay us its repair or full retail cost, which may be as much as $499. If you return the unit to a location other than the renting location without our authorization, you will pay us a fee for that unauthorized return.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>32. Use of GPS Tracking Devices.</b> We use GPS tracking devices to track or locate cars which may be late for their scheduled return, reported stolen, suspected of being lost, stolen, or abandoned or as may be required or requested by law enforcement, or to identify cars which have been damaged and may require roadside assistance, when we have a good faith belief that there is an emergency that poses a threat to your safety or the safety of another person, or as necessary to defend, protect or enforce our rights in connection with the use of our products and/or services. You should have no expectation of privacy or confidentiality as to the places where the car is driven while rented to you.
                    </p>
                    <p className='px-6 pb-6'>
                        For a copy of our Privacy Notice, please go to www.avis.com/privacy or write to Privacy Officer, Avis, 6 Sylvan Way, Parsippany, NJ 07054
                    </p>
                    <p className='px-6 pb-6'>
                        <b>33. Connected Car & Location Data.</b>
                    </p>
                    <p className='px-6 pb-6'>
                        <u>Equipment.</u> Certain cars contain devices that monitor the car’s condition, performance and operation, track fuel consumption, distance travelled, location and other information (the “Connected Car Data”), and may transmit such Connected Car Data to us, our third party providers and/or the car manufacturer. Some or all of these communications are turned on all the time, even when other services or other media in the car are turned off.
                    </p>
                    <p className='px-6 pb-6'>
                        We cannot guarantee that a car without these features will be available at your time of rental.
                    </p>
                    <p className='px-6 pb-6'>
                        These devices may have been installed by us, on our behalf, or by the car manufacturer. If the devices are installed by the car manufacturer, the car manufacturer will process the Connected Car Data in accordance with its privacy notice. We do not provide the car manufacturer with your personally identifiable information ("PII"), unless authorized by you, or is necessary in connection with the provision of services provided through such car manufacturer, or is required by law. We may enter into agreements with car manufacturers to receive some or all of the Connected Car Data collected by these devices.  We may use a third party to process the Connected Car Data on our behalf. We do not provide the third party processor with your PII, unless authorized by you, necessary in connection with the provision of services provided through such third party, or required by law.
                    </p>
                    <p className='px-6 pb-6'>
                        <u>Uses.</u>  If equipped and where permitted by law, we use these devices and the Connected Car Data for some or all of these purposes: (i) to provide certain aspects of our services to you e.g. remote lock/unlock, remote disable engine/cancel ignition, and automatically transmit vehicle data such as location, odometer, fuel level and other data during the rental; (ii) to manage your car rental e.g. start your rental, exchange or upgrade your car; (iii) to enable us to better understand how our cars are being used; (iv) to optimize our operations; (v) to assist in the handling of any liability or property damage claims; (vi) to provide roadside assistance services; (vii) to assist in the recovery of cars which are overdue, lost or reported stolen, or suspected of being lost or stolen; (viii) to develop new products and services and enhance our existing products and services; (ix) to respond to requests from law enforcement and/or regulatory authorities; (x) as necessary to defend, protect or enforce our rights in connection with the use of  our products and/or services, (xi) to protect the rights and/or property of Avis or third parties; (xii) when we have a good faith belief that there is an emergency that poses a threat to your safety or the safety of another person, or in other circumstances in which we reasonably believe our cars are being or have been used in violation of law or otherwise in the commission of a crime; and (xiii) to comply with law.  Connected Car Data is collected, used, retained & disclosed for purposes stated in the Privacy section below.
                    </p>
                    <p className='px-6 pb-6'>
                        <u>Privacy.</u> We collect, use and share your PII with Avis System affiliates, licensees and other third parties to: (a) provide and administer the services you request, including use of corporate discounts and loyalty programs; (b) carry out relevant identity, fraud, security, driving license and credit checks; (c) maintain, develop and improve the administration and management of our services; (d) protect our interests and enforce our rights, including pursuing available remedies or limiting damage that we may sustain; (e) protect the rights, privacy, safety and/or property of you and others; (f) comply with or as permitted by law; and (g) provide you with information about goods and services we think may interest you, unless you opt out.  You may limit the use and sharing of your PII for marketing purposes, and you may access or correct your PII. Also see the Connected Car & Location Data section above. This information may be used by us during and after the rental period (if applicable law allows). To provide you services or in the course of our business operations, we may need to transfer your PII to locations outside of the country where you rented the car, and your PII may be subject to laws of other countries.  By requesting and using our services, you expressly agree to our collection, use and sharing of your PII for as long as the law allows. For more detail about our privacy practices please see the full Privacy Notice which may be obtained at www.avis.com/privacy or by writing to Privacy Office, Avis Budget Group Inc., 6 Sylvan Way, Parsippany, NJ 07054.
                    </p>
                    <p className='px-6 pb-6'>
                        <u>Download of Your Address Book and Other Information from Your Mobile Device.</u>  Some of our vehicles allow you to connect your personal phone or device via Bluetooth to the vehicle's electronic system.  If you choose to do so, the vehicle may automatically load your address book, store your incoming, outgoing and missed telephone calls, and other information from your device.  You should follow the steps displayed on the vehicle system screen to delete this information and the device from the vehicle's memory.  Avis is not responsible for assuring the privacy of any such information, and cannot guarantee that other persons you do not authorize will gain access to this information after you return the vehicle.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>34. Other Important Provisions.</b> We may transfer our rights and obligations under these Terms and Conditions to another party, but this will not affect your rights or the obligations of the provider under the Rental Agreement.  You may only transfer your rights or obligations under these Rental Terms and Conditions to another person if we agree in writing.  If we fail to insist that you perform any of your obligations, or if we do not enforce our rights against you, or if we delay in doing so, that will not mean that we have waived our rights against you and will not mean that you do not have to comply with those obligations. If we do waive a default by you, we will only do so in writing, and that will not mean that we will automatically waive any later default by you. Each of the provisions of the Rental Agreement operate separately. If any court or competent jurisdiction decides that any discrete provision of them is unlawful or unenforceable, the remaining provisions will remain in full force and effect.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>35. Cooperation.</b> You agree to cooperate and coordinate with Avis generally and to take any actions Avis reasonably requests  in connection with (i) this Rental Agreement, (ii) your use and return of the car, and (iii) any disputes, actions, proceedings, suits, and investigations related to this Rental Agreement or your use of the car, including without limitation, execution and delivery of any documents Avis reasonably requests, giving testimony under oath, and taking any other actions Avis reasonably requests related to this Rental Agreement or your car rental.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>36. State Specific Notices.</b>  The following notices and requirements apply if you rent a car from Avis in any of the following states or if you take a car into any of the following states:
                    </p>
                    <p className='px-6 pb-6'>
                        <b><u>CANADA:</u></b>
                    </p>
                    <p className='px-6 pb-6'>
                        <u>Valid Driver's License.</u> As the renter or signatory of this Agreement, you certify that you hold a valid driver’s license for the appropriate class authorizing you to drive the car or cars described in the contract and you undertake to ensure that any person called upon to drive the said car or cars also holds a valid driver’s license for the appropriate class pursuant to local law.
                    </p>
                    <p className='px-6 pb-6'>
                        <u>Loss Damage Waiver.</u> In Canada, if you accept LDW, there may nevertheless be a non-waivable amount for which you will be responsible in the event of loss or damage to the car, which amount will be specified on the Rental Contract at the time of rental.  Currently this amount is a maximum of CA $500.
                    </p>
                    <p className='px-6 pb-6'>
                        <u>Liability Protection:</u> Anyone driving the car who is permitted to drive it by the Rental Agreement will be protected against liability for causing bodily injury or death to others or damaging the property of someone other than the driver and/or the renter up to the minimum financial responsibility limits required by the law of the jurisdiction in which the accident occurs.  The limit for bodily injury sustained by one person includes any claim for loss of that person’s consortium or services.  Where the law extends this protection to a non-Permitted Driver, the same limits apply.  Except where required by law to be primary, any protection provided by us shall be secondary to any applicable insurance available to you or any other driver from any other source, whether primary, excess, secondary or contingent in any way.  Such protection will be provided by us according to the terms and subject to all of the conditions of a standard automobile liability insurance policy, issued in the jurisdiction in which the accident occurs, including all requirements as to notice and cooperation on your part, which are hereby made a part of this Agreement.  You agree that we can provide this protection under a certificate of self-insurance or an insurance policy or both as we choose.  In any case, a copy of the policy and/or certificate will be available for your inspection at our main office.  You understand and agree that unless required by applicable law we will not provide:
                    </p>
                    <p className='px-6 pb-6'>
                        1. coverage for fines, penalties, punitive or exemplary damages;
                    </p>
                    <p className='px-6 pb-6'>
                        2. coverage for bodily injury to you, or your death, while not a driver, or any member of your family or the driver’s family;
                    </p>
                    <p className='px-6 pb-6'>
                        3. defense against any claim after applicable limits or coverage that you furnish have been tendered;
                    </p>
                    <p className='px-6 pb-6'>
                        4. supplementary no fault, non-compulsory uninsured or undersigned motorist coverage, and any other optional or rejectable coverage, and you and we reject all such coverages where and to the extent permitted by law.  Where any of these coverages are required or implied by law, the limits shall be the minimum required under the applicable statute.
                    </p>
                    <p className='px-6 pb-6 text-left'>
                        <b><u>ARIZONA:</u></b>
                    </p>
                    <p className='px-6 pb-6'>
                        <u>Return of Car.</u> Arizona Revised Statute Section 13-1806 provides the following, "A person commits unlawful failure to return rented property if, without notice to and permission of the lessor of the property, the person knowingly fails without good cause to return the property within seventy-two hours after the time provided for in the rental agreement. Unlawful failure to return rented or leased property if the property is a motor vehicle is a class 5 felony." The maximum penalty for this offense is imprisonment for 2 years and a fine of not more than $150,000 for the first offense.
                    </p>
                    <p className='px-6 pb-6'>
                        <u>Liability Protection.</u> YOU ACKNOWLEDGE THAT, PURSUANT TO ARIZONA REVISED STATUTES SECTION 28-2166, AVIS DOES NOT EXTEND ANY OF ITS MOTOR VEHICLE FINANCIAL RESPONSIBILITY OR PROVIDE PUBLIC LIABILITY INSURANCE COVERAGE TO THE RENTER, ANY PERMITTED DRIVER OR ANY OTHER DRIVER.
                    </p>
                    <p className='px-6 pb-6 text-left'>
                        <b><u>CALIFORNIA:</u></b>
                    </p>
                    <p className='px-6 pb-6'>
                        <b>NOTICE ABOUT YOUR FINANCIAL RESPONSIBILITY AND OPTIONAL DAMAGE WAIVER</b>
                    </p>
                    <p className='px-6 pb-6'>
                        You are responsible for all collision damage to the rented vehicle even if someone else caused it or the cause is unknown. You are responsible for the cost of repair up to the value of the vehicle, and towing, storage, and impound fees.
                    </p>
                    <p className='px-6 pb-6'>
                        Your own insurance, or the issuer of the credit card you use to pay for the vehicle rental transaction, may cover all or part of your financial responsibility for the rented vehicle. You should check with your insurance company, or credit card issuer, to find out about your coverage and the amount of the deductible, if any, for which you may be liable.
                    </p>
                    <p className='px-6 pb-6'>
                        Further, if you use a credit card that provides coverage for your potential liability, you should check with the issuer to determine if you must first exhaust the coverage limits of your own insurance before the credit card coverage applies.
                    </p>
                    <p className='px-6 pb-6'>
                        The cost per day of the optional damage waiver is stated on your Rental Contract, Rental Receipt or other documents which make up the Rental Agreement.
                    </p>
                    <p className='px-6 pb-6'>
                        <u>Liability Protection.</u> With respect to rentals commencing in California, the Rental Agreement does not afford you, or any other driver, any insurance or protection against liability in those two states. You nevertheless agree to promptly notify us of any accident in which the car is involved and to assist and cooperate with us in the investigation, including any police investigation and handing of such accident or claim of liability against you or us arising out of such accident or otherwise out of your rental. You also agree to promptly advise us of any suit, claim or communication you receive, or which you know another driver of the car receives, that is related to any such accident. You will report any accident or loss involving the car to the police and/or motor vehicle department, as required by local law.
                    </p>
                    <p className='px-6 pb-6 text-left'>
                        <b><u>COLORADO:</u></b>
                    </p>
                    <p className='px-6 pb-6'>
                        <b>THIS CONTRACT OFFERS, FOR AN ADDITIONAL CHARGE, A COLLISION DAMAGE WAIVER TO COVER YOUR RESPONSIBILITY FOR DAMAGE TO THE VEHICLE. YOU ARE ADVISED NOT TO SIGN THIS WAIVER IF YOU HAVE RENTAL VEHICLE COLLISION COVERAGE PROVIDED BY CERTAIN GOLD OR PLATINUM CREDIT CARDS OR COLLISION INSURANCE ON YOUR OWN VEHICLE. BEFORE DECIDING WHETHER TO PURCHASE THE COLLISION DAMAGE WAIVER, YOU MAY WISH TO DETERMINE WHETHER YOUR OWN VEHICLE INSURANCE AFFORDS YOU COVERAGE FOR DAMAGE TO THE RENTAL VEHICLE AND THE AMOUNT OF THE DEDUCTIBLE UNDER YOUR OWN INSURANCE COVERAGE. THE PURCHASE OF THIS COLLISION DAMAGE WAIVER IS NOT MANDATORY AND MAY BE WAIVED.</b>
                    </p>
                    <p className='px-6 pb-6 text-left'>
                        <b><u>CONNECTICUT:</u></b>
                    </p>
                    <p className='px-6 pb-6'>
                        To determine the annualized charge for Loss Damage Waiver ("LDW" or "PDW"), multiply the daily rate found on page 1 of the Rental Contract by 365 days. Loss Damage Waiver covers loss or damage due to theft, collision, vandalism, or any other cause. Whether or not you accept Loss Damage Waiver, or if Loss Damage Waiver is not permitted, you are responsible for the loss or damage to the car that is caused by you or by an authorized additional driver through intentional or willful and wanton misconduct; driving while intoxicated or using drugs; participation in any organized or racing competition; transporting persons or property for hire; commission of a felony or an act that could be a felony; failure to complete an accident or theft report; use or operation by an unauthorized driver; violation of the terms of the Rental Agreement; operating off paved roads, use to push or tow something; or obtaining car through fraud or misrepresentation. You should examine your personal auto insurance policy or credit card, including deductible and limit of coverage, because it may cover loss or damage and personal injury incurred while you are using or operating a rental car. If your responsibility for any loss or damage is covered by your own insurance, you will authorize Avis to deal with the carrier. Avis will refund any sum collected above the amount of the cost of repair.
                    </p>
                    <p className='px-6 pb-6 text-left'>
                        <b><u>DISTRICT OF COLUMBIA</u></b>
                    </p>
                    <p className='px-6 pb-6'>
                        <b><u>Car Seats for Children.</u> Pursuant to D.C. Code Section: § 50–1703, the operator of a motor vehicle may not transport any child of less than 3 years of age unless the child is properly restrained in a child restraint seat. The operator of a motor vehicle shall not transport any child under 16 years of age unless the child is properly restrained in an approved child safety restraint system or restrained in a seat belt. Children under 8 years of age shall be properly seated in an installed infant, convertible (toddler) or booster child safety seat, according to the manufacturer’s instructions. A booster seat shall only be used with both a lap and shoulder belt. A parent or legal guardian may transport his or her own child without restraint if that person is transporting a number of his or her own children of less than 16 years of age which exceeds the number of passenger positions equipped with safety belts in the motor vehicle. However, an unrestrained child may not be transported in the front seat of a motor vehicle.</b>
                    </p>
                    <p className='px-6 pb-6'>
                        <b><u>Return of Car:</u> WARNING - Failure to return the car you rent in accordance with the terms of the Rental Agreement may result in a criminal penalty of up to 3 years in jail.</b>
                    </p>
                    <p className='px-6 pb-6 text-left'>
                        <b><u>FLORIDA:</u></b>
                    </p>
                    <p className='px-6 pb-6 text-left'>
                        <u>Return of Car.</u>  Failure to return rental property or equipment upon expiration of the rental period and failure to pay all amounts due (including costs for damage to the property or equipment) are evidence of abandonment or refusal to redeliver the property, punishable in accordance with section 812.155, Florida Statutes.
                    </p>
                    <p className='px-6 pb-6'>
                        <u>Liability Protection.</u> The valid and collectible liability insurance and personal injury protection insurance of any authorized rental or leasing driver is primary for the limits of liability and personal injury protection coverage required by §§  324.021 (7)  and  627.736, Florida Statutes.
                    </p>
                    <p className='px-6 pb-6 text-left'>
                        <b><u>HAWAII:</u></b>
                    </p>
                    <p className='px-6 pb-6'>
                        1. LDW is optional. 2. LDW entails an additional charge. 3. The actual charge per day for LDW is stated on your Rental Contract, Rental Receipt or other documents which make up the Rental Agreement. 4. All restrictions, conditions, and provisions of LDW are in Paragraph 13. 5. The renter or authorized driver may already be covered for damage to rental vehicle through their own insurance policy and should examine the policy to determine whether the policy provides coverage for damage, loss, or loss of use to a rented vehicle, and the amount of the deductible. 6. By entering into the rental agreement, renter may be liable for damages, loss, or loss of use to rental vehicle. Renter has read, understands and acknowledges this disclosure.
                    </p>
                    <p className='px-6 pb-6 text-left'>
                        <b><u>ILLINOIS:</u></b>
                    </p>
                    <p className='px-6 pb-6'>
                        <b>This contract offers, for an additional charge, a collision damage waiver to cover your financial responsibility for damage to the rental vehicle. The purchase of a collision damage waiver is optional and may be declined. You are advised to carefully consider whether to sign this waiver if you have rental vehicle collision coverage provided by your credit card or collision insurance on your own vehicle. Before deciding whether to purchase the collision damage waiver, you may wish to determine whether your own vehicle insurance affords you coverage for damage to the rental vehicle and the amount of deductible under your own insurance coverage.</b>
                    </p>
                    <p className='px-6 pb-6 text-left'>
                        <b><u>INDIANA:</u></b>
                    </p>
                    <p className='px-6 pb-6'>
                        1. LDW is optional. 2. LDW entails an additional charge. 3. The actual charge per day for LDW is LDW is stated on your Rental Contract, Rental Receipt or other documents which make up the Rental Agreement.. 4. All restrictions, conditions, and provisions of LDW are in Paragraph 13. 5. The renter or authorized driver may already be covered for damage to rental vehicle through their own insurance policy and should examine the policy to determine whether the policy provides coverage for damage, loss, or loss of use to a rented vehicle, and the amount of the deductible. 6. By entering into the rental agreement, renter may be liable for damages, loss, or loss of use to rental vehicle. Renter has read, understands and acknowledges this disclosure.
                    </p>
                    <p className='px-6 pb-6 text-left'>
                        <b><u>IOWA:</u></b>
                    </p>
                    <p className='px-6 pb-6'>
                        NOTICE: THIS CONTRACT OFFERS, FOR AN ADDITIONAL CHARGE, A COLLISION DAMAGE WAIVER TO COVER ALL OR PART OF YOUR RESPONSIBILITY FOR DAMAGE TO THE RENTAL VEHICLE. BEFORE DECIDING WHETHER TO PURCHASE THE COLLISION DAMAGE WAIVER, YOU MAY WISH TO DETERMINE WHETHER YOUR OWN AUTOMOBILE INSURANCE AFFORDS YOU COVERAGE FOR DAMAGE TO THE RENTAL VEHICLE AND THE AMOUNT OF THE DEDUCTIBLE UNDER YOUR OWN INSURANCE COVERAGE. THE PURCHASE OF THIS COLLISION DAMAGE WAIVER IS NOT MANDATORY AND MAY BE DECLINED.
                    </p>
                    <p className='px-6 pb-6 text-left'>
                        <b><u>IOWA:</u></b>
                    </p>
                    <p className='px-6 pb-6'>
                        <b>NOTICE: THIS CONTRACT OFFERS, FOR AN ADDITIONAL CHARGE, A COLLISION DAMAGE WAIVER TO COVER YOUR RESPONSIBILITY FOR DAMAGE TO THE VEHICLE. BEFORE DECIDING WHETHER TO PURCHASE THE COLLISION DAMAGE WAIVER, YOU MAY WISH TO DETERMINE WHETHER YOUR OWN AUTOMOBILE INSURANCE AFFORDS YOU COVERAGE FOR DAMAGE TO THE RENTAL VEHICLE AND THE AMOUNT OF THE DEDUCTIBLE UNDER YOUR OWN INSURANCE COVERAGE. THE PURCHASE OF THIS COLLISION DAMAGE WAIVER IS NOT MANDATORY AND MAY BE WAIVED.</b>
                    </p>
                    <p className='px-6 pb-6 text-left'>
                        <b><u>LOUISIANA:</u></b>
                    </p>
                    <p className='px-6 pb-6'>
                        <b>NOTICE: IF YOU HAVE COLLISION COVERAGE UNDER YOUR OWN AUTOMOBILE INSURANCE POLICY WRITTEN IN LOUISIANA, YOUR COLLISION COVERAGE AUTOMATICALLY EXTENDS TO RENTAL MOTOR VEHICLES PURSUANT TO  R.S. 22:1296.</b>
                    </p>
                    <p className='px-6 pb-6'>
                        <b>EVEN IF YOU ARE NOT A LOUISIANA INSURED, THE PURCHASE OF COLLISION DAMAGE WAIVER IS NOT MANDATORY AND MAY BE WAIVED. THIS CONTRACT OFFERS, FOR AN ADDITIONAL CHARGE, A COLLISION DAMAGE WAIVER TO COVER YOUR RESPONSIBILITY FOR DAMAGE TO THE VEHICLE. BEFORE DECIDING WHETHER TO PURCHASE THE COLLISION DAMAGE WAIVER, YOU MAY WISH TO DETERMINE WHETHER YOUR OWN AUTOMOBILE INSURANCE AFFORDS YOU COVERAGE FOR DAMAGE TO THE RENTAL VEHICLE AND THE AMOUNT OF THE DEDUCTIBLE UNDER SUCH COVERAGE.</b>
                    </p>
                    <p className='px-6 pb-6 text-left'>
                        <b><u>MARYLAND:</u></b>
                    </p>
                    <p className='px-6 pb-6'>
                        <b>Notice: This contract offers, for an additional charge, a collision damage waiver to cover your responsibility for damage to the vehicle. Before deciding whether to purchase the collision damage waiver, you may wish to determine whether your own automobile insurance affords you coverage for damage to the rental vehicle and the amount of the deductible under your own insurance coverage. The purchase of this collision damage waiver is not mandatory and may be waived. Maryland law requires that all Maryland residents' insurance policies with collision coverage automatically extend that collision coverage to passenger cars rented by the insureds named in the policy for a period of 30 days or less.</b>
                    </p>
                    <p className='px-6 pb-6 text-left'>
                        <b><u>MASSACHUSETTS:</u></b>
                    </p>
                    <p className='px-6 pb-6'>
                        This contract offers, for an additional charge, a Collision Damage Waiver to cover your financial responsibility for damage to the rental vehicle. Your personal automobile insurance may already cover you for damage to a rental car. The purchase of a Collision Damage Waiver is optional and may be declined. For Massachusetts drivers: If you have an automobile policy on your personal vehicle with coverage for collision, your policy will cover collision damage to a rental vehicle, less the deductible on your policy. Drivers who hold policies in other states should check with their insurance agents to determine whether their policies extend to rental vehicles.
                    </p>
                    <p className='px-6 pb-6 text-left'>
                        <b><u>MICHIGAN:</u></b>
                    </p>
                    <p className='px-6 pb-6'>
                        Under Michigan law, Avis is liable for an injury caused by the negligent operation of the rented car only up to the maximum amounts of $20,000 because of bodily injury to or death of one (1) person in any one (1) accident and $40,000 because of bodily injury or death of two (2) or more persons in any one accident, and only if the car was being operated by the renter or other authorized driver or by the renter’s spouse, domestic partner, father, mother, brother, sister, son, daughter or other immediate family member.  The renter may be liable to Avis up to those amounts, and to injured persons for amounts awarded in excess of those amounts.
                    </p>
                    <p className='px-6 pb-6 text-left'>
                        <b><u>MINNESOTA:</u></b>
                    </p>
                    <p className='px-6 pb-6'>
                        <b>Under Minnesota law, a personal automobile insurance policy must:  (1) cover the rental of this motor vehicle against damage to the vehicle and against loss of use of the vehicle; and (2) extend the policy's basic economic loss benefits, residual liability insurance, and uninsured and underinsured motorist coverages to the operation or use of a rented motor vehicle. Therefore, purchase of any collision damage waiver or similar insurance affected in this rental contract is not necessary. In addition, purchase of any additional liability insurance is not necessary if your policy was issued in Minnesota unless you wish to have coverage for liability that exceeds the amount specified in your personal automobile insurance policy.</b>
                    </p>
                    <p className='px-6 pb-6 text-left'>
                        <b><u>MISSOURI:</u></b>
                    </p>
                    <p className='px-6 pb-6'>
                        <b>COLLISION DAMAGE WAIVER AND CAR RENTAL INSURANCE NOTICE: OUR CONTRACT OFFERS FOR AN ADDITIONAL CHARGE COLLISION DAMAGE WAIVER AND CAR RENTAL INSURANCE PRODUCTS. BEFORE DECIDING WHETHER TO PURCHASE ANY OF THESE OPTIONAL PRODUCTS, YOU MAY WISH TO DETERMINE WHETHER YOUR PERSONAL INSURANCE OR CREDIT CARD PROVIDES YOU COVERAGE DURING THE RENTAL PERIOD. THE PURCHASE OF ANY OF THESE OPTIONAL PRODUCTS IS NOT REQUIRED TO RENT A VEHICLE.</b>
                    </p>
                    <p className='px-6 pb-6 text-left'>
                        <b><u>NEW YORK:</u></b>
                    </p>
                    <p className='px-6 pb-6'>
                        <b><u>Loss Damage Waiver.</u></b> This contract offers, for an additional charge, optional vehicle protection to cover your financial responsibility for damage or loss to the rental vehicle. The purchase of optional vehicle protection is optional and may be declined. You are advised to carefully consider whether to purchase this protection if you have rental vehicle collision coverage provided by your credit card or automobile insurance policy. Before deciding whether to purchase optional vehicle protection, you may wish to determine whether your credit card or your vehicle insurance affords you coverage for damage to the rental vehicle and the amount of deductible under such coverage.
                    </p>
                    <p className='px-6 pb-6'>
                        Failure to completely and accurately fill out and return an incident report within ten days of receipt of this notice may make the authorized driver liable for damages sustained to the rental vehicle. Except where the damaged vehicle is determined to be a total loss and subject to salvage, the authorized driver or his or her insurer has seventy-two hours from the return of the vehicle to notify the rental vehicle company that he or she wishes to inspect the damaged vehicle. The inspection must be completed within seven business days of the return date of the vehicle. If the authorized driver or his or her insurer does not request this inspection within the seventy-two hour period, the authorized driver or his or her insurer will be deemed to have waived this right. If the rental vehicle company determines the damaged vehicle to be a total loss and subject to salvage, such seventy-two hour period for notification or waiver of the wish to inspect the damaged vehicle shall not apply, and such right to inspect the damaged vehicle shall expire ten business days from the authorized driver's receipt of this notice from the rental vehicle company at the return of the vehicle or receipt of the first mailing of this notice in the event of return of the vehicle by automation or after hours. Upon request of the authorized driver or his or her insurer, we will provide a copy of our estimate of the costs of repairing the damaged motor vehicle.
                    </p>
                    <p className='px-6 pb-6'>
                        <b><u>Who May Drive the Car.</u>  New York State Law prohibits the following practices by rental vehicle companies based upon race, color, ethnic origin, religion, disability, sex, marital status, or age: (1) refusal to rent; (2) the imposition of any additional charge (except in certain instances where the renter is under the age of 25). In addition, it is unlawful for any rental vehicle company to refuse to rent a vehicle to any person solely on the requirement of ownership of a credit card.</b>
                    </p>
                    <p className='px-6 pb-6 text-left'>
                        <b><u>OREGON:</u></b>
                    </p>
                    <p className='px-6 pb-6'>
                        <b>Our contracts offer, for an additional charge, a collision damage waiver to cover your responsibility for damage to the vehicle. Before deciding whether or not to purchase the collision damage waiver, you may wish to determine whether your own vehicle insurance affords you coverage for damage to the rental vehicle and the amount of the deductible under your own insurance coverage. The purchase of this collision damage waiver is not mandatory and may be waived.</b>
                    </p>
                    <p className='px-6 pb-6'>
                        <b><u>PENNSYLVANIA:</u></b>
                    </p>
                    <p className='px-6 pb-6'>
                        REJECTION OF UNINSURED MOTORIST PROTECTION: You are rejecting uninsured motorist coverage under this rental or lease agreement, and any policy of insurance or self-insurance issued under this agreement, for yourself and all other passengers of this car.  Uninsured coverage protects you and other passengers in the car for losses and damages suffered if injury is caused by the negligence of a driver who does not have any insurance to pay for losses and damages
                    </p>
                    <p className='px-6 pb-6'>
                        <b><u>RHODE ISLAND:</u></b>
                    </p>
                    <p className='px-6 pb-6'>
                        This contract offers, for an additional charge, a collision damage waiver to cover your responsibility for damage to the vehicle. Before deciding whether to purchase the collision damage waiver, you may wish to determine whether your own automobile insurance affords you coverage for damage to the rental vehicle and the amount of the deductible under your own insurance coverage. The purchase of collision damage waiver is not mandatory under this contract.
                    </p>
                    <p className='px-6 pb-6'>
                        "Read the collision damage waiver disclosure provision contained in the Rental Agreement before signing this agreement."
                    </p>
                    <p className='px-6 pb-6'>
                        <b>Notice About Liability for Damage to the Rental Car</b>
                    </p>
                    <p className='px-6 pb-6'>
                        <b>The State of Rhode Island requires us to provide the following information about your liability for damage to the rental car and the purchase of a damage waiver.</b>
                    </p>
                    <p className='px-6 pb-6'>
                        <b>Insurance or Credit Card Coverage</b>
                    </p>
                    <p className='px-6 pb-6'>
                        <b>Liability for any damage to the rental vehicle may be covered by your personal insurance policy or credit agreement. Check your insurance policy or credit card agreement about coverage.</b>
                    </p>
                    <p className='px-6 pb-6'>
                        <b>Damage Waiver Coverage</b>
                    </p>
                    <p className='px-6 pb-6'>
                        <b>A damage waiver is not insurance coverage. You do not have to purchase the Collision Damage Waiver. You can decline it. If you purchase a damage waiver, we will waive our right to hold you or any authorized driver liable for damage. Even if you buy the damage waiver, you and any authorized driver will remain liable for damage if any of the following apply:</b>
                    </p>
                    <p className='px-6 pb-6'>
                        <b>(1) Damage or loss caused intentionally, willfully or wantonly by an authorized driver;</b>
                    </p>
                    <p className='px-6 pb-6'>
                        <b>(2) Damage or loss occurring while an authorized driver operates the rental vehicle while legally intoxicated or under the influence of any illegal drug or chemical as defined or determined under the law of the state in which the damage occurred;</b>
                    </p>
                    <p className='px-6 pb-6'>
                        <b>(3) Damage or loss caused while an authorized driver is engaging in any speed contest;</b>
                    </p>
                    <p className='px-6 pb-6'>
                        <b>(4) Damage or loss caused while an authorized driver is using the vehicle to push or tow anything or using the vehicle to carry persons or property for hire, unless expressly authorized in the rental agreement;</b>
                    </p>
                    <p className='px-6 pb-6'>
                        <b>(5) Damage or loss incurred while an authorized driver is driving outside the United States or Canada, or, if state restrictions are imposed by the rental agreement if such damage or loss is incurred outside of those states where operation of the vehicle is expressly authorized in the rental agreement;</b>
                    </p>
                    <p className='px-6 pb-6'>
                        <b>(6) Damage or loss incurred while the vehicle is driven, with the renter's permission or accession, by anyone other than an authorized driver;</b>
                    </p>
                    <p className='px-6 pb-6'>
                        <b>(7) Damage or loss incurred after the private passenger automobile was rented or an authorized driver was approved as a result of fraudulent information provided to the rental company;</b>
                    </p>
                    <p className='px-6 pb-6'>
                        <b>(9) Damage or loss incurred if the vehicle is stolen and the renter or authorized driver fails to return the original ignition key, fails to file a police report within seventy-two (72) hours of discovering the theft, or fails to cooperate with the rental agency, police or other authorities in all matters connected with the investigation.</b>
                    </p>
                    <p className='px-6 pb-6'>
                        <b><u>TEXAS:</u></b>
                    </p>
                    <p className='px-6 pb-6'>
                        <u>Loss Damage Waiver.</u> Your rental agreement offers, for an additional charge, an optional waiver to cover all or a part of your responsibility for damage to or loss of the vehicle. Before deciding whether to purchase the waiver, you may wish to determine whether your own automobile insurance or credit card agreement provides you coverage for rental vehicle damage or loss and determine the amount of the deductible under your own insurance coverage. The purchase of the waiver is not mandatory. The waiver is not insurance.
                    </p>
                    <p className='px-6 pb-6'>
                        <u>Liability Protection.</u> With respect to rentals commencing in Texas, the Rental Agreement does not afford you, or any other driver, any insurance or protection against liability in those two states. You nevertheless agree to promptly notify us of any accident in which the car is involved and to assist and cooperate with us in the investigation, including any police investigation and handing of such accident or claim of liability against you or us arising out of such accident or otherwise out of your rental. You also agree to promptly advise us of any suit, claim or communication you receive, or which you know another driver of the car receives, that is related to any such accident. You will report any accident or loss involving the car to the police and/or motor vehicle department, as required by local law.
                    </p>
                    <p className='px-6 pb-6'>
                        <b><u>UTAH:</u></b>
                    </p>
                    <p className='px-6 pb-6'>
                        Failure to return the car within 72 hours of the date and time specified in the Rental Contract may result in criminal penalties up to 15 years imprisonment and a fine of up to $10,000, or both.
                    </p>
                    <p className='px-6 pb-6'>
                        <b><u>VIRGINIA:</u></b>
                    </p>
                    <p className='px-6 pb-6'>
                        <b>THIS CONTRACT OFFERS, FOR AN ADDITIONAL CHARGE, A COLLISION DAMAGE WAIVER TO COVER YOUR RESPONSIBILITY FOR DAMAGE TO THE VEHICLE. BEFORE DECIDING WHETHER TO PURCHASE THE COLLISION DAMAGE WAIVER, YOU MAY WISH TO DETERMINE WHETHER YOUR OWN VEHICLE INSURANCE AFFORDS YOU COVERAGE FOR DAMAGE TO THE RENTAL VEHICLE AND THE AMOUNT OF THE DEDUCTIBLE UNDER YOUR OWN INSURANCE COVERAGE. THE PURCHASE OF THIS COLLISION DAMAGE WAIVER IS NOT MANDATORY AND MAY BE WAIVED.</b>
                    </p>
                    <p className='px-6 pb-6'>
                        <b><u> VERMONT:</u></b>
                    </p>
                    <p className='px-6 pb-6'>
                        NOTICE:  THE FAILURE TO RETURN A RENTED OR LEASED MOTOR VEHICLE WITHIN 72 HOURS AFTER THE DATE AND TIME SPECIFIED IN THE WRITTEN AGREEMENT WITHOUT EXTENDING THE DATE AND TIME IS A CRIME UNDER VERMONT LAW (13 V.S.A. §2592) AND MAY RESULT IN A CRIMINAL PENALTY OF UP TO FIVE YEARS IMPRISONMENT OR A $5,000.00 FINE, OR BOTH.
                    </p>
                    <p className='px-6 pb-6'>
                        <b><u>WISCONSIN:</u></b>
                    </p>
                    <p className='px-6 pb-6'>
                        <b>WHAT IF YOU DAMAGE A RENTAL CAR?</b>
                    </p>
                    <p className='px-6 pb-6'>
                        <b>We Must Provide You With An Important Notice About Your Liability For Damage To a Rental Car</b>
                    </p>
                    <p className='px-6 pb-6'>
                        <b>NOTICE ABOUT LIABILITY FOR DAMAGE TO THE RENTAL CAR</b>
                    </p>
                    <p className='px-6 pb-6'>
                        The State of Wisconsin requires us to provide the following information about your liability for damage to a rental car and the purchase of a damage waiver.  On rentals in Wisconsin, all provisions of this agreement are applicable, except to the extent of a conflict between the Wisconsin specific terms and the other terms of the agreement, in which case the Wisconsin specific terms shall govern.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>LIABILITY FOR DAMAGE TO THE RENTAL CAR</b>
                    </p>
                    <p className='px-6 pb-6'>
                        The Rental Agreement makes you and any authorized driver liable for any damage to the rental car caused by an accident, or by intentional, reckless or wanton misconduct, or by theft that you may have intentionally caused. Pursuant to Wisconsin Statutes, Section 344.574(2) total liability for any damage is limited to:
                    </p>
                    <p className='px-6 pb-6'>
                        (1) reasonable repair costs, less discounts available to us, or the fair market value of the car, whichever is less; and
                    </p>
                    <p className='px-6 pb-6'>
                        (2) actual and reasonable costs incurred by the rental company for towing the private passenger vehicle and for storage of the private passenger vehicle during the period before the renter notifies the rental company of the damage to the vehicle or for 14 days after the damage occurs, which period is shorter
                    </p>
                    <p className='px-6 pb-6'>
                        <b>LIABILITY FOR DAMAGE AFTER THE RENTAL CAR HAS BEEN STOLEN</b>
                    </p>
                    <p className='px-6 pb-6'>
                        If a person who drives the rental car without your authorization causes damage to the car, you may be liable for the damage as though you or an authorized driver was driving the car unless you do all of the following:
                    </p>
                    <p className='px-6 pb-6'>
                        (1) Refrain from leaving the ignition key in the car when you are not in the car.
                    </p>
                    <p className='px-6 pb-6'>
                        (2) Always keep the ignition key in your possession.
                    </p>
                    <p className='px-6 pb-6'>
                        (3) Immediately report to the local police if you learn the car has been stolen, or that an unauthorized person is driving the car.
                    </p>
                    <p className='px-6 pb-6'>
                        (4) Cooperate fully with the local police by providing any information you know that may be helpful.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>INSURANCE OR CREDIT CARD COVERAGE</b>
                    </p>
                    <p className='px-6 pb-6'>
                        Liability for any damage may be covered by your personal insurance policy or credit card agreement. Check your insurance policy or credit card agreement about coverage.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>DAMAGE WAIVER COVERAGE</b>
                    </p>
                    <p className='px-6 pb-6'>
                        A damage waiver is not insurance coverage. If you purchase a damage waiver for the cost set forth in the Rental Agreement, we will waive our right to hold you or any authorized driver liable for damage. Even if you buy a damage waiver, you and any authorized driver will remain liable for damage if you violate paragraph 15, or any of the following apply:
                    </p>
                    <p className='px-6 pb-6'>
                        (1) You cause, or any authorized driver causes, the damage intentionally or by reckless or wanton misconduct.
                    </p>
                    <p className='px-6 pb-6'>
                        (2) The damage occurs while you, or any authorized driver, operates the car in this state while under the influence of an intoxicant or other drug, as described by the laws of this state.
                    </p>
                    <p className='px-6 pb-6'>
                        (3) The damage occurs while you, or any authorized driver, is engaged in a race, speed, or endurance contest.
                    </p>
                    <p className='px-6 pb-6'>
                        (4) The damage occurs while you or any authorized driver is using, or has directed another to use, the car in the commission of a misdemeanor, or a felony, as defined by Wisconsin Statutes Section 939.60.
                    </p>
                    <p className='px-6 pb-6'>
                        (5) The damage occurs while you are using, or any authorized driver is using, the car to carry persons or property for hire.
                    </p>
                    <p className='px-6 pb-6'>
                        (6) The damage occurs while you are using, or any authorized driver is using, the car outside the United States and Canada, except as is permitted under the rental agreement.
                    </p>
                    <p className='px-6 pb-6'>
                        (7) The damage occurs while the car is operated on a surface not intended for use by private passenger vehicles.
                    </p>
                    <p className='px-6 pb-6'>
                        (8) You provide us misleading or false information in order to rent the car, which causes us to rent you the car when we would not have otherwise done so, or on terms to which we would not have otherwise agreed.
                    </p>
                    <p className='px-6 pb-6'>
                        (9) You, or an authorized driver who was operating the car when an accident occurred, fail to promptly report, to us and the police, the accident resulting in damage to the car.
                    </p>
                    <p className='px-6 pb-6'>
                        (10) The damage is caused by an unauthorized driver if you did not report a theft to the police within 24 hours after you learned the unauthorized driver took possession of the car, did not cooperate with the police in providing information about the theft,
                    </p>
                    <p className='px-6 pb-6'>
                        <b>NOTICE OF RIGHT TO INSPECT DAMAGE</b>
                    </p>
                    <p className='px-6 pb-6'>
                        If the car is damaged, we may not collect any amount for the damage unless you, or an authorized driver against whom we claim liability, have been promptly notified of your and your Insurers’ right to inspect the unrepaired car within two working days after we were notified of the damage. If you request, we must also give you a copy of any estimate we have obtained from a repair shop regarding any damage claim. Within 2 working days after receiving the estimates, you may request a second estimate from a competing repair shop and we must give you a copy of the second estimate.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>COMPLAINTS</b>
                    </p>
                    <p className='px-6 pb-6'>
                        If you have any complaints about our attempt to hold you liable for damage or would like a copy of the state law that fully sets for your rights and obligations, contact:
                    </p>
                    <p className='px-6 pb-6'>
                        Wisconsin Consumer Protection Bureau, P.O. Box 8911, Madison, WI 53708-8911    608-224-4960 (Madison area) or toll-free 1-800-422-7128.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>ADDITIONAL FLORIDA NOTICE:</b>
                    </p>
                    <p className='px-6 pb-6'>
                        <b>Supplemental Liability Insurance (SLI)</b>
                    </p>
                    <p className='px-6 pb-6'>
                        <b>What is Supplemental Liability Insurance (SLI)?</b>
                    </p>
                    <p className='px-6 pb-6'>
                        Avis has Supplemental Liability Insurance ("SLI") available at all Florida locations.
                    </p>
                    <p className='px-6 pb-6'>
                        SLI is a special optional service offered by Avis when you rent a car from Avis. It’s an “Excess Automobile Liability Insurance Policy” that provides additional liability insurance, within specified limits, above the limits provided in the Rental Agreement. SLI insures you, and authorized operators as defined in the Rental Agreement against claims made by third parties against you, the customer, for bodily injury/death and property damage caused by the use or operation of an Avis rental vehicle as permitted in the Rental Agreement. SLI is a separate insurance policy issued to Avis by ACE American Insurance Company.
                    </p>
                    <p className='px-6 pb-6'>
                        If you elect to accept SLI for an additional daily charge as shown on the Rental Agreement. <b>The purchase of SLI is not required in order to rent a car from Avis.</b>
                    </p>
                    <p className='px-6 pb-6'>
                        <b>What are the coverage limits provided by SLI?</b>
                    </p>
                    <p className='px-6 pb-6'>
                        The SLI coverage limits equal the difference between the minimum financial responsibility limits, if any, provided under paragraph 21 of the Rental Agreement and the SLI maximum $2,000,000 combined single limit per occurrence.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>When and where does SLI coverage apply?</b>
                    </p>
                    <p className='px-6 pb-6'>
                        You and authorized operators are covered while driving the rental car within the United States and Canada, but only if the car is rented and returned in the United States. Coverage does not apply in Mexico.
                    </p>
                    <p className='px-6 pb-6'>
                        <b>How do I report a claim?</b>
                    </p>
                    <p className='px-6 pb-6'>
                        If you are involved in an accident, you must complete an accident report and deliver it to the Avis rental location. In order to make a claim or give notice of a claim, send written notice to:
                    </p>
                    <p className='px-6 pb-6'>
                        Avis Rent A Car System, Inc.
                    </p>
                    <p className='px-6 pb-6'>
                        Attn: Claims
                    </p>
                    <p className='px-6 pb-6'>
                        P.O. Box 61247
                    </p>
                    <p className='px-6 pb-6'>
                        Virginia Beach, VA 23466
                    </p>
                    <p className='px-6 pb-6'>
                        1-866-446-8376
                    </p>
                    <p className='px-6 pb-6'>
                        How does SLI affect the application of your automobile or umbrella insurance policy?
                    </p>
                    <p className='px-6 pb-6'>
                        Your personal insurance policy providing coverage on an owned automobile, or other personal policy, may provide additional coverage, and to that extent, SLI may provide a duplication of coverage.
                    </p>
                    <p className='px-6 pb-6'>
                        Whether, at what point, and to what extent, your own policies apply can only be determined by your checking the terms of the policies themselves as these terms frequently vary. However, if SLI is accepted the protection afforded by SLI, and the limits of protection under the Rental Agreement, are primary to your own policies. This means that before your own policies would apply to pay a claim the $2,000,000 protection afforded by the combination of SLI and financial responsibility limits under the Rental Agreement limits would have to be exhausted. If you do not accept SLI your insurance, if any, is primary as stated om the Rental Agreement.
                    </p>
                    <p className='px-6 pb-6'>
                        What exclusions apply to SLI?
                    </p>
                    <p className='px-6 pb-6'>
                        The following highlights some of the exclusions that would preclude SLI. It is important that you read the rental agreement and the policy carefully for all exclusions.
                    </p>
                    <p className='px-6 pb-6'>
                        <ul className='space-y-1 list-disc list-inside pl-6 leading-tight'>
                            <li>Any Prohibited Use of the Car as described in paragraph 14 of the Rental Agreement</li>
                            <li>Bodily injury to or Property Damage to any Insured; nor, to the extent permitted by law in the state where the Rental</li>
                            <li>Agreement is signed, to Bodily Injury or Property Damage to any person who is related to any Insured by blood, marriage or adoption and residing in the same household.</li>
                            <li>“Uninsured Motorist”/”Underinsured Motorist” coverage are not provided by the policy except in states where mandated by law up to maximum amount of $100,000 or in such amounts as mandated by law</li>
                            <li>“No Fault” and other supplemental or optional coverages are not provided by the policy</li>
                            <li>Punitive or exemplary damages to the extent permitted by law.</li>
                        </ul>
                    </p>
                    <p className='px-6 pb-6'>
                        <b>Are there any special restrictions on the purchase of SLI?</b>
                    </p>
                    <p className='px-6 pb-6'>
                        For more information call Avis toll-free at: 1-800-331-1212. Visit Avis online at avis.com.
                    </p>
                    <p className='px-6 pb-6'>
                        This is a summary only of SLI. The specific terms, conditions and exclusions thereof are subject to all provisions, limitations and exclusions contained in the rental agreement and the SLI policy issued by ACE American Insurance Company, one of the U.S.-based subsidiaries of ACE Limited (NYSE: ACE) “ACE” and the ACE logo are service marks of the ACE Group, which is comprised of ACE Limited and its subsidiaries.</p>
                    <p className='px-6 pb-6 mb-1.5'>
                        This summary is not intended to provide a complete description of the policy’s terms, conditions and exclusions. For additional details, we invite you to examine a copy of the policy, which is available for your inspection, upon request, at the Avis location at which you are renting.  Avis employees, agents, or endorsees are not qualified to evaluate the adequacy of the renter’s existing coverage
                    </p>
                </div>

            </div>:<></>}

            

        </div>
    )
}

export default Dashboard;