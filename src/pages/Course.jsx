import React from 'react'

const Course = () => {
  const routes = [
    { path: '/', breadcrumb: 'Home' },
    { path: '/courses', breadcrumb: 'Courses' },
    { path: '/students', breadcrumb: 'Students' },
    { path: '/payments', breadcrumb: 'Payments' },
    { path: '/quiz', breadcrumb: 'Quiz' },
    { path: '/messages', breadcrumb: 'Messages' },
];
  const breadcrumbs = useBreadcrumbs(routes);
  const location = useLocation();

  return (
    <div className='w-full'>
        <div className="content w-full flex">
            <div className="left w-[20%]"></div>
            <div className="right w-[80%] text-2xl font-semibold ">
              <div>
                <nav className='max-w-fit'>
                  {breadcrumbs.map(({ match, breadcrumb }) => (
                    <Link key={match.url} to={match.url}
                    className={match.pathname === location.pathname ? "text-primary-500 text-sm" : "text-primary-75 text-sm "} >    {breadcrumb}/</Link>
            ))}
                </nav>
                <div className='flex justify-evenly'>
                  <div className='flex justify-between'>
                    <p>COURSE</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Course