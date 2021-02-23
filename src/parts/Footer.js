import React from "react";

import Botton from "elements/Button";
import IconText from "parts/IconText";
import Button from "elements/Button";
export default function Footer() {
  return (
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-auto" style={{ width: 350 }}>
            <IconText />
            <p class="brand-tagline">
              We kaboom your beauty holiday instantly and memorable.
            </p>
          </div>
          <div class="col-auto mr-5">
            <h6 class="mt-2">For Beginners</h6>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <Button type="link" href="/register">
                  {" "}
                  New Account
                </Button>
              </li>
              <li class="list-group-item">
                <Button type="link" href="/properties">
                  {" "}
                  Start Booking a Room
                </Button>
              </li>
              <li class="list-group-item">
                <Button type="link" href="/use-payments">
                  {" "}
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div class="col-2 mr-5">
            <h6 class="mt-2">Explore Us</h6>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <Button type="link" href="/careers">
                  {" "}
                  Our Careers
                </Button>
              </li>
              <li class="list-group-item">
                <Button type="link" href="/privacy">
                  {" "}
                  Privay
                </Button>
              </li>
              <li class="list-group-item">
                <Button type="link" href="/terms">
                  {" "}
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h6 className="mt-2">Connect Use</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  isExternal
                  type="link"
                  href="mailto:chairulikhsan@gmail.com"
                >
                  {" "}
                  chairulikhsan@gmail.com
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="tel:+6282360102749">
                  {" "}
                  +62 823-6010-2749
                </Button>
              </li>
              <li className="list-group-item">
                <span>Staycation, Lhokseumawe, Aceh</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            Copyright 2021 * All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
