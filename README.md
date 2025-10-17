# Empowering the Nation - Mobile App

![React Native](https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![React Navigation](https://img.shields.io/badge/React%20Navigation-6B52AE?style=for-the-badge)

[cite_start]This is a React Native mobile application built for "Empowering the Nation," a fictional SME that provides skills training for domestic workers and gardeners[cite: 217]. [cite_start]The app allows users to browse courses, select multiple services, and instantly generate a dynamic quote[cite: 216, 222].

[cite_start]This project was developed as part of the Work Integrated Learning 1 (XHAW5112) module for the Higher Certificate in Mobile Application and Web Development at The Independent Institute of Education (The IIE)[cite: 4, 5, 7, 172].

## Project Scenario

[cite_start]The client, "Empowering the Nation," required a mobile application to advertise their business and provide quotes to potential customers[cite: 216]. [cite_start]The primary requirement was to allow users (employers or employees) to select one or more courses and receive a calculated quote[cite: 216, 222].

The core business logic for the quote calculation is as follows:
* [cite_start]**Base Price:** Each course has a set fee[cite: 230, 235, 236, 237].
* [cite_start]**Dynamic Discounts:** Discounts are applied based on the number of courses selected[cite: 223]:
    * [cite_start]1 Course: 0% discount [cite: 224]
    * [cite_start]2 Courses: 5% discount [cite: 224]
    * [cite_start]3 Courses: 10% discount [cite: 224]
    * [cite_start]More than 3 Courses: 15% discount [cite: 224]
* [cite_start]**VAT:** A 15% VAT is applied to the final discounted total[cite: 254].

## Key Features

* [cite_start]**Course Catalogue:** Users can browse 6-month and 6-week courses, with dedicated detail screens showing purpose, content, and pricing[cite: 241, 620, 715, 720].
* [cite_start]**Shopping Cart & State Management:** Uses React's Context API to manage the user's shopping cart and profile data globally across the application[cite: 605, 626, 628, 631].
* **Dynamic Quote Calculator:**
    * [cite_start]Automatically calculates a subtotal from the courses in the cart[cite: 632].
    * [cite_start]Applies the correct discount (5-15%) based on cart quantity[cite: 633, 634].
    * [cite_start]Calculates and adds 15% VAT to produce the final total[cite: 635].
    * [cite_start]Generates a formal "Quote Summary" page with a full cost breakdown [cite: 691-697].
* [cite_start]**User Hub (Simulated):** Includes a simple user sign-up/login screen [cite: 656] [cite_start]and a student dashboard showing (mock) course progress[cite: 664, 668].
* **Full App Navigation:**
    * [cite_start]Uses **React Navigation** (`@react-navigation/drawer`) for the main side-menu[cite: 606, 636, 735].
    * [cite_start]Uses **React Navigation** (`@react-navigation/native-stack`) for the nested course selection and checkout flow[cite: 606, 636, 729].
* **Static Pages:** Includes:
    * [cite_start]"Contact Us" with social media and `Linking` integration[cite: 646, 652].
    * [cite_start]"About Us"[cite: 644].
    * [cite_start]"FAQ" page with a reusable custom accordion component[cite: 639, 654].

## Tech Stack

* [cite_start]**Framework:** React Native [cite: 605, 606]
* **Platform:** Expo
* **Language:** JavaScript (ES6+)
* [cite_start]**Navigation:** React Navigation (v6) [cite: 606, 636]
* [cite_start]**State Management:** React Hooks (`useState`) [cite: 605] [cite_start]& React Context API [cite: 626, 628]
* [cite_start]**UI:** Core React Native components (`View`, `Text`, `StyleSheet`, `TouchableOpacity`, `ScrollView`, etc.) [cite: 605]
* [cite_start]**Icons:** `@expo/vector-icons` [cite: 607]
* [cite_start]**Version Control:** Git & GitHub [cite: 210]

## Screenshots

| Home Screen | Course Details | Cart / Quote |
| :---: | :---: | :---: |
| <img width="250" height="937" alt="Screenshot 2025-10-17 083334" src="https://github.com/user-attachments/assets/34975665-bd1a-49f9-bbee-d956b5fb54a0" />| <img width="250" height="937" alt="Screenshot 2025-10-17 083407" src="https://github.com/user-attachments/assets/3bdf6629-7f0c-41d5-8729-857832a672fa" />| <img width="250" height="937" alt="Screenshot 2025-10-17 083508" src="https://github.com/user-attachments/assets/959ce420-e9ae-48ae-97c2-abdd96265dcf" />|

## Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    *or*
    ```bash
    yarn install
    ```

3.  **Run the application (using Expo):**
    ```bash
    npx expo start
    ```
    This will open the Expo developer tools. You can then:
    * Scan the QR code with the Expo Go app on your iOS or Android phone.
    * Press `a` to run on an Android emulator.
    * Press `i` to run on an iOS simulator.

## Project Team

* [Yenziwe Zondi - ST10480778[Team Leader]]
* [Asanda Twala -ST10467891 [Team Secretary]
* [Lujia Xiao - ST10484117 ]
* [Azania Sibanda - ST10488658]

