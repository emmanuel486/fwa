"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Country {
  name: {
    common: string;
  };
}

export default function Home() {

const [countries, setCountries] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [cities, setCities] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>('');

  useEffect(() => {
    // Fetch countries when the component mounts
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        const countryNames = response.data.map((country: Country) => country.name.common);
        // Sort countries in alphabetical order
        setCountries(countryNames.sort());
      })
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      // Fetch cities for the selected country
      axios.post('https://countriesnow.space/api/v0.1/countries/cities', {
        country: selectedCountry
      })
      .then(response => {
        // Sort cities in alphabetical order
        setCities(response.data.data.sort());
        setSelectedCity(''); // Reset city selection when country changes
      })
      .catch(error => console.error('Error fetching cities:', error));
    } else {
      setCities([]);
    }
  }, [selectedCountry]);

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };




  return (
    <>
      <a href="#" id="scroll-top" className="back-to-top-btn">
        <i className="bi bi-arrow-up"></i>
      </a>

      <div id="smooth-wrapper">
        <header>
          {/*Menu Start*/}
          <div className="menu-area menu-area__fin menu-area--fixed-dark">
            <div className="container container-2xl">
              <div className="row align-items-center position-relative">
                <div className="col-lg-12 hamburger-menu position-relative">
                  <div
                    className="nav-wrap d-flex justify-content-between align-items-center"
                  >
                    <div className="menu-logo-wrap">
                      {/*<a href="index.html"*/}
                      {/*>*/}
                      <img src="/images/fwa.png" alt="" width={'120px'}
                      />
                      {/*</a>*/}
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Menu end*/}
        </header>

        {/* Header area end*/}
        <div id="smooth-content">
          <main>
            {/* Hero start*/}
            <div className="hero-fin">
              <div className="container container-2xl">
                <div className="row">
                  <div className="col-12">
                    <div className="hero-fin__content">
                      <div className="upper-content">
                        <div className="btn-container">
                          <a
                            href=""
                            className="common-btn__variation9 fade_up_anim"
                            data-delay=".2">
                            Apply For Membership
                          </a>
                        </div>
                        <p className="info fade_up_anim" data-delay=".4">
                          A private association of families, family offices, trusts and advisors seeking
                          prosperous and purposeful wealth longevity.
                        </p>
                      </div>
                      <div className="hero-fin__title">
                        <h1 className="text-center h1 title">
                          FAMILY WEALTH ASSOCIATION
                          {/* <span className="word-animation"></span> */}
                        </h1>
                        <img
                          className="img-cursor d-none d-md-block"
                          src="/images/hero/hero-fin-title-img.png"
                          alt="hero-fin-title-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Hero end*/}

            {/* about-fin start*/}
            <div className="about-fin pt-150">
              <div className="container container-2xl">
                <div className="row g-4 justify-content-between">
                  <div className="col-md-6 col-xl-5">
                    <div className="about-fin__left">
                      <span className="sub-heading fade_up_anim" data-delay=".2">
                        ABOUT US
                      </span>
                      <div className="about-fin__experience">
                        <h3 className="h3 experience">
                          16
                          <em>+</em>
                        </h3>
                        <br /><br />
                        <p className="info">YEARS OF EXPERIENCE</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-6">
                    <div className="about-fin__right">
                      <h3 className=" fade_up_anim" data-delay=".4">
                        We are proud to faithfully serve our members histories and their present and
                        desired futures.
                      </h3>
                      <p className="fade_up_anim" data-delay=".6">
                        We know that being a family of history, or a family of wealth, presents both opportunity and
                        challenge.
                      </p>

                      <p className="fade_up_anim" data-delay=".6">
                        We know that being a family of history, or a family of wealth, presents both opportunity and
                        challenge.
                      </p>
                      <p className="fade_up_anim" data-delay=".6">
                        Our members have a strong foundation of capabilities through training, workshops and
                        meetings with global families who have succeeded – some by as much as 20 generations of
                        unbroken wealth.
                      </p>
                      <p className="fade_up_anim" data-delay=".6">
                        We help them discover, document, and protect their unique wealth DNA. They convert this
                        DNA into a 100-year process which will adapt and evolve to protect values and wealth for
                        generations.
                      </p>
                      <p className="fade_up_anim" data-delay=".6">
                        Our families are better able to understand and work with skilled family offices or to
                        launch
                        their own. They have access to an all-weather ecosystem of global professionals that
                        safeguards their plans many years into the future.
                      </p>
                      <p className="fade_up_anim mb-0" data-delay=".6">
                        History, wealth or both? It’s all in our DNA.
                      </p>
                      <p className="fade_up_anim" data-delay=".6">
                        Join us
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* about-fin end*/}

            {/* Vision start*/}
            <div className="roadmap-fin pt-150">
              <div className="container container-2xl">
                <div className="row justify-content-center text-center">
                  <div className="col-md-9 col-lg-8 section__header-v9">
                    <h3
                      className="h3 section__header-title-v9 fade_up_anim"
                      data-delay=".2"
                    >
                      Vision
                    </h3>
                    <p className="fade_up_anim" data-delay=".4">
                      A new nation of prosperous families of longevity
                    </p>


                  </div>
                </div>
                <div className="banner-img">
                  <img className="img-fluid mt-4 banner-image" src={'images/vision.jpg'} alt={'vision'} />
                </div>
                <div className="row g-3 pt-100">
                  <div
                    className="col-sm-6 col-lg-4 col-xl-4 fade_up_anim"
                    data-delay=".2"
                  >
                    <div className="roadmap-fin__item">
                      <figure className="roadmap-fin__icon">
                        <img
                          src="/images/roadmap/roadmap-fin-1.png"
                          alt="roadmap"
                        />
                      </figure>
                      <h5 className="h5">Common Capability</h5>
                      <p>
                        Our families freeze, reverse and
                        accelerate time. Our families
                        reduce societal friction and drag
                        that erodes real wealth and its
                        successful transfer
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-sm-6 col-lg-4 col-xl-4 fade_up_anim"
                    data-delay=".4"
                  >
                    <div className="roadmap-fin__item">
                      <figure className="roadmap-fin__icon">
                        <img
                          src="/images/roadmap/roadmap-fin-2.png"
                          alt="roadmap"
                        />
                      </figure>
                      <h5 className="h5">Common Good</h5>
                      <p>
                        Our families are creating wealth
                        that is purposeful and impactful.
                        Societies are being transformed by
                        the understanding that the common
                        good is good for all.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-sm-6 col-lg-4 col-xl-4 fade_up_anim"
                    data-delay=".6"
                  >
                    <div className="roadmap-fin__item">
                      <figure className="roadmap-fin__icon">
                        <img
                          src="/images/roadmap/roadmap-fin-3.png"
                          alt="roadmap"
                        />
                      </figure>
                      <h5 className="h5">Common Wealth</h5>
                      <p>
                        Our families and the
                        communities in which they
                        operate have a shared success
                        that is robust, agile and
                        adaptive. Good for today and
                        good for generations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Vision end*/}

            {/* Mission start*/}
            <div className="roadmap-fin pt-150">
              <div className="container container-2xl">
                <div className="row justify-content-center text-center">
                  <div className="col-md-9 col-lg-8 section__header-v9">
                    <h3
                      className="h3 section__header-title-v9 fade_up_anim"
                      data-delay=".2"
                    >
                      Mission
                    </h3>
                    <p className="fade_up_anim" data-delay=".4">
                      Build prosperous communities around our visionary families
                    </p>

                  </div>
                </div>
                <div className="banner-img">
                  <img className="img-fluid mt-4 banner-image" src={'images/Families of Purpose.jpg'} alt={'Families of purpose'} />
                </div>
                <div className="row g-3 pt-100">
                  <div
                    className="col-sm-6 col-lg-6 col-xl-3 fade_up_anim"
                    data-delay=".2"
                  >
                    <div className="roadmap-fin__item">
                      <figure className="roadmap-fin__icon">
                        <img
                          src="/images/roadmap/roadmap-fin-1.png"
                          alt="roadmap"
                        />
                      </figure>
                      <h5 className="h5">Enduring Legacy</h5>
                      <p>
                        To protect and develop the work of
                        creative and hard-working family
                        members and to extend the best
                        lessons of their lives to successive
                        generations.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-sm-6 col-lg-6 col-xl-3 fade_up_anim"
                    data-delay=".4"
                  >
                    <div className="roadmap-fin__item">
                      <figure className="roadmap-fin__icon">
                        <img
                          src="/images/roadmap/roadmap-fin-2.png"
                          alt="roadmap"
                        />
                      </figure>
                      <h5 className="h5">Resilient Futures</h5>
                      <p>
                        To promote nimbleness, flexibility
                        and innovation by seamlessly
                        connecting family history. experience
                        and wisdom to the new voices of the
                        next generation.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-sm-6 col-lg-6 col-xl-3 fade_up_anim"
                    data-delay=".6"
                  >
                    <div className="roadmap-fin__item">
                      <figure className="roadmap-fin__icon">
                        <img
                          src="/images/roadmap/roadmap-fin-3.png"
                          alt="roadmap"
                        />
                      </figure>
                      <h5 className="h5">Thriving Communities</h5>
                      <p>
                        To create peaceful, prosperous and
                        sustainable communities made up
                        of families like yours for the mutual
                        and greater good of all.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-sm-6 col-lg-6 col-xl-3 fade_up_anim"
                    data-delay=".6"
                  >
                    <div className="roadmap-fin__item">
                      <figure className="roadmap-fin__icon">
                        <img
                          src="/images/roadmap/roadmap-fin-3.png"
                          alt="roadmap"
                        />
                      </figure>
                      <h5 className="h5">Transformative Governance</h5>
                      <p>
                        To help family’s build adaptive
                        systems and processes in family and
                        business governance that uniquely
                        reflect their stories and values.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Mission end*/}

            {/* Member Benefits start*/}
            <div className="roadmap-fin pt-150">
              <div className="container container-2xl">
                <div className="row justify-content-center text-center">
                  <div className="col-md-9 col-lg-8 section__header-v9">
                    <h3
                      className="h3 section__header-title-v9 fade_up_anim"
                      data-delay=".2"
                    >
                      Member Benefits
                    </h3>
                    <p className="fade_up_anim" data-delay=".4">
                      Our family and advisor members have access to services that make their lives and services
                      meaningful and impactful.
                    </p>
                  </div>
                </div>
                <div className="row g-3 pt-100">
                  <div
                    className="col-sm-6 col-lg-6 col-xl-4 fade_up_anim"
                    data-delay=".2"
                  >
                    <div className="roadmap-fin__item">
                      <figure className="roadmap-fin__icon">
                        <img
                          src="/images/roadmap/roadmap-fin-1.png"
                          alt="roadmap"
                        />
                      </figure>
                      <h5 className="h5">Proven networks</h5>
                      <p>
                        Enrich your experience by
                        spending time with over 70
                        global families who have
                        enjoyed seven generations
                        and more of continuous
                        ownership and prosperity
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-sm-6 col-lg-6 col-xl-4 fade_up_anim"
                    data-delay=".4"
                  >
                    <div className="roadmap-fin__item">
                      <figure className="roadmap-fin__icon">
                        <img
                          src="/images/roadmap/roadmap-fin-2.png"
                          alt="roadmap"
                        />
                      </figure>
                      <h5 className="h5">Cutting edge research</h5>
                      <p>
                        Access data driven
                        methodologies that take the
                        guess work out of multi-
                        generational planning.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-sm-6 col-lg-6 col-xl-4 fade_up_anim"
                    data-delay=".6"
                  >
                    <div className="roadmap-fin__item">
                      <figure className="roadmap-fin__icon">
                        <img
                          src="/images/roadmap/roadmap-fin-3.png"
                          alt="roadmap"
                        />
                      </figure>
                      <h5 className="h5">Global investments</h5>
                      <p>
                        Get information on curated
                        hard to find investment
                        opportunities. Qualify for time
                        and size restricted investment
                        through trusted investment
                        alliances.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row g-3 pt-100">
                  <div
                    className="col-sm-6 col-lg-4 col-xl-4 fade_up_anim"
                    data-delay=".2"
                  >
                    <div className="roadmap-fin__item">
                      <figure className="roadmap-fin__icon">
                        <img
                          src="/images/roadmap/roadmap-fin-1.png"
                          alt="roadmap"
                        />
                      </figure>
                      <h5 className="h5">Family education and
                        bonding</h5>
                      <p>
                        Join our annual boat cruises
                        and discover ancient
                        civilizations and learn valuable
                        lessons from expert guides on
                        their rise and fall
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-sm-6 col-lg-4 col-xl-4 fade_up_anim"
                    data-delay=".4"
                  >
                    <div className="roadmap-fin__item">
                      <figure className="roadmap-fin__icon">
                        <img
                          src="/images/roadmap/roadmap-fin-2.png"
                          alt="roadmap"
                        />
                      </figure>
                      <h5 className="h5">Blockchain security</h5>
                      <p>
                        Secure family documents
                        including Wills, Trust Deeds,
                        POA’s and Global Compliance
                        registers. Release documents
                        safely using our auto release
                        features.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-sm-6 col-lg-4 col-xl-4 fade_up_anim"
                    data-delay=".6"
                  >
                    <div className="roadmap-fin__item">
                      <figure className="roadmap-fin__icon">
                        <img
                          src="/images/roadmap/roadmap-fin-3.png"
                          alt="roadmap"
                        />
                      </figure>
                      <h5 className="h5">Dispute resolution</h5>
                      <p>
                        Choose independent and highly
                        experienced mediators that will
                        protect your family cohesion
                        and unity far into the future
                        when you are unable to do so.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Member Benefits end*/}

            {/* Services start*/}
            <div className="services-fin pt-150">
              <div className="container container-2xl">
                <div
                  className="row g-4 justify-content-center justify-content-md-between align-items-center"
                >
                  <div className="col-sm-6 col-md-9 text-center text-md-start">
                    <h2
                      className="h2 section__header-title-v9 fade_up_anim"
                      data-delay=".2"
                    >
                      Training
                    </h2>
                  </div>
                  {/*<div*/}
                  {/*  className="col-sm-6 col-md-3 text-center text-md-end fade_up_anim"*/}
                  {/*  data-delay=".4"*/}
                  {/*>*/}
                  {/*  <a href="service-2.html" className="common-btn__variation9">*/}
                  {/*    Explore All*/}
                  {/*  </a>*/}
                  {/*</div>*/}
                </div>
                <div className="row pt-100">
                  <div className="col-12">
                    <div className="services-fin__item an-pine-vanish">
                      <div className="services-fin__item-content">
                        <h3
                          className="h3 services-fin__item-title fade_up_anim"
                          data-delay=".4"
                        >
                          Conveniently online
                        </h3>
                        {/*<ul className="custom-ul tags">*/}
                        {/*  <li><a href="#">Goal-Driven</a></li>*/}
                        {/*  <li><a href="#">Comprehensive Guidance</a></li>*/}
                        {/*  <li><a href="#">Holistic Planning</a></li>*/}
                        {/*</ul>*/}
                        <p>
                          Enjoy incisive family wealth
                          education that you can enjoy
                          anywhere and anytime. Our
                          courses are broken into
                          memorable and easy to
                          consume nuggets of wisdom.
                        </p>
                      </div>
                      <div className="services-fin__item-thumb">
                        {/* <img
                          className="img-move"
                          src="/images/services/services-fin-1.png"
                          alt="service"
                        /> */}
                      </div>
                    </div>
                    <div className="services-fin__item an-pine-vanish">
                      <div className="services-fin__item-content">
                        <h3
                          className="h3 services-fin__item-title fade_up_anim"
                          data-delay=".4"
                        >
                          Securely onsite
                        </h3>
                        {/*<ul className="custom-ul tags">*/}
                        {/*  <li><a href="#">Goal-Driven</a></li>*/}
                        {/*  <li><a href="#">Comprehensive Guidance</a></li>*/}
                        {/*  <li><a href="#">Holistic Planning</a></li>*/}
                        {/*</ul>*/}
                        <p>
                          Keep family strategy
                          confidential with customized
                          secure family workshops with
                          private family meetings and
                          workshops in a place that’s
                          comfortable and convenient for
                          you.
                        </p>
                      </div>
                      <div className="services-fin__item-thumb">
                        {/* <img
                          className="img-move"
                          src="/images/services/services-fin-2.png"
                          alt="service"
                        /> */}
                      </div>
                    </div>
                    <div className="services-fin__item an-pine-vanish">
                      <div className="services-fin__item-content">
                        <h3
                          className="h3 services-fin__item-title fade_up_anim"
                          data-delay=".4"
                        >
                          Immersive reality
                        </h3>
                        {/*<ul className="custom-ul tags">*/}
                        {/*  <li><a href="#">Goal-Driven</a></li>*/}
                        {/*  <li><a href="#">Comprehensive Guidance</a></li>*/}
                        {/*  <li><a href="#">Holistic Planning</a></li>*/}
                        {/*</ul>*/}
                        <p>
                          Why watch a PowerPoint when
                          you can experience a global
                          family masterclassName in a factory,
                          ship, boardroom or home and
                          hear from successful global
                          multi-generational families
                          themselves?
                        </p>
                      </div>
                      <div className="services-fin__item-thumb">
                        {/* <img
                          className="img-move"
                          src="/images/services/services-fin-3.png"
                          alt="service"
                        /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Services end*/}

            {/* Choose us start*/}
            <div className="choose-us-fin pt-150 pb-150 ">
              <div className="container-fluid container-2xl  ">
                <div className="section__header-v9">
                  <h3
                    className=" h3 section__header-title-v9 fade_up_anim"
                    data-delay=".2"
                  >
                    Apply for Membership
                  </h3>
                  <p className="fade_up_anim" data-delay=".4">
                    In three easy steps
                  </p>
                  <div className="choose-us-fin__tabs">
                    <ul
                      className="nav nav-pills mb-3"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-strategies-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-strategies"
                          type="button"
                          role="tab"
                          aria-controls="pills-strategies"
                          aria-selected="true"
                        >
                          Read the Pre-Qualification Notice
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-approach-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-approach"
                          type="button"
                          role="tab"
                          aria-controls="pills-approach"
                          aria-selected="false"
                        >
                          Select Membership Level
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-achievement-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-achievement"
                          type="button"
                          role="tab"
                          aria-controls="pills-achievement"
                          aria-selected="false"
                        >
                          Pay Membership Fee
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="pills-strategies"
                        role="tabpanel"
                        aria-labelledby="pills-strategies-tab"
                      // tabIndex="0"
                      >
                        <h6>Pre-Qualification Notice (check all that apply)</h6>
                        <p>To qualify for our membership community and to gain privileged access to our events,
                          services and networks, you must be one of the following</p>

                        <div className="col-lg-12 fade_up_anim mt-4" data-delay=".4">
                          <div className="contact-us__form" style={{ margin: 0, padding: 0 }}>
                            <form action="index.html" className="contact-us__form-form">
                              <div className="contact-us__form-checkbox">
                                <input
                                  type="checkbox"
                                  name="family-member-or-principal"
                                  id="Family-member-or-principal"

                                />
                                <label htmlFor="family-member-or-principal">
                                  Family member or principal
                                </label>
                              </div>
                              <div className="contact-us__form-checkbox">
                                <input
                                  type="checkbox"
                                  name="Family-executive-director-in-a-family-business"
                                  id="Family-executive-director-in-a-family-business"

                                />
                                <label htmlFor="Family-executive-director-in-a-family-business">
                                  Family executive director in a family business
                                </label>
                              </div>
                              <div className="contact-us__form-checkbox">
                                <input
                                  type="checkbox"
                                  name="Executive-from-a-family-foundation"
                                  id="Executive-from-a-family-foundation"

                                />
                                <label htmlFor="Executive-from-a-family-foundation">
                                  Executive from a family foundation
                                </label>
                              </div>
                              <div className="contact-us__form-checkbox">
                                <input
                                  type="checkbox"
                                  name="Executive-from-a-family-foundation"
                                  id="Executive-from-a-family-foundation"

                                />
                                <label htmlFor="Executive-from-a-family-foundation">
                                  Executive in a single or multiple family office(with the provison that in the case of a
                                  financial institution, it is not a bank and that it has Chinese walls policies with asset
                                  management functions)</label>
                              </div>

                              <div className="contact-us__form-checkbox">
                                <input
                                  type="checkbox"
                                  name="Family-or-Non-family-Executive-member-in-a-Trust"
                                  id="Family-or-Non-family-Executive-member-in-a-Trust"

                                />
                                <label htmlFor="Family-or-Non-family-Executive-member-in-a-Trust">
                                  Family or Non family Executive member in a Trust (corporate or private)
                                </label>
                              </div>
                              <h4 className="text-left mt-4">Complete Membership Information</h4>

                              <div className="contact-us__form-select">
                                <label htmlFor="Family-or-Non-family-Executive-member-in-a-Trust">
                                  Title
                                </label>

                                <select defaultValue="Select">
                                  <option value="Select" disabled>Select</option>
                                  <option value="Mr">Mr</option>
                                  <option value="Mrs">Mrs</option>
                                  <option value="Miss">Miss</option>
                                  <option value="Ms">Ms</option>
                                  <option value="Prof">Prof</option>
                                  <option value="Dr">Dr</option>
                                  <option value="Master">Master</option>
                                  <option value="Sir">Sir</option>
                                  <option value="Lord">Lord</option>
                                  <option value="Rev">Rev</option>
                                  <option value="Other">Other</option>
                                </select>


                              </div>
                              {/* <div className="contact-us__form-namePhoneWrapper">
                        <div className="contact-us__form-name">
                          <input
                            type="text"
                            name="First_Name"
                            id="name"
                            placeholder="First Name"
                          />
                        </div>
                        <div className="contact-us__form-phone">
                          <input
                            type="number"
                            name="phone"
                            id="phone"
                            placeholder="phone"
                          />
                        </div>
                      </div> */}

                              <div className="contact-us__form-email">
                                <input
                                  type="fistname"
                                  name="fistname"
                                  id="fistname"
                                  placeholder="First Name"
                                />
                              </div>

                              <div className="contact-us__form-email">
                                <input
                                  type="fistname"
                                  name="fistname"
                                  id="fistname"
                                  placeholder="Last Name"
                                />
                              </div>

                              <div className="contact-us__form-email">
                                <input
                                  type="email"
                                  name="email"
                                  id="email"
                                  placeholder="e-mail"
                                />
                              </div>
                              <div className="contact-us__form-email">
                                <input
                                  type="email"
                                  name="email"
                                  id="email"
                                  placeholder="Company or organization"
                                />
                              </div>
                              <div className="contact-us__form-select">
                                <label htmlFor="Family-or-Non-family-Executive-member-in-a-Trust">
                                  Company Type
                                </label>

                                <select defaultValue="None">
                                  <option value="None" disabled>None</option>
                                  <option value="Family Business">Family Business</option>
                                  <option value="Single Family Office">Single Family Office</option>
                                  <option value="Family Foundation">Family Foundation</option>
                                  <option value="Trust">Trust</option>
                                  <option value="Multi-Family Office">Multi-Family Office</option>
                                </select>



                              </div>

                              <div className="contact-us__form-email">
                                <input
                                  type="number"
                                  name="email"
                                  id="email"
                                  placeholder="Telephone"
                                />
                              </div>
                              <div className="contact-us__form-select">
                                <label htmlFor="country-select">Country</label>
                                <select id="country-select" value={selectedCountry} onChange={handleCountryChange}>
                                  <option value="" disabled>Select a country</option>
                                  {countries.map((country) => (
                                    <option key={country} value={country}>
                                      {country}
                                    </option>
                                  ))}
                                </select>
                              </div>

                              <div className="contact-us__form-select">
                                <label htmlFor="city-select">City</label>
                                <select id="city-select" value={selectedCity} onChange={handleCityChange} disabled={!selectedCountry}>
                                  <option value="" disabled>Select a city</option>
                                  {cities.map((city) => (
                                    <option key={city} value={city}>
                                      {city}
                                    </option>
                                  ))}
                                </select>
                              </div>

                              <div className="contact-us__form-checkbox">

                                <label htmlFor="">
                                  Select all that apply:
                                </label>
                              </div>

                              <div className="contact-us__form-checkbox">
                                <input
                                  type="checkbox"
                                  name="Former-or-Current-Political-or-government-office-holder"
                                  id="Former-or-Current-Political-or-government-office-holder"

                                />
                                <label htmlFor="Former-or-Current-Political-or-government-office-holder">
                                  Former or Current Political or government office holder?
                                </label>
                              </div>

                              <div className="contact-us__form-checkbox">
                                <input
                                  type="checkbox"
                                  name="Current-or-Former-Member-of-the-security-forces"
                                  id="Current-or-Former-Member-of-the-security-forces"

                                />
                                <label htmlFor="Current-or-Former-Member-of-the-security-forces">
                                  Current or Former Member of the security forces?
                                </label>
                              </div>

                              <div className="contact-us__form-checkbox">
                                <input
                                  type="checkbox"
                                  name="None-of-the-above"
                                  id="None-of-the-above"

                                />
                                <label htmlFor="None-of-the-above">
                                  None of the above
                                </label>
                              </div>

                              <div className="contact-us__form-checkbox">
                                <input
                                  type="checkbox"
                                  name="None-of-the-above"
                                  id="None-of-the-above"

                                />
                                <label htmlFor="None-of-the-above">
                                  Do you have a company registered in a tax haven? Please specify country :
                                </label>
                              </div>

                              <div className="contact-us__form-email">
                                <input
                                  type="text"
                                  name="country"
                                  id="country"
                                  placeholder="Country"
                                />
                              </div>





                              {/* <div className="contact-us__form-message">
                        <textarea
                          name="message"
                          id="message"
                          placeholder="message"
                        ></textarea>
                      </div> */}
                              <button
                                className="common-btn outline justify-content-center border-light w-100"
                              >
                                <span>Submit</span>
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-approach"
                        role="tabpanel"
                        aria-labelledby="pills-approach-tab"
                      // tabIndex="0"
                      >

                        <div className="pricing-fit pt-150">
                          <div className="container container-fitness">
                            <div
                              className="row justify-content-between align-items-center section__header-v10"
                            >


                            </div>
                            <div className="row g-4 gy-5 pt-0" style={{ width: '95vw' }}>
                              <div className="col-md-6 col-xl-4 fade_up_anim" data-delay=".2">
                                <div className="pricing-fit__item">
                                  <h4 className="h4 pricing-fit__item-price">Explorer Family</h4>
                                  <span className="pricing-fit__item-package">150$ per annum</span>
                                  <ul className="custom-ul pricing-fit__item-facilitys">
                                    <li>Family Boat Cruises</li>
                                    <li>Research</li>
                                    <li>Online Training</li>
                                    <li>Online Community</li>
                                    <li>Email Support</li>
                                  </ul>
                                  <a href="" className="pricing-fit__item-buy-plan">
                                    Pay
                                  </a>
                                </div>
                              </div>
                              <div className="col-md-6 col-xl-4 fade_up_anim" data-delay=".4">
                                <div className="pricing-fit__item">
                                  <h4 className="h4 pricing-fit__item-price">Elevator Family</h4>
                                  <span className="pricing-fit__item-package">650$ per annum</span>
                                  <ul className="custom-ul pricing-fit__item-facilitys">
                                    <li>Global family network</li>
                                    <li>Digital “How to” Cards</li>
                                    <li>Black card Investment opportunities</li>
                                    <li>Family Boat Cruises</li>
                                    <li>Research</li>
                                    <li>Online Training</li>
                                    <li>Heir Mentorship</li>
                                    <li>Online Community</li>
                                  </ul>
                                  <a href="" className="pricing-fit__item-buy-plan">
                                    Pay
                                  </a>
                                </div>
                              </div>
                              <div className="col-md-6 col-xl-4 fade_up_anim" data-delay=".6">
                                <div className="pricing-fit__item">
                                  <h4 className="h4 pricing-fit__item-price">Evergreen Family</h4>
                                  <span className="pricing-fit__item-package">2850$ per annum</span>
                                  <ul className="custom-ul pricing-fit__item-facilitys">
                                    <li>Full family membership (max of five)</li>
                                    <li>Global family network</li>
                                    <li>Digital “How to” Cards</li>
                                    <li>Black card Investment opportunities</li>
                                    <li>Family Boat Cruises</li>
                                    <li>Research</li>
                                    <li>Online Training</li>
                                    <li>Onsite Family Workshops</li>
                                    <li>Heir Mentorship</li>
                                    <li>Online Community</li>
                                    <li>Blockchain Document security and alert triggers</li>
                                    <li>Mediation Services</li>
                                    <li>Family Continuity Service</li>
                                  </ul>
                                  <a href="" className="pricing-fit__item-buy-plan">
                                    Pay
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className='mt-4'>Subject to availability, services not in a membership package can be paid for separately
                          Family Boat Cruises are normally Aegean and Mediterranean seas and will still attract separate fees.
                          Membership covers availability and discounts levels
                          Heir Mentorship is only at Elevator Level by email
                          Family Continuity Services are a package of advice and recommendations where an involuntary transition occurs</p>

                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-achievement"
                        role="tabpanel"
                        aria-labelledby="pills-achievement-tab"
                      // tabIndex="0"
                      >
                        we are dedicated to empowering your financial journey
                        with expert guidance every step of the way. Our team
                        of seasoned financial advisors.
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* Choose us end*/}

            {/* faq-fin start*/}
            <div className="faq-fin pb-150">
              <div className="container container-2xl">
                <div className="row gy-5 justify-content-between">
                  <div className="col-lg-6 col-xl-5">
                    <div className="section__header-v9">
                      <h3
                        className="h3 section__header-title-v9 fade_up_anim"
                        data-delay=".2"
                      >
                        Frequently Asked Questions
                      </h3>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-7">
                    <div
                      className="faq-fin__accordion accordion"
                      id="accordionExample"
                    >
                      <div className="accordion-item fade_up_anim">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Membership vetting
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            As a private wealth association, we are a trusted place where members can interact
                            safely and securely with one another with high degrees of confidence. As such, we do
                            social and other checks on our members to ensure their continued suitability for
                            membership.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item fade_up_anim" data-delay=".2">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Contact and Communication
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Due to its global scale, the FWA is a digital platform that holds physical and remote
                            activities around the world. You can contact us via email, phone and platform messages
                            and we endeavor to give immediate or same day response. Certain membership groups
                            have access to our personal concierge services which includes an experienced and
                            dedicated FWA advisor.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item fade_up_anim" data-delay=".4">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Membership level
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            There are three membership levels: Explorer, Elevator and Evergreen. Explorer is great
                            for people starting out on the journey of family wealth while Elevator works for families
                            who are seeking growth and opportunity. Evergreen is most suitable for families on the
                            verge of succession or transition to next generation involvement.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item fade_up_anim" data-delay=".6">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            Your start out membership level
                          </button>
                        </h2>
                        <div
                          id="collapseFour"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            All our foundation members are on Explorer member level. As we unlock additional
                            services and resources, one click upgrade paths to the more advanced membership
                            level become available.
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item fade_up_anim" data-delay=".8">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                          >
                            Does my membership cover other family members?
                          </button>
                        </h2>
                        <div
                          id="collapseFive"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Only the signed up and vetted members can post and interact with other members.
                            However, we are delighted to create a family bundle that afford family members their own
                            spaces for safe communication and collaboration with other members and themselves.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item fade_up_anim" data-delay="1.0">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSix"
                            aria-expanded="false"
                            aria-controls="collapseSix"
                          >
                            Member discounts?
                          </button>
                        </h2>
                        <div
                          id="collapseSix"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Some services are free, and others are heavily discounted. The discount level is
                            dependent on the membership level.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item fade_up_anim" data-delay="1.2">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSeven"
                            aria-expanded="false"
                            aria-controls="collapseSeven"
                          >
                            Maximizing your membership?
                          </button>
                        </h2>
                        <div
                          id="collapseSeven"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            We suggest that you introduce yourself to other members and take an active part in
                            conversations and projects. Polite interactions breed trust and trust between members
                            brings lasting benefits.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item fade_up_anim" data-delay="1.4">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseEight"
                            aria-expanded="false"
                            aria-controls="collapseEight"
                          >
                            Terminating membership
                          </button>
                        </h2>
                        <div
                          id="collapseEight"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Simply send an email requesting termination of membership to members@fwaglobal.org.
                            and we will not invoice you for the following year.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item fade_up_anim" data-delay="1.6">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseNine"
                            aria-expanded="false"
                            aria-controls="collapseNine"
                          >
                            Membership transfers and succession
                          </button>
                        </h2>
                        <div
                          id="collapseNine"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            All members can transfer their membership to a designated child in their lifetime or by
                            using their estate documents such as a will. FWA will give a warm welcome to
                            successors and successors in title. We are proud generations of our client families.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item fade_up_anim" data-delay="1.8">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTen"
                            aria-expanded="false"
                            aria-controls="collapseTen"
                          >
                            Membership upgrades
                          </button>
                        </h2>
                        <div
                          id="collapseTen"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Upgrades are easy; simply click on the upgrade button at the top of the community page.
                            You can also downgrade your membership, but refunds will not be available on the
                            expired portion of your current membership.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item fade_up_anim" data-delay="2.0">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseEleven"
                            aria-expanded="false"
                            aria-controls="collapseEleven"
                          >
                            Confidentiality and privacy
                          </button>
                        </h2>
                        <div
                          id="collapseEleven"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            The community platform runs on the AWS server which possesses a high degree of
                            privacy. In addition, you can choose who sees your posts and decide on what
                            notifications you wish to receive. Finally, we will never sell or transfer your personal data
                            to third parties.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item fade_up_anim" data-delay="2.2">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwelve"
                            aria-expanded="false"
                            aria-controls="collapseTwelve"
                          >
                            Transacting business with other members
                          </button>
                        </h2>
                        <div
                          id="collapseTwelve"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            We support interactions between members, but membership does not imply approval for
                            any transactions between members. Also, for the association to mediate any disputes all
                            communication between members must be within the membership platform. We are
                            rolling out an escrow service for transactions in Q2 2025. Beyond this, we trust our
                            members to use a commonsense approach in their dealings.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item fade_up_anim" data-delay="2.4">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThirteen"
                            aria-expanded="false"
                            aria-controls="collapseThirteen"
                          >
                            Advertising products and services
                          </button>
                        </h2>
                        <div
                          id="collapseThirteen"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            This is currently not possible. We are rolling out a pre-vetted members product page in
                            Q1 2025.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item fade_up_anim" data-delay="2.6">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFourteen"
                            aria-expanded="false"
                            aria-controls="collapseFourteen"
                          >
                            Accessing advanced services
                          </button>
                        </h2>
                        <div
                          id="collapseFourteen"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Advanced services such as blockchain document security; Wills, asset registers, powers
                            of attorney and attorney certified Story of Wealth (SOW) documents store and release
                            are immediately available to Evergreen family members free and to all other members at
                            a cost.
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* faq-fin end*/}

            {/* Brand end*/}
            <div className="contact-us-fin pt-150 pb-150">
              <div className="container container-2xl">
                <div className="row g-4 justify-content-between">
                  <div className="col-lg-6 col-xl-5">
                    <div className="contact-us-fin__info">
                      <h3 className="h3 section__header-title-v9 fade_up_anim">
                        contact us
                      </h3>
                      <div className="contact-us-fin__info-cards">
                        <div
                          className="contact-us-fin__info-card fade_up_anim"
                          data-delay=".15"
                        >
                          {/*<figure className="card-icon">*/}
                          {/*<svg*/}
                          {/*  xmlns="http://www.w3.org/2000/svg"*/}
                          {/*  viewBox="0 0 48 48"*/}
                          {/*  fill="none"*/}
                          {/*>*/}
                          {/*  <path*/}
                          {/*    d="M43.6364 5.4541H4.36364C1.95357 5.4541 0 7.40767 0 9.81773V38.1814C0 40.5914 1.95357 42.545 4.36364 42.545H43.6364C46.0464 42.545 48 40.5914 48 38.1814V9.81773C48 7.40767 46.0464 5.4541 43.6364 5.4541ZM43.6364 7.63593C44.8394 7.63593 45.8182 8.6147 45.8182 9.81773V11.1049C45.7558 11.1902 45.685 11.2725 45.6062 11.351L25.5333 31.4242C25.1223 31.8351 24.578 32.0615 24 32.0615C23.422 32.0615 22.8777 31.8351 22.4667 31.4239L2.3933 11.3505C2.31472 11.2722 2.24416 11.1902 2.18183 11.1049V9.81773C2.18183 8.6147 3.16061 7.63593 4.36364 7.63593H43.6364ZM45.8182 14.2248V33.7741L36.0435 23.9994L45.8182 14.2248ZM11.9565 23.9994L2.18183 33.774V14.2248L11.9565 23.9994ZM4.36364 40.3632C3.16354 40.3632 2.18183 39.3815 2.18183 38.1814V36.8939C2.24736 36.8068 2.31287 36.7194 2.39996 36.6542L13.5056 25.5486L20.9238 32.9668C21.7748 33.8177 22.8873 34.2433 24 34.2433C25.1127 34.2433 26.2252 33.8177 27.0762 32.9668L34.4944 25.5486L45.6 36.6542C45.6871 36.7194 45.7526 36.8068 45.8182 36.8939V38.1814C45.8182 39.3815 44.8365 40.3632 43.6364 40.3632H4.36364Z"*/}
                          {/*    fill="currentColor"*/}
                          {/*  />*/}
                          {/*</svg>*/}
                          {/*</figure>*/}
                          <div className="card-content">
                            <h6 className="h6 text-lowercase">support@fwaglobal.org</h6>
                            <span className="card-info"
                            >Mon - Fri from 10 AM to 7PM EST</span>
                          </div>
                        </div>
                        <div
                          className="contact-us-fin__info-card fade_up_anim"
                          data-delay=".25"
                        >
                          {/*<figure className="card-icon">*/}
                          {/*<svg*/}
                          {/*  xmlns="http://www.w3.org/2000/svg"*/}
                          {/*  viewBox="0 0 48 48"*/}
                          {/*  fill="none"*/}
                          {/*>*/}
                          {/*  <g clip-path="url(#clip0_1174_1169)">*/}
                          {/*    <path*/}
                          {/*      d="M9.78009 31.9072C14.5144 37.5665 20.2136 42.0224 26.7183 45.1753C29.1949 46.3489 32.507 47.7414 36.197 47.9801C36.4258 47.9901 36.6446 48 36.8733 48C39.3499 48 41.3391 47.1446 42.9604 45.3842C42.9703 45.3742 42.9902 45.3543 43.0001 45.3344C43.577 44.6382 44.2335 44.0116 44.9198 43.3452C45.3872 42.8976 45.8646 42.4302 46.3222 41.9528C48.4407 39.7447 48.4407 36.9399 46.3023 34.8015L40.3246 28.8239C39.3101 27.7696 38.0967 27.2126 36.8236 27.2126C35.5505 27.2126 34.3271 27.7696 33.2828 28.8139L29.7221 32.3746C29.3939 32.1857 29.0557 32.0166 28.7374 31.8574C28.3396 31.6585 27.9716 31.4695 27.6433 31.2607C24.4009 29.2018 21.4568 26.5164 18.6421 23.0651C17.2198 21.2648 16.265 19.753 15.5986 18.2114C16.5335 17.3659 17.4088 16.4807 18.2542 15.6154C18.5526 15.3071 18.8609 14.9988 19.1692 14.6904C20.2434 13.6162 20.8203 12.373 20.8203 11.1098C20.8203 9.84666 20.2534 8.6034 19.1692 7.52922L16.2053 4.56527C15.8572 4.21716 15.529 3.87899 15.1908 3.53087C14.5343 2.85454 13.8481 2.15831 13.1717 1.5317C12.1473 0.527145 10.9438 0 9.67069 0C8.40753 0 7.1941 0.527145 6.12987 1.54165L2.41002 5.2615C1.05734 6.61417 0.291491 8.25528 0.132353 10.155C-0.0566237 12.5321 0.381006 15.0584 1.51486 18.1119C3.25544 22.8363 5.88121 27.2225 9.78009 31.9072ZM2.55921 10.3639C2.67856 9.04103 3.18581 7.93701 4.14064 6.98218L7.8406 3.28222C8.41747 2.72524 9.05403 2.4368 9.67069 2.4368C10.2774 2.4368 10.8941 2.72524 11.461 3.30211C12.1274 3.91877 12.754 4.56527 13.4303 5.25155C13.7685 5.59967 14.1166 5.94778 14.4647 6.30584L17.4287 9.26979C18.0453 9.88645 18.3636 10.5131 18.3636 11.1297C18.3636 11.7464 18.0453 12.373 17.4287 12.9896C17.1203 13.298 16.812 13.6162 16.5037 13.9246C15.5787 14.8595 14.7134 15.7447 13.7585 16.5901C13.7387 16.61 13.7287 16.62 13.7088 16.6399C12.8833 17.4654 13.0126 18.2511 13.2115 18.8479C13.2215 18.8777 13.2314 18.8976 13.2413 18.9275C14.0072 20.7675 15.0714 22.518 16.7324 24.6067C19.7163 28.2868 22.8592 31.1413 26.3205 33.3394C26.7482 33.6179 27.2057 33.8367 27.6334 34.0555C28.0312 34.2545 28.3992 34.4434 28.7275 34.6523C28.7672 34.6722 28.7971 34.6921 28.8369 34.712C29.1651 34.8811 29.4834 34.9606 29.8016 34.9606C30.5973 34.9606 31.1145 34.4534 31.2836 34.2843L35.0035 30.5644C35.5803 29.9876 36.2069 29.6792 36.8236 29.6792C37.5795 29.6792 38.1962 30.1467 38.5841 30.5644L44.5816 36.552C45.7751 37.7455 45.7652 39.0385 44.5517 40.3017C44.134 40.7493 43.6964 41.177 43.2289 41.6245C42.5327 42.3009 41.8066 42.9971 41.1502 43.7828C40.0064 45.0162 38.6437 45.593 36.8833 45.593C36.7142 45.593 36.5352 45.5831 36.3661 45.5731C33.1038 45.3643 30.0702 44.0912 27.7925 43.007C21.606 40.0133 16.1755 35.7663 11.6699 30.3755C7.95995 25.9097 5.46348 21.7522 3.81242 17.2963C2.78797 14.5611 2.40007 12.363 2.55921 10.3639Z"*/}
                          {/*      fill="currentColor"*/}
                          {/*    />*/}
                          {/*  </g>*/}
                          {/*  <defs>*/}
                          {/*    <clipPath id="clip0_1174_1169">*/}
                          {/*      <rect width="48" height="48" fill="white"/>*/}
                          {/*    </clipPath>*/}
                          {/*  </defs>*/}
                          {/*</svg>*/}
                          {/*</figure>*/}
                          <div className="card-content">
                            <h6 className="h6">800-349-9331</h6>
                            <span className="card-info"
                            >Mon - Fri from 10 AM to 7PM EST</span>
                          </div>
                        </div>
                        <div
                          className="contact-us-fin__info-card fade_up_anim"
                          data-delay=".35"
                        >
                          {/*<figure className="card-icon">*/}
                          {/*<svg*/}
                          {/*  xmlns="http://www.w3.org/2000/svg"*/}
                          {/*  viewBox="0 0 48 48"*/}
                          {/*  fill="none"*/}
                          {/*>*/}
                          {/*  <g clip-path="url(#clip0_1174_1176)">*/}
                          {/*    <path*/}
                          {/*      d="M28 18.1807L45.62 21.6807C47.04 21.9807 48 23.1807 48 24.6007V45.0007C48 46.6607 46.66 48.0007 45 48.0007H27C27.56 48.0007 28 47.5607 28 47.0007V46.0007H45C45.54 46.0007 46 45.5607 46 45.0007V24.6007C46 24.1407 45.68 23.7207 45.22 23.6207L28 20.2207V18.1807Z"*/}
                          {/*      fill="currentColor"*/}
                          {/*    />*/}
                          {/*    <path*/}
                          {/*      d="M39 28C39.56 28 40 28.44 40 29C40 29.56 39.56 30 39 30H35C34.44 30 34 29.56 34 29C34 28.44 34.44 28 35 28H39Z"*/}
                          {/*      fill="currentColor"*/}
                          {/*    />*/}
                          {/*    <path*/}
                          {/*      d="M39 34C39.56 34 40 34.44 40 35C40 35.56 39.56 36 39 36H35C34.44 36 34 35.56 34 35C34 34.44 34.44 34 35 34H39Z"*/}
                          {/*      fill="currentColor"*/}
                          {/*    />*/}
                          {/*    <path*/}
                          {/*      d="M39 40C39.56 40 40 40.44 40 41C40 41.56 39.56 42 39 42H35C34.44 42 34 41.56 34 41C34 40.44 34.44 40 35 40H39Z"*/}
                          {/*      fill="currentColor"*/}
                          {/*    />*/}
                          {/*    <path*/}
                          {/*      d="M28 47.0007C28 47.5607 27.56 48.0007 27 48.0007C26.44 48.0007 26 47.5607 26 47.0007V46.0007V19.0007C26 18.7007 26.14 18.4207 26.36 18.2207C26.6 18.0407 26.9 17.9607 27.2 18.0207L28 18.1807V20.2207V46.0007V47.0007Z"*/}
                          {/*      fill="currentColor"*/}
                          {/*    />*/}
                          {/*    <path*/}
                          {/*      d="M26 46V47C26 47.56 26.44 48 27 48H19C19.56 48 20 47.56 20 47V46H26Z"*/}
                          {/*      fill="currentColor"*/}
                          {/*    />*/}
                          {/*    <path*/}
                          {/*      d="M21 10C21.56 10 22 10.44 22 11C22 11.56 21.56 12 21 12H17C16.44 12 16 11.56 16 11C16 10.44 16.44 10 17 10H21Z"*/}
                          {/*      fill="currentColor"*/}
                          {/*    />*/}
                          {/*    <path*/}
                          {/*      d="M22 17C22 17.56 21.56 18 21 18H17C16.44 18 16 17.56 16 17C16 16.44 16.44 16 17 16H21C21.56 16 22 16.44 22 17Z"*/}
                          {/*      fill="currentColor"*/}
                          {/*    />*/}
                          {/*    <path*/}
                          {/*      d="M21 22C21.56 22 22 22.44 22 23C22 23.56 21.56 24 21 24H17C16.44 24 16 23.56 16 23C16 22.44 16.44 22 17 22H21Z"*/}
                          {/*      fill="currentColor"*/}
                          {/*    />*/}
                          {/*    <path*/}
                          {/*      d="M21 28C21.56 28 22 28.44 22 29C22 29.56 21.56 30 21 30H17C16.44 30 16 29.56 16 29C16 28.44 16.44 28 17 28H21Z"*/}
                          {/*      fill="currentColor"*/}
                          {/*    />*/}
                          {/*    <path*/}
                          {/*      d="M12 29C12 29.56 11.56 30 11 30H7C6.44 30 6 29.56 6 29C6 28.44 6.44 28 7 28H11C11.56 28 12 28.44 12 29Z"*/}
                          {/*      fill="currentColor"*/}
                          {/*    />*/}
                          {/*    <path*/}
                          {/*      d="M11 10C11.56 10 12 10.44 12 11C12 11.56 11.56 12 11 12H7C6.44 12 6 11.56 6 11C6 10.44 6.44 10 7 10H11Z"*/}
                          {/*      fill="currentColor"*/}
                          {/*    />*/}
                          {/*    <path*/}
                          {/*      d="M11 16C11.56 16 12 16.44 12 17C12 17.56 11.56 18 11 18H7C6.44 18 6 17.56 6 17C6 16.44 6.44 16 7 16H11Z"*/}
                          {/*      fill="currentColor"*/}
                          {/*    />*/}
                          {/*    <path*/}
                          {/*      d="M11 22C11.56 22 12 22.44 12 23C12 23.56 11.56 24 11 24H7C6.44 24 6 23.56 6 23C6 22.44 6.44 22 7 22H11Z"*/}
                          {/*      fill="currentColor"*/}
                          {/*    />*/}
                          {/*    <path*/}
                          {/*      d="M18 37C18 36.44 17.54 36 17 36H11C10.44 36 10 36.44 10 37V46H8V37C8 35.34 9.34 34 11 34H17C18.66 34 20 35.34 20 37V46H18V37Z"*/}
                          {/*      fill="currentColor"*/}
                          {/*    />*/}
                          {/*    <path*/}
                          {/*      d="M10 46H18H20V47C20 47.56 19.56 48 19 48H9C8.44 48 8 47.56 8 47V46H10Z"*/}
                          {/*      fill="currentColor"*/}
                          {/*    />*/}
                          {/*    <path*/}
                          {/*      d="M3.5 0.400266L25.48 3.74027C26.94 3.98027 28 5.22027 28 6.70027V18.1803L27.2 18.0203C26.9 17.9603 26.6 18.0403 26.36 18.2203C26.14 18.4203 26 18.7003 26 19.0003V6.70027C26 6.20027 25.64 5.78027 25.16 5.70027L3.18 2.38027C3.12 2.36027 3.06 2.36027 3 2.36027C2.76 2.36027 2.54 2.44027 2.36 2.60027C2.12 2.80027 2 3.06027 2 3.36027V45.0003C2 45.5603 2.46 46.0003 3 46.0003H8V47.0003C8 47.5603 8.44 48.0003 9 48.0003H3C1.34 48.0003 0 46.6603 0 45.0003V3.36027C0 2.48027 0.38 1.64027 1.06 1.08027C1.74 0.500266 2.62 0.260266 3.5 0.400266Z"*/}
                          {/*      fill="currentColor"*/}
                          {/*    />*/}
                          {/*  </g>*/}
                          {/*  <defs>*/}
                          {/*    <clipPath id="clip0_1174_1176">*/}
                          {/*      <rect width="48" height="48" fill="white"/>*/}
                          {/*    </clipPath>*/}
                          {/*  </defs>*/}
                          {/*</svg>*/}
                          {/*</figure>*/}
                          <div className="card-content">
                            <h6 className="h6">69132 Legros Way, Maxworth 92</h6>
                            <span className="card-info"
                            >FWA Headquarter</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Brand end*/}
          </main>

          {/* Footer Start*/}

          {/* Footer End*/}
        </div>
      </div>

      <div className="search__popup">
        <span className="search__popup-toggle">
          <i className="fa-solid fa-xmark"></i>
        </span>
        <div className="search__popup-wrapper">
          <form action="index.html" className="search__popup-form">
            <input
              className="search__input"
              type="search"
              name="search"
              placeholder="search hear"
            />
            <div className="search__popup-btns-wrapper">
              <span className="search-clear">
                <i className="fa-solid fa-x"></i>
              </span>
              <button className="common-btn__variation9">Search</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
