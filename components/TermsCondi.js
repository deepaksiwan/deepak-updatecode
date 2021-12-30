import React, { useEffect } from 'react';

import Footer from './footer/Footer';
import MyNavbar from './header-section/MyNavbar';

const TermsCondi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className='terms-condi'>
      <MyNavbar />
      <div className='container container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-5'>
        <h1>Terms & Conditions</h1>
        <div className='section'>
          <p>
            The terms “We” / “Us” / “Our”/”Company” individually and
            collectively refer to MentorKart and the terms “Visitor” ”User”
            refer to the users.
          </p>
          <p>
            This page states the Terms and Conditions under which you (Visitor)
            may visit and use this Application. Please read this page carefully.
            MentorKart reserves the right to revise these Terms and Conditions
            at any time by updating this posting. You should visit this page
            periodically to re-appraise yourself of the Terms and Conditions,
            because they are binding on all users of this Application.
          </p>
          <hr />
        </div>
        <div className='section'>
          <h4>USE OF CONTENT</h4>
          <p>
            All logos, brands, marks headings, labels, names, signatures,
            numerals, shapes or any combinations thereof, appearing in this
            Application, except as otherwise noted, are properties either owned,
            or used under licence, by MentorKart. The use of these properties or
            any other content on this Application, except as provided in these
            terms and conditions or in the Application content, is strictly
            prohibited.
          </p>
          <p>
            You may not sell or modify the content of this Application or
            reproduce, display, publicly perform, distribute, or otherwise use
            the materials in any way for any public or commercial purpose
            without the MentorKart’s written permission.
          </p>
          <hr />
        </div>
        <div className='section'>
          <h4>ACCEPTABLE APPLICATION USE</h4>
          <div>
            <h5>(A) Security Rules</h5>
            <p>
              Visitors are prohibited from violating or attempting to violate
              the security of the Application, including, without limitation,
              (1) accessing data not intended for such user or logging into a
              server or account which the user is not authorised to access, (2)
              attempting to probe, scan or test the vulnerability of a system or
              network or to breach security or authentication measures without
              proper authorisation, (3) attempting to interfere with service to
              any user, host or network, overloading, “flooding”, “mail bombing”
              or “crashing”, or (4) sending unsolicited electronic mail,
              including promotions and/or advertising of products or services.
              Violations of system or network security may result in civil or
              criminal liability. MentorKart will have the right to investigate
              occurrences that it suspects as involving such violations and will
              have the right to involve, and cooperate with, law enforcement
              authorities in prosecuting users who are involved in such
              violations.
            </p>
          </div>
          <div>
            <h5>(B) General Rules</h5>
            <p>
              Visitors may not use the Application in order to transmit,
              distribute, store or destroy material (a) that could constitute or
              encourage conduct that would be considered a criminal offence or
              violate any applicable law or regulation, (b) in a manner that
              will infringe the copyright, trademark, trade secret or other
              intellectual property rights of others or violate the privacy or
              publicity of other personal rights of others, or (c) that is
              libellous, defamatory, pornographic, profane, obscene,
              threatening, abusive or hateful.
            </p>
          </div>
          <hr />
        </div>
        <div className='section'>
          <h4>INDEMNITY</h4>
          <p>
            The User unilaterally agree to indemnify and hold harmless, without
            objection, the Company, its officers, directors, employees and
            agents from and against any claims, actions and/or demands and/or
            liabilities and/or losses and/or damages whatsoever arising from or
            resulting from their use of MentorKart Application or their breach
            of the terms .
          </p>
          <hr />
        </div>
        <div className='section'>
          <h4>LIABILITY</h4>
          <p>
            User agrees that neither Company nor its group companies, directors,
            officers or employees shall be liable for any direct or/and indirect
            or/and incidental or/and special or/and consequential or/and
            exemplary damages, resulting from the use or/and the inability to
            use the service or resulting from any data or/and information or/and
            services purchased or/and obtained or/and messages received or/and
            transactions entered into through or/and from the service or/and
            resulting from unauthorized access to or/and alteration of user’s
            transmissions or/and data or/and arising from any other matter
            relating to the service, including but not limited to, damages for
            loss of profits or/and use or/and data or other intangible, even if
            Company has been advised of the possibility of such damages.
          </p>
          <p>
            User further agrees that Company shall not be liable for any damages
            arising from interruption, suspension or termination of service,
            including but not limited to direct or/and indirect or/and
            incidental or/and special consequential or/and exemplary damages,
            whether such interruption or/and suspension or/and termination was
            justified or not, negligent or intentional, inadvertent or
            advertent.
          </p>
          <p>
            User agrees that Company shall not be responsible or liable to user,
            or anyone, for the statements or conduct of any third party of the
            service. In sum, in no event shall Company’s total liability to the
            User for all damages or/and losses or/and causes of action exceed
            the amount paid by the User to Company, if any, that is related to
            the cause of action.
          </p>
          <hr />
        </div>
        <div className='section'>
          <h4>DISCLAIMER OF CONSEQUENTIAL DAMAGES</h4>
          <p>
            In no event shall Company or any parties, organizations or entities
            associated with the corporate brand name us or otherwise, mentioned
            at this Application be liable for any damages whatsoever (including,
            without limitations, incidental and consequential damages, lost
            profits, or damage to computer hardware or loss of data information
            or business interruption) resulting from the use or inability to use
            the Application and the Application material, whether based on
            warranty, contract, tort, or any other legal theory, and whether or
            not, such organization or entities were advised of the possibility
            of such damages.
          </p>
          <hr />
          <div>
            <address>Last updated: 31st August 2020</address>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsCondi;
