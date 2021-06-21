import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useMediaQuery } from 'react-responsive';

const Brandcatalogue = () => {
  const isDesktop = useMediaQuery({
    query: '(min-device-width: 1000px)'
  });
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });
  return (
    <section>
      <div >
        <div style={{ width: '80%', display: isDesktop ? 'block' : 'none' }}>
          <ul className="list flexclass">
            <li
              className="card"
              style={{
                width: '100%',
                border: '1px solid #f0f0f0'
              }}
            >
              <li
                className="search"
                style={{
                  width: '10%',
                  border: '1px solid #f0f0f0',
                  padding: '30px'
                }}
              >
                <h5 className="card-title">
                  <Skeleton circle={true} height={45} width={45} /> &nbsp;
                </h5>
              </li>
              <li
                className="search"
                style={{
                  width: '80%',
                  padding: '6px'
                }}
              >
                <ul className="flexclass">
                  {Array(6)
                    .fill()
                    .map((item, index) => (
                      <li
                        className="boxclass1 flexcenter "
                        style={{
                          marginleft: isMobile ? '0px' : '10px',
                          height: '50px',
                          width: '100px',
                          marginbottom: '10px'
                        }}
                      >
                        <li className="square1" >
                          <Skeleton
                            width={isDesktop ? '70px' : '50px'}
                            height={isDesktop ? '38px' : '25px'}
                          />
                        </li>
                      </li>
                    ))}
                </ul>
                <ul className="flexclass">
                  {Array(6)
                    .fill()
                    .map((item, index) => (
                      <li
                        className="boxclass1 flexcenter"
                        style={{
                          marginleft: isMobile ? '0px' : '10px',
                          height: '50px',
                          width: '100px',
                          marginbottom: '10px'
                        }}
                      >
                        <li className="square1">
                          <Skeleton
                            width={isDesktop ? '70px' : '50px'}
                            height={isDesktop ? '38px' : '25px'}
                          />
                        </li>
                      </li>
                    ))}
                </ul>
                <ul className="flexclass">
                  {Array(6)
                    .fill()
                    .map((item, index) => (
                      <li
                        className="boxclass1 flexcenter"
                        style={{
                          marginleft: isMobile ? '0px' : '10px',
                          height: '50px',
                          width: '100px',
                          marginbottom: '10px'
                        }}
                      >
                        <li className="square1">
                          <Skeleton
                            width={isDesktop ? '70px' : '50px'}
                            height={isDesktop ? '38px' : '25px'}
                          />
                        </li>
                      </li>
                    ))}
                </ul>
                <ul className="flexclass">
                  {Array(6)
                    .fill()
                    .map((item, index) => (
                      <li
                        className="boxclass1 flexcenter"
                        style={{
                          marginleft: isMobile ? '0px' : '10px',
                          height: '50px',
                          width: '100px',
                          marginbottom: '10px'
                        }}
                      >
                        <li className="square1">
                          <Skeleton
                            width={isDesktop ? '70px' : '50px'}
                            height={isDesktop ? '38px' : '25px'}
                          />
                        </li>
                      </li>
                    ))}
                </ul>
              </li>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="container-box"
        style={{ display: isMobile ? 'block' : 'none' }}
      >
        <div>
          <ul className="list flexclass">
            <li
              className="card"
              style={{
                width: '100%',
                border: '1px solid #f0f0f0'
              }}
            >
              <li style={{ width: '10%' }}>
                <h5 style={{ padding: '8px' }}>
                  <Skeleton circle={true} height={30} width={30} /> &nbsp;
                </h5>
              </li>
              <li
                className="search"
                style={{
                  width: '80%',
                  padding: '6px'
                }}
              >
                <ul className="flexclass ">
                  {Array(4)
                    .fill()
                    .map((item, index) => (
                      <li
                        className="boxclass2 flexcenter"
                        style={{
                         height:'40px',
                         width: '70px',
                         marginleft: isMobile ? '0px' : '10px',
                         marginbottom: '10px'
                        }}
                      >
                        <li className="square1" >
                          <Skeleton width={50} height={30} />
                        </li>
                      </li>
                    ))}
                </ul>
                <ul className="flexclass">
                  {Array(4)
                    .fill()
                    .map((item, index) => (
                      <li
                        className="boxclass2 flexcenter"
                        style={{
                           height:'40px',
                         width: '70px',
                         marginleft: isMobile ? '0px' : '10px',
                         marginbottom: '10px',
                        
                        }}
                      >
                        <li className="square1">
                          <Skeleton width={50} height={30} />
                        </li>
                      </li>
                    ))}
                </ul>
                <ul className="flexclass">
                  {Array(4)
                    .fill()
                    .map((item, index) => (
                      <li
                        className="boxclass2 flexcenter"
                        style={{
                          height:'40px',
                         width: '70px',
                         marginleft: isMobile ? '0px' : '10px',
                         marginbottom: '10px'
                        }}
                      >
                        <li className="square1">
                          <Skeleton width={50} height={30} />
                        </li>
                      </li>
                    ))}
                </ul>
                <ul className="flexclass">
                  {Array(4)
                    .fill()
                    .map((item, index) => (
                      <li
                        className="boxclass2 flexcenter"
                        style={{
                          height:'40px',
                         width: '70px',
                         marginleft: isMobile ? '0px' : '10px',
                         marginbottom: '10px'
                        }}
                      >
                        <li className="square1">
                          <Skeleton width={50} height={30} />
                        </li>
                      </li>
                    ))}
                </ul>
                <ul className="flexclass">
                  {Array(4)
                    .fill()
                    .map((item, index) => (
                      <li
                        className="boxclass2 flexcenter"
                        style={{
                         height:'40px',
                         width: '70px',
                         marginleft: isMobile ? '0px' : '10px',
                         marginbottom: '10px'
                        }}
                      >
                        <li className="square1">
                          <Skeleton width={50} height={30} />
                        </li>
                      </li>
                    ))}
                </ul>
                <ul className="flexclass">
                  {Array(4)
                    .fill()
                    .map((item, index) => (
                      <li
                        className="boxclass2 flexcenter"
                        style={{
                          height:'40px',
                         width: '70px',
                         marginleft: isMobile ? '0px' : '10px',
                         marginbottom: '10px'
                        }}
                      >
                        <li className="square1">
                          <Skeleton width={50} height={30} />
                        </li>
                      </li>
                    ))}
                </ul>
              </li>
              <li style={{ width: '10%' }}>
                <p style={{ padding: '8px' }}>
                  <Skeleton width={15} height={250} />
                </p>
              </li>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Brandcatalogue;
