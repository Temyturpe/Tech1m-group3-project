import React from 'react';
import More from '../assets/icons/more.svg';
import Student1 from '../assets/images/avatars/student1.jpg';
import Notification from '../assets/icons/notification.svg';
import Chat from '../components/Chat';
// import Student2 from '../assets/images/avatars/student2.jpg';
// import Student3 from '../assets/images/avatars/student3.jpg';
// import Student4 from '../assets/images/avatars/student4.jpg';
// import Student5 from '../assets/images/avatars/student5.jpg';
// import Student6 from '../assets/images/avatars/student6.jpg';

const Messages = () => {
  return (
    <div className='w-full'>
        <div className="content w-full flex">
            <div className="left w-0 md:w-[20%]"></div>
            <div className="right w-full md:w-[80%] mt-28 p-6">
              <div className='w-[100%]'>
                <Chat />
                {/* <div className='bg-primary-300 flex items-center h-[122px] w-full text-primary-50 shadow-md p-4 rounded-md'>
                  <h1 className='text-[24px] font-[400px]'>Messages</h1>
                </div>
                <div className='flex flex-col md:flex-row'>
                  <div>
                    <div className='shadow-md rounded-lg w-full md:w-[347px] mt-[18px] py-4 px-6'>
                      <div className='flex  justify-between items-center'>
                        <p className='text-primary-300 text-base w-[50%]'>All messages<span className='text-500 block font-bold text-2xl'>24</span></p>
                        <button className='flex border border-primary-300 rounded items-center p-[10px]'><img src={More} className='mr-2' alt='more' /><span className='text-xs md:text-base text-primary-100'>Mark all as read</span></button>
                      </div>
                    </div>
                    <div className='pt-4 pl-3'>
                      <div>
                        <h2 className='text-primary-500'>Messages</h2>
                          <ul>
                            <li className='flex items-center w-fit mb-[20px] mt-[16px] md:bg-neutral-40'>
                              <img src={Student1} alt="" className='w-[32px] h-[32px] object-cover rounded-full '/>
                              <div className="info flex w-full items-center flex-col ml-2 gap-3">
                                <div className="name w-full">
                                  <span className="name text-primary-100 text-sm mb-3">Smith Blacks</span>
                                  <div className="chat relative"><img src={Notification} alt="" className='md:w-6 w-5' /><span className=" absolute -top-1 left-3 px-[4px] py-[1px] md:px-[5px] md:py-[1px] text-[10px] md:text-xs bg-red text-white-30 rounded-full">5</span></div>
                                </div>
                              </div>
                            </li>
                            <li className='flex items-center w-fit mb-[20px] mt-[16px] md:bg-neutral-40'>
                              <img src={Student1} alt="" className='w-[32px] h-[32px] object-cover rounded-full '/>
                              <div className="info flex w-full items-center flex-col ml-2 gap-3">
                                <div className="name w-full">
                                  <span className="name text-primary-100 text-sm mb-3">Smith Blacks</span>
                                  <div className="chat relative"><img src={Notification} alt="" className='md:w-6 w-5' /><span className=" absolute -top-1 left-3 px-[4px] py-[1px] md:px-[5px] md:py-[1px] text-[10px] md:text-xs bg-red text-white-30 rounded-full">5</span></div>
                                </div>
                              </div>
                            </li>
                            <li className='flex items-center w-fit mb-[20px] mt-[16px] md:bg-neutral-40'>
                              <img src={Student1} alt="" className='w-[32px] h-[32px] object-cover rounded-full '/>
                              <div className="info flex w-full items-center flex-col ml-2 gap-3">
                                <div className="name w-full">
                                  <span className="name text-primary-100 text-sm mb-3">Smith Blacks</span>
                                  <div className="chat relative"><img src={Notification} alt="" className='md:w-6 w-5' /><span className=" absolute -top-1 left-3 px-[4px] py-[1px] md:px-[5px] md:py-[1px] text-[10px] md:text-xs bg-red text-white-30 rounded-full">5</span></div>
                                </div>
                              </div>
                            </li>
                            <li className='flex items-center w-fit mb-[20px] mt-[16px] md:bg-neutral-40'>
                              <img src={Student1} alt="" className='w-[32px] h-[32px] object-cover rounded-full '/>
                              <div className="info flex w-full items-center flex-col ml-2 gap-3">
                                <div className="name w-full">
                                  <span className="name text-primary-100 text-sm mb-3">Smith Blacks</span>
                                  <div className="chat relative"><img src={Notification} alt="" className='md:w-6 w-5' /><span className=" absolute -top-1 left-3 px-[4px] py-[1px] md:px-[5px] md:py-[1px] text-[10px] md:text-xs bg-red text-white-30 rounded-full">5</span></div>
                                </div>
                              </div>
                            </li>
                            <li className='flex items-center w-fit mb-[20px] mt-[16px] md:bg-neutral-40'>
                              <img src={Student1} alt="" className='w-[32px] h-[32px] object-cover rounded-full '/>
                              <div className="info flex w-full items-center flex-col ml-2 gap-3">
                                <div className="name w-full">
                                  <span className="name text-primary-100 text-sm mb-3">Smith Blacks</span>
                                  <div className="chat relative"><img src={Notification} alt="" className='md:w-6 w-5' /><span className=" absolute -top-1 left-3 px-[4px] py-[1px] md:px-[5px] md:py-[1px] text-[10px] md:text-xs bg-red text-white-30 rounded-full">5</span></div>
                                </div>
                              </div>
                            </li>
                            <li className='flex items-center w-fit mb-[20px] mt-[16px] md:bg-neutral-40'>
                              <img src={Student1} alt="" className='w-[32px] h-[32px] object-cover rounded-full '/>
                              <div className="info flex w-full items-center flex-col ml-2 gap-3">
                                <div className="name w-full">
                                  <span className="name text-primary-100 text-sm mb-3">Smith Blacks</span>
                                  <div className="chat relative"><img src={Notification} alt="" className='md:w-6 w-5' /><span className=" absolute -top-1 left-3 px-[4px] py-[1px] md:px-[5px] md:py-[1px] text-[10px] md:text-xs bg-red text-white-30 rounded-full">5</span></div>
                                </div>
                              </div>
                            </li>
                            <li className='flex items-center w-fit mb-[20px] mt-[16px] md:bg-neutral-40'>
                              <img src={Student1} alt="" className='w-[32px] h-[32px] object-cover rounded-full '/>
                              <div className="info flex w-full items-center flex-col ml-2 gap-3">
                                <div className="name w-full">
                                  <span className="name text-primary-100 text-sm mb-3">Smith Blacks</span>
                                  <div className="chat relative"><img src={Notification} alt="" className='md:w-6 w-5' /><span className=" absolute -top-1 left-3 px-[4px] py-[1px] md:px-[5px] md:py-[1px] text-[10px] md:text-xs bg-red text-white-30 rounded-full">5</span></div>
                                </div>
                              </div>
                            </li>
                          </ul>
                      </div>
                      
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
        </div>
    </div>
  )
}

export default Messages