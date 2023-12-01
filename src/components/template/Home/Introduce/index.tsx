function IntroduceComponent() {
  return (
    <div className="lg:px-36 mb-12 lg:mb-24.5">
      <h3 className="lg:text-center mb-6 lg:mb-12 lg:px-44 text-secondary head4 lg:head3">
        Spacious Service Apartment in Singapore
      </h3>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-14">
        <div className="flex flex-col gap-3 lg:gap-6 flex-1 lg:text-justify">
          {[
            'We understand the challenges that come with finding safe, affordable and comfortable accommodation, especially when travelling with family or relocating to a new country. Unlike hotels, which often require you to book multiple rooms to accommodate your group, we offer a more cost-effective and spacious solution.',
            'Our serviced apartment in Singapore provides a generous 400 sqf residence that effortlessly accommodates a family of four. Each serviced apartment is well-equipped, with a dining area, kitchenette, and washer and dryer, giving you the convenience of cooking meals and doing laundry at your leisure. Not only will you save time but also money on costly dining and laundry services.',
            'We take pride in providing excellent housekeeping and timely maintenance services to ensure a quality and hassle-free stay. We take care of our serviced apartments, amenities and facilities, so you’ll feel right at home.',
          ].map((text: string) => {
            return (
              <p className="lg:text2-normal text3-normal" key={text}>
                {text}
              </p>
            );
          })}
        </div>
        <div className="flex flex-col gap-3 lg:gap-6 flex-1 lg:text-justify">
          {[
            "If you're in need of a short-term rental, we're flexible enough to host you for six nights. If you’re looking for long-term rental, our serviced residences offer value-for-money, spacious accommodations with all the necessary amenities and services.",
            'And that’s not all, we’re proud to be one of the first pet-friendly service apartments in Singapore. That’s right, your pet is also welcome in all our residences!',
            'Don’t settle for cramped hotel rooms; experience the perfect balance of convenience, assurance, affordability, and flexibility with our service apartments in Singapore.',
            'Book your stay today!',
          ].map((text: string) => {
            return (
              <p className="lg:text2-normal text3-normal" key={text}>
                {text}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default IntroduceComponent;
