import React, { useState } from "react";
export default function AnimatedGallery() {
  const [isReadMore, setIsReadMore] = useState(false);
  const handleReadMoreClick = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className="container-fluid">
      <div className="centerheading pt-5 pt-sm-3">
        <h3>Our Leaders</h3>
        <div className="line mt-0 mb-3"></div>
      </div>
      <div className="container founder pt-0 mt-0">
        <div className="row mt-5">
          <div className="col-sm-6  col-12 leader_img p-sm-5 p-2">
            <img src="../owners website photo-01.png" alt="city samosa owner" loading="lazy"></img>
          </div>
          <div className="col-sm-6 founder_txt pt-4  col-12 center-vertical flex_left largescreen">
            <h2 className="text-center mt-5 mt-sm-3 mainheading">
              Chandrashekhar Wagadare
              <span className="pt-2"> ( Co-Founder ) </span>
            </h2>
            <p className="subheading justify mt-2">
              He handles the marketing and business expansion department,
              driving growth through strategic marketing initiatives and
              identifying opportunities for business expansion. He combines
              creative marketing with strong business acumen to increase brand
              visibility, customer engagement, and market share, while also
              identifying new markets, partnerships, and revenue streams for the
              company. Before joining City Samosa, he worked as a night driver
              for IT companies in Mumbai. After that, he ventured into the
              gardening business, road contracting, and also took a franchise of
              Premacha Chaha. However, during the COVID-19 pandemic, everything
              came to a halt. Later, he and his three friends decided to start
              the City Samosa brand. They opened the first City Samosa branch at
              Uthalsar Naka, Thane, on 22 March 2021.
            </p>
          </div>
          <div className="col-sm-6 founder_txt pt-4  col-12 center-vertical flex_left smallscreen">
            <h2 className="text-center mt-5 mt-sm-3 mainheading">
              Chandrashekhar Wagadare
              <span className="pt-2"> ( Co-Founder ) </span>
            </h2>
            <p className="subheading justify mt-2">
              He handles the marketing and business expansion department,
              driving growth through strategic marketing initiatives and
              identifying opportunities for business expansion. He combines
              creative marketing with strong business acumen to increase brand
              visibility, customer engagement, and market share, while also
              identifying new markets, partnerships, and revenue streams for the
              company. {isReadMore && ( <>Before joining City Samosa, he worked as a night driver
              for IT companies in Mumbai. After that, he ventured into the
              gardening business, road contracting, and also took a franchise of
              Premacha Chaha. However, during the COVID-19 pandemic, everything
              came to a halt. Later, he and his three friends decided to start
              the City Samosa brand. They opened the first City Samosa branch at
              Uthalsar Naka, Thane, on 22 March 2021.</>)}
              <button onClick={handleReadMoreClick} className="readbtn">
        {isReadMore ? 'Read Less' : 'Read More...'}
      </button>
            </p>            
          </div>
        </div> 
        <div className="row mt-5">
            <div className="col-sm-6 col-12 pt-4 center-vertical flex_right largescreen">
            <h2 className="text-center mt-4 mt-sm-3 mainheading">
              Pradeep Patel <span> ( Co-Founder ) </span>
            </h2>
            <p className="subheading justify">
              As a co-founder of City Samosa, he currently leads the Accounting
              Department, where he is responsible for managing all accounting
              operations. His role involves ensuring financial accuracy and
              compliance with regulatory standards, which is critical for
              maintaining the integrity of the company's financial practices. He
              supervises a team of accountants, overseeing their work to ensure
              precision in financial reporting and adherence to accounting
              principles. His duties also include preparing detailed financial
              reports, analyzing financial data to uncover insights and trends,
              and developing budgets that support the company's strategic goals
              and financial stability. Before establishing City Samosa, he
              gained valuable business experience by selling products on trains
              and running a tea shop, which provided him with a solid foundation
              in sales, customer service, and financial management.
            </p>
          </div>
          <div className="col-sm-6 col-12 leader_img p-sm-5 p-2">
            <img src="../owners website photo-03.png" alt="city samosa owner" loading="lazy"/>
          </div>
          <div className="col-sm-6 col-12 pt-4 smallscreen center-vertical text-center">
            <h2 className="text-center mt-2 mainheading">
              Pradeep Patel<span className="pt-2"> ( Co-Founder ) </span>
            </h2>
            <p className="subheading justify mt-2">
              As a co-founder of City Samosa, he currently leads the Accounting
              Department, where he is responsible for managing all accounting
              operations. His role involves ensuring financial accuracy and
              compliance with regulatory standards, which is critical for
              maintaining the integrity of the company's financial practices. He
              supervises a team of accountants, overseeing their work to ensure
              precision in financial reporting and adherence to accounting
              principles.{isReadMore && ( <>His duties also include preparing detailed financial
              reports, analyzing financial data to uncover insights and trends,
              and developing budgets that support the company's strategic goals
              and financial stability. Before establishing City Samosa, he
              gained valuable business experience by selling products on trains
              and running a tea shop, which provided him with a solid foundation
              in sales, customer service, and financial management.</> )}
              <button onClick={handleReadMoreClick} className="readbtn">
        {isReadMore ? 'Read Less' : 'Read More...'}
      </button>
            </p>            
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-6 col-12 leader_img p-sm-5 p-2">
            <img src="../owners website photo-02.png" alt="city samosa owner" loading="lazy"></img>
          </div>
          <div className="col-sm-6 col-12 center-vertical founder_txt pt-4 flex_left largescreen ">
            <h2 className="text-center mt-4 mt-sm-3 mainheading">
              Santosh Wagdare <span className="pt-2"> ( Co-Founder ) </span>
            </h2>
            <p className="subheading justify mt-2">
              As a co-founder of City Samosa, he currently oversees the Interior
              and Machinery Department, he ensures each franchise location meets
              the brand’s standards in both design and functionality. He
              oversees the interior layout, working with designers to create
              appealing and efficient spaces. Additionally, he manages the
              procurement, installation, and maintenance of kitchen equipment,
              ensuring it is up-to-date and compliant with safety regulations.
              His role involves coordinating with suppliers, managing
              maintenance schedules, and ensuring that each outlet operates
              smoothly, contributing to the franchise’s success.
            </p>
          </div>
          <div className="col-sm-6 col-12 center-vertical pt-4 flex_left smallscreen founder_txt">
            <h2 className="text-center mt-4 mt-sm-3 mainheading">
              Santosh Wagdare <span className="pt-2"> ( Co-Founder ) </span>
            </h2>
            <p className="subheading justify mt-2">
              As a co-founder of City Samosa, he currently oversees the Interior
              and Machinery Department, he ensures each franchise location meets
              the brand’s standards in both design and functionality. He
              oversees the interior layout, working with designers to create
              appealing and efficient spaces. Additionally, he manages the
              procurement, installation, and {isReadMore && (<> maintenance of kitchen equipment,
              ensuring it is up-to-date and compliant with safety regulations.
              His role involves coordinating with suppliers, managing
              maintenance schedules, and ensuring that each outlet operates
              smoothly, contributing to the franchise’s success.</>)}
              <button onClick={handleReadMoreClick} className="readbtn">
        {isReadMore ? 'Read Less' : 'Read More...'}
      </button>
            </p>
          </div>
        </div>
        <div className="row mb-5 pb-5 mt-5">
          <div className="col-sm-6 col-12 center-vertical pt-4 largescreen flex_right">
            <h2 className="text-center mt-4 mt-sm-3 mainheading">
              Raja Nadar <span> ( Co-Founder ) </span>
            </h2>
            <p className="subheading justify">
              Raja Sir is the visionary behind City Samosa, a beloved brand
              among Indian food lovers. With over 18 years of experience in
              samosa making, he has crafted a unique flavor that resonates with
              people across the country. City Samosa’s journey began during the
              COVID pandemic when Raja Sir met Chandrashekhar Sir, Santosh Sir,
              and Pradeep Sir. Recognizing his exceptional culinary skills, they
              collaborated to bring his samosas to a wider audience, launching
              the City Samosa brand. In addition to creating the samosa recipes,
              Raja Sir plays a key role in managing the operational aspects of
              the franchise, overseeing staffing to ensure each outlet maintains
              the high standards of quality and service the brand is known for.
            </p>
          </div>
          <div className="col-sm-6 col-12 leader_img p-sm-5 p-2">
            <img src="../owners website photo-04.png" alt="city samosa owner" loading="lazy" />
          </div>
          <div className="col-sm-6 col-12 smallscreen pt-4 center-vertical text-center">
            <h2 className="text-center mt-2 mainheading">
              Raja Nadar <span className="pt-2"> ( Co-Founder ) </span>
            </h2>
            <p className="subheading justify mt-2">
              Raja Sir is the visionary behind City Samosa, a beloved brand
              among Indian food lovers. With over 18 years of experience in
              samosa making, he has crafted a unique flavor that resonates with
              people across the country. City Samosa’s journey began during the
              COVID pandemic when Raja Sir met Chandrashekhar Sir, Santosh Sir,
              and Pradeep Sir.{isReadMore && (<>Recognizing his exceptional culinary skills, they
              collaborated to bring his samosas to a wider audience, launching
              the City Samosa brand. In addition to creating the samosa recipes,
              Raja Sir plays a key role in managing the operational aspects of
              the franchise, overseeing staffing to ensure each outlet maintains
              the high standards of quality and service the brand is known for.</> )}<button onClick={handleReadMoreClick} className="readbtn">
        {isReadMore ? 'Read Less' : 'Read More...'}
      </button>
            </p> 
          </div>
        </div>
      </div>
    </div>
  );
}
