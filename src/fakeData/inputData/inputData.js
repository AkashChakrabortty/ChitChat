import { IoMan } from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
export const inputData = [
    {
        id: 1,
        name: 'name',
        placeholder: 'Your Name',
        icon:  <IoMan />,
    },
    {
        id: 2,
        name: 'email',
        placeholder: 'Your Email Address',
        icon:  <AiOutlineMail />,
    },
    {
        id: 3,
        name: 'password',
        placeholder: 'Password',
        icon:  <RiLockPasswordLine />,
    },
]