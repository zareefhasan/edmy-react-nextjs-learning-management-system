"use client";

import React from "react";
import { Accordion, AccordionItem } from '@szhsin/react-accordion';

const FaqContent = () => {
  return (
    <>
      <div className="faq-area ptb-100">
        <div className="container">
          <Accordion>
            <AccordionItem header="How can I contact a school directly?">
              <p>
                You can contact a school by filling out a{" "}
                “Contact Us” form. This form can be
                found to the right of both the institute and education program
                profiles and also at the bottom of these profiles.
              </p>
            </AccordionItem>

            <AccordionItem header="Where should I study abroad?">
              <p>
                You can contact a school by filling out a{" "}
                <a href="contact.html">“Contact Us”</a> form. This form can be
                found to the right of both the institute and education program
                profiles and also at the bottom of these profiles.
              </p>
            </AccordionItem>

            <AccordionItem
              header="How do I find a study abroad program on
										Edmy.com?"
            >
              <p>
                You can contact a school by filling out a{" "}
                <a href="contact.html">“Contact Us”</a> form. This form can be
                found to the right of both the institute and education program
                profiles and also at the bottom of these profiles.
              </p>
            </AccordionItem>

            <AccordionItem
              header="How do I find a school where I want to
										study?"
            >
              <p>
                You can contact a school by filling out a{" "}
                <a href="contact.html">“Contact Us”</a> form. This form can be
                found to the right of both the institute and education program
                profiles and also at the bottom of these profiles.
              </p>
            </AccordionItem>

            <AccordionItem header="Am I eligible for admission?">
              <p>
                You can contact a school by filling out a{" "}
                <a href="contact.html">“Contact Us”</a> form. This form can be
                found to the right of both the institute and education program
                profiles and also at the bottom of these profiles.
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default FaqContent;
