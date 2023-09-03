import { useState } from "react";

function App() {
  const [startCount, setStartCount]=useState(0)
  const [endCount, setEndCount]=useState(0)
  function increaseStartCount(){
    setStartCount((prev)=>prev+1)
  }
  function decreaseStartCount(){
    setStartCount((prev)=>prev-1)
  }
  function increaseEndCount(){
    setEndCount((prev)=>prev+1)
  }
  function decreaseEndCount(){
    setEndCount((prev)=>prev-1)
  }
  return (
    <div className="flex flex-col w-screen">
      <div className="flex flex-col lg:flex-row 2xl:pl-[7.43rem]">
        <div className="ml-8 lg:pl-[12.87rem] mt-2 lg:mt-10 ">
          <ul className="flex flex-row">
            <li className="mr-2 md:mr-10">Home</li>
            <li className="mr-2 md:mr-10">About</li>
            <li className="mr-2 md:mr-10">Schedule</li>
            <li className="mr-2 md:mr-10">Membership</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="flex ml-8 my-2">
          <h1 className="xl:ml-[22.75rem] md:mr-10 mr-2 lg:mt-10">Offers</h1>
          <button className=" lg:mt-7 text-white py-1 px-4 lg:py-2 rounded-full bg-[#F27A44] flex lg:px-8 text-base">
            Courses
          </button>
        </div>
      </div>

      <div className="bg-yellow-200 bg-opacity-25 flex flex-col md:flex-row items-center justify-between lg:pb-[13rem]">
        <div className="ml-8 mt-5 lg:ml-28 lg:mt-[8.83rem]">
          <img src="img/Ellipse 46.png" alt="elipse" className="ml-5 mt-5" />
          <p className="my-5">Discover the beauty of the tropics</p>
          <h1 className="text-2xl lg:text-6xl">Tropical Destinations For Student</h1>
          <div>
            <p className="my-12 text-[#505C59]">
              Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi
              bibendum integer rutrum nisi. A nec nisl vitae{" "}
            </p>
          </div>
          <button className="py-2 mb-2 lg:mb-[12.938rem] text-white rounded-full bg-[#F27A44] flex px-8 text-base">
            Sign UP
          </button>
        </div>
        <div className="mx-10">
          <img src="img/Ellipse 49.png" alt="elipse49" />
        </div>
        <div className="flex-shrink-0">
          <img src="img\Group 171.png" alt="Group" />
          <img src="img/Subtract (2).png" alt="sub" />
        </div>
      </div>
      <div className="flex justify-end mt-12 lg:mr-[14.25rem]">
        <img src="img/Subtract (3).png" alt="jbj" className="ml-auto" />
      </div>
      <div className="bg-white ml-4 pl-2 xl:pl-[15rem] pt-12 flex flex-col md:flex-row">
        <div className="lg:mr-[9.688rem]">
          <div className="p-6 flex items-center shadow-md w-[22.5rem] h-[8.25rem]">
            <div>
              <img src="img/avatar (3).png" alt="bb" />
            </div>
            <div className="mx-3">
              <h1 className="font-medium">Jenny Wilson</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
            </div>
          </div>
          <div className="p-6 flex items-center my-12 shadow-md w-[22.5rem] h-[8.25rem]">
            <div>
              <img src="img/avatar (2).png" alt="bb" />
            </div>
            <div className="mx-3">
              <h1 className="font-medium">Jenny Wilson</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
            </div>
          </div>
          <div className="p-6 mb-4 lg:mb-[15.063rem] flex items-center shadow-md w-[22.5rem] h-[8.25rem]">
            <div>
              <img src="img/avatar (1).png" alt="bb" />
            </div>
            <div className="mx-3 ">
              <h1 className="font-medium">Jenny Wilson</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
            </div>
          </div>
        </div>
        <div className="ml-8 lg:mr-[7rem]">
          <img src="img/Ellipse 46.png" alt="mnbm" />
        </div>
        <div className="ml-8 my-4 flex flex-col">
          <h1 className="font-semibold	">Tropical Adventure for Students.</h1>
          <p className="pb-5">Student Tropical Vacation: Relax and Recharge</p>
          <ul className="list-disc mb-2 lg:mb-[3.75rem]">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Massa quis natoque sit quam</li>
            <li>Eros non pellentesque elit</li>
            <li>tortor id euismod habitant</li>
            <li>Sed suspendisse id in ultrices</li>
          </ul>
          <button className="py-4 px-[3.125rem] text-white rounded-full bg-[#F27A44]">
            Explore More
          </button>
        </div>
      </div>

      <div className="ml-4 lg:ml-[7.438rem]">
        <h1 className="font-medium text-4xl leading-2.5 mb-4 lg:mb-[3.75rem]">
          Our Destinations
        </h1>
        <div className="overflow-x-auto mb-[4.375rem] w-full">
          <div className="flex flex-row flex-nowrap">
            <div className="rounded-3xl flex-initial lg:w-60 shadow-md border border-1 border-gray-200 mr-5">
              <div className="lg:w-60">
              <img src="img/card-image.png" alt="harward" />
              </div>
              <h1 className="font-black	 p-6">Harvard University</h1>
              <div className="flex flex-row items-center p-6">
                <div className="mr-4 ">
                  <h1>Cambridge, Massachusetts, UK</h1>
                </div>
                <div className="flex  bg-#F2F2F2; rounded-[3.125rem] p-[0.625rem]">
                  <img src="img/dot.png" alt="dot" />
                  <img className="mx-[0.25rem]" src="img/dot.png" alt="dot" />
                  <img src="img/dot.png" alt="dot" />
                </div>
              </div>
            </div>

            <div className="rounded-3xl shadow-md border border-1 border-gray-200 mr-5">
            <div className="lg:w-60">
              <img src="img/card-image (1).png" alt="harward" /></div>
              <h1 className="font-black	 p-6">Oxford University</h1>
              <div className="flex flex-row items-center p-6">
                <div className="mr-4 ">
                  <h1>Oxford, England</h1>
                </div>
                <div className="flex  bg-#F2F2F2; rounded-[3.125rem] p-[0.625rem]">
                  <img src="img/dot.png" alt="dot" />
                  <img className="mx-[0.25rem]" src="img/dot.png" alt="dot" />
                  <img src="img/dot.png" alt="dot" />
                </div>
              </div>
            </div>

            <div className="rounded-3xl shadow-md border border-1 border-gray-200 mr-5">
            <div className="lg:w-60">

              <img src="img/card-image (2).png" alt="harward" />
              </div>
              <h1 className="font-black	 p-6">Stanford University</h1>
              <div className="flex flex-row items-center p-6">
                <div className="mr-4 ">
                  <h1>Stanford, California</h1>
                </div>
                <div className="flex  bg-#F2F2F2; rounded-[3.125rem] p-[0.625rem]">
                  <img src="img/dot.png" alt="dot" />
                  <img className="mx-[0.25rem]" src="img/dot.png" alt="dot" />
                  <img src="img/dot.png" alt="dot" />
                </div>
              </div>
            </div>

            <div className="rounded-3xl shadow-md border border-1 border-gray-200 mr-5">
            <div>

              <img src="img/card-image (3).png" alt="harward" />
            </div>
              <h1 className="font-black	 p-6">Nanyang Technology</h1>
              <div className="flex flex-row items-center p-6">
                <div className="mr-4 ">
                  <h1>Nanyang Ave, Singapura</h1>
                </div>
                <div className="flex  bg-#F2F2F2; rounded-[3.125rem] p-[0.625rem]">
                  <img src="img/dot.png" alt="dot" />
                  <img className="mx-[0.25rem]" src="img/dot.png" alt="dot" />
                  <img src="img/dot.png" alt="dot" />
                </div>
              </div>
            </div>
                        <div className="rounded-3xl shadow-md border border-1 border-gray-200 mr-5">
                        <div className="lg:w-60">
              <img src="img/card-image.png" alt="harward" /></div>
              <h1 className="font-black	 p-6">Harvard University</h1>
              <div className="flex flex-row items-center p-6">
                <div className="mr-4 ">
                  <h1>Cambridge, Massachusetts, UK</h1>
                </div>
                <div className="flex  bg-#F2F2F2; rounded-[3.125rem] p-[0.625rem]">
                  <img src="img/dot.png" alt="dot" />
                  <img className="mx-[0.25rem]" src="img/dot.png" alt="dot" />
                  <img src="img/dot.png" alt="dot" />
                </div>
              </div>
            </div>

            <div className="rounded-3xl shadow-md border border-1 border-gray-200 mr-5">
            <div className="lg:w-60">

              <img src="img/card-image (1).png" alt="harward" />
            </div>
              <h1 className="font-black	 p-6">Oxford University</h1>
              <div className="flex flex-row items-center p-6">
                <div className="mr-4 ">
                  <h1>Oxford, England</h1>
                </div>
                <div className="flex  bg-#F2F2F2; rounded-[3.125rem] p-[0.625rem]">
                  <img src="img/dot.png" alt="dot" />
                  <img className="mx-[0.25rem]" src="img/dot.png" alt="dot" />
                  <img src="img/dot.png" alt="dot" />
                </div>
              </div>
            </div>

            <div className="rounded-3xl shadow-md border border-1 border-gray-200 mr-5">
            <div className="lg:w-60">

              <img src="img/card-image (2).png" alt="harward" />
            </div>
              <h1 className="font-black	 p-6">Stanford University</h1>
              <div className="flex flex-row items-center p-6">
                <div className="mr-4 ">
                  <h1>Stanford, California</h1>
                </div>
                <div className="flex  bg-#F2F2F2; rounded-[3.125rem] p-[0.625rem]">
                  <img src="img/dot.png" alt="dot" />
                  <img className="mx-[0.25rem]" src="img/dot.png" alt="dot" />
                  <img src="img/dot.png" alt="dot" />
                </div>
              </div>
            </div>

            <div className="rounded-3xl shadow-md border border-1 border-gray-200 mr-5">
            <div >

              <img src="img/card-image (3).png" alt="harward" />
              </div>
              <h1 className="font-black	 p-6">Nanyang Technology</h1>
              <div className="flex flex-row items-center p-6">
                <div className="mr-4 ">
                  <h1>Nanyang Ave, Singapura</h1>
                </div>
                <div className="flex  bg-#F2F2F2; rounded-[3.125rem] p-[0.625rem]">
                  <img src="img/dot.png" alt="dot" />
                  <img className="mx-[0.25rem]" src="img/dot.png" alt="dot" />
                  <img src="img/dot.png" alt="dot" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:text-3xl lg:ml-[41.438rem]">
            <img src="img/left-arrow-svgrepo-com (1) 1.png" alt="left" />
            <h1 className="m-2">2/150</h1>
            <img src="img/left-arrow-svgrepo-com (1) 2.png" alt="right" />
          </div>
        </div>
      </div>

      <div className="ml-8 lg:ml-[7.438rem] flex flex-col md:flex-row items-center justify-between">
        <div>
          <p className="mb-2 lg:mb-[2.625rem]">Get 20% off for student</p>
          <h1 className="font-semibold text-4xl">
            Student discounts available.
          </h1>
          <p className="mb-2 lg:mb-[1.35rem]">Get ready for some fun in the sun!</p>

          <div className="ml-2 lg:ml-[1.438rem]">
            <ul className="list-disc mb-2 lg:mb-[3.75rem]">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Massa quis natoque sit quam</li>
              <li>Eros non pellentesque elit</li>
              <li>tortor id euismod habitant</li>
              <li>Sed suspendisse id in ultrices</li>
            </ul>
          </div>
          <button className="py-4 px-[3.125rem] text-white rounded-full bg-[#F27A44]">
            Explore More
          </button>
        </div>

        <div className="flex lg:mt-[17rem] self-start">
          <img src="img/Ellipse 49.png" alt="mnbm" />
        </div>

        <div className="flex justify-end lg:mr-[12.5rem]">
          <img src="img/Mask group.png" alt="xzfzf" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:justify-around lg:pb-[9.375 rem]">
        <div>
          <img src="img/Group 167.png" alt="vr" />
        </div>
        <div>
          <img src="img/Subtract.png" alt="sub" />
        </div>
        <div className="shadow-lg border border-1 border-gray-200">
          <div className="p-[1.875rem]">
            <h1 className="mb-[0.729rem]">Book now</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="p-[1.824rem]">
            <div>
              <h1 className="mb-[0.365rem]">City</h1>
              <input
                type="text"
                placeholder="placeholder"
                className="px-2 py-1.5 bg-gray-200 rounded-md"
              />
            </div>
          </div>
          <div className="flex">
            <div className="pl-[1.824rem]">
              <h1 className="mb-[0.365rem]">Arrival</h1>
              <input
                type="date"
               
                className="px-2 py-1.5  bg-gray-200 rounded-md"
              />
            </div>
            <div className="mx-2">
              <h1 className="mb-[0.365rem]">Departure</h1>
              <input
                type="date"
               
                className="px-2 py-1.5  bg-gray-200 rounded-md"
              />
            </div>
          </div>
          <div className="flex">
            <div className="pl-[1.824rem]">
              <h1 className="mb-[0.365rem]">Star</h1>

              <div className="flex">
                <button onClick={decreaseStartCount} className="bg-gray-200 text-black text-2xl py-1 px-2">-</button>
              <p className="px-2 text-center mx-1 py-1.5 w-24 bg-gray-200 rounded-md">{startCount}</p>
              <button onClick={increaseStartCount} className="bg-gray-200 font-bold text-black text-2xl py-1 px-2">+</button>
              </div>
            </div>
            <div className="mx-2">
              <h1 className="mb-[0.365rem]">Room</h1>
              <div className="flex">
                <button onClick={decreaseEndCount} className="bg-gray-200  text-black text-2xl py-1 px-2">-</button>
              <p className="px-2 text-center mx-1 py-1.5 w-24 bg-gray-200 rounded-md">{endCount}</p>
              <button onClick={increaseEndCount} className="bg-gray-200  font-bold text-black text-2xl py-1 px-2">+</button>
              </div>
            </div>
          </div>
          <div className="my-4 ml-[1.875rem]">
            <button className="bg-black text-white  w-24  text-xs px-2 py-3">BOOK NOW</button>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-center ">
          <h1 className="my-4 lg:mb-[4.375rem] text-4xl">Testimonials</h1>
        </div>
        <div className="lg:ml-[7.438rem] justify-around flex lg:flex-row flex-col lg:mb-[15.375rem] ">
          <div className="lg:mr-[6.25rem] flex flex-col justify-center items-center">
            <div>
              <img className="mb-4" src="img/Ellipse 1.png" alt="placeholder" />
            </div>
            <h1>Corey Korsgaard</h1>
            <img className="my-4" src="img/Vector 1.png" alt="knk" />
            <h1 className="w-[18.5rem] font-normal	text-center  py-4">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </h1>
          </div>

          <div className="lg:mr-[6.25rem] flex flex-col justify-center items-center">
            <div>
              <img
                className="mb-4"
                src="img/Ellipse 1 (1).png"
                alt="placeholder"
              />
            </div>
            <h1>Jakob Aminoff</h1>
            <img className="my-4" src="img/Vector 1.png" alt="knk" />
            <h1 className="w-[18.5rem] font-normal	text-center  py-4">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </h1>
          </div>

          <div className="lg:mr-[6.25rem] flex flex-col justify-center items-center">
            <div>
              <img
                className="mb-4"
                src="img/Ellipse 1 (2).png"
                alt="placeholder"
              />
            </div>
            <h1>Carla Press</h1>
            <img className="my-4" src="img/Vector 1.png" alt="knk" />
            <h1 className="w-[18.5rem] font-normal	text-center  py-4">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col self-center justify-self-center lg:mb-[3.25rem]">
        <h1 className="font-semibold text-3xl lg:text-4xl text-center	 mb-8 lg:w-[35rem]">
          Student Special: Discounted rates on tropical getaways!
        </h1>
        <p className="lg:ml-[4rem] text-center lg:w-[26.43rem]">
          Let’s embody your beautiful ideas together, simplify the way you
          visualize your next big things.
        </p>
      </div>

      <div className="ml-4 lg:ml-[12.25rem] lg:mb-[9rem] flex flex-col md:flex-row">
        <div className="flex lg:mr-[2.063rem]">
          <p className="lg:mr-[2.875rem]">Privacy Policy</p>
          <p className="lg:mr-[2.875rem]">Terms of Use</p>
          <p className="lg:mr-[2.875rem]">Sales and Refunds</p>
          <p>Legal</p>
        </div>
        <div className="flex">
          <p className="lg:mr-[2.375rem]">About</p>
          <p className="lg:mr-[2.375rem]">Schedules</p>
          <p className="lg:mr-[2.375rem]">Pricing</p>

          <p className="lg:mr-[2.375rem]">Membership</p>
          <p>Joins</p>
        </div>
      </div>
    </div>
  );
}

export default App;
