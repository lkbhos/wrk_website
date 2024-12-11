import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  if (location.pathname === '/' || location.pathname === '/unauthorized') {
    return null;
  }
  return (
    <nav aria-label="breadcrumb">
      <ul style={{ listStyleType: 'none', display: 'flex', padding: 0, fontSize: '0.9rem;', fontWeight: '600' }}>
        <li>
          <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>
            หน้าแรก
          </Link>
          {pathnames.length > 0 && <span style={{ margin: '0 5px', color: '#056839' }}>{<i class="ri-arrow-right-double-line"></i>}</span>}
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return (
            <li key={to}>
              {index !== pathnames.length - 1 ? (
                <>
                  <Link to={to} style={{ textDecoration: 'none', color: '#056839' }}>
                    {decodeURIComponent(value)}
                  </Link>
                  <span style={{ margin: '0 5px', color: '#056839' }}>{<i class="ri-arrow-right-double-line"></i>}</span>
                </>
              ) : (
                <p style={{ color: '#056839' }}>{decodeURIComponent(value)}</p>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
