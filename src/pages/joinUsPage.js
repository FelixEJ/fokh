import React from "react";
import "../App.css";
import styled from "styled-components";
import MembershipPDF from "../pdfs/Membership-Application-V1-1.pdf";

const Container = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;

  max-width: 1200px;
`;

const Join = () => {
  return (
    <Container>
      <h1>Join Us</h1>
      <p>
        <b>
          Membership of FoKH is free. Spare us some time if you have it and/or
          make a donation.
        </b>
      </p>
      <p>
        <b>
          Membership of FoKH is open to all, but we ask that you please read,
          agree to and sign the code of conduct below.
        </b>
      </p>
      <p>
        You can sign up online by submitting our{" "}
        <a href="https://forms.gle/ou9p8EHHwE53tfk98">simple form</a>.
      </p>
      <p>
        Alternatively, you can print, sign, scan and send to:
        <a href="mailto:friendsofkalangheadwaters@gmail.com">
          <span class="tojvnm2t a6sixzi8 abs2jz4q a8s20v7p t1p8iaqh k5wvi7nf q3lfd5jv pk4s997a bipmatt0 cebpdrjk qowsmv63 owwhemhu dp1hu0rb dhp61c6y iyyx5f41">
            friendsofkalangheadwaters
          </span>
          @gmail.com
        </a>
      </p>
      <p>
        <a href={MembershipPDF}>Membership Application V1</a>
      </p>
      <p>----</p>
      <p>
        <b>
          Application for Membership of Friends of Kalang Headwaters Inc. (FoKH)
          and its associated Code of Conduct
        </b>
      </p>
      <p>Name:</p>
      <p>Postal Address: </p>
      <p>Telephone Numbers: </p>
      <p>
        This Code of Conduct covers individuals participating in actions or
        events coordinated by the Friends of Kalang Headwaters. Alliance
        partners currently include – The Bellingen Environment Centre, National
        Parks Association of NSW, individuals and businesses from our community.
      </p>
      <p>
        <strong>Background</strong>
      </p>
      <p>
        Our community understands the forests of the Kalang River Catchment hold
        enormous cultural and natural heritage values, and that these are now
        threatened. With logging of these native forests imminent, local
        community and environmental organisations have been joined by concerned
        members of our local community to form a coordinated alliance whose
        shared mission is to stop the proposed logging within our Kalang River
        Forests and seek their immediate permanent protection.
      </p>
      <p>
        An alliance working group has been established to assist in campaign
        coordination, community engagement, training and governance. This code
        of conduct was developed by the working group.
      </p>
      <p>While participating in any activities, events or actions you are:</p>
      <ol>
        <li>
          Working to further the agreed objectives of our mission (see above);
        </li>
        <li>
          Committing to act at all times within the non-violence direct action
          (NVDA) principles (read NVDA guidelines);
        </li>
        <li>
          Expected to respect the other stakeholders including employees of the
          forest corporation and their contractors, police officers, each other,
          the natural environment and be sensitive to cultural heritage issues
          when encountered;
        </li>
        <li>
          Mindful of your own and others personal safety and take all necessary
          steps to participate safely at all times (refer to any attendees’
          checklists);
        </li>
        <li>
          Asked not to bring dogs or pets with you at any time as they could
          disturb the resident wildlife and affect important survey results;
        </li>
        <li>
          Expected to take home whatever you bring into the forest/event with
          you – take only photos and leave only footprints;
        </li>
        <li>
          Expected to respect the Alliance’s wishes to keep field activities
          free from alcohol and illegal drugs;
        </li>
        <li>
          Expected to abide by instructions of group leaders or designated
          coordinators;
        </li>
        <li>
          Aware that if you do not abide by instructions you may be asked to
          leave;
        </li>
        <li>
          Aware that once you have been asked to leave, and have left, you may
          request mediation.
        </li>
      </ol>
      <p>
        This Code of Conduct is not negotiable. In signing this document you are
        agreeing to abide by the Code of Conduct conditions for each and every
        event you attend.
      </p>
      <p>Signed: __________________  Dated: ____ / ____ / _____</p>
    </Container>
  );
};

export default Join;
