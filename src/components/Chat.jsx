import Student1 from '../assets/images/avatars/student1.jpg';
import Send from '../assets/icons/send.svg';


const Chat = () => {
    return (
        <div className='max-w-full flex h-[543px] md:ml-5 md:w-[48%] mt-[18px] justify-between rounded-b-3xl rounded-t-lg shadow-md  flex-col pt-4'>
            <div className="flex self-start pt-2 pl-2 pb-2 border-b border-b-neutral-40 items-center w-full">
                <img src={Student1} className='rounded-full mr-3' width='60px' height='60px'  alt='person' />
                <p className='text-primmary-300'>Smith Blacks</p>
            </div>
            <div className='w-[100%] flex px-6 justify-between rounded-b-3xl h-[89px]  bg-neutral-40'>
                <input type='text' placeholder='Enter your message' className='bg-neutral-40 focus:outline-none outline-none border-none' />
                <button><img src={Send} alt="send icon" /></button>
            </div>
        </div>
    )
}
export default Chat;