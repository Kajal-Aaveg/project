import React, { useState } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';


function Privacy() {
    const [show, setShow] = useState(false);

    function openTerms() {
        setShow(true);
    }

    function closeTerms() {
        setShow(false)
    }

    return (
        <div className='w-screen h-screen flex justify-center items-center bg-transparent' id="MainPopupDiv">
            {show == true ? <></> :
                <button className='p-4 bg-blue-500 text-white border rounded-md' onClick={openTerms}>Click me</button>}

            {show == true ?
                <div className="w-[50%] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] h-5/6">
                    <div className="flex justify-between items-center w-full bg-white py-1 box-border cursor-default opacity-100 border-b border-slate-300 h-1/6">
                        <h1 className="text-2xl px-6 py-3">Privacy Policy for WTi Rent A Car LLC</h1>
                        <span className='pr-2 cursor-pointer' onClick={closeTerms}><CancelIcon /></span>
                    </div>
                    
                        <div className='p-6 flex flex-col relative overflow-y-visible bg-white overflow-auto h-5/6' >
                            <p>
                                <b>Introduction:</b> WTi Rent A Car LLC (“we,” “us,” or “our”) respects the privacy of our users (“user,”
                                “you,” or “your”) and is committed to protecting your personal information. This Privacy Policy
                                explains how we collect, use, disclose, and safeguard your information when you visit our website <a href='www.wticarrental.ae.'>www.wticarrental.ae.</a>
                            </p><br />
                            <h3><b>Scope and Consent</b></h3><br />
                            <p>
                                By accessing our services, you agree to the collection, processing, and use of data as described in this
                                Privacy Policy. Your use of our website and any dispute over privacy is subject to this Policy and our
                                Terms of Service, including limitations on damages and the resolution of disputes.
                            </p><br />
                            <h3><b>Information Collection and Use</b></h3><br />
                            <p>
                                We collect both “Personal Data” and “Non-Personal Data” about our users. Personal Data includes
                                your name, address, email address, and payment information, which you submit to us through the
                                registration process at our Site. Non-personal data includes non-identifiable information that may
                                include your IP address, analytics code, etc.
                            </p><br />
                            <div className='text-red-600' >
                                <h3><b>Legal Basis for Processing (GDPR Compliance):</b></h3><br />
                                <p>Explicitly state the legal basis for processing personal data under GDPR for EU residents.</p><br />
                                <p>Example: For our users based in the European Union, we process your Personal Data under the
                                    following legal bases:</p><br />
                                <div className='' >
                                    <ul className='list-disc list-inside pl-6 '>
                                        <li>Your consent;</li>
                                        <li>The need to perform a contract with you;</li>
                                        <li>The need to comply with legal obligations;</li>
                                        <li>The need to protect your vital interests;</li>
                                        <li>The need to protect your vital interests;</li>
                                        <li>Our legitimate interests, which do not override your fundamental rights and freedoms.</li>
                                    </ul><br />
                                </div>
                            </div>
                            <h3><b>Data Recipients and International Data Transfers:</b></h3><br />
                            <p>Your Personal Data may be transferred to — and maintained on — computers located outside of
                                your state, province, country, or other governmental jurisdiction where the data protection laws
                                may differ from those of your jurisdiction.</p><br />
                            <h3><b>Your Data Protection Rights:</b></h3><br />
                            <p>You have the right to access, correct, update, or request deletion of your Personal Data. You can also
                                object to processing, ask us to restrict processing, or request portability of your Personal Data.</p><br />
                            <h3><b>Security Measure:</b></h3><br />
                            <p>We implement appropriate technical and organizational measures to protect the security of your
                                personal data, including encryption and secure servers.</p><br />
                            <h3><b>Cookies and Tracking Technologies:</b></h3><br />
                            <p>Our Site uses cookies to identify you and your interests and to track your use of the Site. We also
                                utilize cookies and other technologies to manage access to certain content on our Site, protect the
                                Site, and to process any requests that you make to us.</p><br />
                            <h3><b>Children’s Privacy:</b></h3><br />
                            <p>Our Site is not intended for children under the age of 16 and we do not knowingly collect data from
                                this age group.</p><br />
                            <h3><b>Data Retention:</b></h3><br />
                            <p>We retain personal data only for as long as necessary to provide the services you have requested
                                and thereafter for a variety of legitimate legal or business purposes.</p><br />
                            <h3><b>Changes to This Privacy Policy:</b></h3><br />
                            <p>The Company may update this Privacy Policy from time to time. We will notify you of any changes by
                                posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically
                                for any changes.</p><br />
                            <h3><b>Contact Information:</b></h3><br />
                            <p>If you have any questions about this Privacy Policy, please contact us at <a href="[bookings@wtimobility.ae]">[bookings@wtimobility.ae].</a></p>
                        </div>
                    
                </div> : <></>}

        </div>
    )
}

export default Privacy;