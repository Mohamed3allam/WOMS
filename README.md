# World Organization for Medical Services (WOMS) - React Website

![WOMS Logo](public/logo512.png)

Welcome to the GitHub repository for the World Organization for Medical Services (WOMS) website, built with React. This project aims to provide an efficient and effective online platform for doctors and medical professionals to access professional and administrative support, manage clinics, and stay informed about the latest advancements in healthcare.

## Table of Contents

- [Description](#description)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

WOMS plays a crucial role in the healthcare landscape by supporting doctors in various ways, including:

- Continuous professional development through educational programs, workshops, and conferences.
- Administrative support for billing, coding, insurance claims processing, and patient record management.
- Guidance in managing clinics and medical centers efficiently.
- Advocacy for doctors' rights and professional status in governmental and non-governmental bodies.

This comprehensive support ensures that doctors can focus on providing high-quality care to patients while maintaining their professional growth and rights.

## Project Structure

```plaintext
./
    .gitignore
    package-lock.json
    package.json
    README.md
    tree.py
    public/
        favicon.ico
        index.html
        logo192.png
        logo512.png
        manifest.json
        robots.txt
    src/
        App.css
        App.js
        index.js
        reportWebVitals.js
        assets/
            css/
                404.css
                animate.css
                bootstrap.min.css
                counter.css
                credits.css
                feature.css
                fontawesome.css
                footer.css
                hc-offcanvas-nav.css
                icofont.min.css
                logo.css
                memberships.css
                navbar.css
                packages.css
                portfolio.css
                services.css
                sponsor.css
                style.css
                style.css.map
                swiper.min.css
            fonts/
                icofont.eot
                icofont.svg
                icofont.ttf
                icofont.woff
                icofont.woff2
            images/ (removed for brevity)
        components/
            3d/
                ThreeD.js
            about/
                AboutSection.jsx
                CertificateSection.jsx
                Message.jsx
                Objectives.jsx
                Principles.jsx
                Values.jsx
                Vision.jsx
                WhoWeAre.jsx
                doctors/
                    Doctor.jsx
                    DoctorSection.jsx
            certificates/
                CertificatesDetails.jsx
                FindCertificateSearch.jsx
                _certificates.json
            contact/
                ContactForm.jsx
                MapLocation.jsx
            credits/
                CreditsCompanyCards.jsx
                Header.jsx
            doctor/
                Header.jsx
            erasmus/
            footer/
                Footer.jsx
            header/
                Header.jsx
            home/
                AppointmentSection.jsx
                BannerSection.jsx
                BlogSection.jsx
                CounterSection.jsx
                DoctorSection.jsx
                DoctorSectionTwo.jsx
                FeatureSection.jsx
                NewsletterSection.jsx
                PackagesSection.jsx
                ServiceSection.jsx
                SponsorSection.jsx
                credits-carousel/
                    autoplaycarousel.scss
                    carousel-config.js
                    Carousel.jsx
                    CarouselItem.jsx
                department/
                    Department.jsx
                    DepartmentBottom.jsx
                    DepartmentTop.jsx
                majors-carousel/
                    autoplaycarousel.scss
                    CarouselItem.jsx
                    MajorsCarousel.jsx
            library/
                Books.jsx
                _book.json
            loader/
                Loader.jsx
            loading/
                Loading.js
            memberships/
                findMembershipSearch/
                    ChooseMajor.js
                    FindMembershipSearch.jsx
                    _doctors.js
                    _doctors.json
                packages/
                    AllPackages.js
                    package-advantages/
                        PackageSection.jsx
            navbar/
                Navbar.jsx
                NavbarBottom.jsx
                NavbarTop.jsx
            registration/
                Form.jsx
                FormEntity.jsx
            services/
                ServicesDetails.jsx
                administrative-services/
                    AdministrativeServices.js
                examples-of-medical-organization-services-for-doctors/
                    ExamplesOfMedicalOrganizationServicesForDoctors.js
                professional-services/
                    ProfessionalServices.js
                regulatory-services/
                    RegulatoryServices.js
        context/
        hooks/
        pages/
            404/
                404.js
            about/
                About.js
            certificates/
                Certificates.js
                certificate/
                    Certificate.js
                find-your-certificate/
                    FindYourCertificate.js
                our-certificates/
                    OurCertificates.js
            contact/
                Contact.js
            credits/
                Credits.js
            doctors/
                Doctors.js
                doctor/
                    Doctor.js
                doctor-search/
                    DoctorSearch.js
            erasmus/
                Erasmus.js
            home/
                Home.js
            library/
                Library.js
            memberships/
                Memberships.js
                find-your-membership/
                    FindYourMembership.js
                packages/
                    packages-data.js
                    Packages.js
                    package/
                        Package.js
                        PackageHeader.jsx
                    package-advantages/
                        PackageAdvantages.js
            registration/
                Registration.js
            services/
                Services.js
            trash/
                memberships/
                    Memberships.js
                    memberships/
                        GeneralMembership.js
                        HonoraryMembership.js
                        MedicalAdvisoryMemebrship.js
                        ProfessionalMembership.js
                        ScientificMembership.js
                        SocialMembership.js
```

## Technologies Used

This project is built using the following technologies:

- React
- Bootstrap
- Font Awesome
- Three.js
- Sass
- React Router
- Styled Components
- React Icons
- MUI (Material-UI)
- Animate.css
- jQuery

## Installation

To get a local copy up and running, follow these steps:

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/woms-react.git
    ```

2. Navigate to the project directory:

    ```sh
    cd woms-react
    ```

3. Install the dependencies:

    ```sh
    npm install
    ```

4. Start the development server:

    ```sh
    npm start
    ```

## Usage

After starting the development server, you can view the website in your browser at [http://localhost:3000](http://localhost:3000). Explore the different sections, including Home, About, Services, Doctors, Certificates, and Contact, to learn more about the functionalities provided by the WOMS website.

## Contributing

Contributions are welcome! If you have suggestions for improvements, feel free to open an issue or submit a pull request. Please ensure that your contributions align with the project's objectives and coding standards.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
