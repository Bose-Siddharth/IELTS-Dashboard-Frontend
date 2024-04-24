import React from 'react'
import Chart from "../../assets/chart.png"
import Green from "../../assets/green.png"
import Red from "../../assets/red.png"
import BriefCase from "../../assets/briefcase.png"
import Clock from "../../assets/clock.png"
import Person from "../../assets/person.png"
import CircularProgress from '../CircularProgressBar'
import VerticalProgressBar from '../VerticalProgressBar'

import { ChevronDownIcon } from "@heroicons/react/20/solid";

import CircleProgress from '../CircleProgress'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';




const Dashboard = ({isOpen}) => {
    const data = [
        { name: '01', x: 30, y: 23, z: 12 },
        { name: '02', x: 22, y: 30, z: 48 },
        { name: '03', x: 13, y: 15, z: 32 },
        { name: '04', x: 44, y: 35, z: 23 },
        { name: '05', x: 35, y: 45, z: 20 },
        { name: '06', x:46, y: 25, z: 29 },
        { name: '07', x: 37, y: 17, z: 46 },
        { name: '08', x: 28, y: 32, z: 45 },
        { name: '09', x: 19, y: 43, z:38 },
    ];
    const radius1 = [8, 8, 0, 0];
    const radius3 = [0, 0, 8, 8];
    const percentage = 66;
  return (
    <div className={`h- w-full  pt-2  ${!isOpen? 'pl-16' :'pl-6'}`}>
     <div className='w-[auto]   flex flex-col'> 
     <div className='md:flex  sm:grid pt-5 justify-between'>

       
            <div className='font-semibold text-[#060606] text-3xl '>Overview</div>
           

        

        <div className='flex border border-[#FFFFFF] h-full w-auto px-5 rounded-full items-center'>
        <div className='text-[#000000] text-lg font-normal'>Last 30 days</div>
        {/* <img src={Arrow}  className='h-[15px] w-[20p] '/> */}
        <div className="p-3 cursor-pointer">
              <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              /></div>
        <div className='rotate-90  h-[55px] w-[10px] text-xl'>
        
         </div>
        </div>
        
        
     </div>

     <div className='pt-5 grid xl:grid-cols-4  md:grid-cols-2 sm:grid-cols-1 gap-20 md:gap-20 xl:gap-32 pl-5'>
            {/* First */}
           
            <div className='flex flex-col gap-2'>
          
             <div className='h-[50px] w-[50px] rounded-full bg-[#D398E7] flex justify-center'>
              <img src={Chart} className='object-none '/>
            </div>
                
                <h2 className='text-[#797979] text-xl font-semibold pt-3'>Total  Students</h2>
                <div className='text-[#060606] text-3xl font-semibold'>53000</div>
                <div className='flex gap-2 pt-1'>
                    <img src={Green} className='object-contain'/>
                    <div className='text-[#060606] text-sm'>12% increase from last month</div>
                </div>
            </div>

            {/* second */}

            <div className='flex flex-col gap-2'>
             <div className='h-[50px] w-[50px] rounded-full bg-[#E89271] flex justify-center'>
              <img src={BriefCase} className='object-none '/>
            </div>
                
                <h2 className='text-[#797979] text-xl font-semibold pt-3'>Modules</h2>
                <div className='flex gap-1'>
                    <div className='text-[#060606] text-3xl font-semibold'>95</div>
                    <div className='text-[#060606] font-semibold pt-2 text-xl'>/100</div>
                </div>
                <div className='flex gap-2 pt-1'>
                    <img src={Red} className='object-contain'/>
                    <div className='text-[#060606] text-sm'>10% decrease from last month</div>
                </div>
            </div>

            {/* third */}

            <div className='flex flex-col gap-2'>
             <div className='h-[50px] w-[50px] rounded-full bg-[#70A1E5] flex justify-center'>
              <img src={Clock} className='object-none '/>
            </div>
                
                <h2 className='text-[#797979] text-xl font-semibold pt-3'>Time spent</h2>

                <div className='flex gap-1'>
                    <div className='text-[#060606] text-3xl font-semibold'>1022</div>
                    <div className='text-[#060606] font-semibold pt-2 text-xl'>/1200</div>
                </div>
                <div className='flex gap-2 pt-1'>
                    <img src={Green} className='object-contain'/>
                    <div className='text-[#060606] text-sm '>8% increase from last month</div>
                </div>
            </div>

            {/* forth */}

            <div className='flex flex-col gap-2'>
             <div className='h-[50px] w-[50px] rounded-full bg-[#F0C274] flex justify-center'>
              <img src={Person} className='object-none '/>
            </div>
                
                <h2 className='text-[#797979] text-xl font-semibold pt-3'>Total  Students</h2>
                <div className='flex gap-1'>
                    <div className='text-[#060606] text-3xl font-semibold'>101</div>
                    <div className='text-[#060606] font-semibold pt-2 text-xl'>/120</div>
                </div>
                <div className='flex gap-2 pt-1'>
                    <img src={Green} className='object-contain'/>
                    <div className='text-[#060606] text-sm'>2% increase from last month</div>
                </div>
            </div>

            
     </div>
     

     {/* Module breakdown and Overall Progress */}

     <div className='pt-20  justify-between ml-8 lg:flex md:grid md:grid-cols-1'>

     {/* first part */}

             <div className=''>
             <div className='text-[#000000] text-2xl font-semibold'>Module Breakdown</div>
            <div className='grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-16'>
                <div className='flex gap-2 pt-5 items-baseline'>
                    <div className='h-[16px] w-[16px] rounded-full bg-[#FFB200]'></div>
                    <div className='text-xl'>Listening</div>
                </div>
                <div className='flex gap-2 pt-5 items-baseline'>
                    <div className='h-[16px] w-[16px] rounded-full bg-[#4339F2]'></div>
                    <div className='text-xl'>Reading</div>
                </div>
                <div className='flex gap-2 pt-5 items-baseline'>
                    <div className='h-[16px] w-[16px] rounded-full bg-[#02A0FC]'></div>
                    <div className='text-xl'>Speaking</div>
                </div>
                <div className='flex gap-2 pt-5 items-baseline'>
                    <div className='h-[16px] w-[16px] rounded-full bg-[#FF3A29]'></div>
                    <div className='text-xl'>Writing</div>
                </div>
                
            </div>

            {/* <div className='pt-8 flex gap-20'>
            <CircularProgressBar progress={67} color={'#E2FBD7'} cirColor={'#34B53A'}/>
            <CircularProgressBar progress={46} color={'#DAD7FE'} cirColor={'#4339F2'}/>
            <CircularProgressBar progress={25}  color={'#FFE5D3'} cirColor={'#FF3A29'}/>
            <CircularProgressBar progress={67} color={'#CCF8FE'} cirColor={'#34B53A'}/>
            </div> */}
            <div className='pt-8 grid xl:grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 gap-16'>

            <CircleProgress percentage={85} color1={'#34B53A'} color2={'#E2FBD7'}/>
            <CircleProgress percentage={45} color1={'#4339F2'} color2={'#DAD7FE'}/>
            <CircleProgress percentage={85} color1={'#FF3A29'} color2={'#FFE5D3'}/>
            <CircleProgress percentage={45} color1={'#34B53A'} color2={'#CCF8FE'}/>

            

                  


            </div>
            

        

            <div className='pt-10 text-[#797979]'>Percentage shows the completion of respective modules</div>
                </div>

        {/* SemiSpherical ProgressBar place */}


         <div className='flex mx-auto items-center'>
            {/* <div className='flex flex-col gap-12 '> */}
           <div className=' text-2xl font-semibold'> SemiSpherical Progress Bar</div>
            {/* <div className='text-2xl font-semibold text-[#000000]'>Overall Progress</div>
                   <div className='lg:pl-8'><SemiSpherical progress={90}/></div>  */}
                  

                   {/* <GaugeComponent/> */}

            {/* <div className='grid xl:grid-cols-4 sm:grid-cols-2  gap-8 pr-5'>
                <div>
                    <div className='flex flex-col  text-2xl font-semibold'>95</div>
                    <div className='text-[#797979] pt-2'>Total Project</div>
                </div>
                <div>
                    <div className='flex flex-col gap-5 text-2xl font-semibold text-[#1A932E]'>26</div>
                    <div className='text-[#797979] pt-2'>Completed</div>
                </div>
                <div>
                    <div className='flex flex-col gap-5 text-2xl font-semibold text-[#DFA510]'>35</div>
                    <div className='text-[#797979] pt-2'>Delayed</div>
                </div>
                <div>
                    <div className='flex flex-col gap-5 text-2xl font-semibold text-[#E65F2B]'>35</div>
                    <div className='text-[#797979] pt-2'>On going</div>
                </div>
                
            </div> */}
            
              


        </div>
     </div>

     {/* Reading,speaking and listening progressbar */}

     <div className='pt-16 flex flex-col ml-8'>
        <div className='lg:flex sm:grid sm:grid-cols-1 gap-16'>
            <div className='flex gap-2'>
                <div className='h-[15px] w-[15px] rounded-full bg-[#4339F2] mt-1'></div>
                <div className='font-semibold'>Reading</div>
            </div>

            <div className='flex gap-2'>
                <div className='h-[15px] w-[15px] rounded-full bg-[#34B53A] mt-1'></div>
                <div className='font-semibold'>Speaking</div>
            </div>

            <div className='flex gap-2'>
                <div className='h-[15px] w-[15px] rounded-full bg-[#FFB200] mt-1'></div>
                <div className='font-semibold'>Listening</div>
            </div>
        </div>


        <div className='pt-16 flex '>
            <div className='flex flex-col md:gap-16 gap-5 md:pt-32 pt-36 '>
                <div className='text-[#797979] text-sm'>400</div>
                <div className='text-[#797979] text-sm'>300</div>
                <div className='text-[#797979] text-sm'>200</div>
                <div className='text-[#797979] text-sm'>100</div>
                <div className='text-[#797979] text-sm'>0</div>
            </div>
            {/* <div className='xl:flex md:grid md:grid-cols-6 sm:grid-cols-4 sm:grid grid-cols-4 gap-16'>
            <div className='flex flex-col gap-4'>
            <VerticalProgressBar progress={100} height={225} width={15} colors={['#4339F2', '#34B53A', '#FFB200']} />
            <div className='text-[#797979] text-sm'>01</div>
            </div>
            <div className='flex flex-col gap-4'>
            <VerticalProgressBar progress={33} height={225} width={15} colors={['#4339F2', '#34B53A', '#FFB200']} />
            <div className='text-[#797979] text-sm'>02</div>
            </div>
            <div className='flex flex-col gap-4'>
            <VerticalProgressBar progress={67} height={225} width={15} colors={['#4339F2', '#34B53A', '#FFB200']} />
            <div className='text-[#797979] text-sm'>03</div>
            </div>
            <div className='flex flex-col gap-4'>
            <VerticalProgressBar progress={67} height={225} width={15} colors={['#4339F2', '#34B53A', '#FFB200']} />
            <div className='text-[#797979] text-sm'>04</div>
            </div>
            <div className='flex flex-col gap-4'>
            <VerticalProgressBar progress={67} height={225} width={15} colors={['#4339F2', '#34B53A', '#FFB200']} />
            <div className='text-[#797979] text-sm'>05</div>
            </div>
            <div className='flex flex-col gap-4'>
            <VerticalProgressBar progress={67} height={225} width={15} colors={['#4339F2', '#34B53A', '#FFB200']} />
            <div className='text-[#797979] text-sm'>06</div>
            </div>
            <div className='flex flex-col gap-4'>
            <VerticalProgressBar progress={100} height={225} width={15} colors={['#4339F2', '#34B53A', '#FFB200']} />
            <div className='text-[#797979] text-sm'>07</div>
            </div>
            <div className='flex flex-col gap-4'>
            <VerticalProgressBar progress={67} height={225} width={15} colors={['#4339F2', '#34B53A', '#FFB200']} />
            <div className='text-[#797979] text-sm'>08</div>
            </div>
            <div className='flex flex-col gap-4'>
            <VerticalProgressBar progress={67} height={225} width={15} colors={['#4339F2', '#34B53A', '#FFB200']} />
            <div className='text-[#797979] text-sm'>09</div>
            </div>
            <div className='flex flex-col gap-4'>
            <VerticalProgressBar progress={67} height={225} width={15} colors={['#4339F2', '#34B53A', '#FFB200']} />
            <div className='text-[#797979] text-sm'>10</div>
            </div>
            <div className='flex flex-col gap-4'>
            <VerticalProgressBar progress={67} height={225} width={15} colors={['#4339F2', '#34B53A', '#FFB200']} />
            <div className='text-[#797979] text-sm'>11</div>
            </div>
            <div className='flex flex-col gap-4'>
            <VerticalProgressBar progress={67} height={225} width={15} colors={['#4339F2', '#34B53A', '#E5AE21']} />
            <div className='text-[#797979] text-sm'>12</div>
            
            </div>
           

            </div> */}
            <BarChart width={700} height={500} data={data} barGap={50}>
                    <CartesianGrid stroke="transparent" strokeWidth={0} />
                    <XAxis dataKey="name" axisLine={false} />
                    <YAxis tick={false} axisLine={false}/>
                    <Bar dataKey="x" stackId="a" fill="#4339F2"  barSize={18} radius={radius3}  />
                    <Bar dataKey="y" stackId="a" fill="#34B53A" barSize={18}  />
                    <Bar dataKey="z" stackId="a" fill="#FFB200" barSize={18} radius={radius1} />
          </BarChart>
        </div>
     </div>

     </div>
    </div>
  )
}

export default Dashboard
