// import {
//   ArrowLeft,
//   CalendarDays,
//   Clock,
//   Check,
// } from "lucide-react";

// import {
//   Link,
// } from "react-router-dom";

// import {
//   useState,
// } from "react";

// const timeSlots = [
//   "10:00 AM",
//   "11:00 AM",
//   "12:00 PM",
//   "2:00 PM",
//   "3:00 PM",
//   "4:00 PM",
//   "5:00 PM",
// ];

// export default function BookCall() {
//   const [booking, setBooking] = useState({
//     name: "",
//     email: "",
//     date: "",
//     time: "",
//   });

//   const handleChange = (event) => {
//     const {
//       name,
//       value,
//     } = event.target;

//     setBooking((previous) => ({
//       ...previous,
//       [name]: value,
//     }));
//   };

//   const selectTime = (time) => {
//     setBooking((previous) => ({
//       ...previous,
//       time,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (!booking.time) {
//       alert("Please select a time.");
//       return;
//     }

//     console.log(booking);

//     alert("Appointment booked successfully.");
//   };

//   return (
//     <main className="booking-page">

//       <div className="booking-card">

//         <Link
//           to="/"
//           className="contact-back"
//         >
//           <ArrowLeft size={17} />
//           Back to Portfolio
//         </Link>

//         <div className="booking-header">

//           <div className="contact-page-icon">
//             <CalendarDays size={24} />
//           </div>

//           <h1>
//             Book a conversation
//           </h1>

//           <p>
//             Choose a convenient date and time
//             for a quick conversation with me.
//           </p>

//         </div>

//         <form onSubmit={handleSubmit}>

//           <div className="message-form-row">

//             <div className="message-field">
//               <label htmlFor="booking-name">
//                 Name
//               </label>

//               <input
//                 id="booking-name"
//                 name="name"
//                 type="text"
//                 placeholder="Your name"
//                 value={booking.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="message-field">
//               <label htmlFor="booking-email">
//                 Email
//               </label>

//               <input
//                 id="booking-email"
//                 name="email"
//                 type="email"
//                 placeholder="you@example.com"
//                 value={booking.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//           </div>

//           <div className="message-field booking-date-field">

//             <label htmlFor="booking-date">
//               Select date
//             </label>

//             <input
//               id="booking-date"
//               name="date"
//               type="date"
//               value={booking.date}
//               onChange={handleChange}
//               min={new Date().toISOString().split("T")[0]}
//               required
//             />

//           </div>

//           <div className="booking-time-section">

//             <div className="booking-time-title">
//               <Clock size={17} />
//               Select time
//             </div>

//             <div className="booking-times">

//               {timeSlots.map((time) => (
//                 <button
//                   key={time}
//                   type="button"
//                   className={
//                     booking.time === time
//                       ? "booking-time active"
//                       : "booking-time"
//                   }
//                   onClick={() => selectTime(time)}
//                 >
//                   {booking.time === time && (
//                     <Check size={14} />
//                   )}

//                   {time}
//                 </button>
//               ))}

//             </div>

//           </div>

//           <button
//             type="submit"
//             className="message-submit"
//           >
//             <CalendarDays size={17} />
//             Book Appointment
//           </button>

//         </form>

//       </div>

//     </main>
//   );
// }


import {
  ArrowLeft,
  CalendarDays,
  Clock,
  Video,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";


export default function BookCall() {

  /* =========================================================
     GOOGLE CALENDAR BOOKING LINK

     Replace the link below with the exact booking-page link
     copied from your Google Calendar Appointment Schedule.
  ========================================================= */

  const googleCalendarBookingLink =
    "https://calendar.app.google/BhJJjBybn6RZ1nh19";


  /* =========================================================
     OPEN GOOGLE CALENDAR BOOKING PAGE
  ========================================================= */

  const handleBooking = () => {

    window.open(
      googleCalendarBookingLink,
      "_blank",
      "noopener,noreferrer"
    );

  };


  return (
    <main className="booking-page">


      <div className="booking-card">


        {/* =================================================
            BACK BUTTON
        ================================================= */}

        <Link
          to="/"
          className="contact-back"
        >
          <ArrowLeft size={17} />

          Back to Portfolio
        </Link>



        {/* =================================================
            BOOKING HEADER
        ================================================= */}

        <div className="booking-header">


          <div className="contact-page-icon">
            <CalendarDays size={24} />
          </div>


          <h1>
            Book a Conversation
          </h1>


          <p>
            Choose a convenient date and time to connect with me.
            You'll be redirected to my Google Calendar booking page
            to select an available slot and confirm the meeting.
          </p>


        </div>



        {/* =================================================
            MEETING INFORMATION
        ================================================= */}

        <div className="booking-info-grid">


          {/* DURATION */}

          <div className="booking-info-item">

            <div className="booking-info-icon">
              <Clock size={19} />
            </div>

            <div>

              <span className="booking-info-label">
                Duration
              </span>

              <p>
                30 minutes
              </p>

            </div>

          </div>



          {/* GOOGLE MEET */}

          <div className="booking-info-item">

            <div className="booking-info-icon">
              <Video size={19} />
            </div>

            <div>

              <span className="booking-info-label">
                Meeting
              </span>

              <p>
                Google Meet
              </p>

            </div>

          </div>



          {/* AVAILABILITY */}

          <div className="booking-info-item">

            <div className="booking-info-icon">
              <CalendarDays size={19} />
            </div>

            <div>

              <span className="booking-info-label">
                Availability
              </span>

              <p>
                Select from available slots
              </p>

            </div>

          </div>



          {/* SECURE BOOKING */}

          <div className="booking-info-item">

            <div className="booking-info-icon">
              <ShieldCheck size={19} />
            </div>

            <div>

              <span className="booking-info-label">
                Confirmation
              </span>

              <p>
                Calendar confirmation
              </p>

            </div>

          </div>


        </div>



        {/* =================================================
            DIVIDER
        ================================================= */}

        <div className="booking-divider"></div>



        {/* =================================================
            HOW IT WORKS
        ================================================= */}

        <div className="booking-process">


          <h3>
            How it works
          </h3>


          <div className="booking-process-list">


            <div className="booking-process-item">

              <span>
                1
              </span>

              <p>
                Open my Google Calendar booking page.
              </p>

            </div>


            <div className="booking-process-item">

              <span>
                2
              </span>

              <p>
                Select an available date and time.
              </p>

            </div>


            <div className="booking-process-item">

              <span>
                3
              </span>

              <p>
                Enter your details and confirm the appointment.
              </p>

            </div>


            <div className="booking-process-item">

              <span>
                4
              </span>

              <p>
                You'll receive the meeting details and confirmation.
              </p>

            </div>


          </div>


        </div>



        {/* =================================================
            BOOK APPOINTMENT BUTTON
        ================================================= */}

        <button
          type="button"
          className="message-submit booking-submit"
          onClick={handleBooking}
        >

          <CalendarDays size={17} />

          Book Appointment

          <ExternalLink size={15} />

        </button>



        {/* =================================================
            SMALL NOTE
        ================================================= */}

        <p className="booking-footer-note">

          The booking page will open in a new tab.
          Your selected appointment will be managed through
          Google Calendar.

        </p>


      </div>


    </main>
  );
}