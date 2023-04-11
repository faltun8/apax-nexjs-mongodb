import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
} from '@fortawesome/free-solid-svg-icons';

const FooterInfo = () => {
  return (
    <MDBFooter className="bg-white text-center text-md-start">
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4 text-center">
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: '#3b5998' }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: '#55acee' }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="twitter" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: '#dd4b39' }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="google" />
          </MDBBtn>
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: '#ac2bac' }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: '#0082ca' }}
            href="https://linkedin.com/in/gökhan-saraç-8a698344"
            target="_blank"
            rel="noreferrer"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: '#333333' }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>
      </MDBContainer>
      <MDBContainer className="p-3 text-center">
        <MDBRow>
          <MDBCol lg="5" md="12" className="mb-4 mb-md-5">
            <h5 className="text-uppercase">
              <FontAwesomeIcon icon={faLocationDot} /> Adres
            </h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a
                  href="https://goo.gl/maps/zPV446oiisNXo7Lx8"
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary"
                >
                  Ayrancı, Güvenevler Mh. Yeşilyurt Sk. NO:18/A Aşağı, 06690
                  Çankaya/Ankara, Türkiye
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="2" md="4" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">
              <FontAwesomeIcon icon={faEnvelope} /> Bize Ulasin
            </h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a
                  href="mailto:altunfurkan94@gmail.com"
                  className="text-secondary"
                >
                  altunfurkan94@gmail.com
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="2" md="4" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">
              <FontAwesomeIcon icon={faPhone} /> Bizi Arayin
            </h5>

            <ul className="list-unstyled">
              <li>
                <a href="tel:+905348981952" className="text-secondary">
                  +90 (534) 898 1952
                </a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol lg="3" md="4" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">
              <FontAwesomeIcon icon={faClock} /> Calisma Saatlerimiz
            </h5>

            <ul className="list-unstyled">
              <li>
                <p className="text-secondary m-0">Hafta ici: 09:00 - 19:00</p>
                <p className="text-secondary">Cumartesi: 09:00 - 13:00</p>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default FooterInfo;
