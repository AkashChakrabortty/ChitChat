import { BiEditAlt } from 'react-icons/bi';
import { GiThreeFriends } from 'react-icons/gi';
import { AiOutlineComment } from 'react-icons/ai';
import { AiOutlineLike } from 'react-icons/ai';

export const profileLinkData = [
    {
        id: 1,
        icon: <BiEditAlt />,
        link: '/profileInfoEdit',
        name: 'Info Edit'
    },
    {
        id: 2,
        icon: <GiThreeFriends />,
        link: '/friends',
        name: 'Friends'
    },
    {
        id: 3,
        icon: <AiOutlineComment />,
        link: '/comments',
        name: 'Comments'
    },
    {
        id: 4,
        icon: <AiOutlineLike />,
        link: '/likes',
        name: 'Likes'
    },
]