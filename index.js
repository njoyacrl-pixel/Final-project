/* =========================
   HAMBURGER MENU
========================= */


// Get the hamburger button

const hamburger =
    document.getElementById("hamburger");


// Get the navigation menu

const navbar =
    document.getElementById("navbar");


// When the hamburger is clicked

hamburger.addEventListener("click", function () {

    // Add or remove the active class

    navbar.classList.toggle("active");

});



/* =========================
   SERVICE REQUEST API
========================= */


// Get the form

const requestForm =
    document.getElementById("requestForm");


// Get the submit button

const submitButton =
    document.getElementById("submitButton");


// Get success message

const successMessage =
    document.getElementById("successMessage");


// Get My Requests section

const myRequests =
    document.getElementById("myRequests");



/* =========================
   FORM SUBMISSION
========================= */


requestForm.addEventListener(
    "submit",

    async function (event) {


        // Prevent page refresh

        event.preventDefault();



        // Change button text

        submitButton.textContent = "Sending...";


        // Disable button while sending

        submitButton.disabled = true;



        /* =========================
           COLLECT FORM DATA
        ========================= */

        const requestData = {

            service:
                document.getElementById("service").value,

            provider:
                document.getElementById("provider").value,

            name:
                document.getElementById("name").value,

            phone:
                document.getElementById("phone").value,

            location:
                document.getElementById("location").value,

            description:
                document.getElementById("description").value,

            preferredDate:
                document.getElementById("date").value,

            status: "Pending"
        };



        try {


            /* =========================
               SEND DATA TO API
            ========================= */


            const response = await fetch(

                "https://jsonplaceholder.typicode.com/posts",

                {

                    method: "POST",


                    headers: {

                        "Content-Type":
                            "application/json"
                    },


                    // Convert the JavaScript object to JSON

                    body: JSON.stringify(requestData)

                }

            );



            // Check if the request was successful

            if (!response.ok) {

                throw new Error(
                    "Request failed"
                );

            }



            // Get the API response

            const data =
                await response.json();



            // Display API response in console

            console.log(
                "Request sent:",
                data
            );



            /* =========================
               SHOW SUCCESS MESSAGE
            ========================= */


            successMessage.style.display =
                "block";



            /* =========================
               SHOW MY REQUESTS
            ========================= */


            myRequests.style.display =
                "block";



            /* =========================
               DISPLAY USER REQUEST
            ========================= */


            document.getElementById(
                "displayService"
            ).textContent =
                requestData.service;



            document.getElementById(
                "displayProvider"
            ).textContent =
                requestData.provider;



            document.getElementById(
                "displayName"
            ).textContent =
                requestData.name;



            document.getElementById(
                "displayPhone"
            ).textContent =
                requestData.phone;



            document.getElementById(
                "displayLocation"
            ).textContent =
                requestData.location;



            document.getElementById(
                "displayDate"
            ).textContent =
                requestData.preferredDate;



            /* =========================
               RESET THE FORM
            ========================= */


            requestForm.reset();



            // Restore Service value

            document.getElementById(
                "service"
            ).value =
                "Electrical Repair";



            // Restore Provider value

            document.getElementById(
                "provider"
            ).value =
                "John N.";


        }


        catch (error) {


            // Display error

            console.error(error);


            alert(
                "Something went wrong. Please try again."
            );

        }


        finally {


            // Restore button

            submitButton.textContent =
                "Send Request";


            submitButton.disabled =
                false;

        }


    }
);