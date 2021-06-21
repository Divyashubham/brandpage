import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useMediaQuery } from 'react-responsive';

const Brand = () => {
  const isDesktop = useMediaQuery({
    query: '(min-device-width: 1000px)'
  });
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });
  return (
    <section>
      <div className="container-box ">
        <div style={{ width: isDesktop ? '80%' : '100%' }}>
          <ul className="flexclass">
            {Array(8)
              .fill()
              .map((item, index) => (
                <li
                  className="boxclass flexcenter"
                  style={{
                    display: isMobile ? 'none' : 'block',
                    marginleft: isMobile ? '0px' : '10px'
                  }}
                >
                  <li className="square">
                    <Skeleton
                      width={isDesktop ? '50px' : '50px'}
                      height={isDesktop ? '50px' : '25px'}
                    />
                    <p
                      style={{
                        paddingTop: '4px',
                        marginright: '10px',
                        marginleft: '0px',
                        margintop: '30px'
                      }}
                    >
                      <Skeleton
                        width={isDesktop ? '60px' : '60px'}
                        height={'10px'}
                      />
                    </p>
                  </li>
                </li>
              ))}
          </ul>
          <div style={{ display: 'flex', flexdirection: 'column' }}>
            <ul
              className="flexclass"
              style={{
                width: '100%',
                padding: '10px',
                height: isDesktop ? '0px' : '100px'
              }}
            >
              {Array(4)
                .fill()
                .map((item, index) => (
                  <li
                    className="boxclass flexcenter"
                    style={{
                      display: isMobile ? 'block' : 'none',
                      width: isDesktop ? '115px' : '65px',
                      height: isDesktop ? '115px' : '65px'
                    }}
                  >
                    <li className="square" style={{}}>
                      <Skeleton
                        width={isDesktop ? '50px' : '25px'}
                        height={isDesktop ? '50px' : '25px'}
                      />
                      <p
                        style={{
                          paddingTop: '4px',
                          margintop: isMobile ? '20px' : '30px',
                          marginright: '10px',
                       
                        }}
                      >
                        <Skeleton
                          width={isDesktop ? '60px' : '40px'}
                          height={'10px'}
                        />
                      </p>
                    </li>
                  </li>
                ))}
            </ul>
          </div>

          <ul
            className="flexclass"
            style={{
              width: '100%',
              padding: '10px',
              height: isDesktop ? '0px' : '120px'
            }}
          >
            {Array(4)
              .fill()
              .map((item, index) => (
                <li
                  className="boxclass flexcenter"
                  style={{
                    display: isMobile ? 'block' : 'none',
                    width: isDesktop ? '115px' : '65px',
                    height: isDesktop ? '115px' : '65px'
                  }}
                >
                  <li className="square">
                    <Skeleton
                      width={isDesktop ? '50px' : '25px'}
                      height={isDesktop ? '50px' : '25px'}
                    />
                    <p
                      style={{
                        paddingTop: '4px',
                        margintop: isMobile ? '20px' : '30px',
                        marginright: '10px',
                        marginleft: '0px',
                       
                      }}
                    >
                      <Skeleton
                        width={isDesktop ? '60px' : '40px'}
                        height={'10px'}
                      />
                    </p>
                  </li>
                </li>
              ))}
          </ul>
        </div>
        <div
          class="righttbox"
          style={{ display: isDesktop ? 'block' : 'none' }}
        >
          <div class="list flexclass" style={{ padding: '6px' }}>
            <li>
              <Skeleton height={40} width={60} />
            </li>
            <li>
              <Skeleton height={40} width={60} />
            </li>
            <li>
              <Skeleton height={40} width={60} />
            </li>
          </div>
          <div
            style={{
              marginleft: '10px',
              width: isMobile ? '5%' : '20%',
              height: isMobile ? '180px' : '150px'
            }}
          >
            <Skeleton height={1500} width={280} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
