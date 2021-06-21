import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useMediaQuery } from 'react-responsive';

const New = () => {
  const isDesktop = useMediaQuery({
    query: '(min-device-width: 1000px)'
  });
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });
  return (
    <section>
      <div
        style={{
          display: 'flex',
          flexdirection: 'row',
          border: '1px solid #f0f0f0',
          padding: '8px',
          width: isDesktop ? '80%' : '100%'
        }}
      >
        <div>
          <Skeleton
            style={{ height: isDesktop ? '30px' : '15px' }}
            width={140}
          />
        </div>
      </div>
      <div style={{ display: isMobile ? 'none' : 'block' }}>
        <div
          style={{
            display: 'flex',
            flexdirection: 'row'
          }}
        >
          <div
            style={{
              width: '80%',
              display: 'flex',
              flexdirection: 'row'
            }}
          >
            <ul
              style={{
                width: '20%',
                border: '1px solid #f0f0f0',
                padding: '6px'
              }}
            >
              <li style={{ padding: '6px', border: '1px solid #f0f0f0' }} />
            </ul>
            <div
              className="card"
              style={{
                width: '80%',
                border: '1px solid #f0f0f0',
                padding: '6px'
              }}
            >
              <div
                style={{
                  padding: '6px',
                  border: '1px solid #f0f0f0',
                  width: '20%'
                }}
              />
              <div
                style={{
                  // padding: '6px',
                  border: '1px solid #f0f0f0',
                  width: '80%',
                  display: 'flex',
                  flexdirection: 'row'
                }}
              >
                <ul className="flexclass" style={{ width: '80%' }}>
                  {Array(12)
                    .fill()
                    .map((item, index) => (
                      <p style={{ width: '100px ' }}>
                        <span>
                          <Skeleton circle={true} height={30} width={30} />{' '}
                          &nbsp;
                        </span>
                      </p>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="card"
        style={{
          width: '100%',
          padding: '6px',

          display: isDesktop ? 'none' : 'block'
        }}
      >
        <div
          className="card"
          style={{
            width: '100%',
            padding: '6px'
          }}
        >
          <div
            style={{
              padding: '10px',
              border: '1px solid #f0f0f0',
              width: '20%'
            }}
          />
          <div
            style={{
              padding: '6px',
              border: '1px solid #f0f0f0',
              width: '80%'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default New;
