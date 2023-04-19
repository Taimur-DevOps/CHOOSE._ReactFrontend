import React from 'react'

const LearnProgramDetails = () => {

const cards=[
  {id:0,title:"The Program allows you to develop essential leadership skills for effective team management and organizational success."},
  {id:1,title:"Through the Program, you will gain expertise in strategic planning to set goals, make informed decisions, and drive business growth."},
  {id:2,title:"Learn how to build a positive business culture through the Program, fostering collaboration, innovation, and inclusivity."},
  {id:3,title:"The Program provides insights into inclusive recruitment strategies for creating a diverse and motivated workforces."},
  {id:4,title:"Acquire knowledge of sustainable marketing practices through the Program, focusing on long-term environmental and social impact."},
  {id:5,title:"Learn meaningful customer engagement techniques in the Program to build strong customer relationships and drive loyalty."},
  {id:6,title:"Gain a comprehensive understanding of business fundamentals, including accounting, finance, marketing, operations, and human resources, through the Program."},
  
]

  return (
    <div className="  bg-slate-100">
      <div className="max-w-[1138px]  mx-auto  ">
        <div className="flex flex-col  flex-start">
          <div className="flex items-center justify-center py-[30px]">
            <h1 className="text-[40px] leading-[60px] font-semibold">What will you learn in this Program?</h1>
          </div>

       {   cards.map((item)=>{
            return(
              <div className='w-full border bg-[#F05A221C] border-primary px-[45px] pt-[24px] pb-[29px] rounded-[10px] flex gap-[18px] items-center mb-[24px]'>
              <span>icon</span>
              <p className='text-[22px] leading-[30px] font-semibold '>{item.title}</p>
            </div>
            );
          })
        }

        <div className="my-4 flex justify-center items-center " >
          <button className='bg-primary text-white font-semibold rounded-[8px] px-[28px] pt-[14px] pb-[15px] py-2 text-[32px] leading-[42.5px]'>ENROll NOW @ $50</button>
        </div>
         

          


       
        </div>
      </div>
    </div>
  )
}

export default LearnProgramDetails
